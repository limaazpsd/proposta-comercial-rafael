import { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, Zap, GraduationCap, CheckCircle2, TrendingUp, Star } from 'lucide-react';
import { SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_RIGHT, GRID_CSS, SectionTitle, IconBadge } from './design';

export function Slide7({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  const comparisonColumns = [
    {
      id: 1,
      name: 'OPÇÃO 01: LP DO CURSO',
      subtitle: 'Escala em Ensino',
      icon: <GraduationCap size={22} />,
      color: '#38bdf8',
      bg: 'rgba(10, 18, 40, 0.92)',
      border: '1px solid rgba(56,189,248,0.25)',
      highlights: [
        { label: 'Foco:', val: 'Venda do Curso / Mentoria' },
        { label: 'Público:', val: 'Futuros Alunos & Barbeiros' },
        { label: 'Recurso:', val: 'Vídeos & Grade Curricular' },
        { label: 'Conversão:', val: 'Checkout Direto do Curso' },
      ],
      badge: 'ALUNOS',
    },
    {
      id: 2,
      name: 'OPÇÃO 02: INSTITUCIONAL',
      subtitle: 'Presença & Marca',
      icon: <ShieldCheck size={22} />,
      color: '#60a5fa',
      bg: 'rgba(10, 18, 40, 0.92)',
      border: '1px solid rgba(37,99,235,0.25)',
      highlights: [
        { label: 'Foco:', val: 'Autoridade & Credibilidade' },
        { label: 'Público:', val: 'Clientes High-Ticket' },
        { label: 'Recurso:', val: 'Galeria Antes/Depois HD' },
        { label: 'Conversão:', val: 'Valorização do Serviço' },
      ],
      badge: 'AUTORIDADE',
    },
    {
      id: 3,
      name: 'OPÇÃO 03: SIMULADOR',
      subtitle: 'Triagem no WhatsApp',
      icon: <Zap size={22} />,
      color: '#34d399',
      bg: 'rgba(10, 18, 40, 0.92)',
      border: '1px solid rgba(34,197,94,0.25)',
      highlights: [
        { label: 'Foco:', val: 'Orçamento Pré-Qualificado' },
        { label: 'Público:', val: 'Leads com Dúvida no Grau' },
        { label: 'Recurso:', val: 'Simulador Norwood' },
        { label: 'Conversão:', val: 'Lead Quente no WhatsApp' },
      ],
      badge: 'TRIAGEM',
    },
    {
      id: 4,
      name: 'COMBO ECOSSISTEMA TOTAL',
      subtitle: 'Solução Completa 3 em 1',
      icon: <Sparkles size={24} />,
      color: '#facc15',
      bg: 'linear-gradient(135deg, rgba(15, 30, 80, 0.96) 0%, rgba(20, 40, 100, 0.95) 100%)',
      border: '2px solid rgba(37,99,235,0.85)',
      boxShadow: '0 0 50px rgba(37,99,235,0.3), 0 8px 32px rgba(0,0,0,0.6)',
      isCombo: true,
      highlights: [
        { label: 'Foco:', val: 'Alunos + Atendimentos VIP' },
        { label: 'Público:', val: '100% da sua Audiência' },
        { label: 'Recurso:', val: 'Domínio 100% Integrado' },
        { label: 'Conversão:', val: 'Retorno Máximo no Negócio' },
      ],
      badge: '⭐ RECOMENDADO ÁPICE',
    },
  ];

  return (
    <div className="relative overflow-hidden" style={{ width: W, height: H, background: 'transparent', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_RIGHT }}>
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div className={`relative z-10 w-full h-full flex flex-col justify-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}>
        <div style={{ maxWidth: 1600, margin: '0 auto', width: '100%' }}>
          <SectionTitle title="Matriz Comparativa das Possividades." mobile={mobile} />

          <p style={{ color: '#94a3b8', fontSize: mobile ? 20 : 18, fontWeight: 500, margin: '-20px 0 32px 0' }}>
            Visão intuitiva e estratégica: porque a união das <strong style={{ color: 'white' }}>3 verticais em um único ecossistema</strong> gera o maior retorno.
          </p>

          {/* 4 CONTAINERS LADO A LADO */}
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)', gap: mobile ? 18 : 22, width: '100%', alignItems: 'stretch' }}>
            {comparisonColumns.map((col) => {
              const isH = hovered === col.id;
              return (
                <div
                  key={col.id}
                  onMouseEnter={() => setHovered(col.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background: col.bg,
                    border: isH ? '1px solid rgba(37,99,235,0.85)' : col.border,
                    boxShadow: col.isCombo ? col.boxShadow : isH ? '0 0 35px rgba(37,99,235,0.2), 0 8px 24px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.4)',
                    borderRadius: 22,
                    padding: mobile ? '24px 20px' : '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transform: col.isCombo ? 'scale(1.03)' : isH ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.24s ease',
                    position: 'relative',
                  }}
                >
                  {col.isCombo && (
                    <div style={{
                      position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                      background: 'linear-gradient(to right, #1d4ed8, #38bdf8)', color: 'white',
                      fontWeight: 900, fontSize: 10, letterSpacing: '0.16em', padding: '5px 16px',
                      borderRadius: 99, boxShadow: '0 4px 14px rgba(29,78,216,0.6)', whiteSpace: 'nowrap',
                    }}>
                      {col.badge}
                    </div>
                  )}

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                      <IconBadge color={col.color} bg="rgba(29,78,216,0.2)" mobile={mobile}>{col.icon}</IconBadge>
                      {!col.isCombo && (
                        <span style={{ color: col.color, fontSize: 10, fontWeight: 800, background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: 99, border: '1px solid rgba(255,255,255,0.08)' }}>
                          {col.badge}
                        </span>
                      )}
                    </div>

                    <h4 style={{ color: 'white', fontSize: mobile ? 20 : 18, fontWeight: 900, margin: '0 0 4px 0', lineHeight: 1.25 }}>{col.name}</h4>
                    <p style={{ color: col.isCombo ? '#38bdf8' : '#94a3b8', fontSize: 12, fontWeight: 600, margin: '0 0 20px 0' }}>{col.subtitle}</p>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {col.highlights.map((h, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <span style={{ color: '#64748b', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{h.label}</span>
                          <span style={{ color: col.isCombo ? '#ffffff' : 'rgba(255,255,255,0.88)', fontSize: 13, fontWeight: col.isCombo ? 700 : 500 }}>
                            {col.isCombo ? `✓ ${h.val}` : h.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14, marginTop: 20 }}>
                    <div style={{
                      background: col.isCombo ? 'linear-gradient(to right, #1d4ed8, #2563eb)' : 'rgba(255,255,255,0.04)',
                      color: col.isCombo ? 'white' : '#94a3b8',
                      fontSize: 12,
                      fontWeight: 800,
                      padding: '10px 14px',
                      borderRadius: 12,
                      textAlign: 'center',
                      boxShadow: col.isCombo ? '0 0 20px rgba(37,99,235,0.5)' : 'none',
                    }}>
                      {col.isCombo ? '🔥 ECOSSISTEMA COMPLETO' : 'SOLUÇÃO INDIVIDUAL'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}