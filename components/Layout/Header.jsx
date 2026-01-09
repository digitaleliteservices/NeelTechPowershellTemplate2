import React, { useState, useEffect, useRef } from 'react';
import { Menu, X,PlayCircle, Phone, ChevronDown, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { Button } from '../UI/Button';
import { useTranslation } from '../UI/LanguageToggle';
import neelLogo from "../../assets/neelLogo.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const logoNRef = useRef(null);
  const logoTRef = useRef(null);
  const logoCircleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    if (logoCircleRef.current && logoNRef.current && logoTRef.current) {
      const tl = gsap.timeline({
        defaults: { ease: "back.out(1.7)", duration: 0.8 }
      });

      tl.fromTo(
        logoCircleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, delay: 0.2 }
      ).fromTo(
        [logoNRef.current, logoTRef.current],
        { y: 20, opacity: 0, scale: 0.5 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.1 },
        "-=0.4"
      );
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav_home'), href: 'home' },
    { name: t('nav_about'), href: 'about' },
    {
      name: 'Why Choose Us',
      href: 'why-choose-us',
      dropdown: [
        { name: 'Expert Trainers', href: 'trainers' },
        { name: 'Hands-on Labs', href: 'labs' },
        { name: 'Placement Support', href: 'placement' },
        { name: 'Flexible Schedule', href: 'feature-schedule' },
      ]
    },
    { name: t('nav_syllabus'), href: 'curriculum' },
    { name: t('nav_testimonials'), href: 'testimonials' },
    { name: t('nav_faq'), href: 'faq' },
    // { name: t('Enroll Now'), href: 'enroll-now' },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerHeight = isScrolled ? 70 : 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      {/* Header */}
      <header className={`relative w-full transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl shadow-premium py-3'
          : 'bg-[#00467f] py-6'
      }`}>
        <div className="container mx-auto max-w-[1280px] px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-4 cursor-pointer"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <img src={neelLogo} alt="Neel Logo" className="w-12 h-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group py-2"
                onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
              >
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-1 font-semibold text-sm transition-colors ${
                    isScrolled ? 'text-deep hover:text-secondary' : 'text-white hover:text-secondary'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </a>

                {item.dropdown && (
                  <div className={`absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl p-2 transition-all ${
                    isDropdownOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
                  }`}>
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.href}
                        href={`#${sub.href}`}
                        onClick={(e) => handleNavClick(e, sub.href)}
                        className="block px-4 py-2 text-xs font-bold hover:text-secondary rounded-lg"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Enroll Button */}
          <div className="hidden md:flex items-center gap-6">
            
              <Button variant="primary" onClick={() =>
                window.open("https://chat.whatsapp.com/BfRM70pDlas6Ysqg0Y8ajA", "_blank")
              } className="h-[42px] px-6 text-sm">
                <PlayCircle size={24} /> {t("btn_demo")}
              </Button>
           
          </div>

          {/* Hamburger */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-zinc-950 flex flex-col items-center justify-center px-10 transition-all duration-300">
          
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-primary/10 text-primary dark:text-white"
          >
            <X size={28} />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            {navItems.map((item) => (
              <div key={item.href} className="text-center w-full">
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-2xl font-extrabold text-primary dark:text-white hover:text-secondary transition-colors block w-full"
                >
                  {item.name}
                </a>

                {item.dropdown && (
                  <div className="flex flex-wrap justify-center gap-3 mt-3">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.href}
                        href={`#${sub.href}`}
                        onClick={(e) => handleNavClick(e, sub.href)}
                        className="text-xs font-bold text-secondary dark:text-white/70 uppercase"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Enroll Button */}
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="w-full mt-10">
              <Button variant="primary" className="w-full h-14 text-xl">
                Enroll Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
