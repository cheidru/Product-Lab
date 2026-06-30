import CtaBanner from '../components/CtaBanner'
import { useIsMobile } from '../hooks/useIsMobile'

const values = [
  { n: '01', title: 'Инженерная строгость', desc: 'Каждое решение проверяем на реализуемость и надёжность ещё до запуска.' },
  { n: '02', title: 'Простые решения', desc: 'Сложное делаем понятным: меньше узлов, меньше рисков, ниже стоимость.' },
  { n: '03', title: 'Думаем о производстве', desc: 'Проектируем так, чтобы продукт было легко и выгодно выпускать серийно.' },
]

const team = [
  { name: 'Михаил Орлов', role: 'Основатель, инженер' },
  { name: 'Елена Соколова', role: 'Ведущий дизайнер' },
  { name: 'Дмитрий Лебедев', role: 'Конструктор' },
  { name: 'Анна Власова', role: 'Руководитель проектов' },
]

const teamPhotoStyle: React.CSSProperties = {
  aspectRatio: '1',
  borderRadius: 12,
  background: 'repeating-linear-gradient(135deg,rgba(51,35,49,0.25),rgba(51,35,49,0.25) 10px,transparent 10px,transparent 20px),#2f1f2e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'monospace',
  fontSize: 11,
  color: '#7a6a73',
  marginBottom: 16,
}

const stats = [
  { value: '12', label: 'лет на рынке', suffix: '' },
  { value: '80', label: 'продуктов улучшено', suffix: '+' },
  { value: '30', label: 'специалистов в команде', suffix: '+' },
]

export default function About() {
  const m = useIsMobile()

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#271826', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: m ? '52px 20px 60px' : '72px 48px 80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: m ? 20 : 26 }}>
            <span style={{ height: 1, width: 46, background: '#FF6A3D', display: 'block' }} />
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A3D' }}>О нас</span>
          </div>
          <h1 style={{ fontSize: m ? 34 : 72, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.03em', margin: m ? '0 0 16px' : '0 0 24px', maxWidth: 960 }}>
            Превращаем идеи в надёжные продукты
          </h1>
          <p style={{ fontSize: m ? 17 : 21, lineHeight: 1.5, color: '#cbbcc4', maxWidth: 640, margin: 0 }}>
            «Лаб» — студия продуктового дизайна. С 2014 года помогаем командам доводить замыслы до изделий, которые удобно производить и которыми приятно пользоваться.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: m ? '48px 20px' : '72px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 32 : 56 }}>
          <div>
            <h2 style={{ fontSize: m ? 26 : 34, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 18px' }}>Как мы работаем</h2>
            <p style={{ fontSize: m ? 16 : 17, lineHeight: 1.65, color: '#6B5E63', margin: '0 0 16px' }}>
              Мы начинаем с данных и заканчиваем результатом. Разбираемся в задаче глубже, чем требует бриф, и предлагаем решения, которые работают не только на бумаге, но и в производстве.
            </p>
            <p style={{ fontSize: m ? 16 : 17, lineHeight: 1.65, color: '#6B5E63', margin: 0 }}>
              Небольшая команда инженеров и дизайнеров, которая берётся за сложное и доводит до конца. Каждый проект ведём как собственный продукт.
            </p>
          </div>
          <div style={{ background: 'repeating-linear-gradient(135deg,#f1ece5,#f1ece5 10px,#f8f4ee 10px,#f8f4ee 20px)', borderRadius: 10, minHeight: m ? 200 : 300, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: 12, color: '#bcb0a6' }}>
            фото команды / студии
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#faf6f1', borderTop: '1px solid #ece4dc', borderBottom: '1px solid #ece4dc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: m ? '48px 20px' : '64px 48px' }}>
          <h2 style={{ fontSize: m ? 26 : 34, fontWeight: 800, letterSpacing: '-0.02em', margin: m ? '0 0 28px' : '0 0 40px' }}>Принципы</h2>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 14 : 26 }}>
            {values.map(v => (
              <div key={v.n} style={{ background: '#fff', border: '1px solid #ece4dc', borderRadius: 14, padding: m ? 24 : 32 }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#FF6A3D', marginBottom: 12 }}>{v.n}</div>
                <h3 style={{ fontSize: m ? 19 : 22, fontWeight: 700, margin: '0 0 10px' }}>{v.title}</h3>
                <p style={{ fontSize: m ? 15 : 16, lineHeight: 1.55, color: '#6B5E63', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)' }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: m ? '32px 20px' : 48,
                textAlign: 'center',
                borderRight: m ? 'none' : (i < stats.length - 1 ? '1px solid #ece4dc' : undefined),
                borderBottom: m ? (i < stats.length - 1 ? '1px solid #ece4dc' : undefined) : 'none',
              }}
            >
              <div style={{ fontSize: m ? 44 : 54, fontWeight: 800, letterSpacing: '-0.03em' }}>
                {s.value}<span style={{ color: '#FF6A3D' }}>{s.suffix}</span>
              </div>
              <div style={{ fontSize: 15, color: '#6B5E63', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ background: '#271826', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: m ? '48px 20px' : '64px 48px' }}>
          <h2 style={{ fontSize: m ? 26 : 34, fontWeight: 800, letterSpacing: '-0.02em', margin: m ? '0 0 28px' : '0 0 40px' }}>Команда</h2>
          <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: m ? 20 : 24 }}>
            {team.map(member => (
              <div key={member.name}>
                <div style={teamPhotoStyle}>фото</div>
                <div style={{ fontSize: m ? 16 : 18, fontWeight: 700 }}>{member.name}</div>
                <div style={{ fontSize: 14, color: '#cbbcc4', marginTop: 2 }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading="Расскажите о своей задаче" />
    </div>
  )
}
