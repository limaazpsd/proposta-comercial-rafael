import { useState, useEffect } from 'react';
import { ExternalLink, Globe, ShieldCheck, Sparkles, Zap, Award, Layers } from 'lucide-react';
import { SLIDE_PAD, SLIDE_PAD_MOBILE, SLIDE_BG_RIGHT, GRID_CSS, SectionTitle } from './design';

interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  url: string;
  domain: string;
  tagColor: string;
  icon: React.ReactNode;
}

const projects: PortfolioProject[] = [
  {
    id: 1,
    title: 'Ápice Digital',
    category: 'LANDING PAGE',
    url: 'https://aapicedigital.com.br/',
    domain: 'aapicedigital.com.br',
    tagColor: '#38bdf8',
    icon: <Globe size={18} />,
  },
  {
    id: 2,
    title: 'Peptide E-Health',
    category: 'LANDING PAGE',
    url: 'https://peptideehealth.com/',
    domain: 'peptideehealth.com',
    tagColor: '#a78bfa',
    icon: <Layers size={18} />,
  },
  {
    id: 3,
    title: 'Oficina ArqDesign',
    category: 'LANDING PAGE',
    url: 'https://oficinaarqdesign.com.br/',
    domain: 'oficinaarqdesign.com.br',
    tagColor: '#f472b6',
    icon: <Sparkles size={18} />,
  },
  {
    id: 4,
    title: 'Avanço Esquadrias',
    category: 'SITE INSTITUCIONAL',
    url: 'https://avancoesquadrias.com/',
    domain: 'avancoesquadrias.com',
    tagColor: '#facc15',
    icon: <Award size={18} />,
  },
  {
    id: 5,
    title: 'Produtora OnScreen',
    category: 'SITE INSTITUCIONAL',
    url: 'https://produtoraonscreen.com.br/',
    domain: 'produtoraonscreen.com.br',
    tagColor: '#34d399',
    icon: <Zap size={18} />,
  },
  {
    id: 6,
    title: 'Boani Films',
    category: 'SITE INSTITUCIONAL',
    url: 'https://boanifilms.com.br/',
    domain: 'boanifilms.com.br',
    tagColor: '#60a5fa',
    icon: <ShieldCheck size={18} />,
  },
];

export function Slide4({ mobile }: { mobile?: boolean }) {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const W = mobile ? 1080 : 1920;
  const H = mobile ? 1800 : 1080;

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative overflow-hidden" style={{ width: W, height: H, background: 'transparent', fontFamily: "'Sora', sans-serif", backgroundImage: SLIDE_BG_RIGHT }}>
      <div className="absolute inset-0 pointer-events-none" style={GRID_CSS} />

      <div className={`relative z-10 w-full h-full flex flex-col justify-center transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={mobile ? SLIDE_PAD_MOBILE : SLIDE_PAD}>
        <div style={{ maxWidth: 1600, margin: '0 auto', width: '100%' }}>
          <SectionTitle title="Portfólio & Cases de Sucesso." mobile={mobile} />

          <p style={{ color: '#94a3b8', fontSize: mobile ? 20 : 18, fontWeight: 500, margin: '-20px 0 32px 0' }}>
            Preview dos projetos ativos criados pela <strong style={{ color: 'white' }}>Ápice Digital</strong> <span style={{ color: '#60a5fa' }}>(Passe o mouse para interagir / Clique para abrir o site)</span>:
          </p>

          {/* 6 Browser Window Mockup Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 20 : 22, width: '100%' }}>
            {projects.map((proj) => {
              const isH = hovered === proj.id;
              return (
                <div
                  key={proj.id}
                  onMouseEnter={() => setHovered(proj.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleCardClick(proj.url)}
                  style={{
                    background: 'rgba(12, 18, 40, 0.95)',
                    border: isH ? '1px solid rgba(37,99,235,0.85)' : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: isH ? '0 0 50px rgba(37,99,235,0.3), 0 12px 36px rgba(0,0,0,0.7)' : '0 8px 24px rgba(0,0,0,0.5)',
                    borderRadius: 18,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transform: isH ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    height: mobile ? 320 : 280,
                  }}
                >
                  {/* BROWSER TOP BAR */}
                  <div style={{
                    background: isH ? 'rgba(20, 30, 70, 0.95)' : 'rgba(15, 23, 42, 0.95)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    transition: 'background 0.2s ease',
                  }}>
                    {/* Traffic dots */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#eab308' }} />
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
                    </div>

                    {/* URL Bar */}
                    <div style={{
                      flex: 1,
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 8,
                      padding: '4px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 11,
                      color: '#94a3b8',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}>
                      <span style={{ color: proj.tagColor, fontWeight: 700 }}>https://</span>
                      <span>{proj.domain}</span>
                    </div>

                    {/* Category Tag */}
                    <span style={{
                      color: proj.tagColor,
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      background: 'rgba(29,78,216,0.18)',
                      padding: '4px 8px',
                      borderRadius: 6,
                      flexShrink: 0,
                    }}>
                      {proj.category}
                    </span>
                  </div>

                  {/* BROWSER BODY CONTAINER - CARREGANDO PREVIEW DO SITE COM IFRAME E OVERLAY */}
                  <div style={{
                    flex: 1,
                    position: 'relative',
                    background: '#070D14',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    {/* Live iframe site preview container */}
                    <iframe
                      src={proj.url}
                      title={proj.title}
                      style={{
                        width: '200%',
                        height: '200%',
                        transform: 'scale(0.5)',
                        transformOrigin: 'top left',
                        border: 'none',
                        pointerEvents: 'none',
                        opacity: isH ? 0.95 : 0.7,
                        filter: isH ? 'brightness(1.05) contrast(1.02)' : 'brightness(0.85) contrast(0.95)',
                        transition: 'all 0.3s ease',
                      }}
                    />

                    {/* Bottom Floating Title Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(7,13,20,0.98) 0%, rgba(7,13,20,0.85) 60%, transparent 100%)',
                      padding: '20px 16px 14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                      zIndex: 10,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: proj.tagColor }}>{proj.icon}</span>
                        <h4 style={{ color: 'white', fontWeight: 800, fontSize: mobile ? 16 : 15, margin: 0 }}>{proj.title}</h4>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        color: isH ? 'white' : '#60a5fa',
                        background: isH ? 'linear-gradient(to right, #2563eb, #1d4ed8)' : 'rgba(29,78,216,0.25)',
                        border: '1px solid rgba(37,99,235,0.4)',
                        padding: '6px 12px',
                        borderRadius: 8,
                        fontSize: 11,
                        fontWeight: 800,
                        transition: 'all 0.22s ease',
                        boxShadow: isH ? '0 0 18px rgba(37,99,235,0.6)' : 'none',
                        flexShrink: 0,
                      }}>
                        <span>Visualizar Site</span>
                        <ExternalLink size={12} />
                      </div>
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