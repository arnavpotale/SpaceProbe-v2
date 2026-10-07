import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '@/assets/logos/logo.svg';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

interface NavbarProps {
  onNavigateSpaceWeather?: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about', id: 'about' },
  { label: 'Solutions', href: '#solutions', id: 'solutions' },
  { label: 'Why It Matters', href: '#impact', id: 'impact' },
  { label: 'Platform', href: '#platform', id: 'platform' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Connect', href: '#connect', id: 'connect' },
];

export function Navbar({ onNavigateSpaceWeather }: NavbarProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll for persistent navbar transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60);

      // Track active section for indicator
      const sectionIds = ['hero', 'about', 'solutions', 'impact', 'platform', 'gallery', 'connect'];
      const scrollPosition = scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (id === 'hero') {
          if (scrollY < 300) {
            setActiveSection('hero');
            break;
          }
        } else {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle Escape key to close mobile drawer
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    },
    [isMobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Global Persistent Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex justify-center w-full transition-all duration-300 pointer-events-none ${
          isScrolled ? 'py-2 px-3 md:px-6' : 'py-5 px-4 md:px-8'
        }`}
      >
        <div
          className={`pointer-events-auto w-full transition-all duration-300 flex items-center justify-between ${
            isScrolled
              ? 'max-w-7xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#D8ECF9]/15 shadow-2xl rounded-2xl px-5 py-3'
              : 'max-w-[1440px] bg-transparent border border-transparent px-2 py-1'
          }`}
        >
          {/* Brand Logo with Subtle Premium Hover Interaction */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            aria-label="SpaceProbe Homepage"
            className="group relative flex items-center gap-3 shrink-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0]"
          >
            {/* Subtle discovery halo on hover */}
            <div className="absolute -inset-2 rounded-full bg-[#00a8ff]/0 group-hover:bg-[#00a8ff]/15 blur-lg transition-all duration-300 pointer-events-none -z-10" />

            <img
              src={logoUrl}
              alt="SpaceProbe"
              className="h-7 sm:h-8 md:h-9 w-auto select-none pointer-events-none transition-all duration-300 ease-out group-hover:brightness-110 group-hover:scale-[1.02] filter group-hover:drop-shadow-[0_0_10px_rgba(216,236,249,0.5)] group-hover:drop-shadow-[0_0_18px_rgba(0,168,255,0.3)]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0] ${
                    isActive
                      ? 'text-white bg-[#004DC0]/40 shadow-[0_0_15px_rgba(0,77,192,0.4)]'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full border border-[#D8ECF9]/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Space Weather Button + Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Space Weather Domain Entry Button */}
            <a
              href="#/space-weather"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateSpaceWeather) {
                  onNavigateSpaceWeather();
                } else {
                  window.location.hash = '/space-weather';
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#00a8ff]/15 hover:bg-[#00a8ff]/25 text-[#00a8ff] hover:text-white border border-[#00a8ff]/40 text-[10px] sm:text-[11px] uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_0_15px_rgba(0,168,255,0.15)] outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00a8ff] animate-pulse" />
              <span>Space Weather</span>
            </a>

            <a
              href="#connect"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#connect');
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#004DC0] to-[#0952BD] hover:from-[#0057D9] hover:to-[#0A5DDB] text-white text-[11px] uppercase tracking-widest font-bold shadow-lg shadow-[#004DC0]/20 hover:shadow-[#004DC0]/40 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#D8ECF9]"
            >
              <span>Connect</span>
              <ArrowUpRight size={13} className="opacity-80" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0]"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" id="mobile-navigation-drawer">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Slide-in Drawer */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#0E1334] border-l border-[#D8ECF9]/15 shadow-2xl p-6 flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <img src={logoUrl} alt="SpaceProbe" className="h-7 w-auto" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-2 mt-6">
                  {/* Space Weather Domain Entry Mobile Button */}
                  <a
                    href="#/space-weather"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      if (onNavigateSpaceWeather) {
                        onNavigateSpaceWeather();
                      } else {
                        window.location.hash = '/space-weather';
                      }
                    }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-small font-bold tracking-wide bg-[#004DC0]/40 text-white border border-[#00a8ff]/40 shadow-lg"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-[#00a8ff] animate-pulse" />
                      <span>Space Weather Suite</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#00a8ff] uppercase">PORTAL →</span>
                  </a>

                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-small font-medium tracking-wide transition-all ${
                          isActive
                            ? 'bg-[#004DC0]/30 text-white border border-[#D8ECF9]/30'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#00a8ff]" />}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#connect"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#connect');
                  }}
                  className="w-full text-center py-3 px-4 rounded-xl bg-gradient-to-r from-[#004DC0] to-[#0952BD] text-white font-bold text-caption tracking-wider uppercase shadow-lg shadow-[#004DC0]/25"
                >
                  Connect With Us
                </a>
                <span className="text-[10px] text-center text-text-muted">
                  DPIIT-Recognized • University of Mumbai Incubated
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
