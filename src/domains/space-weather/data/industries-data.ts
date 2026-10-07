import { Zap, Plane, Satellite, Radio, Activity, ShieldCheck, type LucideIcon } from 'lucide-react';

export interface IndustryDetail {
  interaction: string;
  parameters: string[];
  presentation: string;
  scope: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  keyFactors: string[];
  details: IndustryDetail;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'power',
    title: 'Power Utilities',
    icon: Zap,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/20',
    description:
      'Protect grid infrastructure from Geomagnetically Induced Currents (GIC) and catastrophic transformer core saturation.',
    keyFactors: ['GIC Saturation', 'Thermal Limits', 'Grid Stability'],
    details: {
      interaction:
        'Geomagnetic storms induce low-frequency quasi-DC currents in long transmission lines, causing transformer core saturation, overheating, harmonics, and sudden reactive power collapse.',
      parameters: [
        'Geomagnetic Kp & NOAA G-Scale',
        'dB/dt (Rate of magnetic change)',
        'Proton Flux (Solar Energetic Particles)',
      ],
      presentation:
        'Real-time G-scale gauges, regional K-index thresholds, and forecasted planetary K-indices.',
      scope:
        'Focuses on macro-scale planetary grid risks. Does not monitor internal substation telemetry.',
    },
  },
  {
    id: 'aviation',
    title: 'Aviation',
    icon: Plane,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20',
    description:
      'Manage ionizing radiation exposure on polar flight routes and safeguard critical HF transoceanic communications.',
    keyFactors: ['Radiation Dose', 'HF Blackouts', 'GNSS Scintillation'],
    details: {
      interaction:
        'Solar radiation storms increase particle dose rates for flight crews and passengers at high latitudes. Upper atmosphere ionization absorbs HF radio and degrades GNSS accuracy.',
      parameters: [
        'NOAA S-Scale (Radiation Storms)',
        'NOAA R-Scale (Radio Blackouts)',
        'D-Region Absorption (D-RAP)',
      ],
      presentation:
        'Polar flight route radiation advisories, HF absorption timelines, and GOES energetic proton flux charts.',
      scope:
        'Scientific advisory for strategic flight planning. Does not replace mandatory FAA/ICAO flight directives.',
    },
  },
  {
    id: 'satellite',
    title: 'Satellite Operators',
    icon: Satellite,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20',
    description:
      'Mitigate enhanced atmospheric thermospheric drag, deep dielectric surface charging, and single-event upsets.',
    keyFactors: ['Orbital Drag', 'Surface Charging', 'Single Event Upsets'],
    details: {
      interaction:
        'Atmospheric expansion heated by extreme UV and geomagnetic currents increases drag on Low Earth Orbit (LEO) constellations. Relativistic electrons penetrate spacecraft shielding causing ESD damage.',
      parameters: [
        'F10.7cm Solar Radio Flux',
        'Electron Flux (>2MeV)',
        'Solar Wind Speed & Proton Density',
      ],
      presentation:
        'Electron fluence thresholds, solar cycle phase models, and DSCOVR solar wind plasma velocities.',
      scope:
        'Space environmental intelligence. Does not compute individual satellite ephemerides or collision maneuvers.',
    },
  },
  {
    id: 'telecom',
    title: 'Telecommunications',
    icon: Radio,
    color: 'text-red-400',
    bgColor: 'bg-red-400/10',
    borderColor: 'border-red-400/20',
    description:
      'Maintain ionospheric signal integrity for maritime HF links, radar networks, and transoceanic repeaters.',
    keyFactors: ['Signal Fading', 'Cable Voltage', 'Phase Scintillation'],
    details: {
      interaction:
        'Solar X-ray flares rapidly ionize the D-layer of the sunlit ionosphere, attenuating high-frequency radio transmissions. Earth return currents induce voltages in submarine cables.',
      parameters: [
        'GOES X-Ray Flux (0.1–0.8 nm)',
        'NOAA R-Scale (Radio Blackouts)',
        'Ground Magnetometer Baselines',
      ],
      presentation:
        'Global D-Region Absorption maps and instantaneous flare classification levels (C, M, X class).',
      scope:
        'Radio propagation forecasting. Does not monitor specific carrier network switches or fiber hubs.',
    },
  },
  {
    id: 'oilgas',
    title: 'Oil & Gas',
    icon: Activity,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    borderColor: 'border-orange-400/20',
    description:
      'Preserve pipeline cathodic corrosion protection and directional drilling orientation against telluric currents.',
    keyFactors: ['Corrosion Potential', 'Drilling Azimuth', 'Survey Drift'],
    details: {
      interaction:
        'Telluric currents driven into Earths crust interfere with pipeline cathodic protection pipe-to-soil voltages and distort geomagnetic reference fields used for MWD directional drilling.',
      parameters: [
        'Local Magnetometer Variometers',
        'Kp Index Extremes',
        'Geoelectric Conductivity Models',
      ],
      presentation:
        'Geomagnetic storm alerts, baseline anomaly trackers, and historical log correlation tools.',
      scope:
        'Environmental risk monitoring. Does not replace physical on-site pipe coupon surveys.',
    },
  },
  {
    id: 'insurance',
    title: 'Insurance & Risk Modeling',
    icon: ShieldCheck,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/20',
    description:
      'Validate catastrophic claims and model enterprise exposure against documented space weather events.',
    keyFactors: ['Claim Verification', 'Actuarial Risk', 'Forensic Analysis'],
    details: {
      interaction:
        'Provides authoritative, timestamped space physics data to certify whether commercial asset failures (transformer trip, payload loss) correlated with peak solar storm activity.',
      parameters: [
        'Historical NOAA SWPC Logs',
        'Peak Kp/Ap Values',
        'Peak Energetic Particle Flux',
      ],
      presentation:
        'Searchable event severity records, historical threshold timelines, and forensic data cross-checks.',
      scope:
        'Post-event empirical verification and actuarial modeling. Not an underwriting financial warranty.',
    },
  },
];
