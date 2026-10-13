import { Linkedin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { SITE } from '@/lib/site'

const ICONS = { linkedin: Linkedin, facebook: Facebook, instagram: Instagram, x: Twitter, youtube: Youtube } as const
const LABELS = { linkedin: 'LinkedIn', facebook: 'Facebook', instagram: 'Instagram', x: 'X (Twitter)', youtube: 'YouTube' } as const

// Renders only the profiles that have a link set in lib/site.ts.
export default function SocialLinks({ size = 18 }: { size?: number }) {
  const entries = (Object.keys(SITE.social) as (keyof typeof SITE.social)[]).filter((k) => SITE.social[k])
  if (!entries.length) return null
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {entries.map((k) => {
        const Icon = ICONS[k]
        return (
          <a key={k} href={SITE.social[k]} target="_blank" rel="noopener noreferrer" aria-label={LABELS[k]} style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', minWidth: 24, minHeight: 24, alignItems: 'center' }}>
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}
