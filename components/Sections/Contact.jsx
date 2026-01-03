
import React from 'react';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '../UI/Button';
import { useTranslation } from '../UI/LanguageToggle';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-deep dark:bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border-8 border-white dark:border-white/5">
          <div className="w-full md:w-3/5 p-12 text-white bg-deep">
            <h2 className="text-3xl font-heading font-bold mb-6">{t('contact_title')}</h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Have questions about the certification or batch timings? Our technical counselors are available for a direct consultation to help you map your career path.
            </p>
            
            <div className="grid gap-8">
              <div className="flex gap-5 items-center group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary border border-white/10 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black mb-1">Speak with a Consultant</p>
                  <a href="tel:+916361866299" className="text-sm lg:text-xl md:text-xl  font-bold hover:text-secondary transition-colors tracking-tight">+91 6361866299</a>
                </div>
              </div>
              <div className="flex gap-5 items-center group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-secondary border border-white/10 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black mb-1">Corporate Inquiries</p>
                  <a href="mailto:info@neeltechnologies.net" className="text-sm lg:text-xl md:text-xl  font-bold hover:text-secondary transition-colors tracking-tight">info@neeltechnologies.net</a>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10">
              <div className="flex items-center gap-4 text-white/20">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">ISO 9001:2015 Certified Training Center</span>
                <div className="h-px flex-1 bg-white/5"></div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/5 p-12 bg-white dark:bg-zinc-800 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-cream dark:border-white/5">
            <div className="space-y-8 w-full">
              <div className="relative">
                <div className="w-24 h-24 bg-success/10 text-success rounded-3xl flex items-center justify-center mx-auto animate-pulse transform rotate-3">
                  <MessageCircle size={48} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full border-4 border-white dark:border-zinc-800"></div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-deep dark:text-white mb-3">Instant Chat</h3>
                <p className="text-deep/60 dark:text-white/40 text-sm font-medium">Get immediate answers to your queries via WhatsApp.</p>
              </div>

              <Button 
                variant="primary" 
                className="w-full py-6 bg-success hover:bg-[#0da06f] border-none shadow-xl hover:shadow-success/20 flex flex-col items-center justify-center gap-2 group h-auto"
                onClick={() => window.open('https://wa.me/916361866299', '_blank')}
              >
                <div className="flex items-center gap-2">
                   <span className="text-lg font-black uppercase tracking-tight">{t('whatsapp_chat')}</span>
                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-[10px] opacity-80 uppercase tracking-[0.15em] font-bold">Typically responds in minutes</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
