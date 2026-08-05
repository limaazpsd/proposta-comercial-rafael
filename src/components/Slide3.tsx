import { useState, useEffect } from 'react';
import { GraduationCap, ShieldCheck, Zap } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_RIGHT, SLIDE_BG_LEFT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD, BG_CARD_H, BORDER, BORDER_H, SHADOW, SHADOW_H,
  BORDER_HOV, BORDER_H_HOV, SHADOW_HOV, SHADOW_H_HOV,
} from './design';

export function Slide3({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  const cardStyle = (i: number, highlight = false) => {
    const isH = hovered === i;
    return {
      background: highlight ? BG_CARD_H : BG_CARD,
      border: isH ? (highlight ? BORDER_H_HOV : BORDER_HOV) : (highlight ? BORDER_H : BORDER),
      boxShadow: isH ? (highlight ? SHADOW_H_HOV : SHADOW_HOV) : (highlight ? SHADOW_H : SHADOW),
      borderRadius: 20,
      padding: mobile ? '28px 24px' : '32px 30px',
      transform: isH ? 'translateY(-6px)' : 'translateY(0)',
      transition: 'all 0.24s ease',
      cursor: 'default',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyIn: 'space-between',
      flex: 1,
    };
  };

  const options = [
    {
      num: '01',
      title: 'LP de Vendas do Curso',
      tag: 'FOCO EM ALUNOS',
      icon: <GraduationCap size={24} />,
      desc: 'Página de alta conversão dedicada exclusivamente à venda do seu Curso / Mentoria de Micropigmentação Capilar.',
      features: ['Apresentação da Técnica Nano', 'Grade Curricular & Depoimentos', 'Quebra de Objeções & Garantia', 'Checkout Direto de Alta Conversão'],
      badgeColor: '#38bdf8',
    },
    {
      num: '02',
      title: 'Site Institucional High-Ticket',
      tag: 'FOCO EM AUTORIDADE',
      icon: <ShieldCheck size={24} />,
      desc: 'Site completo apresentando Rafael Nano, a clínica, todos os procedimentos capilares e cases de sucesso.',
      features: ['Galeria Antes/Depois de Alta Definição', 'Explicação dos Procedimentos (Efeito Raspado, Densidade)', 'História & Credibilidade do Especialista', 'CTAs Estratégicos de Atendimento'],
      badgeColor: '#60a5fa',
      highlight: true,
    },
    {
      num: '03',
      title: 'Funil de Orçamento Inteligente',
      tag: 'FOCO EM CONVERSÃO VIP',
      icon: <Zap size={24} />,
      desc: 'Simulador interativo de avaliação capilar onde o cliente descreve a necessidade e chega pronto no WhatsApp.',
      features: ['Simulador Visual de Grau de Calvície', 'Seleção de Área Desejada (Entradas, Coroa, Total)', 'Resumo Automático Pré-formatado', 'Direcionamento VIP ao WhatsApp'],
      badgeColor: '#34d399',
    },
  ];

  return (
    <div className="relative overflow-hidden" style={{ width: W, height: H, background: 'transparent', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_LEFT }}>
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div className={`relative z-10 w-full h-full flex flex-col justify-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}>
        <div style={{ maxWidth: 1550, margin: '0 auto', width: '100%' }}>
          <SectionTitle title="3 Possibilidades de Implementação." mobile={mobile} />

          <p style={{ color: '#94a3b8', fontSize: mobile ? 20 : 18, fontWeight: 500, margin: '-20px 0 36px 0' }}>
            Modelos adaptáveis ao objetivo estratégico e momento do negócio do cliente:
          </p>

          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: mobile ? 20 : 24, width: '100%' }}>
            {options.map((opt, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={cardStyle(i, opt.highlight)}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <IconBadge color={opt.badgeColor} bg="rgba(29,78,216,0.2)" mobile={mobile}>{opt.icon}</IconBadge>
                    <span style={{ color: opt.badgeColor, fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderRadius: 99, border: '1px solid rgba(255,255,255,0.08)' }}>{opt.tag}</span>
                  </div>

                  <span style={{ color: '#475569', fontSize: 13, fontWeight: 800, letterSpacing: '0.2em' }}>OPÇÃO {opt.num}</span>
                  <h3 style={{ color: 'white', fontSize: mobile ? 26 : 24, fontWeight: 800, margin: '4px 0 12px 0', lineHeight: 1.2 }}>{opt.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: mobile ? 15 : 14, lineHeight: 1.5, margin: '0 0 20px 0' }}>{opt.desc}</p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 18 }}>
                  <p style={{ color: '#64748b', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Principais Recursos:</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {opt.features.map((f, idx) => (
                      <li key={idx} style={{ color: 'rgba(255,255,255,0.85)', fontSize: mobile ? 14 : 13, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#1d4ed8', fontWeight: 900 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}