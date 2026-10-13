import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { DISSERTATION_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Research & Publications',
  description: 'Doctoral research on foreign capital in Cameroon (PhD, World Economy, RUDN University) and on cross-border payments integrity under AfCFTA.',
}

type Item = { label: string; title: string; subtitle?: string; meta: string; link?: { href: string; label: string } }

const ITEMS: Item[] = [
  {
    label: 'PhD dissertation · Economics',
    title: 'The Influence of Foreign Capital on the Socio-Economic Development of Cameroon',
    subtitle: 'Candidate of Economic Sciences, specialty 5.2.5 World Economy. RUDN University Dissertation Council PDS 0600.001.',
    meta: 'Defended 8 October 2026',
    link: { href: DISSERTATION_URL, label: 'View on the RUDN University dissertation council page' },
  },
  {
    label: 'PhD research · Law',
    title: 'Cross-Border Payments Integrity under AfCFTA',
    subtitle: 'A Private International Law Analysis of E-Procurement and Beneficial Ownership Transparency in Cameroon, Nigeria, Ghana, South Africa, and Mozambique.',
    meta: 'Private International Law · 2025 – 2027',
  },
  { label: 'LLM thesis', title: 'Corporate Law, Banking & Finance', meta: 'Graduated with honours' },
  { label: 'MBA thesis', title: 'International Finance & Banking', meta: 'Best graduate, RUDN Business School' },
]

const DEFENCE = [
  { src: '/images/defence-podium-portrait.jpg', alt: 'Presenting the dissertation at the RUDN University podium', pos: 'center 35%', cls: 'd-a' },
  { src: '/images/defence-podium-wide-2.jpg', alt: 'Presenting research findings to the dissertation council', pos: 'center', cls: 'd-b' },
  { src: '/images/defence-panel.jpg', alt: 'With members of the RUDN University dissertation council', pos: '42% 60%', cls: 'd-c' },
]

export default function Research() {
  return (
    <>
      <PageHeader title="Research & publications" subtitle="Academic work where law meets economics: how cross-border legal frameworks shape, and are shaped by, global capital flows." image="/images/defence-podium-wide.jpg" imagePosition="center 40%" />

      <section className="section">
        <div className="container container--narrow" style={{ maxWidth: 1000 }}>
          <p className="t-lead">
            Holding a doctorate in World Economy and pursuing doctoral research in Private International Law, Dr. Frank-Valere Yussa studies the questions his clients face in practice: what foreign capital does to a developing economy, and how payments and procurement can be kept clean as Africa&apos;s continental free trade area takes shape.
          </p>
          <div className="rows" style={{ marginTop: '3rem' }}>
            {ITEMS.map((it) => (
              <article key={it.title} style={{ paddingBlock: '2rem' }}>
                <p className="t-label">{it.label}</p>
                <h2 className="t-h3" style={{ marginTop: '0.4rem', fontSize: 'clamp(1.3rem, 2.2vw, 1.65rem)' }}>{it.title}</h2>
                {it.subtitle && <p className="t-body" style={{ marginTop: '0.6rem', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>{it.subtitle}</p>}
                <p className="t-small" style={{ marginTop: '0.6rem' }}>{it.meta}</p>
                {it.link && (
                  <p style={{ marginTop: '0.9rem' }}>
                    <a href={it.link.href} target="_blank" rel="noopener noreferrer" className="text-link">{it.link.label}</a>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <h2 className="t-h2">Doctoral defence</h2>
          <p className="t-body" style={{ marginTop: '0.75rem' }}>RUDN University, Moscow, 8 October 2026.</p>
          <div className="defence-grid" style={{ marginTop: '2.5rem' }}>
            {DEFENCE.map((d) => (
              <div key={d.src} className={`photo ${d.cls}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.src} alt={d.alt} loading="lazy" style={{ objectPosition: d.pos }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
