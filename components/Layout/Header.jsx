
// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';
// import { gsap } from 'gsap';
// import { Button } from '../UI/Button';
// import { useTranslation } from '../UI/LanguageToggle';
// import neelLogo from "../../assets/neelLogo.png";



// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const { t } = useTranslation();
  
//   const logoNRef = useRef(null);
//   const logoTRef = useRef(null);
//   const logoCircleRef = useRef(null);

//   // useEffect(() => {
//   //   const handleScroll = () => setIsScrolled(window.scrollY > 20);
//   //   window.addEventListener('scroll', handleScroll);

//   //   const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)", duration: 0.8 } });
//   //   tl.fromTo(logoCircleRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, delay: 0.2 })
//   //     .fromTo([logoNRef.current, logoTRef.current], 
//   //       { y: 20, opacity: 0, scale: 0.5 }, 
//   //       { y: 0, opacity: 1, scale: 1, stagger: 0.1 }, 
//   //       "-=0.4"
//   //     );

//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, []);

//   useEffect(() => {
//   const handleScroll = () => setIsScrolled(window.scrollY > 20);
//   window.addEventListener('scroll', handleScroll);

//   if (
//     logoCircleRef.current &&
//     logoNRef.current &&
//     logoTRef.current
//   ) {
//     const tl = gsap.timeline({
//       defaults: { ease: "back.out(1.7)", duration: 0.8 }
//     });

//     tl.fromTo(
//       logoCircleRef.current,
//       { scale: 0, opacity: 0 },
//       { scale: 1, opacity: 1, delay: 0.2 }
//     ).fromTo(
//       [logoNRef.current, logoTRef.current],
//       { y: 20, opacity: 0, scale: 0.5 },
//       { y: 0, opacity: 1, scale: 1, stagger: 0.1 },
//       "-=0.4"
//     );
//   }

//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);


//   const navItems = [
//     { name: t('nav_home'), href: 'home' },
//     { name: t('nav_about'), href: 'about' },
//     { 
//       name: 'Why Choose Us', 
//       href: 'why-choose-us',
//       dropdown: [
//         { name: 'Expert Trainers', href: 'trainers' },
//         { name: 'Hands-on Labs', href: 'labs' },
//         { name: 'Placement Support', href: 'placement' },
//         { name: 'Flexible Schedule', href: 'feature-schedule' },
//       ]
//     },
//     { name: t('nav_syllabus'), href: 'curriculum' },
//     { name: t('nav_testimonials'), href: 'testimonials' },
//     { name: t('nav_faq'), href: 'faq' },
//   ];

//   const handleNavClick = (e, targetId) => {
//     e.preventDefault();
//     setIsMobileMenuOpen(false);
//     setIsDropdownOpen(false);
    
//     if (targetId === 'home') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       const element = document.getElementById(targetId);
//       if (element) {
//         const headerHeight = isScrolled ? 70 : 100;
//         const elementPosition = element.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       }
//     }
//   };

//   return (
//     <header className={`  relative w-full transition-all  duration-500 ${isScrolled ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl shadow-premium py-3' : 'bg-transparent py-6'}`}>
//       <div className=" container mx-auto max-w-[1280px] px-6 flex items-center justify-between">
//         <a 
//           href="#home" 
//           className="flex items-center gap-4 group cursor-pointer" 
//           onClick={(e) => handleNavClick(e, 'home')}
//         >
//           {/* <div 
//             ref={logoCircleRef}
//             className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative brand-logo-circle transition-all duration-500 group-hover:shadow-lg overflow-hidden shrink-0"
//           >
//             <span 
//               ref={logoNRef}
//               className="text-primary font-heading font-black text-xl italic relative z-10 transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110"
//             >
//               N
//             </span>
//             <span 
//               ref={logoTRef}
//               className="text-secondary font-heading font-black text-xl italic absolute transform translate-x-2 -translate-y-0.5 transition-transform duration-500 group-hover:translate-x-2.5 group-hover:translate-y-0 group-hover:scale-110"
//             >
//               T
//             </span>
//           </div> */}
//          <img
//   src={neelLogo}
//   alt="Neel Logo"
//   style={{ width: "48px", height: "auto" }}
// />

//           {/* <div className="flex flex-col">
//             <h1 className={`font-heading font-extrabold text-xl leading-none tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary dark:text-white group-hover:text-secondary' : 'text-white group-hover:text-secondary'}`}>NEEL TECHNOLOGIES</h1>
//             <p className={`text-[9px] uppercase tracking-[0.2em] font-bold mt-1 px-1 rounded transition-all duration-300 ${isScrolled ? 'text-secondary bg-secondary/10 group-hover:bg-primary/10 group-hover:text-primary' : 'text-white/90 bg-white/10 group-hover:bg-white/20'}`}>IT-Consulting and Training</p>
//           </div> */}
//         </a>

//         <nav className="hidden lg:flex items-center gap-8">
//           {navItems.map((item) => (
//             <div 
//               key={item.href} 
//               className="relative group py-2"
//               onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
//               onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
//             >
//               <a 
//                 href={`#${item.href}`} 
//                 className={`flex items-center gap-1 font-semibold text-sm transition-colors ${isScrolled ? 'text-deep dark:text-cream/80 hover:text-secondary' : 'text-white hover:text-secondary'}`}
//                 onClick={(e) => handleNavClick(e, item.href)}
//               >
//                 {item.name}
//                 {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />}
//               </a>
              
//               {item.dropdown && (
//                 <div className={`absolute top-full left-0 w-56 bg-white dark:bg-zinc-900 shadow-2xl rounded-xl border border-deep/5 dark:border-white/5 p-2 transition-all duration-300 origin-top ${isDropdownOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
//                   {item.dropdown.map((subItem) => (
//                     <a 
//                       key={subItem.href} 
//                       href={`#${subItem.href}`}
//                       className="block px-4 py-2 text-xs font-bold text-deep/60 dark:text-white/60 hover:text-secondary hover:bg-cream dark:hover:bg-white/5 rounded-lg transition-colors"
//                       onClick={(e) => handleNavClick(e, subItem.href)}
//                     >
//                       {subItem.name}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         <div className="hidden md:flex items-center gap-6">
//           <div className="flex items-center gap-4 border-r border-deep/10 dark:border-white/10 pr-6 mr-1">
//             <a 
//               href="https://wa.me/916361866299" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               title="Chat on WhatsApp"
//               className={`transition-all duration-300 hover:scale-110 active:scale-95 ${isScrolled ? 'text-[#25D366]' : 'text-white hover:text-[#25D366]'}`}
//             >
//               <MessageCircle size={22} fill="currentColor" fillOpacity={0.1} />
//             </a>
//             <a href="tel:+916361866299" className={`flex items-center gap-2 font-extrabold transition-colors text-sm ${isScrolled ? 'text-primary dark:text-white hover:text-secondary' : 'text-white hover:text-secondary'}`}>
//               <Phone size={16} className="text-secondary" />
//               +91 6361866299
//             </a>
//           </div>
//           <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
//             <Button variant="primary" className="h-[42px] px-6 text-sm">Enroll Now</Button>
//           </a>
//         </div>

//         <button className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-primary dark:text-white' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       <div className={`lg:hidden fixed inset-0 z-40 bg-white dark:bg-zinc-950 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10 pointer-events-none'}`}>
//         <div className="flex flex-col items-center justify-center h-full gap-6 px-10">
//           {navItems.map((item) => (
//             <div key={item.href} className="w-full text-center">
//               <a 
//                 href={`#${item.href}`} 
//                 onClick={(e) => handleNavClick(e, item.href)}
//                 className="text-2xl font-heading font-extrabold text-primary dark:text-white hover:text-secondary transition-colors"
//               >
//                 {item.name}
//               </a>
//               {item.dropdown && (
//                 <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
//                   {item.dropdown.map((sub) => (
//                     <a 
//                       key={sub.href} 
//                       href={`#${sub.href}`} 
//                       onClick={(e) => handleNavClick(e, sub.href)} 
//                       className="text-xs font-bold text-secondary uppercase tracking-widest"
//                     >
//                       {sub.name}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//           <div className="flex flex-col gap-4 w-full mt-10">
//             <a 
//               href="https://wa.me/916361866299" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold border border-[#25D366]/20"
//             >
//               <MessageCircle size={20} /> WhatsApp Support
//             </a>
//             <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="w-full">
//               <Button variant="primary" className="w-full h-14 text-xl">Get Started</Button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };


import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';
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
      {/* 🔥 30% Discount Bar */}
      {/* <div className="w-full bg-secondary text-white text-sm font-bold py-2 text-center">
        🎉 Limited Offer: Get <span className="underline">30% OFF</span> on All Courses – Enroll Now!
      </div> */}

      <header className={`relative w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl shadow-premium py-3'
          : 'bg-transparent py-6'
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

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              <Button variant="primary" className="h-[42px] px-6 text-sm">
                Enroll Now
              </Button>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-primary/10 text-primary"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-center justify-center h-full gap-6 px-10">
            {navItems.map((item) => (
              <div key={item.href} className="text-center">
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-2xl font-extrabold text-primary hover:text-secondary"
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
                        className="text-xs font-bold text-secondary uppercase"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};
