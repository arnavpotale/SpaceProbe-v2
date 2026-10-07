import React from 'react';
import { motion } from 'framer-motion';
import { Database, CheckCircle2 } from 'lucide-react';

export function DataOrigin() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 flex items-center gap-3 text-white">
          <Database className="text-[#00a8ff] h-7 w-7" /> Observational Origins & Attribution
        </h2>
        <div className="bg-[#0E1334]/70 border border-[#D8ECF9]/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col md:flex-row gap-8 md:items-center">
          <div className="flex-1 space-y-4">
            <p className="text-sm sm:text-base text-[#D8ECF9]/80 font-light leading-relaxed">
              SpaceProbe aggregates and standardizes observational feeds directly from global
              scientific agencies, predominantly the NOAA Space Weather Prediction Center (SWPC) and
              the NASA Heliophysics fleet.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D8ECF9]/80 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#00a8ff] shrink-0" />
                <span>Continuous 24/7 solar wind observations from NOAA DSCOVR at L1</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#00a8ff] shrink-0" />
                <span>
                  High-cadence solar X-ray & proton flux measurements from NOAA GOES-16 & GOES-18
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#00a8ff] shrink-0" />
                <span>
                  Planetary geomagnetic index calculations across the international INTERMAGNET
                  network
                </span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 text-xs sm:text-sm text-[#D8ECF9]/70 italic border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-6 leading-relaxed">
            &ldquo;We reinforce scientific legitimacy by presenting peer-reviewed solar physics
            parameters directly from primary satellite feeds without speculative synthetic
            extrapolation.&rdquo;
          </div>
        </div>
      </motion.div>
    </section>
  );
}
