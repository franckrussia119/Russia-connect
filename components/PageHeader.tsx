// Inner-page header: indigo band with the page title on the left and, when an
// image is given, a framed photo on the right (stacks above on phones).
export default function PageHeader({
  title,
  subtitle,
  image,
  imagePosition = 'center 30%',
}: {
  title: string
  subtitle?: string
  image?: string
  imagePosition?: string
}) {
  return (
    <section className="bg-indigo" style={{ paddingTop: 'var(--nav-h)' }}>
      <div className="container split" style={{ paddingBlock: 'clamp(2.5rem, 7vw, 5rem)', alignItems: 'end' }}>
        <div>
          <h1 className="t-h1" style={{ color: '#fff' }}>{title}</h1>
          {subtitle && <p className="t-lead" style={{ marginTop: '1.25rem' }}>{subtitle}</p>}
        </div>
        {image && (
          <div className="photo" style={{ aspectRatio: '16 / 10', maxHeight: 360 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" style={{ objectPosition: imagePosition }} />
          </div>
        )}
      </div>
    </section>
  )
}
