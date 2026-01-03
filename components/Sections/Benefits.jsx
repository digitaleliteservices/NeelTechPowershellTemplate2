import React, { useState, useEffect } from 'react';

const Benefits = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [isFlipped, setIsFlipped] = useState({});
  const [query, setQuery] = useState('');
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [selectedBenefitForQuery, setSelectedBenefitForQuery] = useState(null);

  // Professional SVG Icons matching IT Consulting theme
  const BenefitIcons = {
    "24*7 Learning": (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="timeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#timeGradient)" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="5,5" />
        <g stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round">
          <line x1="50" y1="30" x2="50" y2="50" className="group-hover:animate-pulse" />
          <line x1="50" y1="50" x2="65" y2="50" className="group-hover:animate-pulse" />
        </g>
        <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
      </svg>
    ),
    "Live Recorded Lectures": (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="videoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
        <rect x="15" y="20" width="70" height="60" rx="8" fill="url(#videoGradient)" />
        <path d="M40,40 L40,60 L60,50 Z" fill="#FFFFFF" />
        <circle cx="80" cy="30" r="5" fill="#10B981" className="animate-pulse">
          <animate attributeName="r" values="5;7;5" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    "Premium Content": (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <path d="M50,15 L55,40 L80,40 L60,55 L65,80 L50,65 L35,80 L40,55 L20,40 L45,40 Z" 
              fill="url(#premiumGradient)" />
        <path d="M50,30 L53,42 L62,42 L57,48 L59,57 L50,52 L41,57 L43,48 L38,42 L47,42 Z" 
              fill="#FFFFFF" opacity="0.9" />
      </svg>
    ),
    "Learn At Your Own Pace": (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="paceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <path d="M30,30 Q50,20 70,30 Q85,40 85,60 Q85,80 70,85 Q50,90 30,85 Q15,80 15,60 Q15,40 30,30 Z" 
              fill="url(#paceGradient)" />
        <g fill="#FFFFFF" fontSize="28" fontWeight="bold">
          <text x="35" y="55">→</text>
          <text x="50" y="55">→</text>
          <text x="65" y="55">→</text>
        </g>
      </svg>
    ),
    "Access From Anywhere, Any Device": (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="25" height="40" rx="3" fill="url(#deviceGradient)" />
        <rect x="55" y="20" width="25" height="40" rx="3" fill="url(#deviceGradient)" />
        <rect x="37.5" y="65" width="25" height="15" rx="3" fill="url(#deviceGradient)" />
        <path d="M20,50 Q50,20 80,50" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" values="0;20" dur="1s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
    "Course Completion Certificate": (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="certGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>
        <rect x="20" y="25" width="60" height="45" rx="5" fill="url(#certGradient)" />
        <path d="M30,35 L70,35 L70,50 L30,50 Z" fill="#FFFFFF" opacity="0.9" />
        <path d="M35,40 L65,40" stroke="#EF4444" strokeWidth="2" />
        <path d="M35,45 L65,45" stroke="#EF4444" strokeWidth="2" />
        <circle cx="50" cy="65" r="6" fill="#10B981" stroke="#FFFFFF" strokeWidth="2">
          <animate attributeName="r" values="6;8;6" dur="1s" repeatCount="indefinite" />
        </circle>
        <text x="50" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">✓</text>
      </svg>
    ),
    "Free Practice Exam": (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="examGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="60" height="60" rx="10" fill="url(#examGradient)" />
        <g stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round">
          <line x1="30" y1="35" x2="70" y2="35" />
          <line x1="30" y1="45" x2="70" y2="45" />
          <line x1="30" y1="55" x2="70" y2="55" />
          <line x1="30" y1="65" x2="70" y2="65" />
        </g>
        <circle cx="75" cy="75" r="5" fill="#10B981" className="animate-ping">
          <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    "Mock Interviews": (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="interviewGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#interviewGradient)" />
        <g fill="#FFFFFF">
          <circle cx="35" cy="45" r="8" />
          <circle cx="65" cy="45" r="8" />
        </g>
        <path d="M30,70 Q50,80 70,70" stroke="#FFFFFF" strokeWidth="3" fill="none" />
        <path d="M40,60 Q50,65 60,60" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <path d="M50,30 L50,40" stroke="#FFFFFF" strokeWidth="2">
          <animate attributeName="y2" values="40;45;40" dur="1s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
    "Revise & Learn Multiple Times": (
      <svg className="w-12 h-12" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="reviseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#reviseGradient)" />
        <path d="M50,20 L55,40 L75,40 L60,50 L65,70 L50,60 L35,70 L40,50 L25,40 L45,40 Z" 
              fill="#FFFFFF" 
              opacity="0.9" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,5">
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    )
  };

  const benefits = [
    {
      id: 1,
      title: "24*7 Learning",
      description: "Round-the-clock access to learning resources, live support, and community forums.",
      color: "bg-gradient-to-br from-blue-600 to-blue-700",
      category: "Accessibility",
      details: "Perfect for working professionals and global learners. Access course materials, submit assignments, and get support anytime.",
      stats: "98% Accessibility",
      question: "What's your preferred learning time?"
    },
    {
      id: 2,
      title: "Live Recorded Lectures",
      description: "Never miss important sessions with HD recordings and timestamped chapters.",
      color: "bg-gradient-to-br from-purple-600 to-purple-700",
      category: "Learning Tools",
      details: "Watch at 1.5x speed, download for offline viewing, and bookmark important sections for quick revision.",
      stats: "10K+ Hours Content",
      question: "Need help with missed lectures?"
    },
    {
      id: 3,
      title: "Premium Content",
      description: "Industry-expert curated content with real-world case studies and projects.",
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
      category: "Quality",
      details: "Updated quarterly with latest industry trends. Includes hands-on projects and expert interviews.",
      stats: "Quarterly Updates",
      question: "Which industry interests you?"
    },
    {
      id: 4,
      title: "Learn At Your Own Pace",
      description: "Flexible schedules with personalized learning paths and milestone tracking.",
      color: "bg-gradient-to-br from-emerald-600 to-emerald-700",
      category: "Flexibility",
      details: "Self-paced modules with progress analytics. Set your own deadlines and learn at comfortable speed.",
      stats: "37% Faster Completion",
      question: "What's your learning pace?"
    },
    {
      id: 5,
      title: "Access From Anywhere, Any Device",
      description: "Seamless learning experience across desktop, tablet, and mobile devices.",
      color: "bg-gradient-to-br from-indigo-600 to-indigo-700",
      category: "Accessibility",
      details: "Progressive web app with offline capabilities. Sync progress across all your devices automatically.",
      stats: "5+ Platforms",
      question: "What's your primary device?"
    },
    {
      id: 6,
      title: "Course Completion Certificate",
      description: "Industry-recognized certificates with verification URLs and LinkedIn integration.",
      color: "bg-gradient-to-br from-red-600 to-red-700",
      category: "Recognition",
      details: "Digital badges, shareable certificates, and portfolio-ready projects to showcase your skills.",
      stats: "95% Hiring Rate",
      question: "Which certification interests you?"
    },
    {
      id: 7,
      title: "Free Practice Exam",
      description: "Comprehensive test series with detailed analytics and performance tracking.",
      color: "bg-gradient-to-br from-violet-600 to-violet-700",
      category: "Assessment",
      details: "Mock tests with real exam patterns, detailed explanations, and weakness analysis reports.",
      stats: "2000+ Questions",
      question: "Preparing for certification?"
    },
    {
      id: 8,
      title: "Mock Interviews",
      description: "Practice with industry veterans and receive personalized feedback.",
      color: "bg-gradient-to-br from-teal-600 to-teal-700",
      category: "Career Support",
      details: "Simulated interviews with technical experts, behavioral assessment, and improvement roadmap.",
      stats: "87% Success Rate",
      question: "Interview preparation help?"
    },
    {
      id: 9,
      title: "Revise & Learn Multiple Times",
      description: "Lifetime access to course materials with regular content updates.",
      color: "bg-gradient-to-br from-orange-600 to-orange-700",
      category: "Learning Tools",
      details: "Unlimited revisions, updated content access, and revision tracking system for continuous learning.",
      stats: "Lifetime Access",
      question: "How often do you revise?"
    }
  ];

  const categories = ["All", "Accessibility", "Learning Tools", "Quality", "Flexibility", "Recognition", "Assessment", "Career Support"];

  const filteredBenefits = selectedCategory === "All" 
    ? benefits 
    : benefits.filter(benefit => benefit.category === selectedCategory);

  const handleCardFlip = (id) => {
    setIsFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleQueryClick = (benefit) => {
    setSelectedBenefitForQuery(benefit);
    setShowQueryForm(true);
    setQuery(`I'm interested in ${benefit.title}. ${benefit.question}`);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `IT-Consulting Query:\n\n` +
      `Benefit: ${selectedBenefitForQuery.title}\n` +
      `Question: ${query}\n\n` +
      `Please contact me to discuss further about your training programs.`
    );
    window.open(`https://wa.me/916361866299?text=${whatsappMessage}`, '_blank');
    setShowQueryForm(false);
    setQuery('');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IT</span>
            </div> */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              IT-Consulting & Training
            </h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Premier <span className="text-blue-600 dark:text-blue-400">Learning Benefits</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional-grade learning solutions designed for IT consultants and corporate trainers
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 border border-gray-200 dark:border-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Benefits Grid - Professional Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredBenefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="group relative"
              onMouseEnter={() => setHoveredBenefit(benefit.id)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              <div 
                className="relative bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[380px]"
                onClick={() => handleCardFlip(benefit.id)}
              >
                <div className={`transition-all duration-500 ${isFlipped[benefit.id] ? 'opacity-0 absolute' : 'opacity-100'} p-6 h-full flex flex-col`}>
                  {/* Benefit Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg ${benefit.color} flex items-center justify-center`}>
                      {BenefitIcons[benefit.title]}
                    </div>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {benefit.category}
                    </span>
                  </div>
                  
                  {/* Benefit Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                    {benefit.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {benefit.stats}
                      </span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-500 dark:text-gray-400 text-xs">Active</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-gray-100 dark:border-zinc-700">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQueryClick(benefit);
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium text-sm transition-colors"
                    >
                      Ask Expert
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://wa.me/916361866299', '_blank');
                      }}
                      className="px-4 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-center"
                      title="Quick Chat"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.889 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Detailed View (Visible on Flip) */}
                <div className={`p-6 h-full flex flex-col ${isFlipped[benefit.id] ? 'opacity-100' : 'opacity-0 absolute'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{benefit.title}</h4>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardFlip(benefit.id);
                      }}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow">
                    {benefit.details}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Industry Standard</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Personalized Path</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">24/7 Expert Support</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t border-gray-100 dark:border-zinc-700">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQueryClick(benefit);
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium text-sm transition-colors"
                    >
                      Get Details
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://wa.me/916361866299', '_blank');
                      }}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-gray-700 dark:text-gray-300 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.889 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Query Form Modal */}
        {showQueryForm && selectedBenefitForQuery && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-2xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Query About <span className="text-blue-600">{selectedBenefitForQuery.title}</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {selectedBenefitForQuery.question}
                  </p>
                </div>
                <button 
                  onClick={() => setShowQueryForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleQuerySubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Specific Question
                  </label>
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type your question here..."
                    className="w-full h-32 p-3 bg-gray-50 dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 dark:text-white"
                    required
                    autoFocus
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    Submit Query
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const message = encodeURIComponent(
                        `Hi IT-Consulting Team,\n\nI'm interested in ${selectedBenefitForQuery.title}.\n${selectedBenefitForQuery.question}\n\n${query || "Please contact me for more details."}`
                      );
                      window.open(`https://wa.me/916361866299?text=${message}`, '_blank');
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.889 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Professional CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Ready to Transform Your Learning?</h3>
          </div>
          
          <p className="text-lg mb-6 opacity-90">
            Experience professional-grade IT training with all these benefits included
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowQueryForm(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => window.open('https://wa.me/916361866299', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.889 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
              </svg>
              Chat with IT Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Benefits };
export default Benefits;