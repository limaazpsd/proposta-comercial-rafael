import { useState, useEffect } from 'react';
import { ShieldCheck, Zap, ArrowRight, Smartphone, CheckCircle2 } from 'lucide-react';
import { SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_RIGHT, GRID_CSS, SectionTitle, IconBadge, BG_CARD } from './design';

export function Slide6({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  const steps = [
    {
      id: 1,
      icon: <ShieldCheck size={28} />,
      color: '#38bdf8',
      bg: 'rgba(56,189,248,0.15)',
      title: 'Pilar 1: Autoridade Institucional',
      desc: 'O cliente acessa um Site High-Ticket de altíssimo padrão. Ele visualiza a história do Rafael Nano, entende a exclusividade da técnica e se impressiona com a Galeria de Resultados em HD.',
      perks: ['Credibilidade Imediata', 'Posicionamento Premium'],
    },
    {
      id: 2,
      icon: <Zap size={28} />,
      color: '#34d399',
      bg: 'rgba(34,197,94,0.15)',
      title: 'Pilar 2: Triagem Interativa',
      desc: 'No próprio site, o cliente é convidado a fazer uma avaliação online rápida. Ele seleciona o seu grau de calvície (Escala Norwood) através de um simulador visual, eliminando o contato de curiosos.',
      perks: ['Fim do "Quanto Custa?"', 'Lead Pré-Qualificado'],
    },
    {
      id: 3,
      icon: <Smartphone size={28} />,
      color: '#60a5fa',
      bg: 'rgba(96,165,250,0.15)',
      title: 'Pilar 3: Fechamento no WhatsApp',
      desc: 'O pedido de orçamento chega no seu WhatsApp já mastigado: com o nome, área desejada e grau de calvície do cliente. O fechamento torna-se 10x mais rápido e eficiente.',
      perks: ['Atendimento Ágil', 'Conversão Máxima'],
    },
  ];

  return (
    <div className="relative overflow-hidden" style={{ width: W, height: H, background: 'transparent', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_RIGHT }}>
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div className={`relative z-10 w-full h-full flex flex-col justify-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}>
        <div style={{ maxWidth: 1600, margin: '0 auto', width: '100%' }}>
          <SectionTitle title="Possibilidade 02 & 03: O Ecossistema Integrado." mobile={mobile} />

          <p style={{ color: '#94a3b8', fontSize: mobile ? 20 : 18, fontWeight: 500, margin: '-22px 0 40px 0', maxWidth: 1000 }}>
            Esqueça os "cards" separados. Veja como o <strong style={{ color: 'white' }}>Site Institucional</strong> e o <strong style={{ color: 'white' }}>Orçamento Inteligente</strong> funcionam juntos como uma máquina de vendas:
          </p>

          {/* FLUXO HORIZONTAL */}
          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: mobile ? 20 : 0, alignItems: mobile ? 'center' : 'stretch', justifyContent: 'space-between', position: 'relative' }}>
            
            {/* Linha conectora de fundo (apenas Desktop) */}
            {!mobile && (
              <div style={{
                position: 'absolute', top: 50, left: '10%', right: '10%', height: 2,
                background: 'linear-gradient(90deg, rgba(56,189,248,0.1) 0%, rgba(52,211,153,0.3) 50%, rgba(96,165,250,0.1) 100%)',
                zIndex: 0
              }} />
            )}

            {steps.map((step, index) => {
              const isH = hovered === step.id;
              return (
                <div key={step.id} style={{ display: 'flex', alignItems: 'center', width: mobile ? '100%' : '31%', position: 'relative', zIndex: 1 }}>
                  
                  <div
                    onMouseEnter={() => setHovered(step.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      background: 'rgba(10, 18, 40, 0.95)',
                      border: isH ? `1px solid ${step.color}` : '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 22,
                      padding: mobile ? '30px 24px' : '40px 32px',
                      boxShadow: isH ? `0 0 40px ${step.color}25, 0 10px 30px rgba(0,0,0,0.5)` : '0 4px 24px rgba(0,0,0,0.4)',
                      transition: 'all 0.3s ease',
                      transform: isH ? 'translateY(-8px)' : 'translateY(0)',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    {/* Ícone Redondo Flutuante no Topo */}
                    <div style={{ 
                      width: 80, height: 80, borderRadius: '50%', background: step.bg, border: `1px solid ${step.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: step.color,
                      marginBottom: 24, boxShadow: `0 0 20px ${step.color}20`
                    }}>
                      {step.icon}
                    </div>

                    <h4 style={{ color: 'white', fontSize: mobile ? 22 : 24, fontWeight: 900, marginBottom: 12, lineHeight: 1.2 }}>
                      {step.title}
                    </h4>

                    <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.5, marginBottom: 24, flex: 1 }}>
                      {step.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20 }}>
                      {step.perks.map((perk, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <CheckCircle2 size={16} color={step.color} />
                          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13, fontWeight: 600 }}>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Seta entre os cards (Desktop) */}
                  {!mobile && index < steps.length - 1 && (
                    <div style={{ position: 'absolute', right: -36, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.2)', zIndex: 0 }}>
                      <ArrowRight size={40} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}