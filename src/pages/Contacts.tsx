import CtaBanner from '../components/CtaBanner'

const cards = [
  { label: 'Почта', value: 'hello@lab.studio', sub: 'Для проектов, вопросов и предложений.' },
  { label: 'Телефон', value: '+7 495 120-30-40', sub: 'Пн–Пт, с 10:00 до 19:00 (МСК).' },
  { label: 'Адрес', value: 'Москва', sub: 'Берсеневская набережная, 6с3, 4 этаж.' },
  { label: 'Соцсети', value: '@lab.studio', sub: 'Telegram · VK · Behance' },
]

export default function Contacts() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#271826', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 48px 80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
            <span style={{ height: 1, width: 46, background: '#FF6A3D', display: 'block' }} />
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A3D' }}>Контакты</span>
          </div>
          <h1 style={{ fontSize: 72, lineHeight: 1.0, fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 24px', maxWidth: 880 }}>
            Давайте обсудим ваш продукт
          </h1>
          <p style={{ fontSize: 21, lineHeight: 1.5, color: '#cbbcc4', maxWidth: 600, margin: 0 }}>
            Напишите, позвоните или приходите в студию — ответим в течение рабочего дня.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
          {cards.map(c => (
            <div key={c.label} style={{ border: '1px solid #ece4dc', borderRadius: 14, padding: 34 }}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9b8f86', marginBottom: 12 }}>{c.label}</div>
              <div style={{ fontSize: 26, fontWeight: 700 }}>{c.value}</div>
              <p style={{ fontSize: 15, color: '#6B5E63', margin: '10px 0 0' }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px 72px' }}>
        <div style={{ borderRadius: 14, overflow: 'hidden', height: 360, background: 'repeating-linear-gradient(135deg,#f1ece5,#f1ece5 12px,#f8f4ee 12px,#f8f4ee 24px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: 13, color: '#bcb0a6' }}>
          карта · схема проезда
        </div>
      </section>

      <CtaBanner
        heading="Готовы начать?"
        subtext="Забронируйте бесплатную 30-минутную консультацию."
      />
    </div>
  )
}
