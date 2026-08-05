import { useState, useEffect } from 'react';
import { ShieldCheck, UserCheck, Layers, Image, HelpCircle } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_RIGHT, SLIDE_BG_LEFT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD, BG_CARD_H, BORDER, BORDER_H, SHADOW, SHADOW_H,
} from './design';

export function Slide5({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  const features = [
    {
      icon: <UserCheck size={22} />,
      title: 'Posicionamento do Especialista',
      desc: 'Sessão sobre a trajetória de Rafael Nano, destacando conquistas, número de procedimentos realizados e o diferencial da técnica Nano.',
      tag: 'AUTORIDADE',
    },
    {
      icon: <Layers size={22} />,
      title: 'Menu Completo de Serviços',
      desc: 'Páginas/Seções dedicadas a cada modalidade: Efeito Raspado, Densidade Capilar, Camuflagem de Cicatrizes e Correção de Trabalhos Antigos.',
      tag: 'TÉCNICA',
    },
    {
      icon: <Image size={22} />,
      title: 'Galeria Interativa Antes/Depois',
      desc: 'Exibição em altíssima resolução com zoom e comparativos das transformações reais dos clientes para gerar desejo imediato.',
      tag: 'PROVA SOCIAL',
    },
    {
      icon: <HelpCircle size={22} />,
      title: 'Quebra de Objeções & FAQ',
      desc: 'Esclarecimento completo de dúvidas sobre dor, durabilidade do pigmento, tempo de recuperação, retoques e cuidados pós-procedimento.',
      tag: 'CONFIANÇA',
    },
  ];

  return (
    <div className="relative overflow-hidden" style={{ width: W, height: H, background: 'transparent', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_LEFT }}>
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div className={`relative z-10 w-full h-full flex flex-col justify-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}>
        <div style={{ maxWidth: 1550, margin: '0 auto', width: '100%' }}>
          <SectionTitle title="Possibilidade 02: Site Institucional High-Ticket." mobile={mobile} />

          <p style={{ color: '#94a3b8', fontSize: mobile ? 20 : 18, fontWeight: 500, margin: '-20px 0 36px 0' }}>
            Consolidando a presença da marca com um hub de autoridade que transmite elegância, segurança e sofisticação.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 20 : 24 }}>
            {features.map((item, i) => {
              const isH = hovered === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background: isH ? BG_CARD_H : BG_CARD,
                    border: isH ? '1px solid rgba(37,99,235,0.65)' : BORDER,
                    boxShadow: isH ? SHADOW_H : SHADOW,
                    borderRadius: 20,
                    padding: mobile ? '26px 22px' : '28px 30px',
                    transform: isH ? 'translateY(-4px)' : 'translateY(0)',
                    transition: 'all 0.22s ease',
                    cursor: 'default',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <IconBadge color="#60a5fa" bg="rgba(37,99,235,0.2)" mobile={mobile}>{item.icon}</IconBadge>
                    <span style={{ color: '#60a5fa', fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', background: 'rgba(29,78,216,0.18)', padding: '5px 12px', borderRadius: 99, border: '1px solid rgba(37,99,235,0.3)' }}>{item.tag}</span>
                  </div>

                  <h4 style={{ color: 'white', fontSize: mobile ? 22 : 20, fontWeight: 800, margin: '0 0 10px 0' }}>{item.title}</h4>
                  <p style={{ color: '#94a3b8', fontSize: mobile ? 15 : 14, lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}