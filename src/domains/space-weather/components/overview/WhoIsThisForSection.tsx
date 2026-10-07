import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Factory, Building2, AlertTriangle } from 'lucide-react';

export function WhoIsThisForSection() {
  const audiences = [
    {
      icon: Users,
      title: 'Public & Astronomers',
      description:
        'Gain real-time awareness of geomagnetic conditions, solar storm activity, and aurora visibility forecasts.',
    },
    {
      icon: GraduationCap,
      title: 'Students & Researchers',
      description:
        'Explore solar cycle progression, historical storm logs, interplanetary magnetic field data, and scientific correlations.',
    },
    {
      icon: Factory,
      title: 'Industry & Operations',
      description:
        'Monitor space-weather impacts relevant to power transmission grids, satellite constellation orbits, and polar aviation.',
    },
    {
      icon: Building2,
      title: 'Enterprise & Defense',
      description:
        'Incorporate customized space environmental risk mitigation and geomagnetic disturbance telemetry into mission systems.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden border-t border-[#D8ECF9]/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
              [ECOSYSTEM]
            </span>
            <span className="h-px w-6 bg-[#004DC0]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
              Target Stakeholders
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Who Is This Platform For?
          </h2>

          <p className="text-base sm:text-lg text-[#D8ECF9]/80 font-light leading-relaxed">
            Engineered to serve diverse stakeholders—from curious researchers to mission-critical
            infrastructure operators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0E1334]/70 backdrop-blur-md border border-[#D8ECF9]/15 rounded-3xl p-6 hover:border-[#00a8ff]/40 hover:bg-[#0E1334]/90 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#004DC0]/30 border border-[#00a8ff]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-[#00a8ff]" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#D8ECF9]/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-amber-300 font-semibold text-sm mb-1">
              Operational Advisory Standard
            </h4>
            <p className="text-[#D8ECF9]/80 text-xs sm:text-sm font-light leading-relaxed">
              This intelligence portal supports situational awareness, research modeling, and risk
              interpretation. It does not issue autonomous commands to power grid breakers or
              satellite attitude thrusters without human-in-the-loop verification.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
