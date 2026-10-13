import { NextRequest, NextResponse } from 'next/server'
import { SITE } from '@/lib/site'

// Contact form → email, via Resend (https://resend.com).
// Environment variables (set them in Coolify → your app → Environment Variables):
//   RESEND_API_KEY      required. Your Resend API key.
//   CONTACT_TO_EMAIL    where messages arrive. Defaults to the email in lib/site.ts.
//   CONTACT_FROM_EMAIL  sender, e.g. "Frank Yussa Website <contact@frankyussa.com>".
//                       Needs a domain verified in Resend. Until then, leave it
//                       empty: Resend's test sender is used, which can only
//                       deliver to the email address of your Resend account.
//                       Visitors get a confirmation email only when this is set.

export const dynamic = 'force-dynamic'

const hits = new Map<string, number[]>()
function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60_000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 5
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

async function send(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`)
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid' }, { status: 400 })
  }

  // Honeypot: real visitors never fill this hidden field.
  if (typeof body.company === 'string' && body.company.trim()) return NextResponse.json({ success: true })

  const name = String(body.name ?? '').trim().slice(0, 120)
  const email = String(body.email ?? '').trim().slice(0, 200)
  const subject = String(body.subject ?? '').trim().slice(0, 200)
  const message = String(body.message ?? '').trim().slice(0, 5000)

  const errors: Record<string, string> = {}
  if (!name) errors.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address, like name@company.com.'
  if (message.length < 10) errors.message = 'Write a short message, at least 10 characters.'
  if (Object.keys(errors).length) return NextResponse.json({ error: 'validation', errors }, { status: 422 })

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  if (rateLimited(ip)) return NextResponse.json({ error: 'rate_limited' }, { status: 429 })

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('Contact form: RESEND_API_KEY is not set; message not emailed.', { name, email, subject })
    return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  }

  const to = process.env.CONTACT_TO_EMAIL || SITE.email
  const from = process.env.CONTACT_FROM_EMAIL || 'Website contact form <onboarding@resend.dev>'

  try {
    await send(apiKey, {
      from,
      to: [to],
      reply_to: email,
      subject: `Website enquiry: ${subject || 'New message'} (from ${name})`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '-'}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${esc(name)}<br><strong>Email:</strong> ${esc(email)}<br><strong>Subject:</strong> ${esc(subject || '-')}</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
    })

    if (process.env.CONTACT_FROM_EMAIL) {
      // Confirmation to the visitor (only with a verified sending domain).
      await send(apiKey, {
        from,
        to: [email],
        reply_to: to,
        subject: 'Your message to Dr. Frank-Valere Yussa',
        text: `Dear ${name},\n\nThank you for your message. I have received it and will reply personally, usually within two working days.\n\nKind regards,\nDr. Frank-Valere Yussa\n${SITE.url}`,
      }).catch((e) => console.error('Contact form: confirmation email failed', e))
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Contact form: sending failed', e)
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }
}
