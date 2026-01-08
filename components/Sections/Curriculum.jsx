
import React from 'react';
import { SYLLABUS_MODULES } from '../../constants';
import { CheckCircle2 } from 'lucide-react';
import { Accordion } from '../UI/Accordion';

export const Curriculum = () => {
  const accordionItems = SYLLABUS_MODULES.map((module) => ({
    id: module.id,
    title: `${module.id}. ${module.title}`,
    content: (
      <div className="space-y-4">
        <p className="text-deep/80 font-medium italic mb-4">{module.description}</p>
        <div className="h-px bg-cream mb-6"></div>
        <ul className="grid md:grid-cols-2 gap-4">
          {module.lessons.map((lesson, idx) => (
            <li key={idx} className="flex items-center gap-4 text-deep/70">
              <CheckCircle2 size={18} className="text-secondary shrink-0" />
              <span className="text-body-sm font-semibold">{lesson}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }));

  return (
    <section id="curriculum" className="py-24 bg-cream">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-h2 text-deep">Comprehensive Curriculum</h2>
            <p className="text-body-lg text-deep/60">A multi-layered 9-module roadmap from automation fundamentals to cloud architecture scale.</p>
          </div>

          <Accordion items={accordionItems} defaultOpenId={1} />

          <div className="mt-16 text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-20 bg-deep/10"></div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.4em] text-deep/40">Includes Real-World Projects</span>
              <div className="h-px w-20 bg-deep/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
