import React from 'react';
import { motion } from 'framer-motion';
import { FlipCard } from './FlipCard';

export function WhyUsSection() {
  const highlights = [
    {
      front: 'Interprets space weather, not just displays raw figures',
      back: 'We translate raw sensor readings into actionable risk vectors for infrastructure teams.',
    },
    {
      front: 'Clean separation between executive summaries and raw telemetry',
      back: 'Instantly toggle between high-level operational thresholds and deep-dive physics parameters.',
    },
    {
      front: 'Industry-aware modeling without oversimplification',
      back: 'Tailored vulnerability matrices for aviation, transmission grids, and orbital assets.',
    },
    {
      front: 'Grounded on trusted, transparent scientific missions',
      back: 'Direct, traceable feeds from NOAA SWPC, NASA SDO, SOHO LASCO, and DSCOVR.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden border-t border-[#D8ECF9]/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
                [ADVANTAGE]
              </span>
              <span className="h-px w-6 bg-[#004DC0]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
                Why SpaceProbe
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">
              Turning Raw Solar Flux Into Operational Clarity
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#D8ECF9]/80 font-light leading-relaxed">
              <p>
                Space weather telemetry is publicly published, but understanding operational
                consequences is rare. SpaceProbe bridges this gap by translating complex solar wind
                dynamics and geomagnetic perturbations into structured, decision-ready intelligence.
              </p>
              <p>
                We prioritize operational relevance over raw noise, scientific integrity over
                sensationalism, and actionable engineering context over abstract astrophysics.
              </p>
            </div>
          </motion.div>

          {/* Interactive Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {highlights.map((item, i) => (
              <FlipCard key={i} front={item.front} back={item.back} delay={0.15 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
