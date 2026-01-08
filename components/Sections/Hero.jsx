import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Button } from "../UI/Button";
import { Eye, PlayCircle, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { useTranslation } from "../UI/LanguageToggle";
import neelLogo from "../../assets/neelLogo.png";
import "./hero.css";

gsap.registerPlugin(TextPlugin);

export const Hero = () => {
  const headlineRef = useRef(null);
  const badgeRef = useRef(null);
  const meshRef = useRef(null);
  const { t, lang } = useTranslation();

  useEffect(() => {
    // Animate headline text
    if (headlineRef.current) {
      headlineRef.current.innerText = "";
      gsap.to(headlineRef.current, {
        duration: 2.2,
        text: t("hero_title"),
        ease: "power1.inOut",
        delay: 0.2,
      });
    }

    // Floating card animation only on desktop
    if (badgeRef.current && window.innerWidth >= 1024) {
      gsap.to(badgeRef.current, {
        y: 12,
        rotationZ: 2,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Mesh animation only on tablet+ for performance
    if (meshRef.current && window.innerWidth >= 640) {
      const nodes = meshRef.current.querySelectorAll(".tech-node");
      const connections = meshRef.current.querySelectorAll(".tech-connection");

      gsap.to(nodes, {
        scale: 1.5,
        opacity: 0.8,
        duration: "random(1.5, 3)",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, from: "random" },
        ease: "sine.inOut",
      });

      gsap.fromTo(
        connections,
        { strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 4,
          repeat: -1,
          ease: "none",
          stagger: 0.5,
        }
      );
    }
  }, [lang, t]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    window.scrollTo({
      top: elementPosition + window.pageYOffset - offset,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        pt-0 sm:pt-28 lg:pt-0
        pb-16
        flex flex-col lg:flex-row items-start lg:items-center
        bg-gradient-to-br
        from-[#003B6B]
        via-[#004C8B]
        to-[#0070BA]
        dark:from-[#0F172A]
        dark:to-[#1E293B]
        overflow-hidden
      "
    >
      {/* SVG Mesh – hidden on small screens */}
      <svg
        ref={meshRef}
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none hidden sm:block"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <g stroke="#F58220" strokeWidth="1" fill="none">
          <path
            className="tech-connection"
            d="M100,200 L300,400 L500,200"
            strokeDasharray="10 5"
          />
          <path
            className="tech-connection"
            d="M800,100 L600,300 L900,500"
            strokeDasharray="10 5"
          />
          <path
            className="tech-connection"
            d="M200,800 L400,600 L100,400"
            strokeDasharray="10 5"
          />
        </g>

        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            className="tech-node fill-secondary"
            cx={Math.random() * 1000}
            cy={Math.random() * 1000}
            r="3"
            filter="url(#glow)"
            opacity="0.3"
          />
        ))}
      </svg>

      {/* Gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-secondary/5 rounded-full blur-[150px] -mr-32 sm:-mr-96 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] bg-accent/10 rounded-full blur-[120px] -ml-32 sm:-ml-48 -mb-24"></div>

      <div className="container mx-auto max-w-[1280px] px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">
        {/* LEFT CONTENT */}
        <div className="text-left space-y-6 sm:space-y-8 mt-12 pt-8 lg:mt-0 lg:pt-0 md:mt-0 md:pt-0">
          {/* Badges */}
          <div className="pt-8 sm:pt-12 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 text-white rounded-full border border-white/20 font-bold text-xs tracking-[0.15em] backdrop-blur-md">
              <ShieldCheck size={18} className="text-secondary" />
              <span className="uppercase">{t("hero_badge")}</span>
            </div>

            <a
              href="https://wa.me/916361866299?text=Hi, I want to claim the 30% discount!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-full font-black text-xs tracking-[0.15em] animate-pulse hover:scale-105 transition"
            >
              <Sparkles size={18} /> 30% OFF - LIMITED TIME
            </a>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="
              text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px]
              font-heading font-extrabold text-white
              leading-tight tracking-tight
              min-h-[96px] sm:min-h-[144px] md:min-h-[216px]
            "
          />

          {/* Subheading */}
          <p className="text-white/80 max-w-xl text-base sm:text-lg leading-relaxed">
            {t("hero_sub")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
            <Button
              variant="primary"
              className="w-full sm:min-w-[240px] h-[52px] sm:h-[60px] text-base sm:text-lg"
              onClick={() =>
                window.open("https://wa.me/916361866299", "_blank")
              }
            >
              <PlayCircle size={24} /> {t("btn_demo")}
            </Button>

            <Button
              variant="outline"
              className="w-full sm:min-w-[240px] h-[52px] sm:h-[60px] text-base sm:text-lg border-white text-white"
              onClick={(e) => handleScrollTo(e, "curriculum")}
            >
              <Eye size={24} /> {t("btn_syllabus")}
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-10 sm:pt-12 border-t border-white/10 grid grid-cols-2 gap-6 sm:flex sm:gap-12">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-secondary">
                98%
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-white/70 font-bold">
                {t("stats_success")}
              </p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-secondary">
                3000+
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-white/70 font-bold">
                {t("stats_students")}
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-secondary">
                <Zap size={24} fill="currentColor" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/70 font-bold">
                Fast-Track Career
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD – MOBILE & DESKTOP */}
        <div className="flex justify-center mt-8 lg:mt-0">
          <div
            ref={badgeRef}
            className="
              w-full max-w-sm
              lg:max-w-[440px]
              bg-white dark:bg-zinc-900
              rounded-2xl
              shadow-premium
              p-6 sm:p-8 lg:p-12
              border-t-[8px] lg:border-t-[12px] border-secondary
              relative overflow-hidden
              group
              transition-all
            "
          >
            <div className="absolute -top-10 -right-10 opacity-5">
              <ShieldCheck size={180} lg={280} className="text-primary" />
            </div>

            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 lg:mb-10 mx-auto">
              <img
                src={neelLogo}
                alt="Neel Logo"
                className="w-12 lg:w-12 h-auto"
              />
            </div>

            <h3 className="text-xl lg:text-3xl font-heading font-extrabold text-primary dark:text-white mb-1 lg:mb-3 text-center">
              AWS SOLUTIONS ARCHITECT
            </h3>
            <p className="text-secondary text-sm lg:text-xl font-bold italic mb-6 lg:mb-10 text-center">
              Professional Certification
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs lg:text-[11px] font-bold uppercase mb-1">
                  <span>Batch Capacity</span>
                  <span>16/20 Filled</span>
                </div>
                <div className="h-2 lg:h-3 rounded-full overflow-hidden bg-slate-100 dark:bg-white/5">
                  <div className="h-full w-[80%] bg-gradient-to-r from-primary to-accent shadow-inner" />
                </div>
              </div>

              <div className="pt-3 lg:pt-4 border-t border-slate-100 dark:border-white/10">
                <p className="flex items-center gap-2 text-success font-bold text-sm lg:text-lg justify-center">
                  <Sparkles size={16} /> SAVE 30% TODAY
                </p>
                <p className="text-xs lg:text-body-sm text-primary/60 dark:text-white/40 leading-relaxed text-center">
                  ISO 9001:2015 Certified Training Methodology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
