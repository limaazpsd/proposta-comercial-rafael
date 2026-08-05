import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide1 } from './components/Slide1';
import { Slide2 } from './components/Slide2';
import { Slide3 } from './components/Slide3';
import { Slide4 } from './components/Slide4';
import { Slide5 } from './components/Slide5';
import { Slide6 } from './components/Slide6';
import { Slide7 } from './components/Slide7';
import { Slide8 } from './components/Slide8';
import { Slide9 } from './components/Slide9';

const DESKTOP = { W: 1920, H: 1080 };
const MOBILE  = { W: 1080, H: 1800 };

const slides = [
  { component: Slide1, num: '01', title: 'INTRODUÇÃO' },
  { component: Slide2, num: '02', title: 'DIAGNÓSTICO DIGITAL' },
  { component: Slide3, num: '03', title: 'POSSIBILIDADES' },
  { component: Slide4, num: '04', title: 'PORTFÓLIO ÁPICE' },
  { component: Slide5, num: '05', title: 'LP DE VENDAS DO CURSO' },
  { component: Slide6, num: '06', title: 'SITE & ORÇAMENTO INTELIGENTE' },
  { component: Slide7, num: '07', title: 'MATRIZ COMPARATIVA' },
  { component: Slide8, num: '08', title: 'PROPOSTA COMERCIAL' },
  { component: Slide9, num: '09', title: 'PRÓXIMOS PASSOS' },
];

function useLayout() {
  const calc = () => {
    const portrait = window.innerWidth < window.innerHeight;
    const { W, H } = portrait ? MOBILE : DESKTOP;
    return { W, H, isMobile: portrait, scale: Math.min(window.innerWidth / W, window.innerHeight / H) };
  };
  const [layout, setLayout] = useState(calc);
  useEffect(() => {
    const h = () => setLayout(calc());
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return layout;
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const { W, H, scale, isMobile } = useLayout();

  // Synchronous navigation - 100% crash proof & immune to race conditions
  const goTo = (index: number) => {
    if (index < 0 || index >= slides.length) return;
    setCurrent(index);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current]);

  // Swipe support for mobile
  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    };
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    return () => { window.removeEventListener('touchstart', onTouchStart); window.removeEventListener('touchend', onTouchEnd); };
  }, [current]);

  const CurrentSlideComp = slides[current]?.component || Slide1;
  const scaledW = W * scale;
  const scaledH = H * scale;
  const { num, title } = slides[current] || slides[0];

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#050912', position: 'relative', fontFamily: "'Sora', sans-serif" }}>

      {/* ── STYLES FOR ANIMATIONS & SMOOTH TRANSITION ── */}
      <style>{`
        @keyframes floatOrb1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(35vw, 25vh) scale(1.15); }
          66% { transform: translate(15vw, 55vh) scale(0.92); }
          100% { transform: translate(45vw, -10vh) scale(1.08); }
        }
        @keyframes floatOrb2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-30vw, -35vh) scale(1.12); }
          66% { transform: translate(-50vw, -15vh) scale(0.9); }
          100% { transform: translate(-22vw, -50vh) scale(1.22); }
        }
        @keyframes floatOrb3 {
          0% { transform: translate(0px, 0px) scale(0.9); }
          50% { transform: translate(-25vw, 30vh) scale(1.25); }
          100% { transform: translate(30vw, -25vh) scale(0.95); }
        }
        @keyframes slideInFade {
          from { opacity: 0; transform: scale(0.995); }
          to { opacity: 1; transform: scale(1); }
        }
        .slide-container-active {
          animation: slideInFade 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ── GLOBAL PERSISTENT ANIMATED BACKGROUND (UNTOUCHED BY SLIDE SWITCHES) ── */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {/* Dark base */}
        <div style={{ position: 'absolute', inset: 0, background: '#050912' }} />

        {/* Floating Orb 1 */}
        <div
          style={{
            position: 'absolute',
            width: '70vw',
            height: '70vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(29, 78, 216, 0.32) 0%, rgba(37, 99, 235, 0.12) 45%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'floatOrb1 26s ease-in-out infinite alternate',
            top: '-15%',
            left: '-15%',
          }}
        />

        {/* Floating Orb 2 */}
        <div
          style={{
            position: 'absolute',
            width: '60vw',
            height: '60vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 75%)',
            filter: 'blur(110px)',
            animation: 'floatOrb2 32s ease-in-out infinite alternate',
            bottom: '-20%',
            right: '-12%',
          }}
        />

        {/* Floating Orb 3 */}
        <div
          style={{
            position: 'absolute',
            width: '50vw',
            height: '50vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79, 70, 229, 0.22) 0%, rgba(30, 58, 138, 0.1) 50%, transparent 70%)',
            filter: 'blur(90px)',
            animation: 'floatOrb3 22s ease-in-out infinite alternate',
            top: '25%',
            left: '25%',
          }}
        />

        {/* Tech Grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(56,189,248,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.035) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.75,
        }} />
      </div>

      {/* ── SLIDE CANVAS ── */}
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <div
          key={current}
          className="slide-container-active"
          style={{
            width: scaledW, height: scaledH,
            position: 'relative',
          }}
        >
          <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CurrentSlideComp mobile={isMobile} />
          </div>
        </div>
      </div>

      {/* ── HEADER & FOOTER NAV (GLASSMORPHISM SEM CORTES DE FAIXA ESCURA) ── */}
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 10 }}>
        <div style={{ width: scaledW, height: scaledH, position: 'relative' }}>
          <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>

            {/* HEADER - CLEAN GLASS BAR */}
            <div
              style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                zIndex: 500,
                height: isMobile ? 110 : undefined,
                padding: isMobile ? '0 60px' : '24px 80px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'linear-gradient(to bottom, rgba(5,9,18,0.75) 0%, rgba(5,9,18,0) 100%)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 24 : 16 }}>
                <span style={{ color: '#1d4ed8', fontWeight: 800, fontSize: isMobile ? 54 : 24, letterSpacing: 2 }}>{num}</span>
                <div style={{ width: 2, height: isMobile ? 48 : 24, background: 'rgba(255,255,255,0.2)' }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: isMobile ? 26 : 14, letterSpacing: '0.22em' }}>{title}</span>
              </div>
              <img src="/apice-digital.png" alt="Ápice" style={{ height: isMobile ? 72 : 34, objectFit: 'contain' }} />
            </div>

            {/* FOOTER NAV - GLASS PILL */}
            <div style={{ position: 'absolute', bottom: isMobile ? 30 : 24, left: '50%', transform: 'translateX(-50%)', zIndex: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? 20 : 12, pointerEvents: 'auto' }}>
              {/* Progress segments */}
              <div style={{ display: 'flex', gap: isMobile ? 12 : 8, width: isMobile ? 700 : 420 }}>
                {slides.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    onMouseEnter={() => setHoveredSlide(i)}
                    onMouseLeave={() => setHoveredSlide(null)}
                    title={s.title}
                    style={{
                      flex: 1, height: isMobile ? 8 : 5, borderRadius: 999, border: 'none', cursor: 'pointer',
                      background: i === current ? '#1d4ed8' : i < current ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.1)',
                      boxShadow: i === current ? '0 0 12px rgba(29,78,216,0.8)' : 'none',
                      transition: 'all 0.3s ease',
                      transform: hoveredSlide === i ? 'scaleY(1.8)' : 'scaleY(1)',
                      minWidth: 0,
                    }}
                  />
                ))}
              </div>

              {/* Pill */}
              <div style={{
                background: 'rgba(10, 15, 35, 0.82)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 999,
                padding: isMobile ? '18px 48px' : '12px 30px',
                display: 'flex', alignItems: 'center', gap: isMobile ? 52 : 32,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}>
                <button
                  onClick={prev} disabled={current === 0}
                  style={{ background: 'none', border: 'none', cursor: current === 0 ? 'default' : 'pointer', color: current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', transition: 'color 0.2s', padding: '4px 6px' }}
                >
                  <ChevronLeft size={isMobile ? 36 : 22} />
                </button>
                <div style={{ textAlign: 'center', userSelect: 'none' }}>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: isMobile ? 18 : 11, fontWeight: 700, letterSpacing: '0.2em', marginBottom: isMobile ? 6 : 2 }}>{title}</div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: isMobile ? 32 : 18 }}>{current + 1} / {slides.length}</div>
                </div>
                <button
                  onClick={next} disabled={current === slides.length - 1}
                  style={{ background: 'none', border: 'none', cursor: current === slides.length - 1 ? 'default' : 'pointer', color: current === slides.length - 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', transition: 'color 0.2s', padding: '4px 6px' }}
                >
                  <ChevronRight size={isMobile ? 36 : 22} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}