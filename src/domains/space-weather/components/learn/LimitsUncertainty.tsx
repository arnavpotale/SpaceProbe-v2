import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export function LimitsUncertainty() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 flex items-center gap-3 text-white">
          <AlertTriangle className="text-amber-400 h-7 w-7" /> Observational Limits & Uncertainties
        </h2>
        <div className="bg-amber-500/10 border border-amber-500/25 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
          <div className="space-y-5 text-sm sm:text-base text-[#D8ECF9]/80 font-light leading-relaxed">
            <div>
              <h3 className="text-base font-semibold text-amber-300 mb-1.5">
                Propagation Direction & Flank Grazing
              </h3>
              <p className="text-xs sm:text-sm text-[#D8ECF9]/70">
                The Sun radiates energy spherically. Major coronal mass ejections can occur on the
                solar limbs or far side without Earth impact. Even Earth-directed CMEs frequently
                graze our magnetosphere rather than delivering a direct head-on collision.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-amber-300 mb-1.5">
                IMF Bz Orientation Cannot Be Predicted Far in Advance
              </h3>
              <p className="text-xs sm:text-sm text-[#D8ECF9]/70">
                The internal magnetic field orientation of a travelling CME plasma cloud cannot be
                reliably resolved until the cloud sweeps past the DSCOVR satellite at the L1
                Lagrange point, providing approximately 30 to 60 minutes of lead time.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-amber-300 mb-1.5">
                Substation-Level Geological Heterogeneity
              </h3>
              <p className="text-xs sm:text-sm text-[#D8ECF9]/70">
                Induced ground electric fields (E-fields) depend on local subterranean lithospheric
                conductivity. Regions with igneous rock (e.g. Canadian Shield, Scandinavian Shield)
                resist ground currents and force telluric currents into long high-voltage power
                lines.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
