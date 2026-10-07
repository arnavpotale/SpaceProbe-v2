import React from 'react';
import { motion } from 'framer-motion';
import { SpaceWeatherBasics } from './SpaceWeatherBasics';
import { SunEarthConnection } from './SunEarthConnection';
import { WhyMonitored } from './WhyMonitored';
import { RealWorldImpact } from './RealWorldImpact';
import { KeyParameters } from './KeyParameters';
import { SpaceWeatherScales } from './SpaceWeatherScales';
import { HowToRead } from './HowToRead';
import { LimitsUncertainty } from './LimitsUncertainty';
import { DataOrigin } from './DataOrigin';
import { LearnMore } from './LearnMore';

export function LearnSection() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
            [KNOWLEDGE BASE]
          </span>
          <span className="h-px w-6 bg-[#004DC0]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
            Educational Guide
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-4">
          Understanding Space Weather
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#D8ECF9]/80 font-light leading-relaxed max-w-2xl mx-auto">
          A scientific reference guide to solar-terrestrial physics, geomagnetic disturbance scales,
          and space weather observation metrics.
        </p>
      </motion.div>

      {/* 1. What Is Space Weather? */}
      <SpaceWeatherBasics />

      {/* 2. The Sun-Earth Connection */}
      <SunEarthConnection />

      {/* 3. Why Space Weather Is Monitored */}
      <WhyMonitored />

      {/* 4. Real World Impacts */}
      <RealWorldImpact />

      {/* 5. Key Parameters */}
      <KeyParameters />

      {/* 6. NOAA Scales */}
      <SpaceWeatherScales />

      {/* 7. How to Read Data */}
      <HowToRead />

      {/* 8. Limits & Uncertainties */}
      <LimitsUncertainty />

      {/* 9. Data Origin */}
      <DataOrigin />

      {/* 10. External Resources */}
      <LearnMore />
    </div>
  );
}
