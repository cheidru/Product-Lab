import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ padding: '48px 48px', background: '#1c1118', color: '#cbbcc4' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 320 }}>
          <span style={{ fontWeight: 800, fontSize: 20, color: '#fff' }}>
            ЛАБ<span style={{ color: '#FF6A3D' }}>.</span>
          </span>
          <p style={{ fontSize: 14, margin: '14px 0 0' }}>Инженерный дизайн и улучшение продуктов с 2014 года.</p>
        </div>
        <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#7a6a73', marginBottom: 14 }}>Меню</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link to="/services" style={{ textDecoration: 'none', color: '#e9dfe4', fontSize: 15 }}>Услуги</Link>
              <Link to="/about" style={{ textDecoration: 'none', color: '#e9dfe4', fontSize: 15 }}>О нас</Link>
              <Link to="/contacts" style={{ textDecoration: 'none', color: '#e9dfe4', fontSize: 15 }}>Контакты</Link>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#7a6a73', marginBottom: 14 }}>Контакты</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: '#e9dfe4' }}>
              <span>Москва</span>
              <span>hello@lab.studio</span>
              <span>+7 495 120-30-40</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
