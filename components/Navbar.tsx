'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Wordmark from './Wordmark'
import SocialLinks from './SocialLinks'

export const NAV_LINKS = [
  { href: '/skills', label: 'Expertise' },
  { href: '/experience', label: 'Experience' },
  { href: '/clients', label: 'Clients' },
  { href: '/research', label: 'Research' },
  { href: '/books', label: 'Books' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + '/')

  return (
    <>
      <header
        style={{
          position: 'fixed', inset: '0 0 auto 0', zIndex: 1000, height: 'var(--nav-h)',
          display: 'flex', alignItems: 'center',
          background: scrolled || open ? 'rgba(15,24,48,0.96)' : 'rgba(15,24,48,0.55)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Wordmark />
          <nav aria-label="Main" className="desktop-only" style={{ alignItems: 'center', gap: '1.6rem', marginLeft: 'auto' }}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link" aria-current={isActive(l.href) ? 'page' : undefined}>{l.label}</Link>
            ))}
          </nav>
          <Link href="/contact" className="btn btn--brass desktop-only" style={{ minHeight: 42, padding: '0.6rem 1.15rem', fontSize: '0.92rem' }}>Book a consultation</Link>
          <button
            className="mobile-only"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{ marginLeft: 'auto', background: 'none', border: 0, color: '#fff', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="mobile-only"
          style={{ position: 'fixed', inset: 'var(--nav-h) 0 0 0', zIndex: 999, background: 'var(--ink)', flexDirection: 'column', padding: '1.5rem var(--gutter) 2rem', overflowY: 'auto' }}
        >
          <nav aria-label="Mobile" style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="/" style={mobileLink(pathname === '/')}>Home</Link>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} style={mobileLink(isActive(l.href))}>{l.label}</Link>
            ))}
          </nav>
          <Link href="/contact" className="btn btn--brass" style={{ marginTop: '2rem' }}>Book a consultation</Link>
          <div style={{ marginTop: '2rem' }}><SocialLinks size={20} /></div>
        </div>
      )}
    </>
  )
}

function mobileLink(active: boolean): React.CSSProperties {
  return {
    fontFamily: 'var(--serif)', fontSize: '1.6rem', color: active ? 'var(--brass)' : '#fff',
    padding: '0.85rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)',
  }
}
