// Formerly animated every section on scroll. Motion is now reserved for the
// homepage opening sequence, so this is a plain wrapper that keeps the same API.
export default function SectionReveal({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  style?: React.CSSProperties
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
