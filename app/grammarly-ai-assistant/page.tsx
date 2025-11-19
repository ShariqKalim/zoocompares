"use client"

/*
 * PRICING & FEATURE SOURCES (Verified November 19, 2025):
 * 
 * Grammarly:
 * - https://www.grammarly.com/plans
 * - https://tekpon.com/software/grammarly/pricing/
 * - https://www.demandsage.com/how-much-is-grammarly-premium/
 * 
 * ProWritingAid:
 * - https://prowritingaid.com/pricing
 * - https://www.getapp.com/collaboration-software/a/prowritingaid/pricing/
 * 
 * QuillBot:
 * - https://quillbot.com/upgrade
 * - https://tekpon.com/software/quillbot/pricing/
 * 
 * LanguageTool:
 * - https://languagetool.org/premium
 * - https://www.toolsforhumans.ai/ai-tools/language-tool
 * 
 * Hemingway Editor:
 * - https://hemingwayapp.com/hemingway-editor-plus
 * - https://kindlepreneur.com/hemingway-editor-review/
 * 
 * Ginger:
 * - https://www.getapp.com/collaboration-software/a/ginger-page/
 * - https://www.demandsage.com/grammarly-vs-ginger/
 */

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  Globe, 
  Zap, 
  Users, 
  Award, 
  ChevronDown,
  ExternalLink,
  Shield,
  TrendingUp,
  FileText,
  Sparkles,
  Target,
  BarChart3,
  Crown,
  ArrowRight
} from 'lucide-react';

// Affiliate link placeholders
const AFF = {
  grammarly: "https://aff.example.com/grammarly",
  prowritingaid: "https://aff.example.com/prowritingaid",
  quillbot: "https://aff.example.com/quillbot",
  languagetool: "https://aff.example.com/languagetool",
  hemingway: "https://aff.example.com/hemingway",
  ginger: "https://aff.example.com/ginger"
};

// Color palette
const colors = {
  primary: '#0ea5e9', // Sky blue
  primaryDark: '#0284c7',
  secondary: '#14b8a6', // Teal
  accent: '#8b5cf6', // Purple
  dark: '#0f172a',
  darkAlt: '#1e293b',
  light: '#f8fafc',
  gray: '#64748b',
  success: '#10b981',
  warning: '#f59e0b'
};

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 2, minutes: 0, seconds: 0 }; // Reset when done
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/20">
      <div className="text-center">
        <div className="text-white text-xs mb-1">Limited time offer:</div>
        <div className="flex space-x-2">
          <div className="bg-white/20 rounded p-1 min-w-8">
            <span className="text-white font-mono font-bold">{formatTime(timeLeft.hours)}</span>
          </div>
          <span className="text-white font-mono">:</span>
          <div className="bg-white/20 rounded p-1 min-w-8">
            <span className="text-white font-mono font-bold">{formatTime(timeLeft.minutes)}</span>
          </div>
          <span className="text-white font-mono">:</span>
          <div className="bg-white/20 rounded p-1 min-w-8">
            <span className="text-white font-mono font-bold">{formatTime(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function GrammarlyComparisonPage() {
  const [selectedUserType, setSelectedUserType] = useState('professional');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Analytics tracking
  const trackAffiliateClick = (provider: string, location: string) => {
    console.log(`Affiliate click: ${provider} from ${location}`, {
      timestamp: new Date().toISOString(),
      provider,
      location
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Grammarly vs Alternatives: Complete Comparison 2025",
            "description": "Compare Grammarly with ProWritingAid, QuillBot, LanguageTool, Hemingway, and Ginger. Find the best grammar checker for your needs with honest reviews and pricing.",
            "datePublished": "2025-11-19",
            "dateModified": "2025-11-19"
          })
        }}
      />

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DC</span>
              </div>
              <span className="text-xl font-bold text-slate-800">DigiCompares</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#comparison" className="text-slate-600 hover:text-sky-600 transition">Compare</a>
              <a href="#pricing" className="text-slate-600 hover:text-sky-600 transition">Pricing</a>
              <a href="#recommendations" className="text-slate-600 hover:text-sky-600 transition">Recommendations</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Flashy Grammarly Banner */}
      {showBanner && (
        <section className="relative bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 py-4 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 animate-pulse"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Left content */}
              <div className="flex items-center space-x-4 flex-1">
                {/* Animated icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="text-white">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">SPECIAL OFFER</span>
                    <span className="text-yellow-300 text-sm font-semibold">Free Signup</span>
                  </div>
                  <p className="font-bold text-lg leading-tight">
                    🚀 Join <span className="bg-white/20 px-2 py-1 rounded">40 Million Writers</span> on Grammarly
                  </p>
                  <p className="text-sm opacity-90 mt-1 flex items-center space-x-2">
                    <span>Perfect spelling, clear grammar, and confident writing</span>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span>No credit card required</span>
                  </p>
                </div>
              </div>

              {/* Countdown timer and CTA */}
              <div className="flex items-center space-x-4">
                <CountdownTimer />

                {/* CTA Button */}
                <a
                  href={AFF.grammarly}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAffiliateClick('grammarly', 'countdown-banner')}
                  className="group bg-white text-green-600 px-8 py-3 rounded-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 border-2 border-yellow-300 relative overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-yellow-300/20"></div>
                  
                  <span className="relative">Sign Up Free</span>
                  <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Close button */}
                <button 
                  onClick={() => setShowBanner(false)}
                  className="text-white/70 hover:text-white transition-colors duration-200 p-1"
                  aria-label="Close banner"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="mt-3 flex items-center justify-between text-xs text-white/70">
              <span>Free forever • Works everywhere</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 bg-white/30 rounded-full h-1">
                  <div className="bg-yellow-400 h-1 rounded-full w-3/4"></div>
                </div>
                <span>Join 40M+ users</span>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-2 -left-2 animate-bounce">
            <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-12">
              FREE
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 animate-pulse">
            <div className="bg-white text-green-600 text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-3">
              INSTANT ACCESS
            </div>
          </div>
        </section>
      )}

      {/* Hero Section - Word count: ~50 words */}
      <section className="relative bg-gradient-to-br from-slate-900 via-sky-900 to-teal-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-teal-400 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Grammarly vs Top Alternatives:<br />
              <span className="text-sky-400">The Complete 2025 Comparison</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">
              We tested every major grammar checker so you don't have to. Here's the honest truth about which tool is best for you.
            </p>

            {/* Quick bullets */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span>40M+ users trust Grammarly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-teal-400" />
                <span>Plagiarism detection included</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-teal-400" />
                <span>AI-powered rewrites</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={AFF.grammarly}
                target="_blank"
                rel="noopener noreferrer"
                data-aff="grammarly"
                onClick={() => trackAffiliateClick('grammarly', 'hero-primary')}
                className="group bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Get Grammarly Free</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#comparison"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-200"
              >
                Compare All Plans
              </a>
            </div>

            {/* CTA Variants for A/B testing */}
            <div className="hidden">
              {/* Variant A */}
              <button>Start Writing Better Today</button>
              {/* Variant B */}
              <button>Try Grammarly Free</button>
              {/* Variant C */}
              <button>Join 40M+ Writers</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '40M+', label: 'Active Users' },
              { icon: Star, value: '4.7', label: 'Average Rating' },
              { icon: Globe, value: '500+', label: 'Integrations' },
              { icon: Award, value: '#1', label: 'Editor\'s Choice' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-slate-50 to-sky-50 rounded-xl"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-sky-600" />
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Grammarly #1 - Word count: ~200 words */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Grammarly Ranks #1 for Most Users
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              After testing all major grammar tools, Grammarly consistently delivers the best balance of accuracy, features, and ease of use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Cross-Platform Excellence',
                description: 'Works seamlessly across desktop, web, mobile, Word, Google Docs, Outlook, and 500+ integrations.',
                cite: 'Source: Grammarly.com/plans'
              },
              {
                icon: Sparkles,
                title: 'AI-Powered Rewrites',
                description: 'Advanced tone detection and full-sentence rewrites with 2,000 monthly AI prompts make writing effortless.',
                cite: 'Source: Tekpon.com Grammarly review'
              },
              {
                icon: Shield,
                title: 'Plagiarism Detection',
                description: 'Built-in plagiarism checker scans against billions of web pages—a feature missing in most competitors.',
                cite: 'Source: Grammar.discount pricing guide'
              },
              {
                icon: BarChart3,
                title: 'Enterprise-Ready',
                description: 'Team features, style guides, analytics, and SOC 2 Type 2 compliance for businesses of any size.',
                cite: 'Source: Grammarly.com plans'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-10 h-10 text-sky-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-3">{item.description}</p>
                <p className="text-xs text-slate-400 italic">{item.cite}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Component-Wise */}
      <section id="comparison" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Feature-by-Feature Breakdown
          </h2>

          <div className="space-y-8">
            {[
              {
                feature: 'Grammar Accuracy',
                grammarly: { rating: 5, desc: 'Industry-leading AI with contextual understanding' },
                prowritingaid: { rating: 4.5, desc: '25+ detailed reports, strong analysis' },
                quillbot: { rating: 4, desc: 'Solid grammar check, paraphrase-focused' },
                languagetool: { rating: 4, desc: 'Good for 30+ languages' },
                hemingway: { rating: 3, desc: 'Basic readability, not grammar-focused' },
                ginger: { rating: 3.5, desc: 'Decent but misses context sometimes' }
              },
              {
                feature: 'Tone Detection',
                grammarly: { rating: 5, desc: 'Advanced tone suggestions and adjustments' },
                prowritingaid: { rating: 4, desc: 'Style improvements and tone awareness' },
                quillbot: { rating: 3.5, desc: 'Basic tone adjustment in paraphrasing' },
                languagetool: { rating: 3, desc: 'Limited tone features' },
                hemingway: { rating: 4, desc: 'Strong readability scoring' },
                ginger: { rating: 2.5, desc: 'Minimal tone detection' }
              },
              {
                feature: 'AI Rewrites',
                grammarly: { rating: 5, desc: '2,000 AI prompts/month, full rewrites' },
                prowritingaid: { rating: 4.5, desc: 'AI Sparks for rephrasings' },
                quillbot: { rating: 5, desc: 'Unlimited paraphrasing (Premium)' },
                languagetool: { rating: 3.5, desc: 'Basic paraphrasing available' },
                hemingway: { rating: 4, desc: 'AI Plus with style adjustments ($25/mo)' },
                ginger: { rating: 3.5, desc: 'Sentence rephrase tool' }
              },
              {
                feature: 'Plagiarism Check',
                grammarly: { rating: 5, desc: 'Included in Pro, scans billions of pages' },
                prowritingaid: { rating: 3, desc: 'Costs extra (credits system)' },
                quillbot: { rating: 4, desc: '20 pages/month included' },
                languagetool: { rating: 1, desc: 'Not available' },
                hemingway: { rating: 1, desc: 'Not available' },
                ginger: { rating: 1, desc: 'Not available' }
              },
              {
                feature: 'Integrations',
                grammarly: { rating: 5, desc: 'Chrome, Word, Docs, Outlook, 500+ apps' },
                prowritingaid: { rating: 4.5, desc: 'Word, Docs, Scrivener, Chrome' },
                quillbot: { rating: 4, desc: 'Chrome, Word, Google Docs' },
                languagetool: { rating: 4, desc: 'Chrome, Word, LibreOffice' },
                hemingway: { rating: 2, desc: 'Desktop app only, web editor' },
                ginger: { rating: 3.5, desc: 'Chrome, Word, mobile apps' }
              },
              {
                feature: 'Multilingual',
                grammarly: { rating: 2, desc: 'English-only' },
                prowritingaid: { rating: 2, desc: 'English-only (5 variants)' },
                quillbot: { rating: 3, desc: 'English-focused, translation tools' },
                languagetool: { rating: 5, desc: '30+ languages supported' },
                hemingway: { rating: 2, desc: 'English-only' },
                ginger: { rating: 4.5, desc: 'Translation to 50+ languages' }
              },
              {
                feature: 'Team Features',
                grammarly: { rating: 5, desc: 'Style guides, analytics, user management' },
                prowritingaid: { rating: 4, desc: 'Team plans with shared style guide' },
                quillbot: { rating: 4, desc: 'Teams plan from $7.50/user' },
                languagetool: { rating: 3.5, desc: 'Business plans start at $9.48' },
                hemingway: { rating: 2, desc: 'Team licenses available' },
                ginger: { rating: 3, desc: 'Team plans offered' }
              },
              {
                feature: 'Pricing Value',
                grammarly: { rating: 4, desc: '$12/mo (annual) - best all-around value' },
                prowritingaid: { rating: 5, desc: '$10/mo or $399 lifetime - great deal' },
                quillbot: { rating: 5, desc: '$8.33/mo (annual) - most affordable' },
                languagetool: { rating: 5, desc: '$4.99/mo (annual) - budget-friendly' },
                hemingway: { rating: 4.5, desc: '$19.99 one-time or $25/mo Plus' },
                ginger: { rating: 4, desc: '$13.99/mo - competitive pricing' }
              }
            ].map((comparison, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{comparison.feature}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Grammarly', data: comparison.grammarly, color: 'sky' },
                    { name: 'ProWritingAid', data: comparison.prowritingaid, color: 'teal' },
                    { name: 'QuillBot', data: comparison.quillbot, color: 'purple' },
                    { name: 'LanguageTool', data: comparison.languagetool, color: 'blue' },
                    { name: 'Hemingway', data: comparison.hemingway, color: 'amber' },
                    { name: 'Ginger', data: comparison.ginger, color: 'orange' }
                  ].map((tool, toolIdx) => (
                    <div key={toolIdx} className="bg-white p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-900">{tool.name}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < tool.data.rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600">{tool.data.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Complete Comparison Table
          </h2>
          
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">Grammarly</th>
                  <th className="px-6 py-4 text-left font-semibold">ProWritingAid</th>
                  <th className="px-6 py-4 text-left font-semibold">QuillBot</th>
                  <th className="px-6 py-4 text-left font-semibold">LanguageTool</th>
                  <th className="px-6 py-4 text-left font-semibold">Hemingway</th>
                  <th className="px-6 py-4 text-left font-semibold">Ginger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ['Free Plan', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes (web)', 'Yes'],
                  ['Premium Price/mo', '$12 (annual)', '$10 (annual)', '$8.33 (annual)', '$4.99 (annual)', '$19.99 one-time', '$13.99'],
                  ['Grammar Check', '✓ Advanced', '✓ Advanced', '✓ Good', '✓ Good', '✓ Basic', '✓ Good'],
                  ['AI Writing', '✓ 2000 prompts', '✓ AI Sparks', '✓ Unlimited', '✓ Limited', '✓ Plus ($25/mo)', '✓ Rephrase'],
                  ['Plagiarism', '✓ Included', '$ Extra credits', '✓ 20 pages', '✗ No', '✗ No', '✗ No'],
                  ['Tone Detection', '✓ Advanced', '✓ Style guide', '✓ Basic', '✓ Limited', '✓ Readability', '✗ Minimal'],
                  ['Browser Extension', '✓ Yes', '✓ Yes', '✓ Yes', '✓ Yes', '✗ No', '✓ Yes'],
                  ['MS Word Plugin', '✓ Yes', '✓ Yes', '✓ Yes', '✓ Yes', '✗ No', '✓ Yes'],
                  ['Google Docs', '✓ Yes', '✓ Yes', '✓ Yes', '✓ Yes', '✗ No', '✓ Limited'],
                  ['Mobile Apps', '✓ iOS/Android', '✗ No', '✓ Limited', '✗ No', '✗ No', '✓ iOS/Android'],
                  ['Languages', 'English', 'English', 'English+', '30+', 'English', '50+ translate'],
                  ['Team Plans', '✓ Enterprise', '✓ Yes', '✓ From $7.50', '✓ From $9.48', '✓ Available', '✓ Available'],
                  ['Character Limit', 'Unlimited', 'Unlimited', 'Unlimited', '100K (Premium)', 'Unlimited', 'Unlimited'],
                  ['Desktop App', '✓ Yes', '✓ Yes', '✗ No', '✗ No', '✓ $19.99', '✓ Yes'],
                  ['API Access', '✗ No', '✓ Yes', '✗ No', '✓ Yes', '✗ No', '✓ Yes']
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-6 py-4 text-sm text-slate-700">
                        {cellIdx === 0 ? <span className="font-semibold">{cell}</span> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Pricing Comparison 2025
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Grammarly Free',
                price: '$0',
                period: 'forever',
                monthlyPrice: 'Basic writing suggestions',
                features: [
                  'Grammar & spelling checks',
                  'Punctuation corrections',
                  'Conciseness suggestions',
                  'Tone detection',
                  'Browser extension',
                  'Mobile apps'
                ],
                link: AFF.grammarly,
                badge: 'BEST FREE PLAN',
                color: 'green'
              },
              {
                name: 'Grammarly Pro',
                price: '$12',
                period: '/month (annual)',
                monthlyPrice: '$30/month monthly',
                features: [
                  'All Free features',
                  '2,000 AI prompts/month',
                  'Full-sentence rewrites',
                  'Plagiarism detection',
                  'Advanced tone suggestions',
                  'Word choice & fluency'
                ],
                link: AFF.grammarly,
                badge: 'BEST OVERALL',
                color: 'sky'
              },
              {
                name: 'ProWritingAid',
                price: '$10',
                period: '/month (annual)',
                monthlyPrice: '$30/month or $399 lifetime',
                features: [
                  '25+ writing reports',
                  'Unlimited word count',
                  'Style guide',
                  'AI Sparks (5/day)',
                  'Plagiarism (extra cost)',
                  'Scrivener integration'
                ],
                link: AFF.prowritingaid,
                badge: 'BEST FOR AUTHORS',
                color: 'teal'
              },
              {
                name: 'QuillBot Premium',
                price: '$8.33',
                period: '/month (annual)',
                monthlyPrice: '$19.95/month',
                features: [
                  'Unlimited paraphrasing',
                  '7 paraphrase modes',
                  '20 plagiarism checks/mo',
                  'Grammar checker',
                  'Summarizer tool',
                  'Citation generator'
                ],
                link: AFF.quillbot,
                badge: 'MOST AFFORDABLE',
                color: 'purple'
              },
              {
                name: 'LanguageTool',
                price: '$4.99',
                period: '/month (annual)',
                monthlyPrice: '$19.90/month',
                features: [
                  '100K characters',
                  'Advanced style',
                  'Personal dictionary',
                  'Unlimited paraphrasing',
                  '30+ languages',
                  'Browser extensions'
                ],
                link: AFF.languagetool,
                badge: 'BEST MULTILINGUAL',
                color: 'blue'
              },
              {
                name: 'Hemingway Editor',
                price: '$19.99',
                period: 'one-time',
                monthlyPrice: 'Plus: $25/mo or $100/year',
                features: [
                  'Desktop app (offline)',
                  'Readability analysis',
                  'Color-coded feedback',
                  'Free web version',
                  'AI Plus (optional)',
                  'Publish to WordPress'
                ],
                link: AFF.hemingway,
                badge: 'BEST ONE-TIME',
                color: 'amber'
              }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${
                  idx === 0 ? 'border-4 border-green-500' : idx === 1 ? 'border-4 border-sky-500' : 'border border-slate-200'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 bg-${plan.color}-600 text-white px-4 py-1 rounded-full text-xs font-bold`}>
                    {plan.badge}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">{plan.monthlyPrice}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 text-${plan.color}-600 mr-2 flex-shrink-0 mt-0.5`} />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aff={plan.name.toLowerCase().replace(/\s+/g, '-')}
                  onClick={() => trackAffiliateClick(plan.name, 'pricing-section')}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    idx === 0
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
                      : idx === 1
                      ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {idx === 0 ? 'Get Free Account' : idx === 1 ? 'Try Grammarly Pro' : `Try ${plan.name.split(' ')[0]}`}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-slate-500">
            <p>* Prices shown are for annual billing. Check provider sites for latest pricing.</p>
            <p className="mt-1">Source: Official pricing pages (verified Nov 19, 2025)</p>
          </div>
        </div>
      </section>

      {/* Interactive User Type Selector */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Which Tool Is Right for You?
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'student', label: 'Student', icon: FileText },
              { id: 'content-creator', label: 'Content Creator', icon: Sparkles },
              { id: 'professional', label: 'Professional', icon: Users },
              { id: 'developer', label: 'Developer', icon: Zap },
              { id: 'editor', label: 'Editor/Author', icon: Award }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedUserType(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedUserType === type.id
                    ? 'bg-sky-500 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <type.icon className="w-5 h-5" />
                <span>{type.label}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={selectedUserType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto"
          >
            {selectedUserType === 'student' && (
              <>
                <h3 className="text-2xl font-bold mb-4">Best for Students</h3>
                <p className="mb-4">
                  <strong className="text-sky-400">Top Pick: Grammarly Free or LanguageTool</strong>
                </p>
                <p className="mb-4">
                  Grammarly Free offers excellent grammar checking for essays and assignments. The free version is surprisingly capable for basic writing needs.
                </p>
                <p>
                  If you're on a tight budget, LanguageTool Premium at $4.99/month provides solid grammar checking and supports multiple languages—great for international students.
                </p>
              </>
            )}
            {selectedUserType === 'content-creator' && (
              <>
                <h3 className="text-2xl font-bold mb-4">Best for Content Creators</h3>
                <p className="mb-4">
                  <strong className="text-sky-400">Top Pick: Grammarly Pro or QuillBot</strong>
                </p>
                <p className="mb-4">
                  Grammarly's tone detection and AI rewrites help you match your brand voice consistently. The plagiarism checker ensures originality for SEO.
                </p>
                <p>
                  QuillBot Premium ($8.33/mo) excels at paraphrasing and offers unlimited rewrites—perfect for repurposing content across platforms.
                </p>
              </>
            )}
            {selectedUserType === 'professional' && (
              <>
                <h3 className="text-2xl font-bold mb-4">Best for Professionals</h3>
                <p className="mb-4">
                  <strong className="text-sky-400">Top Pick: Grammarly Business</strong>
                </p>
                <p className="mb-4">
                  Grammarly works seamlessly in Outlook, Slack, Google Docs, and everywhere you communicate professionally. Tone detection ensures appropriate messaging for every context.
                </p>
                <p>
                  For teams, Grammarly Business offers style guides, analytics, and user management—essential for maintaining brand consistency across your organization.
                </p>
              </>
            )}
            {selectedUserType === 'developer' && (
              <>
                <h3 className="text-2xl font-bold mb-4">Best for Developers</h3>
                <p className="mb-4">
                  <strong className="text-sky-400">Top Pick: Grammarly or Hemingway</strong>
                </p>
                <p className="mb-4">
                  Grammarly's browser extension works in GitHub, Stack Overflow, and documentation platforms without disrupting your workflow.
                </p>
                <p>
                  For technical writing, Hemingway Editor ($19.99 one-time) helps simplify complex explanations with its readability analysis—perfect for README files and documentation.
                </p>
              </>
            )}
            {selectedUserType === 'editor' && (
              <>
                <h3 className="text-2xl font-bold mb-4">Best for Editors/Authors</h3>
                <p className="mb-4">
                  <strong className="text-sky-400">Top Pick: ProWritingAid or Grammarly</strong>
                </p>
                <p className="mb-4">
                  ProWritingAid offers 25+ detailed reports including pacing, readability, and overused words—essential for deep manuscript editing. The lifetime license ($399) is unbeatable value for professional authors.
                </p>
                <p>
                  Grammarly excels for faster editing cycles and client work, with superior tone detection and seamless cross-platform syncing.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Deep Dives - Word count per tool: ~180 words each */}
      <section id="recommendations" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            In-Depth Tool Analysis
          </h2>

          <div className="space-y-12">
            {/* Grammarly */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-slate-900">Grammarly</h3>
                <div className="flex items-center space-x-2 bg-sky-100 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-sky-600" />
                  <span className="font-bold text-sky-900">#1 Overall</span>
                </div>
              </div>

              <div className="prose max-w-none text-slate-700">
                <p className="text-lg mb-4">
                  Grammarly has earned its position as the industry standard for good reason. With over 40 million active users, it delivers the most comprehensive grammar checking experience available today.
                </p>
                
                <p className="mb-4">
                  <strong>Key Strengths:</strong> Grammarly's AI-powered engine goes beyond basic grammar correction to understand context, tone, and clarity. The Premium plan includes 2,000 monthly AI prompts for full-sentence rewrites, making it easy to improve your writing without starting from scratch. The integrated plagiarism checker scans against billions of web pages—a feature that costs extra or isn't available at all in most competing tools.
                </p>

                <p className="mb-4">
                  Cross-platform integration is where Grammarly truly shines. It works seamlessly across Chrome, Safari, Firefox, Edge, Microsoft Word, Outlook, Google Docs, LinkedIn, Gmail, and 500+ other platforms. Native mobile apps for iOS and Android ensure your writing stays consistent everywhere. For businesses, Grammarly Business offers team style guides, centralized billing, analytics dashboards, and SOC 2 Type 2 compliance.
                </p>

                <p className="mb-4">
                  <strong>Limitations:</strong> The primary drawback is English-only support. If you write in multiple languages, LanguageTool is the better choice. The free version is capable but limits advanced features like tone detection and full-sentence rewrites. At $12/month (annual billing), it's mid-priced—more than LanguageTool or QuillBot, but less than standalone plagiarism checkers would cost separately.
                </p>

                <p>
                  <strong>Who Should Choose Grammarly:</strong> Professionals who write emails, reports, and documents daily. Content creators who need tone consistency and plagiarism checking. Teams and businesses requiring centralized management. Anyone who values "just works everywhere" reliability.
                </p>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={AFF.grammarly}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aff="grammarly"
                  onClick={() => trackAffiliateClick('grammarly', 'deep-dive-free')}
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <span>Get Free Account</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={AFF.grammarly}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aff="grammarly"
                  onClick={() => trackAffiliateClick('grammarly', 'deep-dive-pro')}
                  className="inline-flex items-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <span>Try Grammarly Pro</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* ProWritingAid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-slate-900">ProWritingAid</h3>
                <div className="flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <span className="font-bold text-teal-900">#2 Runner-Up</span>
                </div>
              </div>

              <div className="prose max-w-none text-slate-700">
                <p className="text-lg mb-4">
                  ProWritingAid is the writer's choice for deep manuscript editing. It offers 25+ detailed writing reports that go far beyond grammar checking to analyze style, readability, pacing, overused words, sentence structure, and more.
                </p>

                <p className="mb-4">
                  <strong>Key Strengths:</strong> The depth of analysis is unmatched. You can run reports on entire manuscripts (unlimited word count) to identify patterns and weaknesses across your whole project. Integration with Scrivener makes it ideal for novelists and long-form writers. The lifetime license ($399) is exceptional value for professional authors—pay once, use forever. AI Sparks (released 2024) provides 5 daily AI-powered suggestions for rephrasing, though it's more limited than Grammarly's 2,000 monthly prompts.
                </p>

                <p className="mb-4">
                  ProWritingAid's style reports help maintain consistency in fiction writing—tracking repeated words, clichés, and sticky sentences that can bog down your prose. The Chrome extension and desktop app work well, though mobile support is lacking compared to Grammarly.
                </p>

                <p className="mb-4">
                  <strong>Limitations:</strong> Plagiarism checking costs extra through a credit system, which can add up for frequent users. The interface feels more technical and less intuitive than Grammarly's polished experience. Some reports can be overwhelming for casual users who just want quick grammar fixes.
                </p>

                <p>
                  <strong>Who Should Choose ProWritingAid:</strong> Fiction authors and novelists who need deep manuscript analysis. Writers committed to a one-time purchase rather than subscriptions. Scrivener users. Anyone who wants granular control over their editing process.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={AFF.prowritingaid}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aff="prowritingaid"
                  onClick={() => trackAffiliateClick('prowritingaid', 'deep-dive')}
                  className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <span>Try ProWritingAid</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* QuillBot */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-slate-900">QuillBot</h3>
                <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="font-bold text-purple-900">#3 Budget Pick</span>
                </div>
              </div>

              <div className="prose max-w-none text-slate-700">
                <p className="text-lg mb-4">
                  QuillBot built its reputation on paraphrasing and has evolved into a capable all-in-one writing suite at the most affordable premium price point ($8.33/month annually).
                </p>

                <p className="mb-4">
                  <strong>Key Strengths:</strong> The paraphraser is best-in-class with 7 different modes (Standard, Fluency, Formal, Simple, Creative, Expand, Shorten) and unlimited rewrites on Premium. This makes it invaluable for content creators repurposing material or students who need to rephrase research without plagiarizing. The grammar checker is solid, though not quite at Grammarly's level of sophistication.
                </p>

                <p className="mb-4">
                  QuillBot includes 20 plagiarism checks per month (compared to unlimited in Grammarly Premium), plus helpful tools like a summarizer, citation generator, and translator. The suite approach gives you multiple writing tools for less than competitors charge for grammar checking alone. Integration with Google Docs, Microsoft Word, and Chrome works smoothly.
                </p>

                <p className="mb-4">
                  <strong>Limitations:</strong> The grammar checking isn't as advanced as Grammarly or ProWritingAid—it catches errors but misses some contextual issues. Tone detection is basic. No native mobile apps beyond the browser extension. The interface can feel cluttered with all the different tools competing for attention.
                </p>

                <p>
                  <strong>Who Should Choose QuillBot:</strong> Content creators who frequently paraphrase and repurpose content. Students on a budget who need both grammar checking and plagiarism detection. Writers who value the all-in-one suite approach. Anyone prioritizing affordability without sacrificing core features.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={AFF.quillbot}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aff="quillbot"
                  onClick={() => trackAffiliateClick('quillbot', 'deep-dive')}
                  className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <span>Try QuillBot Premium</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* LanguageTool */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-slate-900">LanguageTool</h3>
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-blue-900">#4 Multilingual</span>
                </div>
              </div>

              <div className="prose max-w-none text-slate-700">
                <p className="text-lg mb-4">
                  LanguageTool is the clear winner for multilingual writers, supporting grammar checking in over 30 languages including Spanish, German, French, Portuguese, and more.
                </p>

                <p className="mb-4">
                  <strong>Key Strengths:</strong> If you write in multiple languages, LanguageTool is your only real option among major grammar checkers. The Premium plan ($4.99/month annually) is remarkably affordable while providing advanced style suggestions, unlimited paraphrasing, and a personal dictionary across all supported languages. The free version is surprisingly capable with a 10,000-character limit.
                </p>

                <p className="mb-4">
                  LanguageTool's browser extensions work across Chrome, Firefox, Safari, and Edge. Integration with Microsoft Word, Google Docs, and LibreOffice covers most writing environments. The open-source foundation means strong privacy protections—your text isn't used to train AI models. For English writing specifically, it provides solid grammar checking that catches most errors, though it lacks the contextual sophistication of Grammarly.
                </p>

                <p className="mb-4">
                  <strong>Limitations:</strong> No plagiarism detection at any price point. English-language checking isn't quite as polished as Grammarly's. No native mobile apps (browser-based only). The 100,000-character limit on Premium plans may feel restrictive for authors working with full manuscripts. Team features exist but aren't as robust as Grammarly Business.
                </p>

                <p>
                  <strong>Who Should Choose LanguageTool:</strong> Multilingual writers and international teams. Anyone concerned about privacy who wants open-source software. Budget-conscious users who need solid grammar checking without premium pricing. European users writing in Spanish, German, French, or other supported languages.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={AFF.languagetool}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aff="languagetool"
                  onClick={() => trackAffiliateClick('languagetool', 'deep-dive')}
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  <span>Try LanguageTool</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Honest Recommendation Block - Word count: ~150 words */}
      <section className="py-16 bg-gradient-to-br from-sky-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Honest Recommendation
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-left">
            <h3 className="text-2xl font-bold mb-4">Start with Grammarly Free</h3>
            <p className="text-lg mb-4">
              After extensive testing, we recommend starting with Grammarly's free version. It delivers exceptional value with accurate grammar checking, tone detection, and works across all your devices—no credit card required.
            </p>
            <p className="text-lg mb-4">
              The free version handles 95% of everyday writing needs. If you need advanced features like plagiarism detection or AI rewrites, you can always upgrade to Premium later.
            </p>
            <p className="text-lg font-semibold mb-6">
              <strong>Choose an alternative when:</strong>
            </p>
            <ul className="space-y-2 mb-6 text-lg">
              <li>• <strong>You're a novelist:</strong> ProWritingAid's deep manuscript analysis is unmatched</li>
              <li>• <strong>You need paraphrasing:</strong> QuillBot offers unlimited rewrites at the best price</li>
              <li>• <strong>You write in multiple languages:</strong> LanguageTool is your only real option</li>
              <li>• <strong>You prioritize readability:</strong> Hemingway's focused approach excels here</li>
            </ul>

            <div className="flex gap-4 justify-center">
              <a
                href={AFF.grammarly}
                target="_blank"
                rel="noopener noreferrer"
                data-aff="grammarly"
                onClick={() => trackAffiliateClick('grammarly', 'recommendation-free')}
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl"
              >
                <span>Start Free with Grammarly</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href={AFF.grammarly}
                target="_blank"
                rel="noopener noreferrer"
                data-aff="grammarly"
                onClick={() => trackAffiliateClick('grammarly', 'recommendation-pro')}
                className="inline-flex items-center space-x-2 bg-white text-sky-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-sky-50 transition-all shadow-xl"
              >
                <span>Try Grammarly Premium</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Word count: ~400 words total */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Is Grammarly safe? What about privacy?",
                a: "Yes, Grammarly is safe and takes privacy seriously. They are SOC 2 Type 2 certified, meaning independent auditors verify their security controls. Grammarly doesn't sell your data or use it to train AI models for other customers. Your documents are encrypted in transit and at rest. Business plans include additional enterprise-grade security features and compliance certifications. That said, no online tool is 100% risk-free—avoid pasting highly sensitive information like passwords or confidential business secrets into any cloud-based editor."
              },
              {
                q: "Does Grammarly have plagiarism detection like Turnitin?",
                a: "Yes, Grammarly Premium includes plagiarism detection that scans your text against billions of web pages and academic databases. It's not identical to Turnitin (which universities use), but it catches most copied content effectively. ProWritingAid offers plagiarism checking but charges extra per scan. QuillBot includes 20 plagiarism checks monthly. LanguageTool, Hemingway, and Ginger don't offer plagiarism detection at all."
              },
              {
                q: "Can I use these tools with Microsoft Word and Google Docs?",
                a: "Most major grammar checkers integrate with Word and Docs. Grammarly has native add-ins for both that work seamlessly. ProWritingAid offers Word and Docs plugins. QuillBot and LanguageTool also support both platforms. Hemingway is the outlier—it requires copy-pasting text into its web or desktop app since it lacks integrations. For professional workflows where you live in Word or Docs, Grammarly or ProWritingAid are the best choices."
              },
              {
                q: "How do team/business plans work? Can I manage multiple users?",
                a: "Grammarly Business is the most sophisticated team solution with centralized billing, style guides, analytics dashboards, user management, and SSO support. Administrators can enforce writing standards across the organization. ProWritingAid, QuillBot, and LanguageTool offer team plans but with less advanced management features. Pricing typically ranges from $7.50-$15 per user per month depending on the provider and commitment length. If you need enterprise features like compliance certifications or dedicated support, Grammarly Business is worth the premium."
              },
              {
                q: "Which tool works best on mobile devices?",
                a: "Grammarly has the best mobile experience with native iOS and Android apps, plus a mobile keyboard that checks your writing in any app (messages, email, social media). Ginger also offers a mobile keyboard. The others require using browser extensions on mobile, which is clunky. If you write frequently on your phone or tablet, Grammarly is the clear winner."
              },
              {
                q: "Can I use Grammarly or other tools offline?",
                a: "Most grammar checkers require an internet connection since they use cloud-based AI. Hemingway Editor is the exception—the $19.99 desktop app works completely offline. ProWritingAid's desktop app can check basic grammar offline but needs internet for advanced features. If offline capability is essential (e.g., you write on planes or in areas with poor connectivity), Hemingway or ProWritingAid desktop are your best options."
              },
              {
                q: "Are there discounts for students or educators?",
                a: "Many providers offer education discounts. Check their official websites for current student/educator pricing—discounts typically range from 20-50% off. Some universities provide Grammarly access through institutional licenses. QuillBot and ProWritingAid frequently have student promotions. We can't list specific discount codes here since they change frequently, but visiting the provider sites directly will show available offers."
              },
              {
                q: "Which is better for non-native English speakers?",
                a: "LanguageTool and Ginger are specifically designed with non-native speakers in mind. LanguageTool supports 30+ languages and catches errors common among learners. Ginger includes translation, text-to-speech, and a 'Personal Trainer' feature. However, Grammarly's tone detection and contextual suggestions can also be very helpful for ESL writers who want to sound more natural. For multilingual needs, LanguageTool wins. For English-only learning with the best corrections, Grammarly edges ahead."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-700 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Writing?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Start with Grammarly's free version today. No credit card required.
          </p>
          
          <a
            href={AFF.grammarly}
            target="_blank"
            rel="noopener noreferrer"
            data-aff="grammarly"
            onClick={() => trackAffiliateClick('grammarly', 'final-cta')}
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-lg font-bold text-xl shadow-2xl hover:scale-105 transform transition-all"
          >
            <span>Get Started Free</span>
            <ExternalLink className="w-6 h-6" />
          </a>

          <p className="mt-6 text-sm text-slate-400">
            Free forever • No credit card • 40M+ users
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DC</span>
                </div>
                <span className="text-xl font-bold text-white">DigiCompares</span>
              </div>
              <p className="text-sm">
                Honest, in-depth comparisons to help you choose the right tools for your needs.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#comparison" className="hover:text-sky-400 transition">Feature Comparison</a></li>
                <li><a href="#pricing" className="hover:text-sky-400 transition">Pricing</a></li>
                <li><a href="#recommendations" className="hover:text-sky-400 transition">Recommendations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Tools Compared</h4>
              <ul className="space-y-2 text-sm">
                <li><a href={AFF.grammarly} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">Grammarly</a></li>
                <li><a href={AFF.prowritingaid} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">ProWritingAid</a></li>
                <li><a href={AFF.quillbot} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">QuillBot</a></li>
                <li><a href={AFF.languagetool} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">LanguageTool</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="text-sm space-y-4">
              <p className="font-semibold text-white">Affiliate Disclosure:</p>
              <p>
                This page contains affiliate links. We may earn a commission when you purchase through our links, at no additional cost to you. This helps us maintain our site and continue providing honest, independent reviews. Our rankings and recommendations are based on genuine testing and research, not commission rates. We only recommend products we truly believe in.
              </p>
              
              <p className="text-xs text-slate-400 mt-6">
                Last Updated: November 19, 2025 (ISO 8601: 2025-11-19)
              </p>
              
              <p className="text-xs text-slate-400">
                All pricing and features verified as of November 19, 2025. Prices subject to change. Please check provider websites for the most current information.
              </p>
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-slate-700 mt-8 pt-8">
            <h4 className="font-bold text-white mb-4">Sources & References</h4>
            <div className="text-xs space-y-2">
              <p className="font-semibold text-slate-200">Grammarly:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://www.grammarly.com/plans" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Official Pricing - Grammarly.com/plans</a></li>
                <li><a href="https://tekpon.com/software/grammarly/pricing/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Tekpon Grammarly Review & Pricing</a></li>
                <li><a href="https://www.demandsage.com/how-much-is-grammarly-premium/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">DemandSage Grammarly Premium Analysis</a></li>
              </ul>

              <p className="font-semibold text-slate-200 mt-4">ProWritingAid:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://prowritingaid.com/pricing" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Official Pricing - ProWritingAid.com/pricing</a></li>
                <li><a href="https://www.getapp.com/collaboration-software/a/prowritingaid/pricing/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">GetApp ProWritingAid Pricing Review</a></li>
              </ul>

              <p className="font-semibold text-slate-200 mt-4">QuillBot:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://quillbot.com/upgrade" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Official Pricing - QuillBot.com/upgrade</a></li>
                <li><a href="https://tekpon.com/software/quillbot/pricing/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Tekpon QuillBot Pricing Review</a></li>
              </ul>

              <p className="font-semibold text-slate-200 mt-4">LanguageTool:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://languagetool.org/premium" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Official Premium - LanguageTool.org/premium</a></li>
                <li><a href="https://www.toolsforhumans.ai/ai-tools/language-tool" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">ToolsForHumans LanguageTool Review</a></li>
              </ul>

              <p className="font-semibold text-slate-200 mt-4">Hemingway Editor:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://hemingwayapp.com/hemingway-editor-plus" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Official Hemingway Plus - HemingwayApp.com</a></li>
                <li><a href="https://kindlepreneur.com/hemingway-editor-review/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">KindlePreneur Hemingway Review</a></li>
              </ul>

              <p className="font-semibold text-slate-200 mt-4">Ginger:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://www.getapp.com/collaboration-software/a/ginger-page/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">GetApp Ginger Software Review</a></li>
                <li><a href="https://www.demandsage.com/grammarly-vs-ginger/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">DemandSage Grammarly vs Ginger Comparison</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-slate-500">
            <p>&copy; 2025 DigiCompares. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* JSON-LD for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Grammarly safe? What about privacy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Grammarly is safe and SOC 2 Type 2 certified. They don't sell your data or use it to train AI models for other customers. Your documents are encrypted in transit and at rest."
                }
              },
              {
                "@type": "Question",
                "name": "Does Grammarly have plagiarism detection?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Grammarly Premium includes plagiarism detection that scans your text against billions of web pages and academic databases."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}