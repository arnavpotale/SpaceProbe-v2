import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Compass } from 'lucide-react';

export function SunEarthConnection() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 flex items-center gap-3 text-white">
          <Sun className="text-yellow-400 h-7 w-7" /> The Sun–Earth Connection
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-[#0E1334]/70 border border-[#D8ECF9]/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-center space-y-4 text-sm sm:text-base text-[#D8ECF9]/80 font-light leading-relaxed">
            <p>
              The Sun is the dynamic thermodynamic engine driving all space weather. Solar surface
              activity—including solar flares, coronal mass ejections (CMEs), and coronal hole
              high-speed solar wind streams—ejects billions of tons of magnetized plasma into the
              heliosphere.
            </p>
            <p>
              These plasma clouds travel across the 150-million-kilometer Sun–Earth distance in 15
              hours to 3 days. When they arrive with a southward-pointing Interplanetary Magnetic
              Field (IMF Bz), magnetic reconnection occurs with Earth’s magnetic field lines,
              channeling gigawatts of energy directly into near-Earth space.
            </p>
          </div>

          <div className="bg-[#0E1334]/90 border border-[#D8ECF9]/15 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#004DC0]/20 to-transparent pointer-events-none" />
            <div className="h-20 w-20 rounded-full bg-[#004DC0]/30 border border-[#00a8ff]/40 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,168,255,0.2)]">
              <Compass size={36} className="text-[#00a8ff] animate-pulse" />
            </div>
            <h4 className="text-lg font-display font-bold text-white mb-2">
              Heliospheric Transfer Timeline
            </h4>
            <div className="text-xs font-mono text-[#D8ECF9]/70 space-y-1.5 text-left w-full max-w-xs mt-2 bg-black/40 p-3.5 rounded-xl border border-white/5">
              <div className="flex justify-between">
                <span>Solar Flare X-rays:</span>
                <span className="text-[#00a8ff] font-bold">~8.3 minutes (Speed of light)</span>
              </div>
              <div className="flex justify-between">
                <span>Solar Energetic Protons:</span>
                <span className="text-yellow-400 font-bold">~20 min – 2 hours</span>
              </div>
              <div className="flex justify-between">
                <span>Coronal Mass Ejection (CME):</span>
                <span className="text-red-400 font-bold">~15 – 72 hours</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
