import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ background: '#271826' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 48px' }}>
        <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: '0.02em', color: '#fff' }}>
            ЛАБ<span style={{ color: '#FF6A3D' }}>.</span>
          </span>
        </NavLink>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <NavLink
            to="/services"
            style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#FF6A3D' : '#e9dfe4', fontWeight: isActive ? 600 : 500, fontSize: 16 })}
          >
            Услуги
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#FF6A3D' : '#e9dfe4', fontWeight: isActive ? 600 : 500, fontSize: 16 })}
          >
            О нас
          </NavLink>
          <NavLink
            to="/contacts"
            style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#FF6A3D' : '#e9dfe4', fontWeight: isActive ? 600 : 500, fontSize: 16 })}
          >
            Контакты
          </NavLink>
          <NavLink
            to="/consultation"
            style={{ textDecoration: 'none', background: '#FF6A3D', color: '#fff', fontWeight: 600, fontSize: 15, padding: '12px 22px', borderRadius: 6 }}
          >
            Бесплатная консультация
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
