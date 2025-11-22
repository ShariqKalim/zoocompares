(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/crm-tools/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>SystemeIOComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SystemeIOComparison() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeFAQ, setActiveFAQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemeIOComparison.useEffect": ()=>{
            setIsVisible(true);
            // Smooth scroll for anchor links
            const smoothScroll = {
                "SystemeIOComparison.useEffect.smoothScroll": ()=>{
                    document.querySelectorAll('a[href^="#"]').forEach({
                        "SystemeIOComparison.useEffect.smoothScroll": (anchor)=>{
                            anchor.addEventListener('click', {
                                "SystemeIOComparison.useEffect.smoothScroll": function(e) {
                                    e.preventDefault();
                                    const target = document.querySelector(this.getAttribute('href'));
                                    if (target) {
                                        target.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                }
                            }["SystemeIOComparison.useEffect.smoothScroll"]);
                        }
                    }["SystemeIOComparison.useEffect.smoothScroll"]);
                }
            }["SystemeIOComparison.useEffect.smoothScroll"];
            // Animate elements on scroll
            const animateOnScroll = {
                "SystemeIOComparison.useEffect.animateOnScroll": ()=>{
                    const observerOptions = {
                        threshold: 0.1,
                        rootMargin: '0px 0px -50px 0px'
                    };
                    const observer = new IntersectionObserver({
                        "SystemeIOComparison.useEffect.animateOnScroll": (entries)=>{
                            entries.forEach({
                                "SystemeIOComparison.useEffect.animateOnScroll": (entry)=>{
                                    if (entry.isIntersecting) {
                                        entry.target.classList.add('animate-in');
                                    }
                                }
                            }["SystemeIOComparison.useEffect.animateOnScroll"]);
                        }
                    }["SystemeIOComparison.useEffect.animateOnScroll"], observerOptions);
                    document.querySelectorAll('.scroll-animate').forEach({
                        "SystemeIOComparison.useEffect.animateOnScroll": (el)=>{
                            observer.observe(el);
                        }
                    }["SystemeIOComparison.useEffect.animateOnScroll"]);
                }
            }["SystemeIOComparison.useEffect.animateOnScroll"];
            smoothScroll();
            animateOnScroll();
            // Animate progress bars
            const animateBars = {
                "SystemeIOComparison.useEffect.animateBars": ()=>{
                    const barObserver = new IntersectionObserver({
                        "SystemeIOComparison.useEffect.animateBars": (entries)=>{
                            entries.forEach({
                                "SystemeIOComparison.useEffect.animateBars": (entry)=>{
                                    if (entry.isIntersecting) {
                                        const bars = entry.target.querySelectorAll('.bar-fill');
                                        bars.forEach({
                                            "SystemeIOComparison.useEffect.animateBars": (bar)=>{
                                                const width = bar.style.width;
                                                bar.style.width = '0%';
                                                setTimeout({
                                                    "SystemeIOComparison.useEffect.animateBars": ()=>{
                                                        bar.style.transition = 'width 1.5s ease-in-out';
                                                        bar.style.width = width;
                                                    }
                                                }["SystemeIOComparison.useEffect.animateBars"], 100);
                                            }
                                        }["SystemeIOComparison.useEffect.animateBars"]);
                                    }
                                }
                            }["SystemeIOComparison.useEffect.animateBars"]);
                        }
                    }["SystemeIOComparison.useEffect.animateBars"], {
                        threshold: 0.5
                    });
                    document.querySelectorAll('.chart-section, .bar-chart').forEach({
                        "SystemeIOComparison.useEffect.animateBars": (el)=>{
                            barObserver.observe(el);
                        }
                    }["SystemeIOComparison.useEffect.animateBars"]);
                }
            }["SystemeIOComparison.useEffect.animateBars"];
            animateBars();
        }
    }["SystemeIOComparison.useEffect"], []);
    const toggleFAQ = (index)=>{
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
        {
            feature: 'Free Plan',
            systemeio: '✓ Forever Free',
            clickfunnels: '✗ Trial Only',
            kartra: '✗ Trial Only',
            gohighlevel: '✗ Trial Only'
        },
        {
            feature: 'Starting Price',
            systemeio: '$0/month',
            clickfunnels: '$97/month',
            kartra: '$119/month',
            gohighlevel: '$97/month'
        },
        {
            feature: 'Email Marketing',
            systemeio: '✓ Unlimited',
            clickfunnels: '✓ 50K/month',
            kartra: '✓ Limited',
            gohighlevel: '✓ Pay per use'
        },
        {
            feature: 'Sales Funnels',
            systemeio: '✓ Unlimited (paid)',
            clickfunnels: '✓ Unlimited',
            kartra: '✓ Unlimited',
            gohighlevel: '✓ Unlimited'
        },
        {
            feature: 'Course Platform',
            systemeio: '✓ Included',
            clickfunnels: '✓ Included',
            kartra: '✓ Included',
            gohighlevel: '✓ Limited'
        },
        {
            feature: 'Affiliate Management',
            systemeio: '✓ Full Featured',
            clickfunnels: '✓ Available',
            kartra: '✓ Available',
            gohighlevel: '✓ Basic'
        },
        {
            feature: 'Transaction Fees',
            systemeio: '0%',
            clickfunnels: '0%',
            kartra: '0-5%',
            gohighlevel: '0%'
        },
        {
            feature: 'Webinar Hosting',
            systemeio: '✓ Evergreen',
            clickfunnels: '✓ Available',
            kartra: '✓ Full Featured',
            gohighlevel: '✗ Limited'
        },
        {
            feature: 'Custom Domains',
            systemeio: '✓ 1-10+',
            clickfunnels: '✓ 3-5+',
            kartra: '✓ 1-5',
            gohighlevel: '✓ 3+'
        },
        {
            feature: 'A/B Testing',
            systemeio: '✓ Included',
            clickfunnels: '✓ Advanced',
            kartra: '✓ Included',
            gohighlevel: '✓ Included'
        },
        {
            feature: 'Mobile App',
            systemeio: '✓ Yes',
            clickfunnels: '✓ Yes',
            kartra: '✓ Yes',
            gohighlevel: '✓ White-label'
        },
        {
            feature: 'Learning Curve',
            systemeio: 'Easy',
            clickfunnels: 'Moderate',
            kartra: 'Moderate',
            gohighlevel: 'Steep'
        },
        {
            feature: 'Customer Support',
            systemeio: '24/7',
            clickfunnels: 'Standard',
            kartra: 'Standard',
            gohighlevel: '24/7'
        }
    ];
    const performanceScores = [
        {
            category: 'Value for Money',
            systemeio: 95,
            clickfunnels: 78,
            kartra: 72,
            gohighlevel: 81
        },
        {
            category: 'Feature Richness',
            systemeio: 92,
            clickfunnels: 85,
            kartra: 88,
            gohighlevel: 89
        },
        {
            category: 'Ease of Use',
            systemeio: 95,
            clickfunnels: 75,
            kartra: 70,
            gohighlevel: 65
        },
        {
            category: 'Customer Support',
            systemeio: 92,
            clickfunnels: 80,
            kartra: 75,
            gohighlevel: 88
        }
    ];
    const yearlyCosts = [
        {
            platform: 'Systeme.io (Startup Plan)',
            monthly: 27,
            yearly: 324,
            color: 'bg-gradient-to-r from-green-500 to-emerald-600'
        },
        {
            platform: 'ClickFunnels (Basic Plan)',
            monthly: 97,
            yearly: 1164,
            color: 'bg-gradient-to-r from-blue-500 to-blue-600'
        },
        {
            platform: 'Kartra (Starter Plan)',
            monthly: 119,
            yearly: 1428,
            color: 'bg-gradient-to-r from-purple-500 to-purple-600'
        },
        {
            platform: 'GoHighLevel (Starter Plan)',
            monthly: 97,
            yearly: 1164,
            color: 'bg-gradient-to-r from-cyan-500 to-cyan-600'
        }
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        className: "jsx-49bba80d8f50c89a",
                        children: "Systeme.io vs ClickFunnels vs Kartra vs GoHighLevel 2025 Comparison | DigiCompares"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Complete 2025 comparison of Systeme.io vs ClickFunnels vs Kartra vs GoHighLevel. Find the best all-in-one marketing platform for your business. Expert analysis, pricing, and features.",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "systeme.io, clickfunnels, kartra, gohighlevel, marketing platform comparison, all-in-one marketing tools",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Systeme.io vs Competitors 2025 - Complete Comparison | DigiCompares",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Expert comparison of top marketing platforms. Find the best solution for your business growth.",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "article",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:site_name",
                        content: "DigiCompares",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Systeme.io vs Competitors 2025 | DigiCompares",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Complete comparison of top marketing platforms. Make an informed decision for your business.",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://digicompares.com/systeme-io-vs-competitors",
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
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
                        },
                        className: "jsx-49bba80d8f50c89a"
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/crm-tools/page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-49bba80d8f50c89a" + " " + `min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "jsx-49bba80d8f50c89a" + " " + "bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-49bba80d8f50c89a" + " " + "container mx-auto px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-49bba80d8f50c89a" + " " + "flex justify-between items-center py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-49bba80d8f50c89a" + " " + "text-white font-bold text-xs",
                                                    children: "DC"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-lg font-bold text-gray-800",
                                                children: "DigiCompares"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "hidden md:flex space-x-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#overview",
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors",
                                                children: "Overview"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#comparison",
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors",
                                                children: "Comparison"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#pricing",
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors",
                                                children: "Pricing"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#verdict",
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors",
                                                children: "Verdict"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#faq",
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors",
                                                children: "FAQ"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://systeme.io",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm cursor-pointer shadow-md",
                                        children: "Get Started"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/crm-tools/page.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "jsx-49bba80d8f50c89a" + " " + "relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-49bba80d8f50c89a" + " " + "absolute inset-0 bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-49bba80d8f50c89a" + " " + "relative container mx-auto px-4 py-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-49bba80d8f50c89a" + " " + "text-xs font-medium",
                                            children: "🏆 #1 Rated All-in-One Platform 2025"
                                        }, void 0, false, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-3xl md:text-5xl font-bold mb-4 leading-tight scroll-animate",
                                        children: "Systeme.io vs Competitors"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed scroll-animate",
                                        children: "Complete 2025 Comparison Guide - Find Your Perfect Marketing Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 scroll-animate",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white/20 backdrop-blur-sm rounded-full px-4 py-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-49bba80d8f50c89a" + " " + "text-white text-xs font-semibold",
                                                    children: "✅ Expert Verified Analysis"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white/20 backdrop-blur-sm rounded-full px-4 py-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-49bba80d8f50c89a" + " " + "text-white text-xs font-semibold",
                                                    children: "📊 Data-Driven Comparison"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white/20 backdrop-blur-sm rounded-full px-4 py-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-49bba80d8f50c89a" + " " + "text-white text-xs font-semibold",
                                                    children: "🕒 Updated November 2025"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "scroll-animate",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://systeme.io",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-xl mr-3 cursor-pointer inline-block",
                                                children: "🚀 Start Free Trial"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#comparison",
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 cursor-pointer inline-block",
                                                children: "📖 Read Full Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-49bba80d8f50c89a" + " " + "container mx-auto px-4 py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "overview",
                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-2xl p-6 mb-8 shadow-lg scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-4 text-center",
                                        children: "Why This Comparison Matters"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-sm leading-relaxed",
                                                children: "Choosing the right all-in-one marketing platform can make or break your online business. In today's competitive digital landscape, having the right tools isn't just an advantage—it's a necessity. The platform you choose impacts everything from customer acquisition costs to conversion rates and long-term scalability."
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-sm leading-relaxed",
                                                children: "With so many options available, each claiming to be the \"best,\" it's crucial to understand which platform offers genuine value, features that matter, and ease of use for your specific needs. Many entrepreneurs waste thousands of dollars on overpriced platforms that don't match their business requirements."
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-sm leading-relaxed",
                                                children: "In this comprehensive 2025 comparison, we've conducted extensive research, analyzed real user data, and tested each platform thoroughly to provide you with unbiased, actionable insights. Our goal is to help you make an informed decision that aligns with your business goals and budget."
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "flex items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-49bba80d8f50c89a" + " " + "text-white font-bold text-xs",
                                                            children: "!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-blue-800 text-lg font-semibold",
                                                        children: "Important Note"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-blue-700 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-49bba80d8f50c89a",
                                                        children: "Last Updated:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 17
                                                    }, this),
                                                    " November 2025 | ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-49bba80d8f50c89a",
                                                        children: "Data Sources:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 64
                                                    }, this),
                                                    " Official platform documentation, user reviews, industry analysis, and hands-on testing. All information verified through multiple sources to ensure accuracy."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-49bba80d8f50c89a" + " " + "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-xl p-4 text-center shadow-md border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-1",
                                                children: "300K+"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-sm",
                                                children: "Active Users"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 374,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-xl p-4 text-center shadow-md border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-1",
                                                children: "$0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-sm",
                                                children: "To Start"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-xl p-4 text-center shadow-md border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-1",
                                                children: "24/7"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-sm",
                                                children: "Support"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-xl p-4 text-center shadow-md border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-1",
                                                children: "4.8★"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-sm",
                                                children: "Rating"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 384,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "comparison",
                                className: "jsx-49bba80d8f50c89a" + " " + "mb-16 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-3xl font-bold text-gray-800 text-center mb-4",
                                        children: "Platform Rankings 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-center text-sm mb-8 max-w-2xl mx-auto",
                                        children: "Based on comprehensive analysis of features, pricing, user experience, and real-world performance"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6",
                                        children: platforms.map((platform, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + `${platform.cardColor} rounded-2xl p-6 relative overflow-hidden transform transition-all duration-500 hover:scale-105 ${index === 0 ? 'shadow-xl' : 'shadow-lg'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + `absolute top-4 right-4 ${platform.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`,
                                                        children: platform.rank
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-4xl mb-4 text-center",
                                                        children: [
                                                            '🚀',
                                                            '💎',
                                                            '📊',
                                                            '⚡'
                                                        ][index]
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-xl font-bold text-gray-800 mb-3 text-center",
                                                        children: platform.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "flex items-center justify-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "flex",
                                                                children: [
                                                                    ...Array(5)
                                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + `text-lg ${i < Math.floor(platform.rating) ? 'text-yellow-400' : 'text-gray-300'}`,
                                                                        children: "⭐"
                                                                    }, i, false, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 416,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 ml-2 text-sm font-semibold",
                                                                children: [
                                                                    platform.rating,
                                                                    "/5"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-gray-50 rounded-xl p-4 mb-4 text-center border border-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-xl font-bold text-gray-800 mb-1",
                                                                children: platform.price
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-500 text-xs",
                                                                children: "per month"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 21
                                                            }, this),
                                                            index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-green-600 text-xs font-semibold mt-1",
                                                                children: "💰 Best value in the market"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "space-y-2 mb-6",
                                                        children: platform.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "flex items-start text-gray-600 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-green-500 mr-2 mt-0.5 flex-shrink-0",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 440,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "leading-relaxed",
                                                                        children: feature
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: platform.link,
                                                        target: platform.link.startsWith('http') ? '_blank' : '_self',
                                                        rel: platform.link.startsWith('http') ? 'noopener noreferrer' : '',
                                                        className: "jsx-49bba80d8f50c89a" + " " + `w-full ${platform.ctaColor} font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg block text-center text-sm`,
                                                        children: platform.cta
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, platform.name, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-2xl p-6 mb-16 shadow-lg scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-4 text-center",
                                        children: "Feature-by-Feature Comparison"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 461,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-center text-sm mb-6 max-w-2xl mx-auto",
                                        children: "Detailed analysis of every major feature across all platforms"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 462,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "overflow-x-auto rounded-xl border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "jsx-49bba80d8f50c89a" + " " + "w-full min-w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "jsx-49bba80d8f50c89a",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-gradient-to-r from-blue-600 to-purple-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "py-4 px-4 text-left text-white font-bold text-sm",
                                                                children: "Feature"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "py-4 px-4 text-center text-white font-bold text-sm bg-blue-700 border-l border-white/20",
                                                                children: "Systeme.io"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20",
                                                                children: "ClickFunnels"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20",
                                                                children: "Kartra"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20",
                                                                children: "GoHighLevel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "jsx-49bba80d8f50c89a",
                                                    children: comparisonData.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "jsx-49bba80d8f50c89a" + " " + `border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "py-3 px-4 text-gray-800 font-semibold text-sm",
                                                                    children: row.feature
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "py-3 px-4 text-center text-gray-700 text-sm bg-blue-50 font-semibold border-l border-gray-200",
                                                                    children: row.systemeio
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200",
                                                                    children: row.clickfunnels
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200",
                                                                    children: row.kartra
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200",
                                                                    children: row.gohighlevel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "mt-6 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-49bba80d8f50c89a" + " " + "text-gray-500 text-xs",
                                            children: "✅ = Full Feature Available   |   ✓ = Available with Limitations   |   ✗ = Not Available"
                                        }, void 0, false, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 460,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-49bba80d8f50c89a" + " " + "mb-16 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-8 text-center",
                                        children: "Performance Analysis & Scores"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                        children: performanceScores.map((score, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-2xl p-6 shadow-lg border border-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-xl font-bold text-gray-800 mb-6 text-center",
                                                        children: score.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 518,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "space-y-4",
                                                        children: [
                                                            {
                                                                platform: 'Systeme.io',
                                                                score: score.systemeio,
                                                                color: 'bg-gradient-to-r from-green-500 to-emerald-600'
                                                            },
                                                            {
                                                                platform: 'ClickFunnels',
                                                                score: score.clickfunnels,
                                                                color: 'bg-gradient-to-r from-blue-500 to-blue-600'
                                                            },
                                                            {
                                                                platform: 'Kartra',
                                                                score: score.kartra,
                                                                color: 'bg-gradient-to-r from-purple-500 to-purple-600'
                                                            },
                                                            {
                                                                platform: 'GoHighLevel',
                                                                score: score.gohighlevel,
                                                                color: 'bg-gradient-to-r from-cyan-500 to-cyan-600'
                                                            }
                                                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "flex justify-between items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-700 font-semibold text-sm",
                                                                                children: item.platform
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                                lineNumber: 528,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-800 font-bold text-sm",
                                                                                children: [
                                                                                    item.score,
                                                                                    "/100"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                                lineNumber: 529,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 527,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-gray-200 rounded-full h-3 overflow-hidden",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                width: `${item.score}%`
                                                                            },
                                                                            className: "jsx-49bba80d8f50c89a" + " " + `h-full ${item.color} rounded-full bar-fill transition-all duration-1500 ease-out`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                                            lineNumber: 532,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 531,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, item.platform, true, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, score.category, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 517,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "pricing",
                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-2xl p-6 mb-16 shadow-lg border border-gray-100 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-4 text-center",
                                        children: "Pricing Comparison Over 12 Months"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 547,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-center text-sm mb-6 max-w-2xl mx-auto",
                                        children: "See the real cost difference when scaling your business - based on starter plans"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 548,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "space-y-6",
                                        children: yearlyCosts.map((cost, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-gray-700 font-semibold text-sm",
                                                                children: cost.platform
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-gray-800 font-bold text-sm",
                                                                        children: [
                                                                            "$",
                                                                            cost.yearly,
                                                                            "/year"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-gray-500 text-xs",
                                                                        children: [
                                                                            "$",
                                                                            cost.monthly,
                                                                            "/month"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-gray-200 rounded-full h-4 overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: `${cost.monthly / 119 * 85}%`
                                                            },
                                                            className: "jsx-49bba80d8f50c89a" + " " + `h-full ${cost.color} rounded-full bar-fill transition-all duration-1500 ease-out flex items-center justify-end pr-3`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white text-xs font-semibold",
                                                                children: [
                                                                    "$",
                                                                    cost.monthly,
                                                                    "/mo"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 567,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, cost.platform, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "mt-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-49bba80d8f50c89a" + " " + "text-green-700 text-sm font-bold",
                                            children: "💰 Systeme.io saves you $840 - $1,104 per year compared to competitors!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 575,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 574,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-49bba80d8f50c89a" + " " + "mb-16 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-8 text-center",
                                        children: "Systeme.io: Detailed Pros & Cons"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 583,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-green-50 border border-green-200 rounded-2xl p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mr-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "text-white text-xl",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 590,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-xl font-bold text-green-700",
                                                                children: "Advantages"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 592,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "space-y-3",
                                                        children: [
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
                                                        ].map((pro, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "flex items-start text-gray-700 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-green-500 mr-2 mt-0.5 flex-shrink-0",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 608,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "leading-relaxed",
                                                                        children: pro
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 609,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 607,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 587,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-red-50 border border-red-200 rounded-2xl p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center mr-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "text-white text-xl",
                                                                    children: "✗"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 619,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 618,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-xl font-bold text-red-700",
                                                                children: "Limitations"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 621,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 617,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "space-y-3",
                                                        children: [
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
                                                        ].map((con, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "flex items-start text-gray-700 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-red-500 mr-2 mt-0.5 flex-shrink-0",
                                                                        children: "✗"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 637,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "leading-relaxed",
                                                                        children: con
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 638,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 636,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 616,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 585,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 582,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "verdict",
                                className: "jsx-49bba80d8f50c89a" + " " + "bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-16 text-center scroll-animate relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "absolute inset-0 bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 648,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-3xl font-bold text-white mb-4",
                                                children: "🏆 Final Verdict: Why Systeme.io Wins"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 650,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-lg text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed",
                                                children: [
                                                    "After comprehensive analysis of features, pricing, user experience, and real-world performance, ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-49bba80d8f50c89a",
                                                        children: "Systeme.io emerges as the clear winner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 113
                                                    }, this),
                                                    " for most online entrepreneurs, small businesses, and digital marketers."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 651,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-left",
                                                children: [
                                                    'Unbeatable Value: The only platform offering a truly functional free plan with unlimited emails',
                                                    'Affordable Scaling: Paid plans start at just $27/month (or $17 with new pricing)',
                                                    'Complete Solution: Everything you need in one place - no hidden costs or add-ons',
                                                    'Beginner-Friendly: Easiest learning curve of all platforms reviewed',
                                                    'No Risk: Start free and upgrade only when your business grows',
                                                    'Proven Results: Trusted by 300,000+ entrepreneurs worldwide'
                                                ].map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "flex items-start bg-white/20 rounded-xl p-4 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white text-xl mr-3 mt-0.5",
                                                                children: "✅"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 665,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white text-sm leading-relaxed",
                                                                children: point
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 666,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 655,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white text-lg mb-6 max-w-3xl mx-auto leading-relaxed",
                                                children: "Whether you're launching your first online business or scaling an existing one, Systeme.io provides the perfect balance of features, affordability, and ease of use. The platform's commitment to continuous improvement and customer success makes it the smart choice for 2025 and beyond."
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 671,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://systeme.io",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer inline-block",
                                                children: "🚀 Get Started with Systeme.io FREE →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 675,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white/80 mt-4 text-sm",
                                                children: "✓ No Credit Card Required   •   ✓ Cancel Anytime   •   ✓ Free Forever Plan Available"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 684,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 649,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-49bba80d8f50c89a" + " " + "mb-16 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-8 text-center",
                                        children: "Who Should Choose Which Platform?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 692,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
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
                                        ].map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + `${section.color} rounded-xl p-6`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-xl font-bold text-gray-800 mb-4",
                                                        children: section.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 757,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "space-y-2",
                                                        children: section.points.map((point, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "flex items-start text-gray-700 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 mr-2 mt-0.5",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 761,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-49bba80d8f50c89a" + " " + "leading-relaxed",
                                                                        children: point
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                                        lineNumber: 762,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 760,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 758,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, section.title, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 753,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 694,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 691,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-49bba80d8f50c89a" + " " + "bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6 mb-16 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-6 text-center",
                                        children: "💡 Quick Decision Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 773,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                        children: [
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
                                        ].map((guide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + `text-lg font-bold ${guide.color} mb-2`,
                                                        children: guide.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 818,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-xl font-bold text-gray-800 mb-2",
                                                        children: guide.platform
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 821,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-sm leading-relaxed",
                                                        children: guide.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 822,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, guide.title, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 814,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 775,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 772,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-2xl p-6 mb-16 shadow-lg border border-gray-100 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-6 text-center",
                                        children: "User Experience & Support Comparison"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 830,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "overflow-x-auto rounded-xl border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "jsx-49bba80d8f50c89a" + " " + "w-full min-w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "jsx-49bba80d8f50c89a",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "bg-gradient-to-r from-blue-600 to-purple-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "py-4 px-4 text-left text-white font-bold text-sm",
                                                                children: "Aspect"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "py-4 px-4 text-center text-white font-bold text-sm bg-blue-700 border-l border-white/20",
                                                                children: "Systeme.io"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 837,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20",
                                                                children: "ClickFunnels"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 838,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20",
                                                                children: "Kartra"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 839,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "py-4 px-4 text-center text-white font-bold text-sm border-l border-white/20",
                                                                children: "GoHighLevel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "jsx-49bba80d8f50c89a",
                                                    children: [
                                                        {
                                                            aspect: 'Setup Time',
                                                            systemeio: '15-30 minutes',
                                                            clickfunnels: '1-2 hours',
                                                            kartra: '1-2 hours',
                                                            gohighlevel: '2-4 hours'
                                                        },
                                                        {
                                                            aspect: 'Ease of Use (1-10)',
                                                            systemeio: '9.5/10',
                                                            clickfunnels: '7.5/10',
                                                            kartra: '7.0/10',
                                                            gohighlevel: '6.5/10'
                                                        },
                                                        {
                                                            aspect: 'Support Response Time',
                                                            systemeio: '< 2 hours',
                                                            clickfunnels: '4-24 hours',
                                                            kartra: '4-24 hours',
                                                            gohighlevel: '2-12 hours'
                                                        },
                                                        {
                                                            aspect: 'Documentation Quality',
                                                            systemeio: 'Excellent',
                                                            clickfunnels: 'Excellent',
                                                            kartra: 'Good',
                                                            gohighlevel: 'Good'
                                                        },
                                                        {
                                                            aspect: 'Video Tutorials',
                                                            systemeio: '✓ Extensive',
                                                            clickfunnels: '✓ Extensive',
                                                            kartra: '✓ Good',
                                                            gohighlevel: '✓ Good'
                                                        },
                                                        {
                                                            aspect: 'Community Forum',
                                                            systemeio: '✓ Active',
                                                            clickfunnels: '✓ Very Active',
                                                            kartra: '✓ Active',
                                                            gohighlevel: '✓ Very Active'
                                                        },
                                                        {
                                                            aspect: 'Live Chat Support',
                                                            systemeio: '✓ 24/7',
                                                            clickfunnels: '✓ Business Hours',
                                                            kartra: '✓ Business Hours',
                                                            gohighlevel: '✓ 24/7'
                                                        },
                                                        {
                                                            aspect: 'Onboarding Process',
                                                            systemeio: 'Guided & Simple',
                                                            clickfunnels: 'Comprehensive',
                                                            kartra: 'Moderate',
                                                            gohighlevel: 'Complex'
                                                        },
                                                        {
                                                            aspect: 'Migration Assistance',
                                                            systemeio: '✓ Free',
                                                            clickfunnels: '✓ Paid',
                                                            kartra: '✓ Paid',
                                                            gohighlevel: '✓ Varies'
                                                        }
                                                    ].map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "jsx-49bba80d8f50c89a" + " " + `border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "py-3 px-4 text-gray-800 font-semibold text-sm",
                                                                    children: row.aspect
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 861,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "py-3 px-4 text-center text-gray-700 text-sm bg-blue-50 font-semibold border-l border-gray-200",
                                                                    children: row.systemeio
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 862,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200",
                                                                    children: row.clickfunnels
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 865,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200",
                                                                    children: row.kartra
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 868,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-49bba80d8f50c89a" + " " + "py-3 px-4 text-center text-gray-700 text-sm border-l border-gray-200",
                                                                    children: row.gohighlevel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 871,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, row.aspect, true, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 855,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 833,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 832,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 829,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-49bba80d8f50c89a" + " " + "bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 mb-16 text-center scroll-animate relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "absolute inset-0 bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 883,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-3xl font-bold text-white mb-4",
                                                children: "🚀 Ready to Transform Your Online Business?"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 885,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed",
                                                children: "Join over 300,000 entrepreneurs who chose Systeme.io to build, grow, and scale their online businesses without complexity or hidden costs."
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 886,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-3xl font-bold text-white mb-1",
                                                                children: "300K+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 892,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white/80 text-sm",
                                                                children: "Active Users"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 893,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-3xl font-bold text-white mb-1",
                                                                children: "$0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 896,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white/80 text-sm",
                                                                children: "To Start"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 897,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 895,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-3xl font-bold text-white mb-1",
                                                                children: "24/7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 900,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white/80 text-sm",
                                                                children: "Support"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 901,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 899,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-3xl font-bold text-white mb-1",
                                                                children: "4.8★"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 904,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white/80 text-sm",
                                                                children: "User Rating"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 905,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 890,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://systeme.io",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 shadow-2xl mb-3 cursor-pointer inline-block",
                                                children: "🎁 Start Your FREE Account Now →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 909,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white/80 text-sm",
                                                children: "✓ No Credit Card Required   •   ✓ Cancel Anytime   •   ✓ Free Forever Plan Available"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 918,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 884,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 882,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "faq",
                                className: "jsx-49bba80d8f50c89a" + " " + "bg-white rounded-2xl p-6 mb-16 shadow-lg border border-gray-100 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold text-gray-800 mb-8 text-center",
                                        children: "Frequently Asked Questions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 926,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-49bba80d8f50c89a" + " " + "space-y-4",
                                        children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>toggleFAQ(index),
                                                className: "jsx-49bba80d8f50c89a" + " " + "bg-gray-50 rounded-xl p-4 border border-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + "text-lg font-semibold text-gray-800 pr-4",
                                                                children: faq.question
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-49bba80d8f50c89a" + " " + `text-gray-600 text-xl transition-transform duration-300 ${activeFAQ === index ? 'rotate-180' : ''}`,
                                                                children: "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                                lineNumber: 937,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-49bba80d8f50c89a" + " " + `faq-answer mt-3 ${activeFAQ === index ? 'block' : 'hidden'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-49bba80d8f50c89a" + " " + "text-gray-600 text-sm leading-relaxed",
                                                            children: faq.answer
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 942,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/crm-tools/page.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 930,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/crm-tools/page.tsx",
                                        lineNumber: 928,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 925,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-49bba80d8f50c89a" + " " + "bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8 scroll-animate",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-49bba80d8f50c89a" + " " + "flex items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-49bba80d8f50c89a" + " " + "w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white font-bold text-sm",
                                                children: "⚠️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 953,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 952,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-49bba80d8f50c89a",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-49bba80d8f50c89a" + " " + "text-xl font-bold text-yellow-800 mb-3",
                                                    children: "Important Disclaimer"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 956,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-49bba80d8f50c89a" + " " + "text-yellow-700 text-sm mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "jsx-49bba80d8f50c89a",
                                                            children: "DigiCompares"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 958,
                                                            columnNumber: 19
                                                        }, this),
                                                        " is an independent comparison platform that provides honest, data-driven reviews of online business tools. While we strive for accuracy, please note:"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-49bba80d8f50c89a" + " " + "text-yellow-700 space-y-1 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-49bba80d8f50c89a",
                                                            children: "• All information is based on publicly available data and may change over time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 961,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-49bba80d8f50c89a",
                                                            children: "• Prices and features are accurate as of the last update date (November 2025)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 962,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-49bba80d8f50c89a",
                                                            children: [
                                                                "• ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "jsx-49bba80d8f50c89a",
                                                                    children: "DigiCompares is not responsible for your purchasing decisions, actions, or any financial losses"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                                    lineNumber: 963,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " that may result from using the platforms reviewed"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 963,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-49bba80d8f50c89a",
                                                            children: "• We may earn affiliate commissions when you sign up through our links, at no extra cost to you"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 964,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-49bba80d8f50c89a",
                                                            children: "• Always conduct your own research and read the terms of service before making any purchase"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 965,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-49bba80d8f50c89a",
                                                            children: "• We provide genuine comparisons but cannot guarantee specific results for your business"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 966,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-49bba80d8f50c89a",
                                                            children: "• Please verify current pricing and features on the official platform websites"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/crm-tools/page.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/crm-tools/page.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 955,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/crm-tools/page.tsx",
                                    lineNumber: 951,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/crm-tools/page.tsx",
                                lineNumber: 950,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "jsx-49bba80d8f50c89a" + " " + "bg-gray-800 text-white py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-49bba80d8f50c89a" + " " + "container mx-auto px-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-49bba80d8f50c89a" + " " + "flex justify-center items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-49bba80d8f50c89a" + " " + "w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-49bba80d8f50c89a" + " " + "text-white font-bold text-lg",
                                                children: "DC"
                                            }, void 0, false, {
                                                fileName: "[project]/app/crm-tools/page.tsx",
                                                lineNumber: 979,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 978,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-49bba80d8f50c89a" + " " + "text-2xl font-bold",
                                            children: "DigiCompares"
                                        }, void 0, false, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 981,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/crm-tools/page.tsx",
                                    lineNumber: 977,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-49bba80d8f50c89a" + " " + "text-gray-300 text-sm mb-3",
                                    children: "Your Trusted Digital Tools Comparison Platform"
                                }, void 0, false, {
                                    fileName: "[project]/app/crm-tools/page.tsx",
                                    lineNumber: 983,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-49bba80d8f50c89a" + " " + "text-gray-400 text-xs mb-4",
                                    children: "Helping entrepreneurs make informed decisions since 2025"
                                }, void 0, false, {
                                    fileName: "[project]/app/crm-tools/page.tsx",
                                    lineNumber: 984,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-49bba80d8f50c89a" + " " + "flex justify-center space-x-6 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "jsx-49bba80d8f50c89a" + " " + "text-gray-400 hover:text-white transition-colors text-xs",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 986,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "jsx-49bba80d8f50c89a" + " " + "text-gray-400 hover:text-white transition-colors text-xs",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 987,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "jsx-49bba80d8f50c89a" + " " + "text-gray-400 hover:text-white transition-colors text-xs",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 988,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "jsx-49bba80d8f50c89a" + " " + "text-gray-400 hover:text-white transition-colors text-xs",
                                            children: "About"
                                        }, void 0, false, {
                                            fileName: "[project]/app/crm-tools/page.tsx",
                                            lineNumber: 989,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/crm-tools/page.tsx",
                                    lineNumber: 985,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-49bba80d8f50c89a" + " " + "text-gray-500 text-xs mt-6",
                                    children: "Last Updated: November 22, 2025 | © 2025 DigiCompares. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/app/crm-tools/page.tsx",
                                    lineNumber: 991,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-49bba80d8f50c89a" + " " + "text-gray-500 text-xs mt-1",
                                    children: "This page may contain affiliate links. We earn a commission at no extra cost to you."
                                }, void 0, false, {
                                    fileName: "[project]/app/crm-tools/page.tsx",
                                    lineNumber: 994,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/crm-tools/page.tsx",
                            lineNumber: 976,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/crm-tools/page.tsx",
                        lineNumber: 975,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/crm-tools/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "49bba80d8f50c89a",
                children: "@keyframes fade-in-up{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.scroll-animate{opacity:0;transition:opacity .6s,transform .6s;transform:translateY(30px)}.scroll-animate.animate-in{opacity:1;transform:translateY(0)}html{scroll-behavior:smooth}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#f1f1f1;border-radius:3px}::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:3px}::-webkit-scrollbar-thumb:hover{background:#a8a8a8}.faq-answer{transition:all .3s ease-in-out}@keyframes gradient-shift{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}.animate-gradient{background-size:200% 200%;animation:3s infinite gradient-shift}.btn-hover{transition:all .3s}.btn-hover:hover{transform:translateY(-2px);box-shadow:0 10px 25px #0000001a}.card-hover{transition:all .3s}.card-hover:hover{transform:translateY(-5px);box-shadow:0 15px 30px #0000001a}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(SystemeIOComparison, "spnTXkqX86O9ZcItvVhsdlhSbCQ=");
_c = SystemeIOComparison;
var _c;
__turbopack_context__.k.register(_c, "SystemeIOComparison");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_crm-tools_page_tsx_71badd4a._.js.map