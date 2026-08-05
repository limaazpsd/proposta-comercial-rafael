import { useState, useEffect } from 'react';
import { ShieldCheck, Zap, GraduationCap } from 'lucide-react';
import { SLIDE_BG_LEFT, GRID_CSS, SLIDE_PAD, SLIDE_PAD_MOBILE } from './design';

function StatCard({ icon, value, label, sub, mobile }: { icon: React.ReactNode; value: string; label: string; sub?: string; mobile?: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: 1,
        background: 'rgba(10, 15, 35, 0.92)',
        border: hov ? '1px solid rgba(37,99,235,0.65)' : '1px solid rgba(255,255,255,0.08)',
        borderRadius: 18,
        padding: mobile ? '20px 24px' : '28px 32px',
        display: 'flex', alignItems: 'center', gap: mobile ? 16 : 20,
        boxShadow: hov
          ? '0 0 40px rgba(37,99,235,0.18), 0 6px 28px rgba(0,0,0,0.5)'
          : '0 4px 24px rgba(0,0,0,0.4)',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.22s ease',
        cursor: 'default',
        minWidth: 0,
        width: '100%',
      }}
    >
      <div style={{
        width: mobile ? 48 : 54, height: mobile ? 48 : 54, borderRadius: 14, flexShrink: 0,
        background: 'rgba(29,78,216,0.22)',
        border: '1px solid rgba(37,99,235,0.35)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#60a5fa',
      }}>
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{ color: 'white', fontWeight: 800, fontSize: mobile ? 32 : 30, lineHeight: 1.1, margin: 0 }}>{value}</p>
        <p style={{ color: '#94a3b8', fontWeight: 700, fontSize: mobile ? 15 : 13, margin: '6px 0 0', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</p>
        {sub && <p style={{ color: '#38bdf8', fontWeight: 600, fontSize: mobile ? 14 : 13, margin: '4px 0 0' }}>{sub}</p>}
      </div>
    </div>
  );
}

export function Slide1({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 80); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: W, height: H, background: 'transparent', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_LEFT }}
    >
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div className="absolute pointer-events-none" style={{
        width: mobile ? 700 : 1100, height: mobile ? 600 : 800, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(29,78,216,0.12) 0%, transparent 65%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }} />

      <div
        className={`relative z-10 w-full h-full flex flex-col items-center justify-center transition-all duration-900 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={mobile ? SLIDE_PAD_MOBILE : { padding: '100px 240px 90px' }}
      >
        {/* Pill badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: mobile ? '10px 26px' : '9px 24px', borderRadius: 999,
          background: 'rgba(29,78,216,0.15)',
          border: '1px solid rgba(37,99,235,0.35)',
          marginBottom: mobile ? 24 : 32,
        }}>
          <span style={{ color: '#60a5fa', fontSize: mobile ? 22 : 16, lineHeight: 1 }}>💎</span>
          <span style={{ color: '#94a3b8', fontWeight: 700, fontSize: mobile ? 16 : 13, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Ápice Digital × Rafael Nano Pigmentação Capilar
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 800,
          fontSize: mobile ? 80 : 96,
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          color: 'white',
          margin: 0,
          marginBottom: mobile ? 18 : 22,
        }}>
          Proposta Comercial &<br />
          <span style={{ color: '#1d4ed8' }}>Estratégia Digital</span>
          <span style={{ color: 'white' }}>.</span>
        </h1>

        <div style={{ height: 3, width: mobile ? 70 : 90, borderRadius: 99, background: 'linear-gradient(to right, #1d4ed8, #38bdf8)', marginBottom: mobile ? 20 : 26 }} />

        {/* Subtitle */}
        <p style={{
          color: 'rgba(255,255,255,0.85)',
          fontWeight: 500,
          fontSize: mobile ? 22 : 24,
          textAlign: 'center',
          letterSpacing: '-0.01em',
          margin: 0,
          marginBottom: 8,
          maxWidth: 900,
        }}>
          3 Possibilidades Estratégicas para Escalar Atendimentos de Micropigmentação e a Venda do Seu Curso
        </p>

        <p style={{ color: '#64748b', fontSize: mobile ? 18 : 16, fontWeight: 500, margin: 0, marginBottom: mobile ? 36 : 52, textAlign: 'center' }}>
          Elaborado para:<span style={{ color: '#60a5fa', fontWeight: 700 }}> @rafaelnanopigmentacaocapilar</span>
        </p>

        {/* 3 cards */}
        <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: mobile ? 16 : 20, width: '100%', maxWidth: mobile ? 700 : 'none' }}>
          <StatCard
            icon={<ShieldCheck size={mobile ? 30 : 26} />}
            value="Autoridade High-Ticket"
            label="SITE INSTITUCIONAL"
            sub="Apresentação de marca & resultados"
            mobile={mobile}
          />
          <StatCard
            icon={<Zap size={mobile ? 30 : 26} />}
            value="Orçamento Inteligente"
            label="FUNIL AUTOMÁTICO"
            sub="Triagem de calvície via WhatsApp"
            mobile={mobile}
          />
          <StatCard
            icon={<GraduationCap size={mobile ? 30 : 26} />}
            value="Escala de Alunos"
            label="LANDING PAGE DO CURSO"
            sub="Página de alta conversão de vendas"
            mobile={mobile}
          />
        </div>
      </div>
    </div>
  );
}