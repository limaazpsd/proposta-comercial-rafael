import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_RIGHT, GRID_CSS, SectionTitle, BG_CARD, BORDER, SHADOW, SHADOW_H } from './design';

export function Slide8({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  const plans = [
    {
      id: 1,
      name: 'PLANO 01 · ESSENCIAL',
      tag: 'APENAS CURSO',
      price: '1.550',
      period: 'investimento único',
      desc: 'Desenvolvimento exclusivo da Landing Page High-Ticket de vendas do seu Curso de Micropigmentação Capilar.',
      features: [
        'Landing Page de Vendas de Alta Conversão',
        'Seção com Vídeo de Apresentação & Promessa',
        'Grade Curricular Detalhada da Técnica Nano',
        'Depoimentos de Alunos & Prova Social',
        'Certificados, Bônus & Quebra de Objeções',
        'Checkout Direto Integrado (Eduzz/Kiwify/Hotmart)',
      ],
      notIncluded: [
        'Sem Site Institucional da Clínica',
        'Sem Sistema Inteligente de Pedidos de Orçamento',
      ],
      highlight: false,
    },
    {
      id: 2,
      name: 'PLANO 02 · COMBO ECOSSISTEMA COMPLETO',
      tag: '⭐ RECOMENDADO ÁPICE',
      price: '1.850',
      period: 'investimento único (Melhor Custo-Benefício)',
      desc: 'O Projeto TOTAL reunindo o Site Institucional + LP do Curso + Sistema Inteligente de Orçamento integrado no site.',
      features: [
        'Site Institucional de Autoridade High-Ticket (Posicionamento & Procedimentos)',
        'Galeria Interativa Antes/Depois em Alta Definição',
        'Landing Page Persuasiva para Venda do Curso de Micropigmentação',
        'Sistema Inteligente de Pedidos de Orçamento integrado no Site Institucional',
        'Simulador Capilar de Avaliação do Grau de Calvície (Escala Norwood)',
        'Encaminhamento VIP de Leads Qualificados pronto no WhatsApp do Rafael',
        'Otimização de Velocidade, SEO Base & Design Exclusivo no Figma',
      ],
      anchorBonus: 'Por apenas +R$ 300 você adquire todo o ecossistema e o sistema de orçamento!',
      highlight: true,
    },
  ];

  return (
    <div className="relative overflow-hidden" style={{ width: W, height: H, background: 'transparent', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_RIGHT }}>
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div className={`relative z-10 w-full h-full flex flex-col justify-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}>
        <div style={{ maxWidth: 1550, margin: '0 auto', width: '100%' }}>
          <SectionTitle title="Proposta Comercial & Precificação." mobile={mobile} />

          <p style={{ color: '#94a3b8', fontSize: mobile ? 20 : 17, fontWeight: 500, margin: '-22px 0 28px 0' }}>
            Condição especial de investimento elaborada para o especialista <strong style={{ color: 'white' }}>Rafael Nano Pigmentação Capilar</strong>:
          </p>

          {/* 2 CONTAINERS AJUSTADOS SEM SCROLL */}
          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: mobile ? 20 : 28, width: '100%', alignItems: 'stretch' }}>
            {plans.map((pl) => {
              const isH = hovered === pl.id;
              return (
                <div
                  key={pl.id}
                  onMouseEnter={() => setHovered(pl.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    flex: pl.highlight ? 1.25 : 1,
                    background: pl.highlight ? 'linear-gradient(135deg, rgba(10, 25, 60, 0.98) 0%, rgba(15, 30, 80, 0.95) 100%)' : BG_CARD,
                    border: pl.highlight ? '2px solid rgba(37,99,235,0.85)' : isH ? '1px solid rgba(255,255,255,0.2)' : BORDER,
                    boxShadow: pl.highlight ? '0 0 45px rgba(37,99,235,0.25), 0 8px 30px rgba(0,0,0,0.6)' : isH ? SHADOW_H : SHADOW,
                    borderRadius: 22,
                    padding: mobile ? '24px 20px' : '28px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transform: pl.highlight ? 'scale(1.015)' : isH ? 'translateY(-4px)' : 'translateY(0)',
                    transition: 'all 0.24s ease',
                    position: 'relative',
                  }}
                >
                  {pl.highlight && (
                    <div style={{
                      position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                      background: 'linear-gradient(to right, #1d4ed8, #38bdf8)', color: 'white',
                      fontWeight: 900, fontSize: 10, letterSpacing: '0.16em', padding: '5px 18px',
                      borderRadius: 99, boxShadow: '0 4px 14px rgba(29,78,216,0.6)', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
                    }}>
                      <Sparkles size={13} /> MAIS VENDIDO & RECOMENDADO ÁPICE
                    </div>
                  )}

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ color: pl.highlight ? '#60a5fa' : '#94a3b8', fontSize: 11, fontWeight: 900, letterSpacing: '0.15em' }}>{pl.name}</span>
                      <span style={{ background: pl.highlight ? 'rgba(37,99,235,0.25)' : 'rgba(255,255,255,0.06)', color: pl.highlight ? '#38bdf8' : '#94a3b8', fontSize: 10, fontWeight: 800, padding: '3px 9px', borderRadius: 99 }}>{pl.tag}</span>
                    </div>

                    {/* Price */}
                    <div style={{ margin: '10px 0 4px 0', display: 'flex', alignItems: 'baseline', gap: 4 }}>
                      <span style={{ color: pl.highlight ? '#60a5fa' : '#64748b', fontSize: 18, fontWeight: 700 }}>R$</span>
                      <span style={{ color: 'white', fontSize: mobile ? 46 : 48, fontWeight: 900, lineHeight: 1 }}>{pl.price}</span>
                      <span style={{ color: pl.highlight ? '#38bdf8' : '#64748b', fontSize: 12, fontWeight: 600, marginLeft: 6 }}>{pl.period}</span>
                    </div>

                    {pl.anchorBonus && (
                      <div style={{ background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.35)', borderRadius: 10, padding: '8px 12px', margin: '10px 0 14px 0', color: '#38bdf8', fontSize: 12, fontWeight: 800 }}>
                        🔥 {pl.anchorBonus}
                      </div>
                    )}

                    <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.4, margin: '0 0 14px 0' }}>{pl.desc}</p>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14 }}>
                      <p style={{ color: pl.highlight ? '#60a5fa' : '#64748b', fontSize: 10, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>O QUE ESTÁ INCLUSO NO PROJETO:</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                        {pl.features.map((f, idx) => (
                          <li key={idx} style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                            <span style={{ color: pl.highlight ? '#38bdf8' : '#1d4ed8', fontWeight: 900, marginTop: 1 }}>✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                        {pl.notIncluded?.map((f, idx) => (
                          <li key={idx} style={{ color: '#64748b', fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                            <span style={{ color: '#ef4444', fontWeight: 900, marginTop: 1 }}>✕</span>
                            <span style={{ textDecoration: 'line-through' }}>{f}</span>
                          </li>
                        ))}
                      </ul>
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