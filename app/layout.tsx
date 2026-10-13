import type { Metadata, Viewport } from 'next'
import '@fontsource/libre-caslon-display/400.css'
import '@fontsource/libre-caslon-text/400.css'
import '@fontsource/libre-caslon-text/400-italic.css'
import '@fontsource/hanken-grotesk/400.css'
import '@fontsource/hanken-grotesk/500.css'
import '@fontsource/hanken-grotesk/600.css'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

const description =
  'Dr. Frank-Valere Yussa, PhD: corporate lawyer, economist and investment banker advising on cross-border transactions, deal negotiations and regulatory matters between Africa, Russia, Europe and Latin America.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Dr. Frank-Valere Yussa, PhD | Corporate Lawyer & Economist', template: '%s | Dr. Frank-Valere Yussa' },
  description,
  openGraph: {
    type: 'website',
    siteName: 'Dr. Frank-Valere Yussa',
    title: 'Dr. Frank-Valere Yussa, PhD | Corporate Lawyer & Economist',
    description,
    images: [{ url: '/images/hero-defence-wide.jpg', width: 2400, height: 1600, alt: 'Dr. Frank-Valere Yussa at his doctoral defence, RUDN University' }],
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = { themeColor: '#0f1830', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
