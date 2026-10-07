import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

export function SpaceWeatherBasics() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-5 flex items-center gap-3 text-white">
          <Sun className="text-yellow-400 h-7 w-7" /> What Is Space Weather?
        </h2>
        <div className="bg-[#0E1334]/70 border border-[#D8ECF9]/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
          <div className="space-y-4 text-sm sm:text-base text-[#D8ECF9]/80 font-light leading-relaxed">
            <p>
              Space weather refers to changing conditions in near-Earth space driven by solar
              activity. Unlike terrestrial weather of wind and precipitation, space weather is
              governed by high-energy radiation, superheated plasma streams, and fluctuating
              magnetic fields emitted by the Sun.
            </p>
            <p>
              When these solar emissions propagate through interplanetary space and reach our
              planet, they interact with Earth’s protective magnetic field (the{' '}
              <span className="text-[#00a8ff] font-medium">magnetosphere</span>) and upper
              atmosphere (the <span className="text-[#00a8ff] font-medium">ionosphere</span> and{' '}
              <span className="text-[#00a8ff] font-medium">thermosphere</span>).
            </p>
            <p>
              This dynamic physical coupling generates geomagnetic storms, auroral displays,
              ionospheric currents, and enhanced radiation belts that directly impact modern
              technological infrastructure.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
