'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

// Full-width photograph of the doctoral defence at RUDN University, darkened on
// the left (and at the bottom on phones) so the text stays readable.
export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease } }

  return (
    <section className="hero">
      <motion.img
        src="/images/hero-defence-wide.jpg"
        alt="Dr. Frank-Valere Yussa defending his doctoral dissertation at RUDN University"
        className="hero-img"
        fetchPriority="high"
        initial={reduce ? false : { scale: 1.06, opacity: 0.6 }}
        animate={reduce ? undefined : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease }}
      />
      <div className="hero-shade" aria-hidden />
      <div className="container hero-inner">
        <div style={{ maxWidth: 640 }}>
          <motion.p {...rise(0.1)} className="t-label" style={{ color: 'var(--brass)' }}>
            Corporate lawyer and economist
          </motion.p>
          <motion.h1 {...rise(0.2)} className="t-display" style={{ color: '#fff', marginTop: '1rem' }}>
            Dr. Frank-Valere Yussa
          </motion.h1>
          <motion.p {...rise(0.35)} className="t-lead" style={{ marginTop: '1.5rem', maxWidth: '40ch', color: 'rgba(255,255,255,0.84)' }}>
            Cross-border legal and financial counsel for companies, investors and governments doing business between Africa, Russia, Europe and Latin America.
          </motion.p>
          <motion.div {...rise(0.48)} className="btn-row" style={{ marginTop: '2.25rem' }}>
            <Link href="/contact" className="btn btn--brass">Book a consultation</Link>
            <Link href="#practice" className="btn btn--ghost">See practice areas</Link>
          </motion.div>
        </div>
        <motion.p {...rise(0.6)} className="t-small hero-caption">
          Doctoral defence, RUDN University, Moscow, 8 October 2026
        </motion.p>
      </div>
    </section>
  )
}
