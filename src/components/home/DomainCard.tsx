import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface DomainItem {
  id: string;
  title: string;
  shortTag: string;
  description: string;
  image: string;
  href: string;
}

interface DomainCardProps {
  domain: DomainItem;
  isActive: boolean;
  isMobile: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
  index: number;
}

export function DomainCard({
  domain,
  isActive,
  isMobile,
  onHoverStart,
  onHoverEnd,
  onClick,
  index,
}: DomainCardProps) {
  // Rebalanced desktop flex values: active card gets 6x flex space (approx 70% width)
  const flexGrowValue = isActive ? 6 : 1;

  const handleCardClick = () => {
    if (!isActive && isMobile) {
      onClick();
      return;
    }
    if (domain.id === 'space-weather') {
      window.location.hash = '/space-weather';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // Navigate smoothly to platform section
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${domain.title} — ${domain.shortTag}. Click to explore platform.`}
      aria-expanded={isActive}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      className={`relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-end group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff] select-none ${
        isActive
          ? 'border-[#00a8ff]/50 shadow-[0_0_40px_rgba(0,77,192,0.3)]'
          : 'border-[#D8ECF9]/10 hover:border-[#D8ECF9]/30 hover:shadow-lg'
      }`}
      style={{
        flex: isMobile ? 'none' : flexGrowValue,
        minHeight: isMobile ? (isActive ? '380px' : '88px') : 'auto',
      }}
    >
      {/* Background Image Layer with Depth Filter */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isActive
            ? 'scale-105 opacity-90 grayscale-0 saturate-100'
            : 'scale-100 opacity-30 grayscale saturate-0 group-hover:opacity-40'
        }`}
      >
        <img
          src={domain.image}
          alt={domain.title}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark contrast gradient to ensure 100% readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/65 to-[#0A0A0A]/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end p-6 sm:p-8 md:p-10">
        {/* 1. COLLAPSED DESKTOP STATE (Vertical Tab Styling) */}
        {!isActive && !isMobile && (
          <div className="absolute inset-0 p-6 flex flex-col justify-between items-center pointer-events-none">
            <span className="text-xs font-mono font-bold text-[#00a8ff]/70">0{index + 1}</span>
            <div className="flex items-center justify-center rotate-[-90deg] translate-y-[-24px] origin-center whitespace-nowrap">
              <h3 className="text-sm font-display font-bold tracking-widest text-white/75 group-hover:text-white uppercase transition-colors">
                {domain.title}
              </h3>
            </div>
            <ArrowRight
              size={14}
              className="text-[#00a8ff]/50 group-hover:text-white transition-colors"
            />
          </div>
        )}

        {/* 2. COLLAPSED MOBILE STATE (Horizontal Row Styling) */}
        {!isActive && isMobile && (
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#00a8ff] font-bold">0{index + 1}</span>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#00a8ff]/80 block">
                  {domain.shortTag}
                </span>
                <h3 className="text-base font-display font-bold text-white uppercase">
                  {domain.title}
                </h3>
              </div>
            </div>
            <ArrowRight size={16} className="text-[#00a8ff]" />
          </div>
        )}

        {/* 3. EXPANDED ACTIVE STATE (Full Horizontal Space, Generous Typography, Integrated Click Cue) */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                },
                exit: { opacity: 0, transition: { duration: 0.15 } },
              }}
              className="flex flex-col w-full max-w-2xl"
            >
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004DC0]/40 border border-[#D8ECF9]/20 w-fit mb-3">
                <Sparkles size={11} className="text-[#00a8ff]" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8ECF9]">
                  0{index + 1} // {domain.shortTag}
                </span>
              </div>

              {/* Title (Generous scale) */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 leading-tight tracking-tight">
                {domain.title}
              </h3>

              {/* Description (Spacious horizontal container, easily readable) */}
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light mb-4">
                {domain.description}
              </p>

              {domain.id === 'space-weather' && (
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00a8ff] group-hover:text-white transition-colors">
                    <span>Open Space Weather Platform</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DomainCard;
