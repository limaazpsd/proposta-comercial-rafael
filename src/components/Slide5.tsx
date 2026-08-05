import { useState, useEffect } from 'react';
import { GraduationCap, PlayCircle, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_LEFT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD, BG_CARD_H, BORDER, SHADOW, SHADOW_H,
} from './design';

export function Slide5({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  const features = [
    {
      icon: <PlayCircle size={24} />,
      title: 'Apresentação da Técnica Nano',
      desc: 'Seção de alto impacto em vídeo ou texto dinâmico para introduzir a metodologia exclusiva e gerar autoridade instantânea.',
      tag: 'METODOLOGIA',
      color: '#38bdf8'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Grade Curricular & Módulos',
      desc: 'Detalhamento visual de tudo que o aluno vai aprender, desde a biossegurança até a aplicação prática em modelos reais.',
      tag: 'CONTEÚDO',
      color: '#a78bfa'
    },
    {
      icon: <Star size={24} />,
      title: 'Prova Social & Depoimentos',
      desc: 'Exibição de alunos reais que transformaram suas carreiras aplicando a técnica, quebrando objeções e gerando desejo.',
      tag: 'CONFIANÇA',
      color: '#facc15'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Oferta Irresistível & Checkout',
      desc: 'Estrutura persuasiva de preço, garantia incondicional e botões de ação (CTA) otimizados para máxima conversão.',
      tag: 'CONVERSÃO',
      color: '#34d399'
    },
  ];

  return (
    <div className="relative overflow-hidden" style={{ width: W, height: H, background: 'transparent', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_LEFT }}>
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div className={`relative z-10 w-full h-full flex flex-col justify-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}>
        <div style={{ maxWidth: 1550, margin: '0 auto', width: '100%' }}>
          <SectionTitle title="Possibilidade 01: LP de Vendas do Curso." mobile={mobile} />

          <p style={{ color: '#94a3b8', fontSize: mobile ? 20 : 18, fontWeight: 500, margin: '-20px 0 36px 0', maxWidth: 1100 }}>
            Uma Landing Page projetada cientificamente para capturar a atenção de barbeiros e iniciantes, doutriná-los sobre a Técnica Nano e <strong style={{ color: 'white' }}>converter visitas em alunos matriculados</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)', gap: mobile ? 20 : 24, alignItems: 'stretch' }}>
            {features.map((item, i) => {
              const isH = hovered === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background: isH ? BG_CARD_H : BG_CARD,
                    border: isH ? `1px solid ${item.color}80` : BORDER,
                    boxShadow: isH ? `0 0 30px ${item.color}20, 0 8px 32px rgba(0,0,0,0.6)` : SHADOW,
                    borderRadius: 22,
                    padding: mobile ? '28px 24px' : '32px 28px',
                    transform: isH ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'default',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                      <IconBadge color={item.color} bg={`${item.color}20`} mobile={mobile}>{item.icon}</IconBadge>
                      <span style={{ color: item.color, fontSize: 10, fontWeight: 800, letterSpacing: '0.18em', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: 99, border: '1px solid rgba(255,255,255,0.08)' }}>
                        {item.tag}
                      </span>
                    </div>

                    <h4 style={{ color: 'white', fontSize: mobile ? 22 : 20, fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1.25 }}>{item.title}</h4>
                    <p style={{ color: '#94a3b8', fontSize: mobile ? 15 : 14, lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
                  </div>
                  
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16, marginTop: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
                     <CheckCircle2 size={16} color={item.color} />
                     <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 600 }}>Incluso na Estrutura</span>
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