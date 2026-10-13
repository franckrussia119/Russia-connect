import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import ContactForm from './contact-form'
import { SITE, LANGUAGES, REGIONS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a consultation with Dr. Frank-Valere Yussa on a cross-border transaction, negotiation or regulatory matter.',
}

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Tell me about your cross-border matter. I reply personally, usually within two working days." image="/images/frank-hero-moscow.jpg" imagePosition="center 35%" />

      <section className="section">
        <div className="container split split--7-5 split--top">
          <div>
            <h2 className="t-h2" style={{ marginBottom: '2rem' }}>Send a message</h2>
            <ContactForm />
          </div>

          <aside className="rows" aria-label="Contact details">
            <div>
              <p className="t-label">Email</p>
              <a href={`mailto:${SITE.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem', fontWeight: 600, wordBreak: 'break-all' }}>
                <Mail size={17} style={{ flexShrink: 0 }} /> {SITE.email}
              </a>
            </div>
            <div>
              <p className="t-label">Practice areas</p>
              <p className="t-body" style={{ marginTop: '0.35rem' }}>Corporate law, investment banking, international transactions, advisory and deal negotiations, embassy advisory.</p>
            </div>
            <div>
              <p className="t-label">Regions</p>
              <p className="t-body" style={{ marginTop: '0.35rem' }}>{REGIONS.join(', ')}.</p>
            </div>
            <div>
              <p className="t-label">Languages</p>
              <p className="t-body" style={{ marginTop: '0.35rem' }}>{LANGUAGES.map((l) => l.name).join(', ')}.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
