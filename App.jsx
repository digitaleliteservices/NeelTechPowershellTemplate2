import React, { useEffect, Suspense, lazy, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Header } from "./components/Layout/Header";
import { Hero } from "./components/Sections/Hero";
import { Stats } from "./components/Sections/Stats";
import { About } from "./components/Sections/About";
import { WhyChooseUs } from "./components/Sections/WhyChooseUs";
import { Footer } from "./components/Layout/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

// Add this import
import VideoSection from "./components/Sections/VideoSection";

import { CardSkeleton } from "./components/UI/Skeleton";
import { ErrorBoundary } from "./components/UI/ErrorBoundary";
import { LanguageProvider } from "./components/UI/LanguageToggle";
import { CalendarModal } from "./components/UI/CalendarModal";
import { BackgroundAnimations } from "./components/UI/BackgroundAnimations";
import { UrgencyBanner } from "./components/Sections/UrgencyBanner";

import { TRANSLATIONS, COURSE_FEATURES } from "./constants";
import StickySocialLinks from "./components/Layout/StickySocialLinks";

// Lazy loaded sections
const Curriculum = lazy(() =>
  import("./components/Sections/Curriculum").then((m) => ({
    default: m.Curriculum,
  }))
);
const BatchSchedule = lazy(() =>
  import("./components/Sections/BatchSchedule").then((m) => ({
    default: m.BatchSchedule,
  }))
);
const Testimonials = lazy(() =>
  import("./components/Sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);
const FAQ = lazy(() =>
  import("./components/Sections/FAQ").then((m) => ({ default: m.FAQ }))
);
const Contact = lazy(() =>
  import("./components/Sections/Contact").then((m) => ({ default: m.Contact }))
);
const Benefits = lazy(() =>
  import("./components/Sections/Benefits").then((m) => ({
    default: m.Benefits,
  }))
);

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const handleDemoClick = (e) => {
      if (e.target.closest('[data-trigger="demo"]')) {
        setIsCalendarOpen(true);
      }
    };

    document.addEventListener("click", handleDemoClick);
    return () => document.removeEventListener("click", handleDemoClick);
  }, []);

  // return (
  //   <LanguageProvider translations={TRANSLATIONS}>
  //     <div className="min-h-screen selection:bg-primary selection:text-white dark:bg-zinc-950 transition-colors duration-300">
  //       {/* Top Fixed Header */}
  //       <div className="fixed top-0 left-0 w-full z-50 flex flex-col pointer-events-none">
  //         <div className="pointer-events-auto w-full">
  //           <UrgencyBanner />
  //         </div>
  //         <div className="pointer-events-auto w-full">
  //           <Header />
  //         </div>
  //       </div>

  //       <BackgroundAnimations />

  //       <main className="relative pt-32">
  //         <Hero />

  //         <div className="reveal">
  //           <Stats />
  //         </div>

  //         <Benefits />

  //         {/* Add Video Section Here - Above About section */}
  //         <VideoSection />

  //         <About />

  //         <WhyChooseUs />

  //         {/* Lazy Sections */}
  //         <Suspense
  //           fallback={
  //             <div className="container mx-auto px-6 py-24">
  //               <CardSkeleton />
  //             </div>
  //           }
  //         >
  //           <ErrorBoundary>
  //             <Curriculum />
  //           </ErrorBoundary>
  //         </Suspense>

  //         <Suspense
  //           fallback={
  //             <div className="container mx-auto px-6 py-24">
  //               <CardSkeleton />
  //             </div>
  //           }
  //         >
  //           <ErrorBoundary>
  //             <BatchSchedule />
  //           </ErrorBoundary>
  //         </Suspense>

  //         <Suspense
  //           fallback={
  //             <div className="container mx-auto px-6 py-24">
  //               <CardSkeleton />
  //             </div>
  //           }
  //         >
  //           <ErrorBoundary>
  //             <Testimonials />
  //           </ErrorBoundary>
  //         </Suspense>

  //         <Suspense
  //           fallback={
  //             <div className="container mx-auto px-6 py-24">
  //               <CardSkeleton />
  //             </div>
  //           }
  //         >
  //           <ErrorBoundary>
  //             <FAQ />
  //           </ErrorBoundary>
  //         </Suspense>

  //         <Suspense
  //           fallback={
  //             <div className="container mx-auto px-6 py-24">
  //               <CardSkeleton />
  //             </div>
  //           }
  //         >
  //           <ErrorBoundary>
  //             <Contact />
  //           </ErrorBoundary>
  //         </Suspense>
  //       </main>

  //       <Footer />

  //       {/* Modals */}
  //       <CalendarModal
  //         isOpen={isCalendarOpen}
  //         onClose={() => setIsCalendarOpen(false)}
  //       />

  //       {/* Sticky Actions */}
  //       <StickySocialLinks />
  //     </div>
  //   </LanguageProvider>
  // );
  return (
    <LanguageProvider translations={TRANSLATIONS}>
      <div className="min-h-screen selection:bg-primary selection:text-white dark:bg-zinc-950 transition-colors duration-300">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 w-full z-50 flex flex-col pointer-events-none">
          <div className="pointer-events-auto w-full">
            <UrgencyBanner />
          </div>
          <div className="pointer-events-auto w-full">
            <Header />
          </div>
        </div>

        <Routes>
          {/* Powershell landing page */}
          <Route
            path="/"
            element={
              <>
                <BackgroundAnimations />

                <main className="relative pt-32">
                  <Hero />

                  <div className="reveal">
                    <Stats />
                  </div>

                  <Benefits />
                  <VideoSection />
                  <About />
                  <WhyChooseUs />

                  <Suspense
                    fallback={
                      <div className="container mx-auto px-6 py-24">
                        <CardSkeleton />
                      </div>
                    }
                  >
                    <ErrorBoundary>
                      <Curriculum />
                    </ErrorBoundary>
                  </Suspense>

                  <Suspense
                    fallback={
                      <div className="container mx-auto px-6 py-24">
                        <CardSkeleton />
                      </div>
                    }
                  >
                    <ErrorBoundary>
                      <BatchSchedule />
                    </ErrorBoundary>
                  </Suspense>

                  <Suspense
                    fallback={
                      <div className="container mx-auto px-6 py-24">
                        <CardSkeleton />
                      </div>
                    }
                  >
                    <ErrorBoundary>
                      <Testimonials />
                    </ErrorBoundary>
                  </Suspense>

                  <Suspense
                    fallback={
                      <div className="container mx-auto px-6 py-24">
                        <CardSkeleton />
                      </div>
                    }
                  >
                    <ErrorBoundary>
                      <FAQ />
                    </ErrorBoundary>
                  </Suspense>

                  <Suspense
                    fallback={
                      <div className="container mx-auto px-6 py-24">
                        <CardSkeleton />
                      </div>
                    }
                  >
                    <ErrorBoundary>
                      <Contact />
                    </ErrorBoundary>
                  </Suspense>
                </main>

                <Footer />

                <CalendarModal
                  isOpen={isCalendarOpen}
                  onClose={() => setIsCalendarOpen(false)}
                />

                <StickySocialLinks />
              </>
            }
          />
        </Routes>
      </div>
    </LanguageProvider>
  );
};

export default App;
