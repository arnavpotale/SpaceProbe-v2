import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function KeyParameters() {
  const parameters = [
    {
      title: 'Kp Index (0 to 9)',
      desc: 'The planetary 3-hour geomagnetic activity index. Kp ≥ 5 denotes geomagnetic storm conditions (G1 Minor to G5 Extreme).',
    },
    {
      title: 'Solar Wind Speed (km/s)',
      desc: 'The velocity of solar plasma flowing past Earth. Ambient speeds average 300–400 km/s; fast CME fronts can exceed 800–1,200 km/s.',
    },
    {
      title: 'Interplanetary Magnetic Field (IMF Bz)',
      desc: 'The North-South orientation of the solar magnetic field. When Bz points negative (Southward), it merges with Earths field and triggers storms.',
    },
    {
      title: 'GOES X-Ray Flux (Watts/m²)',
      desc: 'Solar flare emissions categorized into logarithmic tiers: A, B, C, M, and X-class flares, directly indexing radio absorption.',
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
          <BookOpen className="text-[#00a8ff] h-7 w-7" /> Key Telemetry Metrics
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {parameters.map((param, i) => (
            <Card key={i} className="bg-[#0E1334]/70 border-[#D8ECF9]/15">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold text-[#00a8ff]">{param.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-[#D8ECF9]/70 leading-relaxed font-light">
                  {param.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
