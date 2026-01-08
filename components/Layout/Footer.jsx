
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink, CheckCircle2, Loader2, Send } from 'lucide-react';
import neelLogo from "../../assets/neelLogo.png";

/**
 * Footer component for Neel Technologies.
 * Handles navigation, social links, and newsletter subscription simulation.
 */
export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  /**
   * Smooth scroll handler for footer links.
   * @param {Event} e - Click event
   * @param {string} id - Target section ID
   */
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  /**
   * Simulation of a newsletter subscription.
   * @param {Event} e - Form submission event
   */
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulate API Call with a timeout
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1500);
  };

  return (
    <footer className="bg-deep text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative brand-logo-circle scale-90">
                <span className="text-primary font-heading font-black text-xl italic relative z-10">N</span>
                <span className="text-secondary font-heading font-black text-xl italic absolute transform translate-x-2 -translate-y-0.5">T</span>
              </div> */}
              <img
              src={neelLogo}
              alt="Neel Logo"
              style={{ width: "48px", height: "auto" }}
            />
              {/* <div>
                <h1 className="text-white font-heading font-extrabold text-xl leading-none">NEEL TECHNOLOGIES</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">IT-Consulting and Training</p>
              </div> */}
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Empowering IT professionals since 2020 with world-class cloud automation and PowerShell training. ISO Certified Training Partner.
            </p>
             <div className="pt-0 mb-4">
              <p className="text-sm text-gray-400 ml-2 mb-2">Want More Information?</p>
              <a 
                href="https://www.neeltechnologies.com/"
                className="inline-flex items-center text-[#ffff] hover:text-blue-600 font-medium text-sm rounded-lg transition-all duration-200 group"
                target="_blank" 
                rel="noopener noreferrer"
              >
                www.neeltechnologies.com
                <ExternalLink size={12} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
           
            <div className="flex gap-4">
              <a href="https://www.facebook.com/neeltechno" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Facebook size={18} /></a>
              <a href="https://x.com/NeelTechnologi1" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Twitter size={18} /></a>
              <a href="https://www.instagram.com/neeltechnologies/" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={18} /></a>
              <a href="https://www.youtube.com/channel/UC9IBxs7m2kcSNolSll3AYLA" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/50 text-sm font-semibold">
              <li><a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#why-choose-us" onClick={(e) => handleScrollTo(e, 'why-choose-us')} className="hover:text-secondary transition-colors">Why Choose Us</a></li>
              <li><a href="#curriculum" onClick={(e) => handleScrollTo(e, 'curriculum')} className="hover:text-secondary transition-colors">Course Syllabus</a></li>
              <li><a href="#testimonials" onClick={(e) => handleScrollTo(e, 'testimonials')} className="hover:text-secondary transition-colors">Success Stories</a></li>
              <li><a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')} className="hover:text-secondary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Popular Courses Column */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Popular Courses</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><a href="https://www.neeltechnologies.com/aws-training-certification-course"  className="flex items-center gap-2"><ExternalLink size={14} /> AWS Cloud</a></li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><a href="https://www.neeltechnologies.com/azure-training-certification-course"  className="flex items-center gap-2"><ExternalLink size={14} /> Azure Cloud</a></li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><a href="https://www.neeltechnologies.com/powershell-training-certification-course"  className="flex items-center gap-2"><ExternalLink size={14} /> Linux / Powershell</a></li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><a href="https://www.neeltechnologies.com/python-training-certification-course" className="flex items-center gap-2"><ExternalLink size={14} /> Python / GCP</a></li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><a href="https://www.neeltechnologies.com/cyber-security-training-certification-course"  className="flex items-center gap-2"><ExternalLink size={14} /> Ethical Hacking</a></li>
            </ul>
          </div>

          {/* Subscription Column */}
          <div className="relative">
            <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-white/50 text-sm mb-4">Get weekly AWS & PowerShell tips directly in your inbox.</p>
            
            {isSubscribed ? (
              <div className="bg-success/10 border border-success/20 p-4 rounded-xl flex items-center gap-3 animate-fadeIn">
                <CheckCircle2 size={24} className="text-success shrink-0" />
                <p className="text-xs font-bold text-white/90">
                  You're in! Check your inbox for your first PowerShell tip.
                </p>
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address" 
                  required
                  className="bg-white/5 border-white/10 border outline-none px-4 py-2 rounded-lg flex-1 text-sm focus:border-secondary transition-colors dark:text-white" 
                />
                <button 
                  disabled={isSubscribing}
                  className="bg-secondary px-1 py-1 mr-4 rounded-lg hover:brightness-110 transition-all font-bold text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? (
                    <Loader2 size={12} className="animate-spin" />
                  ) : (
                    <>Join <Send size={10} /></>
                  )}
                </button>
              </form>
            )}

            <div className="mt-8">
              <p className="text-xs text-white/30 uppercase tracking-widest font-bold mb-2">Career Assistance</p>
              <a href="tel:+916361866299" className="text-secondary font-bold text-lg hover:text-redBrown transition-colors">+91 6361866299</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs font-medium">© 2026 Neel Technologies. All Rights Reserved.</p>
          {/* <div className="flex gap-8 text-white/30 text-xs font-medium">
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-white">Privacy Policy</a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-white">Terms of Service</a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-white">Refund Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
