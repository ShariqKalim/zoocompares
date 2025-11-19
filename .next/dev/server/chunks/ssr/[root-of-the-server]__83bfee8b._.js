module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/web-hosting/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GrammarlyComparisonPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
// Product data for Grammarly and alternatives
const tools = [
    {
        key: "grammarly",
        name: "Grammarly",
        logo: "/logos/grammarly.png",
        tagline: "AI-powered writing assistant",
        price: "Free / Premium $12/mo",
        rating: "4.7 / 5",
        features: {
            grammarCheck: "Yes",
            plagiarismDetection: "Yes (Premium)",
            writingStyleSuggestions: "Yes",
            integrations: "Browser, MS Office, Desktop Apps",
            languagesSupported: "English"
        },
        pros: [
            "Advanced grammar & spell check",
            "Tone detection & clarity suggestions",
            "Robust browser & app integrations",
            "Widely trusted by millions"
        ],
        cons: [
            "Premium required for plagiarism & advanced feedback",
            "Limited support for non-English languages"
        ],
        affiliateUrl: "https://affiliate.example.com/grammarly"
    },
    {
        key: "prowritingaid",
        name: "ProWritingAid",
        logo: "/logos/prowritingaid.png",
        tagline: "In-depth writing reports",
        price: "Free / Premium $20/mo",
        rating: "4.5 / 5",
        features: {
            grammarCheck: "Yes",
            plagiarismDetection: "Yes (premium)",
            writingStyleSuggestions: "Yes, detailed",
            integrations: "MS Word, Google Docs, Scrivener",
            languagesSupported: "English"
        },
        pros: [
            "Detailed style and writing reports",
            "Affordable pricing options",
            "Desktop & browser integrations",
            "One-time license for desktop version"
        ],
        cons: [
            "User interface less modern",
            "Some false positives in grammar suggestions"
        ],
        affiliateUrl: "https://affiliate.example.com/prowritingaid"
    },
    {
        key: "ginger",
        name: "Ginger",
        logo: "/logos/ginger.png",
        tagline: "Contextual grammar correction",
        price: "Free / Premium $13/mo",
        rating: "4.3 / 5",
        features: {
            grammarCheck: "Yes",
            plagiarismDetection: "No",
            writingStyleSuggestions: "Basic",
            integrations: "Browser, MS Office",
            languagesSupported: "English, Spanish, French"
        },
        pros: [
            "Contextual grammar corrections",
            "Multi-language support",
            "Personal trainer for writing skills",
            "Mobile apps available"
        ],
        cons: [
            "No plagiarism checker",
            "Limited style suggestions"
        ],
        affiliateUrl: "https://affiliate.example.com/ginger"
    },
    {
        key: "whiteSmoke",
        name: "WhiteSmoke",
        logo: "/logos/whitesmoke.png",
        tagline: "Comprehensive error detection",
        price: "Premium $16/mo",
        rating: "4.0 / 5",
        features: {
            grammarCheck: "Yes",
            plagiarismDetection: "Yes",
            writingStyleSuggestions: "Moderate",
            integrations: "Browser, MS Office, Desktop",
            languagesSupported: "English"
        },
        pros: [
            "Full error detection",
            "Translation features",
            "Video tutorials and templates",
            "Simple interface"
        ],
        cons: [
            "User interface outdated",
            "Pricing higher for features"
        ],
        affiliateUrl: "https://affiliate.example.com/whitesmoke"
    }
];
// Components:
function ToolCard({ tool }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            scale: 1.04
        },
        style: styles.card,
        "aria-label": `${tool.name} overview card`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: tool.logo,
                alt: `${tool.name} logo`,
                style: styles.logo,
                loading: "lazy"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: styles.cardTitle,
                children: tool.name
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: styles.tagline,
                children: tool.tagline
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: styles.price,
                children: [
                    "Price: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: tool.price
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 125,
                        columnNumber: 38
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: styles.rating,
                children: [
                    "Rating: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: tool.rating
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 126,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                style: styles.subheading,
                children: "Pros"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: tool.pros.map((pro)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: styles.listItem,
                        children: pro
                    }, pro, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                style: styles.subheading,
                children: "Cons"
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: tool.cons.map((con)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: styles.listItem,
                        children: con
                    }, con, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: tool.affiliateUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                style: styles.ctaButton,
                "aria-label": `Get ${tool.name} now`,
                children: [
                    "Get ",
                    tool.name
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
function ComparisonTable() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.tableWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            style: styles.table,
            "aria-label": "Detailed Grammarly alternatives comparison",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                style: styles.th,
                                children: "Feature"
                            }, void 0, false, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: styles.th,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: tool.logo,
                                            alt: `${tool.name} logo`,
                                            style: {
                                                maxHeight: "40px",
                                                marginBottom: "10px"
                                            },
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: tool.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, tool.key, true, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/web-hosting/page.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: [
                        Object.keys(tools[0].features).map((featureKey)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: styles.td,
                                        children: featureKey.replace(/([A-Z])/g, " $1").replace(/^./, (str)=>str.toUpperCase())
                                    }, void 0, false, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: styles.td,
                                            children: tool.features[featureKey]
                                        }, tool.key + featureKey, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, featureKey, true, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: styles.td,
                                    children: "Affiliate Link"
                                }, void 0, false, {
                                    fileName: "[project]/app/web-hosting/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: styles.td,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: tool.affiliateUrl,
                                            style: styles.ctaLink,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": `Buy ${tool.name} via affiliate link`,
                                            children: "Buy Now"
                                        }, void 0, false, {
                                            fileName: "[project]/app/web-hosting/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    }, tool.key + "affiliate", false, {
                                        fileName: "[project]/app/web-hosting/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/web-hosting/page.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/web-hosting/page.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function GrammarlyComparisonPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: styles.main,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
                initial: {
                    opacity: 0,
                    y: -15
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.8
                },
                style: styles.header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.branding,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: styles.brandLogo,
                            children: "✍️ digiCompares"
                        }, void 0, false, {
                            fileName: "[project]/app/web-hosting/page.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: styles.title,
                        children: "Grammarly & Alternatives — 2025 Comprehensive Comparison"
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: styles.subtitle,
                        children: "Find the best writing assistant tool that fits your needs with detailed feature, pricing, pros & cons analysis."
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: styles.section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: styles.sectionTitle,
                        children: "Top AI Writing Assistants"
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.cardsGrid,
                        children: tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolCard, {
                                tool: tool
                            }, tool.key, false, {
                                fileName: "[project]/app/web-hosting/page.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: styles.section,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: styles.sectionTitle,
                        children: "Feature Comparison Table"
                    }, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ComparisonTable, {}, void 0, false, {
                        fileName: "[project]/app/web-hosting/page.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: styles.footer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        maxWidth: "700px",
                        margin: "0 auto"
                    },
                    children: "Disclaimer: digiCompares is an independent platform providing unbiased reviews and comparisons. We may earn commissions from affiliate links that help support our work. Always consider your needs and conduct personal research before purchasing any software."
                }, void 0, false, {
                    fileName: "[project]/app/web-hosting/page.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/web-hosting/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/web-hosting/page.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
const styles = {
    main: {
        fontFamily: "'Inter', sans-serif",
        background: "#f9fafb",
        minHeight: "100vh",
        padding: "3rem 1rem 4rem",
        color: "#1e293b"
    },
    header: {
        textAlign: "center",
        marginBottom: "2.8rem"
    },
    branding: {
        marginBottom: "0.5rem"
    },
    brandLogo: {
        backgroundColor: "#2563eb",
        color: "#fff",
        padding: "8px 16px",
        borderRadius: "12px",
        fontWeight: "700",
        fontSize: "1rem",
        letterSpacing: "2px"
    },
    title: {
        fontSize: "2.8rem",
        fontWeight: "900",
        color: "#1e40af",
        marginTop: "14px"
    },
    subtitle: {
        fontSize: "1.1rem",
        color: "#475569",
        marginTop: "12px",
        maxWidth: "720px",
        marginLeft: "auto",
        marginRight: "auto",
        lineHeight: 1.5
    },
    section: {
        marginBottom: "3.5rem"
    },
    sectionTitle: {
        fontSize: "2rem",
        fontWeight: "800",
        textAlign: "center",
        color: "#2563eb",
        marginBottom: "2rem"
    },
    cardsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
        gap: "2.4rem",
        maxWidth: "1080px",
        margin: "0 auto"
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "1.8rem 1.6rem 2.2rem",
        boxShadow: "0 15px 30px rgb(37 99 235 / 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "transform 0.3s ease",
        cursor: "pointer"
    },
    logo: {
        maxWidth: 90,
        marginBottom: "18px"
    },
    cardTitle: {
        fontWeight: "900",
        fontSize: "1.5rem",
        color: "#1e293b",
        marginBottom: "6px"
    },
    tagline: {
        marginBottom: "14px",
        fontWeight: "600",
        color: "#475569",
        fontSize: "1rem"
    },
    price: {
        fontWeight: "700",
        color: "#2563eb",
        marginBottom: "10px",
        fontSize: "1rem"
    },
    rating: {
        fontWeight: "600",
        marginBottom: "16px",
        color: "#0f172a",
        fontSize: "1rem"
    },
    subheading: {
        fontWeight: "700",
        fontSize: "1.1rem",
        textAlign: "left",
        alignSelf: "stretch",
        marginBottom: "8px",
        color: "#2563eb"
    },
    listItem: {
        textAlign: "left",
        fontSize: "0.9rem",
        color: "#475569",
        marginBottom: "6px"
    },
    ctaButton: {
        marginTop: "auto",
        padding: "12px 22px",
        backgroundColor: "#2563eb",
        color: "#fff",
        fontWeight: 700,
        fontSize: "1rem",
        borderRadius: "12px",
        textDecoration: "none",
        boxShadow: "0 9px 30px rgb(37 99 235 / 0.25)",
        display: "inline-block",
        transition: "background-color 0.3s ease"
    },
    tableWrapper: {
        overflowX: "auto",
        maxWidth: "1080px",
        margin: "0 auto",
        borderRadius: "14px",
        boxShadow: "0 15px 40px rgb(37 99 235 / 0.16)",
        border: "2px solid #2563eb",
        backgroundColor: "#fff"
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        minWidth: "670px"
    },
    th: {
        padding: "20px",
        backgroundColor: "#2563eb",
        color: "#fff",
        fontWeight: "700",
        fontSize: "1rem",
        borderBottom: "3px solid #1e3a8a",
        textAlign: "center",
        verticalAlign: "middle"
    },
    td: {
        padding: "16px 18px",
        textAlign: "center",
        borderBottom: "1.5px solid #cbd5e1",
        fontSize: "0.95rem",
        color: "#1e293b",
        verticalAlign: "middle"
    },
    ctaLink: {
        color: "#2563eb",
        fontWeight: "700",
        textDecoration: "underline"
    },
    footer: {
        textAlign: "center",
        fontSize: "0.8rem",
        paddingTop: "2rem",
        maxWidth: "750px",
        margin: "0 auto",
        color: "#64748b",
        lineHeight: 1.4
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__83bfee8b._.js.map