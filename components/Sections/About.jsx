import React from 'react';
import { Target, Award, ArrowRight } from 'lucide-react';
import { ROICalculator } from './ROI_Calculator';
import { useTranslation } from '../UI/LanguageToggle';
import { Button } from '../UI/Button';

/**
 * About section for Neel Technologies.
 * Highlights the company's history, mission, and global quality standards.
 */
export const About = () => {
  const { t } = useTranslation();

  /**
   * Smooth scroll handler for internal links.
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
    }
  };

  return (
    <section id="about" className="py-24 bg-cream dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-2">
              Established 2020
            </div>
            <h2 className="text-h2 text-deep dark:text-white leading-tight">{t('about_title')}</h2>
            <p className="text-body-lg text-deep/70 dark:text-white/60 leading-relaxed">
              {t('about_sub')}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white dark:bg-white/5 rounded-xl shadow-sm flex items-center justify-center text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-deep dark:text-white">{t('about_mission')}</h4>
                  <p className="text-body-sm text-deep/60 dark:text-white/40">{t('about_mission_desc')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white dark:bg-white/5 rounded-xl shadow-sm flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-deep dark:text-white">{t('about_quality')}</h4>
                  <p className="text-body-sm text-deep/60 dark:text-white/40">{t('about_quality_desc')}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#trainers" onClick={(e) => handleScrollTo(e, 'why-choose-us')}>
                <Button variant="secondary" className="px-6 h-12 text-sm">Meet Our Team</Button>
              </a>
              <a href="#testimonials" onClick={(e) => handleScrollTo(e, 'testimonials')}>
                <Button variant="outline" className="px-6 h-12 text-sm flex items-center gap-2">
                  Success Stories <ArrowRight size={16} />
                </Button>
              </a>
            </div>

            <div className="pt-8 border-t border-deep/10 dark:border-white/10 flex items-center gap-6">
              <div id="about-team-avatars" className="flex -space-x-3">
                {[1980, 4252, 35, 404].map((i) => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-cream dark:border-zinc-900 shadow-sm" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Trainer${i}`} alt="Trainer" />
                ))}
              </div>
              <p className="text-body-sm text-deep/60 dark:text-white/40"><span className="font-bold text-deep dark:text-white">50+ Expert Trainers</span> ready to guide you.</p>
               
            </div>
            <div class="text-center">
            <h1 class="mb-4 mt-8 text-base font-bold">Want More Information? Let's Go Through This Site</h1>
            <a href="https://www.neeltechnologies.com/" 
              class="text-blue-600 hover:text-blue-800 font-mediam text-base border-0 border-blue-600 hover:border-blue-800 px-2 py-2 rounded-lg inline-block transition duration-300"
              target="_blank" 
              rel="noopener noreferrer">
                www.neeltechnologies.com
            </a>
        </div>
          </div>

          <div className="order-1 lg:order-2">
            <ROICalculator />
          </div>
        </div>
      </div>
    </section>
  );
};