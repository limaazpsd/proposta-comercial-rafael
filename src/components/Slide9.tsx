import { useState, useEffect } from 'react';
import { Rocket, ShieldCheck, Clock, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_LEFT, GRID_CSS } from './design';

export function Slide9({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  return (
    <div className="relative overflow-hidden" style={{ width: W, height: H, background: 'transparent', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_LEFT }}>
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div className="absolute pointer-events-none" style={{
        width: mobile ? 700 : 1000, height: mobile ? 600 : 700, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, transparent 65%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }} />

      <div
        className={`relative z-10 w-full h-full flex flex-col items-center justify-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}
      >
        <div style={{ maxWidth: 1100, width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: mobile ? '10px 24px' : '8px 22px', borderRadius: 999,
            background: 'rgba(34,197,94,0.15)',
            border: '1px solid rgba(34,197,94,0.35)',
            marginBottom: mobile ? 22 : 26,
          }}>
            <span style={{ color: '#34d399', fontSize: mobile ? 22 : 16 }}>🚀</span>
            <span style={{ color: '#34d399', fontWeight: 800, fontSize: mobile ? 16 : 13, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              PRÓXIMO PASSO: DECOLAR O SEU NEGÓCIO
            </span>
          </div>

          <h2 style={{
            color: 'white',
            fontWeight: 900,
            fontSize: mobile ? 60 : 72,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: 0,
            marginBottom: mobile ? 16 : 20,
          }}>
            Pronto para Dominar o Mercado &<br />
            <span style={{ color: '#38bdf8' }}>Escalar seus Resultados?</span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: mobile ? 20 : 21,
            fontWeight: 500,
            lineHeight: 1.45,
            maxWidth: 820,
            margin: '0 0 32px 0',
          }}>
            Vamos transformar a autoridade do <strong style={{ color: 'white' }}>Rafael Nano</strong> em um ecossistema digital campeão de agendamentos e vendas de cursos.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 14 : 18, width: '100%', marginBottom: mobile ? 28 : 38 }}>
            {[
              { icon: <Clock size={20} />, title: 'Início Imediato', desc: 'Briefing e estratégias disparadas logo após o fechamento.' },
              { icon: <ShieldCheck size={20} />, title: 'Design 100% Exclusivo', desc: 'Sem modelos prontos, projeto desenhado sob medida no Figma.' },
              { icon: <CheckCircle2 size={20} />, title: 'Garantia de Qualidade', desc: 'Acompanhamento e aprovação de cada etapa com a Ápice Digital.' },
            ].map((g, i) => (
              <div key={i} style={{ background: 'rgba(10, 15, 35, 0.88)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '18px 18px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#60a5fa', marginBottom: 6 }}>
                  {g.icon}
                  <span style={{ color: 'white', fontWeight: 800, fontSize: 15 }}>{g.title}</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: 13, margin: 0, lineHeight: 1.4 }}>{g.desc}</p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(29,78,216,0.3) 0%, rgba(37,99,235,0.15) 100%)',
            border: '1px solid rgba(37,99,235,0.5)',
            borderRadius: 22,
            padding: mobile ? '26px 22px' : '28px 44px',
            display: 'flex',
            flexDirection: mobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            width: '100%',
            boxShadow: '0 0 50px rgba(37,99,235,0.2)',
          }}>
            <div style={{ textAlign: mobile ? 'center' : 'left' }}>
              <span style={{ color: '#38bdf8', fontSize: 12, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase' }}>VAMOS CONSTRUIR JUNTOS</span>
              <h3 style={{ color: 'white', fontSize: mobile ? 24 : 26, fontWeight: 900, margin: '4px 0 4px 0' }}>Aprovar Proposta & Agendar Kick-off</h3>
              <p style={{ color: '#94a3b8', fontSize: 14, margin: 0 }}>Garantia do valor promocional de R$ 1.850 e prioridade no cronograma.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: mobile ? '100%' : 'auto' }}>
              <button
                onClick={() => window.open('https://wa.me/?text=Olá!%20Gostaria%20de%20aprovar%20a%20proposta%20do%20site%20para%20o%20Rafael%20Nano!', '_blank')}
                style={{
                  background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: mobile ? 18 : 16,
                  padding: mobile ? '16px 28px' : '16px 36px',
                  borderRadius: 14,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 0 30px rgba(37,99,235,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <MessageCircle size={20} /> Aprovar Proposta no WhatsApp <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}