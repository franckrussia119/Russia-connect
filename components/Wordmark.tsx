import Link from 'next/link'

// Text-based logo: sharp at every size and always spelled correctly.
export default function Wordmark({ tone = 'light', size = 'md' }: { tone?: 'light' | 'dark'; size?: 'md' | 'lg' }) {
  const color = tone === 'light' ? '#fff' : 'var(--ink)'
  const big = size === 'lg'
  return (
    <Link href="/" aria-label="Dr. Frank-Valere Yussa, home" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color }}>
      <span
        aria-hidden
        style={{
          width: big ? 46 : 40, height: big ? 46 : 40, flexShrink: 0,
          border: '1.5px solid var(--brass)', borderRadius: 2,
          display: 'grid', placeItems: 'center',
          fontFamily: 'var(--serif-display)', fontSize: big ? '1.15rem' : '1rem', letterSpacing: '0.02em', color: 'var(--brass)',
        }}
      >
        FY
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{ fontFamily: 'var(--serif)', fontSize: big ? '1.3rem' : '1.12rem', whiteSpace: 'nowrap' }}>Dr. Frank-Valere Yussa</span>
        <span style={{ fontSize: '0.78rem', opacity: 0.65, marginTop: 3, whiteSpace: 'nowrap' }}>Law, economics and finance</span>
      </span>
    </Link>
  )
}
