import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Founding Partner of The Noub’s Law & Advisory, legal consultant to embassies in Russia, former teaching assistant at RUDN University.',
}

const TIMELINE = [
  { when: '2024 – present', role: 'Founding Partner', org: "The Noub's Law & Advisory", points: ['Leads cross-border negotiations across Africa, Europe, Eastern Europe and Latin America', 'Legal consultant to several embassies in Russia on commercial law, bilateral agreements and regulatory matters', 'Coordinates complex corporate obligations across multiple jurisdictions'] },
  { when: '2022 – 2023', role: 'Teaching Assistant', org: "Peoples' Friendship University of Russia (RUDN)", points: ['Institutional Economy and Finance for BBA students', 'General Economy with a pharmaceutical focus for medical students'] },
  { when: '2022', role: 'Market Research Analyst & Area Sales Manager', org: 'Smart Group pl sp. z o.o.', points: ['Market analysis and strategic positioning across Central and Eastern Europe', 'High-profile client acquisition and relationship management', 'Represented the company at major industry events, including SIAL Paris and ANUGA Germany'] },
]

export default function Experience() {
  return (
    <>
      <PageHeader title="Experience" subtitle="A decade at the intersection of law, finance and diplomacy." image="/images/rudn-university.jpg" imagePosition="center 25%" />
      <section className="section">
        <div className="container container--narrow" style={{ maxWidth: 1000 }}>
          <div className="timeline">
            {TIMELINE.map((e) => (
              <div key={e.org} className="timeline-item">
                <p className="t-label">{e.when}</p>
                <div>
                  <h2 className="t-h3">{e.role}</h2>
                  <p style={{ color: 'var(--slate)', marginTop: '0.2rem' }}>{e.org}</p>
                  <ul className="bullets" style={{ marginTop: '0.75rem' }}>
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: '3rem' }}>
            <Link href="/contact" className="btn btn--ink">Book a consultation</Link>
            <Link href="/research" className="text-link" style={{ alignSelf: 'center' }}>Education and research</Link>
          </div>
        </div>
      </section>
    </>
  )
}
