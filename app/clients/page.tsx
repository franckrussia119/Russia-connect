import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { REGIONS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Corporations, investors, embassies, entrepreneurs and public institutions advised across Africa, Russia, Europe and Latin America.',
}

const CLIENT_TYPES = [
  { title: 'Corporations', desc: 'Expanding into new markets and needing one advisor who covers the legal and financial sides.' },
  { title: 'Investment funds & private equity', desc: 'Acquisitions, buyouts and due diligence in emerging markets.' },
  { title: 'Embassies & diplomatic missions', desc: 'Commercial law, bilateral agreements and trade matters.' },
  { title: 'Government & public institutions', desc: 'Regulatory frameworks, procurement and cross-border cooperation.' },
  { title: 'Entrepreneurs', desc: 'Structuring ventures that are built to scale across borders.' },
  { title: 'Technology companies', desc: 'Market entry, partnerships and international contracts.' },
]

export default function Clients() {
  return (
    <>
      <PageHeader title="Clients" subtitle="Advising corporations, embassies, investors and entrepreneurs across Africa, Russia, Europe and Latin America." image="/images/frank-handshake-bench.jpg" imagePosition="center 40%" />

      <section className="section">
        <div className="container">
          <h2 className="t-h2" style={{ maxWidth: '20ch' }}>Who I work with</h2>
          <div className="grid-3" style={{ marginTop: '2.5rem', rowGap: '2.5rem' }}>
            {CLIENT_TYPES.map((c) => (
              <div key={c.title} style={{ borderTop: '2px solid var(--brass)', paddingTop: '1.25rem' }}>
                <h3 className="t-h3">{c.title}</h3>
                <p className="t-body" style={{ marginTop: '0.5rem' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-indigo">
        <div className="container container--narrow">
          <figure>
            <blockquote className="t-quote" style={{ color: '#fff' }}>
              &ldquo;Every engagement begins with the same principle: legal counsel divorced from economic reality is incomplete. My clients don&apos;t just get a lawyer. They get a partner who understands the financial architecture behind every legal decision.&rdquo;
            </blockquote>
            <figcaption style={{ marginTop: '1.5rem', color: 'var(--brass)', fontWeight: 600 }}>Frank-Valere Yussa, PhD</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2 className="t-h2">Where clients are served</h2>
            <div className="chips" style={{ marginTop: '1.5rem' }}>
              {REGIONS.map((r) => <span key={r} className="chip">{r}</span>)}
            </div>
          </div>
          <div className="stack-lg">
            <p className="t-body">Work is led from Moscow, with counterparties and mandates across five regions. Meetings take place in person or remotely, in the language that suits the client.</p>
            <p><Link href="/contact" className="btn btn--ink">Book a consultation</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}
