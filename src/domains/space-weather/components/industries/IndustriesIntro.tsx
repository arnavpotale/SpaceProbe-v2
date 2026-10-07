import React from 'react';

export function IndustriesIntro() {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
          [SECTOR ANALYSIS]
        </span>
        <span className="h-px w-6 bg-[#004DC0]" />
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
          Critical Infrastructure
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
        Industry-Specific <span className="text-gradient-blue">Vulnerability Intelligence</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-[#D8ECF9]/80 font-light max-w-3xl mx-auto leading-relaxed">
        Space weather impacts are non-uniform across technological domains. We translate complex
        heliophysics data into domain-tailored vulnerability matrices for power transmission,
        orbital operations, transpolar aviation, and precision geospatial positioning.
      </p>
    </div>
  );
}
