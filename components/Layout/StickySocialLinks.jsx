import React, { useState, useEffect } from 'react';
import {
  ChevronUp,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  MessageCircle,
  X,
  Youtube,
} from 'lucide-react';

const StickySocialLinks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSocialExpanded, setIsSocialExpanded] = useState(false);

  // Show only after scrolling past hero
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://www.facebook.com/neeltechno',
      color: 'bg-[#1877F2]',
      label: 'Facebook',
    },
    {
      icon: Instagram,
      url: 'https://www.instagram.com/neeltechnologies/',
      color:
        'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
      label: 'Instagram',
    },
    {
      icon: Twitter,
      url: 'https://x.com/NeelTechnologi1',
      color: 'bg-black',
      label: 'Twitter',
    },
    {
      icon: Youtube,
      url: 'https://www.youtube.com/channel/UC9IBxs7m2kcSNolSll3AYLA',
      color: 'bg-[#FF0000]',
      label: 'Youtube',
    },
  ];

  const whatsappUrl = 'https://wa.me/916361866299';
  const phoneNumber = 'tel:+916361866299';

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-3 z-[100] flex flex-col items-center space-y-4 animate-fadeIn">
      {/* Social menu */}
      <div className="flex flex-col items-center relative">
        <div
          className={`absolute bottom-full mb-3 flex flex-col items-center space-y-3 transition-all duration-300 origin-bottom ${
            isSocialExpanded
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-50 translate-y-10 pointer-events-none'
          }`}
        >
          {socialLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 ${link.color} text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform`}
              style={{
                transitionDelay: isSocialExpanded
                  ? `${idx * 50}ms`
                  : '0ms',
              }}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsSocialExpanded(!isSocialExpanded)}
          className={`bg-white p-2 rounded-full shadow-md border border-slate-100 flex items-center justify-center transition-all hover:shadow-lg ${
            isSocialExpanded ? 'ring-1 ring-blue-100' : ''
          }`}
        >
          {isSocialExpanded ? (
            <X size={18} />
          ) : (
            <div className="flex items-center space-x-2">
              <Facebook size={12} />
              <Instagram size={12} />
              <Twitter size={12} />
            </div>
          )}
        </button>
      </div>

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gradient-to-br from-[#2ecc71] to-[#27ae60] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all"
      >
        <MessageCircle size={20} />
      </a>

      {/* Call */}
      <a
        href={phoneNumber}
        className="w-12 h-12 bg-gradient-to-br from-[#f39c12] to-[#e67e22] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all"
      >
        <Phone size={20} />
      </a>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-white text-slate-800 rounded-full shadow-lg flex items-center justify-center border border-slate-100 hover:bg-slate-50 transition-all"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default StickySocialLinks;
