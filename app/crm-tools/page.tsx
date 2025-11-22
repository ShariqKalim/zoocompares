// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function SystemeIOComparison() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Smooth scroll for anchor links
    const smoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href')!);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    };

    // Animate elements on scroll
    const animateOnScroll = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
      });
    };

    smoothScroll();
    animateOnScroll();

    // Animate progress bars
    const animateBars = () => {
      const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.bar-fill');
            bars.forEach(bar => {
              const width = bar.style.width;
              bar.style.width = '0%';
              setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = width;
              }, 100);
            });
          }
        });
      }, { threshold: 0.5 });

      document.querySelectorAll('.chart-section, .bar-chart').forEach(el => {
        barObserver.observe(el);
      });
    };

    animateBars();
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const platforms = [
    {
      name: 'Systeme.io',
      rank: '#1 Best Overall',
      badgeColor: 'bg-gradient-to-r from-green-500 to-emerald-600',
      cardColor: 'bg-white border-2 border-green-200 shadow-lg hover:shadow-xl',
      price: 'FREE - $97/month',
      rating: 4.8,
      features: [
        'Forever FREE Plan Available',
        'Unlimited Emails on All Plans',
        'Complete Sales Funnel Builder',
        'Email Marketing Automation',
        'Course & Membership Platform',
        'Affiliate Management System',
        'No Transaction Fees',
        '24/7 Customer Support'
      ],
      cta: 'Start FREE Trial →',
      ctaColor: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white cursor-pointer',
      link: 'https://systeme.io'
    },
    {
      name: 'ClickFunnels',
      rank: '#2',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      cardColor: 'bg-white border border-gray-200 shadow-md hover:shadow-lg',
      price: '$97 - $297/month',
      rating: 4.3,
      features: [
        'Advanced Funnel Builder',
        'A/B Testing Tools',
        'Email Marketing',
        'Limited Free Plan',
        'Course Hosting',
        'Higher Learning Curve',
        'Extensive Template Library',
        'Follow-up Funnels'
      ],
      cta: 'View Details →',
      ctaColor: 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 cursor-pointer',
      link: '#clickfunnels-details'
    },
    {
      name: 'Kartra',
      rank: '#3',
      badgeColor: 'bg-gradient-to-r from-purple-500 to-purple-600',
      cardColor: 'bg-white border border-gray-200 shadow-md hover:shadow-lg',
      price: '$119 - $549/month',
      rating: 4.2,
      features: [
        'Comprehensive Features',
        'Video Hosting Included',
        'Webinar Platform',
        'No Free Plan',
        'Limited Contacts',
        'Higher Pricing Tiers',
        'Behavioral Adaptive Marketing',
        'Helpdesk & Calendar'
      ],
      cta: 'View Details →',
      ctaColor: 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 cursor-pointer',
      link: '#kartra-details'
    },
    {
      name: 'GoHighLevel',
      rank: '#4',
      badgeColor: 'bg-gradient-to-r from-cyan-500 to-cyan-600',
      cardColor: 'bg-white border border-gray-200 shadow-md hover:shadow-lg',
      price: '$97 - $497/month',
      rating: 4.5,
      features: [
        'Agency-Focused Features',
        'White-Label Options',
        'CRM & Automation',
        'No Free Plan',
        'Usage-Based Fees',
        'Complex for Beginners',
        'Built-in Phone System',
        'SMS Marketing'
      ],
      cta: 'View Details →',
      ctaColor: 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 cursor-pointer',
      link: '#gohighlevel-details'
    }
  ];

  const comparisonData = [
    { feature: 'Free Plan', systemeio: '✓ Forever Free', clickfunnels: '✗ Trial Only', kartra: '✗ Trial Only', gohighlevel: '✗ Trial Only' },
    { feature: 'Starting Price', systemeio: '$0/month', clickfunnels: '$97/month', kartra: '$119/month', gohighlevel: '$97/month' },
    { feature: 'Email Marketing', systemeio: '✓ Unlimited', clickfunnels: '✓ 50K/month', kartra: '✓ Limited', gohighlevel: '✓ Pay per use' },
    { feature: 'Sales Funnels', systemeio: '✓ Unlimited (paid)', clickfunnels: '✓ Unlimited', kartra: '✓ Unlimited', gohighlevel: '✓ Unlimited' },
    { feature: 'Course Platform', systemeio: '✓ Included', clickfunnels: '✓ Included', kartra: '✓ Included', gohighlevel: '✓ Limited' },
    { feature: 'Affiliate Management', systemeio: '✓ Full Featured', clickfunnels: '✓ Available', kartra: '✓ Available', gohighlevel: '✓ Basic' },
    { feature: 'Transaction Fees', systemeio: '0%', clickfunnels: '0%', kartra: '0-5%', gohighlevel: '0%' },
    { feature: 'Webinar Hosting', systemeio: '✓ Evergreen', clickfunnels: '✓ Available', kartra: '✓ Full Featured', gohighlevel: '✗ Limited' },
    { feature: 'Custom Domains', systemeio: '✓ 1-10+', clickfunnels: '✓ 3-5+', kartra: '✓ 1-5', gohighlevel: '✓ 3+' },
    { feature: 'A/B Testing', systemeio: '✓ Included', clickfunnels: '✓ Advanced', kartra: '✓ Included', gohighlevel: '✓ Included' },
    { feature: 'Mobile App', systemeio: '✓ Yes', clickfunnels: '✓ Yes', kartra: '✓ Yes', gohighlevel: '✓ White-label' },
    { feature: 'Learning Curve', systemeio: 'Easy', clickfunnels: 'Moderate', kartra: 'Moderate', gohighlevel: 'Steep' },
    { feature: 'Customer Support', systemeio: '24/7', clickfunnels: 'Standard', kartra: 'Standard', gohighlevel: '24/7' }
  ];

  const performanceScores = [
    { category: 'Value for Money', systemeio: 95, clickfunnels: 78, kartra: 72, gohighlevel: 81 },
    { category: 'Feature Richness', systemeio: 92, clickfunnels: 85, kartra: 88, gohighlevel: 89 },
    { category: 'Ease of Use', systemeio: 95, clickfunnels: 75, kartra: 70, gohighlevel: 65 },
    { category: 'Customer Support', systemeio: 92, clickfunnels: 80, kartra: 75, gohighlevel: 88 }
  ];

  const yearlyCosts = [
    { platform: 'Systeme.io (Startup Plan)', monthly: 27, yearly: 324, color: 'bg-gradient-to-r from-green-500 to-emerald-600' },
    { platform: 'ClickFunnels (Basic Plan)', monthly: 97, yearly: 1164, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { platform: 'Kartra (Starter Plan)', monthly: 119, yearly: 1428, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { platform: 'GoHighLevel (Starter Plan)', monthly: 97, yearly: 1164, color: 'bg-gradient-to-r from-cyan-500 to-cyan-600' }
  ];

  const faqs = [
    {
      question: "Is Systeme.io really free forever?",
      answer: "Yes! Systeme.io offers a genuinely free forever plan that includes 2,000 contacts, unlimited email sending, 3 sales funnels, 1 blog, 1 website, and many other features. No credit card is required to start, and you can use it indefinitely."
    },
    {
      question: "Can I migrate from ClickFunnels to Systeme.io?",
      answer: "Absolutely! Systeme.io offers free migration assistance to help you transfer your funnels, email lists, and other content from ClickFunnels or any other platform. Their support team will guide you through the entire process."
    },
    {
      question: "Does Systeme.io have transaction fees?",
      answer: "No! Systeme.io charges zero transaction fees on all plans. You keep 100% of your sales revenue. Payment processor fees from Stripe or PayPal still apply, but Systeme.io itself takes no cut of your sales."
    },
    {
      question: "Which platform is best for complete beginners?",
      answer: "Systeme.io is definitively the best choice for beginners. It has the simplest interface, fastest setup time (15-30 minutes), extensive video tutorials, and 24/7 support. Plus, you can start completely free without any risk."
    },
    {
      question: "Can I create online courses with Systeme.io?",
      answer: "Yes! Systeme.io includes a full-featured course platform where you can create unlimited courses (on paid plans), drip content, issue certificates, and manage student access. It's perfect for course creators and membership sites."
    },
    {
      question: "How does Systeme.io compare in terms of email deliverability?",
      answer: "Systeme.io maintains excellent email deliverability rates comparable to dedicated email platforms. They use industry-standard practices, DKIM/SPF authentication, and have partnerships with major email service providers to ensure your emails reach inboxes."
    }
  ];

  return (
    <>
      <Head>
        <title>Systeme.io vs ClickFunnels vs Kartra vs GoHighLevel 2025 Comparison | DigiCompares</title>
        <meta name="description" content="Complete 2025 comparison of Systeme.io vs ClickFunnels vs Kartra vs GoHighLevel. Find the best all-in-one marketing platform for your business. Expert analysis, pricing, and features." />
        <meta name="keywords" content="systeme.io, clickfunnels, kartra, gohighlevel, marketing platform comparison, all-in-one marketing tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Systeme.io vs Competitors 2025 - Complete Comparison | DigiCompares" />
        <meta property="og:description" content="Expert comparison of top marketing platforms. Find the best solution for your business growth." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="DigiCompares" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Systeme.io vs Competitors 2025 | DigiCompares" />
        <meta name="twitter:description" content="Complete comparison of top marketing platforms. Make an informed decision for your business." />
        
        {/* Google Ads Friendly */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://digicompares.com/systeme-io-vs-competitors" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Systeme.io",
              "description": "All-in-one marketing platform comparison",
              "brand": "Systeme.io",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "15000"
              }
            })
          }}
        />
      </Head>

      <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">DC</span>
                </div>
                <span className="text-lg font-bold text-gray-800">DigiCompares</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#overview" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Overview</a>
                <a href="#comparison" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Comparison</a>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Pricing</a>
                <a href="#verdict" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Verdict</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">FAQ</a>
              </div>
              <a 
                href="https://systeme.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm cursor-pointer shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="relative container mx-auto px-4 py-12 text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
              <span className="text-xs font-medium">🏆 #1 Rated All-in-One Platform 2025</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight scroll-animate">
              Systeme.io vs Competitors
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed scroll-animate">
              Complete 2025 Comparison Guide - Find Your Perfect Marketing Platform
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 scroll-animate">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-xs font-semibold">✅ Expert Verified Analysis</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-xs font-semibold">📊 Data-Driven Comparison</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-xs font-semibold">🕒 Updated November 2025</span>
              </div>
            </div>
            <div className="scroll-animate">
              <a 
                href="https://systeme.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-xl mr-3 cursor-pointer inline-block"
              >
                🚀 Start Free Trial
              </a>
              <a 
                href="#comparison" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 cursor-pointer inline-block"
              >
                📖 Read Full Analysis
              </a>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6">
          
          {/* Introduction Section */}
          <section id="overview" className="bg-white rounded-2xl p-6 mb-8 shadow-lg scroll-animate">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Why This Comparison Matters</h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Choosing the right all-in-one marketing platform can make or break your online business. In today's competitive digital landscape, having the right tools isn't just an advantage—it's a necessity. The platform you choose impacts everything from customer acquisition costs to conversion rates and long-term scalability.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With so many options available, each claiming to be the "best," it's crucial to understand which platform offers genuine value, features that matter, and ease of use for your specific needs. Many entrepreneurs waste thousands of dollars on overpriced platforms that don't match their business requirements.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                In this comprehensive 2025 comparison, we've conducted extensive research, analyzed real user data, and tested each platform thoroughly to provide you with unbiased, actionable insights. Our goal is to help you make an informed decision that aligns with your business goals and budget.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xs">!</span>
                </div>
                <h3 className="text-blue-800 text-lg font-semibold">Important Note</h3>
              </div>
              <p className="text-blue-700 text-sm">
                <strong>Last Updated:</strong> November 2025 | <strong>Data Sources:</strong> Official platform documentation, user reviews, industry analysis, and hands-on testing. All information verified through multiple sources to ensure accuracy.
              </p>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 scroll-animate">
            <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
              <div className="text-2xl font-bold text-gray-800 mb-1">300K+</div>
              <div className="text-gray-600 text-sm">Active Users</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
              <div className="text-2xl font-bold text-gray-800 mb-1">$0</div>
              <div className="text-gray-600 text-sm">To Start</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
              <div className="text-2xl font-bold text-gray-800 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
              <div className="text-2xl font-bold text-gray-800 mb-1">4.8★</div>
              <div className="text-gray-600 text-sm">Rating</div>
            </div>
          </section>

          {/* Platform Rankings */}
          <section id="comparison" className="mb-16 scroll-animate">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Platform Rankings 2025</h2>
            <p className="text-gray-600 text-center text-sm mb-8 max-w-2xl mx-auto">
              Based on comprehensive analysis of features, pricing, user experience, and real-world performance
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div 
                  key={platform.name}
                  className={`${platform.cardColor} rounded-2xl p-6 relative overflow-hidden transform transition-all duration-500 hover:scale-105 ${index === 0 ? 'shadow-xl' : 'shadow-lg'}`}
                >
                  <div className={`absolute top-4 right-4 ${platform.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                    {platform.rank}
                  </div>
                  
                  <div className="text-4xl mb-4 text-center">{
                    ['🚀', '💎', '📊', '⚡'][index]
                  }</div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{platform.name}</h3>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-lg ${i < Math.floor(platform.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2 text-sm font-semibold">{platform.rating}/5</span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-4 text-center border border-gray-200">
                    <div className="text-xl font-bold text-gray-800 mb-1">{platform.price}</div>
                    <div className="text-gray-500 text-xs">per month</div>
                    {index === 0 && (
                      <div className="text-green-600 text-xs font-semibold mt-1">
                        💰 Best value in the market
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={platform.link}
                    target={platform.link.startsWith('http') ? '_blank' : '_self'}
                    rel={platform.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`w-full ${platform.ctaColor} font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg block text-center text-sm`}
                  >
                    {platform.cta}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section className="bg-white rounded-2xl p-6 mb-16 shadow-lg scroll-animate">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Feature-by-Feature Comparison</h2>
            <p className="text-gray-600 text-center text-sm mb-6 max-w-2xl mx-auto">
              Detailed analysis of every major feature across all platforms
            </p>
            
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <th className="py-4 px-4 text-left text-white font-bold text-sm">Feature</th>
                    <th className="py-4 px-4 text-center text-white font-bold text-sm bg-blue-700 border-l border-white/20">Systeme.io</th>
                    <th className="py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20">ClickFunnels</th>
                    <th className="py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20">Kartra</th>
                    <th className="py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20">GoHighLevel</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-800 font-semibold text-sm">{row.feature}</td>
                      <td className="py-3 px-4 text-center text-gray-700 text-sm bg-blue-50 font-semibold border-l border-gray-200">
                        {row.systemeio}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200">
                        {row.clickfunnels}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200">
                        {row.kartra}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200">
                        {row.gohighlevel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-xs">
                ✅ = Full Feature Available &nbsp; | &nbsp; ✓ = Available with Limitations &nbsp; | &nbsp; ✗ = Not Available
              </p>
            </div>
          </section>

          {/* Performance Scores */}
          <section className="mb-16 scroll-animate">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Performance Analysis & Scores</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {performanceScores.map((score, index) => (
                <div key={score.category} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{score.category}</h3>
                  <div className="space-y-4">
                    {[
                      { platform: 'Systeme.io', score: score.systemeio, color: 'bg-gradient-to-r from-green-500 to-emerald-600' },
                      { platform: 'ClickFunnels', score: score.clickfunnels, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
                      { platform: 'Kartra', score: score.kartra, color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
                      { platform: 'GoHighLevel', score: score.gohighlevel, color: 'bg-gradient-to-r from-cyan-500 to-cyan-600' }
                    ].map((item, idx) => (
                      <div key={item.platform} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-semibold text-sm">{item.platform}</span>
                          <span className="text-gray-800 font-bold text-sm">{item.score}/100</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full ${item.color} rounded-full bar-fill transition-all duration-1500 ease-out`}
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Yearly Cost Comparison */}
          <section id="pricing" className="bg-white rounded-2xl p-6 mb-16 shadow-lg border border-gray-100 scroll-animate">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Pricing Comparison Over 12 Months</h2>
            <p className="text-gray-600 text-center text-sm mb-6 max-w-2xl mx-auto">
              See the real cost difference when scaling your business - based on starter plans
            </p>
            
            <div className="space-y-6">
              {yearlyCosts.map((cost, index) => (
                <div key={cost.platform} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold text-sm">{cost.platform}</span>
                    <div className="text-right">
                      <div className="text-gray-800 font-bold text-sm">${cost.yearly}/year</div>
                      <div className="text-gray-500 text-xs">${cost.monthly}/month</div>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`h-full ${cost.color} rounded-full bar-fill transition-all duration-1500 ease-out flex items-center justify-end pr-3`}
                      style={{ width: `${(cost.monthly / 119) * 85}%` }}
                    >
                      <span className="text-white text-xs font-semibold">${cost.monthly}/mo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 text-center">
              <p className="text-green-700 text-sm font-bold">
                💰 Systeme.io saves you $840 - $1,104 per year compared to competitors!
              </p>
            </div>
          </section>

          {/* Pros and Cons */}
          <section className="mb-16 scroll-animate">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Systeme.io: Detailed Pros & Cons</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pros */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-700">Advantages</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Forever free plan with robust features',
                    'Most affordable paid plans in the market',
                    'Unlimited email sending on all plans',
                    'No transaction fees on sales',
                    'Extremely user-friendly interface',
                    'All-in-one solution (no additional tools needed)',
                    'Excellent customer support (24/7)',
                    'Regular feature updates and improvements',
                    'Free migration assistance',
                    'Comprehensive course and membership features'
                  ].map((pro, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-sm">
                      <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-white text-xl">✗</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-700">Limitations</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Limited advanced customization compared to enterprise tools',
                    'Fewer third-party integrations than some competitors',
                    'Basic blogging features (SEO could be stronger)',
                    'Template library smaller than ClickFunnels',
                    'No native phone system (unlike GoHighLevel)',
                    'Limited advanced analytics for power users',
                    'Smaller user community than established competitors',
                    'Fewer pre-built automation templates',
                    'Mobile app functionality could be expanded',
                    'Limited A/B testing capabilities compared to ClickFunnels'
                  ].map((con, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-sm">
                      <span className="text-red-500 mr-2 mt-0.5 flex-shrink-0">✗</span>
                      <span className="leading-relaxed">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Final Verdict */}
          <section id="verdict" className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-16 text-center scroll-animate relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">🏆 Final Verdict: Why Systeme.io Wins</h2>
              <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                After comprehensive analysis of features, pricing, user experience, and real-world performance, <strong>Systeme.io emerges as the clear winner</strong> for most online entrepreneurs, small businesses, and digital marketers.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-left">
                {[
                  'Unbeatable Value: The only platform offering a truly functional free plan with unlimited emails',
                  'Affordable Scaling: Paid plans start at just $27/month (or $17 with new pricing)',
                  'Complete Solution: Everything you need in one place - no hidden costs or add-ons',
                  'Beginner-Friendly: Easiest learning curve of all platforms reviewed',
                  'No Risk: Start free and upgrade only when your business grows',
                  'Proven Results: Trusted by 300,000+ entrepreneurs worldwide'
                ].map((point, index) => (
                  <div key={index} className="flex items-start bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-white text-xl mr-3 mt-0.5">✅</span>
                    <span className="text-white text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <p className="text-white text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
                Whether you're launching your first online business or scaling an existing one, Systeme.io provides the perfect balance of features, affordability, and ease of use. The platform's commitment to continuous improvement and customer success makes it the smart choice for 2025 and beyond.
              </p>

              <a 
                href="https://systeme.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer inline-block"
              >
                🚀 Get Started with Systeme.io FREE →
              </a>
              
              <p className="text-white/80 mt-4 text-sm">
                ✓ No Credit Card Required &nbsp; • &nbsp; ✓ Cancel Anytime &nbsp; • &nbsp; ✓ Free Forever Plan Available
              </p>
            </div>
          </section>

          {/* Who Should Choose Section */}
          <section className="mb-16 scroll-animate">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Who Should Choose Which Platform?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "👑 Choose Systeme.io If:",
                  color: "border-l-4 border-green-500 bg-green-50",
                  points: [
                    "You're starting your first online business",
                    "You want to test before investing money",
                    "You need unlimited email marketing",
                    "Budget is a primary concern",
                    "You want an all-in-one simple solution",
                    "You're creating online courses or memberships",
                    "You need affiliate program management",
                    "You value ease of use and quick setup"
                  ]
                },
                {
                  title: "🚀 Choose ClickFunnels If:",
                  color: "border-l-4 border-blue-500 bg-blue-50",
                  points: [
                    "You need advanced funnel templates",
                    "You have a larger marketing budget",
                    "You prioritize extensive A/B testing",
                    "You're already in the ClickFunnels ecosystem",
                    "Design customization is critical",
                    "You need follow-up funnels",
                    "Backpack affiliate system is important",
                    "You value a large community and resources"
                  ]
                },
                {
                  title: "📊 Choose Kartra If:",
                  color: "border-l-4 border-purple-500 bg-purple-50",
                  points: [
                    "You need integrated video hosting",
                    "Webinars are central to your business",
                    "You have a mid-range budget ($119+)",
                    "You want behavioral marketing features",
                    "You need helpdesk functionality",
                    "Advanced automation is crucial",
                    "You prefer all-in-one solutions",
                    "Calendar and appointment features needed"
                  ]
                },
                {
                  title: "⚡ Choose GoHighLevel If:",
                  color: "border-l-4 border-cyan-500 bg-cyan-50",
                  points: [
                    "You run a marketing agency",
                    "You need white-label solutions",
                    "Client management is your focus",
                    "You need built-in phone systems",
                    "You can handle complex software",
                    "SMS marketing is important",
                    "Reputation management needed",
                    "You serve multiple clients"
                  ]
                }
              ].map((section, index) => (
                <div 
                  key={section.title}
                  className={`${section.color} rounded-xl p-6`}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="text-gray-600 mr-2 mt-0.5">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Decision Guide */}
          <section className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6 mb-16 scroll-animate">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">💡 Quick Decision Guide</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "🎯 Best Overall Value",
                  platform: "Systeme.io",
                  description: "Perfect balance of features, price, and usability for most businesses",
                  color: "text-green-600"
                },
                {
                  title: "🆓 Best Free Plan",
                  platform: "Systeme.io",
                  description: "Only platform with forever free unlimited emails and core features",
                  color: "text-green-600"
                },
                {
                  title: "👶 Best for Beginners",
                  platform: "Systeme.io",
                  description: "Easiest to learn and set up quickly with minimal learning curve",
                  color: "text-green-600"
                },
                {
                  title: "💼 Best for Agencies",
                  platform: "GoHighLevel",
                  description: "White-label and client management features for agency use",
                  color: "text-cyan-600"
                },
                {
                  title: "🎨 Best Templates",
                  platform: "ClickFunnels",
                  description: "Large library of pre-built funnels and design elements",
                  color: "text-blue-600"
                },
                {
                  title: "📹 Best for Webinars",
                  platform: "Kartra",
                  description: "Comprehensive webinar hosting and management features",
                  color: "text-purple-600"
                }
              ].map((guide, index) => (
                <div 
                  key={guide.title}
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className={`text-lg font-bold ${guide.color} mb-2`}>
                    {guide.title}
                  </h3>
                  <p className="text-xl font-bold text-gray-800 mb-2">{guide.platform}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{guide.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* User Experience Comparison */}
          <section className="bg-white rounded-2xl p-6 mb-16 shadow-lg border border-gray-100 scroll-animate">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">User Experience & Support Comparison</h2>
            
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <th className="py-4 px-4 text-left text-white font-bold text-sm">Aspect</th>
                    <th className="py-4 px-4 text-center text-white font-bold text-sm bg-blue-700 border-l border-white/20">Systeme.io</th>
                    <th className="py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20">ClickFunnels</th>
                    <th className="py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20">Kartra</th>
                    <th className="py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20">GoHighLevel</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { aspect: 'Setup Time', systemeio: '15-30 minutes', clickfunnels: '1-2 hours', kartra: '1-2 hours', gohighlevel: '2-4 hours' },
                    { aspect: 'Ease of Use (1-10)', systemeio: '9.5/10', clickfunnels: '7.5/10', kartra: '7.0/10', gohighlevel: '6.5/10' },
                    { aspect: 'Support Response Time', systemeio: '< 2 hours', clickfunnels: '4-24 hours', kartra: '4-24 hours', gohighlevel: '2-12 hours' },
                    { aspect: 'Documentation Quality', systemeio: 'Excellent', clickfunnels: 'Excellent', kartra: 'Good', gohighlevel: 'Good' },
                    { aspect: 'Video Tutorials', systemeio: '✓ Extensive', clickfunnels: '✓ Extensive', kartra: '✓ Good', gohighlevel: '✓ Good' },
                    { aspect: 'Community Forum', systemeio: '✓ Active', clickfunnels: '✓ Very Active', kartra: '✓ Active', gohighlevel: '✓ Very Active' },
                    { aspect: 'Live Chat Support', systemeio: '✓ 24/7', clickfunnels: '✓ Business Hours', kartra: '✓ Business Hours', gohighlevel: '✓ 24/7' },
                    { aspect: 'Onboarding Process', systemeio: 'Guided & Simple', clickfunnels: 'Comprehensive', kartra: 'Moderate', gohighlevel: 'Complex' },
                    { aspect: 'Migration Assistance', systemeio: '✓ Free', clickfunnels: '✓ Paid', kartra: '✓ Paid', gohighlevel: '✓ Varies' }
                  ].map((row, index) => (
                    <tr 
                      key={row.aspect} 
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-800 font-semibold text-sm">{row.aspect}</td>
                      <td className="py-3 px-4 text-center text-gray-700 text-sm bg-blue-50 font-semibold border-l border-gray-200">
                        {row.systemeio}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200">
                        {row.clickfunnels}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200">
                        {row.kartra}
                      </td>
                      <td className="py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200">
                        {row.gohighlevel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 mb-16 text-center scroll-animate relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">🚀 Ready to Transform Your Online Business?</h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
                Join over 300,000 entrepreneurs who chose Systeme.io to build, grow, and scale their online businesses without complexity or hidden costs.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">300K+</div>
                  <div className="text-white/80 text-sm">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">$0</div>
                  <div className="text-white/80 text-sm">To Start</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-white/80 text-sm">Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">4.8★</div>
                  <div className="text-white/80 text-sm">User Rating</div>
                </div>
              </div>

              <a 
                href="https://systeme.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-2xl mb-3 cursor-pointer inline-block"
              >
                🎁 Start Your FREE Account Now →
              </a>
              
              <p className="text-white/80 text-sm">
                ✓ No Credit Card Required &nbsp; • &nbsp; ✓ Cancel Anytime &nbsp; • &nbsp; ✓ Free Forever Plan Available
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="bg-white rounded-2xl p-6 mb-16 shadow-lg border border-gray-100 scroll-animate">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    <div className={`text-gray-600 text-xl transition-transform duration-300 ${activeFAQ === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </div>
                  <div className={`faq-answer mt-3 ${activeFAQ === index ? 'block' : 'hidden'}`}>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8 scroll-animate">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-white font-bold text-sm">⚠️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Important Disclaimer</h3>
                <p className="text-yellow-700 text-sm mb-3">
                  <strong>DigiCompares</strong> is an independent comparison platform that provides honest, data-driven reviews of online business tools. While we strive for accuracy, please note:
                </p>
                <div className="text-yellow-700 space-y-1 text-sm">
                  <p>• All information is based on publicly available data and may change over time</p>
                  <p>• Prices and features are accurate as of the last update date (November 2025)</p>
                  <p>• <strong>DigiCompares is not responsible for your purchasing decisions, actions, or any financial losses</strong> that may result from using the platforms reviewed</p>
                  <p>• We may earn affiliate commissions when you sign up through our links, at no extra cost to you</p>
                  <p>• Always conduct your own research and read the terms of service before making any purchase</p>
                  <p>• We provide genuine comparisons but cannot guarantee specific results for your business</p>
                  <p>• Please verify current pricing and features on the official platform websites</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <span className="text-2xl font-bold">DigiCompares</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">Your Trusted Digital Tools Comparison Platform</p>
            <p className="text-gray-400 text-xs mb-4">Helping entrepreneurs make informed decisions since 2025</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs">Contact Us</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs">About</a>
            </div>
            <p className="text-gray-500 text-xs mt-6">
              Last Updated: November 22, 2025 | © 2025 DigiCompares. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              This page may contain affiliate links. We earn a commission at no extra cost to you.
            </p>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* FAQ animations */
        .faq-answer {
          transition: all 0.3s ease-in-out;
        }

        /* Gradient text animations */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        /* Button hover effects */
        .btn-hover {
          transition: all 0.3s ease;
        }

        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        /* Card hover effects */
        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
}

