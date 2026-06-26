import { Link } from 'react-router-dom'

interface Props {
  heading: string
  subtext?: string
  buttonLabel?: string
}

export default function CtaBanner({ heading, subtext, buttonLabel = 'Бесплатная консультация' }: Props) {
  return (
    <section style={{ background: '#FFE3D6' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <div>
          <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', margin: subtext ? '0 0 8px' : 0 }}>{heading}</h2>
          {subtext && <p style={{ fontSize: 18, color: '#7a5d50', margin: 0 }}>{subtext}</p>}
        </div>
        <Link to="/consultation" style={{ textDecoration: 'none', background: '#FF6A3D', color: '#fff', fontWeight: 700, fontSize: 17, padding: '17px 32px', borderRadius: 6, whiteSpace: 'nowrap' }}>
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}
