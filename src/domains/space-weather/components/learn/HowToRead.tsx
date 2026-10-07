import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export function HowToRead() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 flex items-center gap-3 text-white">
          <Info className="text-[#00a8ff] h-7 w-7" /> How to Interpret Space Weather Data
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="p-6 bg-[#0E1334]/70 border border-[#D8ECF9]/15 rounded-3xl backdrop-blur-md">
            <h3 className="text-base font-display font-bold mb-2 text-[#00a8ff]">
              Real-Time Telemetry
            </h3>
            <p className="text-xs sm:text-sm text-[#D8ECF9]/70 leading-relaxed font-light">
              Telemetry feeds represent instantaneous observations from the L1 Lagrangian point (1.5
              million km sunward of Earth). They provide roughly 30–60 minutes of lead time before
              plasma reaches our magnetosphere.
            </p>
          </div>
          <div className="p-6 bg-[#0E1334]/70 border border-[#D8ECF9]/15 rounded-3xl backdrop-blur-md">
            <h3 className="text-base font-display font-bold mb-2 text-yellow-400">
              Activity Thresholds
            </h3>
            <p className="text-xs sm:text-sm text-[#D8ECF9]/70 leading-relaxed font-light">
              Crossing an alert threshold (e.g. Kp ≥ 5) indicates heightened probability of
              environmental disruption. However, local geomagnetic disturbances vary based on
              geographic latitude and local ground conductivity.
            </p>
          </div>
          <div className="p-6 bg-[#0E1334]/70 border border-[#D8ECF9]/15 rounded-3xl backdrop-blur-md">
            <h3 className="text-base font-display font-bold mb-2 text-cyan-300">
              Composite Signatures
            </h3>
            <p className="text-xs sm:text-sm text-[#D8ECF9]/70 leading-relaxed font-light">
              A high solar wind speed alone rarely causes major geomagnetic storms. Severe space
              weather requires the simultaneous coincidence of high velocity, dense plasma, and a
              sustained Southward (negative) IMF Bz.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
