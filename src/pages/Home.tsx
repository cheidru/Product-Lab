import { Link } from 'react-router-dom'
import { useIsMobile } from '../hooks/useIsMobile'

const capabilities = [
  { n: '01', title: 'Консультации по продукту', desc: 'Оценим реализуемость идеи, стоимость проектирования и производства.' },
  { n: '02', title: 'Исправление ошибок', desc: 'Устраним дефекты конструкции, мешающие производству и работе изделия.' },
  { n: '03', title: 'Доработка конструкции', desc: 'Доведём незавершённый проект до цельного, готового к выпуску решения.' },
  { n: '04', title: 'Улучшение конструкции', desc: 'Снизим себестоимость и сократим сроки серийного производства.' },
]

const cases = [
  { category: 'Промышленное оборудование', title: 'Корпус контроллера', desc: 'Снизили себестоимость на 18%: 14 деталей объединили в 6 и упростили сборку.' },
  { category: 'Машиностроение', title: 'Узел конвейерного редуктора', desc: 'Устранили перегрев и вибрацию — расчётный ресурс вырос в 2,5 раза.' },
  { category: 'Потребительская техника', title: 'Линейка садовых инструментов', desc: 'Довели сырой прототип до серийного выпуска за четыре месяца.' },
]

const placeholderBg = 'repeating-linear-gradient(135deg,#f1ece5,#f1ece5 10px,#f8f4ee 10px,#f8f4ee 20px)'

export default function Home() {
  const m = useIsMobile()

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#271826', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', padding: m ? '52px 20px 60px' : '96px 48px 104px' }}>
          <div style={{ display: 'flex', alignItems: m ? 'flex-start' : 'center', gap: 14, marginBottom: m ? 24 : 34 }}>
            <span style={{ height: 1, width: 46, background: '#FF6A3D', display: 'block', flexShrink: 0, marginTop: m ? 5 : 0 }} />
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: m ? '0.06em' : '0.14em', textTransform: 'uppercase', color: '#FF6A3D' }}>Инженерный дизайн продуктов</span>
          </div>
          <h1 style={{ fontSize: m ? 32 : 96, lineHeight: m ? 1.08 : 0.98, fontWeight: 800, letterSpacing: '-0.04em', margin: m ? '0 0 20px' : '0 0 36px', maxWidth: 1100 }}>
            Делаем продукты<br /><span style={{ color: '#FF6A3D' }}>надёжными</span> и удобными
          </h1>
          <div style={{ display: 'flex', alignItems: m ? 'flex-start' : 'flex-end', flexDirection: m ? 'column' : 'row', justifyContent: 'space-between', gap: m ? 24 : 40 }}>
            <p style={{ fontSize: m ? 17 : 22, lineHeight: 1.5, color: '#cbbcc4', maxWidth: 600, margin: 0 }}>
              Исследование, дизайн и продуктовая стратегия для команд, которые имеют идеи.
            </p>
            <Link to="/consultation" style={{ textDecoration: 'none', background: '#fff', color: '#271826', fontWeight: 700, fontSize: m ? 16 : 17, padding: m ? '15px 24px' : '18px 32px', borderRadius: 6, whiteSpace: 'nowrap', alignSelf: m ? 'stretch' : 'auto', textAlign: 'center' }}>
              Бесплатная консультация
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: m ? '48px 20px 24px' : '72px 48px 28px' }}>
        <div style={{ display: 'flex', alignItems: m ? 'flex-start' : 'flex-end', flexDirection: m ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginBottom: 32 }}>
          <h2 style={{ fontSize: m ? 28 : 40, fontWeight: 800, letterSpacing: '-0.03em', margin: 0 }}>Чем помогаем</h2>
          <Link to="/services" style={{ textDecoration: 'none', color: '#FF6A3D', fontWeight: 600, fontSize: 16 }}>Все услуги →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: m ? 14 : 22 }}>
          {capabilities.map(c => (
            <div key={c.n} style={{ border: '1px solid #ece4dc', borderRadius: 14, padding: m ? 20 : 28 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#FF6A3D', marginBottom: 12 }}>{c.n}</div>
              <h3 style={{ fontSize: m ? 16 : 19, fontWeight: 700, margin: '0 0 8px' }}>{c.title}</h3>
              <p style={{ fontSize: m ? 14 : 15, lineHeight: 1.5, color: '#6B5E63', margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: m ? '48px 20px 60px' : '64px 48px 80px' }}>
        <div style={{ display: 'flex', alignItems: m ? 'flex-start' : 'flex-end', flexDirection: m ? 'column' : 'row', justifyContent: 'space-between', gap: 16, marginBottom: 32 }}>
          <h2 style={{ fontSize: m ? 28 : 40, fontWeight: 800, letterSpacing: '-0.03em', margin: 0, maxWidth: 620 }}>Результат в металле, а не на бумаге</h2>
          <Link to="/consultation" style={{ textDecoration: 'none', color: '#FF6A3D', fontWeight: 600, fontSize: 16 }}>Обсудить проект →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 32 : 26 }}>
          {cases.map(c => (
            <div key={c.title}>
              <div style={{ height: m ? 200 : 230, borderRadius: 14, background: placeholderBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: 12, color: '#bcb0a6', marginBottom: 18 }}>
                кейс · фото изделия
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#9b8f86', marginBottom: 8 }}>{c.category}</div>
              <h3 style={{ fontSize: m ? 19 : 22, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{c.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: '#6B5E63', margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#FFE3D6' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: m ? '40px 20px' : '60px 48px', display: 'flex', alignItems: m ? 'flex-start' : 'center', flexDirection: m ? 'column' : 'row', justifyContent: 'space-between', gap: m ? 20 : 32 }}>
          <div>
            <h2 style={{ fontSize: m ? 24 : 38, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Есть идея или проблемная конструкция?</h2>
            <p style={{ fontSize: m ? 16 : 18, color: '#7a5d50', margin: 0 }}>30 минут — разберём задачу и подскажем, с чего начать.</p>
          </div>
          <Link to="/consultation" style={{ textDecoration: 'none', background: '#FF6A3D', color: '#fff', fontWeight: 700, fontSize: 17, padding: '18px 34px', borderRadius: 6, whiteSpace: 'nowrap', alignSelf: m ? 'stretch' : 'auto', textAlign: 'center' }}>
            Бесплатная консультация
          </Link>
        </div>
      </section>
    </div>
  )
}
