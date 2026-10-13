import Link from 'next/link'
import Hero from './_components/hero'
import { LANGUAGES, REGIONS, TESTIMONIALS, DISSERTATION_URL } from '@/lib/site'

const CREDENTIALS = [
  { value: 'PhD', detail: 'World Economy, RUDN University. Defended October 2026.' },
  { value: 'LLM', detail: 'Corporate Law, Banking & Finance. Graduated with honours.' },
  { value: 'MBA', detail: 'International Finance & Banking. Best graduate, RUDN Business School.' },
  { value: '9 languages', detail: 'Including English, French, Russian and Spanish.' },
]

const PRACTICE = [
  { title: 'Cross-border mergers & acquisitions', desc: 'Structuring and executing acquisitions across jurisdictions, with particular depth in the Africa, Europe and Latin America corridors. From due diligence to closing, with the regulatory work handled along the way.' },
  { title: 'Advisory & deal negotiations', desc: 'Strategic advice to corporations, investors and institutions, and hands-on negotiation from the first term sheet to signing, protecting value and the relationship on both sides of the table.' },
  { title: 'Corporate finance & banking law', desc: 'Financing structures, banking regulation, IPOs and leveraged buyouts, with the legal requirements and the financial objectives worked out together rather than in sequence.' },
  { title: 'International contracts', desc: 'Negotiating and drafting joint ventures, partnership and commercial agreements between parties in different legal systems.' },
  { title: 'Regulatory compliance & due diligence', desc: 'Legal and financial due diligence for cross-border investments, and a clear route through regulators in emerging and developed markets.' },
  { title: 'Embassy & diplomatic advisory', desc: 'Counsel to diplomatic missions on commercial law, bilateral agreements and international trade matters.' },
]

const RECORD = [
  { src: '/images/speaking-mic.jpg', pos: 'center 20%', alt: 'Dr. Frank-Valere Yussa addressing a business forum', title: 'Keynotes and panels', desc: 'Speaking to investors and policymakers on market access at international business forums.' },
  { src: '/images/press-interview.jpg', pos: 'center 20%', alt: 'Dr. Frank-Valere Yussa interviewed by the press', title: 'Broadcast and press', desc: 'Interviewed on national television on foreign investment and legal reform.' },
  { src: '/images/defence-podium-portrait.jpg', pos: 'center 35%', alt: 'Dr. Frank-Valere Yussa defending his doctoral dissertation at RUDN University', title: 'Doctoral defence', desc: 'Defending his dissertation on foreign capital in Cameroon before the RUDN University dissertation council.' },
]

const EXPERIENCE = [
  { when: '2024 – present', role: 'Founding Partner', org: "The Noub's Law & Advisory", points: ['Leads cross-border negotiations across Africa, Europe, Eastern Europe and Latin America', 'Legal consultant to several embassies in Russia', 'Coordinates corporate obligations across multiple jurisdictions'] },
  { when: '2022 – 2023', role: 'Teaching Assistant', org: "Peoples' Friendship University of Russia (RUDN)", points: ['Institutional Economy and Finance for BBA students', 'General Economy with a pharmaceutical focus for medical students'] },
  { when: '2022', role: 'Market Research Analyst & Area Sales Manager', org: 'Smart Group pl sp. z o.o.', points: ['Market analysis and positioning across Central and Eastern Europe', 'Represented the company at SIAL Paris and ANUGA Germany'] },
]

const WHY = [
  { title: 'Partner-level access', desc: 'No junior associates in between. Every engagement, from the first call to the final signature, is handled personally.' },
  { title: 'Law that speaks finance', desc: 'Legal structuring and financial modelling under one roof, so deals are built to close, not only to survive review.' },
  { title: 'Proven across borders', desc: 'A decade of work spanning Africa, Russia, Europe and Latin America means fewer surprises when a deal enters unfamiliar territory.' },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Credentials */}
      <section className="section--tight" aria-label="Credentials">
        <div className="container grid-4">
          {CREDENTIALS.map((c) => (
            <div key={c.value} style={{ borderTop: '2px solid var(--brass)', paddingTop: '1rem' }}>
              <p className="t-h3" style={{ fontFamily: 'var(--serif-display)', fontSize: 'clamp(1.5rem, 2.4vw, 1.9rem)' }}>{c.value}</p>
              <p className="t-small" style={{ marginTop: '0.4rem' }}>{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-mist">
        <div className="container split split--5-7">
          <div className="photo" style={{ aspectRatio: '4 / 5' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/office-redfolder.jpg" alt="Dr. Frank-Valere Yussa reviewing documents" loading="lazy" />
          </div>
          <div className="stack-lg">
            <h2 className="t-h2">Legal counsel divorced from economic reality is incomplete.</h2>
            <p className="t-body">
              Business now sits where law, economics, technology and geopolitics meet. Getting a deal done means seeing how a legal decision moves through markets, supply chains and stakeholder relationships, and designing around it before it becomes a problem.
            </p>
            <p className="t-body">
              As founder of The Noub&apos;s Law &amp; Advisory, Dr. Frank-Valere Yussa brings both disciplines to every mandate: the rigour of a corporate lawyer and the judgement of an economist who has spent over a decade on cross-border work.
            </p>
            <p><Link href="/experience" className="text-link">Read his experience</Link></p>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section id="practice" className="section" style={{ scrollMarginTop: 'var(--nav-h)' }}>
        <div className="container">
          <div className="split" style={{ alignItems: 'end', marginBottom: '2.5rem' }}>
            <h2 className="t-h2">Practice areas</h2>
            <p className="t-body">Six areas of work, often combined in a single transaction. Each is led personally, from first assessment to closing.</p>
          </div>
          <div className="rows">
            {PRACTICE.map((p) => (
              <div key={p.title} className="row-item">
                <h3 className="t-h3">{p.title}</h3>
                <p className="t-body">{p.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem' }}><Link href="/skills" className="text-link">See full expertise</Link></p>
        </div>
      </section>

      {/* On the record */}
      <section className="section bg-indigo">
        <div className="container">
          <h2 className="t-h2" style={{ color: '#fff', maxWidth: '20ch' }}>On the record, from forums to national broadcast</h2>
          <div className="grid-3" style={{ marginTop: '2.75rem' }}>
            {RECORD.map((r) => (
              <figure key={r.title}>
                <div className="photo" style={{ aspectRatio: '4 / 5' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.src} alt={r.alt} loading="lazy" style={{ objectPosition: r.pos }} />
                </div>
                <figcaption className="photo-caption">
                  <p className="t-h4" style={{ color: '#fff' }}>{r.title}</p>
                  <p className="t-small" style={{ marginTop: '0.3rem' }}>{r.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: 'end', marginBottom: '2.5rem' }}>
            <h2 className="t-h2">Experience</h2>
            <p className="t-body">Practice, teaching and industry, across four regions.</p>
          </div>
          <div className="timeline">
            {EXPERIENCE.map((e) => (
              <div key={e.org} className="timeline-item">
                <p className="t-label">{e.when}</p>
                <div>
                  <h3 className="t-h3">{e.role}</h3>
                  <p style={{ color: 'var(--slate)', marginTop: '0.2rem' }}>{e.org}</p>
                  <ul className="bullets" style={{ marginTop: '0.75rem' }}>
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic */}
      <section className="section bg-mist">
        <div className="container split split--7-5 split--top">
          <div>
            <h2 className="t-h2">Education and research</h2>
            <div className="rows" style={{ marginTop: '2rem' }}>
              <div>
                <p className="t-label">PhD, World Economy · RUDN University</p>
                <h3 className="t-h3" style={{ marginTop: '0.35rem' }}>The Influence of Foreign Capital on the Socio-Economic Development of Cameroon</h3>
                <p className="t-small" style={{ marginTop: '0.4rem' }}>Defended 8 October 2026. <a href={DISSERTATION_URL} target="_blank" rel="noopener noreferrer" className="text-link">Dissertation council page</a></p>
              </div>
              <div>
                <p className="t-label">PhD research, Private International Law</p>
                <h3 className="t-h3" style={{ marginTop: '0.35rem' }}>Cross-Border Payments Integrity under AfCFTA</h3>
                <p className="t-small" style={{ marginTop: '0.4rem' }}>A private international law analysis of e-procurement and beneficial ownership transparency in Cameroon, Nigeria, Ghana, South Africa and Mozambique.</p>
              </div>
              <div>
                <p className="t-label">LLM</p>
                <h3 className="t-h3" style={{ marginTop: '0.35rem' }}>Corporate Law, Banking &amp; Finance</h3>
                <p className="t-small" style={{ marginTop: '0.4rem' }}>Graduated with honours.</p>
              </div>
              <div>
                <p className="t-label">MBA</p>
                <h3 className="t-h3" style={{ marginTop: '0.35rem' }}>International Finance &amp; Banking</h3>
                <p className="t-small" style={{ marginTop: '0.4rem' }}>Best graduate, RUDN Business School.</p>
              </div>
            </div>
            <p style={{ marginTop: '2rem' }}><Link href="/research" className="text-link">Research and publications</Link></p>
          </div>
          <div className="photo order-first-mobile" style={{ aspectRatio: '4 / 5.5' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/defence-podium-portrait.jpg" alt="Presenting the dissertation at RUDN University" loading="lazy" style={{ objectPosition: 'center 40%' }} />
          </div>
        </div>
      </section>

      {/* Languages & regions */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2 className="t-h2">Languages</h2>
            <p className="t-body" style={{ marginTop: '1rem' }}>Negotiations and documents handled in the counterpart&apos;s own language where possible.</p>
            <div className="chips" style={{ marginTop: '1.5rem' }}>
              {LANGUAGES.map((l) => (
                <span key={l.name} className="chip">{l.name}{l.level && <small>{l.level}</small>}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="t-h2">Regions</h2>
            <p className="t-body" style={{ marginTop: '1rem' }}>Mandates and counterparties across five regions, with a base in Moscow.</p>
            <div className="chips" style={{ marginTop: '1.5rem' }}>
              {REGIONS.map((r) => <span key={r} className="chip">{r}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Why clients choose */}
      <section className="section bg-mist">
        <div className="container">
          <h2 className="t-h2" style={{ maxWidth: '22ch' }}>Why corporations choose Dr. Yussa</h2>
          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {WHY.map((w) => (
              <div key={w.title} style={{ borderTop: '2px solid var(--brass)', paddingTop: '1.25rem' }}>
                <h3 className="t-h3">{w.title}</h3>
                <p className="t-body" style={{ marginTop: '0.6rem' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — shown once entries are added in lib/site.ts */}
      {TESTIMONIALS.length > 0 && (
        <section className="section">
          <div className="container grid-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name}>
                <blockquote className="t-quote">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption style={{ marginTop: '1rem' }}><span className="t-h4">{t.name}</span><br /><span className="t-small">{t.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <h2 className="t-h2">In the room</h2>
          <div className="gallery" style={{ marginTop: '2.5rem' }}>
            <div className="photo g-a">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/frank-stairs-duo.jpg" alt="Dr. Frank-Valere Yussa with a colleague" loading="lazy" style={{ objectPosition: 'center 30%' }} />
            </div>
            <div className="photo g-b">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/defence-panel.jpg" alt="With members of the RUDN University dissertation council" loading="lazy" style={{ objectPosition: '42% 60%' }} />
            </div>
            <div className="photo g-c">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/defence-podium-wide.jpg" alt="Presenting research findings to the dissertation council" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
