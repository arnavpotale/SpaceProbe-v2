import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Satellite, Zap, Plane } from 'lucide-react';

export function WhyMonitored() {
  const reasons = [
    {
      icon: Satellite,
      title: 'Satellite Constellations',
      desc: 'LEO drag spikes and surface charging induce premature orbital decay and electronic logic upsets in orbital assets.',
    },
    {
      icon: Zap,
      title: 'High-Voltage Power Grids',
      desc: 'Telluric currents enter long transmission line neutral grounds, risking catastrophic power transformer destruction.',
    },
    {
      icon: Plane,
      title: 'Aviation & Navigation',
      desc: 'Severe polar radio blackouts leave commercial aircraft without transpolar communication while degrading GPS navigation precision.',
    },
  ];

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 flex items-center gap-3 text-white">
          <ShieldAlert className="text-[#00a8ff] h-7 w-7" /> Why Space Weather Is Monitored
        </h2>
        <div className="bg-[#0E1334]/70 border border-[#D8ECF9]/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
          <p className="text-sm sm:text-base text-[#D8ECF9]/80 font-light leading-relaxed mb-6">
            Contemporary civilization is completely dependent on interconnected satellite, power,
            and navigational networks that operate in or interact with near-Earth space. Systematic
            monitoring is an engineering requirement for risk mitigation and continuous uptime.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00a8ff]/30 transition-colors"
              >
                <div className="flex items-center gap-2.5 text-[#00a8ff] font-semibold text-sm mb-2.5">
                  <r.icon className="h-5 w-5" />
                  <span>{r.title}</span>
                </div>
                <p className="text-xs text-[#D8ECF9]/70 leading-relaxed font-light">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
