import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Satellite, Sun, ShieldAlert, Radio } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function SourcesSection() {
  const [activeTab, setActiveTab] = useState('Solar Wind & IMF');

  const sourcesData = [
    {
      category: 'Solar Wind & IMF',
      icon: Satellite,
      description:
        'Real-time solar wind plasma parameters and interplanetary magnetic field vectors measured at the L1 Lagrange point.',
      items: [
        {
          name: 'NOAA DSCOVR Satellite',
          role: 'Deep Space Climate Observatory at Sun–Earth L1',
          dataTypes:
            'Solar Wind Speed (km/s), Proton Density (p/cm³), Temperature (K), IMF Total Field Bt & Bz orientation (nT)',
          url: 'https://www.ngdc.noaa.gov/dscovr/',
        },
        {
          name: 'NASA ACE (Advanced Composition Explorer)',
          role: 'Secondary / Backup In-situ L1 Monitor',
          dataTypes:
            'Solar Wind Electron Proton Alpha Monitor (SWEPAM), Magnetic Field Experiment (MAG)',
          url: 'https://www.srl.caltech.edu/ACE/',
        },
        {
          name: 'NOAA SWPC Plasma & MAG Service',
          role: 'Primary Real-Time Data Aggregator',
          dataTypes: 'Real-time 1-minute and 5-minute averaged solar wind observation streams',
          url: 'https://www.swpc.noaa.gov/',
        },
      ],
    },
    {
      category: 'Geomagnetic Storms & Kp',
      icon: ShieldAlert,
      description:
        'Global planetary magnetic field disturbance indices and localized magnetometer variometer observations.',
      items: [
        {
          name: 'NOAA SWPC Planetary K-Index (Kp)',
          role: 'Official 3-Hour Planetary Geomagnetic Index',
          dataTypes: 'Estimated Kp (0–9), NOAA G-Scale classifications (G1 to G5)',
          url: 'https://www.swpc.noaa.gov/products/planetary-k-index',
        },
        {
          name: 'GFZ German Research Centre for Geosciences',
          role: 'Potsdam Definitive Kp Repository',
          dataTypes: 'Definitive international Kp index and Ap daily equivalent amplitudes',
          url: 'https://www.gfz-potsdam.de/en/section/geomagnetism/data-products-services/geomagnetic-indices/kp-index',
        },
        {
          name: 'INTERMAGNET Network',
          role: 'Global Ground Magnetometer Observatories',
          dataTypes: 'Definitive three-axis magnetic field variance (dB/dt) measurements',
          url: 'https://www.intermagnet.org/',
        },
      ],
    },
    {
      category: 'Energetic Particles & X-Ray',
      icon: Radio,
      description:
        'Geostationary satellite monitoring of solar flare electromagnetic bursts and energetic particle storms.',
      items: [
        {
          name: 'NOAA GOES-16 & GOES-18 Satellites',
          role: 'Geostationary Operational Environmental Satellites',
          dataTypes:
            'Solar X-Ray Flux (0.05–0.4 nm and 0.1–0.8 nm), High-energy Proton Flux (≥10 MeV, ≥50 MeV, ≥100 MeV)',
          url: 'https://www.goes.noaa.gov/',
        },
        {
          name: 'NOAA Space Environment Monitor (SEM)',
          role: 'Radiation Storm Detection (S-Scale)',
          dataTypes: 'Relativistic Electron Fluence (>2 MeV) for spacecraft charging analysis',
          url: 'https://www.swpc.noaa.gov/products/goes-proton-flux',
        },
        {
          name: 'Penticton / Dominion Radio Astrophysical Observatory',
          role: 'Solar Radio Flux Calibration',
          dataTypes: 'Daily 10.7 cm Solar Radio Flux (F10.7) solar activity index',
          url: 'https://www.spaceweather.gc.ca/forecast-prevision/solar-solaire/solarflux/sx-en.php',
        },
      ],
    },
    {
      category: 'Solar Imagery & CMEs',
      icon: Sun,
      description:
        'Spaceborne coronagraphs and extreme ultraviolet solar disk telescopes tracking CME eruptions.',
      items: [
        {
          name: 'NASA Solar Dynamics Observatory (SDO)',
          role: 'Atmospheric Imaging Assembly (AIA)',
          dataTypes:
            'Multi-wavelength coronal imaging (171Å, 193Å, 211Å, 304Å) capturing flare arcades and coronal holes',
          url: 'https://sdo.gsfc.nasa.gov/',
        },
        {
          name: 'ESA / NASA SOHO Mission',
          role: 'LASCO C2 & C3 Coronagraphs',
          dataTypes:
            'Occulted white-light coronagraphs tracking CME angular width, velocity, and trajectory',
          url: 'https://sohowww.nascom.nasa.gov/',
        },
        {
          name: 'GOES Solar Ultraviolet Imager (SUVI)',
          role: 'Operational Full-Disk Solar Solar Monitoring',
          dataTypes: 'Continuous operational monitoring of active solar magnetic regions',
          url: 'https://www.swpc.noaa.gov/products/goes-solar-ultraviolet-imager-suvi',
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
            [PROVENANCE]
          </span>
          <span className="h-px w-6 bg-[#004DC0]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
            Scientific Fleet
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-4">
          Data Sources & Mission Fleet
        </h1>

        <p className="text-base sm:text-lg text-[#D8ECF9]/80 font-light max-w-3xl mx-auto leading-relaxed">
          SpaceProbe respects scientific data integrity. Every metric presented across our space
          weather suite originates from peer-reviewed government satellites, ground variometer
          networks, and solar observatories.
        </p>
      </motion.div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full bg-[#0E1334]/80 border border-[#D8ECF9]/15 p-1.5 h-auto rounded-2xl mb-8">
          {sourcesData.map((sec) => (
            <TabsTrigger
              key={sec.category}
              value={sec.category}
              className="text-xs py-2.5 px-3 rounded-xl"
            >
              {sec.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {sourcesData.map((sec) => (
          <TabsContent key={sec.category} value={sec.category}>
            <Card className="bg-[#0E1334]/70 border-[#D8ECF9]/15 p-6 sm:p-8 rounded-3xl">
              <CardHeader className="p-0 pb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#004DC0]/30 border border-[#00a8ff]/30 text-[#00a8ff]">
                    <sec.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl sm:text-2xl font-display font-bold text-white">
                      {sec.category}
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-[#D8ECF9]/70 font-light mt-1">
                      {sec.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-0 space-y-4">
                {sec.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00a8ff]/30 hover:bg-white/[0.04] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-display font-bold text-white">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono uppercase bg-[#00a8ff]/15 text-[#00a8ff] px-2 py-0.5 rounded">
                          {item.role}
                        </span>
                      </div>
                      <p className="text-xs text-[#D8ECF9]/80 font-light leading-relaxed">
                        <strong className="text-white font-medium">Captured Telemetry:</strong>{' '}
                        {item.dataTypes}
                      </p>
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00a8ff] hover:text-white transition-colors shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff] rounded"
                    >
                      <span>OFFICIAL MISSION</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
