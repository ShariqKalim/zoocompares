(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/web-hosting/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Head from 'next/head';
// // Affiliate URLs - Updated to use main hostinger.com
// const HOSTINGER_AFFILIATE = "https://www.hostinger.com/";
// const BLUEHOST_AFFILIATE = "https://www.bluehost.com/track/digicompares/";
// const SITEGROUND_AFFILIATE = "https://www.siteground.com/index.htm?afcode=digicompares";
// const A2HOSTING_AFFILIATE = "https://www.a2hosting.com/?aid=digicompares";
// const CLOUDWAYS_AFFILIATE = "https://www.cloudways.com/en/?id=digicompares";
// const WPENGINE_AFFILIATE = "https://www.wpengine.com/?affiliate=digicompares";
// // Comprehensive 2025 hosting data - UPDATED WITH LATEST INFORMATION
// const hostingProviders = [
//   {
//     id: 1,
//     name: "Hostinger",
//     rank: 1,
//     logo: "🚀",
//     rating: 4.9,
//     reviews: "18,750+",
//     price: "$1.99",
//     originalPrice: "$12.99",
//     discount: "85% OFF",
//     renewalPrice: "$5.99",
//     storage: "200 GB NVMe",
//     bandwidth: "Unlimited",
//     websites: "1 Website",
//     freeDomain: true,
//     freeSSL: true,
//     emailAccounts: "1 Account",
//     backup: "Weekly + On-demand",
//     support: "24/7 Live Chat + Priority Support",
//     moneyBack: "30 Days",
//     performance: "Excellent (160ms)",
//     security: "Free SSL, Cloudflare, WAF",
//     idealFor: ["Beginners", "Small Business", "Portfolio Sites", "Startups"],
//     features: [
//       "LiteSpeed Web Server with LSCache",
//       "Website Builder & Tools",
//       "WordPress Optimized with Auto-updates",
//       "Free CDN Integration (100+ Locations)",
//       "8 Global Data Centers",
//       "Automated Daily Backups",
//       "Git Integration & SSH Access",
//       "WP-CLI & Staging Environment",
//       "Free Email & Business Suite",
//       "Security Monitoring",
//       "Free Domain for 1st Year",
//       "E-commerce Ready (WooCommerce)"
//     ],
//     pros: [
//       "Fastest loading times with 160ms average response time",
//       "User-friendly hPanel for easy management",
//       "8 global data centers with edge computing capabilities",
//       "Best value with premium features at budget pricing",
//       "99.99% uptime guarantee with SLA-backed reliability",
//       "Free domain name, SSL, and website builder included",
//       "One-click WordPress installation with auto-optimization",
//       "24/7 priority support with quick response times"
//     ],
//     cons: [
//       "Basic plan limited to single website",
//       "Phone support requires premium plans",
//       "Some advanced features require higher tiers"
//     ],
//     performanceMetrics: {
//       uptime: "99.99%",
//       responseTime: "160ms",
//       loadTime: "0.8s",
//       dataCenters: 8,
//       supportRating: 4.9
//     },
//     affiliate: HOSTINGER_AFFILIATE,
//     badge: "Editor's Choice 2025",
//     specialOffers: [
//       "Free domain worth $15.99",
//       "Free SSL certificate worth $90",
//       "Free website builder",
//       "Free email hosting with 1GB storage",
//       "Free website migration service"
//     ]
//   },
//   {
//     id: 2,
//     name: "Bluehost",
//     rank: 2,
//     logo: "🔵",
//     rating: 4.4,
//     reviews: "22,100+",
//     price: "$2.75",
//     originalPrice: "$14.99",
//     discount: "82% OFF",
//     renewalPrice: "$12.99",
//     storage: "50 GB SSD",
//     bandwidth: "Unlimited",
//     websites: "1 Website",
//     freeDomain: true,
//     freeSSL: true,
//     emailAccounts: "5 Accounts",
//     backup: "Daily",
//     support: "24/7 Phone & Chat",
//     moneyBack: "30 Days",
//     performance: "Good (210ms)",
//     security: "Free SSL, CodeGuard Basic",
//     idealFor: ["WordPress Beginners", "Bloggers", "Small Business"],
//     features: [
//       "WordPress Auto-install & Management",
//       "Free CDN Integration",
//       "Custom WordPress Themes",
//       "SEO Tools & Marketing Credits",
//       "Staging Environment"
//     ],
//     pros: [
//       "Official WordPress.org recommended hosting",
//       "Reliable performance with good uptime record",
//       "Beginner-friendly interface with guided setup",
//       "Integrated marketing tools and SEO features"
//     ],
//     cons: [
//       "Significant price increase on renewal (over 370%)",
//       "Aggressive upselling during checkout process",
//       "Limited storage on basic plan compared to competitors"
//     ],
//     performanceMetrics: {
//       uptime: "99.97%",
//       responseTime: "210ms",
//       loadTime: "1.6s",
//       dataCenters: 1,
//       supportRating: 4.3
//     },
//     affiliate: BLUEHOST_AFFILIATE,
//     badge: "WordPress Recommended"
//   },
//   {
//     id: 3,
//     name: "SiteGround",
//     rank: 3,
//     logo: "🌍",
//     rating: 4.8,
//     reviews: "12,450+",
//     price: "$3.99",
//     originalPrice: "$19.99",
//     discount: "80% OFF",
//     renewalPrice: "$17.99",
//     storage: "10 GB SSD",
//     bandwidth: "Unlimited",
//     websites: "1 Website",
//     freeDomain: false,
//     freeSSL: true,
//     emailAccounts: "Unlimited",
//     backup: "Daily + On-demand",
//     support: "24/7 Expert Support",
//     moneyBack: "30 Days",
//     performance: "Excellent (175ms)",
//     security: "Advanced Security, WAF", 
//     idealFor: ["Growing Business", "E-commerce", "Agencies", "High-Traffic"],
//     features: [
//       "Google Cloud Infrastructure",
//       "Free CDN with 200+ Locations",
//       "Daily Backups & Staging",
//       "SuperCacher Technology",
//       "Collaboration Tools"
//     ],
//     pros: [
//       "Top-tier customer support with expert technicians",
//       "Advanced security features including anti-bot system",
//       "Excellent performance for WooCommerce and e-commerce sites",
//       "Google Cloud infrastructure ensures reliability"
//     ],
//     cons: [
//       "Very limited storage space on entry-level plans",
//       "Highest renewal prices among competitors",
//       "No free domain registration on initial plan"
//     ],
//     performanceMetrics: {
//       uptime: "99.99%",
//       responseTime: "175ms",
//       loadTime: "1.1s",
//       dataCenters: 8,
//       supportRating: 4.8
//     },
//     affiliate: SITEGROUND_AFFILIATE,
//     badge: "Premium Performance"
//   },
//   {
//     id: 4,
//     name: "A2 Hosting",
//     rank: 4,
//     logo: "⚡", 
//     rating: 4.6,
//     reviews: "9,870+",
//     price: "$2.99",
//     originalPrice: "$12.99",
//     discount: "77% OFF",
//     renewalPrice: "$9.99",
//     storage: "100 GB NVMe", 
//     bandwidth: "Unlimited",
//     websites: "1 Website",
//     freeDomain: false,
//     freeSSL: true,
//     emailAccounts: "Unlimited",
//     backup: "Daily + On-demand",
//     support: "24/7 Guru Crew",
//     moneyBack: "30 Days",
//     performance: "Excellent (155ms)",
//     security: "Free SSL, HackScan, WAF",
//     idealFor: ["Developers", "High-Traffic Sites", "WooCommerce", "Agencies"],
//     features: [
//       "Turbo Servers (20x Faster)",
//       "Free Site Migration",
//       "Developer Tools & SSH",
//       "Multiple PHP Versions",
//       "Staging Environment"
//     ],
//     pros: [
//       "Industry-leading server speeds with Turbo option",
//       "Developer-friendly environment with extensive tools",
//       "Excellent for resource-intensive applications and sites",
//       "Good balance of performance and price"
//     ],
//     cons: [
//       "Turbo servers require additional cost",
//       "Control panel less beginner-friendly than competitors",
//       "Fewer data center locations than top providers"
//     ],
//     performanceMetrics: {
//       uptime: "99.98%",
//       responseTime: "155ms",
//       loadTime: "0.9s",
//       dataCenters: 4,
//       supportRating: 4.6
//     },
//     affiliate: A2HOSTING_AFFILIATE,
//     badge: "Turbo Speed"
//   },
//   {
//     id: 5,
//     name: "Cloudways",
//     rank: 5,
//     logo: "☁️",
//     rating: 4.7,
//     reviews: "8,920+",
//     price: "$14.00",
//     originalPrice: "$14.00",
//     discount: "Managed Cloud",
//     renewalPrice: "$14.00",
//     storage: "25 GB",
//     bandwidth: "1 TB",
//     websites: "1 Website",
//     freeDomain: false,
//     freeSSL: true,
//     emailAccounts: "Unlimited",
//     backup: "On-demand + Automated",
//     support: "24/7 Live Chat",
//     moneyBack: "3-Day Free Trial",
//     performance: "Exceptional (140ms)",
//     security: "Free SSL, Firewalls, WAF",
//     idealFor: ["Agencies", "Developers", "High-Traffic", "Enterprise"],
//     features: [
//       "Choose Cloud Provider (AWS, Google, DigitalOcean)",
//       "Auto-scaling & Team Management",
//       "Staging Environment & Git",
//       "Advanced Caching & CDN",
//       "Application Monitoring"
//     ],
//     pros: [
//       "Choice of leading cloud infrastructure providers",
//       "Auto-scaling capabilities for traffic spikes",
//       "No long-term contracts required",
//       "Enterprise-grade performance and security"
//     ],
//     cons: [
//       "Higher starting price point than shared hosting",
//       "More technical setup required for beginners",
//       "Email hosting not included (additional cost)"
//     ],
//     performanceMetrics: {
//       uptime: "99.99%",
//       responseTime: "140ms",
//       loadTime: "0.7s",
//       dataCenters: "Multiple",
//       supportRating: 4.7
//     },
//     affiliate: CLOUDWAYS_AFFILIATE,
//     badge: "Managed Cloud"
//   },
//   {
//     id: 6,
//     name: "WP Engine",
//     rank: 6,
//     logo: "⚙️",
//     rating: 4.7,
//     reviews: "7,380+",
//     price: "$25.00",
//     originalPrice: "$25.00",
//     discount: "Managed WordPress",
//     renewalPrice: "$25.00",
//     storage: "10 GB",
//     bandwidth: "50 GB",
//     websites: "1 Website",
//     freeDomain: false,
//     freeSSL: true,
//     emailAccounts: "Not Included",
//     backup: "Daily + On-demand",
//     support: "24/7 WordPress Experts",
//     moneyBack: "60 Days",
//     performance: "Exceptional (130ms)",
//     security: "Global Edge Security",
//     idealFor: ["Enterprise", "Agencies", "High-Traffic WordPress"],
//     features: [
//       "Managed WordPress Hosting",
//       "EverCache Technology",
//       "Staging & Development Tools",
//       "Global CDN & SSL",
//       "Genesis Framework"
//     ],
//     pros: [
//       "Best-in-class managed WordPress hosting",
//       "Excellent security and performance optimization",
//       "60-day money-back guarantee (industry best)",
//       "WordPress-specific expert support"
//     ],
//     cons: [
//       "Premium pricing not suitable for beginners",
//       "Limited storage and bandwidth on basic plan",
//       "No email hosting included",
//       "Overkill for simple websites"
//     ],
//     performanceMetrics: {
//       uptime: "99.99%",
//       responseTime: "130ms",
//       loadTime: "0.6s",
//       dataCenters: "Multiple",
//       supportRating: 4.8
//     },
//     affiliate: WPENGINE_AFFILIATE,
//     badge: "Enterprise WordPress"
//   }
// ];
// // Comprehensive comparison features - UPDATED FOR 2025
// const comparisonFeatures = [
//   { name: "Starting Price (Monthly)", key: "price", important: true },
//   { name: "Regular Price (Renewal)", key: "renewalPrice", important: true },
//   { name: "Discount Percentage", key: "discount", important: true },
//   { name: "Storage Type & Size", key: "storage", important: true },
//   { name: "Bandwidth", key: "bandwidth", important: true },
//   { name: "Number of Websites", key: "websites", important: true },
//   { name: "Free Domain", key: "freeDomain", important: true },
//   { name: "Free SSL Certificate", key: "freeSSL", important: true },
//   { name: "Email Accounts", key: "emailAccounts", important: false },
//   { name: "Backup Frequency", key: "backup", important: true },
//   { name: "Support Channels", key: "support", important: true },
//   { name: "Performance Rating", key: "performance", important: true },
//   { name: "Security Features", key: "security", important: true },
//   { name: "Money-Back Guarantee", key: "moneyBack", important: true },
//   { name: "Uptime Guarantee", key: "performanceMetrics.uptime", important: true },
//   { name: "Response Time", key: "performanceMetrics.responseTime", important: true },
//   { name: "Load Time", key: "performanceMetrics.loadTime", important: true },
//   { name: "Data Centers", key: "performanceMetrics.dataCenters", important: false },
//   { name: "Support Rating", key: "performanceMetrics.supportRating", important: true }
// ];
// // FAQ Data - UPDATED FOR 2025
// const faqData = [
//   {
//     question: "Why is Hostinger ranked #1 for 2025?",
//     answer: "Hostinger earns our top spot due to its exceptional performance (160ms response times), unbeatable value at $1.99/month, and comprehensive feature set. With 8 global data centers, 200GB NVMe storage, and user-friendly tools, it represents the best choice for 2025. Their 99.99% uptime and 4.9/5 support rating make it the clear winner."
//   },
//   {
//     question: "What makes Hostinger stand out in 2025?",
//     answer: "Hostinger stands out with its combination of premium features at budget pricing, including 200GB NVMe storage, 8 global data centers, LiteSpeed servers, and comprehensive security features. The $1.99/month introductory price with 85% discount makes it the most aggressive pricing in the hosting industry for 2025."
//   },
//   {
//     question: "Is the $1.99 Hostinger price really sustainable?",
//     answer: "Yes, Hostinger's $1.99/month pricing is part of their 2025 introductory offer. While renewal prices increase to $5.99/month, this still represents exceptional value given the premium features included: 200GB NVMe storage, 8 data centers, and enterprise-grade security. The 85% discount makes it the most competitive pricing available."
//   },
//   {
//     question: "How does Hostinger compare to premium hosts like WP Engine?",
//     answer: "While WP Engine excels for enterprise WordPress sites, Hostinger provides excellent performance at a fraction of the cost. With 160ms vs 130ms response times and similar uptime guarantees, Hostinger delivers premium performance for small to medium businesses. The comprehensive toolset makes it more feature-rich than many premium hosts."
//   },
//   {
//     question: "What are the key hosting trends for 2025?",
//     answer: "2025 hosting is defined by: 1) NVMe storage becoming standard, 2) Edge computing with global CDNs, 3) Enhanced security features, 4) Better performance optimization, and 5) More user-friendly control panels. Hostinger leads in all these areas with their 2025 platform updates."
//   },
//   {
//     question: "Can I upgrade my Hostinger plan later?",
//     answer: "Absolutely. Hostinger makes upgrading seamless with their scalable cloud infrastructure. You can start with the $1.99 plan and easily upgrade to premium, business, or cloud plans as your website grows. All upgrades are instant with no downtime, and you only pay the difference prorated."
//   }
// ];
// // Performance metrics data - UPDATED
// const performanceData = {
//   responseTimes: [
//     { provider: "Hostinger", time: 160, color: "from-green-500 to-emerald-600" },
//     { provider: "A2 Hosting", time: 155, color: "from-cyan-500 to-blue-600" },
//     { provider: "SiteGround", time: 175, color: "from-purple-500 to-pink-600" },
//     { provider: "Cloudways", time: 140, color: "from-indigo-500 to-purple-600" },
//     { provider: "WP Engine", time: 130, color: "from-blue-500 to-indigo-600" },
//     { provider: "Bluehost", time: 210, color: "from-gray-500 to-gray-600" }
//   ],
//   uptime: [
//     { provider: "Hostinger", uptime: 99.99, color: "from-green-500 to-emerald-600" },
//     { provider: "SiteGround", uptime: 99.99, color: "from-purple-500 to-pink-600" },
//     { provider: "Cloudways", uptime: 99.99, color: "from-indigo-500 to-purple-600" },
//     { provider: "WP Engine", uptime: 99.99, color: "from-blue-500 to-indigo-600" },
//     { provider: "A2 Hosting", uptime: 99.98, color: "from-cyan-500 to-blue-600" },
//     { provider: "Bluehost", uptime: 99.97, color: "from-gray-500 to-gray-600" }
//   ]
// };
// // JSON-LD Structured Data for SEO
// const structuredData = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   "name": "Hostinger Web Hosting",
//   "image": "https://digicompares.com/images/hostinger-hosting-2025.jpg",
//   "description": "Premium web hosting starting at $1.99/month with 200GB NVMe storage, 8 global data centers, and 99.99% uptime guarantee. Best hosting for 2025.",
//   "brand": {
//     "@type": "Brand",
//     "name": "Hostinger"
//   },
//   "offers": {
//     "@type": "Offer",
//     "url": HOSTINGER_AFFILIATE,
//     "priceCurrency": "USD",
//     "price": "1.99",
//     "priceValidUntil": "2025-12-31",
//     "availability": "https://schema.org/InStock",
//     "seller": {
//       "@type": "Organization",
//       "name": "Hostinger"
//     }
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "ratingValue": "4.9",
//     "reviewCount": "18750"
//   }
// };
// const faqStructuredData = {
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   "mainEntity": faqData.map(faq => ({
//     "@type": "Question",
//     "name": faq.question,
//     "acceptedAnswer": {
//       "@type": "Answer",
//       "text": faq.answer
//     }
//   }))
// };
// // Countdown Timer Component
// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 23,
//     minutes: 59,
//     seconds: 59
//   });
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev.seconds > 0) {
//           return { ...prev, seconds: prev.seconds - 1 };
//         } else if (prev.minutes > 0) {
//           return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//         } else if (prev.hours > 0) {
//           return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
//         } else {
//           return { hours: 23, minutes: 59, seconds: 59 };
//         }
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);
//   return (
//     <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
//       <span className="text-white font-bold text-sm">Offer ends in:</span>
//       <div className="flex gap-1">
//         <div className="bg-white/20 px-2 py-1 rounded text-white font-mono text-sm font-bold">
//           {String(timeLeft.hours).padStart(2, '0')}
//         </div>
//         <span className="text-white">:</span>
//         <div className="bg-white/20 px-2 py-1 rounded text-white font-mono text-sm font-bold">
//           {String(timeLeft.minutes).padStart(2, '0')}
//         </div>
//         <span className="text-white">:</span>
//         <div className="bg-white/20 px-2 py-1 rounded text-white font-mono text-sm font-bold">
//           {String(timeLeft.seconds).padStart(2, '0')}
//         </div>
//       </div>
//     </div>
//   );
// };
// const TrustBadge = ({ icon, text, subtext }) => (
//   <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//     <div className="text-2xl" aria-label={text}>{icon}</div>
//     <div>
//       <p className="font-bold text-gray-900 text-sm">{text}</p>
//       <p className="text-gray-600 text-xs">{subtext}</p>
//     </div>
//   </div>
// );
// const PerformanceBar = ({ provider, time, maxTime, color, isUptime = false }) => {
//   const percentage = (time / maxTime) * 100;
//   return (
//     <div className="flex items-center gap-3 sm:gap-4 py-2 sm:py-3">
//       <span className="w-20 sm:w-32 font-semibold text-gray-900 text-sm sm:text-base">{provider}</span>
//       <div className="flex-1 bg-gray-200 rounded-full h-3 sm:h-4">
//         <div 
//           className={`h-3 sm:h-4 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
//           style={{ width: `${isUptime ? (time - 99) * 100 : percentage}%` }}
//         ></div>
//       </div>
//       <span className="w-16 sm:w-20 text-right font-bold text-gray-900 text-sm sm:text-base">
//         {isUptime ? `${time}%` : `${time}ms`}
//       </span>
//     </div>
//   );
// };
// const FeatureRow = ({ feature, providers }) => {
//   const getFeatureValue = (provider, key) => {
//     if (key.includes('.')) {
//       const keys = key.split('.');
//       return keys.reduce((obj, k) => obj?.[k], provider);
//     }
//     return provider[key];
//   };
//   const renderValue = (value, provider) => {
//     if (Array.isArray(value)) {
//       return (
//         <div className="text-xs text-gray-600 text-left">
//           {value.slice(0, 2).map((item, idx) => (
//             <div key={idx}>• {item}</div>
//           ))}
//           {value.length > 2 && <div>+{value.length - 2} more</div>}
//         </div>
//       );
//     }
//     if (typeof value === 'boolean') {
//       return value ? (
//         <span className="text-green-600 font-bold text-sm">✅ Yes</span>
//       ) : (
//         <span className="text-red-600 font-bold text-sm">❌ No</span>
//       );
//     }
//     return (
//       <span className={`font-semibold ${provider.rank === 1 ? 'text-green-700 text-sm' : 'text-gray-700'}`}>
//         {value}
//       </span>
//     );
//   };
//   return (
//     <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors duration-200">
//       <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-900 bg-gray-50/80 text-xs sm:text-sm md:text-base">
//         {feature.name}
//         {feature.important && <span className="ml-1 text-red-500 text-xs">*</span>}
//       </td>
//       {providers.map((provider) => {
//         const value = getFeatureValue(provider, feature.key);
//         return (
//           <td key={provider.id} className={`px-2 sm:px-3 md:px-4 py-3 md:py-4 text-center ${provider.rank === 1 ? 'bg-green-50/50' : ''}`}>
//             {renderValue(value, provider)}
//           </td>
//         );
//       })}
//     </tr>
//   );
// };
// const FAQItem = ({ question, answer, isOpen, onClick }) => (
//   <div className="border-b border-gray-200 last:border-b-0">
//     <button
//       onClick={onClick}
//       className="flex items-center justify-between w-full py-4 sm:py-5 md:py-6 text-left hover:bg-gray-50/50 px-3 sm:px-4 rounded-lg transition-colors"
//     >
//       <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 pr-3 sm:pr-6 md:pr-8 leading-relaxed">
//         {question}
//       </h3>
//       <span className="text-lg sm:text-xl md:text-2xl text-green-600 flex-shrink-0 ml-2">
//         {isOpen ? '−' : '+'}
//       </span>
//     </button>
//     {isOpen && (
//       <div className="pb-4 sm:pb-5 md:pb-6 px-3 sm:px-4">
//         <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">{answer}</p>
//       </div>
//     )}
//   </div>
// );
// // Enhanced Coupon Button Component with better colors
// const CouponButton = ({ size = "medium", className = "" }) => {
//   const sizes = {
//     small: "px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm",
//     medium: "px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base",
//     large: "px-6 py-4 text-base sm:px-8 sm:py-4 sm:text-lg"
//   };
//   return (
//     <a
//       href="/coupons"
//       className={`inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-purple-400 shadow-lg hover:from-purple-600 hover:to-pink-700 ${sizes[size]} ${className}`}
//     >
//       <span className="text-sm sm:text-lg">🎫</span>
//       GET COUPON CODE
//     </a>
//   );
// };
// // SEO Metadata Component
// const SEOMetadata = () => (
//   <Head>
//     <title>2025 Web Hosting Comparison - Best Deals & Reviews | DigiCompares</title>
//     <meta 
//       name="description" 
//       content="Comprehensive 2025 web hosting comparison. Get Hostinger at $1.99/mo, 85% OFF. Compare performance, features, and prices of top hosting providers including Bluehost, SiteGround, A2 Hosting, Cloudways, and WP Engine." 
//     />
//     <meta name="keywords" content="web hosting, hosting comparison, best hosting 2025, Hostinger, Bluehost, SiteGround, A2 Hosting, Cloudways, WP Engine, cheap hosting, WordPress hosting" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="robots" content="index, follow" />
//     {/* Open Graph */}
//     <meta property="og:title" content="2025 Web Hosting Comparison - Best Deals & Reviews | DigiCompares" />
//     <meta property="og:description" content="Get Hostinger at $1.99/mo with 85% OFF. Compare 2025's best hosting providers with performance data and expert reviews." />
//     <meta property="og:type" content="website" />
//     <meta property="og:url" content="https://digicompares.com/web-hosting-comparison" />
//     <meta property="og:image" content="https://digicompares.com/images/hosting-comparison-2025.jpg" />
//     <meta property="og:site_name" content="DigiCompares" />
//     {/* Twitter Card */}
//     <meta name="twitter:card" content="summary_large_image" />
//     <meta name="twitter:title" content="2025 Web Hosting Comparison - Best Deals & Reviews" />
//     <meta name="twitter:description" content="Comprehensive hosting comparison with real performance data. Get Hostinger at $1.99/mo with exclusive coupon." />
//     <meta name="twitter:image" content="https://digicompares.com/images/hosting-comparison-2025.jpg" />
//     <meta name="twitter:site" content="@digicompares" />
//     {/* Canonical URL */}
//     <link rel="canonical" href="https://digicompares.com/web-hosting-comparison" />
//     {/* Structured Data */}
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//     />
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
//     />
//   </Head>
// );
// export default function ProfessionalHostingComparison() {
//   const [openFAQ, setOpenFAQ] = useState(0);
//   const [visibleProviders, setVisibleProviders] = useState(4);
//   const tableRef = useRef(null);
//   const scrollToTable = () => {
//     tableRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };
//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };
//   const showMoreProviders = () => {
//     setVisibleProviders(hostingProviders.length);
//   };
//   const maxResponseTime = Math.max(...performanceData.responseTimes.map(p => p.time));
//   const maxUptime = Math.max(...performanceData.uptime.map(p => p.uptime));
//   return (
//     <>
//       <SEOMetadata />
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100">
//         {/* Limited Time Sale Banner */}
//         <div className="bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 py-2 sm:py-3 px-3 sm:px-4 relative overflow-hidden">
//           <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <div className="bg-white/20 p-1 rounded-lg">
//                 <span className="text-white text-base sm:text-lg">🔥</span>
//               </div>
//               <div>
//                 <h1 className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight">
//                   Hostinger 2025 Special - 85% OFF + Free Features!
//                 </h1>
//                 <p className="text-white/90 text-xs hidden sm:block">
//                   Limited time: Get Hostinger for $1.99/mo with exclusive coupon
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
//               <CountdownTimer />
//               <CouponButton size="small" />
//               <a
//                 href={HOSTINGER_AFFILIATE}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-red-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors text-xs sm:text-sm whitespace-nowrap shadow-lg"
//               >
//                 Claim Offer →
//               </a>
//             </div>
//           </div>
//           {/* Animated background elements */}
//           <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full -translate-x-8 -translate-y-8 sm:-translate-x-10 sm:-translate-y-10"></div>
//           <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full translate-x-6 translate-y-6 sm:translate-x-8 sm:translate-y-8"></div>
//         </div>
//         {/* Enhanced Navigation */}
//         <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
//           <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2 sm:gap-3">
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center shadow-lg">
//                   <span className="text-white font-bold text-xs sm:text-sm">DC</span>
//                 </div>
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
//                     DigiCompares
//                   </h2>
//                   <p className="text-xs text-gray-600 font-medium hidden sm:block">2025 Hosting Reviews & Deals</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
//                 <a href="#comparison" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors hidden md:block">
//                   Comparison
//                 </a>
//                 <a href="#performance" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors hidden md:block">
//                   Performance
//                 </a>
//                 <a href="#faq" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors hidden sm:block">
//                   FAQ
//                 </a>
//                 <a 
//                   href="/coupons"
//                   className="text-xs sm:text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors hidden sm:block"
//                 >
//                   🎫 Coupons
//                 </a>
//                 <CouponButton size="small" />
//               </div>
//             </div>
//           </div>
//         </nav>
//         {/* Enhanced Hero Section - Fixed to fit screen */}
//         <header className="relative min-h-[85vh] flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/95"></div>
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
//           <div className="max-w-7xl mx-auto relative z-10 w-full">
//             <div className="text-center">
//               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold text-white mb-4 sm:mb-6 shadow-lg">
//                 <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
//                 🏆 #1 RATED HOSTING 2025
//               </div>
//               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
//                 Premium Web Hosting
//                 <span className="block bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
//                   Starts at $1.99
//                 </span>
//               </h1>
//               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
//                 Get enterprise-grade performance, 200GB NVMe storage, and 8 global data centers 
//                 - all starting at just $1.99/month with our exclusive coupon.
//               </p>
//               {/* Enhanced Trust Badges */}
//               <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
//                 <TrustBadge icon="⚡" text="160ms Speed" subtext="Lightning Fast" />
//                 <TrustBadge icon="🌍" text="8 Data Centers" subtext="Global Network" />
//                 <TrustBadge icon="🛡️" text="99.99% Uptime" subtext="Maximum Reliability" />
//                 <TrustBadge icon="💬" text="4.9/5 Support" subtext="24/7 Expert Help" />
//               </div>
//               <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center max-w-2xl mx-auto px-2">
//                 <a
//                   href={HOSTINGER_AFFILIATE}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-xl w-full sm:w-auto justify-center"
//                 >
//                   🚀 Get Hostinger - $1.99/mo
//                   <span className="bg-white/20 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs">85% OFF</span>
//                 </a>
//                 <CouponButton size="medium" className="w-full sm:w-auto" />
//                 <button
//                   onClick={scrollToTable}
//                   className="inline-flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base w-full sm:w-auto justify-center"
//                 >
//                   📊 Compare All Providers
//                 </button>
//               </div>
//               <p className="text-gray-300 mt-3 sm:mt-4 text-xs sm:text-sm px-2">
//                 🎁 Free Domain + $200 worth of premium features included
//               </p>
//             </div>
//           </div>
//           {/* Improved Scroll Indicator */}
//           <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
//             <div className="animate-bounce bg-white/20 p-1.5 sm:p-2 rounded-full">
//               <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
//                 <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2"></div>
//               </div>
//             </div>
//           </div>
//         </header>
//         {/* Hostinger Excellence Section */}
//         <section className="py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-white">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
//               <div>
//                 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2.5 py-1 rounded-full text-xs font-bold mb-3 sm:mb-4">
//                   🏅 EDITOR'S CHOICE 2025
//                 </div>
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
//                   Why Hostinger Dominates 2025
//                 </h2>
//                 <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
//                   Hostinger continues to lead the hosting industry with unbeatable performance, 
//                   comprehensive features, and exceptional value. With 160ms response times, 
//                   200GB NVMe storage, and 8 global data centers, it outperforms competitors 
//                   costing significantly more.
//                 </p>
//                 <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
//                   <div className="flex items-start gap-2 sm:gap-3">
//                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
//                       <span className="text-white text-sm sm:text-lg">⚡</span>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Lightning Fast Performance</h3>
//                       <p className="text-gray-700 text-xs sm:text-sm">
//                         160ms response times with LiteSpeed servers and global edge caching.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-2 sm:gap-3">
//                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
//                       <span className="text-white text-sm sm:text-lg">🌍</span>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Global Infrastructure</h3>
//                       <p className="text-gray-700 text-xs sm:text-sm">
//                         8 strategically located data centers ensure optimal performance worldwide.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-2 sm:gap-3">
//                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
//                       <span className="text-white text-sm sm:text-lg">🛡️</span>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">Enterprise Security</h3>
//                       <p className="text-gray-700 text-xs sm:text-sm">
//                         Advanced threat detection, WAF protection, and automated security monitoring.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
//                   <a
//                     href={HOSTINGER_AFFILIATE}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm justify-center"
//                   >
//                     🚀 Get Hostinger - $1.99/mo
//                   </a>
//                   <CouponButton size="small" />
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl sm:shadow-2xl border border-gray-200/50 mt-6 lg:mt-0">
//                 <div className="text-center mb-4 sm:mb-6">
//                   <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🏆</div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Hostinger 2025</h3>
//                   <p className="text-gray-600 text-xs sm:text-sm">Premium Web Hosting</p>
//                 </div>
//                 <div className="space-y-3 sm:space-y-4">
//                   <div className="flex justify-between items-center p-2.5 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
//                     <span className="font-semibold text-gray-900 text-xs sm:text-sm">Starting Price</span>
//                     <div className="text-right">
//                       <span className="text-base sm:text-lg font-bold text-green-600">$1.99/mo</span>
//                       <div className="text-xs text-gray-600 line-through">$12.99/mo</div>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center p-2.5 sm:p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
//                     <span className="font-semibold text-gray-900 text-xs sm:text-sm">Performance</span>
//                     <span className="text-base sm:text-lg font-bold text-blue-600">160ms</span>
//                   </div>
//                   <div className="flex justify-between items-center p-2.5 sm:p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
//                     <span className="font-semibold text-gray-900 text-xs sm:text-sm">Uptime</span>
//                     <span className="text-base sm:text-lg font-bold text-purple-600">99.99%</span>
//                   </div>
//                   <div className="flex justify-between items-center p-2.5 sm:p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
//                     <span className="font-semibold text-gray-900 text-xs sm:text-sm">Support Rating</span>
//                     <span className="text-base sm:text-lg font-bold text-orange-600">4.9/5</span>
//                   </div>
//                   <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-2.5 sm:p-3 text-white text-center shadow-lg">
//                     <p className="font-bold text-xs sm:text-sm">$200+ Value Included Free</p>
//                     <p className="text-xs opacity-90">Domain, SSL, and Premium Features</p>
//                   </div>
//                   <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-2.5 sm:p-3 text-white text-center shadow-lg border-2 border-purple-400">
//                     <p className="font-bold text-xs sm:text-sm">🎫 Extra Savings Available!</p>
//                     <p className="text-xs opacity-90">Use coupon code for additional discount</p>
//                     <CouponButton size="small" className="mt-1.5 sm:mt-2 w-full bg-white text-purple-600 hover:bg-gray-100 text-xs" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Performance Comparison Section */}
//         <section id="performance" className="py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-8 sm:mb-12">
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
//                 2025 Performance Benchmarks
//               </h2>
//               <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
//                 Real-world performance testing based on 2025 hosting infrastructure
//               </p>
//             </div>
//             <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
//               <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Server Response Times</h3>
//                 <div className="space-y-2 sm:space-y-3">
//                   {performanceData.responseTimes.map((item, index) => (
//                     <PerformanceBar
//                       key={index}
//                       provider={item.provider}
//                       time={item.time}
//                       maxTime={maxResponseTime}
//                       color={item.color}
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mt-2 sm:mt-3 text-xs">
//                   Lower response times = Better user experience and SEO rankings
//                 </p>
//               </div>
//               <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Uptime Performance</h3>
//                 <div className="space-y-2 sm:space-y-3">
//                   {performanceData.uptime.map((item, index) => (
//                     <PerformanceBar
//                       key={index}
//                       provider={item.provider}
//                       time={item.uptime}
//                       maxTime={maxUptime}
//                       color={item.color}
//                       isUptime={true}
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mt-2 sm:mt-3 text-xs">
//                   Higher uptime = More reliable website availability and business continuity
//                 </p>
//               </div>
//             </div>
//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-center">
//               <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-3 sm:p-4 shadow-lg">
//                 <div className="text-lg sm:text-xl font-bold mb-1">160ms</div>
//                 <div className="text-green-100 text-xs">Hostinger Response</div>
//               </div>
//               <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl p-3 sm:p-4 shadow-lg">
//                 <div className="text-lg sm:text-xl font-bold mb-1">99.99%</div>
//                 <div className="text-blue-100 text-xs">Hostinger Uptime</div>
//               </div>
//               <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl p-3 sm:p-4 shadow-lg">
//                 <div className="text-lg sm:text-xl font-bold mb-1">4.9/5</div>
//                 <div className="text-purple-100 text-xs">Support Rating</div>
//               </div>
//               <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl p-3 sm:p-4 shadow-lg">
//                 <div className="text-lg sm:text-xl font-bold mb-1">8</div>
//                 <div className="text-indigo-100 text-xs">Global Data Centers</div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Main Comparison Table */}
//         <section id="comparison" ref={tableRef} className="py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-gray-50">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-8 sm:mb-12">
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
//                 2025 Comprehensive Hosting Comparison
//               </h2>
//               <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
//                 Detailed analysis of all major hosting providers with 2025 features and performance metrics
//               </p>
//             </div>
//             {/* Desktop Table */}
//             <div className="hidden lg:block bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gradient-to-r from-slate-800 to-gray-900 text-white">
//                       <th className="px-4 sm:px-6 py-4 sm:py-6 text-left font-bold text-sm sm:text-lg">Features</th>
//                       {hostingProviders.slice(0, visibleProviders).map((provider) => (
//                         <th key={provider.id} className={`px-3 sm:px-4 py-4 sm:py-6 text-center font-bold text-sm sm:text-lg ${
//                           provider.rank === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-600' : ''
//                         }`}>
//                           <div className="flex flex-col items-center">
//                             <div className="text-2xl sm:text-3xl mb-1 sm:mb-2" aria-label={`${provider.name} logo`}>{provider.logo}</div>
//                             <div className="text-base sm:text-xl font-bold mb-1">{provider.name}</div>
//                             {provider.badge && (
//                               <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold ${
//                                 provider.rank === 1 
//                                   ? 'bg-yellow-400 text-yellow-900' 
//                                   : 'bg-gray-200 text-gray-700'
//                               }`}>
//                                 {provider.badge}
//                               </span>
//                             )}
//                           </div>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {comparisonFeatures.map((feature, idx) => (
//                       <FeatureRow key={feature.key} feature={feature} providers={hostingProviders.slice(0, visibleProviders)} />
//                     ))}
//                     <tr>
//                       <td className="px-4 sm:px-6 py-4 sm:py-6 font-bold text-gray-900 bg-gray-50 text-sm sm:text-lg">
//                         Get Started
//                       </td>
//                       {hostingProviders.slice(0, visibleProviders).map((provider) => (
//                         <td key={provider.id} className="px-3 sm:px-4 py-4 sm:py-6 text-center bg-gray-50">
//                           <a
//                             href={provider.affiliate}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className={`inline-block px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-bold text-white transition-all duration-300 text-xs sm:text-sm ${
//                               provider.rank === 1
//                                 ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-xl hover:scale-105 shadow-lg'
//                                 : 'bg-gray-600 hover:bg-gray-700'
//                             }`}
//                           >
//                             {provider.rank === 1 ? '🚀 Get Hostinger' : `Visit ${provider.name}`}
//                           </a>
//                           {provider.rank === 1 && (
//                             <div className="mt-1.5 sm:mt-2">
//                               <CouponButton size="small" className="w-full text-xs" />
//                             </div>
//                           )}
//                         </td>
//                       ))}
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             {/* Mobile Cards */}
//             <div className="lg:hidden space-y-4 sm:space-y-6">
//               {hostingProviders.slice(0, visibleProviders).map((provider) => (
//                 <div key={provider.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
//                   <div className={`p-3 sm:p-4 ${provider.rank === 1 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500' : ''}`}>
//                     <div className="flex items-center justify-between mb-3 sm:mb-4">
//                       <div className="flex items-center gap-2 sm:gap-3">
//                         <div className="text-2xl sm:text-3xl" aria-label={`${provider.name} logo`}>{provider.logo}</div>
//                         <div>
//                           <h3 className="text-lg sm:text-xl font-bold text-gray-900">{provider.name}</h3>
//                           <div className="flex items-center gap-1">
//                             <span className="text-yellow-500 text-sm sm:text-lg">⭐</span>
//                             <span className="text-xs sm:text-sm text-gray-600">
//                               {provider.rating} ({provider.reviews})
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       {provider.badge && (
//                         <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold ${
//                           provider.rank === 1 
//                             ? 'bg-yellow-400 text-yellow-900' 
//                             : 'bg-gray-200 text-gray-700'
//                         }`}>
//                           {provider.badge}
//                         </span>
//                       )}
//                     </div>
//                     {/* Pricing */}
//                     <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
//                       <div className="flex items-baseline gap-1.5 sm:gap-2 mb-1">
//                         <span className="text-xl sm:text-2xl font-bold text-gray-900">{provider.price}</span>
//                         <span className="text-base sm:text-lg text-gray-500 line-through">{provider.originalPrice}</span>
//                         <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold">
//                           {provider.discount}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 text-xs sm:text-sm">Renews at {provider.renewalPrice}/mo</p>
//                     </div>
//                     {/* Key Features */}
//                     <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
//                       <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
//                         <p className="text-xs text-gray-600">Storage</p>
//                         <p className="font-bold text-gray-900 text-xs sm:text-sm">{provider.storage}</p>
//                       </div>
//                       <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
//                         <p className="text-xs text-gray-600">Performance</p>
//                         <p className="font-bold text-gray-900 text-xs sm:text-sm">{provider.performance}</p>
//                       </div>
//                     </div>
//                     {/* CTA Button */}
//                     <a
//                       href={provider.affiliate}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-bold text-center block transition-all duration-300 text-xs sm:text-sm ${
//                         provider.rank === 1
//                           ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-xl hover:scale-105 text-white shadow-lg'
//                           : 'bg-gray-900 hover:bg-gray-800 text-white'
//                       }`}
//                     >
//                       {provider.rank === 1 ? '🚀 Get Hostinger' : `Visit ${provider.name}`}
//                     </a>
//                     {/* Coupon Notice for Hostinger */}
//                     {provider.rank === 1 && (
//                       <div className="mt-2.5 sm:mt-3 text-center">
//                         <CouponButton size="small" className="w-full text-xs" />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {visibleProviders < hostingProviders.length && (
//               <div className="text-center mt-6 sm:mt-8">
//                 <button
//                   onClick={showMoreProviders}
//                   className="px-4 py-2.5 sm:px-6 sm:py-3 bg-white text-gray-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300 border-2 border-gray-300 text-xs sm:text-sm"
//                 >
//                   Show All {hostingProviders.length} Providers
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>
//         {/* FAQ Section */}
//         <section id="faq" className="py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-8 sm:mb-12">
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
//                 2025 Hosting FAQ
//               </h2>
//               <p className="text-sm sm:text-base text-gray-600">
//                 Everything you need to know about modern web hosting
//               </p>
//             </div>
//             <div className="bg-gray-50 rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200">
//               {faqData.map((item, index) => (
//                 <FAQItem
//                   key={index}
//                   question={item.question}
//                   answer={item.answer}
//                   isOpen={openFAQ === index}
//                   onClick={() => toggleFAQ(index)}
//                 />
//               ))}
//             </div>
//             {/* Coupon CTA after FAQ */}
//             <div className="mt-8 sm:mt-12 text-center">
//               <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg border-2 border-purple-400">
//                 <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">🎫 Exclusive 2025 Coupon Available!</h3>
//                 <p className="text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm">
//                   Get additional savings on your Hostinger plan with our special coupon code
//                 </p>
//                 <CouponButton size="medium" className="bg-white text-purple-600 hover:bg-gray-100" />
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Final CTA Section */}
//         <section className="py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
//           <div className="max-w-6xl mx-auto text-center">
//             <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
//                 <div className="text-left">
//                   <h3 className="text-white font-bold text-lg sm:text-xl mb-1 sm:mb-2">🚀 2025 Limited Time Offer!</h3>
//                   <p className="text-white/90 text-xs sm:text-sm">
//                     Hostinger with 85% discount - Only $1.99/month with exclusive coupon
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center">
//                   <CountdownTimer />
//                   <CouponButton size="small" />
//                 </div>
//               </div>
//             </div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
//               Ready for Premium Hosting?
//             </h2>
//             <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
//               Join thousands of websites upgrading to high-performance hosting in 2025. 
//               Experience enterprise-grade performance with budget-friendly pricing.
//             </p>
//             <div className="grid md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8">
//               <div className="bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-white/20">
//                 <h4 className="font-bold text-white text-sm sm:text-base mb-2 sm:mb-3">⚡ Premium Features</h4>
//                 <ul className="text-gray-300 space-y-1 sm:space-y-2 text-xs sm:text-sm">
//                   <li>• 200GB NVMe Storage</li>
//                   <li>• 8 Global Data Centers</li>
//                   <li>• Free Domain & SSL</li>
//                   <li>• LiteSpeed Servers</li>
//                 </ul>
//               </div>
//               <div className="bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-white/20">
//                 <h4 className="font-bold text-white text-sm sm:text-base mb-2 sm:mb-3">💰 2025 Pricing</h4>
//                 <ul className="text-gray-300 space-y-1 sm:space-y-2 text-xs sm:text-sm">
//                   <li>• 85% Discount</li>
//                   <li>• 30-day Money-back</li>
//                   <li>• Free Website Migration</li>
//                   <li>• No Hidden Fees</li>
//                 </ul>
//               </div>
//               <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-3 sm:p-4 text-white">
//                 <h4 className="font-bold text-sm sm:text-base mb-2 sm:mb-3">🚀 Special 2025 Deal</h4>
//                 <div className="text-xl sm:text-2xl font-bold mb-1">$1.99/mo</div>
//                 <p className="text-green-100 text-xs">85% OFF Regular Price</p>
//                 <div className="mt-2 sm:mt-3 text-xs">
//                   <p>Free Features Included</p>
//                   <p>30-day money-back guarantee</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center">
//               <a
//                 href={HOSTINGER_AFFILIATE}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-xl w-full sm:w-auto justify-center"
//               >
//                 🚀 Get Hostinger - $1.99/mo
//               </a>
//               <CouponButton size="large" className="w-full sm:w-auto" />
//             </div>
//             <p className="text-gray-400 mt-4 sm:mt-6 text-xs sm:text-sm">
//               ⚡ Premium features included • 🔒 30-day money-back guarantee • 🌍 8 global data centers
//             </p>
//           </div>
//         </section>
//         {/* Comprehensive Disclaimer Section */}
//         <section className="py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8 bg-slate-900">
//           <div className="max-w-7xl mx-auto">
//             <div className="bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700">
//               <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">📝 Important Legal Disclaimers</h3>
//               <div className="space-y-4 sm:space-y-6">
//                 <div>
//                   <h4 className="font-bold text-red-400 mb-2 sm:mb-3 text-sm sm:text-base">🛑 Financial & Affiliate Disclosure</h4>
//                   <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
//                     <strong>DigiCompares</strong> is an independent review platform and participates in various affiliate marketing programs. 
//                     We may receive compensation when you click on links to products and services and make purchases through our provided 
//                     affiliate links. This compensation helps support our research, testing, and content creation.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-yellow-400 mb-2 sm:mb-3 text-sm sm:text-base">⚠️ No Financial Responsibility</h4>
//                   <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
//                     <strong>DigiCompares is not responsible for any financial decisions, purchases, or outcomes</strong> resulting from 
//                     the use of our website, recommendations, or affiliate links. All hosting purchases and financial commitments 
//                     are made solely at your own risk. We provide information for educational purposes only and do not constitute 
//                     financial advice.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-blue-400 mb-2 sm:mb-3 text-sm sm:text-base">🔍 Accuracy of Information</h4>
//                   <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
//                     While we strive to provide accurate and up-to-date information, hosting provider specifications, pricing, 
//                     and features change frequently. <strong>Always verify current pricing and terms directly with the hosting provider</strong> 
//                     before making any purchase. The information on this page was last verified in 2025 and may be subject to change.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-green-400 mb-2 sm:mb-3 text-sm sm:text-base">⚖️ Professional Advice Disclaimer</h4>
//                   <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
//                     Our content is for informational purposes only and should not be considered as professional financial, 
//                     legal, or technical advice. <strong>Consult with appropriate professionals</strong> for advice tailored to your specific 
//                     situation. Your use of this website constitutes acceptance of our Terms of Service and Privacy Policy.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-purple-400 mb-2 sm:mb-3 text-sm sm:text-base">💰 Pricing & Offers Disclosure</h4>
//                   <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
//                     All prices shown are introductory offers for the first billing period only. <strong>Renewal prices are typically higher</strong> 
//                     and vary by provider. Free domain offers usually apply to the first year only. Always read the terms and 
//                     conditions of any hosting provider before making a purchase decision.
//                   </p>
//                 </div>
//                 <div className="bg-red-900/20 border border-red-800 rounded-lg p-3 sm:p-4">
//                   <h4 className="font-bold text-red-300 mb-1.5 sm:mb-2 text-sm sm:text-base">🚨 Investment Risk Warning</h4>
//                   <p className="text-red-200 text-xs sm:text-sm">
//                     Web hosting services involve ongoing financial commitments. <strong>There is no guarantee of business success, 
//                     website traffic, or revenue generation</strong> simply by purchasing hosting services. All business investments 
//                     carry risk, and you should only invest what you can afford to lose.
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-700">
//                 <p className="text-gray-400 text-xs text-center">
//                   © 2025 DigiCompares. All rights reserved. | 
//                   <a href="#" className="hover:text-white ml-1 sm:ml-2">Privacy Policy</a> | 
//                   <a href="#" className="hover:text-white ml-1 sm:ml-2">Terms of Service</a> | 
//                   <a href="#" className="hover:text-white ml-1 sm:ml-2">Affiliate Disclosure</a> | 
//                   <a href="#" className="hover:text-white ml-1 sm:ml-2">Contact Us</a>
//                 </p>
//                 <p className="text-gray-500 text-xs text-center mt-1.5 sm:mt-2">
//                   DigiCompares is not affiliated with, endorsed by, or sponsored by any hosting providers mentioned on this site. 
//                   All trademarks, logos and brand names are the property of their respective owners.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Enhanced Footer */}
//         <footer className="bg-slate-900 text-gray-400 py-6 sm:py-8 px-3 sm:px-4 md:px-6 lg:px-8 border-t border-slate-800">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
//               <div>
//                 <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                   <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
//                     <span className="text-white font-bold text-xs sm:text-sm">DC</span>
//                   </div>
//                   <span className="text-white font-bold text-base sm:text-lg">DigiCompares</span>
//                 </div>
//                 <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
//                   Your trusted source for comprehensive web hosting reviews and deals. 
//                   We provide data-driven insights to help you make informed decisions in 2025.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white mb-2 sm:mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
//                 <ul className="space-y-1 sm:space-y-2">
//                   <li><a href="#comparison" className="hover:text-white transition-colors text-xs sm:text-sm">2025 Comparison</a></li>
//                   <li><a href="#performance" className="hover:text-white transition-colors text-xs sm:text-sm">Performance</a></li>
//                   <li><a href="#faq" className="hover:text-white transition-colors text-xs sm:text-sm">2025 FAQ</a></li>
//                   <li><a href="/coupons" className="hover:text-white transition-colors text-xs sm:text-sm">🎫 2025 Coupons</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white mb-2 sm:mb-3 sm:mb-4 text-sm sm:text-base">Top Hosting</h4>
//                 <ul className="space-y-1 sm:space-y-2">
//                   <li><a href={HOSTINGER_AFFILIATE} className="hover:text-white transition-colors text-xs sm:text-sm">Hostinger</a></li>
//                   <li><a href={SITEGROUND_AFFILIATE} className="hover:text-white transition-colors text-xs sm:text-sm">SiteGround</a></li>
//                   <li><a href={A2HOSTING_AFFILIATE} className="hover:text-white transition-colors text-xs sm:text-sm">A2 Hosting</a></li>
//                   <li><a href={WPENGINE_AFFILIATE} className="hover:text-white transition-colors text-xs sm:text-sm">WP Engine</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-white mb-2 sm:mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
//                 <ul className="space-y-1 sm:space-y-2">
//                   <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Privacy Policy</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Terms of Service</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Affiliate Disclosure</a></li>
//                   <li><a href="#" className="hover:text-white transition-colors text-xs sm:text-sm">Cookie Policy</a></li>
//                 </ul>
//               </div>
//             </div>
//             <div className="border-t border-slate-800 pt-4 sm:pt-6 text-center">
//               <p className="text-gray-500 text-xs">
//                 © 2025 DigiCompares. All rights reserved. We may earn affiliate commissions when you make purchases through our links. 
//                 This helps support our independent research and testing. All data is verified for 2025.
//               </p>
//               <p className="text-gray-600 text-xs mt-1.5 sm:mt-2">
//                 <strong>Disclaimer:</strong> DigiCompares is not responsible for any financial decisions or purchases made through our affiliate links. 
//                 All hosting purchases are made at your own risk. Please review our full disclaimer above.
//               </p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>ProfessionalHostingComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// Affiliate URLs - Updated to use main hostinger.com
const HOSTINGER_AFFILIATE = "https://www.hostinger.com/";
const BLUEHOST_AFFILIATE = "https://www.bluehost.com/track/digicompares/";
const SITEGROUND_AFFILIATE = "https://www.siteground.com/index.htm?afcode=digicompares";
const A2HOSTING_AFFILIATE = "https://www.a2hosting.com/?aid=digicompares";
const CLOUDWAYS_AFFILIATE = "https://www.cloudways.com/en/?id=digicompares";
const WPENGINE_AFFILIATE = "https://www.wpengine.com/?affiliate=digicompares";
// Comprehensive 2025 hosting data - UPDATED WITH LATEST INFORMATION
const hostingProviders = [
    {
        id: 1,
        name: "Hostinger",
        rank: 1,
        logo: "🚀",
        rating: 4.9,
        reviews: "18,750+",
        price: "$1.99",
        originalPrice: "$12.99",
        discount: "85% OFF",
        renewalPrice: "$5.99",
        storage: "200 GB NVMe",
        bandwidth: "Unlimited",
        websites: "1 Website",
        freeDomain: true,
        freeSSL: true,
        emailAccounts: "1 Account",
        backup: "Weekly + On-demand",
        support: "24/7 Live Chat + Priority Support",
        moneyBack: "30 Days",
        performance: "Excellent (160ms)",
        security: "Free SSL, Cloudflare, WAF",
        idealFor: [
            "Beginners",
            "Small Business",
            "Portfolio Sites",
            "Startups"
        ],
        features: [
            "LiteSpeed Web Server with LSCache",
            "Website Builder & Tools",
            "WordPress Optimized with Auto-updates",
            "Free CDN Integration (100+ Locations)",
            "8 Global Data Centers",
            "Automated Daily Backups",
            "Git Integration & SSH Access",
            "WP-CLI & Staging Environment",
            "Free Email & Business Suite",
            "Security Monitoring",
            "Free Domain for 1st Year",
            "E-commerce Ready (WooCommerce)"
        ],
        pros: [
            "Fastest loading times with 160ms average response time",
            "User-friendly hPanel for easy management",
            "8 global data centers with edge computing capabilities",
            "Best value with premium features at budget pricing",
            "99.99% uptime guarantee with SLA-backed reliability",
            "Free domain name, SSL, and website builder included",
            "One-click WordPress installation with auto-optimization",
            "24/7 priority support with quick response times"
        ],
        cons: [
            "Basic plan limited to single website",
            "Phone support requires premium plans",
            "Some advanced features require higher tiers"
        ],
        performanceMetrics: {
            uptime: "99.99%",
            responseTime: "160ms",
            loadTime: "0.8s",
            dataCenters: 8,
            supportRating: 4.9
        },
        affiliate: HOSTINGER_AFFILIATE,
        badge: "Editor's Choice 2025",
        specialOffers: [
            "Free domain worth $15.99",
            "Free SSL certificate worth $90",
            "Free website builder",
            "Free email hosting with 1GB storage",
            "Free website migration service"
        ]
    },
    {
        id: 2,
        name: "Bluehost",
        rank: 2,
        logo: "🔵",
        rating: 4.4,
        reviews: "22,100+",
        price: "$2.75",
        originalPrice: "$14.99",
        discount: "82% OFF",
        renewalPrice: "$12.99",
        storage: "50 GB SSD",
        bandwidth: "Unlimited",
        websites: "1 Website",
        freeDomain: true,
        freeSSL: true,
        emailAccounts: "5 Accounts",
        backup: "Daily",
        support: "24/7 Phone & Chat",
        moneyBack: "30 Days",
        performance: "Good (210ms)",
        security: "Free SSL, CodeGuard Basic",
        idealFor: [
            "WordPress Beginners",
            "Bloggers",
            "Small Business"
        ],
        features: [
            "WordPress Auto-install & Management",
            "Free CDN Integration",
            "Custom WordPress Themes",
            "SEO Tools & Marketing Credits",
            "Staging Environment"
        ],
        pros: [
            "Official WordPress.org recommended hosting",
            "Reliable performance with good uptime record",
            "Beginner-friendly interface with guided setup",
            "Integrated marketing tools and SEO features"
        ],
        cons: [
            "Significant price increase on renewal (over 370%)",
            "Aggressive upselling during checkout process",
            "Limited storage on basic plan compared to competitors"
        ],
        performanceMetrics: {
            uptime: "99.97%",
            responseTime: "210ms",
            loadTime: "1.6s",
            dataCenters: 1,
            supportRating: 4.3
        },
        affiliate: BLUEHOST_AFFILIATE,
        badge: "WordPress Recommended"
    },
    {
        id: 3,
        name: "SiteGround",
        rank: 3,
        logo: "🌍",
        rating: 4.8,
        reviews: "12,450+",
        price: "$3.99",
        originalPrice: "$19.99",
        discount: "80% OFF",
        renewalPrice: "$17.99",
        storage: "10 GB SSD",
        bandwidth: "Unlimited",
        websites: "1 Website",
        freeDomain: false,
        freeSSL: true,
        emailAccounts: "Unlimited",
        backup: "Daily + On-demand",
        support: "24/7 Expert Support",
        moneyBack: "30 Days",
        performance: "Excellent (175ms)",
        security: "Advanced Security, WAF",
        idealFor: [
            "Growing Business",
            "E-commerce",
            "Agencies",
            "High-Traffic"
        ],
        features: [
            "Google Cloud Infrastructure",
            "Free CDN with 200+ Locations",
            "Daily Backups & Staging",
            "SuperCacher Technology",
            "Collaboration Tools"
        ],
        pros: [
            "Top-tier customer support with expert technicians",
            "Advanced security features including anti-bot system",
            "Excellent performance for WooCommerce and e-commerce sites",
            "Google Cloud infrastructure ensures reliability"
        ],
        cons: [
            "Very limited storage space on entry-level plans",
            "Highest renewal prices among competitors",
            "No free domain registration on initial plan"
        ],
        performanceMetrics: {
            uptime: "99.99%",
            responseTime: "175ms",
            loadTime: "1.1s",
            dataCenters: 8,
            supportRating: 4.8
        },
        affiliate: SITEGROUND_AFFILIATE,
        badge: "Premium Performance"
    },
    {
        id: 4,
        name: "A2 Hosting",
        rank: 4,
        logo: "⚡",
        rating: 4.6,
        reviews: "9,870+",
        price: "$2.99",
        originalPrice: "$12.99",
        discount: "77% OFF",
        renewalPrice: "$9.99",
        storage: "100 GB NVMe",
        bandwidth: "Unlimited",
        websites: "1 Website",
        freeDomain: false,
        freeSSL: true,
        emailAccounts: "Unlimited",
        backup: "Daily + On-demand",
        support: "24/7 Guru Crew",
        moneyBack: "30 Days",
        performance: "Excellent (155ms)",
        security: "Free SSL, HackScan, WAF",
        idealFor: [
            "Developers",
            "High-Traffic Sites",
            "WooCommerce",
            "Agencies"
        ],
        features: [
            "Turbo Servers (20x Faster)",
            "Free Site Migration",
            "Developer Tools & SSH",
            "Multiple PHP Versions",
            "Staging Environment"
        ],
        pros: [
            "Industry-leading server speeds with Turbo option",
            "Developer-friendly environment with extensive tools",
            "Excellent for resource-intensive applications and sites",
            "Good balance of performance and price"
        ],
        cons: [
            "Turbo servers require additional cost",
            "Control panel less beginner-friendly than competitors",
            "Fewer data center locations than top providers"
        ],
        performanceMetrics: {
            uptime: "99.98%",
            responseTime: "155ms",
            loadTime: "0.9s",
            dataCenters: 4,
            supportRating: 4.6
        },
        affiliate: A2HOSTING_AFFILIATE,
        badge: "Turbo Speed"
    },
    {
        id: 5,
        name: "Cloudways",
        rank: 5,
        logo: "☁️",
        rating: 4.7,
        reviews: "8,920+",
        price: "$14.00",
        originalPrice: "$14.00",
        discount: "Managed Cloud",
        renewalPrice: "$14.00",
        storage: "25 GB",
        bandwidth: "1 TB",
        websites: "1 Website",
        freeDomain: false,
        freeSSL: true,
        emailAccounts: "Unlimited",
        backup: "On-demand + Automated",
        support: "24/7 Live Chat",
        moneyBack: "3-Day Free Trial",
        performance: "Exceptional (140ms)",
        security: "Free SSL, Firewalls, WAF",
        idealFor: [
            "Agencies",
            "Developers",
            "High-Traffic",
            "Enterprise"
        ],
        features: [
            "Choose Cloud Provider (AWS, Google, DigitalOcean)",
            "Auto-scaling & Team Management",
            "Staging Environment & Git",
            "Advanced Caching & CDN",
            "Application Monitoring"
        ],
        pros: [
            "Choice of leading cloud infrastructure providers",
            "Auto-scaling capabilities for traffic spikes",
            "No long-term contracts required",
            "Enterprise-grade performance and security"
        ],
        cons: [
            "Higher starting price point than shared hosting",
            "More technical setup required for beginners",
            "Email hosting not included (additional cost)"
        ],
        performanceMetrics: {
            uptime: "99.99%",
            responseTime: "140ms",
            loadTime: "0.7s",
            dataCenters: "Multiple",
            supportRating: 4.7
        },
        affiliate: CLOUDWAYS_AFFILIATE,
        badge: "Managed Cloud"
    },
    {
        id: 6,
        name: "WP Engine",
        rank: 6,
        logo: "⚙️",
        rating: 4.7,
        reviews: "7,380+",
        price: "$25.00",
        originalPrice: "$25.00",
        discount: "Managed WordPress",
        renewalPrice: "$25.00",
        storage: "10 GB",
        bandwidth: "50 GB",
        websites: "1 Website",
        freeDomain: false,
        freeSSL: true,
        emailAccounts: "Not Included",
        backup: "Daily + On-demand",
        support: "24/7 WordPress Experts",
        moneyBack: "60 Days",
        performance: "Exceptional (130ms)",
        security: "Global Edge Security",
        idealFor: [
            "Enterprise",
            "Agencies",
            "High-Traffic WordPress"
        ],
        features: [
            "Managed WordPress Hosting",
            "EverCache Technology",
            "Staging & Development Tools",
            "Global CDN & SSL",
            "Genesis Framework"
        ],
        pros: [
            "Best-in-class managed WordPress hosting",
            "Excellent security and performance optimization",
            "60-day money-back guarantee (industry best)",
            "WordPress-specific expert support"
        ],
        cons: [
            "Premium pricing not suitable for beginners",
            "Limited storage and bandwidth on basic plan",
            "No email hosting included",
            "Overkill for simple websites"
        ],
        performanceMetrics: {
            uptime: "99.99%",
            responseTime: "130ms",
            loadTime: "0.6s",
            dataCenters: "Multiple",
            supportRating: 4.8
        },
        affiliate: WPENGINE_AFFILIATE,
        badge: "Enterprise WordPress"
    }
];
// Comprehensive comparison features - UPDATED FOR 2025
const comparisonFeatures = [
    {
        name: "Starting Price (Monthly)",
        key: "price",
        important: true
    },
    {
        name: "Regular Price (Renewal)",
        key: "renewalPrice",
        important: true
    },
    {
        name: "Discount Percentage",
        key: "discount",
        important: true
    },
    {
        name: "Storage Type & Size",
        key: "storage",
        important: true
    },
    {
        name: "Bandwidth",
        key: "bandwidth",
        important: true
    },
    {
        name: "Number of Websites",
        key: "websites",
        important: true
    },
    {
        name: "Free Domain",
        key: "freeDomain",
        important: true
    },
    {
        name: "Free SSL Certificate",
        key: "freeSSL",
        important: true
    },
    {
        name: "Email Accounts",
        key: "emailAccounts",
        important: false
    },
    {
        name: "Backup Frequency",
        key: "backup",
        important: true
    },
    {
        name: "Support Channels",
        key: "support",
        important: true
    },
    {
        name: "Performance Rating",
        key: "performance",
        important: true
    },
    {
        name: "Security Features",
        key: "security",
        important: true
    },
    {
        name: "Money-Back Guarantee",
        key: "moneyBack",
        important: true
    },
    {
        name: "Uptime Guarantee",
        key: "performanceMetrics.uptime",
        important: true
    },
    {
        name: "Response Time",
        key: "performanceMetrics.responseTime",
        important: true
    },
    {
        name: "Load Time",
        key: "performanceMetrics.loadTime",
        important: true
    },
    {
        name: "Data Centers",
        key: "performanceMetrics.dataCenters",
        important: false
    },
    {
        name: "Support Rating",
        key: "performanceMetrics.supportRating",
        important: true
    }
];
// FAQ Data - UPDATED FOR 2025
const faqData = [
    {
        question: "Why is Hostinger ranked #1 for 2025?",
        answer: "Hostinger earns our top spot due to its exceptional performance (160ms response times), unbeatable value at $1.99/month, and comprehensive feature set. With 8 global data centers, 200GB NVMe storage, and user-friendly tools, it represents the best choice for 2025. Their 99.99% uptime and 4.9/5 support rating make it the clear winner."
    },
    {
        question: "What makes Hostinger stand out in 2025?",
        answer: "Hostinger stands out with its combination of premium features at budget pricing, including 200GB NVMe storage, 8 global data centers, LiteSpeed servers, and comprehensive security features. The $1.99/month introductory price with 85% discount makes it the most aggressive pricing in the hosting industry for 2025."
    },
    {
        question: "Is the $1.99 Hostinger price really sustainable?",
        answer: "Yes, Hostinger's $1.99/month pricing is part of their 2025 introductory offer. While renewal prices increase to $5.99/month, this still represents exceptional value given the premium features included: 200GB NVMe storage, 8 data centers, and enterprise-grade security. The 85% discount makes it the most competitive pricing available."
    },
    {
        question: "How does Hostinger compare to premium hosts like WP Engine?",
        answer: "While WP Engine excels for enterprise WordPress sites, Hostinger provides excellent performance at a fraction of the cost. With 160ms vs 130ms response times and similar uptime guarantees, Hostinger delivers premium performance for small to medium businesses. The comprehensive toolset makes it more feature-rich than many premium hosts."
    },
    {
        question: "What are the key hosting trends for 2025?",
        answer: "2025 hosting is defined by: 1) NVMe storage becoming standard, 2) Edge computing with global CDNs, 3) Enhanced security features, 4) Better performance optimization, and 5) More user-friendly control panels. Hostinger leads in all these areas with their 2025 platform updates."
    },
    {
        question: "Can I upgrade my Hostinger plan later?",
        answer: "Absolutely. Hostinger makes upgrading seamless with their scalable cloud infrastructure. You can start with the $1.99 plan and easily upgrade to premium, business, or cloud plans as your website grows. All upgrades are instant with no downtime, and you only pay the difference prorated."
    }
];
// Performance metrics data - UPDATED
const performanceData = {
    responseTimes: [
        {
            provider: "Hostinger",
            time: 160,
            color: "from-green-500 to-emerald-600"
        },
        {
            provider: "A2 Hosting",
            time: 155,
            color: "from-cyan-500 to-blue-600"
        },
        {
            provider: "SiteGround",
            time: 175,
            color: "from-purple-500 to-pink-600"
        },
        {
            provider: "Cloudways",
            time: 140,
            color: "from-indigo-500 to-purple-600"
        },
        {
            provider: "WP Engine",
            time: 130,
            color: "from-blue-500 to-indigo-600"
        },
        {
            provider: "Bluehost",
            time: 210,
            color: "from-gray-500 to-gray-600"
        }
    ],
    uptime: [
        {
            provider: "Hostinger",
            uptime: 99.99,
            color: "from-green-500 to-emerald-600"
        },
        {
            provider: "SiteGround",
            uptime: 99.99,
            color: "from-purple-500 to-pink-600"
        },
        {
            provider: "Cloudways",
            uptime: 99.99,
            color: "from-indigo-500 to-purple-600"
        },
        {
            provider: "WP Engine",
            uptime: 99.99,
            color: "from-blue-500 to-indigo-600"
        },
        {
            provider: "A2 Hosting",
            uptime: 99.98,
            color: "from-cyan-500 to-blue-600"
        },
        {
            provider: "Bluehost",
            uptime: 99.97,
            color: "from-gray-500 to-gray-600"
        }
    ]
};
// JSON-LD Structured Data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hostinger Web Hosting",
    "image": "https://digicompares.com/images/hostinger-hosting-2025.jpg",
    "description": "Premium web hosting starting at $1.99/month with 200GB NVMe storage, 8 global data centers, and 99.99% uptime guarantee. Best hosting for 2025.",
    "brand": {
        "@type": "Brand",
        "name": "Hostinger"
    },
    "offers": {
        "@type": "Offer",
        "url": HOSTINGER_AFFILIATE,
        "priceCurrency": "USD",
        "price": "1.99",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": "Hostinger"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "18750"
    }
};
const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq)=>({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
};
// Click tracking function
const trackClick = async (type, provider)=>{
    try {
        await fetch('/api/track-click', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type,
                provider
            })
        });
    } catch (error) {
        console.error('Error tracking click:', error);
    }
};
// Enhanced Coupon Button Component with tracking and cursor pointer
const CouponButton = ({ size = "medium", className = "", provider = "Hostinger" })=>{
    const sizes = {
        small: "px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm",
        medium: "px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base",
        large: "px-6 py-4 text-base sm:px-8 sm:py-4 sm:text-lg"
    };
    const handleClick = (e)=>{
        e.preventDefault();
        trackClick('coupon', provider);
        window.open('/coupons', '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        className: `inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-purple-400 shadow-lg hover:from-purple-600 hover:to-pink-700 cursor-pointer ${sizes[size]} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm sm:text-lg",
                children: "🎫"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 1944,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            "GET COUPON CODE"
        ]
    }, void 0, true, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 1940,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CouponButton;
// Enhanced Affiliate Link Component with tracking and cursor pointer
const AffiliateLink = ({ href, children, provider, className = "", onClick })=>{
    const handleClick = (e)=>{
        e.preventDefault();
        trackClick('affiliate', provider);
        if (onClick) onClick();
        window.open(href, '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        onClick: handleClick,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `cursor-pointer ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 1972,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = AffiliateLink;
// Click Counts Display Component
const ClickCountsDisplay = ({ counts })=>{
    if (!counts) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-[8px] text-gray-500 mt-2 border-t border-gray-700 pt-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 justify-center",
            children: [
                counts.affiliate && Object.entries(counts.affiliate).map(([provider, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            provider,
                            ": ",
                            count,
                            " clicks"
                        ]
                    }, `affiliate-${provider}`, true, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 1992,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                counts.coupon && Object.entries(counts.coupon).map(([provider, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            provider,
                            " Coupons: ",
                            count
                        ]
                    }, `coupon-${provider}`, true, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 1997,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/app/web-hosting/page.tsx",
            lineNumber: 1990,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 1989,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = ClickCountsDisplay;
// Countdown Timer Component
const CountdownTimer = ()=>{
    _s();
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        hours: 23,
        minutes: 59,
        seconds: 59
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountdownTimer.useEffect": ()=>{
            const timer = setInterval({
                "CountdownTimer.useEffect.timer": ()=>{
                    setTimeLeft({
                        "CountdownTimer.useEffect.timer": (prev)=>{
                            if (prev.seconds > 0) {
                                return {
                                    ...prev,
                                    seconds: prev.seconds - 1
                                };
                            } else if (prev.minutes > 0) {
                                return {
                                    ...prev,
                                    minutes: prev.minutes - 1,
                                    seconds: 59
                                };
                            } else if (prev.hours > 0) {
                                return {
                                    hours: prev.hours - 1,
                                    minutes: 59,
                                    seconds: 59
                                };
                            } else {
                                return {
                                    hours: 23,
                                    minutes: 59,
                                    seconds: 59
                                };
                            }
                        }
                    }["CountdownTimer.useEffect.timer"]);
                }
            }["CountdownTimer.useEffect.timer"], 1000);
            return ({
                "CountdownTimer.useEffect": ()=>clearInterval(timer)
            })["CountdownTimer.useEffect"];
        }
    }["CountdownTimer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white font-bold text-sm",
                children: "Offer ends in:"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2034,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/20 px-2 py-1 rounded text-white font-mono text-sm font-bold",
                        children: String(timeLeft.hours).padStart(2, '0')
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2036,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: ":"
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2039,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/20 px-2 py-1 rounded text-white font-mono text-sm font-bold",
                        children: String(timeLeft.minutes).padStart(2, '0')
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2040,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white",
                        children: ":"
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2043,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/20 px-2 py-1 rounded text-white font-mono text-sm font-bold",
                        children: String(timeLeft.seconds).padStart(2, '0')
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2044,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2035,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 2033,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CountdownTimer, "dAgKV2giqLUOoKsPCTyYGeaGd78=");
_c3 = CountdownTimer;
const TrustBadge = ({ icon, text, subtext })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl",
                "aria-label": text,
                children: icon
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2054,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-gray-900 text-sm",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2056,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-xs",
                        children: subtext
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2057,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2055,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 2053,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = TrustBadge;
const PerformanceBar = ({ provider, time, maxTime, color, isUptime = false })=>{
    const percentage = time / maxTime * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 sm:gap-4 py-2 sm:py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-20 sm:w-32 font-semibold text-gray-900 text-sm sm:text-base",
                children: provider
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2079,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 bg-gray-200 rounded-full h-3 sm:h-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `h-3 sm:h-4 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`,
                    style: {
                        width: `${isUptime ? (time - 99) * 100 : percentage}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/app/web-hosting/page.tsx",
                    lineNumber: 2081,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2080,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-16 sm:w-20 text-right font-bold text-gray-900 text-sm sm:text-base",
                children: isUptime ? `${time}%` : `${time}ms`
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2086,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 2078,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = PerformanceBar;
const FeatureRow = ({ feature, providers })=>{
    const getFeatureValue = (provider, key)=>{
        if (key.includes('.')) {
            const keys = key.split('.');
            return keys.reduce((obj, k)=>obj?.[k], provider);
        }
        return provider[key];
    };
    const renderValue = (value, provider)=>{
        if (Array.isArray(value)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-600 text-left",
                children: [
                    value.slice(0, 2).map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "• ",
                                item
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 2107,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))),
                    value.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "+",
                            value.length - 2,
                            " more"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2109,
                        columnNumber: 32
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2105,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (typeof value === 'boolean') {
            return value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-green-600 font-bold text-sm",
                children: "✅ Yes"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2116,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-600 font-bold text-sm",
                children: "❌ No"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2118,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `font-semibold ${provider.rank === 1 ? 'text-green-700 text-sm' : 'text-gray-700'}`,
            children: value
        }, void 0, false, {
            fileName: "[project]/app/web-hosting/page.tsx",
            lineNumber: 2123,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-gray-200 hover:bg-gray-50/50 transition-colors duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-3 sm:px-4 md:px-6 py-3 md:py-4 font-semibold text-gray-900 bg-gray-50/80 text-xs sm:text-sm md:text-base",
                children: [
                    feature.name,
                    feature.important && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1 text-red-500 text-xs",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2133,
                        columnNumber: 31
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2131,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            providers.map((provider)=>{
                const value = getFeatureValue(provider, feature.key);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    className: `px-2 sm:px-3 md:px-4 py-3 md:py-4 text-center ${provider.rank === 1 ? 'bg-green-50/50' : ''}`,
                    children: renderValue(value, provider)
                }, provider.id, false, {
                    fileName: "[project]/app/web-hosting/page.tsx",
                    lineNumber: 2138,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 2130,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = FeatureRow;
const FAQItem = ({ question, answer, isOpen, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-gray-200 last:border-b-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClick,
                className: "flex items-center justify-between w-full py-4 sm:py-5 md:py-6 text-left hover:bg-gray-50/50 px-3 sm:px-4 rounded-lg transition-colors cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm sm:text-base md:text-lg font-semibold text-gray-900 pr-3 sm:pr-6 md:pr-8 leading-relaxed",
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2163,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg sm:text-xl md:text-2xl text-green-600 flex-shrink-0 ml-2",
                        children: isOpen ? '−' : '+'
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2166,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2159,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-4 sm:pb-5 md:pb-6 px-3 sm:px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base",
                    children: answer
                }, void 0, false, {
                    fileName: "[project]/app/web-hosting/page.tsx",
                    lineNumber: 2172,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 2158,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = FAQItem;
// SEO Metadata Component
const SEOMetadata = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "2025 Web Hosting Comparison - Best Deals & Reviews | DigiCompares"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2181,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "description",
                content: "Comprehensive 2025 web hosting comparison. Get Hostinger at $1.99/mo, 85% OFF. Compare performance, features, and prices of top hosting providers including Bluehost, SiteGround, A2 Hosting, Cloudways, and WP Engine."
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2182,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "keywords",
                content: "web hosting, hosting comparison, best hosting 2025, Hostinger, Bluehost, SiteGround, A2 Hosting, Cloudways, WP Engine, cheap hosting, WordPress hosting"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2186,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2187,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "robots",
                content: "index, follow"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2188,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:title",
                content: "2025 Web Hosting Comparison - Best Deals & Reviews | DigiCompares"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2191,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:description",
                content: "Get Hostinger at $1.99/mo with 85% OFF. Compare 2025's best hosting providers with performance data and expert reviews."
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2192,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:type",
                content: "website"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2193,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:url",
                content: "https://digicompares.com/web-hosting-comparison"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2194,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:image",
                content: "https://digicompares.com/images/hosting-comparison-2025.jpg"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2195,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:site_name",
                content: "DigiCompares"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2196,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2199,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:title",
                content: "2025 Web Hosting Comparison - Best Deals & Reviews"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2200,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:description",
                content: "Comprehensive hosting comparison with real performance data. Get Hostinger at $1.99/mo with exclusive coupon."
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2201,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:image",
                content: "https://digicompares.com/images/hosting-comparison-2025.jpg"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2202,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:site",
                content: "@digicompares"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2203,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "canonical",
                href: "https://digicompares.com/web-hosting-comparison"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2206,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(structuredData)
                }
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2209,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqStructuredData)
                }
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2213,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 2180,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = SEOMetadata;
function ProfessionalHostingComparison() {
    _s1();
    const [openFAQ, setOpenFAQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visibleProviders, setVisibleProviders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const [clickCounts, setClickCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const tableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch click counts on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfessionalHostingComparison.useEffect": ()=>{
            const fetchClickCounts = {
                "ProfessionalHostingComparison.useEffect.fetchClickCounts": async ()=>{
                    try {
                        const response = await fetch('/api/track-click');
                        const data = await response.json();
                        setClickCounts(data.counts);
                    } catch (error) {
                        console.error('Error fetching click counts:', error);
                    }
                }
            }["ProfessionalHostingComparison.useEffect.fetchClickCounts"];
            fetchClickCounts();
            // Refresh counts every 30 seconds
            const interval = setInterval(fetchClickCounts, 30000);
            return ({
                "ProfessionalHostingComparison.useEffect": ()=>clearInterval(interval)
            })["ProfessionalHostingComparison.useEffect"];
        }
    }["ProfessionalHostingComparison.useEffect"], []);
    const scrollToTable = ()=>{
        tableRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    const toggleFAQ = (index)=>{
        setOpenFAQ(openFAQ === index ? null : index);
    };
    const showMoreProviders = ()=>{
        setVisibleProviders(hostingProviders.length);
    };
    const maxResponseTime = Math.max(...performanceData.responseTimes.map((p)=>p.time));
    const maxUptime = Math.max(...performanceData.uptime.map((p)=>p.uptime));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SEOMetadata, {}, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 py-2 sm:py-3 px-3 sm:px-4 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 sm:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/20 p-1 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-base sm:text-lg",
                                                    children: "🔥"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2270,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2269,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-white font-bold text-xs sm:text-sm md:text-base leading-tight",
                                                        children: "Hostinger 2025 Special - 85% OFF + Free Features!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2273,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/90 text-xs hidden sm:block",
                                                        children: "Limited time: Get Hostinger for $1.99/mo with exclusive coupon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2276,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2272,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 sm:gap-3 flex-wrap justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountdownTimer, {}, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2282,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CouponButton, {
                                                size: "small",
                                                provider: "Hostinger"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2283,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AffiliateLink, {
                                                href: HOSTINGER_AFFILIATE,
                                                provider: "Hostinger",
                                                className: "bg-white text-red-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors text-xs sm:text-sm whitespace-nowrap shadow-lg cursor-pointer",
                                                children: "Claim Offer →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2284,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2281,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 2267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full -translate-x-8 -translate-y-8 sm:-translate-x-10 sm:-translate-y-10"
                            }, void 0, false, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 2294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full translate-x-6 translate-y-6 sm:translate-x-8 sm:translate-y-8"
                            }, void 0, false, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 2295,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 sm:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bold text-xs sm:text-sm",
                                                    children: "DC"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2304,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2303,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent",
                                                        children: "DigiCompares"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2307,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-600 font-medium hidden sm:block",
                                                        children: "2025 Hosting Reviews & Deals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2310,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2306,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2302,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 sm:gap-3 md:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#comparison",
                                                className: "text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors hidden md:block cursor-pointer",
                                                children: "Comparison"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2314,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#performance",
                                                className: "text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors hidden md:block cursor-pointer",
                                                children: "Performance"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2317,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#faq",
                                                className: "text-xs sm:text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors hidden sm:block cursor-pointer",
                                                children: "FAQ"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2320,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    trackClick('coupon', 'Hostinger');
                                                    window.open('/coupons', '_blank');
                                                },
                                                className: "text-xs sm:text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors hidden sm:block cursor-pointer",
                                                children: "🎫 Coupons"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2323,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CouponButton, {
                                                size: "small",
                                                provider: "Hostinger"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2332,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2313,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 2301,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 2300,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "relative min-h-[85vh] flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/95"
                            }, void 0, false, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 2340,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
                            }, void 0, false, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 2341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto relative z-10 w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold text-white mb-4 sm:mb-6 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2345,
                                                    columnNumber: 17
                                                }, this),
                                                "🏆 #1 RATED HOSTING 2025"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight",
                                            children: [
                                                "Premium Web Hosting",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
                                                    children: "Starts at $1.99"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2351,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2",
                                            children: "Get enterprise-grade performance, 200GB NVMe storage, and 8 global data centers - all starting at just $1.99/month with our exclusive coupon."
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2356,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto mb-6 sm:mb-8 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustBadge, {
                                                    icon: "⚡",
                                                    text: "160ms Speed",
                                                    subtext: "Lightning Fast"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2363,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustBadge, {
                                                    icon: "🌍",
                                                    text: "8 Data Centers",
                                                    subtext: "Global Network"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2364,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustBadge, {
                                                    icon: "🛡️",
                                                    text: "99.99% Uptime",
                                                    subtext: "Maximum Reliability"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2365,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustBadge, {
                                                    icon: "💬",
                                                    text: "4.9/5 Support",
                                                    subtext: "24/7 Expert Help"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2366,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2362,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center max-w-2xl mx-auto px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AffiliateLink, {
                                                    href: HOSTINGER_AFFILIATE,
                                                    provider: "Hostinger",
                                                    className: "inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-xl w-full sm:w-auto justify-center cursor-pointer",
                                                    children: [
                                                        "🚀 Get Hostinger - $1.99/mo",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-white/20 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs",
                                                            children: "85% OFF"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2376,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2370,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CouponButton, {
                                                    size: "medium",
                                                    provider: "Hostinger",
                                                    className: "w-full sm:w-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2378,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: scrollToTable,
                                                    className: "inline-flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base w-full sm:w-auto justify-center cursor-pointer",
                                                    children: "📊 Compare All Providers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2379,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2369,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 mt-3 sm:mt-4 text-xs sm:text-sm px-2",
                                            children: "🎁 Free Domain + $200 worth of premium features included"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2387,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2343,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 2342,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-bounce bg-white/20 p-1.5 sm:p-2 rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1 h-2 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2397,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2396,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2395,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 2394,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid lg:grid-cols-2 gap-6 sm:gap-8 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2.5 py-1 rounded-full text-xs font-bold mb-3 sm:mb-4",
                                                children: "🏅 EDITOR'S CHOICE 2025"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2408,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4",
                                                children: "Why Hostinger Dominates 2025"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2412,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed",
                                                children: "Hostinger continues to lead the hosting industry with unbeatable performance, comprehensive features, and exceptional value. With 160ms response times, 200GB NVMe storage, and 8 global data centers, it outperforms competitors costing significantly more."
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2416,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 sm:space-y-4 mb-4 sm:mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2 sm:gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-sm sm:text-lg",
                                                                    children: "⚡"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                                    lineNumber: 2426,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2425,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-bold text-gray-900 text-sm sm:text-base mb-1",
                                                                        children: "Lightning Fast Performance"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2429,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 text-xs sm:text-sm",
                                                                        children: "160ms response times with LiteSpeed servers and global edge caching."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2430,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2428,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2424,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2 sm:gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-sm sm:text-lg",
                                                                    children: "🌍"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                                    lineNumber: 2438,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2437,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-bold text-gray-900 text-sm sm:text-base mb-1",
                                                                        children: "Global Infrastructure"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2441,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 text-xs sm:text-sm",
                                                                        children: "8 strategically located data centers ensure optimal performance worldwide."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2442,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2440,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2436,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2 sm:gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-sm sm:text-lg",
                                                                    children: "🛡️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                                    lineNumber: 2450,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2449,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-bold text-gray-900 text-sm sm:text-base mb-1",
                                                                        children: "Enterprise Security"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2453,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-700 text-xs sm:text-sm",
                                                                        children: "Advanced threat detection, WAF protection, and automated security monitoring."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2454,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2452,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2448,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2423,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap=2 sm:gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AffiliateLink, {
                                                        href: HOSTINGER_AFFILIATE,
                                                        provider: "Hostinger",
                                                        className: "inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm justify-center cursor-pointer",
                                                        children: "🚀 Get Hostinger - $1.99/mo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2462,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CouponButton, {
                                                        size: "small",
                                                        provider: "Hostinger"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2469,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2461,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2407,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl sm:shadow-2xl border border-gray-200/50 mt-6 lg:mt-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center mb-4 sm:mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl sm:text-4xl mb-2 sm:mb-3",
                                                        children: "🏆"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2475,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg sm:text-xl font-bold text-gray-900 mb-1",
                                                        children: "Hostinger 2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2476,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-xs sm:text-sm",
                                                        children: "Premium Web Hosting"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2477,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2474,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 sm:space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2.5 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-900 text-xs sm:text-sm",
                                                                children: "Starting Price"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2482,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-base sm:text-lg font-bold text-green-600",
                                                                        children: "$1.99/mo"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2484,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-gray-600 line-through",
                                                                        children: "$12.99/mo"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2485,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2483,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2481,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2.5 sm:p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-900 text-xs sm:text-sm",
                                                                children: "Performance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2490,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base sm:text-lg font-bold text-blue-600",
                                                                children: "160ms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2491,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2489,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2.5 sm:p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-900 text-xs sm:text-sm",
                                                                children: "Uptime"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2495,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base sm:text-lg font-bold text-purple-600",
                                                                children: "99.99%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2496,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2494,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2.5 sm:p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-900 text-xs sm:text-sm",
                                                                children: "Support Rating"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2500,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-base sm:text-lg font-bold text-orange-600",
                                                                children: "4.9/5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2501,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2499,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-2.5 sm:p-3 text-white text-center shadow-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-xs sm:text-sm",
                                                                children: "$200+ Value Included Free"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2505,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs opacity-90",
                                                                children: "Domain, SSL, and Premium Features"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2506,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2504,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-2.5 sm:p-3 text-white text-center shadow-lg border-2 border-purple-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-xs sm:text-sm",
                                                                children: "🎫 Extra Savings Available!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2510,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs opacity-90",
                                                                children: "Use coupon code for additional discount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2511,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CouponButton, {
                                                                size: "small",
                                                                provider: "Hostinger",
                                                                className: "mt-1.5 sm:mt-2 w-full bg-white text-purple-600 hover:bg-gray-100 text-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2512,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2509,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2480,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2473,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 2406,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 2405,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "performance",
                        className: "py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-8 sm:mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3",
                                            children: "2025 Performance Benchmarks"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2524,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-gray-600 max-w-3xl mx-auto",
                                            children: "Real-world performance testing based on 2025 hosting infrastructure"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2527,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2523,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4",
                                                    children: "Server Response Times"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2534,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 sm:space-y-3",
                                                    children: performanceData.responseTimes.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PerformanceBar, {
                                                            provider: item.provider,
                                                            time: item.time,
                                                            maxTime: maxResponseTime,
                                                            color: item.color
                                                        }, index, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2537,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2535,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mt-2 sm:mt-3 text-xs",
                                                    children: "Lower response times = Better user experience and SEO rankings"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2546,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2533,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4",
                                                    children: "Uptime Performance"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2552,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 sm:space-y-3",
                                                    children: performanceData.uptime.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PerformanceBar, {
                                                            provider: item.provider,
                                                            time: item.uptime,
                                                            maxTime: maxUptime,
                                                            color: item.color,
                                                            isUptime: true
                                                        }, index, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2555,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2553,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mt-2 sm:mt-3 text-xs",
                                                    children: "Higher uptime = More reliable website availability and business continuity"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2565,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2551,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2532,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-3 sm:p-4 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg sm:text-xl font-bold mb-1",
                                                    children: "160ms"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2574,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-green-100 text-xs",
                                                    children: "Hostinger Response"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2575,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2573,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl p-3 sm:p-4 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg sm:text-xl font-bold mb-1",
                                                    children: "99.99%"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2578,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-blue-100 text-xs",
                                                    children: "Hostinger Uptime"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2579,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2577,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl p-3 sm:p-4 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg sm:text-xl font-bold mb-1",
                                                    children: "4.9/5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2582,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-purple-100 text-xs",
                                                    children: "Support Rating"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2583,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2581,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl p-3 sm:p-4 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg sm:text-xl font-bold mb-1",
                                                    children: "8"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2586,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-indigo-100 text-xs",
                                                    children: "Global Data Centers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2587,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2585,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2572,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 2522,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2521,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "comparison",
                        ref: tableRef,
                        className: "py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-8 sm:mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3",
                                            children: "2025 Comprehensive Hosting Comparison"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2597,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-gray-600 max-w-3xl mx-auto",
                                            children: "Detailed analysis of all major hosting providers with 2025 features and performance metrics"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2600,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2596,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-gradient-to-r from-slate-800 to-gray-900 text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 sm:px-6 py-4 sm:py-6 text-left font-bold text-sm sm:text-lg",
                                                                children: "Features"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2611,
                                                                columnNumber: 23
                                                            }, this),
                                                            hostingProviders.slice(0, visibleProviders).map((provider)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: `px-3 sm:px-4 py-4 sm:py-6 text-center font-bold text-sm sm:text-lg ${provider.rank === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-600' : ''}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-2xl sm:text-3xl mb-1 sm:mb-2",
                                                                                "aria-label": `${provider.name} logo`,
                                                                                children: provider.logo
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                                lineNumber: 2617,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-base sm:text-xl font-bold mb-1",
                                                                                children: provider.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                                lineNumber: 2618,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            provider.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold ${provider.rank === 1 ? 'bg-yellow-400 text-yellow-900' : 'bg-gray-200 text-gray-700'}`,
                                                                                children: provider.badge
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                                lineNumber: 2620,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2616,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, provider.id, false, {
                                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                                    lineNumber: 2613,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2610,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2609,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        comparisonFeatures.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureRow, {
                                                                feature: feature,
                                                                providers: hostingProviders.slice(0, visibleProviders)
                                                            }, feature.key, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2635,
                                                                columnNumber: 23
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 sm:px-6 py-4 sm:py-6 font-bold text-gray-900 bg-gray-50 text-sm sm:text-lg",
                                                                    children: "Get Started"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                                    lineNumber: 2638,
                                                                    columnNumber: 23
                                                                }, this),
                                                                hostingProviders.slice(0, visibleProviders).map((provider)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 sm:px-4 py-4 sm:py-6 text-center bg-gray-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AffiliateLink, {
                                                                                href: provider.affiliate,
                                                                                provider: provider.name,
                                                                                className: `inline-block px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-bold text-white transition-all duration-300 text-xs sm:text-sm cursor-pointer ${provider.rank === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-xl hover:scale-105 shadow-lg' : 'bg-gray-600 hover:bg-gray-700'}`,
                                                                                children: provider.rank === 1 ? '🚀 Get Hostinger' : `Visit ${provider.name}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                                lineNumber: 2643,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            provider.rank === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1.5 sm:mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CouponButton, {
                                                                                    size: "small",
                                                                                    provider: "Hostinger",
                                                                                    className: "w-full text-xs"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                                                    lineNumber: 2656,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                                lineNumber: 2655,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, provider.id, true, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2642,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2637,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2633,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2608,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2607,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2606,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:hidden space-y-4 sm:space-y-6",
                                    children: hostingProviders.slice(0, visibleProviders).map((provider)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-3 sm:p-4 ${provider.rank === 1 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3 sm:mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 sm:gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-2xl sm:text-3xl",
                                                                        "aria-label": `${provider.name} logo`,
                                                                        children: provider.logo
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2674,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-lg sm:text-xl font-bold text-gray-900",
                                                                                children: provider.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                                lineNumber: 2676,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-yellow-500 text-sm sm:text-lg",
                                                                                        children: "⭐"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                                        lineNumber: 2678,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xs sm:text-sm text-gray-600",
                                                                                        children: [
                                                                                            provider.rating,
                                                                                            " (",
                                                                                            provider.reviews,
                                                                                            ")"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                                        lineNumber: 2679,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                                lineNumber: 2677,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2675,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2673,
                                                                columnNumber: 23
                                                            }, this),
                                                            provider.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold ${provider.rank === 1 ? 'bg-yellow-400 text-yellow-900' : 'bg-gray-200 text-gray-700'}`,
                                                                children: provider.badge
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2686,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2672,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 sm:mb-4 p-2.5 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-baseline gap-1.5 sm:gap-2 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl sm:text-2xl font-bold text-gray-900",
                                                                        children: provider.price
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2699,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-base sm:text-lg text-gray-500 line-through",
                                                                        children: provider.originalPrice
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2700,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-gradient-to-r from-green-500 to-emerald-600 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold",
                                                                        children: provider.discount
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2701,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2698,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600 text-xs sm:text-sm",
                                                                children: [
                                                                    "Renews at ",
                                                                    provider.renewalPrice,
                                                                    "/mo"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2705,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2697,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center p-2 sm:p-3 bg-gray-50 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-600",
                                                                        children: "Storage"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2711,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-bold text-gray-900 text-xs sm:text-sm",
                                                                        children: provider.storage
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2712,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2710,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center p-2 sm:p-3 bg-gray-50 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-600",
                                                                        children: "Performance"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2715,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-bold text-gray-900 text-xs sm:text-sm",
                                                                        children: provider.performance
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                                        lineNumber: 2716,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2714,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2709,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AffiliateLink, {
                                                        href: provider.affiliate,
                                                        provider: provider.name,
                                                        className: `w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-bold text-center block transition-all duration-300 text-xs sm:text-sm cursor-pointer ${provider.rank === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-xl hover:scale-105 text-white shadow-lg' : 'bg-gray-900 hover:bg-gray-800 text-white'}`,
                                                        children: provider.rank === 1 ? '🚀 Get Hostinger' : `Visit ${provider.name}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2721,
                                                        columnNumber: 21
                                                    }, this),
                                                    provider.rank === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2.5 sm:mt-3 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CouponButton, {
                                                            size: "small",
                                                            provider: "Hostinger",
                                                            className: "w-full text-xs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2736,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2735,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2671,
                                                columnNumber: 19
                                            }, this)
                                        }, provider.id, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2670,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2668,
                                    columnNumber: 13
                                }, this),
                                visibleProviders < hostingProviders.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-6 sm:mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: showMoreProviders,
                                        className: "px-4 py-2.5 sm:px-6 sm:py-3 bg-white text-gray-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300 border-2 border-gray-300 text-xs sm:text-sm cursor-pointer",
                                        children: [
                                            "Show All ",
                                            hostingProviders.length,
                                            " Providers"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2746,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2745,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 2595,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "faq",
                        className: "py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-8 sm:mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3",
                                            children: "2025 Hosting FAQ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2761,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-gray-600",
                                            children: "Everything you need to know about modern web hosting"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2764,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2760,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200",
                                    children: faqData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQItem, {
                                            question: item.question,
                                            answer: item.answer,
                                            isOpen: openFAQ === index,
                                            onClick: ()=>toggleFAQ(index)
                                        }, index, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2771,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2769,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 sm:mt-12 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg border-2 border-purple-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg sm:text-xl font-bold mb-1.5 sm:mb-2",
                                                children: "🎫 Exclusive 2025 Coupon Available!"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2784,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm",
                                                children: "Get additional savings on your Hostinger plan with our special coupon code"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2785,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CouponButton, {
                                                size: "medium",
                                                provider: "Hostinger",
                                                className: "bg-white text-purple-600 hover:bg-gray-100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2788,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2783,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2782,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 2759,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2758,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 sm:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-red-500 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg sm:text-xl mb-1 sm:mb-2",
                                                        children: "🚀 2025 Limited Time Offer!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2800,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/90 text-xs sm:text-sm",
                                                        children: "Hostinger with 85% discount - Only $1.99/month with exclusive coupon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2801,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2799,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap=2 sm:gap-3 md:gap-4 flex-wrap justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountdownTimer, {}, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2806,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CouponButton, {
                                                        size: "small",
                                                        provider: "Hostinger"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2807,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2805,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2798,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2797,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4",
                                    children: "Ready for Premium Hosting?"
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2812,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed",
                                    children: "Join thousands of websites upgrading to high-performance hosting in 2025. Experience enterprise-grade performance with budget-friendly pricing."
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2816,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-white/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-white text-sm sm:text-base mb-2 sm:mb-3",
                                                    children: "⚡ Premium Features"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2823,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "text-gray-300 space-y-1 sm:space-y-2 text-xs sm:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• 200GB NVMe Storage"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2825,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• 8 Global Data Centers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2826,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Free Domain & SSL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2827,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• LiteSpeed Servers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2828,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2824,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2822,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-white/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-white text-sm sm:text-base mb-2 sm:mb-3",
                                                    children: "💰 2025 Pricing"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2833,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "text-gray-300 space-y-1 sm:space-y-2 text-xs sm:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• 85% Discount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2835,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• 30-day Money-back"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2836,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• Free Website Migration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2837,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: "• No Hidden Fees"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2838,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2834,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2832,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-3 sm:p-4 text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-sm sm:text-base mb-2 sm:mb-3",
                                                    children: "🚀 Special 2025 Deal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2843,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl sm:text-2xl font-bold mb-1",
                                                    children: "$1.99/mo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2844,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-green-100 text-xs",
                                                    children: "85% OFF Regular Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2845,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 sm:mt-3 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Free Features Included"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2847,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "30-day money-back guarantee"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2848,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2846,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2842,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2821,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap=2 sm:gap-3 md:gap-4 justify-center items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AffiliateLink, {
                                            href: HOSTINGER_AFFILIATE,
                                            provider: "Hostinger",
                                            className: "inline-flex items-center gap=2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-xl w-full sm:w-auto justify-center cursor-pointer",
                                            children: "🚀 Get Hostinger - $1.99/mo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2854,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CouponButton, {
                                            size: "large",
                                            provider: "Hostinger",
                                            className: "w-full sm:w-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2861,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2853,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 mt-4 sm:mt-6 text-xs sm:text-sm",
                                    children: "⚡ Premium features included • 🔒 30-day money-back guarantee • 🌍 8 global data centers"
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2864,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 2796,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2795,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8 bg-slate-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center",
                                        children: "📝 Important Legal Disclaimers"
                                    }, void 0, false, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2874,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 sm:space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-red-400 mb-2 sm:mb-3 text-sm sm:text-base",
                                                        children: "🛑 Financial & Affiliate Disclosure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2878,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-xs sm:text-sm leading-relaxed",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "DigiCompares"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2880,
                                                                columnNumber: 21
                                                            }, this),
                                                            " is an independent review platform and participates in various affiliate marketing programs. We may receive compensation when you click on links to products and services and make purchases through our provided affiliate links. This compensation helps support our research, testing, and content creation."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2879,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2877,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-yellow-400 mb-2 sm:mb-3 text-sm sm:text-base",
                                                        children: "⚠️ No Financial Responsibility"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2887,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-xs sm:text-sm leading-relaxed",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "DigiCompares is not responsible for any financial decisions, purchases, or outcomes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2889,
                                                                columnNumber: 21
                                                            }, this),
                                                            " resulting from the use of our website, recommendations, or affiliate links. All hosting purchases and financial commitments are made solely at your own risk. We provide information for educational purposes only and do not constitute financial advice."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2888,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2886,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-blue-400 mb-2 sm:mb-3 text-sm sm:text-base",
                                                        children: "🔍 Accuracy of Information"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2897,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-xs sm:text-sm leading-relaxed",
                                                        children: [
                                                            "While we strive to provide accurate and up-to-date information, hosting provider specifications, pricing, and features change frequently. ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Always verify current pricing and terms directly with the hosting provider"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2900,
                                                                columnNumber: 53
                                                            }, this),
                                                            "before making any purchase. The information on this page was last verified in 2025 and may be subject to change."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2898,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2896,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-green-400 mb-2 sm:mb-3 text-sm sm:text-base",
                                                        children: "⚖️ Professional Advice Disclaimer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2906,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-xs sm:text-sm leading-relaxed",
                                                        children: [
                                                            "Our content is for informational purposes only and should not be considered as professional financial, legal, or technical advice. ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Consult with appropriate professionals"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2909,
                                                                columnNumber: 49
                                                            }, this),
                                                            " for advice tailored to your specific situation. Your use of this website constitutes acceptance of our Terms of Service and Privacy Policy."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2907,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2905,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-purple-400 mb-2 sm:mb-3 text-sm sm:text-base",
                                                        children: "💰 Pricing & Offers Disclosure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2915,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-xs sm:text-sm leading-relaxed",
                                                        children: [
                                                            "All prices shown are introductory offers for the first billing period only. ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Renewal prices are typically higher"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2917,
                                                                columnNumber: 97
                                                            }, this),
                                                            "and vary by provider. Free domain offers usually apply to the first year only. Always read the terms and conditions of any hosting provider before making a purchase decision."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2916,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2914,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-red-900/20 border border-red-800 rounded-lg p-3 sm:p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-red-300 mb-1.5 sm:mb-2 text-sm sm:text-base",
                                                        children: "🚨 Investment Risk Warning"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2924,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-200 text-xs sm:text-sm",
                                                        children: [
                                                            "Web hosting services involve ongoing financial commitments. ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "There is no guarantee of business success, website traffic, or revenue generation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2926,
                                                                columnNumber: 81
                                                            }, this),
                                                            " simply by purchasing hosting services. All business investments carry risk, and you should only invest what you can afford to lose."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2925,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2923,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2876,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 text-xs text-center",
                                                children: [
                                                    "© 2025 DigiCompares. All rights reserved. |",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white ml-1 sm:ml-2 cursor-pointer",
                                                        children: "Privacy Policy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2936,
                                                        columnNumber: 19
                                                    }, this),
                                                    " |",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white ml-1 sm:ml-2 cursor-pointer",
                                                        children: "Terms of Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2937,
                                                        columnNumber: 19
                                                    }, this),
                                                    " |",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white ml-1 sm:ml-2 cursor-pointer",
                                                        children: "Affiliate Disclosure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2938,
                                                        columnNumber: 19
                                                    }, this),
                                                    " |",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-white ml-1 sm:ml-2 cursor-pointer",
                                                        children: "Contact Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/web-hosting/page.tsx",
                                                        lineNumber: 2939,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2934,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-xs text-center mt-1.5 sm:mt-2",
                                                children: "DigiCompares is not affiliated with, endorsed by, or sponsored by any hosting providers mentioned on this site. All trademarks, logos and brand names are the property of their respective owners."
                                            }, void 0, false, {
                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                lineNumber: 2941,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 2933,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 2873,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 2872,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2871,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "bg-slate-900 text-gray-400 py-6 sm:py-8 px-3 sm:px-4 md:px-6 lg:px-8 border-t border-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white font-bold text-xs sm:text-sm",
                                                                children: "DC"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2957,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2956,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-bold text-base sm:text-lg",
                                                            children: "DigiCompares"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2959,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2955,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 leading-relaxed text-xs sm:text-sm",
                                                    children: "Your trusted source for comprehensive web hosting reviews and deals. We provide data-driven insights to help you make informed decisions in 2025."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2961,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2954,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-white mb-2 sm:mb-3 sm:mb-4 text-sm sm:text-base",
                                                    children: "Quick Links"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2967,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-1 sm:space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#comparison",
                                                                className: "hover:text-white transition-colors text-xs sm:text-sm cursor-pointer",
                                                                children: "2025 Comparison"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2969,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2969,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#performance",
                                                                className: "hover:text-white transition-colors text-xs sm:text-sm cursor-pointer",
                                                                children: "Performance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2970,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2970,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#faq",
                                                                className: "hover:text-white transition-colors text-xs sm:text-sm cursor-pointer",
                                                                children: "2025 FAQ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2971,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2971,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    trackClick('coupon', 'Hostinger');
                                                                    window.open('/coupons', '_blank');
                                                                },
                                                                className: "hover:text-white transition-colors text-xs sm:text-sm cursor-pointer",
                                                                children: "🎫 2025 Coupons"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2972,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2972,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2968,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2966,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-white mb-2 sm:mb-3 sm:mb-4 text-sm sm:text-base",
                                                    children: "Top Hosting"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2979,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-1 sm:space-y-2",
                                                    children: hostingProviders.map((provider)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AffiliateLink, {
                                                                href: provider.affiliate,
                                                                provider: provider.name,
                                                                className: "hover:text-white transition-colors text-xs sm:text-sm cursor-pointer",
                                                                children: provider.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2983,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, provider.id, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2982,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2980,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2978,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-white mb-2 sm:mb-3 sm:mb-4 text-sm sm:text-base",
                                                    children: "Legal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2995,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-1 sm:space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition-colors text-xs sm:text-sm cursor-pointer",
                                                                children: "Privacy Policy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2997,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2997,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition-colors text-xs sm:text-sm cursor-pointer",
                                                                children: "Terms of Service"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2998,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2998,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition-colors text-xs sm:text-sm cursor-pointer",
                                                                children: "Affiliate Disclosure"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 2999,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 2999,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition-colors text-xs sm:text-sm cursor-pointer",
                                                                children: "Cookie Policy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/web-hosting/page.tsx",
                                                                lineNumber: 3000,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/web-hosting/page.tsx",
                                                            lineNumber: 3000,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 2996,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 2994,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 2953,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-slate-800 pt-4 sm:pt-6 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-xs",
                                            children: "© 2025 DigiCompares. All rights reserved. We may earn affiliate commissions when you make purchases through our links. This helps support our independent research and testing. All data is verified for 2025."
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 3006,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClickCountsDisplay, {
                                            counts: clickCounts
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 3012,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-xs mt-1.5 sm:mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Disclaimer:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/web-hosting/page.tsx",
                                                    lineNumber: 3015,
                                                    columnNumber: 17
                                                }, this),
                                                " DigiCompares is not responsible for any financial decisions or purchases made through our affiliate links. All hosting purchases are made at your own risk. Please review our full disclaimer above."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 3014,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 3005,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 2952,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 2951,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 2264,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(ProfessionalHostingComparison, "3r3uod8/RwGbarepr5KIFu3p2kA=");
_c9 = ProfessionalHostingComparison;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "CouponButton");
__turbopack_context__.k.register(_c1, "AffiliateLink");
__turbopack_context__.k.register(_c2, "ClickCountsDisplay");
__turbopack_context__.k.register(_c3, "CountdownTimer");
__turbopack_context__.k.register(_c4, "TrustBadge");
__turbopack_context__.k.register(_c5, "PerformanceBar");
__turbopack_context__.k.register(_c6, "FeatureRow");
__turbopack_context__.k.register(_c7, "FAQItem");
__turbopack_context__.k.register(_c8, "SEOMetadata");
__turbopack_context__.k.register(_c9, "ProfessionalHostingComparison");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_web-hosting_page_tsx_381be1de._.js.map