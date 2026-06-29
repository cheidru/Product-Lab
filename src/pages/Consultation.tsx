import { useState, useMemo } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const WD = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
const MO = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
const TIMES = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00']

interface Day {
  key: string
  wd: string
  num: number
  mo: string
  label: string
}

function getWeekdays(): Day[] {
  const days: Day[] = []
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  while (days.length < 8) {
    d.setDate(d.getDate() + 1)
    const dow = d.getDay()
    if (dow === 0 || dow === 6) continue
    days.push({
      key: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
      wd: WD[dow],
      num: d.getDate(),
      mo: MO[d.getMonth()],
      label: `${d.getDate()} ${MO[d.getMonth()]}`,
    })
  }
  return days
}

export default function Consultation() {
  const isMobile = useIsMobile()
  const isTablet = useIsMobile(1024)
  const isSmall = useIsMobile(620)
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const days = useMemo(() => getWeekdays(), [])

  const selectedDayLabel = days.find(d => d.key === selectedDay)?.label ?? ''
  const canSend = Boolean(selectedDay && selectedTime)
  const selectedLabel = canSend ? `${selectedDayLabel}, ${selectedTime} (МСК)` : ''

  function handleSubmit() {
    if (canSend) setSent(true)
  }

  function handleReset() {
    setSent(false)
    setSelectedDay(null)
    setSelectedTime(null)
  }

  return (
    <section style={{ background: '#271826' }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: isSmall ? '40px 16px 52px' : isMobile ? '48px 20px 60px' : isTablet ? '56px 32px 72px' : '64px 48px 80px',
        display: 'grid',
        gridTemplateColumns: isTablet ? 'minmax(0, 1fr)' : '0.8fr 1.2fr',
        gap: isMobile ? 40 : 48,
        alignItems: 'start',
      }}>

        {/* Left */}
        <div style={{ color: '#fff', position: isTablet ? 'static' : 'sticky', top: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: isMobile ? 20 : 26 }}>
            <span style={{ height: 1, width: 46, background: '#FF6A3D', display: 'block' }} />
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF6A3D' }}>Бесплатная консультация</span>
          </div>
          <h1 style={{ fontSize: isSmall ? 31 : isMobile ? 36 : isTablet ? 44 : 52, lineHeight: 1.06, fontWeight: 800, letterSpacing: '-0.03em', margin: isMobile ? '0 0 14px' : '0 0 22px' }}>
            Первый разговор<br />о вашем продукте
          </h1>
          <p style={{ fontSize: isMobile ? 16 : 18, lineHeight: 1.6, color: '#cbbcc4', margin: isMobile ? '0 0 22px' : '0 0 30px' }}>
            Это первичный контакт: мы собираем информацию о задаче, чтобы понять, чем можем помочь и с чего начать. Без обязательств.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { badge: '30', bg: '#FF6A3D', color: '#fff', title: 'Не дольше 30 минут', sub: 'Короткий, предметный разговор по делу.' },
              { badge: '✓', bg: '#3a2a39', color: '#FF6A3D', title: 'Соберём информацию', sub: 'Расскажите о задаче — подскажем следующий шаг.' },
              { badge: '₽', bg: '#3a2a39', color: '#FF6A3D', title: 'Бесплатно', sub: 'Знакомство и оценка задачи — без оплаты.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 34, height: 34, flexShrink: 0, borderRadius: 8, background: item.bg, color: item.color, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.badge}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: '#cbbcc4' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form card */}
        <div style={{ background: '#fff', borderRadius: 16, minWidth: 0, padding: isSmall ? 20 : isMobile ? 24 : isTablet ? 32 : 40 }}>
          {!sent ? (
            <div>
              <h2 style={{ fontSize: isMobile ? 22 : 26, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 4px' }}>Заявка на консультацию</h2>
              <p style={{ fontSize: 15, color: '#6B5E63', margin: '0 0 24px' }}>Заполните форму — подтвердим встречу по почте.</p>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 14 }}>
                {[
                  { label: 'Имя', type: 'text', placeholder: 'Как к вам обращаться' },
                  { label: 'Компания', type: 'text', placeholder: 'Название компании' },
                  { label: 'Эл. почта', type: 'email', placeholder: 'you@company.ru' },
                  { label: 'Телефон', type: 'tel', placeholder: '+7 ___ ___-__-__' },
                ].map(f => (
                  <div key={f.label}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3a2d33', marginBottom: 7 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', fontFamily: "'Onest',sans-serif", fontSize: 16, padding: '13px 14px', border: '1px solid #ddd3c9', borderRadius: 9, background: '#fff', boxSizing: 'border-box' }} />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 22 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3a2d33', marginBottom: 7 }}>Опишите задачу</label>
                <textarea placeholder="Над каким продуктом работаете и в чём задача?" rows={3} style={{ width: '100%', fontFamily: "'Onest',sans-serif", fontSize: 16, padding: '13px 14px', border: '1px solid #ddd3c9', borderRadius: 9, background: '#fff', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>

              {/* Day selector */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3a2d33', marginBottom: 12 }}>Выберите день</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: isMobile ? 'wrap' : 'nowrap', overflowX: isMobile ? 'visible' : 'auto', paddingBottom: 4 }}>
                  {days.map(day => {
                    const sel = selectedDay === day.key
                    return (
                      <button
                        key={day.key}
                        type="button"
                        onClick={() => setSelectedDay(day.key)}
                        style={{ cursor: 'pointer', flexShrink: 0, minWidth: isMobile ? 58 : 66, padding: isMobile ? '10px 8px' : '12px 10px', borderRadius: 11, border: `1px solid ${sel ? '#FF6A3D' : '#e6ddd3'}`, background: sel ? '#FF6A3D' : '#fff', color: sel ? '#fff' : '#1c1118', fontFamily: "'Onest',sans-serif", textAlign: 'center' }}
                      >
                        <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', color: sel ? '#ffe3d6' : '#9b8f86' }}>{day.wd}</div>
                        <div style={{ fontSize: isMobile ? 18 : 21, fontWeight: 700, marginTop: 3, lineHeight: 1 }}>{day.num}</div>
                        <div style={{ fontSize: 11, marginTop: 3, color: sel ? '#ffe3d6' : '#9b8f86' }}>{day.mo}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Time selector */}
              <div style={{ marginBottom: 26 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#3a2d33', marginBottom: 12 }}>Выберите время (МСК)</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {TIMES.map(t => {
                    const sel = selectedTime === t
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        style={{ cursor: 'pointer', padding: isMobile ? '10px 16px' : '11px 20px', borderRadius: 10, border: `1px solid ${sel ? '#FF6A3D' : '#e6ddd3'}`, background: sel ? '#FF6A3D' : '#fff', color: sel ? '#fff' : '#1c1118', fontFamily: "'Onest',sans-serif", fontSize: 15, fontWeight: 600 }}
                      >
                        {t}
                      </button>
                    )
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                style={{ width: '100%', cursor: canSend ? 'pointer' : 'not-allowed', background: canSend ? '#FF6A3D' : '#f0c9bb', color: '#fff', fontFamily: "'Onest',sans-serif", fontWeight: 700, fontSize: 17, padding: 17, border: 'none', borderRadius: 10 }}
              >
                {canSend ? `Записаться на ${selectedLabel}` : 'Выберите день и время'}
              </button>
              <p style={{ fontSize: 13, color: '#9b8f86', textAlign: 'center', margin: '14px 0 0' }}>
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: isMobile ? '20px 0' : '30px 10px' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#FFE3D6', color: '#FF6A3D', fontSize: 30, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>✓</div>
              <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 12px' }}>Заявка отправлена</h2>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: '#6B5E63', margin: '0 auto 8px', maxWidth: 380 }}>
                Мы свяжемся с вами и подтвердим 30-минутную консультацию:
              </p>
              <div style={{ fontSize: 19, fontWeight: 700, color: '#FF6A3D', marginBottom: 28 }}>{selectedLabel}</div>
              <button
                type="button"
                onClick={handleReset}
                style={{ cursor: 'pointer', background: '#271826', color: '#fff', fontFamily: "'Onest',sans-serif", fontWeight: 700, fontSize: 15, padding: '14px 28px', border: 'none', borderRadius: 9 }}
              >
                Записаться ещё раз
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
