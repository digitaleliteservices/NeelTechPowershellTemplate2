
import React, { useEffect, Suspense, lazy, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Phone } from 'lucide-react';

import { Header } from './components/Layout/Header';
import { Hero } from './components/Sections/Hero';
import { Stats } from './components/Sections/Stats';
import { About } from './components/Sections/About';
import { WhyChooseUs } from './components/Sections/WhyChooseUs';
import { Footer } from './components/Layout/Footer';
import { CardSkeleton } from './components/UI/Skeleton';
import { ErrorBoundary } from './components/UI/ErrorBoundary';
import { LanguageProvider } from './components/UI/LanguageToggle';
import { CalendarModal } from './components/UI/CalendarModal';
import { BackgroundAnimations } from './components/UI/BackgroundAnimations';
import { UrgencyBanner } from './components/Sections/UrgencyBanner';
import { TRANSLATIONS, COURSE_FEATURES } from './constants';

// Lazy loading for sections - paths fixed to match filenames
const Curriculum = lazy(() => import('./components/Sections/Curriculum').then(m => ({ default: m.Curriculum })));
const BatchSchedule = lazy(() => import('./components/Sections/BatchSchedule').then(m => ({ default: m.BatchSchedule })));
const Testimonials = lazy(() => import('./components/Sections/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/Sections/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./components/Sections/Contact').then(m => ({ default: m.Contact })));
const Benefits = lazy(() => import('./components/Sections/Benefits').then(m => ({ default: m.Benefits })));

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    const handleDemoClick = (e) => {
      const target = e.target;
      if (target.closest('[data-trigger="demo"]')) {
        setIsCalendarOpen(true);
      }
    };
    document.addEventListener('click', handleDemoClick);
    return () => document.removeEventListener('click', handleDemoClick);
  }, []);

  return (
    <LanguageProvider translations={TRANSLATIONS}>
      <div className="min-h-screen selection:bg-primary selection:text-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="fixed top-0 left-0 w-full z-50 flex flex-col pointer-events-none">
          <div className="pointer-events-auto w-full">
            <UrgencyBanner />
          </div>
          <div className="pointer-events-auto w-full">
            <Header />
          </div>
        </div>
        
        <BackgroundAnimations />
        
        <main className="relative">
          <Hero />
          
          <div className="reveal">
            <Stats />
          </div>
          <Benefits />
          <About />
          

          <div className="relative h-24 bg-cream dark:bg-zinc-950 overflow-hidden">
            <svg className="absolute bottom-0 w-full h-full text-lightCream dark:text-zinc-900/50" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="currentColor" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>

          <WhyChooseUs />

          {/* <section className="py-24 bg-lightCream dark:bg-zinc-900/50 overflow-hidden relative">
            <div className="container mx-auto max-w-[1280px] px-6 relative z-10">
              <div className="bg-deep dark:bg-zinc-900 rounded-[3rem] p-12 lg:p-24 shadow-premium text-white relative border border-white/5 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
                
                <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <h2 className="text-h2 leading-tight">High-Impact Learning Ecosystem</h2>
                      <p className="text-white/50 text-xl font-light">Engineered for senior architects and automation leads who demand absolute excellence.</p>
                    </div>
                    
                    <div className="space-y-8">
                      {COURSE_FEATURES.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                          <div className="text-accent w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">{feature.icon}</div>
                          <div>
                            <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                            <p className="text-body-sm text-white/40 font-medium">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8 items-center">
                    {COURSE_FEATURES.slice(4).map((feature, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur-md p-10 rounded-card border border-white/10 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-all group shadow-inner">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                          {feature.icon}
                        </div>
                        <h4 className="font-heading font-bold text-body tracking-wide leading-snug">{feature.title}</h4>
                      </div>
                    ))}
                    <div className="sm:col-span-2 bg-gradient-to-r from-primary to-redBrown rounded-card p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-white/10">
                      <div className="text-center md:text-left space-y-1">
                        <p className="text-[11px] uppercase tracking-[0.35em] font-extrabold text-white/50">Average Salary Growth</p>
                        <h3 className="text-h2 text-white">₹8L — 15L PA</h3>
                      </div>
                      <div className="text-center md:text-right space-y-1">
                        <p className="text-[11px] uppercase tracking-[0.35em] font-extrabold text-white/50">Global Hiring</p>
                        <h3 className="text-h2 text-white">500+ ENTITIES</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="py-16 lg:py-24 bg-lightCream dark:bg-zinc-900/50 overflow-hidden relative">
          <div className="container mx-auto max-w-[1280px] px-4 sm:px-6 relative z-10">
            <div className="bg-deep dark:bg-zinc-900 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-24 shadow-premium text-white relative border border-white/5 overflow-hidden">

              {/* Background Blobs */}
              <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent/5 rounded-full blur-[120px]" />

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 relative z-10">

                {/* Left Column */}
                <div className="space-y-10">
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-h2 leading-tight">
                      High-Impact Learning Ecosystem
                    </h2>
                    <p className="text-white/60 text-base sm:text-lg lg:text-xl font-light">
                      Engineered for senior architects and automation leads who demand absolute excellence.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {COURSE_FEATURES.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                      >
                        <div className="text-accent w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/5 rounded-2xl shrink-0 group-hover:scale-110 transition-transform">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white">
                            {feature.title}
                          </h4>
                          <p className="text-sm sm:text-body-sm text-white/40 font-medium">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
                  {COURSE_FEATURES.slice(4).map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-card border border-white/10 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-all group shadow-inner"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full flex items-center justify-center text-accent mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <h4 className="font-heading font-bold text-sm sm:text-body tracking-wide leading-snug">
                        {feature.title}
                      </h4>
                    </div>
                  ))}

                  {/* Stats Card */}
                  <div className="sm:col-span-2 bg-gradient-to-r from-primary to-redBrown rounded-card p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10 shadow-2xl border border-white/10">
                    <div className="text-center md:text-left space-y-1">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-extrabold text-white/50">
                        Average Salary Growth
                      </p>
                      <h3 className="text-2xl sm:text-3xl lg:text-h2 text-white">
                        ₹8L — 15L PA
                      </h3>
                    </div>

                    <div className="text-center md:text-right space-y-1">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-extrabold text-white/50">
                        Global Hiring
                      </p>
                      <h3 className="text-2xl sm:text-3xl lg:text-h2 text-white">
                        500+ ENTITIES
                      </h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

          <Suspense fallback={<div className="container mx-auto px-6 py-24"><CardSkeleton /></div>}>
            <ErrorBoundary><Curriculum /></ErrorBoundary>
          </Suspense>

          <Suspense fallback={<div className="container mx-auto px-6 py-24"><CardSkeleton /></div>}>
            <ErrorBoundary><BatchSchedule /></ErrorBoundary>
          </Suspense>

          <Suspense fallback={<div className="container mx-auto px-6 py-24"><CardSkeleton /></div>}>
            <ErrorBoundary><Testimonials /></ErrorBoundary>
          </Suspense>

          <Suspense fallback={<div className="container mx-auto px-6 py-24"><CardSkeleton /></div>}>
            <ErrorBoundary><FAQ /></ErrorBoundary>
          </Suspense>

          <Suspense fallback={<div className="container mx-auto px-6 py-24"><CardSkeleton /></div>}>
            <ErrorBoundary><Contact /></ErrorBoundary>
          </Suspense>
        </main>

        <Footer />

        <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />

        <a 
          href="https://wa.me/916361866299" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 bg-success text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 group"
        >
          <div className="relative">
            <MessageCircle size={32} />
            <div className="absolute -bottom-1 -right-1 bg-white text-success rounded-full p-1 shadow-sm flex items-center justify-center">
              <Phone size={10} fill="currentColor" strokeWidth={3} />
            </div>
          </div>
          <span className="absolute right-20 bg-white dark:bg-zinc-800 text-deep dark:text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            Chat or Call Support
          </span>
        </a>
      </div>
    </LanguageProvider>
  );
};

export default App;
