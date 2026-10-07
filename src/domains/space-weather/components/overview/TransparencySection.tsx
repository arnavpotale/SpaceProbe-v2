import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function TransparencySection() {
  return (
    <section className="py-20 border-t border-[#D8ECF9]/10 bg-transparent">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 p-2 rounded-2xl bg-[#00a8ff]/10 text-[#00a8ff] mb-4">
            <ShieldCheck size={20} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-white">
            Scientific Rigor & Attribution
          </h3>
          <p className="text-sm sm:text-base text-[#D8ECF9]/80 font-light leading-relaxed max-w-2xl mx-auto">
            SpaceProbe processes publicly published observation feeds from NOAA SWPC, NASA SDO, SOHO
            LASCO, and ESA. We maintain strict data provenance and never generate speculative
            unscientific indices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-8 border-t border-white/5"
        >
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#00a8ff]/80">
            DPIIT-Recognized Deep-Tech Enterprise • Incubation Centre, University of Mumbai
          </p>
        </motion.div>
      </div>
    </section>
  );
}
