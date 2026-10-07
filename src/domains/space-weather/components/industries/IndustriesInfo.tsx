import React from 'react';
import {
  Info,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Database,
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface IndustriesInfoProps {
  onSelectTab: (tab: string) => void;
  onNavigateConnect: () => void;
}

export function IndustriesInfo({ onSelectTab, onNavigateConnect }: IndustriesInfoProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-16 mt-16">
      {/* Information Provided & Intended Use */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-3">
            <Info className="h-6 w-6 text-[#00a8ff]" /> Operational Intelligence Provided
          </h3>
          <ul className="space-y-5 text-sm sm:text-base text-[#D8ECF9]/80 font-light">
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#00a8ff] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-medium">Domain Risk Matrices:</strong>{' '}
                Specific sensitivity factors for each critical infrastructure sector.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#00a8ff] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-medium">Standardized NOAA Scales:</strong>{' '}
                Operational impact thresholds mapped to G1–G5, S1–S5, and R1–R5 levels.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#00a8ff] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-medium">
                  Historical Baseline Correlation:
                </strong>{' '}
                Forensic datasets to cross-examine past grid or orbital anomalies.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#00a8ff] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white block font-medium">Advisory Bulletins:</strong> Clear
                translation of official SWPC space weather warnings.
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-[#00a8ff]" /> Intended Scope & Protocol
          </h3>
          <div className="bg-[#0E1334]/80 border border-[#D8ECF9]/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <p className="text-sm sm:text-base text-[#D8ECF9]/80 font-light leading-relaxed mb-6">
              This platform is engineered for{' '}
              <strong className="text-white font-medium">situational awareness</strong>,{' '}
              <strong className="text-white font-medium">infrastructure resilience planning</strong>
              , and <strong className="text-white font-medium">scientific reference</strong>. It
              aggregates verified observations to support operational decision-making.
            </p>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-yellow-300/90 bg-yellow-500/10 p-4 rounded-2xl border border-yellow-500/20">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-yellow-400" />
              <p className="font-light leading-relaxed">
                <strong>Notice:</strong> SpaceProbe intelligence does not replace certified national
                regulatory notices (FAA, ICAO, NERC) or automated control protection relays.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Scientific Transparency & Related Modules */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-xl font-display font-bold text-white">Scientific Provenance</h3>
          <p className="text-xs sm:text-sm text-[#D8ECF9]/80 font-light leading-relaxed">
            All data sources originate directly from the NOAA Space Weather Prediction Center, NASA
            Heliophysics fleet, and international observatories.
          </p>
          <Button
            variant="link"
            className="text-[#00a8ff] hover:text-white p-0 h-auto text-xs font-semibold flex items-center gap-1"
            onClick={() => onSelectTab('sources')}
          >
            <span>Inspect All Data Sources</span>
            <ArrowRight size={13} />
          </Button>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-display font-bold text-white">Explore Associated Modules</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="h-auto py-5 px-4 flex flex-col items-start gap-2 border-[#D8ECF9]/15 hover:border-[#00a8ff]/40 text-left"
              onClick={() => onSelectTab('learn')}
            >
              <BookOpen className="h-5 w-5 text-[#00a8ff]" />
              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">
                  Educational Guide
                </span>
                <span className="text-[11px] text-[#D8ECF9]/60 font-light">
                  Explore 10 space weather modules
                </span>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-auto py-5 px-4 flex flex-col items-start gap-2 border-[#D8ECF9]/15 hover:border-[#00a8ff]/40 text-left"
              onClick={() => onSelectTab('sources')}
            >
              <Database className="h-5 w-5 text-[#00a8ff]" />
              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">
                  Mission Sources
                </span>
                <span className="text-[11px] text-[#D8ECF9]/60 font-light">
                  DSCOVR, GOES, SDO, SOHO fleet
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enterprise Consultation Banner */}
      <div className="bg-gradient-to-r from-[#004DC0]/30 to-[#0E1334]/90 rounded-3xl p-8 sm:p-10 text-center border border-[#00a8ff]/30 shadow-xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-3">
          Require Specialized Telemetry Modeling for Your Assets?
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#D8ECF9]/80 font-light max-w-2xl mx-auto mb-6 leading-relaxed">
          SpaceProbe partners with power utilities, satellite operators, and aerospace institutions
          to integrate custom space weather telemetry modeling and risk forecasting.
        </p>
        <Button
          size="lg"
          onClick={onNavigateConnect}
          className="bg-gradient-to-r from-[#004DC0] to-[#0952BD] hover:from-[#0057D9] hover:to-[#0A5DDB] text-white font-bold"
        >
          Connect for Enterprise Partnership
        </Button>
      </div>
    </div>
  );
}
