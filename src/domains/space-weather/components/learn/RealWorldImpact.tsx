import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Satellite, Zap, Radio, Plane } from 'lucide-react';

export function RealWorldImpact() {
  const impacts = [
    {
      icon: Zap,
      title: 'Power Grid Tripping',
      desc: 'The March 1989 geomagnetic storm collapsed the entire Hydro-Québec power grid in under 90 seconds, leaving 6 million people without power for 9 hours.',
    },
    {
      icon: Satellite,
      title: 'Satellite Constellation Loss',
      desc: 'In February 2022, an unexpected minor geomagnetic storm increased atmospheric density, causing 38 newly launched Starlink satellites to de-orbit and burn up.',
    },
    {
      icon: Radio,
      title: 'Global HF Blackouts',
      desc: 'Intense X-class solar flares trigger immediate daylight-side high-frequency radio blackouts, breaking air traffic control communications across transatlantic corridors.',
    },
    {
      icon: Plane,
      title: 'Polar Flight Divertments',
      desc: 'Commercial airlines route flights away from polar paths during solar particle events to protect avionics and prevent excessive cosmic radiation doses to crew.',
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
          <Globe className="text-[#00a8ff] h-7 w-7" /> Real-World Documented Impacts
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {impacts.map((item, i) => (
            <div
              key={i}
              className="bg-[#0E1334]/70 border border-[#D8ECF9]/15 rounded-3xl p-6 backdrop-blur-md hover:border-[#00a8ff]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#004DC0]/30 border border-[#00a8ff]/30 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-[#00a8ff]" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#D8ECF9]/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
