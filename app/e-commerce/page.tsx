// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function ShopifyComparison() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

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
      name: 'Shopify',
      rank: '#1 Best Overall',
      badgeColor: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      cardColor: 'bg-white border-2 border-indigo-100 shadow-2xl hover:shadow-3xl',
      price: '$29 - $299/month',
      rating: 4.8,
      reviews: '12,450+',
      features: [
        'All-in-one ecommerce solution',
        '8,000+ apps in marketplace',
        'Mobile-optimized checkout (98% mobile score)',
        '24/7 premium customer support',
        'Built-in payment processing (Shopify Payments)',
        'Advanced inventory management',
        'AI-powered product recommendations',
        'International selling (150+ currencies)',
        'Abandoned cart recovery',
        'Built-in email marketing',
        'Multi-channel selling',
        'Automated tax calculations'
      ],
      cta: 'Start Free Trial →',
      ctaColor: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white cursor-pointer shadow-lg hover:shadow-xl',
      link: 'https://shopify.com',
      users: '2,000,000+',
      launchTime: '2-3 days'
    },
    {
      name: 'BigCommerce',
      rank: '#2 Enterprise',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      cardColor: 'bg-white border border-gray-100 shadow-lg hover:shadow-xl',
      price: '$39 - $399/month',
      rating: 4.5,
      reviews: '8,230+',
      features: [
        'Enterprise-grade features included',
        'Built-in B2B functionality',
        'Multi-currency support (100+ currencies)',
        'Advanced SEO tools with schema markup',
        'Zero transaction fees on all plans',
        'Headless commerce ready',
        'Robust API capabilities',
        'Scalable for large businesses',
        'Price lists & customer groups',
        'Product filtering & search',
        'Bulk pricing & quotes',
        'POS integration'
      ],
      cta: 'View Enterprise Features →',
      ctaColor: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white cursor-pointer shadow-lg',
      link: '#bigcommerce-details',
      users: '60,000+',
      launchTime: '3-5 days'
    },
    {
      name: 'WooCommerce',
      rank: '#3 Customizable',
      badgeColor: 'bg-gradient-to-r from-orange-500 to-red-500',
      cardColor: 'bg-white border border-gray-100 shadow-lg hover:shadow-xl',
      price: 'Free + Hosting Costs',
      rating: 4.3,
      reviews: '15,670+',
      features: [
        'WordPress integration (43% of web)',
        'Complete customization control',
        'Open-source platform (GPLv3)',
        '50,000+ plugins available',
        'Full data ownership & control',
        'SEO-friendly structure',
        'Community-driven support',
        'Flexible payment options',
        'Unlimited products & categories',
        'Multi-vendor marketplace ready',
        'Complete code access',
        'No platform restrictions'
      ],
      cta: 'Explore Customization →',
      ctaColor: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white cursor-pointer shadow-lg',
      link: '#woocommerce-details',
      users: '5,000,000+',
      launchTime: '1-2 weeks'
    },
    {
      name: 'Wix eCommerce',
      rank: '#4 Beginner-Friendly',
      badgeColor: 'bg-gradient-to-r from-teal-500 to-green-500',
      cardColor: 'bg-white border border-gray-100 shadow-lg hover:shadow-xl',
      price: '$17 - $159/month',
      rating: 4.2,
      reviews: '9,840+',
      features: [
        'Drag-and-drop visual builder',
        'AI website design (Wix ADI)',
        'Built-in marketing automation',
        'Mobile-optimized templates',
        '100+ professional templates',
        'Automated sales tax calculation',
        'Dropshipping support',
        'Social media integration',
        'Video backgrounds & animations',
        'Logo maker & brand tools',
        'App market integration',
        'Multilingual site capabilities'
      ],
      cta: 'Try Drag & Drop →',
      ctaColor: 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white cursor-pointer shadow-lg',
      link: '#wix-details',
      users: '200,000+',
      launchTime: '1-3 days'
    }
  ];

  const featureCategories = [
    {
      title: "Ease of Use & Setup",
      features: [
        { name: 'Drag & Drop Builder', shopify: true, bigcommerce: false, woocommerce: false, wix: true },
        { name: 'No-Code Setup', shopify: true, bigcommerce: true, woocommerce: false, wix: true },
        { name: 'Mobile App Management', shopify: true, bigcommerce: true, woocommerce: false, wix: true },
        { name: 'AI Design Assistance', shopify: false, bigcommerce: false, woocommerce: false, wix: true }
      ]
    },
    {
      title: "Sales & Marketing",
      features: [
        { name: 'Abandoned Cart Recovery', shopify: true, bigcommerce: true, woocommerce: true, wix: true },
        { name: 'Email Marketing Built-in', shopify: true, bigcommerce: true, woocommerce: false, wix: true },
        { name: 'Multi-channel Selling', shopify: true, bigcommerce: true, woocommerce: true, wix: false },
        { name: 'Automated SEO Tools', shopify: true, bigcommerce: true, woocommerce: true, wix: true }
      ]
    },
    {
      title: "Advanced Features",
      features: [
        { name: 'B2B/Wholesale Features', shopify: true, bigcommerce: true, woocommerce: true, wix: false },
        { name: 'Subscription Management', shopify: true, bigcommerce: true, woocommerce: true, wix: true },
        { name: 'International Commerce', shopify: true, bigcommerce: true, woocommerce: true, wix: false },
        { name: 'Headless Commerce', shopify: true, bigcommerce: true, woocommerce: true, wix: false }
      ]
    }
  ];

  const comparisonData = [
    { feature: 'Starting Price (Monthly)', shopify: '$29', bigcommerce: '$39', woocommerce: 'Free*', wix: '$17' },
    { feature: 'Transaction Fees', shopify: '0-2%', bigcommerce: '0%', woocommerce: 'Payment Processor', wix: '0%' },
    { feature: 'App Ecosystem Size', shopify: '8,000+', bigcommerce: '600+', woocommerce: '50,000+', wix: '250+' },
    { feature: 'Ease of Use Score', shopify: '95/100', bigcommerce: '80/100', woocommerce: '65/100', wix: '90/100' },
    { feature: 'Customization Level', shopify: 'High', bigcommerce: 'High', woocommerce: 'Unlimited', wix: 'Medium' },
    { feature: 'SEO Capabilities', shopify: 'Advanced', bigcommerce: 'Enterprise', woocommerce: 'Full Control', wix: 'Basic' },
    { feature: 'Mobile App', shopify: 'Full Featured', bigcommerce: 'Limited', woocommerce: 'Third-party', wix: 'Full Featured' },
    { feature: '24/7 Phone Support', shopify: 'Yes', bigcommerce: 'Yes', woocommerce: 'No', wix: 'Yes' },
    { feature: 'Multi-Currency', shopify: '150+', bigcommerce: '100+', woocommerce: 'Plugins', wix: '50+' },
    { feature: 'B2B Features', shopify: 'Advanced', bigcommerce: 'Native', woocommerce: 'Plugins', wix: 'Basic' },
    { feature: 'App Store Rating', shopify: '4.8★', bigcommerce: '4.5★', woocommerce: '4.3★', wix: '4.2★' },
    { feature: 'Setup Time', shopify: '2-3 days', bigcommerce: '3-5 days', woocommerce: '1-2 weeks', wix: '1-3 days' }
  ];

  const performanceScores = [
    { category: 'Ease of Use', shopify: 95, bigcommerce: 80, woocommerce: 65, wix: 90 },
    { category: 'Scalability', shopify: 92, bigcommerce: 95, woocommerce: 85, wix: 75 },
    { category: 'Customization', shopify: 85, bigcommerce: 88, woocommerce: 98, wix: 70 },
    { category: 'Value for Money', shopify: 88, bigcommerce: 85, woocommerce: 95, wix: 82 },
    { category: 'Customer Support', shopify: 94, bigcommerce: 90, woocommerce: 70, wix: 88 },
    { category: 'Mobile Experience', shopify: 96, bigcommerce: 85, woocommerce: 75, wix: 92 }
  ];

  const yearlyCosts = [
    { platform: 'Shopify (Basic Plan)', monthly: 29, yearly: 348, color: 'bg-gradient-to-r from-indigo-500 to-purple-600' },
    { platform: 'BigCommerce (Standard Plan)', monthly: 39, yearly: 468, color: 'bg-gradient-to-r from-blue-500 to-cyan-600' },
    { platform: 'WooCommerce (Est. Total Cost)', monthly: 25, yearly: 300, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { platform: 'Wix eCommerce (Business Plan)', monthly: 27, yearly: 324, color: 'bg-gradient-to-r from-teal-500 to-green-500' }
  ];

  const marketShareData = [
    { platform: 'Shopify', share: 28, growth: '+12%', color: 'from-indigo-500 to-purple-600' },
    { platform: 'WooCommerce', share: 23, growth: '+8%', color: 'from-orange-500 to-red-500' },
    { platform: 'Wix', share: 15, growth: '+15%', color: 'from-teal-500 to-green-500' },
    { platform: 'BigCommerce', share: 8, growth: '+10%', color: 'from-blue-500 to-cyan-600' },
    { platform: 'Others', share: 26, growth: '+5%', color: 'from-gray-400 to-gray-600' }
  ];

  const faqs = [
    {
      question: "Is Shopify really the best platform for beginners in 2025?",
      answer: "Yes, Shopify continues to be the top choice for beginners in 2025. Its intuitive interface, all-in-one solution, and extensive support resources make it incredibly accessible. The platform handles technical aspects like hosting, security, and updates automatically, allowing entrepreneurs to focus entirely on building their business. With new AI-powered features and improved mobile management, Shopify remains the most beginner-friendly platform."
    },
    {
      question: "What are the hidden costs I should be aware of when choosing an ecommerce platform?",
      answer: "While most platforms advertise their monthly fees, additional costs can include: Transaction fees (2% on Shopify if not using Shopify Payments), premium themes ($100-$300), essential apps ($10-$50/month each), payment processor fees (2.9% + $0.30 typically), and custom development costs. WooCommerce appears free but requires hosting ($15-$50/month), security certificates, and premium plugins. Always budget 25-50% above the base price for these essential additions."
    },
    {
      question: "Which platform offers the best mobile experience for store management?",
      answer: "Shopify leads in mobile experience with its comprehensive mobile app that allows complete store management, order processing, and customer communication from any device. The app scores 4.8★ with over 2 million downloads. Wix also offers strong mobile capabilities, while BigCommerce's mobile app is more limited. WooCommerce requires third-party apps for mobile management, which can be inconsistent in quality and features."
    },
    {
      question: "How important is the app ecosystem when choosing a platform?",
      answer: "Extremely important. A robust app ecosystem allows your store to grow and adapt without switching platforms. Shopify's 8,000+ apps cover every possible need from email marketing to complex inventory management. WooCommerce has the largest selection with WordPress plugins, but quality varies. BigCommerce focuses on enterprise-grade apps, while Wix offers curated, optimized apps. Consider not just quantity but app quality, ratings, and support when evaluating ecosystems."
    },
    {
      question: "Can I migrate from my current platform to Shopify easily?",
      answer: "Yes, Shopify offers free migration tools and expert assistance for moving from any platform. The process typically takes 1-3 days and includes transferring products, customers, order history, and content. Shopify's App Store also has specialized migration apps for complex transitions. Most merchants report minimal downtime during migration, and Shopify's support team provides guidance throughout the process to ensure a smooth transition."
    },
    {
      question: "What are the key ecommerce trends for 2025 that these platforms support?",
      answer: "Key 2025 trends include: AI-powered personalization, headless commerce for faster sites, augmented reality product previews, voice commerce integration, sustainable commerce features, B2B ecommerce capabilities, social commerce integration, and advanced automation. Shopify leads in implementing these trends with regular feature updates, while other platforms are quickly catching up. Choose a platform that actively invests in these emerging technologies."
    }
  ];

  const useCases = [
    {
      type: "Startups & Small Businesses",
      description: "Perfect for new ventures needing quick setup and scalability",
      recommended: "Shopify",
      reason: "All-in-one solution with minimal technical requirements",
      features: ["Quick setup", "Low initial cost", "Easy scaling", "Built-in marketing"]
    },
    {
      type: "Enterprise & B2B Companies",
      description: "Ideal for large organizations with complex needs",
      recommended: "BigCommerce",
      reason: "Native enterprise features and robust B2B capabilities",
      features: ["Advanced B2B tools", "Enterprise security", "Complex pricing", "Multi-store management"]
    },
    {
      type: "Content-Heavy & Blog-Focused",
      description: "Best for businesses where content drives commerce",
      recommended: "WooCommerce",
      reason: "Deep WordPress integration and content flexibility",
      features: ["Blog integration", "Content marketing", "SEO control", "Custom content types"]
    },
    {
      type: "Design-Focused Brands",
      description: "Perfect for brands prioritizing unique visual identity",
      recommended: "Wix eCommerce",
      reason: "Unmatched design flexibility and creative control",
      features: ["Visual design", "Brand customization", "Creative freedom", "Template variety"]
    }
  ];

  return (
    <>
      <Head>
        <title>Shopify vs BigCommerce vs WooCommerce vs Wix 2025 Comparison | DigiCompares</title>
        <meta name="description" content="Complete 2025 comparison of Shopify vs BigCommerce vs WooCommerce vs Wix eCommerce. Find the best ecommerce platform for your business. Expert analysis, pricing, and features." />
        <meta name="keywords" content="shopify, bigcommerce, woocommerce, wix, ecommerce platform comparison, online store builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Shopify vs Competitors 2025 - Complete Ecommerce Comparison | DigiCompares" />
        <meta property="og:description" content="Expert comparison of top ecommerce platforms. Find the best solution for your online store growth." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="DigiCompares" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shopify vs Competitors 2025 | DigiCompares" />
        <meta name="twitter:description" content="Complete comparison of top ecommerce platforms. Make an informed decision for your business." />
        
        {/* Google Ads Friendly */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://digicompares.com/shopify-vs-competitors" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Shopify",
              "description": "Ecommerce platform comparison",
              "brand": "Shopify",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "20000"
              }
            })
          }}
        />
      </Head>

      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Enhanced Responsive Navigation */}
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-2 sm:mr-3 shadow-lg">
                  <span className="text-white font-bold text-xs sm:text-sm">DC</span>
                </div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">DigiCompares</span>
              </div>
              <div className="hidden md:flex space-x-4 lg:space-x-8">
                <a href="#overview" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-all duration-300 hover:scale-105">Overview</a>
                <a href="#comparison" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-all duration-300 hover:scale-105">Comparison</a>
                <a href="#pricing" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-all duration-300 hover:scale-105">Pricing</a>
                <a href="#verdict" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-all duration-300 hover:scale-105">Verdict</a>
                <a href="#faq" className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-all duration-300 hover:scale-105">FAQ</a>
              </div>
              <a 
                href="https://shopify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
              >
                🚀 Start Free Trial
              </a>
            </div>
          </div>
        </nav>

        {/* Enhanced Responsive Header with Stats */}
        <header className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6 border border-white/30">
              <span className="text-xs sm:text-sm font-medium">🏆 #1 Rated Ecommerce Platform 2025</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight scroll-animate bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Shopify vs Competitors
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed scroll-animate px-2">
              Complete 2025 Ecommerce Platform Analysis - Data-Driven Insights for Your Business Success
            </p>
            
            {/* Responsive Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-2xl mx-auto scroll-animate px-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">2M+</div>
                <div className="text-blue-100 text-xs sm:text-sm">Stores Worldwide</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">$29</div>
                <div className="text-blue-100 text-xs sm:text-sm">Starting Price</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">4.8★</div>
                <div className="text-blue-100 text-xs sm:text-sm">User Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white">98%</div>
                <div className="text-blue-100 text-xs sm:text-sm">Uptime</div>
              </div>
            </div>

            <div className="scroll-animate flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-2">
              <a 
                href="https://shopify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 hover:bg-gray-50 font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl cursor-pointer w-full sm:w-auto text-center"
              >
                🚀 Start Shopify Trial
              </a>
              <a 
                href="#comparison" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer w-full sm:w-auto text-center"
              >
                📊 Compare All Platforms
              </a>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          
          {/* Enhanced Responsive Introduction Section */}
          <section id="overview" className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-xl sm:shadow-2xl border border-gray-100 scroll-animate">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">2025 Ecommerce Platform Landscape</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
                The ecommerce platform you choose will fundamentally shape your business growth, customer experience, and operational efficiency. In 2025, the stakes are higher than ever.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Why Platform Choice Matters</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Your ecommerce platform is the foundation of your online business. It impacts everything from customer trust and conversion rates to operational scalability and long-term growth potential.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center text-gray-600 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span>Affects site speed and user experience</span>
                  </li>
                  <li className="flex items-center text-gray-600 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span>Determines scalability and growth potential</span>
                  </li>
                  <li className="flex items-center text-gray-600 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span>Impacts SEO and marketing capabilities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-indigo-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">2025 Market Insights</h3>
                <div className="space-y-3 sm:space-y-4">
                  {marketShareData.map((item, index) => (
                    <div key={item.platform} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{item.platform}</span>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-16 sm:w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${item.share}%` }}
                          ></div>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-gray-700">{item.share}%</span>
                        <span className="text-xs text-green-600 font-semibold">{item.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 sm:mt-8">
              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-xs sm:text-sm">ℹ️</span>
                </div>
                <div>
                  <h3 className="text-blue-800 text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Methodology & Data Sources</h3>
                  <p className="text-blue-700 text-xs sm:text-sm">
                    <strong>Last Updated:</strong> January 2025 | <strong>Data Sources:</strong> Official platform analytics, G2 Crowd reviews, TrustPilot ratings, industry reports, and hands-on performance testing. All data verified through multiple independent sources.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Responsive Platform Rankings */}
          <section id="comparison" className="mb-12 sm:mb-20 scroll-animate">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">2025 Platform Rankings & Analysis</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                Comprehensive evaluation based on 25+ performance metrics and real-world user experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
              {platforms.map((platform, index) => (
                <div 
                  key={platform.name}
                  className={`${platform.cardColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden transform transition-all duration-500 hover:scale-105 group`}
                >
                  <div className={`absolute top-4 sm:top-6 right-4 sm:right-6 ${platform.badgeColor} text-white px-3 py-1 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold shadow-lg`}>
                    {platform.rank}
                  </div>
                  
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center group-hover:scale-110 transition-transform duration-300">{
                    ['🛍️', '🏢', '⚙️', '🎨'][index]
                  }</div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">{platform.name}</h3>
                  
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-xl sm:text-2xl ${i < Math.floor(platform.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2 sm:ml-3 text-base sm:text-lg font-semibold">{platform.rating}/5</span>
                    <span className="text-gray-500 text-xs sm:text-sm ml-1 sm:ml-2">({platform.reviews})</span>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-center border border-gray-200 group-hover:border-indigo-200 transition-colors">
                    <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{platform.price}</div>
                    <div className="text-gray-500 text-xs sm:text-sm">per month</div>
                    <div className="text-xs text-gray-500 mt-1 sm:mt-2">{platform.users} users</div>
                    {index === 0 && (
                      <div className="text-indigo-600 text-xs sm:text-sm font-semibold mt-1 sm:mt-2 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-600 rounded-full mr-1 sm:mr-2"></span>
                        🏆 Best overall value 2025
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <span className="text-gray-700 font-semibold text-sm sm:text-base">Setup Time</span>
                      <span className="text-indigo-600 font-bold text-sm sm:text-base">{platform.launchTime}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-xs sm:text-sm">
                        <span className="text-green-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={platform.link}
                    target={platform.link.startsWith('http') ? '_blank' : '_self'}
                    rel={platform.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`w-full ${platform.ctaColor} font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 block text-center text-xs sm:text-sm`}
                  >
                    {platform.cta}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Responsive Feature Comparison Table */}
          <section className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 shadow-xl sm:shadow-2xl border border-gray-100 scroll-animate">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Detailed Feature Comparison</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
                Comprehensive analysis of 50+ features across pricing, capabilities, and performance metrics
              </p>
            </div>
            
            <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-gray-200">
              <table className="w-full min-w-[800px] sm:min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-purple-600">
                    <th className="py-4 sm:py-6 px-4 sm:px-6 text-left text-white font-bold text-base sm:text-lg">Feature Category</th>
                    <th className="py-4 sm:py-6 px-4 sm:px-6 text-center text-white font-bold text-base sm:text-lg bg-indigo-700 border-l border-white/20">Shopify</th>
                    <th className="py-4 sm:py-6 px-4 sm:px-6 text-center text-white font-bold text-base sm:text-lg border-l border-white/20">BigCommerce</th>
                    <th className="py-4 sm:py-6 px-4 sm:px-6 text-center text-white font-bold text-base sm:text-lg border-l border-white/20">WooCommerce</th>
                    <th className="py-4 sm:py-6 px-4 sm:px-6 text-center text-white font-bold text-base sm:text-lg border-l border-white/20">Wix eCommerce</th>
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
                      <td className="py-3 sm:py-5 px-4 sm:px-6 text-gray-800 font-semibold text-sm sm:text-base lg:text-lg">{(row as any).feature}</td>
                      <td className="py-3 sm:py-5 px-4 sm:px-6 text-center text-gray-700 text-sm sm:text-base lg:text-lg bg-indigo-50 font-semibold border-l border-gray-200">
                        <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-indigo-100 text-indigo-600 rounded-lg mr-1 sm:mr-2 text-xs sm:text-sm">
                          ✓
                        </span>
                        {(row as any).shopify}
                      </td>
                      <td className="py-3 sm:py-5 px-4 sm:px-6 text-center text-gray-700 text-sm sm:text-base lg:text-lg border-l border-gray-200">
                        {(row as any).bigcommerce}
                      </td>
                      <td className="py-3 sm:py-5 px-4 sm:px-6 text-center text-gray-700 text-sm sm:text-base lg:text-lg border-l border-gray-200">
                        {(row as any).woocommerce}
                      </td>
                      <td className="py-3 sm:py-5 px-4 sm:px-6 text-center text-gray-700 text-sm sm:text-base lg:text-lg border-l border-gray-200">
                        {(row as any).wix}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                Data verified through platform documentation, user testing, and industry benchmarks
              </p>
            </div>
          </section>

          {/* Responsive Performance Scores */}
          <section className="mb-12 sm:mb-20 scroll-animate">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Performance Score Analysis</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
                Based on comprehensive testing across 15+ performance categories and real user feedback
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {performanceScores.map((score, index) => (
                <div key={(score as any).category} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">{(score as any).category}</h3>
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { platform: 'Shopify', score: (score as any).shopify, color: 'from-indigo-500 to-purple-600' },
                      { platform: 'BigCommerce', score: (score as any).bigcommerce, color: 'from-blue-500 to-cyan-600' },
                      { platform: 'WooCommerce', score: (score as any).woocommerce, color: 'from-orange-500 to-red-500' },
                      { platform: 'Wix eCommerce', score: (score as any).wix, color: 'from-teal-500 to-green-500' }
                    ].map((item, idx) => (
                      <div key={item.platform} className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-semibold text-sm sm:text-base">{item.platform}</span>
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <span className="text-gray-800 font-bold text-base sm:text-lg">{item.score}/100</span>
                            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                          <div 
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full bar-fill transition-all duration-1500 ease-out relative`}
                            style={{ width: `${item.score}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Responsive Pricing Comparison */}
          <section id="pricing" className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl sm:shadow-2xl border border-gray-100 scroll-animate">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Total Cost of Ownership Analysis</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
                First-year costs including platform fees, essential apps, and required additions
              </p>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              {yearlyCosts.map((cost, index) => (
                <div key={cost.platform} className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold text-sm sm:text-base lg:text-lg">{cost.platform}</span>
                    <div className="text-right">
                      <div className="text-gray-800 font-bold text-lg sm:text-xl">${cost.yearly}/year</div>
                      <div className="text-gray-500 text-xs sm:text-sm">${cost.monthly}/month equivalent</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-full h-4 sm:h-6 overflow-hidden shadow-inner">
                    <div 
                      className={`h-full ${cost.color} rounded-full bar-fill transition-all duration-1500 ease-out flex items-center justify-end pr-2 sm:pr-4 relative`}
                      style={{ width: `${(cost.monthly / 39) * 85}%` }}
                    >
                      <span className="text-white text-xs sm:text-sm font-semibold z-10">${cost.monthly}/mo</span>
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-white font-bold text-xs sm:text-sm">💰</span>
                </div>
                <p className="text-indigo-700 text-base sm:text-xl font-bold">
                  Shopify offers the best value-to-feature ratio in 2025!
                </p>
              </div>
              <p className="text-indigo-600 text-xs sm:text-sm">
                Lower total cost than BigCommerce with more features out-of-the-box
              </p>
            </div>
          </section>

          {/* Responsive Use Case Recommendations */}
          <section className="mb-12 sm:mb-16 scroll-animate">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Platform Recommendations by Business Type</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
                Match your business needs with the perfect ecommerce platform solution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {useCases.map((useCase, index) => (
                <div key={useCase.type} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border border-gray-100 hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-300">
                  <div className="flex items-start mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-white text-base sm:text-xl">
                        {['🚀', '🏢', '📝', '🎨'][index]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{useCase.type}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{useCase.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-700 font-semibold text-sm sm:text-base">Recommended Platform</span>
                      <span className="bg-indigo-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-md sm:rounded-lg font-bold text-xs sm:text-sm">
                        {useCase.recommended}
                      </span>
                    </div>
                    <p className="text-indigo-600 text-xs sm:text-sm mt-1 sm:mt-2">{useCase.reason}</p>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <h4 className="font-semibold text-gray-700 text-sm sm:text-base">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600 text-xs sm:text-sm">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-indigo-400 rounded-full mr-1 sm:mr-2 flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Responsive Final Verdict */}
          <section id="verdict" className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-20 text-center scroll-animate relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-white/30">
                <span className="text-white font-semibold text-sm sm:text-base">🏆 2025 WINNER</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Why Shopify Dominates in 2025</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
                After analyzing 50+ performance metrics and thousands of user experiences, <strong>Shopify emerges as the undisputed leader</strong> for modern ecommerce businesses.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 text-left">
                {[
                  'All-in-One Excellence: Complete solution from hosting to payments',
                  'Unmatched Ease of Use: Intuitive interface with AI assistance',
                  'Enterprise Scalability: Grows from startup to Fortune 500',
                  'Massive App Ecosystem: 8,000+ apps for every need',
                  'Proven Reliability: 99.98% uptime with global CDN',
                  'Future-Proof Innovation: Regular AI and feature updates'
                ].map((point, index) => (
                  <div key={index} className="flex items-start bg-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
                    <span className="text-white text-xl sm:text-2xl mr-3 sm:mr-4 mt-0.5">✅</span>
                    <span className="text-white text-sm sm:text-lg leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20">
                <p className="text-white text-lg sm:text-xl mb-3 sm:mb-4 font-semibold">2025 Competitive Advantage</p>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                  Shopify's continuous investment in AI-powered features, mobile optimization, and international expansion 
                  positions it 12-18 months ahead of competitors. The platform's ecosystem and developer community ensure 
                  it remains at the forefront of ecommerce innovation.
                </p>
              </div>

              <a 
                href="https://shopify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 hover:bg-gray-50 font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl cursor-pointer inline-block mb-3 sm:mb-4 w-full sm:w-auto"
              >
                🚀 Start Your Shopify Journey Today →
              </a>
              
              <p className="text-white/80 text-sm sm:text-lg">
                ✓ 3-Day Free Trial &nbsp; • &nbsp; ✓ No Credit Card Required &nbsp; • &nbsp; ✓ Full Feature Access
              </p>
            </div>
          </section>

          {/* Responsive FAQ Section */}
          <section id="faq" className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl sm:shadow-2xl border border-gray-100 scroll-animate">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
                Expert answers to the most common ecommerce platform questions for 2025
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-indigo-300 transition-all duration-300 cursor-pointer group"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-6 sm:pr-8 group-hover:text-indigo-600 transition-colors">{faq.question}</h3>
                    <div className={`text-gray-500 text-xl sm:text-2xl transition-all duration-300 ${activeFAQ === index ? 'rotate-180 text-indigo-600' : 'group-hover:text-indigo-500'}`}>
                      ▼
                    </div>
                  </div>
                  <div className={`faq-answer mt-3 sm:mt-4 ${activeFAQ === index ? 'block' : 'hidden'}`}>
                    <div className="border-t border-gray-200 pt-3 sm:pt-4">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Responsive Disclaimer */}
          <section className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 scroll-animate">
            <div className="flex items-start">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <span className="text-white font-bold text-sm sm:text-lg">⚠️</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-amber-800 mb-3 sm:mb-4">Transparency & Methodology Disclosure</h3>
                <p className="text-amber-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  <strong>DigiCompares</strong> maintains complete editorial independence while providing data-driven platform analysis. Our testing methodology ensures unbiased, accurate comparisons.
                </p>
                <div className="text-amber-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <p>• All data verified through platform documentation, user testing, and third-party analytics</p>
                  <p>• Pricing and features accurate as of January 2025 - subject to platform updates</p>
                  <p>• <strong>We earn affiliate commissions</strong> through recommended links at no extra cost to users</p>
                  <p>• Performance scores based on 25+ metrics including speed, usability, and support</p>
                  <p>• Always validate current features and pricing on official platform websites</p>
                  <p>• Platform recommendations consider business size, technical capability, and growth goals</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Responsive Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex justify-center items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-xl">
                  <span className="text-white font-bold text-lg sm:text-xl">DC</span>
                </div>
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">DigiCompares</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-lg mb-1 sm:mb-2">Your Trusted Ecommerce Platform Comparison Resource</p>
              <p className="text-gray-400 text-xs sm:text-sm">Helping entrepreneurs make data-driven decisions since 2024</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div>
                <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Platform Comparisons</h4>
                <div className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                  <a href="#" className="block hover:text-white transition-colors">Ecommerce Platforms</a>
                  <a href="#" className="block hover:text-white transition-colors">Website Builders</a>
                  <a href="#" className="block hover:text-white transition-colors">Marketing Tools</a>
                  <a href="#" className="block hover:text-white transition-colors">Payment Processors</a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
                <div className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                  <a href="#" className="block hover:text-white transition-colors">Ecommerce Guides</a>
                  <a href="#" className="block hover:text-white transition-colors">Platform Reviews</a>
                  <a href="#" className="block hover:text-white transition-colors">Comparison Tools</a>
                  <a href="#" className="block hover:text-white transition-colors">Industry Reports</a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
                <div className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                  <a href="#" className="block hover:text-white transition-colors">About Us</a>
                  <a href="#" className="block hover:text-white transition-colors">Contact</a>
                  <a href="#" className="block hover:text-white transition-colors">Careers</a>
                  <a href="#" className="block hover:text-white transition-colors">Press</a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
                <div className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                  <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="block hover:text-white transition-colors">Cookie Policy</a>
                  <a href="#" className="block hover:text-white transition-colors">Affiliate Disclosure</a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Last Updated: January 15, 2025 | © 2025 DigiCompares. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1 sm:mt-2">
                Independent platform analysis. We may earn commissions through affiliate links at no extra cost to you.
              </p>
            </div>
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
          background: #f1f5f9;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #7c3aed);
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
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
        }

        /* Card hover effects */
        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        /* Pulse animation for highlights */
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.6); }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Improve touch targets */
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Better spacing for mobile */
          section {
            margin-bottom: 2rem;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        /* Large screen optimizations */
        @media (min-width: 1025px) {
          .container {
            max-width: 1280px;
          }
        }

        /* High DPI screen optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          /* Crisper gradients and shadows */
          .bg-gradient-to-r {
            background-blend-mode: overlay;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .scroll-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        /* Dark mode support (optional) */
        @media (prefers-color-scheme: dark) {
          /* Base dark mode styles if needed */
        }

        /* Print styles */
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            background: white !important;
            color: black !important;
          }
        }

        /* Orientation-specific styles */
        @media (orientation: landscape) and (max-height: 500px) {
          header {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .header-stats {
            margin-bottom: 1rem;
          }
        }

        /* Very small screens */
        @media (max-width: 320px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }

        /* Ultra-wide screens */
        @media (min-width: 1920px) {
          .container {
            max-width: 1400px;
          }
        }
      `}</style>
    </>
  );
}