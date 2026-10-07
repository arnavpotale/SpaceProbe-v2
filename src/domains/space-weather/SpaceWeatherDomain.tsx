import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Factory, Database, LayoutDashboard, Archive } from 'lucide-react';
import { CanvasBackground } from './components/background/CanvasBackground';
import { SpaceWeatherHero } from './components/overview/SpaceWeatherHero';
import { WhyUsSection } from './components/overview/WhyUsSection';
import { WhoIsThisForSection } from './components/overview/WhoIsThisForSection';
import { TransparencySection } from './components/overview/TransparencySection';
import { LearnSection } from './components/learn/LearnSection';
import { IndustriesSection } from './components/industries/IndustriesSection';
import { SourcesSection } from './components/sources/SourcesSection';
import { DataArchiveSection } from './components/data/DataArchiveSection';

interface SpaceWeatherDomainProps {
  initialTab?: string;
  onNavigateHome: () => void;
  onNavigateConnect: () => void;
}

export function SpaceWeatherDomain({
  initialTab = 'overview',
  onNavigateHome,
  onNavigateConnect,
}: SpaceWeatherDomainProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  // Sync tab with URL hash if provided (e.g. #/space-weather/learn)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.includes('/learn')) setActiveTab('learn');
      else if (hash.includes('/industries')) setActiveTab('industries');
      else if (hash.includes('/sources')) setActiveTab('sources');
      else if (hash.includes('/data')) setActiveTab('data');
      else if (hash.includes('/space-weather')) setActiveTab('overview');
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update hash when activeTab changes
  useEffect(() => {
    const targetHash = `#/space-weather/${activeTab === 'overview' ? '' : activeTab}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
  }, [activeTab]);

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navTabs = [
    { id: 'overview', label: 'Platform Overview', icon: LayoutDashboard },
    { id: 'learn', label: 'Educational Guide', icon: BookOpen },
    { id: 'industries', label: 'Industry Impacts', icon: Factory },
    { id: 'sources', label: 'Data Sources', icon: Database },
    { id: 'data', label: 'Archive Status', icon: Archive },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden selection:bg-[#00a8ff]/30 selection:text-white">
      {/* 2D Canvas Starfield Background with subtle meteors */}
      <CanvasBackground />

      {/* Domain Navigation Header Bar */}
      <div className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0A0A0A]/85 border-b border-[#D8ECF9]/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Back to Home Button & Brand Badge */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#D8ECF9] hover:text-white text-xs font-semibold tracking-wide border border-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff]"
            >
              <ArrowLeft size={14} />
              <span>SpaceProbe Home</span>
            </button>

            <span className="hidden sm:inline-block h-4 w-px bg-white/20" />

            <div className="hidden sm:flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00a8ff] shadow-[0_0_8px_#00a8ff]" />
              <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                Space Weather Intelligence
              </span>
            </div>
          </div>

          {/* Subdomain Tab Switches */}
          <nav
            className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none"
            aria-label="Space Weather Navigation"
          >
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleSelectTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff] whitespace-nowrap ${
                    isActive
                      ? 'bg-[#004DC0]/50 text-white border border-[#00a8ff]/40 shadow-[0_0_12px_rgba(0,168,255,0.25)]'
                      : 'text-[#D8ECF9]/70 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <tab.icon size={13} className={isActive ? 'text-[#00a8ff]' : 'opacity-70'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Tab Content Display */}
      <main className="relative z-10 min-h-[calc(100vh-140px)]">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <SpaceWeatherHero onSelectTab={handleSelectTab} />
              <WhyUsSection />
              <WhoIsThisForSection />
              <TransparencySection />
            </motion.div>
          )}

          {activeTab === 'learn' && (
            <motion.div
              key="learn"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <LearnSection />
            </motion.div>
          )}

          {activeTab === 'industries' && (
            <motion.div
              key="industries"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <IndustriesSection
                onSelectTab={handleSelectTab}
                onNavigateConnect={onNavigateConnect}
              />
            </motion.div>
          )}

          {activeTab === 'sources' && (
            <motion.div
              key="sources"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <SourcesSection />
            </motion.div>
          )}

          {activeTab === 'data' && (
            <motion.div
              key="data"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <DataArchiveSection onNavigateConnect={onNavigateConnect} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default SpaceWeatherDomain;
