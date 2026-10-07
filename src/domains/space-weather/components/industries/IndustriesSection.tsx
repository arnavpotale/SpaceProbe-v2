import React from 'react';
import { motion } from 'framer-motion';
import { IndustriesIntro } from './IndustriesIntro';
import { IndustryCard } from './IndustryCard';
import { IndustriesInfo } from './IndustriesInfo';
import { INDUSTRIES_DATA } from '../../data/industries-data';

interface IndustriesSectionProps {
  onSelectTab: (tab: string) => void;
  onNavigateConnect: () => void;
}

export function IndustriesSection({ onSelectTab, onNavigateConnect }: IndustriesSectionProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
      <IndustriesIntro />

      {/* 6 Industry Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16"
      >
        {INDUSTRIES_DATA.map((ind) => (
          <IndustryCard key={ind.id} industry={ind} />
        ))}
      </motion.div>

      <IndustriesInfo onSelectTab={onSelectTab} onNavigateConnect={onNavigateConnect} />
    </div>
  );
}
