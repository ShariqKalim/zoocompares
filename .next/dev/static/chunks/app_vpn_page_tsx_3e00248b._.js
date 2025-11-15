(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/vpn/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client"
// import React from "react";
// import { motion } from "framer-motion";
// // Client-only VPN landing page
// // NOTE: For App Router (Next.js) add canonical SEO meta tags in the server layout/page metadata.
// const AFF_LINKS = {
//   nord: "https://affiliate.example.com/nordvpn",
//   express: "https://affiliate.example.com/expressvpn",
//   proton: "https://affiliate.example.com/protonvpn",
//   surfshark: "https://affiliate.example.com/surfshark",
//   cyberghost: "https://affiliate.example.com/cyberghost",
//   pia: "https://affiliate.example.com/privateinternetaccess",
// };
// const vpnDetails = [
//   {
//     key: "nord",
//     name: "NordVPN",
//     tagline: "Fast, secure & affordable VPN — our top pick.",
//     bullets: [
//       "8,400+ servers across 167+ locations",
//       "NordLynx (WireGuard) for blazing speeds",
//       "Threat Protection (ad & malware blocking)",
//       "Dark Web Monitor & built‑in Password Manager",
//       "Up to 10 devices per account",
//       "30-day money-back guarantee",
//     ],
//     summary:
//       "NordVPN provides a stellar mix of performance, security, and value. With premium features at very reasonable pricing, it's our #1 choice for most users.",
//     highlight: true,
//     dark: true,
//     rank: 1,
//     affiliate: AFF_LINKS.nord,
//   },
//   {
//     key: "express",
//     name: "ExpressVPN",
//     tagline: "Reliable and consistent VPN with global coverage.",
//     bullets: [
//       "~3,000+ servers in 105+ countries",
//       "Strong Lightway protocol for stability and speed",
//       "Tiered plans and strong support",
//       "30-day money-back guarantee",
//       "Device support across desktop, mobile, router",
//       "High trust and long-time provider",
//     ],
//     summary:
//       "ExpressVPN is a long-standing, trusted service. Although it's priced higher, it offers very consistent performance and strong global reach.",
//     highlight: false,
//     dark: false,
//     rank: 2,
//     affiliate: AFF_LINKS.express,
//   },
//   {
//     key: "proton",
//     name: "Proton VPN",
//     tagline: "Swiss‑based VPN with strong privacy & Secure Core.",
//     bullets: [
//       "Secure Core architecture for double-hop anonymity",
//       "Free tier available",
//       "Open-source apps and audited no-logs policy",
//       "Up to 10 devices on paid plans",
//       "Strong privacy-first reputation",
//     ],
//     summary:
//       "Proton VPN is ideal for privacy-first users. Based in Switzerland, it offers Secure Core servers and strong transparency.",
//     highlight: false,
//     dark: false,
//     rank: 4,
//     affiliate: AFF_LINKS.proton,
//   },
//   {
//     key: "surfshark",
//     name: "Surfshark",
//     tagline: "Budget-friendly VPN with unlimited devices.",
//     bullets: [
//       "3,200+ servers in ~100 countries",
//       "Unlimited simultaneous connections",
//       "CleanWeb (ad/malware blocker)",
//       "MultiHop (double VPN) and IP rotator",
//     ],
//     summary:
//       "Surfshark offers outstanding value, especially for households. With unlimited devices and competitive pricing, it's a top contender.",
//     highlight: false,
//     dark: false,
//     rank: 3,
//     affiliate: AFF_LINKS.surfshark,
//   },
//   {
//     key: "cyberghost",
//     name: "CyberGhost",
//     tagline: "Streaming‑optimized VPN with a huge server network.",
//     bullets: [
//       "10,000+ servers in 100+ countries",
//       "Streaming-optimized servers for Netflix, BBC, etc.",
//       "Beginner-friendly interface",
//       "Long refund window for many plans",
//     ],
//     summary:
//       "CyberGhost is great for streaming fans and casual users who want simple, effective protection and many server choices.",
//     highlight: false,
//     dark: false,
//     rank: 5,
//     affiliate: AFF_LINKS.cyberghost,
//   },
//   {
//     key: "pia",
//     name: "Private Internet Access",
//     tagline: "Trusted and affordable, great for privacy lovers.",
//     bullets: [
//       "Servers in 91+ countries",
//       "Strict no-logs policy",
//       "10 simultaneous devices",
//       "Advanced encryption options",
//       "Built-in ad & tracker blocker",
//     ],
//     summary:
//       "PIA is a budget-friendly VPN with strong privacy policies, customizable security, and a large server network.",
//     highlight: false,
//     dark: false,
//     rank: 6,
//     affiliate: AFF_LINKS.pia,
//   },
// ];
// export default function VPNPage(): JSX.Element {
//   return (
//     <main className="min-h-screen bg-gray-50 text-slate-800 py-12 px-6 sm:px-12">
//       <section className="max-w-6xl mx-auto">
//         {/* Hero */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
//         >
//           <div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold">Best VPNs of 2025</h1>
//             <p className="mt-3 text-lg text-slate-600 max-w-2xl">
//               A straightforward, honest comparison of top VPN providers. We rank <strong>NordVPN</strong> #1 for
//               its unbeatable balance of speed, features, and affordability.
//             </p>
//           </div>
//           <div className="flex gap-4 mt-4 md:mt-0">
//             <motion.a
//               href={AFF_LINKS.nord}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-5 py-3 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               🚀 Get NordVPN — Ranked #1
//             </motion.a>
//           </div>
//         </motion.div>
//         {/* VPN Cards */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {vpnDetails.map((d) => (
//             <ServiceCard key={d.key} details={d} />
//           ))}
//         </div>
//         {/* Comparison Chart */}
//         <motion.div
//           id="comparison"
//           className="mt-16 bg-white rounded-2xl p-8 shadow-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-2xl font-semibold">Feature Comparison</h2>
//           <div className="mt-6 overflow-x-auto">
//             <table className="w-full table-auto border-collapse text-sm text-slate-700">
//               <thead>
//                 <tr className="text-left text-slate-500 border-b">
//                   <th className="py-3 pr-6 w-1/4">Feature</th>
//                   {vpnDetails.map((d) => (
//                     <th key={d.key} className="py-3 pr-6">{d.name}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {comparisonRows.map((row) => (
//                   <tr key={row.feature} className="border-b last:border-b-0">
//                     <td className="py-4 pr-6 font-medium">{row.feature}</td>
//                     {vpnDetails.map((d) => (
//                       <td key={d.key} className="py-4 pr-6 align-top">{row.values[d.key] ?? "–"}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>
//         {/* Final Recommendation */}
//         <motion.div
//           className="mt-16 p-8 bg-gradient-to-r from-white via-sky-50 to-white rounded-2xl shadow-lg"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3 className="text-xl font-semibold">Why NordVPN is Our #1 Pick</h3>
//           <p className="mt-4 text-slate-700">
//             NordVPN stands out because it delivers <strong>premium-level speed and security at a very reasonable price</strong>.
//             While many top VPNs charge a premium, NordVPN offers a compelling balance: powerful features like Threat Protection,
//             Dark Web Monitor, and a huge server network — all without overcharging.
//           </p>
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//             {vpnDetails.map((d) => (
//               <NoteCard key={d.key} title={`#${d.rank} – ${d.name}`} color={d.highlight ? "sky" : "slate"}>
//                 {d.summary}
//               </NoteCard>
//             ))}
//           </div>
//           <div className="mt-8 flex gap-4 flex-wrap">
//             {vpnDetails.map((d) => (
//               <a
//                 key={d.key}
//                 href={d.affiliate}
//                 target="_blank"
//                 rel="noreferrer"
//                 className={`inline-flex items-center gap-2 py-2 px-4 font-medium rounded-lg transition ${
//                   d.highlight ? "bg-sky-600 text-white hover:bg-sky-700" : "border border-slate-300 hover:bg-slate-100"
//                 }`}
//               >
//                 {d.highlight ? `Try ${d.name} (Best)` : `Get ${d.name}`}
//               </a>
//             ))}
//           </div>
//         </motion.div>
//         <footer className="mt-16 text-sm text-slate-500 text-center">
//           Disclaimer: This page contains affiliate links. We recommend you check each provider’s latest pricing, privacy
//           policy, and trial period before subscribing.
//         </footer>
//       </section>
//     </main>
//   );
// }
// function ServiceCard({ details }: any) {
//   const { name, tagline, bullets, summary, affiliate, highlight, dark } = details;
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.98 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.45 }}
//       className={`relative p-6 rounded-2xl shadow-lg overflow-hidden ${dark ? "bg-gray-900 text-white" : "bg-white text-slate-800"}`}
//     >
//       {highlight && (
//         <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-3">
//           ★ Best Choice
//         </div>
//       )}
//       <div className="flex items-start gap-4">
//         <div className="flex-1">
//           <h3 className="text-2xl font-semibold mb-2">{name}</h3>
//           <p className={`${dark ? 'text-slate-300' : 'text-slate-600'} mb-4`}>{tagline}</p>
//           <ul className={`${dark ? 'text-gray-300' : 'text-slate-700'} space-y-2 mb-4`}>
//             {bullets.map((b: string) => (
//               <li key={b} className="flex items-start gap-2">
//                 <span className="mt-1 block w-2 h-2 rounded-full bg-current opacity-50" />
//                 <span>{b}</span>
//               </li>
//             ))}
//           </ul>
//           <p className={`${dark ? 'text-slate-300' : 'text-slate-600'} mb-6`}>{summary}</p>
//           <a
//             href={affiliate}
//             target="_blank"
//             rel="noreferrer"
//             className={`inline-block px-4 py-2 font-medium rounded-lg transition ${dark ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-sky-500 text-white hover:bg-sky-600'}`}
//           >
//             Try {name}
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
// function NoteCard({ title, children, color }: any) {
//   const bg = color === "sky" ? "bg-sky-50 border-sky-100 text-sky-700" : "bg-gray-50 border-gray-200 text-slate-800";
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 8 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.45 }}
//       className={`p-4 rounded-lg border ${bg}`}
//     >
//       <h5 className="font-semibold">{title}</h5>
//       <p className="mt-2 text-sm">{children}</p>
//     </motion.div>
//   );
// }
// const comparisonRows = [
//   {
//     feature: "Server Network",
//     values: {
//       nord: "8,400+ servers, 167+ locations",
//       express: "~3,000+ in 105+ countries",
//       proton: "5,500+ servers worldwide",
//       surfshark: "3,200+ servers in ~100 countries",
//       cyberghost: "10,000+ servers in 100+ countries",
//       pia: "Thousands of servers in 91+ countries",
//     },
//   },
//   {
//     feature: "Privacy / Special Features",
//     values: {
//       nord: "Threat Protection, Dark Web Monitor, RAM-only servers",
//       express: "Lightway protocol, audited no-logs, simple UI",
//       proton: "Secure Core (double-hop), Swiss jurisdiction, open-source",
//       surfshark: "MultiHop, CleanWeb, unlimited devices",
//       cyberghost: "Streaming-optimized servers, easy to use",
//     },
//   },
//   {
//     feature: "Simultaneous Devices",
//     values: {
//       nord: "Up to 10",
//       express: "Up to 10 (varies by plan)",
//       proton: "Up to 10 on paid plans",
//       surfshark: "Unlimited",
//       cyberghost: "7 (typical)",
//     },
//   },
//   {
//     feature: "Value for Money",
//     values: {
//       nord: "Premium features + very reasonable pricing",
//       express: "Stable but more expensive",
//       proton: "Strong privacy, free tier, paid plans vary",
//       surfshark: "Best for budget + many devices",
//       cyberghost: "Good for long-term & streaming users",
//     },
//   },
// ];
__turbopack_context__.s([
    "default",
    ()=>VPNPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
// Client-only VPN landing page
// NOTE: For App Router (Next.js) add canonical SEO meta tags in the server layout/page metadata.
const AFF_LINKS = {
    nord: "https://affiliate.example.com/nordvpn",
    express: "https://affiliate.example.com/expressvpn",
    proton: "https://affiliate.example.com/protonvpn",
    surfshark: "https://affiliate.example.com/surfshark",
    cyberghost: "https://affiliate.example.com/cyberghost",
    pia: "https://affiliate.example.com/privateinternetaccess"
};
const vpnDetails = [
    {
        key: "nord",
        name: "NordVPN",
        tagline: "Fast, secure & affordable VPN — our top pick.",
        bullets: [
            "8,400+ servers across 167+ locations",
            "NordLynx (WireGuard) for blazing speeds",
            "Threat Protection (ad & malware blocking)",
            "Dark Web Monitor & built‑in Password Manager",
            "Up to 10 devices per account",
            "30-day money-back guarantee"
        ],
        summary: "NordVPN provides a stellar mix of performance, security, and value. With premium features at very reasonable pricing, it's our #1 choice for most users.",
        highlight: true,
        dark: true,
        rank: 1,
        affiliate: AFF_LINKS.nord
    },
    {
        key: "express",
        name: "ExpressVPN",
        tagline: "Reliable and consistent VPN with global coverage.",
        bullets: [
            "~3,000+ servers in 105+ countries",
            "Strong Lightway protocol for stability and speed",
            "Tiered plans and strong support",
            "30-day money-back guarantee",
            "Device support across desktop, mobile, router",
            "High trust and long-time provider"
        ],
        summary: "ExpressVPN is a long-standing, trusted service. Although it's priced higher, it offers very consistent performance and strong global reach.",
        highlight: false,
        dark: false,
        rank: 2,
        affiliate: AFF_LINKS.express
    },
    {
        key: "proton",
        name: "Proton VPN",
        tagline: "Swiss‑based VPN with strong privacy & Secure Core.",
        bullets: [
            "Secure Core architecture for double-hop anonymity",
            "Free tier available",
            "Open-source apps and audited no-logs policy",
            "Up to 10 devices on paid plans",
            "Strong privacy-first reputation"
        ],
        summary: "Proton VPN is ideal for privacy-first users. Based in Switzerland, it offers Secure Core servers and strong transparency.",
        highlight: false,
        dark: false,
        rank: 4,
        affiliate: AFF_LINKS.proton
    },
    {
        key: "surfshark",
        name: "Surfshark",
        tagline: "Budget-friendly VPN with unlimited devices.",
        bullets: [
            "3,200+ servers in ~100 countries",
            "Unlimited simultaneous connections",
            "CleanWeb (ad/malware blocker)",
            "MultiHop (double VPN) and IP rotator"
        ],
        summary: "Surfshark offers outstanding value, especially for households. With unlimited devices and competitive pricing, it's a top contender.",
        highlight: false,
        dark: false,
        rank: 3,
        affiliate: AFF_LINKS.surfshark
    },
    {
        key: "cyberghost",
        name: "CyberGhost",
        tagline: "Streaming‑optimized VPN with a huge server network.",
        bullets: [
            "10,000+ servers in 100+ countries",
            "Streaming-optimized servers for Netflix, BBC, etc.",
            "Beginner-friendly interface",
            "Long refund window for many plans"
        ],
        summary: "CyberGhost is great for streaming fans and casual users who want simple, effective protection and many server choices.",
        highlight: false,
        dark: false,
        rank: 5,
        affiliate: AFF_LINKS.cyberghost
    },
    {
        key: "pia",
        name: "Private Internet Access",
        tagline: "Trusted and affordable, great for privacy lovers.",
        bullets: [
            "Servers in 91+ countries",
            "Strict no-logs policy",
            "10 simultaneous devices",
            "Advanced encryption options",
            "Built-in ad & tracker blocker"
        ],
        summary: "PIA is a budget-friendly VPN with strong privacy policies, customizable security, and a large server network.",
        highlight: false,
        dark: false,
        rank: 6,
        affiliate: AFF_LINKS.pia
    }
];
function VPNPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50 text-slate-800 py-12 px-6 sm:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold text-sky-600",
                        children: "ZooCompares"
                    }, void 0, false, {
                        fileName: "[project]/app/vpn/page.tsx",
                        lineNumber: 490,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/vpn/page.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl sm:text-5xl font-extrabold",
                                    children: "Best VPNs of 2025"
                                }, void 0, false, {
                                    fileName: "[project]/app/vpn/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-lg text-slate-600 max-w-2xl",
                                    children: [
                                        "A straightforward, honest comparison of top VPN providers. We rank ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "NordVPN"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vpn/page.tsx",
                                            lineNumber: 502,
                                            columnNumber: 82
                                        }, this),
                                        " #1 for its unbeatable balance of speed, features, and affordability."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/vpn/page.tsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 499,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 mt-4 md:mt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: AFF_LINKS.nord,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-500 text-white px-5 py-3 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300",
                                whileHover: {
                                    scale: 1.08
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: "🚀 Get NordVPN — Ranked #1"
                            }, void 0, false, {
                                fileName: "[project]/app/vpn/page.tsx",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 507,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/vpn/page.tsx",
                    lineNumber: 493,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: vpnDetails.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                            details: d
                        }, d.key, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 524,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/vpn/page.tsx",
                    lineNumber: 522,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    id: "comparison",
                    className: "mt-16 bg-white rounded-2xl p-8 shadow-md",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold",
                            children: "Feature Comparison"
                        }, void 0, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 536,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full table-auto border-collapse text-sm text-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "text-left text-slate-500 border-b",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 pr-6 w-1/4",
                                                    children: "Feature"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vpn/page.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 19
                                                }, this),
                                                vpnDetails.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3 pr-6",
                                                        children: d.name
                                                    }, d.key, false, {
                                                        fileName: "[project]/app/vpn/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/vpn/page.tsx",
                                            lineNumber: 540,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/vpn/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: comparisonRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b last:border-b-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-4 pr-6 font-medium",
                                                        children: row.feature
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vpn/page.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 21
                                                    }, this),
                                                    vpnDetails.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-4 pr-6 align-top",
                                                            children: row.values[d.key] ?? "–"
                                                        }, d.key, false, {
                                                            fileName: "[project]/app/vpn/page.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, row.feature, true, {
                                                fileName: "[project]/app/vpn/page.tsx",
                                                lineNumber: 549,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/vpn/page.tsx",
                                        lineNumber: 547,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vpn/page.tsx",
                                lineNumber: 538,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 537,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/vpn/page.tsx",
                    lineNumber: 529,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mt-16 p-8 bg-gradient-to-r from-white via-sky-50 to-white rounded-2xl shadow-lg",
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold",
                            children: "Why NordVPN is Our #1 Pick"
                        }, void 0, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 568,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-slate-700",
                            children: [
                                "NordVPN stands out because it delivers ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "premium-level speed and security at a very reasonable price"
                                }, void 0, false, {
                                    fileName: "[project]/app/vpn/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 52
                                }, this),
                                ". While many top VPNs charge a premium, NordVPN offers a compelling balance: powerful features like Threat Protection, Dark Web Monitor, and a huge server network — all without overcharging."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: vpnDetails.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoteCard, {
                                    title: `#${d.rank} – ${d.name}`,
                                    color: d.highlight ? "sky" : "slate",
                                    children: d.summary
                                }, d.key, false, {
                                    fileName: "[project]/app/vpn/page.tsx",
                                    lineNumber: 577,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 575,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex gap-4 flex-wrap",
                            children: vpnDetails.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: d.affiliate,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: `inline-flex items-center gap-2 py-2 px-4 font-medium rounded-lg transition ${d.highlight ? "bg-sky-600 text-white hover:bg-sky-700" : "border border-slate-300 hover:bg-slate-100"}`,
                                    children: d.highlight ? `Try ${d.name} (Best)` : `Get ${d.name}`
                                }, d.key, false, {
                                    fileName: "[project]/app/vpn/page.tsx",
                                    lineNumber: 585,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 583,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/vpn/page.tsx",
                    lineNumber: 562,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-16 text-sm text-slate-500 text-center",
                    children: "Disclaimer: This page contains affiliate links. We recommend you check each provider’s latest pricing, privacy policy, and trial period before subscribing."
                }, void 0, false, {
                    fileName: "[project]/app/vpn/page.tsx",
                    lineNumber: 600,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/vpn/page.tsx",
            lineNumber: 487,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/vpn/page.tsx",
        lineNumber: 486,
        columnNumber: 5
    }, this);
}
_c = VPNPage;
function ServiceCard({ details }) {
    const { name, tagline, bullets, summary, affiliate, highlight, dark } = details;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.98
        },
        whileInView: {
            opacity: 1,
            scale: 1
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.45
        },
        className: `relative p-6 rounded-2xl shadow-lg overflow-hidden ${dark ? "bg-gray-900 text-white" : "bg-white text-slate-800"}`,
        children: [
            highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-3",
                children: "★ Best Choice"
            }, void 0, false, {
                fileName: "[project]/app/vpn/page.tsx",
                lineNumber: 620,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold mb-2",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 626,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${dark ? 'text-slate-300' : 'text-slate-600'} mb-4`,
                            children: tagline
                        }, void 0, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 627,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: `${dark ? 'text-gray-300' : 'text-slate-700'} space-y-2 mb-4`,
                            children: bullets.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-1 block w-2 h-2 rounded-full bg-current opacity-50"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vpn/page.tsx",
                                            lineNumber: 632,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: b
                                        }, void 0, false, {
                                            fileName: "[project]/app/vpn/page.tsx",
                                            lineNumber: 633,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, b, true, {
                                    fileName: "[project]/app/vpn/page.tsx",
                                    lineNumber: 631,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 629,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${dark ? 'text-slate-300' : 'text-slate-600'} mb-6`,
                            children: summary
                        }, void 0, false, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 638,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: affiliate,
                            target: "_blank",
                            rel: "noreferrer",
                            className: `inline-block px-4 py-2 font-medium rounded-lg transition ${dark ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-sky-500 text-white hover:bg-sky-600'}`,
                            children: [
                                "Try ",
                                name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vpn/page.tsx",
                            lineNumber: 640,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/vpn/page.tsx",
                    lineNumber: 625,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/vpn/page.tsx",
                lineNumber: 624,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/vpn/page.tsx",
        lineNumber: 612,
        columnNumber: 5
    }, this);
}
_c1 = ServiceCard;
function NoteCard({ title, children, color }) {
    const bg = color === "sky" ? "bg-sky-50 border-sky-100 text-sky-700" : "bg-gray-50 border-gray-200 text-slate-800";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 8
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.45
        },
        className: `p-4 rounded-lg border ${bg}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/vpn/page.tsx",
                lineNumber: 664,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/vpn/page.tsx",
                lineNumber: 665,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/vpn/page.tsx",
        lineNumber: 657,
        columnNumber: 5
    }, this);
}
_c2 = NoteCard;
const comparisonRows = [
    {
        feature: "Server Network",
        values: {
            nord: "8,400+ servers, 167+ locations",
            express: "~3,000+ in 105+ countries",
            proton: "5,500+ servers worldwide",
            surfshark: "3,200+ servers in ~100 countries",
            cyberghost: "10,000+ servers in 100+ countries",
            pia: "Thousands of servers in 91+ countries"
        }
    },
    {
        feature: "Privacy / Special Features",
        values: {
            nord: "Threat Protection, Dark Web Monitor, RAM-only servers",
            express: "Lightway protocol, audited no-logs, simple UI",
            proton: "Secure Core (double-hop), Swiss jurisdiction, open-source",
            surfshark: "MultiHop, CleanWeb, unlimited devices",
            cyberghost: "Streaming-optimized servers, easy to use"
        }
    },
    {
        feature: "Simultaneous Devices",
        values: {
            nord: "Up to 10",
            express: "Up to 10 (varies by plan)",
            proton: "Up to 10 on paid plans",
            surfshark: "Unlimited",
            cyberghost: "7 (typical)"
        }
    },
    {
        feature: "Value for Money",
        values: {
            nord: "Premium features + very reasonable pricing",
            express: "Stable but more expensive",
            proton: "Strong privacy, free tier, paid plans vary",
            surfshark: "Best for budget + many devices",
            cyberghost: "Good for long-term & streaming users"
        }
    }
];
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "VPNPage");
__turbopack_context__.k.register(_c1, "ServiceCard");
__turbopack_context__.k.register(_c2, "NoteCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_vpn_page_tsx_3e00248b._.js.map