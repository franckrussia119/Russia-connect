import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Books',
  description: 'Forthcoming publications on international corporate law, cross-border transactions and economic development in emerging markets.',
}

export default function Books() {
  return (
    <>
      <PageHeader title="Books" subtitle="Forthcoming publications." image="/images/graduation-seated.jpg" imagePosition="center 30%" />
      <section className="section">
        <div className="container container--narrow stack-lg">
          <h2 className="t-h2">In preparation</h2>
          <p className="t-lead">
            Dr. Frank-Valere Yussa is writing on international corporate law, cross-border transactions and economic development in emerging markets, drawing on his doctoral research on foreign capital in Cameroon and on payments integrity under the African Continental Free Trade Area.
          </p>
          <p className="t-body">To be told when the first title is published, or to discuss a speaking or publishing invitation, get in touch.</p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn--ink">Get in touch</Link>
            <Link href="/research" className="text-link" style={{ alignSelf: 'center' }}>Current research</Link>
          </div>
        </div>
      </section>
    </>
  )
}
