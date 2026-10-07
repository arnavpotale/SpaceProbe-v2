import React from 'react';
import { motion } from 'framer-motion';
import { PLATFORM_SOLUTIONS } from '@/content/homepage';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export function ExploreSolutions() {
  const handleScrollToConnect = () => {
    const el = document.getElementById('connect');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="platform"
      aria-label="Explore SpaceProbe Platform"
      className="relative w-full bg-[#0A0A0A] text-white py-20 md:py-28 border-t border-[#D8ECF9]/10"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          {/* Section Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
              [{PLATFORM_SOLUTIONS.sectionNumber}]
            </span>
            <span className="h-px w-6 bg-[#004DC0]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
              {PLATFORM_SOLUTIONS.tag}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            {PLATFORM_SOLUTIONS.heading}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-text-secondary font-light leading-relaxed">
            {PLATFORM_SOLUTIONS.description}
          </p>
        </motion.div>

        {/* 4 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PLATFORM_SOLUTIONS.platforms.map((platform, idx) => {
            const isFlagship = platform.id === 'space-weather-platform';
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: EASE, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group border ${
                  isFlagship
                    ? 'bg-gradient-to-br from-[#0E1334] to-[#0A0A0A] border-[#00a8ff]/40 shadow-xl shadow-[#004DC0]/15'
                    : 'bg-white/[0.02] hover:bg-white/[0.04] border-[#D8ECF9]/10 hover:border-[#D8ECF9]/25'
                }`}
              >
                <div>
                  {/* Badge & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold ${
                        isFlagship
                          ? 'bg-[#00a8ff]/20 text-[#00a8ff] border border-[#00a8ff]/40'
                          : 'bg-white/5 text-text-muted border border-white/10'
                      }`}
                    >
                      {platform.badge}
                    </span>
                    <span className="text-[10px] font-mono text-text-muted">{platform.status}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-[#D8ECF9] transition-colors">
                    {platform.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed mb-6">
                    {platform.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 pt-4 border-t border-white/10">
                    {platform.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-text-muted">
                        <CheckCircle2 size={13} className="text-[#00a8ff] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => {
                      if (isFlagship) {
                        window.location.hash = '/space-weather';
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        handleScrollToConnect();
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#00a8ff] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0] rounded"
                  >
                    <span>{isFlagship ? 'Explore Space Weather Suite' : platform.linkText}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExploreSolutions;
