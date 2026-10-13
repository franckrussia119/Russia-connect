import Link from 'next/link'
import { Mail } from 'lucide-react'
import Wordmark from './Wordmark'
import SocialLinks from './SocialLinks'
import { SITE } from '@/lib/site'

const LINKS: [string, string][] = [['/', 'Home'], ['/skills', 'Expertise'], ['/experience', 'Experience'], ['/clients', 'Clients'], ['/research', 'Research'], ['/books', 'Books'], ['/contact', 'Contact']]

export default function Footer() {
  return (
    <footer className="bg-ink" style={{ color: 'rgba(255,255,255,0.68)' }}>
      <div className="container" style={{ paddingBlock: 'clamp(3.5rem, 7vw, 5.5rem) 2rem' }}>
        <div className="split split--7-5" style={{ alignItems: 'end', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <h2 className="t-h2" style={{ color: '#fff', maxWidth: '18ch' }}>Planning a deal that crosses borders?</h2>
            <p className="t-body" style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.72)' }}>
              Tell me about the transaction, the jurisdictions involved and your timeline. I reply personally.
            </p>
          </div>
          <div className="btn-row">
            <Link href="/contact" className="btn btn--brass">Book a consultation</Link>
            <a href={`mailto:${SITE.email}`} className="btn btn--ghost">Email directly</a>
          </div>
        </div>

        <div className="grid-3" style={{ paddingTop: '3rem', gridTemplateColumns: undefined }}>
          <div className="stack">
            <Wordmark />
            <p className="t-small" style={{ maxWidth: '34ch' }}>
              Corporate lawyer, economist and investment banker advising on transactions between Africa, Russia, Europe and Latin America.
            </p>
            <SocialLinks />
          </div>
          <nav aria-label="Footer" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem', alignContent: 'start' }}>
            {LINKS.map(([h, l]) => (
              <Link key={h} href={h} style={{ color: 'rgba(255,255,255,0.72)', padding: '0.2rem 0' }}>{l}</Link>
            ))}
          </nav>
          <div className="stack">
            <a href={`mailto:${SITE.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#fff', wordBreak: 'break-all' }}>
              <Mail size={16} style={{ flexShrink: 0 }} /> {SITE.email}
            </a>
            <p className="t-small" style={{ fontStyle: 'italic', fontFamily: 'var(--serif)', maxWidth: '40ch' }}>
              &ldquo;So do not fear, for I am with you; do not be dismayed, for I am your God.&rdquo; Isaiah 41:10
            </p>
          </div>
        </div>

        <p className="t-small" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          © {new Date().getFullYear()} {SITE.nameWithDegree}
        </p>
      </div>
    </footer>
  )
}
