import React from 'react';
import { motion } from 'framer-motion';
import { Database, RefreshCw, FileText, DownloadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DataArchiveSectionProps {
  onNavigateConnect: () => void;
}

export function DataArchiveSection({ onNavigateConnect }: DataArchiveSectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#0E1334]/80 border border-[#D8ECF9]/15 rounded-3xl p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="h-16 w-16 rounded-3xl bg-[#004DC0]/30 border border-[#00a8ff]/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,168,255,0.2)]">
          <Database className="h-8 w-8 text-[#00a8ff]" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a8ff]/15 border border-[#00a8ff]/30 text-[#00a8ff] text-[11px] font-mono uppercase font-semibold mb-4">
          <RefreshCw size={12} className="animate-spin text-[#00a8ff]" />
          <span>Active Pipeline Upgrade</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Space Weather Historical Data & Export Engine
        </h2>

        <p className="text-sm sm:text-base text-[#D8ECF9]/80 font-light max-w-xl mx-auto leading-relaxed mb-8">
          Historical solar wind archives, Kp geomagnetic storm catalogs, and standardized CSV/NetCDF
          export endpoints are undergoing migration to align with NOAA SWPC updated schema formats.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8 text-left">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
            <FileText className="h-5 w-5 text-[#00a8ff] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">Custom Research Datasets</span>
              <span className="text-[11px] text-[#D8ECF9]/70 font-light">
                Custom timespan downloads for academic research
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
            <DownloadCloud className="h-5 w-5 text-[#00a8ff] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white block">Automated Telemetry Sync</span>
              <span className="text-[11px] text-[#D8ECF9]/70 font-light">
                Direct REST & JSON streaming endpoints
              </span>
            </div>
          </div>
        </div>

        <Button
          onClick={onNavigateConnect}
          className="bg-gradient-to-r from-[#004DC0] to-[#0952BD] hover:from-[#0057D9] hover:to-[#0A5DDB] text-white font-semibold px-6"
        >
          Request Early Access / Custom Data Ingestion
        </Button>
      </motion.div>
    </div>
  );
}
