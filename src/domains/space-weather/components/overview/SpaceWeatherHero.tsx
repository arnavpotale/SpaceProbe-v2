import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Factory, Database, Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SpaceWeatherHeroProps {
  onSelectTab: (tab: string) => void;
}

export function SpaceWeatherHero({ onSelectTab }: SpaceWeatherHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#D8ECF9]/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004DC0]/30 border border-[#00a8ff]/30 mb-6 shadow-[0_0_20px_rgba(0,168,255,0.15)]"
          >
            <Sparkles size={13} className="text-[#00a8ff]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9] font-semibold">
              Space Weather Intelligence Suite
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight mb-6 leading-[1.1]"
          >
            Predicting Solar Dynamics.{' '}
            <span className="text-gradient-blue block sm:inline">Protecting Ground Assets.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#D8ECF9]/80 font-light leading-relaxed max-w-3xl mb-8"
          >
            Conditions driven by solar activity directly affect satellite constellations, transpolar
            aviation, HF radio communications, and high-voltage power networks. SpaceProbe
            translates complex space physics into actionable operational resilience.
          </motion.p>

          {/* System Notification banner informing of NOAA SWPC format update */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-2xl bg-gradient-to-r from-[#004DC0]/20 via-[#0E1334]/70 to-[#004DC0]/20 border border-[#00a8ff]/30 rounded-2xl p-4 sm:p-5 mb-10 flex items-start sm:items-center gap-3.5 text-left shadow-lg"
          >
            <div className="p-2 rounded-xl bg-[#00a8ff]/15 text-[#00a8ff] shrink-0 mt-0.5 sm:mt-0">
              <RefreshCw
                size={18}
                className="animate-spin text-[#00a8ff]"
                style={{ animationDuration: '8s' }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a8ff]">
                  Telemetry Ingestion Notice
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#00a8ff] animate-pulse" />
              </div>
              <p className="text-xs text-[#D8ECF9]/80 leading-relaxed font-light">
                NOAA SWPC has recently updated their real-time telemetry JSON feeds and array
                schemas. Our live pipeline, REST endpoints, and dashboard telemetry are currently
                being upgraded to match the new endpoints. In the meantime, our complete{' '}
                <strong>scientific learning center</strong>, <strong>industry risk models</strong>,
                and <strong>mission data origins</strong> are fully operational below.
              </p>
            </div>
          </motion.div>

          {/* Direct Section Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              size="lg"
              onClick={() => onSelectTab('learn')}
              className="bg-gradient-to-r from-[#004DC0] to-[#0952BD] hover:from-[#0057D9] hover:to-[#0A5DDB] text-white font-semibold shadow-lg shadow-[#004DC0]/30"
            >
              <BookOpen size={16} />
              <span>Explore Learning Center</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => onSelectTab('industries')}
              className="border-[#D8ECF9]/20 hover:bg-white/5 text-white"
            >
              <Factory size={16} className="text-[#00a8ff]" />
              <span>Industry Impact Models</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => onSelectTab('sources')}
              className="border-[#D8ECF9]/20 hover:bg-white/5 text-white"
            >
              <Database size={16} className="text-[#00a8ff]" />
              <span>Mission Data Sources</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
