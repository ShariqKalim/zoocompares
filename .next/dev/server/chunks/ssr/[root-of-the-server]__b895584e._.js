module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/e-commerce/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/page.tsx
__turbopack_context__.s([
    "default",
    ()=>ShopifyComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ShopifyComparison() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeFAQ, setActiveFAQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeFeature, setActiveFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsVisible(true);
        // Smooth scroll for anchor links
        const smoothScroll = ()=>{
            document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        };
        // Animate elements on scroll
        const animateOnScroll = ()=>{
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.scroll-animate').forEach((el)=>{
                observer.observe(el);
            });
        };
        smoothScroll();
        animateOnScroll();
        // Animate progress bars
        const animateBars = ()=>{
            const barObserver = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        const bars = entry.target.querySelectorAll('.bar-fill');
                        bars.forEach((bar)=>{
                            const width = bar.style.width;
                            bar.style.width = '0%';
                            setTimeout(()=>{
                                bar.style.transition = 'width 1.5s ease-in-out';
                                bar.style.width = width;
                            }, 100);
                        });
                    }
                });
            }, {
                threshold: 0.5
            });
            document.querySelectorAll('.chart-section, .bar-chart').forEach((el)=>{
                barObserver.observe(el);
            });
        };
        animateBars();
    }, []);
    const toggleFAQ = (index)=>{
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
                {
                    name: 'Drag & Drop Builder',
                    shopify: true,
                    bigcommerce: false,
                    woocommerce: false,
                    wix: true
                },
                {
                    name: 'No-Code Setup',
                    shopify: true,
                    bigcommerce: true,
                    woocommerce: false,
                    wix: true
                },
                {
                    name: 'Mobile App Management',
                    shopify: true,
                    bigcommerce: true,
                    woocommerce: false,
                    wix: true
                },
                {
                    name: 'AI Design Assistance',
                    shopify: false,
                    bigcommerce: false,
                    woocommerce: false,
                    wix: true
                }
            ]
        },
        {
            title: "Sales & Marketing",
            features: [
                {
                    name: 'Abandoned Cart Recovery',
                    shopify: true,
                    bigcommerce: true,
                    woocommerce: true,
                    wix: true
                },
                {
                    name: 'Email Marketing Built-in',
                    shopify: true,
                    bigcommerce: true,
                    woocommerce: false,
                    wix: true
                },
                {
                    name: 'Multi-channel Selling',
                    shopify: true,
                    bigcommerce: true,
                    woocommerce: true,
                    wix: false
                },
                {
                    name: 'Automated SEO Tools',
                    shopify: true,
                    bigcommerce: true,
                    woocommerce: true,
                    wix: true
                }
            ]
        },
        {
            title: "Advanced Features",
            features: [
                {
                    name: 'B2B/Wholesale Features',
                    shopify: true,
                    bigcommerce: true,
                    woocommerce: true,
                    wix: false
                },
                {
                    name: 'Subscription Management',
                    shopify: true,
                    bigcommerce: true,
                    woocommerce: true,
                    wix: true
                },
                {
                    name: 'International Commerce',
                    shopify: true,
                    bigcommerce: true,
                    woocommerce: true,
                    wix: false
                },
                {
                    name: 'Headless Commerce',
                    shopify: true,
                    bigcommerce: true,
                    woocommerce: true,
                    wix: false
                }
            ]
        }
    ];
    const comparisonData = [
        {
            feature: 'Starting Price (Monthly)',
            shopify: '$29',
            bigcommerce: '$39',
            woocommerce: 'Free*',
            wix: '$17'
        },
        {
            feature: 'Transaction Fees',
            shopify: '0-2%',
            bigcommerce: '0%',
            woocommerce: 'Payment Processor',
            wix: '0%'
        },
        {
            feature: 'App Ecosystem Size',
            shopify: '8,000+',
            bigcommerce: '600+',
            woocommerce: '50,000+',
            wix: '250+'
        },
        {
            feature: 'Ease of Use Score',
            shopify: '95/100',
            bigcommerce: '80/100',
            woocommerce: '65/100',
            wix: '90/100'
        },
        {
            feature: 'Customization Level',
            shopify: 'High',
            bigcommerce: 'High',
            woocommerce: 'Unlimited',
            wix: 'Medium'
        },
        {
            feature: 'SEO Capabilities',
            shopify: 'Advanced',
            bigcommerce: 'Enterprise',
            woocommerce: 'Full Control',
            wix: 'Basic'
        },
        {
            feature: 'Mobile App',
            shopify: 'Full Featured',
            bigcommerce: 'Limited',
            woocommerce: 'Third-party',
            wix: 'Full Featured'
        },
        {
            feature: '24/7 Phone Support',
            shopify: 'Yes',
            bigcommerce: 'Yes',
            woocommerce: 'No',
            wix: 'Yes'
        },
        {
            feature: 'Multi-Currency',
            shopify: '150+',
            bigcommerce: '100+',
            woocommerce: 'Plugins',
            wix: '50+'
        },
        {
            feature: 'B2B Features',
            shopify: 'Advanced',
            bigcommerce: 'Native',
            woocommerce: 'Plugins',
            wix: 'Basic'
        },
        {
            feature: 'App Store Rating',
            shopify: '4.8★',
            bigcommerce: '4.5★',
            woocommerce: '4.3★',
            wix: '4.2★'
        },
        {
            feature: 'Setup Time',
            shopify: '2-3 days',
            bigcommerce: '3-5 days',
            woocommerce: '1-2 weeks',
            wix: '1-3 days'
        }
    ];
    const performanceScores = [
        {
            category: 'Ease of Use',
            shopify: 95,
            bigcommerce: 80,
            woocommerce: 65,
            wix: 90
        },
        {
            category: 'Scalability',
            shopify: 92,
            bigcommerce: 95,
            woocommerce: 85,
            wix: 75
        },
        {
            category: 'Customization',
            shopify: 85,
            bigcommerce: 88,
            woocommerce: 98,
            wix: 70
        },
        {
            category: 'Value for Money',
            shopify: 88,
            bigcommerce: 85,
            woocommerce: 95,
            wix: 82
        },
        {
            category: 'Customer Support',
            shopify: 94,
            bigcommerce: 90,
            woocommerce: 70,
            wix: 88
        },
        {
            category: 'Mobile Experience',
            shopify: 96,
            bigcommerce: 85,
            woocommerce: 75,
            wix: 92
        }
    ];
    const yearlyCosts = [
        {
            platform: 'Shopify (Basic Plan)',
            monthly: 29,
            yearly: 348,
            color: 'bg-gradient-to-r from-indigo-500 to-purple-600'
        },
        {
            platform: 'BigCommerce (Standard Plan)',
            monthly: 39,
            yearly: 468,
            color: 'bg-gradient-to-r from-blue-500 to-cyan-600'
        },
        {
            platform: 'WooCommerce (Est. Total Cost)',
            monthly: 25,
            yearly: 300,
            color: 'bg-gradient-to-r from-orange-500 to-red-500'
        },
        {
            platform: 'Wix eCommerce (Business Plan)',
            monthly: 27,
            yearly: 324,
            color: 'bg-gradient-to-r from-teal-500 to-green-500'
        }
    ];
    const marketShareData = [
        {
            platform: 'Shopify',
            share: 28,
            growth: '+12%',
            color: 'from-indigo-500 to-purple-600'
        },
        {
            platform: 'WooCommerce',
            share: 23,
            growth: '+8%',
            color: 'from-orange-500 to-red-500'
        },
        {
            platform: 'Wix',
            share: 15,
            growth: '+15%',
            color: 'from-teal-500 to-green-500'
        },
        {
            platform: 'BigCommerce',
            share: 8,
            growth: '+10%',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            platform: 'Others',
            share: 26,
            growth: '+5%',
            color: 'from-gray-400 to-gray-600'
        }
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
            features: [
                "Quick setup",
                "Low initial cost",
                "Easy scaling",
                "Built-in marketing"
            ]
        },
        {
            type: "Enterprise & B2B Companies",
            description: "Ideal for large organizations with complex needs",
            recommended: "BigCommerce",
            reason: "Native enterprise features and robust B2B capabilities",
            features: [
                "Advanced B2B tools",
                "Enterprise security",
                "Complex pricing",
                "Multi-store management"
            ]
        },
        {
            type: "Content-Heavy & Blog-Focused",
            description: "Best for businesses where content drives commerce",
            recommended: "WooCommerce",
            reason: "Deep WordPress integration and content flexibility",
            features: [
                "Blog integration",
                "Content marketing",
                "SEO control",
                "Custom content types"
            ]
        },
        {
            type: "Design-Focused Brands",
            description: "Perfect for brands prioritizing unique visual identity",
            recommended: "Wix eCommerce",
            reason: "Unmatched design flexibility and creative control",
            features: [
                "Visual design",
                "Brand customization",
                "Creative freedom",
                "Template variety"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        className: "jsx-7446c311755d706c",
                        children: "Shopify vs BigCommerce vs WooCommerce vs Wix 2025 Comparison | DigiCompares"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Complete 2025 comparison of Shopify vs BigCommerce vs WooCommerce vs Wix eCommerce. Find the best ecommerce platform for your business. Expert analysis, pricing, and features.",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "shopify, bigcommerce, woocommerce, wix, ecommerce platform comparison, online store builder",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "Shopify vs Competitors 2025 - Complete Ecommerce Comparison | DigiCompares",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Expert comparison of top ecommerce platforms. Find the best solution for your online store growth.",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "article",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:site_name",
                        content: "DigiCompares",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:title",
                        content: "Shopify vs Competitors 2025 | DigiCompares",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "twitter:description",
                        content: "Complete comparison of top ecommerce platforms. Make an informed decision for your business.",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://digicompares.com/shopify-vs-competitors",
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
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
                        },
                        className: "jsx-7446c311755d706c"
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/e-commerce/page.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7446c311755d706c" + " " + `min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "jsx-7446c311755d706c" + " " + "bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7446c311755d706c" + " " + "container mx-auto px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7446c311755d706c" + " " + "flex justify-between items-center py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-2 sm:mr-3 shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7446c311755d706c" + " " + "text-white font-bold text-xs sm:text-sm",
                                                    children: "DC"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7446c311755d706c" + " " + "text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
                                                children: "DigiCompares"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "hidden md:flex space-x-4 lg:space-x-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#overview",
                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 hover:text-indigo-600 font-medium text-sm transition-all duration-300 hover:scale-105",
                                                children: "Overview"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#comparison",
                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 hover:text-indigo-600 font-medium text-sm transition-all duration-300 hover:scale-105",
                                                children: "Comparison"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#pricing",
                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 hover:text-indigo-600 font-medium text-sm transition-all duration-300 hover:scale-105",
                                                children: "Pricing"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#verdict",
                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 hover:text-indigo-600 font-medium text-sm transition-all duration-300 hover:scale-105",
                                                children: "Verdict"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#faq",
                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 hover:text-indigo-600 font-medium text-sm transition-all duration-300 hover:scale-105",
                                                children: "FAQ"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://shopify.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-7446c311755d706c" + " " + "bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap",
                                        children: "🚀 Start Free Trial"
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/e-commerce/page.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "jsx-7446c311755d706c" + " " + "relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7446c311755d706c" + " " + "absolute inset-0 bg-black/20"
                            }, void 0, false, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7446c311755d706c" + " " + "absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"
                            }, void 0, false, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7446c311755d706c" + " " + "absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"
                            }, void 0, false, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7446c311755d706c" + " " + "relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6 border border-white/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7446c311755d706c" + " " + "text-xs sm:text-sm font-medium",
                                            children: "🏆 #1 Rated Ecommerce Platform 2025"
                                        }, void 0, false, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-7446c311755d706c" + " " + "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight scroll-animate bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent",
                                        children: "Shopify vs Competitors"
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-7446c311755d706c" + " " + "text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed scroll-animate px-2",
                                        children: "Complete 2025 Ecommerce Platform Analysis - Data-Driven Insights for Your Business Success"
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-2xl mx-auto scroll-animate px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-xl sm:text-2xl font-bold text-white",
                                                        children: "2M+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-blue-100 text-xs sm:text-sm",
                                                        children: "Stores Worldwide"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-xl sm:text-2xl font-bold text-white",
                                                        children: "$29"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-blue-100 text-xs sm:text-sm",
                                                        children: "Starting Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-xl sm:text-2xl font-bold text-white",
                                                        children: "4.8★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-blue-100 text-xs sm:text-sm",
                                                        children: "User Rating"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 424,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-xl sm:text-2xl font-bold text-white",
                                                        children: "98%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-blue-100 text-xs sm:text-sm",
                                                        children: "Uptime"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "scroll-animate flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://shopify.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "jsx-7446c311755d706c" + " " + "bg-white text-indigo-600 hover:bg-gray-50 font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl cursor-pointer w-full sm:w-auto text-center",
                                                children: "🚀 Start Shopify Trial"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 435,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#comparison",
                                                className: "jsx-7446c311755d706c" + " " + "bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer w-full sm:w-auto text-center",
                                                children: "📊 Compare All Platforms"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 398,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7446c311755d706c" + " " + "container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "overview",
                                className: "jsx-7446c311755d706c" + " " + "bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-xl sm:shadow-2xl border border-gray-100 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "text-center mb-6 sm:mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-7446c311755d706c" + " " + "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4",
                                                children: "2025 Ecommerce Platform Landscape"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7446c311755d706c" + " " + "text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2",
                                                children: "The ecommerce platform you choose will fundamentally shape your business growth, customer experience, and operational efficiency. In 2025, the stakes are higher than ever."
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "space-y-4 sm:space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-xl sm:text-2xl font-bold text-gray-800",
                                                        children: "Why Platform Choice Matters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-gray-600 leading-relaxed text-sm sm:text-base",
                                                        children: "Your ecommerce platform is the foundation of your online business. It impacts everything from customer trust and conversion rates to operational scalability and long-term growth potential."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-7446c311755d706c" + " " + "space-y-2 sm:space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-7446c311755d706c" + " " + "flex items-center text-gray-600 text-sm sm:text-base",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c" + " " + "w-2 h-2 bg-indigo-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 472,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c",
                                                                        children: "Affects site speed and user experience"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 473,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-7446c311755d706c" + " " + "flex items-center text-gray-600 text-sm sm:text-base",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c" + " " + "w-2 h-2 bg-indigo-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c",
                                                                        children: "Determines scalability and growth potential"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 477,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-7446c311755d706c" + " " + "flex items-center text-gray-600 text-sm sm:text-base",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c" + " " + "w-2 h-2 bg-indigo-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 480,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c",
                                                                        children: "Impacts SEO and marketing capabilities"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 481,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-indigo-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4",
                                                        children: "2025 Market Insights"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "space-y-3 sm:space-y-4",
                                                        children: marketShareData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c" + " " + "text-gray-700 font-medium text-sm sm:text-base",
                                                                        children: item.platform
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7446c311755d706c" + " " + "flex items-center space-x-2 sm:space-x-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-7446c311755d706c" + " " + "w-16 sm:w-24 bg-gray-200 rounded-full h-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        width: `${item.share}%`
                                                                                    },
                                                                                    className: "jsx-7446c311755d706c" + " " + `h-2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                                    lineNumber: 494,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                                lineNumber: 493,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-7446c311755d706c" + " " + "text-xs sm:text-sm font-bold text-gray-700",
                                                                                children: [
                                                                                    item.share,
                                                                                    "%"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                                lineNumber: 499,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-7446c311755d706c" + " " + "text-xs text-green-600 font-semibold",
                                                                                children: item.growth
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                                lineNumber: 500,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 492,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, item.platform, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 486,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 sm:mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7446c311755d706c" + " " + "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7446c311755d706c" + " " + "w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-white font-bold text-xs sm:text-sm",
                                                        children: "ℹ️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 511,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7446c311755d706c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "jsx-7446c311755d706c" + " " + "text-blue-800 text-lg sm:text-xl font-semibold mb-1 sm:mb-2",
                                                            children: "Methodology & Data Sources"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7446c311755d706c" + " " + "text-blue-700 text-xs sm:text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "jsx-7446c311755d706c",
                                                                    children: "Last Updated:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " January 2025 | ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "jsx-7446c311755d706c",
                                                                    children: "Data Sources:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 67
                                                                }, this),
                                                                " Official platform analytics, G2 Crowd reviews, TrustPilot ratings, industry reports, and hands-on performance testing. All data verified through multiple independent sources."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "comparison",
                                className: "jsx-7446c311755d706c" + " " + "mb-12 sm:mb-20 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "text-center mb-8 sm:mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-7446c311755d706c" + " " + "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4",
                                                children: "2025 Platform Rankings & Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7446c311755d706c" + " " + "text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2",
                                                children: "Comprehensive evaluation based on 25+ performance metrics and real-world user experiences"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8",
                                        children: platforms.map((platform, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + `${platform.cardColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden transform transition-all duration-500 hover:scale-105 group`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + `absolute top-4 sm:top-6 right-4 sm:right-6 ${platform.badgeColor} text-white px-3 py-1 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold shadow-lg`,
                                                        children: platform.rank
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-4xl sm:text-5xl mb-4 sm:mb-6 text-center group-hover:scale-110 transition-transform duration-300",
                                                        children: [
                                                            '🛍️',
                                                            '🏢',
                                                            '⚙️',
                                                            '🎨'
                                                        ][index]
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center",
                                                        children: platform.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "flex items-center justify-center mb-4 sm:mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "flex",
                                                                children: [
                                                                    ...Array(5)
                                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c" + " " + `text-xl sm:text-2xl ${i < Math.floor(platform.rating) ? 'text-yellow-400' : 'text-gray-300'}`,
                                                                        children: "⭐"
                                                                    }, i, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 551,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 549,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 ml-2 sm:ml-3 text-base sm:text-lg font-semibold",
                                                                children: [
                                                                    platform.rating,
                                                                    "/5"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-gray-500 text-xs sm:text-sm ml-1 sm:ml-2",
                                                                children: [
                                                                    "(",
                                                                    platform.reviews,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 560,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 text-center border border-gray-200 group-hover:border-indigo-200 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-xl sm:text-2xl font-bold text-gray-800 mb-1",
                                                                children: platform.price
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 564,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-gray-500 text-xs sm:text-sm",
                                                                children: "per month"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 565,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-xs text-gray-500 mt-1 sm:mt-2",
                                                                children: [
                                                                    platform.users,
                                                                    " users"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 21
                                                            }, this),
                                                            index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-indigo-600 text-xs sm:text-sm font-semibold mt-1 sm:mt-2 flex items-center justify-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c" + " " + "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-600 rounded-full mr-1 sm:mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 569,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "🏆 Best overall value 2025"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 568,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "mb-4 sm:mb-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7446c311755d706c" + " " + "flex justify-between items-center mb-2 sm:mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7446c311755d706c" + " " + "text-gray-700 font-semibold text-sm sm:text-base",
                                                                    children: "Setup Time"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 577,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7446c311755d706c" + " " + "text-indigo-600 font-bold text-sm sm:text-base",
                                                                    children: platform.launchTime
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 576,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 575,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-7446c311755d706c" + " " + "space-y-2 sm:space-y-3 mb-6 sm:mb-8",
                                                        children: platform.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-7446c311755d706c" + " " + "flex items-start text-gray-600 text-xs sm:text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c" + " " + "text-green-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0 text-base sm:text-lg",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 585,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c" + " " + "leading-relaxed",
                                                                        children: feature
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 586,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 584,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: platform.link,
                                                        target: platform.link.startsWith('http') ? '_blank' : '_self',
                                                        rel: platform.link.startsWith('http') ? 'noopener noreferrer' : '',
                                                        className: "jsx-7446c311755d706c" + " " + `w-full ${platform.ctaColor} font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 block text-center text-xs sm:text-sm`,
                                                        children: platform.cta
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, platform.name, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 534,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7446c311755d706c" + " " + "bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 shadow-xl sm:shadow-2xl border border-gray-100 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "text-center mb-6 sm:mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-7446c311755d706c" + " " + "text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4",
                                                children: "Detailed Feature Comparison"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 607,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2",
                                                children: "Comprehensive analysis of 50+ features across pricing, capabilities, and performance metrics"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 608,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 606,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "overflow-x-auto rounded-xl sm:rounded-2xl border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "jsx-7446c311755d706c" + " " + "w-full min-w-[800px] sm:min-w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "jsx-7446c311755d706c",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-7446c311755d706c" + " " + "bg-gradient-to-r from-indigo-600 to-purple-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-7446c311755d706c" + " " + "py-4 sm:py-6 px-4 sm:px-6 text-left text-white font-bold text-base sm:text-lg",
                                                                children: "Feature Category"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 617,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-7446c311755d706c" + " " + "py-4 sm:py-6 px-4 sm:px-6 text-center text-white font-bold text-base sm:text-lg bg-indigo-700 border-l border-white/20",
                                                                children: "Shopify"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 618,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-7446c311755d706c" + " " + "py-4 sm:py-6 px-4 sm:px-6 text-center text-white font-bold text-base sm:text-lg border-l border-white/20",
                                                                children: "BigCommerce"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 619,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-7446c311755d706c" + " " + "py-4 sm:py-6 px-4 sm:px-6 text-center text-white font-bold text-base sm:text-lg border-l border-white/20",
                                                                children: "WooCommerce"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 620,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-7446c311755d706c" + " " + "py-4 sm:py-6 px-4 sm:px-6 text-center text-white font-bold text-base sm:text-lg border-l border-white/20",
                                                                children: "Wix eCommerce"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 621,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "jsx-7446c311755d706c",
                                                    children: comparisonData.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "jsx-7446c311755d706c" + " " + `border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-7446c311755d706c" + " " + "py-3 sm:py-5 px-4 sm:px-6 text-gray-800 font-semibold text-sm sm:text-base lg:text-lg",
                                                                    children: row.feature
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 632,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-7446c311755d706c" + " " + "py-3 sm:py-5 px-4 sm:px-6 text-center text-gray-700 text-sm sm:text-base lg:text-lg bg-indigo-50 font-semibold border-l border-gray-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-7446c311755d706c" + " " + "inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-indigo-100 text-indigo-600 rounded-lg mr-1 sm:mr-2 text-xs sm:text-sm",
                                                                            children: "✓"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                                            lineNumber: 634,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        row.shopify
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 633,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-7446c311755d706c" + " " + "py-3 sm:py-5 px-4 sm:px-6 text-center text-gray-700 text-sm sm:text-base lg:text-lg border-l border-gray-200",
                                                                    children: row.bigcommerce
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 639,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-7446c311755d706c" + " " + "py-3 sm:py-5 px-4 sm:px-6 text-center text-gray-700 text-sm sm:text-base lg:text-lg border-l border-gray-200",
                                                                    children: row.woocommerce
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 642,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-7446c311755d706c" + " " + "py-3 sm:py-5 px-4 sm:px-6 text-center text-gray-700 text-sm sm:text-base lg:text-lg border-l border-gray-200",
                                                                    children: row.wix
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 645,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 626,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 614,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "mt-6 sm:mt-8 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7446c311755d706c" + " " + "text-gray-500 text-xs sm:text-sm",
                                            children: "Data verified through platform documentation, user testing, and industry benchmarks"
                                        }, void 0, false, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 655,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 654,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 605,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7446c311755d706c" + " " + "mb-12 sm:mb-20 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "text-center mb-8 sm:mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-7446c311755d706c" + " " + "text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4",
                                                children: "Performance Score Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 664,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2",
                                                children: "Based on comprehensive testing across 15+ performance categories and real user feedback"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 665,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 663,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8",
                                        children: performanceScores.map((score, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border border-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-lg sm:text-xl font-bold text-gray-800 mb-6 sm:mb-8 text-center",
                                                        children: score.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 673,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "space-y-4 sm:space-y-6",
                                                        children: [
                                                            {
                                                                platform: 'Shopify',
                                                                score: score.shopify,
                                                                color: 'from-indigo-500 to-purple-600'
                                                            },
                                                            {
                                                                platform: 'BigCommerce',
                                                                score: score.bigcommerce,
                                                                color: 'from-blue-500 to-cyan-600'
                                                            },
                                                            {
                                                                platform: 'WooCommerce',
                                                                score: score.woocommerce,
                                                                color: 'from-orange-500 to-red-500'
                                                            },
                                                            {
                                                                platform: 'Wix eCommerce',
                                                                score: score.wix,
                                                                color: 'from-teal-500 to-green-500'
                                                            }
                                                        ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "space-y-2 sm:space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7446c311755d706c" + " " + "flex justify-between items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-7446c311755d706c" + " " + "text-gray-700 font-semibold text-sm sm:text-base",
                                                                                children: item.platform
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                                lineNumber: 683,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-7446c311755d706c" + " " + "flex items-center space-x-1 sm:space-x-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "jsx-7446c311755d706c" + " " + "text-gray-800 font-bold text-base sm:text-lg",
                                                                                        children: [
                                                                                            item.score,
                                                                                            "/100"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                                        lineNumber: 685,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "jsx-7446c311755d706c" + " " + `w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${item.color}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                                        lineNumber: 686,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                                lineNumber: 684,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 682,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7446c311755d706c" + " " + "bg-gray-100 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                width: `${item.score}%`
                                                                            },
                                                                            className: "jsx-7446c311755d706c" + " " + `h-full bg-gradient-to-r ${item.color} rounded-full bar-fill transition-all duration-1500 ease-out relative`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "jsx-7446c311755d706c" + " " + "absolute inset-0 bg-white/20 animate-pulse"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                                lineNumber: 694,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                                            lineNumber: 690,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 689,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, item.platform, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, score.category, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 670,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 662,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "pricing",
                                className: "jsx-7446c311755d706c" + " " + "bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl sm:shadow-2xl border border-gray-100 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "text-center mb-6 sm:mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-7446c311755d706c" + " " + "text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4",
                                                children: "Total Cost of Ownership Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 708,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2",
                                                children: "First-year costs including platform fees, essential apps, and required additions"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 709,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 707,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "space-y-6 sm:space-y-8",
                                        children: yearlyCosts.map((cost, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "space-y-3 sm:space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-gray-700 font-semibold text-sm sm:text-base lg:text-lg",
                                                                children: cost.platform
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 718,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7446c311755d706c" + " " + "text-gray-800 font-bold text-lg sm:text-xl",
                                                                        children: [
                                                                            "$",
                                                                            cost.yearly,
                                                                            "/year"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 720,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7446c311755d706c" + " " + "text-gray-500 text-xs sm:text-sm",
                                                                        children: [
                                                                            "$",
                                                                            cost.monthly,
                                                                            "/month equivalent"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 721,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 717,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "bg-gray-100 rounded-full h-4 sm:h-6 overflow-hidden shadow-inner",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: `${cost.monthly / 39 * 85}%`
                                                            },
                                                            className: "jsx-7446c311755d706c" + " " + `h-full ${cost.color} rounded-full bar-fill transition-all duration-1500 ease-out flex items-center justify-end pr-2 sm:pr-4 relative`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7446c311755d706c" + " " + "text-white text-xs sm:text-sm font-semibold z-10",
                                                                    children: [
                                                                        "$",
                                                                        cost.monthly,
                                                                        "/mo"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 729,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-7446c311755d706c" + " " + "absolute inset-0 bg-white/20 animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 730,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 725,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, cost.platform, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 716,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 714,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "mt-6 sm:mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "flex items-center justify-center mb-2 sm:mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-2 sm:mr-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-7446c311755d706c" + " " + "text-white font-bold text-xs sm:text-sm",
                                                            children: "💰"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 740,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-indigo-700 text-base sm:text-xl font-bold",
                                                        children: "Shopify offers the best value-to-feature ratio in 2025!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 742,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 738,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7446c311755d706c" + " " + "text-indigo-600 text-xs sm:text-sm",
                                                children: "Lower total cost than BigCommerce with more features out-of-the-box"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 746,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 737,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 706,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7446c311755d706c" + " " + "mb-12 sm:mb-16 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "text-center mb-8 sm:mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-7446c311755d706c" + " " + "text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4",
                                                children: "Platform Recommendations by Business Type"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 755,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2",
                                                children: "Match your business needs with the perfect ecommerce platform solution"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 756,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 754,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8",
                                        children: useCases.map((useCase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border border-gray-100 hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "flex items-start mb-4 sm:mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7446c311755d706c" + " " + "text-white text-base sm:text-xl",
                                                                    children: [
                                                                        '🚀',
                                                                        '🏢',
                                                                        '📝',
                                                                        '🎨'
                                                                    ][index]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 766,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 765,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "jsx-7446c311755d706c" + " " + "text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2",
                                                                        children: useCase.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 771,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "jsx-7446c311755d706c" + " " + "text-gray-600 text-xs sm:text-sm",
                                                                        children: useCase.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 772,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 764,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c" + " " + "text-indigo-700 font-semibold text-sm sm:text-base",
                                                                        children: "Recommended Platform"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 778,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-7446c311755d706c" + " " + "bg-indigo-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-md sm:rounded-lg font-bold text-xs sm:text-sm",
                                                                        children: useCase.recommended
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 779,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 777,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-indigo-600 text-xs sm:text-sm mt-1 sm:mt-2",
                                                                children: useCase.reason
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 783,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 776,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "space-y-1 sm:space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "jsx-7446c311755d706c" + " " + "font-semibold text-gray-700 text-sm sm:text-base",
                                                                children: "Key Features:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 787,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + "grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2",
                                                                children: useCase.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-7446c311755d706c" + " " + "flex items-center text-gray-600 text-xs sm:text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-7446c311755d706c" + " " + "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-indigo-400 rounded-full mr-1 sm:mr-2 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                                lineNumber: 791,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            feature
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                                        lineNumber: 790,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 788,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 786,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, useCase.type, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 763,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 761,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 753,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "verdict",
                                className: "jsx-7446c311755d706c" + " " + "bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-20 text-center scroll-animate relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "absolute inset-0 bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 804,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 805,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 806,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-white/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7446c311755d706c" + " " + "text-white font-semibold text-sm sm:text-base",
                                                    children: "🏆 2025 WINNER"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 810,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 809,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-7446c311755d706c" + " " + "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6",
                                                children: "Why Shopify Dominates in 2025"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 813,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7446c311755d706c" + " " + "text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2",
                                                children: [
                                                    "After analyzing 50+ performance metrics and thousands of user experiences, ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "jsx-7446c311755d706c",
                                                        children: "Shopify emerges as the undisputed leader"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 815,
                                                        columnNumber: 92
                                                    }, this),
                                                    " for modern ecommerce businesses."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 814,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 text-left",
                                                children: [
                                                    'All-in-One Excellence: Complete solution from hosting to payments',
                                                    'Unmatched Ease of Use: Intuitive interface with AI assistance',
                                                    'Enterprise Scalability: Grows from startup to Fortune 500',
                                                    'Massive App Ecosystem: 8,000+ apps for every need',
                                                    'Proven Reliability: 99.98% uptime with global CDN',
                                                    'Future-Proof Innovation: Regular AI and feature updates'
                                                ].map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "flex items-start bg-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-white text-xl sm:text-2xl mr-3 sm:mr-4 mt-0.5",
                                                                children: "✅"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 828,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-white text-sm sm:text-lg leading-relaxed",
                                                                children: point
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 829,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 827,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 818,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7446c311755d706c" + " " + "bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-white text-lg sm:text-xl mb-3 sm:mb-4 font-semibold",
                                                        children: "2025 Competitive Advantage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-white/90 leading-relaxed text-sm sm:text-base",
                                                        children: "Shopify's continuous investment in AI-powered features, mobile optimization, and international expansion positions it 12-18 months ahead of competitors. The platform's ecosystem and developer community ensure it remains at the forefront of ecommerce innovation."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 836,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://shopify.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "jsx-7446c311755d706c" + " " + "bg-white text-indigo-600 hover:bg-gray-50 font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl cursor-pointer inline-block mb-3 sm:mb-4 w-full sm:w-auto",
                                                children: "🚀 Start Your Shopify Journey Today →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 843,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7446c311755d706c" + " " + "text-white/80 text-sm sm:text-lg",
                                                children: "✓ 3-Day Free Trial   •   ✓ No Credit Card Required   •   ✓ Full Feature Access"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 852,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 808,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "faq",
                                className: "jsx-7446c311755d706c" + " " + "bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl sm:shadow-2xl border border-gray-100 scroll-animate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "text-center mb-8 sm:mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-7446c311755d706c" + " " + "text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4",
                                                children: "Frequently Asked Questions"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 861,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2",
                                                children: "Expert answers to the most common ecommerce platform questions for 2025"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 862,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 860,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7446c311755d706c" + " " + "space-y-4 sm:space-y-6 max-w-4xl mx-auto",
                                        children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>toggleFAQ(index),
                                                className: "jsx-7446c311755d706c" + " " + "bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-indigo-300 transition-all duration-300 cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-base sm:text-lg font-semibold text-gray-800 pr-6 sm:pr-8 group-hover:text-indigo-600 transition-colors",
                                                                children: faq.question
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 875,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-7446c311755d706c" + " " + `text-gray-500 text-xl sm:text-2xl transition-all duration-300 ${activeFAQ === index ? 'rotate-180 text-indigo-600' : 'group-hover:text-indigo-500'}`,
                                                                children: "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 876,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 874,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7446c311755d706c" + " " + `faq-answer mt-3 sm:mt-4 ${activeFAQ === index ? 'block' : 'hidden'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-7446c311755d706c" + " " + "border-t border-gray-200 pt-3 sm:pt-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7446c311755d706c" + " " + "text-gray-600 leading-relaxed text-sm sm:text-base",
                                                                children: faq.answer
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                                lineNumber: 882,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 881,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 880,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 869,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/e-commerce/page.tsx",
                                        lineNumber: 867,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 859,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7446c311755d706c" + " " + "bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 scroll-animate",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7446c311755d706c" + " " + "flex items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7446c311755d706c" + " " + "w-8 h-8 sm:w-12 sm:h-12 bg-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7446c311755d706c" + " " + "text-white font-bold text-sm sm:text-lg",
                                                children: "⚠️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/e-commerce/page.tsx",
                                                lineNumber: 894,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 893,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7446c311755d706c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-7446c311755d706c" + " " + "text-xl sm:text-2xl font-bold text-amber-800 mb-3 sm:mb-4",
                                                    children: "Transparency & Methodology Disclosure"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 897,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-7446c311755d706c" + " " + "text-amber-700 mb-3 sm:mb-4 text-sm sm:text-base",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "jsx-7446c311755d706c",
                                                            children: "DigiCompares"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 899,
                                                            columnNumber: 19
                                                        }, this),
                                                        " maintains complete editorial independence while providing data-driven platform analysis. Our testing methodology ensures unbiased, accurate comparisons."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7446c311755d706c" + " " + "text-amber-700 space-y-1 sm:space-y-2 text-xs sm:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7446c311755d706c",
                                                            children: "• All data verified through platform documentation, user testing, and third-party analytics"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 902,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7446c311755d706c",
                                                            children: "• Pricing and features accurate as of January 2025 - subject to platform updates"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 903,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7446c311755d706c",
                                                            children: [
                                                                "• ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    className: "jsx-7446c311755d706c",
                                                                    children: "We earn affiliate commissions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                                    lineNumber: 904,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " through recommended links at no extra cost to users"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 904,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7446c311755d706c",
                                                            children: "• Performance scores based on 25+ metrics including speed, usability, and support"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 905,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7446c311755d706c",
                                                            children: "• Always validate current features and pricing on official platform websites"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 906,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-7446c311755d706c",
                                                            children: "• Platform recommendations consider business size, technical capability, and growth goals"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 907,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 901,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 896,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/e-commerce/page.tsx",
                                    lineNumber: 892,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/e-commerce/page.tsx",
                                lineNumber: 891,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "jsx-7446c311755d706c" + " " + "bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7446c311755d706c" + " " + "container mx-auto px-4 sm:px-6 lg:px-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7446c311755d706c" + " " + "text-center mb-8 sm:mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7446c311755d706c" + " " + "flex justify-center items-center mb-4 sm:mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7446c311755d706c" + " " + "w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-xl",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-7446c311755d706c" + " " + "text-white font-bold text-lg sm:text-xl",
                                                        children: "DC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/e-commerce/page.tsx",
                                                        lineNumber: 920,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 919,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7446c311755d706c" + " " + "text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                                                    children: "DigiCompares"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 922,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 918,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7446c311755d706c" + " " + "text-gray-300 text-sm sm:text-lg mb-1 sm:mb-2",
                                            children: "Your Trusted Ecommerce Platform Comparison Resource"
                                        }, void 0, false, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 924,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7446c311755d706c" + " " + "text-gray-400 text-xs sm:text-sm",
                                            children: "Helping entrepreneurs make data-driven decisions since 2024"
                                        }, void 0, false, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 925,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/e-commerce/page.tsx",
                                    lineNumber: 917,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7446c311755d706c" + " " + "grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7446c311755d706c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-7446c311755d706c" + " " + "font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base",
                                                    children: "Platform Comparisons"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 930,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7446c311755d706c" + " " + "space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Ecommerce Platforms"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 932,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Website Builders"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 933,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Marketing Tools"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 934,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Payment Processors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 935,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 931,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 929,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7446c311755d706c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-7446c311755d706c" + " " + "font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base",
                                                    children: "Resources"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 939,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7446c311755d706c" + " " + "space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Ecommerce Guides"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 941,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Platform Reviews"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 942,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Comparison Tools"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 943,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Industry Reports"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 944,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 940,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 938,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7446c311755d706c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-7446c311755d706c" + " " + "font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base",
                                                    children: "Company"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 948,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7446c311755d706c" + " " + "space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "About Us"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 950,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Contact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 951,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Careers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 952,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Press"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 953,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 949,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 947,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7446c311755d706c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-7446c311755d706c" + " " + "font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base",
                                                    children: "Legal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7446c311755d706c" + " " + "space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Privacy Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 959,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Terms of Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 960,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Cookie Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 961,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "jsx-7446c311755d706c" + " " + "block hover:text-white transition-colors",
                                                            children: "Affiliate Disclosure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/e-commerce/page.tsx",
                                                            lineNumber: 962,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/e-commerce/page.tsx",
                                                    lineNumber: 958,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 956,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/e-commerce/page.tsx",
                                    lineNumber: 928,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7446c311755d706c" + " " + "border-t border-gray-700 pt-6 sm:pt-8 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7446c311755d706c" + " " + "text-gray-400 text-xs sm:text-sm",
                                            children: "Last Updated: January 15, 2025 | © 2025 DigiCompares. All rights reserved."
                                        }, void 0, false, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 968,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-7446c311755d706c" + " " + "text-gray-500 text-xs mt-1 sm:mt-2",
                                            children: "Independent platform analysis. We may earn commissions through affiliate links at no extra cost to you."
                                        }, void 0, false, {
                                            fileName: "[project]/app/e-commerce/page.tsx",
                                            lineNumber: 971,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/e-commerce/page.tsx",
                                    lineNumber: 967,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/e-commerce/page.tsx",
                            lineNumber: 916,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/e-commerce/page.tsx",
                        lineNumber: 915,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/e-commerce/page.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "7446c311755d706c",
                children: "@keyframes fade-in-up{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.scroll-animate{opacity:0;transition:opacity .6s,transform .6s;transform:translateY(30px)}.scroll-animate.animate-in{opacity:1;transform:translateY(0)}html{scroll-behavior:smooth}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#f1f5f9;border-radius:4px}::-webkit-scrollbar-thumb{background:linear-gradient(#6366f1,#8b5cf6);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:linear-gradient(#4f46e5,#7c3aed)}.faq-answer{transition:all .3s ease-in-out}@keyframes gradient-shift{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}.animate-gradient{background-size:200% 200%;animation:3s infinite gradient-shift}.btn-hover{transition:all .3s}.btn-hover:hover{transform:translateY(-2px);box-shadow:0 20px 40px #6366f126}.card-hover{transition:all .3s}.card-hover:hover{transform:translateY(-8px);box-shadow:0 25px 50px #00000026}@keyframes pulse-glow{0%,to{box-shadow:0 0 20px #6366f14d}50%{box-shadow:0 0 30px #6366f199}}.pulse-glow{animation:2s ease-in-out infinite pulse-glow}@media (width<=640px){.container{padding-left:1rem;padding-right:1rem}button,a{min-width:44px;min-height:44px}section{margin-bottom:2rem}}@media (width>=641px) and (width<=1024px){.container{padding-left:1.5rem;padding-right:1.5rem}}@media (width>=1025px){.container{max-width:1280px}}@media (-webkit-device-pixel-ratio>=2),(resolution>=192dpi){.bg-gradient-to-r{background-blend-mode:overlay}}@media (prefers-reduced-motion:reduce){*{transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}.scroll-animate{opacity:1;transition:none;transform:none}}@media print{.no-print{display:none!important}body{color:#000!important;background:#fff!important}}@media (orientation:landscape) and (height<=500px){header{padding-top:2rem;padding-bottom:2rem}.header-stats{margin-bottom:1rem}}@media (width<=320px){.container{padding-left:.5rem;padding-right:.5rem}}@media (width>=1920px){.container{max-width:1400px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b895584e._.js.map