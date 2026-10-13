import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Cross-border M&A, deal negotiation, corporate finance and banking law, private international law, IPOs and leveraged buyouts.',
}

const CORE = [
  { title: 'Mergers & acquisitions', desc: 'Structuring and executing cross-border acquisitions from first due diligence to closing, with the regulatory work in each jurisdiction handled along the way and the structure built around the client’s objectives.' },
  { title: 'Advisory & deal negotiations', desc: 'Strategic advisor to corporations, investors and public institutions. Leads negotiations end to end, from opening positions and term sheets to final agreement, aiming for outcomes that last.' },
  { title: 'Corporate finance law', desc: 'Financing structures, capital raising and financial regulatory compliance, including equity offerings, debt financing and hybrid instruments.' },
  { title: 'Banking & financial regulation', desc: 'Banking law and financial-services regulation across international markets, keeping clients compliant without slowing growth.' },
  { title: 'Private international law', desc: 'Conflict of laws, international jurisdiction and cross-border legal frameworks, the subject of his doctoral research under AfCFTA.' },
  { title: 'Contract negotiation & drafting', desc: 'International commercial agreements, joint ventures, partnerships and multi-party contracts that protect the client and keep the relationship workable.' },
  { title: 'Due diligence', desc: 'Legal and financial due diligence for cross-border investments and acquisitions: risks identified, opportunities found, and findings a board can act on.' },
]

const SOLUTIONS = [
  {
    title: 'Initial public offerings',
    desc: 'Guiding companies through an IPO, from pre-listing structuring to prospectus and listing requirements, with the legal and financial workstreams coordinated as one.',
    img: '/images/rudn-university.jpg',
    points: [
      ['Pre-IPO restructuring', 'Corporate structure and governance ready for public markets'],
      ['Prospectus and compliance', 'Preparing and reviewing prospectuses and registration documents'],
      ['Underwriting', 'Negotiating underwriting agreements and deal structure'],
      ['After listing', 'Setting up ongoing reporting and governance obligations'],
    ],
  },
  {
    title: 'Leveraged buyouts',
    desc: 'Structuring and executing leveraged buyouts, including financing, security packages and regulatory compliance across jurisdictions.',
    img: "/images/stairs-colleague.jpg",
    points: [
      ['Financing architecture', 'Capital structures combining senior and subordinated debt'],
      ['Security and collateral', 'Drafting and negotiating security agreements'],
      ['Risk assessment', 'Legal and financial due diligence on the target'],
      ['Acquisition agreement', 'Purchase agreements, representations and warranties'],
    ],
  },
]

const REGIONS = [
  { region: 'Africa', items: ['Emerging-market investment', 'Infrastructure and development projects', 'Multi-jurisdictional compliance, including AfCFTA', 'International trade agreements'] },
  { region: 'Russia, Europe & Eastern Europe', items: ['Russia–Europe and Russia–Africa business corridors', 'Eastern European market entry', 'EU regulatory compliance', 'Pan-European transactions'] },
  { region: 'Latin America', items: ['Cross-border transaction structuring', 'Market entry strategy', 'Regulatory navigation', 'Partnership and joint-venture agreements'] },
  { region: 'Industries', items: ['Financial services and banking', 'Pharmaceuticals and healthcare', 'International trade', 'Diplomatic and government relations', 'Technology', 'Real estate and infrastructure'] },
]

export default function Skills() {
  return (
    <>
      <PageHeader title="Expertise" subtitle="Corporate law and finance for transactions that cross borders, led personally from first assessment to closing." image="/images/frank-office-blue-suit.jpg" imagePosition="center 8%" />

      <section className="section">
        <div className="container">
          <h2 className="t-h2" style={{ marginBottom: '2.5rem' }}>Core competencies</h2>
          <div className="rows">
            {CORE.map((c) => (
              <div key={c.title} className="row-item">
                <h3 className="t-h3">{c.title}</h3>
                <p className="t-body">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {SOLUTIONS.map((s, i) => (
        <section key={s.title} className={`section ${i === 0 ? 'bg-mist' : ''}`}>
          <div className="container split">
            <div className={`photo ${i % 2 ? '' : 'order-first-mobile'}`} style={{ aspectRatio: '4 / 5', order: i % 2 ? 2 : 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt="" loading="lazy" style={{ objectPosition: 'center 25%' }} />
            </div>
            <div>
              <h2 className="t-h2">{s.title}</h2>
              <p className="t-body" style={{ marginTop: '1rem' }}>{s.desc}</p>
              <div className="rows" style={{ marginTop: '2rem' }}>
                {s.points.map(([t, d]) => (
                  <div key={t} style={{ paddingBlock: '1.1rem' }}>
                    <p className="t-h4">{t}</p>
                    <p className="t-small" style={{ marginTop: '0.2rem' }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-indigo">
        <div className="container">
          <h2 className="t-h2" style={{ color: '#fff' }}>Regions and industries</h2>
          <div className="grid-4" style={{ marginTop: '2.5rem' }}>
            {REGIONS.map((r) => (
              <div key={r.region} style={{ borderTop: '2px solid var(--brass)', paddingTop: '1.25rem' }}>
                <h3 className="t-h3" style={{ color: '#fff' }}>{r.region}</h3>
                <ul className="bullets" style={{ marginTop: '0.75rem', color: 'rgba(255,255,255,0.75)' }}>
                  {r.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '3rem' }}><Link href="/contact" className="btn btn--brass">Discuss your transaction</Link></p>
        </div>
      </section>
    </>
  )
}
