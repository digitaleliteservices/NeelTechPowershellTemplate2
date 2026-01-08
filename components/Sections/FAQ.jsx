
// import React, { useState } from 'react';
// import { ChevronDown, Search } from 'lucide-react';
// import { useTranslation } from '../UI/LanguageToggle';

// const faqs = [
//   { q: "1. What are the different training modes available?", a: "We offer two training modes:
//     Instructor-Led Live Training (Online) : 
//     Interactive sessions where you perform live practicals with the trainer and ask questions in real-time.
//     Self-Paced Learning: 
//     Access to recorded lectures and trainer notes through our Learning Management System (LMS). You can upgrade to instructor-led training anytime by paying the fee difference." },
//   { q: "2. Can I switch from self-paced to instructor-led training ?", a: "Yes, you can upgrade to instructor-led training by paying the difference in fees." },
//   { q: "3. Who should opt for self-paced training ?", a: "If our batch timings don’t suit you or you prefer to learn at your own pace, the LMS provides flexible learning through recorded sessions and notes." },
//   { q: "4. What support is available after the course ends ?", a: "Instructor-led learners get continued support via WhatsApp. You can directly contact the trainer for any queries." },
//   { q: "5. Will I receive a course completion certificate?", a: "Yes, upon completing the course, you’ll receive a certificate from Neel Technologies ." },
//   { q: "6. How will practical sessions be conducted ?", a: "Practical sessions are live and interactive. We’ll also guide you in setting up a free-tier POWERSHELL account for hands-on practice." },
//   { q: "7. What if I miss a live session ?", a: "You’ll get access to the LMS for recorded sessions and notes. You can also attend the missed topic in another live batch." },
//   { q: "8. Is the certification exam difficult ?", a: "Our training is designed to prepare you thoroughly, including practice tests to help you understand exam patterns." },
//   { q: "9. Do you offer placement assistance ?", a: "Yes. We help connect students with recruiters, assist in resume building, and provide interview preparation support." },
//   { q: "10. What projects are included in the training ?", a: "You’ll work on real-world projects that enhance your skills and make you industry-ready." },
// ];

// export const FAQ = () => {
//   const { t } = useTranslation();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [openIndex, setOpenIndex] = useState(0);

//   const filteredFaqs = faqs.filter(f => f.q.toLowerCase().includes(searchTerm.toLowerCase()));

//   return (
//     <section id="faq" className="py-24 bg-cream dark:bg-zinc-950">
//       <div className="container mx-auto px-6 max-w-4xl">
//         <div className="text-center mb-16 space-y-6">
//           <h2 className="text-h2 text-deep dark:text-white tracking-tight">{t('faq_title')}</h2>
//           <div className="mt-8 relative max-w-md mx-auto group">
//             <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-deep/30 dark:text-white/20 group-focus-within:text-primary transition-colors" />
//             <input 
//               type="text" 
//               placeholder={t('faq_search')} 
//               className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-transparent bg-white dark:bg-zinc-900 shadow-premium focus:border-primary outline-none transition-all dark:text-white"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="space-y-4">
//           {filteredFaqs.length > 0 ? filteredFaqs.map((faq, idx) => (
//             <div key={idx} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-premium border border-transparent hover:border-primary/10 transition-all overflow-hidden">
//               <button 
//                 onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//                 className="w-full flex items-center justify-between p-7 text-left group"
//               >
//                 <span className="font-heading font-extrabold text-deep dark:text-white text-lg group-hover:text-primary transition-colors">{faq.q}</span>
//                 <ChevronDown className={`text-primary transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`} />
//               </button>
//               <div className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
//                 <div className="px-7 pb-8 text-deep/70 dark:text-white/40 text-body leading-relaxed border-t border-cream dark:border-white/5 pt-6">
//                   {faq.a}
//                 </div>
//               </div>
//             </div>
//           )) : (
//             <div className="text-center py-20 text-deep/40 dark:text-white/20 italic">No matching questions found.</div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };
import React, { useState, useMemo } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useTranslation } from '../UI/LanguageToggle';

const faqs = [
  { 
    q: "1. What are the different training modes available?", 
    a: "We offer two training modes:\n\n• Instructor-Led Live Training (Online): Interactive sessions where you perform live practicals with the trainer and ask questions in real-time.\n\n• Self-Paced Learning: Access to recorded lectures and trainer notes through our Learning Management System (LMS). You can upgrade to instructor-led training anytime by paying the fee difference." 
  },
  { 
    q: "2. Can I switch from self-paced to instructor-led training?", 
    a: "Yes, you can upgrade to instructor-led training by paying the difference in fees." 
  },
  { 
    q: "3. Who should opt for self-paced training?", 
    a: "If our batch timings don't suit you or you prefer to learn at your own pace, the LMS provides flexible learning through recorded sessions and notes." 
  },
  { 
    q: "4. What support is available after the course ends?", 
    a: "Instructor-led learners get continued support via WhatsApp. You can directly contact the trainer for any queries." 
  },
  { 
    q: "5. Will I receive a course completion certificate?", 
    a: "Yes, upon completing the course, you'll receive a certificate from Neel Technologies." 
  },
  { 
    q: "6. How will practical sessions be conducted?", 
    a: "Practical sessions are live and interactive. We'll also guide you in setting up a free-tier POWERSHELL account for hands-on practice." 
  },
  { 
    q: "7. What if I miss a live session?", 
    a: "You'll get access to the LMS for recorded sessions and notes. You can also attend the missed topic in another live batch." 
  },
  { 
    q: "8. Is the certification exam difficult?", 
    a: "Our training is designed to prepare you thoroughly, including practice tests to help you understand exam patterns." 
  },
  { 
    q: "9. Do you offer placement assistance?", 
    a: "Yes. We help connect students with recruiters, assist in resume building, and provide interview preparation support." 
  },
  { 
    q: "10. What projects are included in the training?", 
    a: "You'll work on real-world projects that enhance your skills and make you industry-ready." 
  },
];

export const FAQ = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqs;
    return faqs.filter(f => 
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
      f.a.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleToggle = (idx) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  const formatAnswer = (answer) => {
    return answer.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < answer.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section id="faq" className="py-24 bg-cream dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-h2 text-deep dark:text-white tracking-tight">{t('faq_title')}</h2>
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-deep/30 dark:text-white/20 transition-colors pointer-events-none" />
            <input 
              type="text" 
              placeholder={t('faq_search')} 
              className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-transparent bg-white dark:bg-zinc-900 shadow-premium focus:border-primary outline-none transition-all dark:text-white focus:ring-2 focus:ring-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search FAQ questions"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-zinc-900 rounded-2xl shadow-premium border border-transparent hover:border-primary/10 transition-all overflow-hidden"
                >
                  <button 
                    onClick={() => handleToggle(idx)}
                    className="w-full flex items-center justify-between p-7 text-left group focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="font-heading font-extrabold text-deep dark:text-white text-lg group-hover:text-primary transition-colors pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`text-primary transition-transform duration-500 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                      size={24}
                    />
                  </button>
                  <div 
                    id={`faq-answer-${idx}`}
                    className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                    aria-hidden={!isOpen}
                  >
                    <div className="px-7 pb-8 text-deep/70 dark:text-white/40 text-body leading-relaxed border-t border-cream dark:border-white/5 pt-6 whitespace-pre-line">
                      {formatAnswer(faq.a)}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-20 text-deep/40 dark:text-white/20 italic">
              No matching questions found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};