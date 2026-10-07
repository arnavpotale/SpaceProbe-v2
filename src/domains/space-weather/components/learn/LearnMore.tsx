import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function LearnMore() {
  const resources = [
    {
      title: 'NOAA SWPC',
      desc: 'The official source for space weather alerts, watches, and warnings in the United States.',
      url: 'https://www.swpc.noaa.gov/',
    },
    {
      title: 'NASA Space Weather Action Center',
      desc: 'Educational resources, real-time model viewers, and learning modules for students.',
      url: 'https://sunearthday.nasa.gov/swac/',
    },
    {
      title: 'ESA Space Weather Service Network',
      desc: 'European Space Agency’s portal for space safety, space situational awareness, and solar data.',
      url: 'https://swe.ssa.esa.int/',
    },
    {
      title: 'UK Met Office Space Weather',
      desc: 'United Kingdom operational forecasting service monitoring solar conditions and auroral displays.',
      url: 'https://www.metoffice.gov.uk/weather/specialist-forecasts/space-weather',
    },
  ];

  return (
    <section className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 flex items-center gap-3 text-white">
          <BookOpen className="text-pink-400 h-7 w-7" /> Authoritative External Resources
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {resources.map((res, i) => (
            <a
              key={i}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff] rounded-2xl"
            >
              <Card className="h-full bg-[#0E1334]/70 border-[#D8ECF9]/15 hover:border-[#00a8ff]/40 hover:bg-[#0E1334]/90 transition-all flex flex-col justify-between">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold text-white group-hover:text-[#00a8ff] transition-colors flex items-center justify-between">
                    <span>{res.title}</span>
                    <ExternalLink
                      size={14}
                      className="opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-[#D8ECF9]/70 leading-relaxed font-light">
                    {res.desc}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
