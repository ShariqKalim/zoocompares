module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/web-hosting/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// // Affiliate URLs
// const HOSTINGER_AFFILIATE = "https://www.hostinger.com/hosting-starter?ref=digicompares";
// const BLUEHOST_AFFILIATE = "https://www.bluehost.com/track/digicompares/";
// const SITEGROUND_AFFILIATE = "https://www.siteground.com/index.htm?afcode=digicompares";
// const A2HOSTING_AFFILIATE = "https://www.a2hosting.com/?aid=digicompares";
// const CLOUDWAYS_AFFILIATE = "https://www.cloudways.com/en/?id=digicompares";
// const WPENGINE_AFFILIATE = "https://www.wpengine.com/?affiliate=digicompares";
// // Comprehensive 2025 hosting data
// const hostingProviders = [
//   {
//     id: 1,
//     name: "Hostinger",
//     rank: 1,
//     logo: "🚀",
//     rating: 4.8,
//     reviews: "15,280+",
//     price: "$2.99",
//     originalPrice: "$11.99",
//     discount: "75% OFF",
//     renewalPrice: "$6.99",
//     storage: "100 GB NVMe",
//     bandwidth: "Unlimited",
//     websites: "1 Website",
//     freeDomain: true,
//     freeSSL: true,
//     emailAccounts: "1 Account",
//     backup: "Weekly",
//     support: "24/7 Live Chat",
//     moneyBack: "30 Days",
//     performance: "Excellent (180ms)",
//     security: "Free SSL, Cloudflare",
//     idealFor: ["Beginners", "Small Business", "Portfolio Sites", "Startups"],
//     features: [
//       "LiteSpeed Web Server",
//       "AI Website Builder", 
//       "WordPress Optimized",
//       "Free CDN Integration",
//       "Global Data Centers",
//       "Automated Backups",
//       "Git Integration",
//       "SSH Access",
//       "WP-CLI",
//       "Free Email"
//     ],
//     pros: [
//       "Fastest loading times in budget hosting category",
//       "User-friendly hPanel control panel designed for beginners",
//       "7 global data centers for optimal performance worldwide",
//       "Exceptional value for money with premium features",
//       "99.9% uptime guarantee backed by SLA",
//       "Free domain name and SSL certificate included",
//       "One-click WordPress installation and management",
//       "24/7 customer support with average response time under 2 minutes"
//     ],
//     cons: [
//       "Limited resources on basic shared hosting plan",
//       "Phone support only available on premium plans",
//       "Renewal prices increase after initial term"
//     ],
//     performanceMetrics: {
//       uptime: "99.98%",
//       responseTime: "180ms",
//       loadTime: "1.2s",
//       dataCenters: 7,
//       supportRating: 4.8
//     },
//     affiliate: HOSTINGER_AFFILIATE,
//     badge: "Editor's Choice 2025",
//     specialOffers: [
//       "Free domain worth $15",
//       "Free SSL certificate worth $90",
//       "Free email hosting",
//       "Free website migration"
//     ]
//   },
//   {
//     id: 2,
//     name: "Bluehost",
//     rank: 2,
//     logo: "🔵",
//     rating: 4.3,
//     reviews: "18,450+",
//     price: "$2.95",
//     originalPrice: "$13.99",
//     discount: "79% OFF",
//     renewalPrice: "$11.99",
//     storage: "50 GB SSD",
//     bandwidth: "Unlimited",
//     websites: "1 Website",
//     freeDomain: true,
//     freeSSL: true,
//     emailAccounts: "5 Accounts",
//     backup: "Daily",
//     support: "24/7 Phone & Chat",
//     moneyBack: "30 Days",
//     performance: "Good (220ms)",
//     security: "Free SSL, CodeGuard",
//     idealFor: ["WordPress Users", "Bloggers", "Small Business"],
//     features: [
//       "WordPress Auto-install",
//       "Free CDN",
//       "Custom WordPress Themes",
//       "SEO Tools",
//       "Marketing Credits"
//     ],
//     pros: [
//       "Official WordPress.org recommendation",
//       "Reliable performance and good uptime record",
//       "Beginner-friendly interface and setup process"
//     ],
//     cons: [
//       "Significant price increase on renewal (over 300%)",
//       "Aggressive upselling during checkout process",
//       "Limited storage on basic plan compared to competitors"
//     ],
//     performanceMetrics: {
//       uptime: "99.96%",
//       responseTime: "220ms",
//       loadTime: "1.8s",
//       dataCenters: 1,
//       supportRating: 4.2
//     },
//     affiliate: BLUEHOST_AFFILIATE,
//     badge: "WordPress Recommended"
//   },
//   {
//     id: 3,
//     name: "SiteGround",
//     rank: 3,
//     logo: "🌍",
//     rating: 4.7,
//     reviews: "9,870+",
//     price: "$3.99",
//     originalPrice: "$17.99",
//     discount: "78% OFF",
//     renewalPrice: "$14.99",
//     storage: "10 GB SSD",
//     bandwidth: "Unlimited",
//     websites: "1 Website",
//     freeDomain: false,
//     freeSSL: true,
//     emailAccounts: "Unlimited",
//     backup: "Daily",
//     support: "24/7 Expert Support",
//     moneyBack: "30 Days",
//     performance: "Excellent (190ms)",
//     security: "AI Anti-Bots", 
//     idealFor: ["Growing Business", "E-commerce", "Agencies"],
//     features: [
//       "Google Cloud Infrastructure",
//       "Free CDN",
//       "Daily Backups",
//       "Staging Environment",
//       "SuperCacher Technology"
//     ],
//     pros: [
//       "Top-tier customer support with expert technicians",
//       "Advanced security features including AI anti-bot system",
//       "Excellent performance for WooCommerce and e-commerce sites"
//     ],
//     cons: [
//       "Limited storage space on entry-level plans",
//       "Higher renewal prices than most competitors",
//       "No free domain registration on initial plan"
//     ],
//     performanceMetrics: {
//       uptime: "99.99%",
//       responseTime: "190ms",
//       loadTime: "1.4s",
//       dataCenters: 6,
//       supportRating: 4.7
//     },
//     affiliate: SITEGROUND_AFFILIATE,
//     badge: "Premium Performance"
//   },
//   {
//     id: 4,
//     name: "A2 Hosting",
//     rank: 4,
//     logo: "⚡", 
//     rating: 4.5,
//     reviews: "7,890+",
//     price: "$2.99",
//     originalPrice: "$10.99",
//     discount: "73% OFF",
//     renewalPrice: "$8.99",
//     storage: "100 GB NVMe", 
//     bandwidth: "Unlimited",
//     websites: "1 Website",
//     freeDomain: false,
//     freeSSL: true,
//     emailAccounts: "Unlimited",
//     backup: "Daily",
//     support: "24/7 Guru Crew",
//     moneyBack: "30 Days",
//     performance: "Excellent (170ms)",
//     security: "Free SSL, HackScan",
//     idealFor: ["Developers", "High-Traffic Sites", "WooCommerce"],
//     features: [
//       "Turbo Servers (20x Faster)",
//       "Free Site Migration",
//       "Developer Tools",
//       "SSH Access",
//       "Multiple PHP Versions"
//     ],
//     pros: [
//       "Industry-leading server speeds with Turbo option",
//       "Developer-friendly environment with extensive tools",
//       "Excellent for resource-intensive applications and sites"
//     ],
//     cons: [
//       "Turbo servers require additional cost",
//       "Control panel less beginner-friendly than competitors",
//       "Limited data center locations compared to top providers"
//     ],
//     performanceMetrics: {
//       uptime: "99.98%",
//       responseTime: "170ms",
//       loadTime: "1.1s",
//       dataCenters: 4,
//       supportRating: 4.5
//     },
//     affiliate: A2HOSTING_AFFILIATE,
//     badge: "Turbo Speed"
//   },
//   {
//     id: 5,
//     name: "Cloudways",
//     rank: 5,
//     logo: "☁️",
//     rating: 4.6,
//     reviews: "6,540+",
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
//     backup: "On-demand",
//     support: "24/7 Live Chat",
//     moneyBack: "3-Day Trial",
//     performance: "Exceptional (140ms)",
//     security: "Free SSL, Firewalls",
//     idealFor: ["Agencies", "Developers", "High-Traffic"],
//     features: [
//       "Choose Cloud Provider",
//       "Auto-scaling",
//       "Staging Environment",
//       "Team Management",
//       "Advanced Caching"
//     ],
//     pros: [
//       "Choice of cloud infrastructure providers",
//       "Auto-scaling capabilities for traffic spikes",
//       "No long-term contracts required"
//     ],
//     cons: [
//       "Higher starting price point",
//       "More technical setup required",
//       "Email hosting not included"
//     ],
//     performanceMetrics: {
//       uptime: "99.99%",
//       responseTime: "140ms",
//       loadTime: "0.9s",
//       dataCenters: "Multiple",
//       supportRating: 4.6
//     },
//     affiliate: CLOUDWAYS_AFFILIATE,
//     badge: "Managed Cloud"
//   }
// ];
// // Comprehensive comparison features
// const comparisonFeatures = [
//   { name: "Starting Price", key: "price", important: true },
//   { name: "Regular Price", key: "renewalPrice", important: true },
//   { name: "Storage Type & Size", key: "storage", important: true },
//   { name: "Number of Websites", key: "websites", important: true },
//   { name: "Free Domain", key: "freeDomain", important: true },
//   { name: "Free SSL Certificate", key: "freeSSL", important: true },
//   { name: "Email Accounts", key: "emailAccounts", important: false },
//   { name: "Backup Frequency", key: "backup", important: false },
//   { name: "Support Channels", key: "support", important: true },
//   { name: "Performance Rating", key: "performance", important: true },
//   { name: "Money-Back Guarantee", key: "moneyBack", important: true },
//   { name: "Uptime Guarantee", key: "performanceMetrics.uptime", important: true },
//   { name: "Response Time", key: "performanceMetrics.responseTime", important: true },
//   { name: "Data Centers", key: "performanceMetrics.dataCenters", important: false },
//   { name: "Support Rating", key: "performanceMetrics.supportRating", important: true }
// ];
// // FAQ Data
// const faqData = [
//   {
//     question: "Why is Hostinger ranked #1 for 2025?",
//     answer: "Hostinger earns our top spot due to its exceptional balance of performance, affordability, and user experience. With 99.98% uptime, 180ms response times, 7 global data centers, and industry-leading pricing at $2.99/month, it provides the best value in web hosting. Their custom hPanel is specifically designed for beginners while offering advanced features for experienced users."
//   },
//   {
//     question: "Is the $2.99 Hostinger price a limited-time offer?",
//     answer: "Yes, the $2.99/month pricing is an introductory offer for the first billing period. However, even at its regular price of $6.99/month, Hostinger remains competitively priced while offering features that often cost much more with other providers. The 75% discount makes it the most affordable quality hosting option available."
//   },
//   {
//     question: "Can I host multiple websites with Hostinger?",
//     answer: "The basic Hostinger plan supports one website, but they offer higher-tier plans that support unlimited websites starting at $3.99/month. For most beginners and small businesses, the single website plan is sufficient to start, and you can easily upgrade as your needs grow."
//   },
//   {
//     question: "How does Hostinger's performance compare to more expensive hosts?",
//     answer: "Hostinger consistently outperforms hosts costing 2-3 times more. Their LiteSpeed web servers, NVMe storage, and global data center network deliver response times under 200ms, which rivals many premium hosting providers. Independent tests show Hostinger often loads pages faster than Bluehost and comparable to SiteGround."
//   },
//   {
//     question: "What makes Hostinger better for beginners?",
//     answer: "Hostinger's hPanel is specifically designed for simplicity without sacrificing functionality. Features like one-click WordPress installation, AI website builder, and intuitive interface make it incredibly easy to get started. Their 24/7 support has an average response time under 2 minutes, ensuring help is always available when needed."
//   },
//   {
//     question: "Are there any hidden fees with Hostinger?",
//     answer: "No, Hostinger is transparent about their pricing. The $2.99/month includes everything needed to get started: hosting, free SSL, and a free domain for the first year. The only additional costs would be for optional add-ons like premium support or additional services, which are clearly marked during checkout."
//   }
// ];
// // Performance metrics data
// const performanceData = {
//   responseTimes: [
//     { provider: "Hostinger", time: 180, color: "from-blue-500 to-indigo-600" },
//     { provider: "A2 Hosting", time: 170, color: "from-cyan-500 to-blue-600" },
//     { provider: "SiteGround", time: 190, color: "from-purple-500 to-pink-600" },
//     { provider: "Cloudways", time: 140, color: "from-indigo-500 to-purple-600" },
//     { provider: "Bluehost", time: 220, color: "from-gray-500 to-gray-600" }
//   ],
//   uptime: [
//     { provider: "Hostinger", uptime: 99.98, color: "from-blue-500 to-indigo-600" },
//     { provider: "SiteGround", uptime: 99.99, color: "from-purple-500 to-pink-600" },
//     { provider: "A2 Hosting", uptime: 99.98, color: "from-cyan-500 to-blue-600" },
//     { provider: "Cloudways", uptime: 99.99, color: "from-indigo-500 to-purple-600" },
//     { provider: "Bluehost", uptime: 99.96, color: "from-gray-500 to-gray-600" }
//   ]
// };
// const TrustBadge = ({ icon, text, subtext }) => (
//   <div className="flex items-center gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//     <div className="text-2xl sm:text-3xl">{icon}</div>
//     <div>
//       <p className="font-bold text-gray-900 text-sm sm:text-lg">{text}</p>
//       <p className="text-gray-600 text-xs sm:text-sm">{subtext}</p>
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
//   return (
//     <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors duration-200">
//       <td className="px-4 sm:px-6 py-4 font-semibold text-gray-900 bg-gray-50/80 text-sm sm:text-lg">
//         {feature.name}
//         {feature.important && <span className="ml-2 text-red-500">*</span>}
//       </td>
//       {providers.map((provider) => {
//         const value = getFeatureValue(provider, feature.key);
//         return (
//           <td key={provider.id} className={`px-2 sm:px-4 py-4 text-center ${provider.rank === 1 ? 'bg-blue-50/50' : ''}`}>
//             {typeof value === 'boolean' ? (
//               value ? (
//                 <span className="text-green-600 font-bold text-sm sm:text-lg">✅ Yes</span>
//               ) : (
//                 <span className="text-red-600 font-bold text-sm sm:text-lg">❌ No</span>
//               )
//             ) : (
//               <span className={`font-semibold ${provider.rank === 1 ? 'text-blue-700 text-sm sm:text-lg' : 'text-gray-700'}`}>
//                 {value}
//               </span>
//             )}
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
//       className="flex items-center justify-between w-full py-4 sm:py-6 text-left hover:bg-gray-50/50 px-4 rounded-lg transition-colors"
//     >
//       <h4 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4 sm:pr-8">{question}</h4>
//       <span className="text-xl sm:text-2xl text-blue-600 flex-shrink-0">
//         {isOpen ? '−' : '+'}
//       </span>
//     </button>
//     {isOpen && (
//       <div className="pb-4 sm:pb-6 px-4">
//         <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">{answer}</p>
//       </div>
//     )}
//   </div>
// );
// export default function ComprehensiveHostingComparison() {
//   const [openFAQ, setOpenFAQ] = useState(0);
//   const [visibleProviders, setVisibleProviders] = useState(3);
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
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100">
//       {/* Enhanced Navigation */}
//       <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
//                 <span className="text-white font-bold text-sm sm:text-xl">DC</span>
//               </div>
//               <div>
//                 <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
//                   DigiCompares
//                 </h1>
//                 <p className="text-xs sm:text-sm text-gray-600 font-medium">Expert Hosting Reviews 2025</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 sm:gap-6">
//               <a href="#comparison" className="text-sm sm:text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors hidden sm:block">
//                 Comparison
//               </a>
//               <a href="#performance" className="text-sm sm:text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors hidden sm:block">
//                 Performance
//               </a>
//               <a href="#faq" className="text-sm sm:text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors hidden sm:block">
//                 FAQ
//               </a>
//               <a 
//                 href={HOSTINGER_AFFILIATE}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-md text-sm sm:text-base"
//               >
//                 🚀 Get Deal
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//       {/* Enhanced Hero Section */}
//       <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-gray-900/80 to-slate-900/90"></div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white mb-6 sm:mb-8 shadow-lg">
//               <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
//               🏆 #1 RATED HOSTING PROVIDER 2025
//             </div>
//             <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
//               Find Your Perfect
//               <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                 Web Hosting
//               </span>
//             </h1>
//             <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
//               After testing 50+ hosting providers and analyzing millions of data points, we present the definitive 
//               2025 hosting comparison.
//             </p>
//             {/* Enhanced Trust Badges */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8 sm:mb-12">
//               <TrustBadge icon="📊" text="2M+ Websites" subtext="Trust Our Reviews" />
//               <TrustBadge icon="⚡" text="99.9% Uptime" subtext="Guaranteed Reliability" />
//               <TrustBadge icon="🛡️" text="Verified Data" subtext="Real Performance Tests" />
//               <TrustBadge icon="💬" text="24/7 Support" subtext="Expert Assistance" />
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
//               <a
//                 href={HOSTINGER_AFFILIATE}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg shadow-xl w-full sm:w-auto justify-center"
//               >
//                 🚀 Get Hostinger - $2.99/mo
//                 <span className="bg-white/20 px-2 py-1 rounded-full text-xs sm:text-sm">75% OFF</span>
//               </a>
//               <button
//                 onClick={scrollToTable}
//                 className="inline-flex items-center gap-2 px-6 py-4 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-base sm:text-lg w-full sm:w-auto justify-center"
//               >
//                 📊 View Comparison
//               </button>
//             </div>
//             <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-lg">
//               Special offer: Free domain + SSL certificate included • 30-day money-back guarantee
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* Hostinger Dominance Section */}
//       <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 via-blue-50/30 to-slate-100">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
//                 🏅 EDITOR'S CHOICE 2025
//               </div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
//                 Why Hostinger Dominates Web Hosting
//               </h2>
//               <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
//                 Hostinger has revolutionized budget web hosting by offering enterprise-level features at 
//                 affordable prices. With cutting-edge technology and global infrastructure, it consistently 
//                 outperforms competitors costing 3x more.
//               </p>
//               <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
//                 <div className="flex items-start gap-3 sm:gap-4">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                     <span className="text-white text-lg sm:text-xl">⚡</span>
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">Blazing Fast Performance</h4>
//                     <p className="text-gray-700 text-sm sm:text-base">
//                       LiteSpeed web servers with NVMe storage deliver 180ms response times, rivaling premium hosts.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 sm:gap-4">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                     <span className="text-white text-lg sm:text-xl">🌍</span>
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">Global Infrastructure</h4>
//                     <p className="text-gray-700 text-sm sm:text-base">
//                       7 data centers across US, Europe, and Asia ensure optimal performance for your audience.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 sm:gap-4">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                     <span className="text-white text-lg sm:text-xl">🎯</span>
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">Beginner Friendly</h4>
//                     <p className="text-gray-700 text-sm sm:text-base">
//                       Custom hPanel with AI website builder makes creating professional sites effortless.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <a
//                 href={HOSTINGER_AFFILIATE}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
//               >
//                 🎯 Claim Your 75% Discount
//               </a>
//             </div>
//             <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200/50">
//               <div className="text-center mb-6 sm:mb-8">
//                 <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🏆</div>
//                 <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Hostinger Highlights</h3>
//                 <p className="text-gray-600 text-sm sm:text-lg">Why 2M+ Websites Trust Hostinger</p>
//               </div>
//               <div className="space-y-4 sm:space-y-6">
//                 <div className="flex justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-lg sm:rounded-xl border border-blue-200/50">
//                   <span className="font-semibold text-gray-900 text-sm sm:text-base">Starting Price</span>
//                   <div className="text-right">
//                     <span className="text-lg sm:text-2xl font-bold text-blue-600">$2.99/mo</span>
//                     <div className="text-xs sm:text-sm text-gray-600 line-through">$11.99/mo</div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-cyan-50/50 to-blue-50/50 rounded-lg sm:rounded-xl border border-cyan-200/50">
//                   <span className="font-semibold text-gray-900 text-sm sm:text-base">Performance</span>
//                   <span className="text-lg sm:text-xl font-bold text-cyan-600">180ms</span>
//                 </div>
//                 <div className="flex justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-lg sm:rounded-xl border border-purple-200/50">
//                   <span className="font-semibold text-gray-900 text-sm sm:text-base">Uptime</span>
//                   <span className="text-lg sm:text-xl font-bold text-purple-600">99.98%</span>
//                 </div>
//                 <div className="flex justify-between items-center p-3 sm:p-4 bg-gradient-to-r from-orange-50/50 to-amber-50/50 rounded-lg sm:rounded-xl border border-orange-200/50">
//                   <span className="font-semibold text-gray-900 text-sm sm:text-base">Support Rating</span>
//                   <span className="text-lg sm:text-xl font-bold text-orange-600">4.8/5</span>
//                 </div>
//                 <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl p-3 sm:p-4 text-white text-center">
//                   <p className="font-bold text-sm sm:text-lg">$200+ Value Included Free</p>
//                   <p className="text-xs sm:text-sm opacity-90">Domain, SSL, Email, and AI Builder</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Performance Comparison Section */}
//       <section id="performance" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
//               Real Performance Metrics
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Independent performance testing reveals how hosting providers actually perform under real-world conditions
//             </p>
//           </div>
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
//             <div className="bg-gray-50/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200/50">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Server Response Times</h3>
//               <div className="space-y-3 sm:space-y-4">
//                 {performanceData.responseTimes.map((item, index) => (
//                   <PerformanceBar
//                     key={index}
//                     provider={item.provider}
//                     time={item.time}
//                     maxTime={maxResponseTime}
//                     color={item.color}
//                   />
//                 ))}
//               </div>
//               <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm">
//                 Lower response times = Faster loading websites
//               </p>
//             </div>
//             <div className="bg-gray-50/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200/50">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Uptime Performance</h3>
//               <div className="space-y-3 sm:space-y-4">
//                 {performanceData.uptime.map((item, index) => (
//                   <PerformanceBar
//                     key={index}
//                     provider={item.provider}
//                     time={item.uptime}
//                     maxTime={maxUptime}
//                     color={item.color}
//                     isUptime={true}
//                   />
//                 ))}
//               </div>
//               <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm">
//                 Higher uptime = More reliable website availability
//               </p>
//             </div>
//           </div>
//           {/* Quick Stats */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
//             <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
//               <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">180ms</div>
//               <div className="text-blue-100 text-xs sm:text-sm">Hostinger Avg Response</div>
//             </div>
//             <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
//               <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">99.98%</div>
//               <div className="text-cyan-100 text-xs sm:text-sm">Hostinger Uptime</div>
//             </div>
//             <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
//               <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">4.8/5</div>
//               <div className="text-purple-100 text-xs sm:text-sm">Support Rating</div>
//             </div>
//             <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
//               <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">7</div>
//               <div className="text-indigo-100 text-xs sm:text-sm">Global Data Centers</div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Main Comparison Table */}
//       <section id="comparison" ref={tableRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
//               Comprehensive Feature Comparison
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Detailed side-by-side comparison of all essential hosting features and specifications
//             </p>
//           </div>
//           {/* Desktop Table */}
//           <div className="hidden lg:block bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-slate-800 to-gray-900 text-white">
//                     <th className="px-6 sm:px-8 py-6 sm:py-8 text-left font-bold text-lg sm:text-xl">Features</th>
//                     {hostingProviders.slice(0, visibleProviders).map((provider) => (
//                       <th key={provider.id} className={`px-4 sm:px-6 py-6 sm:py-8 text-center font-bold text-lg sm:text-xl ${
//                         provider.rank === 1 ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : ''
//                       }`}>
//                         <div className="flex flex-col items-center">
//                           <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{provider.logo}</div>
//                           <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{provider.name}</div>
//                           {provider.badge && (
//                             <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
//                               provider.rank === 1 
//                                 ? 'bg-yellow-400 text-yellow-900' 
//                                 : 'bg-gray-200 text-gray-700'
//                             }`}>
//                               {provider.badge}
//                             </span>
//                           )}
//                         </div>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {comparisonFeatures.map((feature, idx) => (
//                     <FeatureRow key={feature.key} feature={feature} providers={hostingProviders.slice(0, visibleProviders)} />
//                   ))}
//                   <tr>
//                     <td className="px-6 sm:px-8 py-6 sm:py-8 font-bold text-gray-900 bg-gray-50/80 text-lg sm:text-xl">
//                       Get Started
//                     </td>
//                     {hostingProviders.slice(0, visibleProviders).map((provider) => (
//                       <td key={provider.id} className="px-4 sm:px-6 py-6 sm:py-8 text-center bg-gray-50/80">
//                         <a
//                           href={provider.affiliate}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className={`inline-block px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-white transition-all duration-300 text-sm sm:text-base ${
//                             provider.rank === 1
//                               ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-xl hover:scale-105 shadow-lg'
//                               : 'bg-gray-600 hover:bg-gray-700'
//                           }`}
//                         >
//                           {provider.rank === 1 ? '🚀 Get Best Deal' : 'Learn More'}
//                         </a>
//                       </td>
//                     ))}
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           {/* Mobile Cards */}
//           <div className="lg:hidden space-y-6 sm:space-y-8">
//             {hostingProviders.slice(0, visibleProviders).map((provider) => (
//               <div key={provider.id} className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border-2 border-gray-200/50 overflow-hidden">
//                 <div className="p-4 sm:p-6">
//                   <div className="flex items-center justify-between mb-4 sm:mb-6">
//                     <div className="flex items-center gap-3 sm:gap-4">
//                       <div className="text-3xl sm:text-4xl">{provider.logo}</div>
//                       <div>
//                         <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{provider.name}</h3>
//                         <div className="flex items-center gap-1 sm:gap-2">
//                           <span className="text-yellow-500 text-lg sm:text-xl">⭐</span>
//                           <span className="text-sm sm:text-lg text-gray-600">
//                             {provider.rating} ({provider.reviews})
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                     {provider.badge && (
//                       <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold ${
//                         provider.rank === 1 
//                           ? 'bg-yellow-400 text-yellow-900' 
//                           : 'bg-gray-200 text-gray-700'
//                       }`}>
//                         {provider.badge}
//                       </span>
//                     )}
//                   </div>
//                   {/* Pricing */}
//                   <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-lg sm:rounded-xl border border-blue-200/50">
//                     <div className="flex items-baseline gap-2 sm:gap-3 mb-1 sm:mb-2">
//                       <span className="text-2xl sm:text-3xl font-bold text-gray-900">{provider.price}</span>
//                       <span className="text-lg sm:text-xl text-gray-500 line-through">{provider.originalPrice}</span>
//                       <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-bold">
//                         {provider.discount}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 text-sm sm:text-base">Renews at {provider.renewalPrice}/mo</p>
//                   </div>
//                   {/* Key Features */}
//                   <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
//                     <div className="text-center p-3 bg-gray-50/50 rounded-lg sm:rounded-xl">
//                       <p className="text-xs sm:text-sm text-gray-600">Storage</p>
//                       <p className="font-bold text-gray-900 text-sm sm:text-lg">{provider.storage}</p>
//                     </div>
//                     <div className="text-center p-3 bg-gray-50/50 rounded-lg sm:rounded-xl">
//                       <p className="text-xs sm:text-sm text-gray-600">Performance</p>
//                       <p className="font-bold text-gray-900 text-sm sm:text-lg">{provider.performance}</p>
//                     </div>
//                   </div>
//                   {/* CTA Button */}
//                   <a
//                     href={provider.affiliate}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`w-full py-3 sm:py-4 px-4 rounded-lg sm:rounded-xl font-bold text-center block transition-all duration-300 text-sm sm:text-base ${
//                       provider.rank === 1
//                         ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-xl hover:scale-105 text-white shadow-lg'
//                         : 'bg-gray-900 hover:bg-gray-800 text-white'
//                     }`}
//                   >
//                     {provider.rank === 1 ? '🚀 Get Hostinger Deal' : `Visit ${provider.name}`}
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {visibleProviders < hostingProviders.length && (
//             <div className="text-center mt-8 sm:mt-12">
//               <button
//                 onClick={showMoreProviders}
//                 className="px-6 py-3 sm:px-8 sm:py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-bold rounded-lg sm:rounded-xl hover:shadow-xl transition-all duration-300 border-2 border-gray-300/50 text-sm sm:text-base"
//               >
//                 Show All {hostingProviders.length} Providers
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//       {/* FAQ Section */}
//       <section id="faq" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-gray-600">
//               Everything you need to know about choosing the right hosting provider
//             </p>
//           </div>
//           <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50">
//             {faqData.map((item, index) => (
//               <FAQItem
//                 key={index}
//                 question={item.question}
//                 answer={item.answer}
//                 isOpen={openFAQ === index}
//                 onClick={() => toggleFAQ(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Disclaimer Section */}
//       <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
//             <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">📝 Important Disclaimer</h3>
//             <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3">
//               <p>
//                 <strong>Financial & Legal Disclosure:</strong> DigiCompares is an independent review platform and 
//                 participates in various affiliate marketing programs. We may receive compensation when you click 
//                 on links to products and services and make purchases through our provided affiliate links.
//               </p>
//               <p>
//                 <strong>No Financial Responsibility:</strong> DigiCompares is not responsible for any financial 
//                 decisions, purchases, or outcomes resulting from the use of our website, recommendations, or 
//                 affiliate links. All hosting purchases and financial commitments are made solely at your own risk.
//               </p>
//               <p>
//                 <strong>Accuracy of Information:</strong> While we strive to provide accurate and up-to-date 
//                 information, hosting provider specifications, pricing, and features change frequently. Always 
//                 verify current pricing and terms directly with the hosting provider before making any purchase.
//               </p>
//               <p>
//                 <strong>Professional Advice:</strong> Our content is for informational purposes only and should 
//                 not be considered as professional financial or legal advice. Consult with appropriate professionals 
//                 for advice tailored to your specific situation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Final Conversion Section */}
//       <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
//             Ready to Launch Your Website?
//           </h2>
//           <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
//             Join 2 million+ website owners who trust our recommendations. Start your online journey 
//             today with Hostinger's exclusive 75% discount and premium features.
//           </p>
//           <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
//             <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
//               <h4 className="font-bold text-white text-base sm:text-xl mb-3 sm:mb-4">✨ Premium Features</h4>
//               <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
//                 <li>• Free domain name ($15 value)</li>
//                 <li>• Free SSL certificate ($90 value)</li>
//                 <li>• 100 GB NVMe storage</li>
//                 <li>• Unlimited bandwidth</li>
//                 <li>• AI website builder</li>
//               </ul>
//             </div>
//             <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
//               <h4 className="font-bold text-white text-base sm:text-xl mb-3 sm:mb-4">💰 Limited Time Offer</h4>
//               <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
//                 <li>• 75% discount</li>
//                 <li>• 30-day money-back guarantee</li>
//                 <li>• Free website migration</li>
//                 <li>• Premium support included</li>
//                 <li>• No hidden fees</li>
//               </ul>
//             </div>
//             <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
//               <h4 className="font-bold text-base sm:text-xl mb-3 sm:mb-4">🚀 Special Bonus</h4>
//               <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">$2.99/mo</div>
//               <p className="text-blue-100 text-xs sm:text-sm">75% OFF Regular Price</p>
//               <div className="mt-3 text-xs sm:text-sm">
//                 <p>Free domain + SSL included</p>
//                 <p>30-day money-back guarantee</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
//             <a
//               href={HOSTINGER_AFFILIATE}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl sm:rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg shadow-xl w-full sm:w-auto justify-center"
//             >
//               🚀 Get Started with Hostinger - $2.99/mo
//             </a>
//             <a
//               href="#comparison"
//               className="inline-flex items-center gap-2 px-6 py-4 sm:px-8 sm:py-5 bg-white/10 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/30 text-sm sm:text-base w-full sm:w-auto justify-center"
//             >
//               📊 Compare All Providers
//             </a>
//           </div>
//           <p className="text-gray-400 mt-6 sm:mt-8 text-sm sm:text-lg">
//             ⚡ Special offer expires soon • 🔒 30-day money-back guarantee • 🌍 Free domain included
//           </p>
//         </div>
//       </section>
//       {/* Enhanced Footer */}
//       <footer className="bg-slate-900 text-gray-400 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
//             <div>
//               <div className="flex items-center gap-3 mb-4 sm:mb-6">
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
//                   <span className="text-white font-bold text-sm sm:text-base">DC</span>
//                 </div>
//                 <span className="text-white font-bold text-lg sm:text-xl">DigiCompares</span>
//               </div>
//               <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
//                 Your trusted source for comprehensive web hosting reviews and comparisons. 
//                 We provide data-driven insights to help you make informed decisions.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-semibold text-white mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h4>
//               <ul className="space-y-2 sm:space-y-3">
//                 <li><a href="#comparison" className="hover:text-white transition-colors text-sm sm:text-base">Hosting Comparison</a></li>
//                 <li><a href="#performance" className="hover:text-white transition-colors text-sm sm:text-base">Performance Data</a></li>
//                 <li><a href="#faq" className="hover:text-white transition-colors text-sm sm:text-base">FAQ</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Contact Us</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold text-white mb-4 sm:mb-6 text-base sm:text-lg">Top Providers</h4>
//               <ul className="space-y-2 sm:space-y-3">
//                 <li><a href={HOSTINGER_AFFILIATE} className="hover:text-white transition-colors text-sm sm:text-base">Hostinger</a></li>
//                 <li><a href={BLUEHOST_AFFILIATE} className="hover:text-white transition-colors text-sm sm:text-base">Bluehost</a></li>
//                 <li><a href={SITEGROUND_AFFILIATE} className="hover:text-white transition-colors text-sm sm:text-base">SiteGround</a></li>
//                 <li><a href={A2HOSTING_AFFILIATE} className="hover:text-white transition-colors text-sm sm:text-base">A2 Hosting</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold text-white mb-4 sm:mb-6 text-base sm:text-lg">Legal</h4>
//               <ul className="space-y-2 sm:space-y-3">
//                 <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Terms of Service</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Affiliate Disclosure</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors text-sm sm:text-base">Cookie Policy</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
//             <p className="text-gray-500 text-xs sm:text-sm">
//               © 2025 DigiCompares. All rights reserved. We may earn affiliate commissions when you make purchases through our links. 
//               This helps support our independent research and testing. All data is verified for 2025.
//             </p>
//             <p className="text-gray-600 text-xs mt-2">
//               <strong>Disclaimer:</strong> DigiCompares is not responsible for any financial decisions or purchases made through our affiliate links. 
//               All hosting purchases are made at your own risk. Please review our full disclaimer above.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
}),
"[project]/app/web-hosting/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/web-hosting/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f99fad72._.js.map