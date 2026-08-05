import { useState, useEffect } from 'react';
import { Star, AlertTriangle, MessageSquareCode, ShoppingCart } from 'lucide-react';
import {
  SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_RIGHT, GRID_CSS, SectionTitle, IconBadge,
  BG_CARD, BG_CARD_H, BG_CARD_R, BG_CARD_Y,
  BORDER, BORDER_H, BORDER_R, BORDER_Y,
  SHADOW, SHADOW_H, SHADOW_R, SHADOW_Y,
  BORDER_HOV, BORDER_H_HOV, BORDER_R_HOV, BORDER_Y_HOV,
  SHADOW_HOV, SHADOW_H_HOV, SHADOW_R_HOV, SHADOW_Y_HOV,
} from './design';

type CardVariant = 'default' | 'highlight' | 'red' | 'yellow';

interface DiagCardProps {
  index: number; hovered: number | null; setHovered: (i: number | null) => void;
  icon: React.ReactNode; iconBg: string; iconColor: string;
  label: string; title: string; sub: string; variant?: CardVariant;
  style?: React.CSSProperties; mobile?: boolean;
}

function DiagCard({ index, hovered, setHovered, icon, iconBg, iconColor, label, title, sub, variant = 'default', style, mobile }: DiagCardProps) {
  const isHov = hovered === index;
  const bg    = variant === 'red' ? BG_CARD_R : variant === 'yellow' ? BG_CARD_Y : variant === 'highlight' ? BG_CARD_H : BG_CARD;
  const bord  = isHov ? (variant === 'red' ? BORDER_R_HOV : variant === 'yellow' ? BORDER_Y_HOV : variant === 'highlight' ? BORDER_H_HOV : BORDER_HOV) : (variant === 'red' ? BORDER_R : variant === 'yellow' ? BORDER_Y : variant === 'highlight' ? BORDER_H : BORDER);
  const shad  = isHov ? (variant === 'red' ? SHADOW_R_HOV : variant === 'yellow' ? SHADOW_Y_HOV : variant === 'highlight' ? SHADOW_H_HOV : SHADOW_HOV) : (variant === 'red' ? SHADOW_R : variant === 'yellow' ? SHADOW_Y : variant === 'highlight' ? SHADOW_H : SHADOW);
  const labelColor = variant === 'red' ? '#f87171' : variant === 'yellow' ? '#facc15' : '#60a5fa';

  return (
    <div
      onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}
      style={{ background: bg, border: bord, boxShadow: shad, borderRadius: 18, padding: mobile ? '28px 24px' : '26px 28px', display: 'flex', flexDirection: 'column', cursor: 'default', transform: isHov ? 'translateY(-4px)' : 'translateY(0)', transition: 'all 0.22s ease', ...style }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <IconBadge color={iconColor} bg={iconBg} mobile={mobile}>{icon}</IconBadge>
        <span style={{ color: labelColor, fontSize: mobile ? 14 : 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{label}</span>
      </div>
      <p style={{ color: 'white', fontSize: mobile ? 22 : 22, fontWeight: 800, lineHeight: 1.25, margin: 0, marginBottom: 8 }}>{title}</p>
      <p style={{ color: '#94a3b8', fontSize: mobile ? 16 : 14, fontWeight: 500, lineHeight: 1.5, margin: 0 }}>{sub}</p>
    </div>
  );
}

const cards = [
  {
    icon: <Star size={22} />,
    iconBg: 'rgba(37,99,235,0.25)', iconColor: '#60a5fa',
    label: 'Pontos Fortes',
    title: 'Excelente Autoridade & Resultados Visuais',
    sub: 'O perfil no Instagram possui provas sociais impecáveis e transformações reais que transmitem alta capacidade técnica.',
    variant: 'highlight' as CardVariant
  },
  {
    icon: <AlertTriangle size={22} />,
    iconBg: 'rgba(234,179,8,0.25)', iconColor: '#facc15',
    label: 'Gargalo de Presença',
    title: 'Falta de Hub Institucional Próprio',
    sub: 'Sem um site próprio de autoridade, clientes exigentes (High-Ticket) buscam referências e não encontram um ambiente profissional consolidado.',
    variant: 'yellow' as CardVariant
  },
  {
    icon: <MessageSquareCode size={22} />,
    iconBg: 'rgba(239,68,68,0.22)', iconColor: '#f87171',
    label: 'Gargalo de Atendimento',
    title: 'Leads Desqualificados no WhatsApp',
    sub: 'O tráfego cai direto no chat sem filtragem prévia. Leads chegam apenas pedindo preço sem entender o grau de calvície e a complexidade técnica.',
    variant: 'red' as CardVariant
  },
  {
    icon: <ShoppingCart size={22} />,
    iconBg: 'rgba(239,68,68,0.22)', iconColor: '#f87171',
    label: 'Gargalo de Vendas do Curso',
    title: 'Link da Bio Aponta Direto para Checkout',
    sub: 'Alunos em potencial caem direto na tela de pagamento sem passar por uma Landing Page persuasiva com quebra de objeções, depoimentos e benefícios.',
    variant: 'red' as CardVariant
  },
];

export function Slide2({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: W, height: H, background: 'transparent', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_RIGHT }}
    >
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div
        className={`relative z-10 w-full h-full flex flex-col justify-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: mobile ? '100%' : 1400, margin: '0 auto', width: '100%' }}>
          <SectionTitle title="Diagnóstico & Raio-X Digital." mobile={mobile} />
          
          <p style={{ color: '#94a3b8', fontSize: mobile ? 20 : 18, fontWeight: 500, margin: '-20px 0 36px 0' }}>
            Análise do posicionamento atual do especialista <strong style={{ color: 'white' }}>@rafaelnanopigmentacaocapilar</strong> e principais oportunidades de crescimento.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 20 : 24, width: '100%' }}>
            {cards.map((c, i) => <DiagCard key={i} index={i} hovered={hovered} setHovered={setHovered} mobile={mobile} {...c} />)}
          </div>
        </div>
      </div>
    </div>
  );
}