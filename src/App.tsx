import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { HomePage } from './components/home/HomePage';
import { Footer } from './components/layout/Footer';

const SpaceWeatherDomain = lazy(() => import('./domains/space-weather/SpaceWeatherDomain'));

export function App() {
  const [route, setRoute] = useState(() => {
    return window.location.hash.startsWith('#/space-weather') ? 'space-weather' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/space-weather')) {
        setRoute('space-weather');
      } else {
        setRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '';
    setRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSpaceWeather = () => {
    window.location.hash = '/space-weather';
    setRoute('space-weather');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToConnect = () => {
    window.location.hash = '';
    setRoute('home');
    setTimeout(() => {
      const el = document.getElementById('connect');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (route === 'space-weather') {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
              <div className="flex flex-col items-center gap-4">
                <div className="h-10 w-10 rounded-full border-2 border-[#00a8ff] border-t-transparent animate-spin" />
                <span className="text-xs font-mono tracking-widest text-[#D8ECF9]/80 uppercase">
                  Initializing Space Weather Domain...
                </span>
              </div>
            </div>
          }
        >
          <SpaceWeatherDomain
            onNavigateHome={navigateToHome}
            onNavigateConnect={navigateToConnect}
          />
        </Suspense>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar onNavigateSpaceWeather={navigateToSpaceWeather} />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
