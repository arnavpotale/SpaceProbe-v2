import React from 'react';
import { Mail, MapPin, ShieldCheck, Award, ArrowUp, ExternalLink } from 'lucide-react';
import logoUrl from '@/assets/logos/logo.webp';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      role="contentinfo"
      aria-label="SpaceProbe Site Footer"
      className="relative w-full bg-[#070913] text-white pt-16 md:pt-20 pb-12 border-t border-[#D8ECF9]/10 overflow-hidden"
    >
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#00a8ff]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/5">
          {/* Col 1 & 2: Brand Identity & Incubation Credentials (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="SpaceProbe" className="h-8 w-auto" />
            </div>

            <p className="text-xs md:text-sm text-text-muted leading-relaxed max-w-md font-light">
              Bridging cutting-edge space research and real-world operational applications through
              heliophysics intelligence, geospatial analytics, and aerospace technology.
            </p>

            {/* Incubation Badges */}
            <div className="flex flex-col gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2.5 text-xs text-white/85 bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2 w-fit">
                <ShieldCheck size={15} className="text-[#00a8ff] shrink-0" />
                <span className="font-mono text-[11px] tracking-wide">
                  DPIIT-Recognized Deep-Tech Enterprise
                </span>
              </div>
              <div className="inline-flex items-center gap-2.5 text-xs text-white/85 bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2 w-fit">
                <Award size={15} className="text-[#00a8ff] shrink-0" />
                <span className="font-mono text-[11px] tracking-wide">
                  Incubated at the University of Mumbai
                </span>
              </div>
            </div>

            {/* Direct Address */}
            <div className="flex flex-col gap-2 pt-2 text-xs text-text-muted font-mono text-[11px]">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-[#00a8ff] shrink-0" />
                <span>Borivali, Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#00a8ff] shrink-0" />
                <a
                  href="mailto:director@spaceprobe.in"
                  className="text-[#D8ECF9]/80 hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
                >
                  director@spaceprobe.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase font-mono tracking-widest font-bold text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00a8ff]" />
              <span>Solutions</span>
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a
                  href="#/space-weather"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '/space-weather';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-text-muted hover:text-[#00a8ff] hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Space Weather Intelligence
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#platform');
                  }}
                  className="text-text-muted hover:text-[#00a8ff] hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Geospatial Analytics
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#platform');
                  }}
                  className="text-text-muted hover:text-[#00a8ff] hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Space Tech & Payloads
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#platform');
                  }}
                  className="text-text-muted hover:text-[#00a8ff] hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Education & Workforce
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Science */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase font-mono tracking-widest font-bold text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00a8ff]" />
              <span>Platform & Science</span>
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }}
                  className="text-text-muted hover:text-[#00a8ff] hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Who We Are
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#impact');
                  }}
                  className="text-text-muted hover:text-[#00a8ff] hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Operational Impact
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#gallery');
                  }}
                  className="text-text-muted hover:text-[#00a8ff] hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Research & Field Work
                </a>
              </li>
              <li>
                <a
                  href="#connect"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#connect');
                  }}
                  className="text-text-muted hover:text-[#00a8ff] hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Collaboration Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Inquiries & Actions */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase font-mono tracking-widest font-bold text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00a8ff]" />
              <span>Institutional Inquiries</span>
            </h4>
            <p className="text-xs text-text-muted leading-relaxed font-light mb-1">
              For B2B telemetry integration, academic research publications, or government
              partnerships:
            </p>
            <a
              href="mailto:director@spaceprobe.in?subject=SpaceProbe%20Official%20Inquiry"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00a8ff]/40 text-white font-mono text-xs transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,168,255,0.2)]"
            >
              <span>Inquire via Email</span>
              <ExternalLink size={12} className="opacity-70 text-[#00a8ff]" />
            </a>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-text-muted">
          <div>
            <span>© {new Date().getFullYear()} SpaceProbe Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>DPIIT Recognition #DIPP124803</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#00a8ff] hover:text-white transition-colors outline-none focus-visible:ring-1 focus-visible:ring-[#004DC0]"
              aria-label="Scroll back to top of page"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
