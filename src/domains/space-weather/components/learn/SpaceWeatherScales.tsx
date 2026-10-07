import React from 'react';
import { motion } from 'framer-motion';
import { Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SpaceWeatherScales() {
  const scales = [
    {
      code: 'G-Scale',
      name: 'Geomagnetic Storms',
      driver: 'CMEs & High-Speed Solar Wind Streams',
      impact:
        'Induces telluric ground currents (GIC) in power grids, shifts auroral oval equatorward, distorts magnetic field vectors.',
    },
    {
      code: 'S-Scale',
      name: 'Solar Radiation Storms',
      driver: 'Energetic Solar Protons (SEP events)',
      impact:
        'Direct biological hazard to astronauts, increases radiation exposure on high-latitude flights, triggers satellite sensor noise.',
    },
    {
      code: 'R-Scale',
      name: 'Radio Blackouts',
      driver: 'Extreme UV & Solar Flare X-rays',
      impact:
        'Rapidly ionizes the D-layer of the sunlit ionosphere, blocking HF radio communication and disrupting maritime & aviation channels.',
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
          <Wind className="text-[#00a8ff] h-7 w-7" /> NOAA Space Weather Scales (1–5)
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {scales.map((scale, i) => (
            <Card
              key={i}
              className="bg-[#0E1334]/70 border-[#D8ECF9]/15 flex flex-col justify-between"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold bg-[#004DC0]/40 text-[#00a8ff] border border-[#00a8ff]/30 px-2 py-0.5 rounded">
                    {scale.code}
                  </span>
                  <span className="text-[10px] font-mono text-[#D8ECF9]/60">Tiers 1 to 5</span>
                </div>
                <CardTitle className="text-base font-bold text-white">{scale.name}</CardTitle>
                <span className="text-xs font-mono text-[#00a8ff]/80 font-medium">
                  {scale.driver}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-[#D8ECF9]/70 leading-relaxed font-light">
                  {scale.impact}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
