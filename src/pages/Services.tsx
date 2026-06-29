import CtaBanner from '../components/CtaBanner'
import { useIsMobile } from '../hooks/useIsMobile'

const services = [
  {
    n: '01',
    title: 'Консультации по продукту',
    desc: 'Оцениваем «сырую» идею: насколько она реализуема, во сколько обойдётся проектирование и производство и каким будет итоговый результат. Вы получаете честную картину до старта вложений.',
  },
  {
    n: '02',
    title: 'Исправление ошибок в разработке',
    desc: 'Помогаем там, где неудачный дизайн продукта приводит к проблемам в производстве и в работе изделия. Находим причины сбоев и устраняем их в конструкции.',
  },
  {
    n: '03',
    title: 'Доработка и улучшение конструкции',
    desc: 'Доводим незавершённый дизайн продукта до цельного, готового к производству решения — закрываем пробелы и связываем все узлы в единую конструкцию.',
  },
  {
    n: '04',
    title: 'Улучшение конструкции',
    desc: 'Дорабатываем конструкцию готового изделия, чтобы снизить себестоимость и сократить сроки производства — без потери качества и надёжности.',
  },
]

export default function Services() {
  const m = useIsMobile()

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#271826', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: m ? '52px 20px 60px' : '72px 48px 80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: m ? 20 : 26 }}>
            <span style={{ height: 1, width: 46, background: '#FF6A3D', display: 'block' }} />
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A3D' }}>Услуги</span>
          </div>
          <h1 style={{ fontSize: m ? 30 : 72, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.03em', margin: m ? '0 0 16px' : '0 0 24px', maxWidth: 920 }}>
            От идеи до готового<br />к производству продукта
          </h1>
          <p style={{ fontSize: m ? 17 : 21, lineHeight: 1.5, color: '#cbbcc4', maxWidth: 620, margin: 0 }}>
            Подключаемся на любом этапе — оценить замысел, исправить ошибки или довести конструкцию до результата.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: m ? '16px 20px 60px' : '24px 48px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((s, i) => (
            <div
              key={s.n}
              style={{
                display: m ? 'flex' : 'grid',
                flexDirection: m ? 'column' : undefined,
                gridTemplateColumns: m ? undefined : '90px 1fr 1.3fr',
                gap: m ? 10 : 36,
                padding: m ? '28px 0' : '40px 0',
                borderTop: '1px solid #1c1118',
                borderBottom: i === services.length - 1 ? '1px solid #1c1118' : undefined,
                alignItems: m ? undefined : 'baseline',
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700, color: '#FF6A3D' }}>{s.n}</div>
              <h3 style={{ fontSize: m ? 22 : 32, fontWeight: 700, margin: m ? '0 0 6px' : 0, letterSpacing: '-0.02em' }}>{s.title}</h3>
              <p style={{ fontSize: m ? 15 : 17, lineHeight: 1.6, color: '#6B5E63', margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Не знаете, какая услуга нужна?"
        subtext="Начните с бесплатной консультации — поможем определиться за 30 минут."
      />
    </div>
  )
}
