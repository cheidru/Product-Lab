import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useIsMobile } from '../hooks/useIsMobile'

const navLinks = [
  { to: '/services', label: 'Услуги' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
]

export default function Header() {
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header style={{ background: '#271826', position: 'relative', zIndex: 200 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '18px 20px' : '22px 48px' }}>
          <NavLink to="/" onClick={close} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: '0.02em', color: '#fff' }}>
              ЛАБ<span style={{ color: '#FF6A3D' }}>.</span>
            </span>
          </NavLink>

          {isMobile ? (
            <button
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: '#fff', display: 'flex', alignItems: 'center' }}
            >
              {open ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
                </svg>
              )}
            </button>
          ) : (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
              {navLinks.map(l => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#FF6A3D' : '#e9dfe4', fontWeight: isActive ? 600 : 500, fontSize: 16 })}
                >
                  {l.label}
                </NavLink>
              ))}
              <NavLink
                to="/consultation"
                style={{ textDecoration: 'none', background: '#FF6A3D', color: '#fff', fontWeight: 600, fontSize: 15, padding: '12px 22px', borderRadius: 6 }}
              >
                Бесплатная консультация
              </NavLink>
            </nav>
          )}
        </div>
      </header>

      {isMobile && open && (
        <div style={{ position: 'fixed', inset: 0, background: '#271826', zIndex: 150, display: 'flex', flexDirection: 'column', padding: '100px 28px 48px' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={close}
                style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#FF6A3D' : '#e9dfe4', fontWeight: 700, fontSize: 34, letterSpacing: '-0.02em', padding: '10px 0', display: 'block', borderBottom: '1px solid #3a2a39' })}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <NavLink
            to="/consultation"
            onClick={close}
            style={{ textDecoration: 'none', background: '#FF6A3D', color: '#fff', fontWeight: 700, fontSize: 17, padding: '18px 24px', borderRadius: 8, textAlign: 'center', marginTop: 'auto', display: 'block' }}
          >
            Бесплатная консультация
          </NavLink>
        </div>
      )}
    </>
  )
}
