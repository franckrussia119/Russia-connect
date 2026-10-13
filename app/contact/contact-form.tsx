'use client'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { SITE } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'
const EMPTY = { name: '', email: '', subject: '', message: '', company: '' }

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrors({})
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('sent')
        setForm(EMPTY)
        return
      }
      setStatus('error')
      if (data.error === 'validation') setErrors(data.errors || {})
      else if (data.error === 'rate_limited') setErrorMsg('Too many messages were sent from this connection. Wait a few minutes and send again, or email directly.')
      else setErrorMsg('Your message couldn’t be sent. Email directly instead; nothing you typed has been lost.')
    } catch {
      setStatus('error')
      setErrorMsg('Your message couldn’t be sent because the connection dropped. Check your connection and send again.')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" style={{ border: '1px solid var(--line)', borderTop: '3px solid var(--brass)', padding: '2rem', background: 'var(--mist)', borderRadius: 'var(--radius)' }}>
        <CheckCircle2 size={28} color="var(--brass-deep)" />
        <h2 className="t-h3" style={{ marginTop: '0.75rem' }}>Message sent</h2>
        <p className="t-body" style={{ marginTop: '0.5rem' }}>Thank you. I read every message personally and usually reply within two working days.</p>
        <button className="text-link" onClick={() => setStatus('idle')} style={{ marginTop: '1rem', background: 'none', border: 0, cursor: 'pointer', font: 'inherit' }}>Send another message</button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate style={{ display: 'grid', gap: '1.1rem' }}>
      <div className="grid-2" style={{ gap: '1.1rem' }}>
        <Field id="name" label="Name" error={errors.name}>
          <input id="name" className="form-input" autoComplete="name" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input id="email" type="email" className="form-input" autoComplete="email" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
        </Field>
      </div>
      <Field id="subject" label="Subject (optional)">
        <input id="subject" className="form-input" placeholder="For example: acquisition in Cameroon" value={form.subject} onChange={set('subject')} />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea id="message" className="form-input" rows={6} placeholder="The transaction, the jurisdictions involved and your timeline" value={form.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
      </Field>
      <div className="hp-field" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={set('company')} />
      </div>
      <div>
        <button type="submit" className="btn btn--ink" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {errorMsg && (
          <p role="alert" style={{ color: '#a12a2a', marginTop: '0.85rem', fontSize: '0.95rem' }}>
            {errorMsg} <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        )}
      </div>
    </form>
  )
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p id={`${id}-err`} style={{ color: '#a12a2a', fontSize: '0.9rem', marginTop: '0.35rem' }}>{error}</p>}
    </div>
  )
}
