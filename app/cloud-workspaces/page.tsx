"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Star, Check, X, TrendingUp, Shield, Zap, Users, Globe, Award, CheckCircle, AlertCircle } from 'lucide-react';

// Affiliate Links (placeholders)
const AFFILIATE_LINKS = {
  googleWorkspace: "https://workspace.google.com/signup/businessstarter/welcome?utm_source=digicompares",
  microsoft365: "https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products?utm_source=digicompares",
  zohoWorkplace: "https://www.zoho.com/workplace/pricing.html?utm_source=digicompares",
  bitrix24: "https://www.bitrix24.com/prices/?utm_source=digicompares",
  notion: "https://www.notion.so/pricing?utm_source=digicompares",
  slack: "https://slack.com/pricing?utm_source=digicompares",
  dropbox: "https://www.dropbox.com/business/pricing?utm_source=digicompares"
};

const CloudWorkspaceComparison = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Helper function to get the first pricing plan
  const getFirstPricingPlan = (pricing: any) => {
    const firstPlanKey = Object.keys(pricing)[0];
    return pricing[firstPlanKey];
  };

  // Updated Platform Data with verified 2025 pricing
  const platforms = [
    {
      rank: 1,
      name: "Google Workspace",
      logo: "📧",
      tagline: "Best Overall Cloud Workspace 2025",
      badge: "RECOMMENDED BY DIGICOMPARES",
      description: "The gold standard for cloud collaboration, combining Gmail, Drive, Meet, and AI-powered productivity tools in one seamless ecosystem.",
      pricing: {
        starter: { monthly: "$8.40", annual: "$7", storage: "30GB", users: "Any" },
        standard: { monthly: "$16.80", annual: "$14", storage: "2TB", users: "Any" },
        plus: { monthly: "$26.40", annual: "$22", storage: "5TB", users: "Any" },
        enterprise: { monthly: "Custom", annual: "Custom", storage: "Unlimited", users: "Any" }
      },
      features: [
        "Gmail with custom domain",
        "Google Drive cloud storage",
        "Google Meet (up to 500 participants)",
        "Gemini AI integrated across all apps",
        "99.9% uptime SLA",
        "24/7 support",
        "Advanced security & admin controls",
        "Seamless mobile experience"
      ],
      pros: [
        "Industry-leading collaboration tools",
        "Superior AI integration (Gemini included)",
        "Best-in-class email reliability",
        "Intuitive interface - minimal learning curve",
        "Excellent mobile apps",
        "Real-time collaboration without lag",
        "Robust third-party integrations",
        "Transparent pricing with Gemini AI included"
      ],
      cons: [
        "Price increased in 2024 (but AI now included)",
        "Fewer desktop features vs competitors",
        "Some advanced features require Enterprise tier"
      ],
      idealFor: "Businesses of all sizes seeking reliable, intuitive collaboration with cutting-edge AI capabilities",
      aiFeatures: "Gemini AI: Smart compose in Gmail, automated summaries in Docs, intelligent data insights in Sheets, meeting transcription in Meet",
      security: "SOC 2/3, ISO 27001, HIPAA compliance, 2FA, encryption at rest and in transit",
      support: "24/7 phone, chat, email support with extensive knowledge base",
      rating: 4.9,
      isRecommended: true
    },
    {
      rank: 2,
      name: "Microsoft 365",
      logo: "🪟",
      tagline: "Best for Enterprise & Office Power Users",
      badge: null,
      description: "Comprehensive productivity suite with powerful desktop applications, enterprise-grade security, and deep Windows integration.",
      pricing: {
        basic: { monthly: "$6.00", annual: "$6", storage: "1TB", users: "1-300" },
        standard: { monthly: "$12.50", annual: "$12.50", storage: "1TB", users: "1-300" },
        premium: { monthly: "$22.00", annual: "$22", storage: "1TB", users: "1-300" }
      },
      features: [
        "Outlook email with custom domain",
        "OneDrive cloud storage",
        "Microsoft Teams video conferencing",
        "Office apps (Word, Excel, PowerPoint)",
        "Copilot AI (separate subscription)",
        "99.9% uptime SLA",
        "24/7 support on higher tiers",
        "Advanced threat protection"
      ],
      pros: [
        "Powerful desktop Office applications",
        "Strong enterprise security features",
        "Excellent for Windows-centric organizations",
        "Robust compliance certifications",
        "Microsoft Copilot AI capabilities",
        "Deep Azure integration",
        "Mature admin controls"
      ],
      cons: [
        "Copilot AI costs extra ($30/user/month)",
        "Steeper learning curve",
        "Teams can feel bloated",
        "Pricing structure more complex",
        "Updates can disrupt workflows"
      ],
      idealFor: "Large enterprises, heavy Office users, Windows-centric IT environments",
      aiFeatures: "Copilot AI: Requires additional $30/user/month subscription for full AI features across apps",
      security: "SOC 2/3, ISO 27001, HIPAA, FedRAMP, extensive compliance portfolio",
      support: "24/7 on Enterprise plans, business hours on lower tiers",
      rating: 4.5,
      isRecommended: false
    },
    {
      rank: 3,
      name: "Zoho Workplace",
      logo: "🔷",
      tagline: "Best Budget-Friendly Alternative",
      badge: null,
      description: "Cost-effective productivity suite with email, cloud storage, and collaboration tools designed for budget-conscious teams.",
      pricing: {
        standard: { monthly: "$3.00", annual: "$3", storage: "30GB mail + 10GB drive", users: "Any" },
        professional: { monthly: "$6.00", annual: "$6", storage: "100GB mail + 100GB drive", users: "Any" }
      },
      features: [
        "Zoho Mail with custom domain",
        "WorkDrive cloud storage",
        "Zoho Meeting video conferencing",
        "Office suite (Writer, Sheet, Show)",
        "Zoho Cliq team chat",
        "Zia AI assistant",
        "Basic security features",
        "Privacy-focused (no ads)"
      ],
      pros: [
        "Most affordable option",
        "No user minimum requirements",
        "Strong privacy commitment",
        "Integrated with Zoho ecosystem",
        "Good for startups and small teams",
        "Simple, clean interface"
      ],
      cons: [
        "Smaller ecosystem than Google/Microsoft",
        "Fewer third-party integrations",
        "Learning resources less comprehensive",
        "AI features less advanced",
        "Video conferencing limitations",
        "Support can be slower"
      ],
      idealFor: "Startups, freelancers, small businesses on tight budgets",
      aiFeatures: "Zia AI: Basic email automation, basic analytics, limited smart features",
      security: "ISO 27001, SOC 2, HIPAA-compliant mail",
      support: "Email support, knowledge base, limited phone support",
      rating: 4.2,
      isRecommended: false
    },
    {
      rank: 4,
      name: "Bitrix24",
      logo: "🔵",
      tagline: "All-in-One with CRM & Project Tools",
      badge: null,
      description: "Unique platform combining workspace tools with CRM, project management, and telephony in a freemium model.",
      pricing: {
        free: { monthly: "$0", annual: "$0", storage: "5GB", users: "Unlimited" },
        standard: { monthly: "$124.00", annual: "$99", storage: "50GB", users: "Up to 50" },
        professional: { monthly: "$249.00", annual: "$199", storage: "100GB", users: "Up to 100" }
      },
      features: [
        "Unlimited users on free plan",
        "CRM integration",
        "Task & project management",
        "Team chat and video calls",
        "Document management",
        "Time tracking",
        "Website builder",
        "Telephony features"
      ],
      pros: [
        "Generous free tier",
        "Flat-rate pricing (not per-user)",
        "CRM and project tools included",
        "All-in-one platform approach",
        "Good for project-heavy teams"
      ],
      cons: [
        "Cluttered, overwhelming interface",
        "Steep learning curve",
        "Frequent bugs reported",
        "Limited customer support",
        "Not ideal for email-first teams",
        "Features often moved to higher tiers",
        "Mobile experience subpar"
      ],
      idealFor: "Small teams needing CRM + project management, those wanting all-in-one platform",
      aiFeatures: "Basic AI assistant on higher tiers, limited compared to competitors",
      security: "Basic security features, SSL encryption",
      support: "Community forums, email support (slow response times reported)",
      rating: 3.9,
      isRecommended: false
    },
    {
      rank: 5,
      name: "Notion for Business",
      logo: "📝",
      tagline: "Best for Documentation & Knowledge Management",
      badge: null,
      description: "Flexible workspace combining wiki, docs, and project management with AI capabilities, focused on knowledge organization.",
      pricing: {
        plus: { monthly: "$10.00", annual: "$8", storage: "Unlimited", users: "Any" },
        business: { monthly: "$15.00", annual: "$15", storage: "Unlimited", users: "Any" },
        enterprise: { monthly: "Custom", annual: "Custom", storage: "Unlimited", users: "Any" }
      },
      features: [
        "Flexible workspace builder",
        "Unlimited pages and blocks",
        "Notion AI integration",
        "Real-time collaboration",
        "Templates library",
        "API access",
        "Advanced permissions",
        "Version history"
      ],
      pros: [
        "Extremely flexible and customizable",
        "Excellent for documentation",
        "Strong visual organization",
        "Notion AI is powerful",
        "Great for creative teams",
        "Unlimited storage"
      ],
      cons: [
        "Not email-focused (needs separate solution)",
        "No built-in video conferencing",
        "Can be overwhelming to set up",
        "Performance issues with large databases",
        "Offline mode limited",
        "Learning curve for complex setups"
      ],
      idealFor: "Teams focused on documentation, wikis, and knowledge bases; creative agencies",
      aiFeatures: "Notion AI: Content generation, summarization, translation, Q&A on workspace content ($10/month add-on)",
      security: "SOC 2 Type II, encryption at rest and in transit",
      support: "Email support, extensive documentation, community",
      rating: 4.6,
      isRecommended: false
    },
    {
      rank: 6,
      name: "Slack + Integrations",
      logo: "💬",
      tagline: "Best for Communication-First Teams",
      badge: null,
      description: "Premier team communication platform that integrates with various productivity tools to create a custom workspace.",
      pricing: {
        pro: { monthly: "$8.75", annual: "$7.25", storage: "10GB", users: "Any" },
        business: { monthly: "$15.00", annual: "$12.50", storage: "20GB", users: "Any" },
        enterprise: { monthly: "Custom", annual: "Custom", storage: "1TB+", users: "Any" }
      },
      features: [
        "Channels & direct messaging",
        "Voice and video huddles",
        "Slack Connect (external collab)",
        "App integrations (2,600+)",
        "Workflow automation",
        "Search and archiving",
        "Screen sharing",
        "Mobile apps"
      ],
      pros: [
        "Best-in-class messaging experience",
        "Massive integration ecosystem",
        "Excellent search functionality",
        "Strong for distributed teams",
        "Intuitive interface",
        "Canvas for documentation"
      ],
      cons: [
        "Requires separate email solution",
        "Can be distracting/noisy",
        "No built-in office apps",
        "Storage limits on lower tiers",
        "Needs multiple subscriptions for full workspace",
        "Can get expensive with add-ons"
      ],
      idealFor: "Tech companies, remote teams, communication-heavy organizations",
      aiFeatures: "Slack AI: Thread summaries, channel recaps, search improvements (requires add-on)",
      security: "Enterprise Key Management, SOC 2/3, ISO 27001, HIPAA",
      support: "24/7 on Business+ tiers, email support on lower plans",
      rating: 4.5,
      isRecommended: false
    },
    {
      rank: 7,
      name: "Dropbox Business",
      logo: "📦",
      tagline: "Best for File Storage & Sharing",
      badge: null,
      description: "Cloud storage platform with collaboration features, focusing on file sync, sharing, and content management.",
      pricing: {
        standard: { monthly: "$12.00", annual: "$12", storage: "5TB", users: "5+" },
        advanced: { monthly: "$30.00", annual: "$24", storage: "Unlimited", users: "5+" },
        enterprise: { monthly: "Custom", annual: "Custom", storage: "Unlimited", users: "5+" }
      },
      features: [
        "5TB+ cloud storage",
        "File sync across devices",
        "Dropbox Paper for docs",
        "Dropbox Dash (AI search)",
        "Version history",
        "Advanced sharing controls",
        "Integration with 300+ apps",
        "Mobile scanning"
      ],
      pros: [
        "Industry-leading file sync",
        "Generous storage limits",
        "Excellent file recovery",
        "Smart sync feature",
        "Good security controls",
        "Dropbox Dash AI search useful"
      ],
      cons: [
        "No native email solution",
        "Limited office apps (Paper is basic)",
        "No video conferencing",
        "Expensive for full workspace needs",
        "5-user minimum required",
        "Requires multiple tools for complete workspace"
      ],
      idealFor: "Media companies, design teams, organizations prioritizing file storage",
      aiFeatures: "Dropbox Dash: AI-powered universal search across connected tools and files",
      security: "SOC 2/3, ISO 27001, encryption, advanced admin controls",
      support: "Priority support on Business plans, 24/7 on Enterprise",
      rating: 4.4,
      isRecommended: false
    }
  ];

  // COMPREHENSIVE Detailed Comparison Table Data with complete information
  const comparisonFeatures = [
    {
      category: "Starting Price (Annual)",
      googleWorkspace: "$7/user/mo",
      microsoft365: "$6/user/mo",
      zoho: "$3/user/mo",
      bitrix24: "$0 (Free plan)",
      notion: "$8/user/mo",
      slack: "$7.25/user/mo",
      dropbox: "$12/user/mo"
    },
    {
      category: "Monthly Billing Price",
      googleWorkspace: "$8.40/user/mo",
      microsoft365: "$6/user/mo",
      zoho: "$3/user/mo",
      bitrix24: "$124/org/mo",
      notion: "$10/user/mo",
      slack: "$8.75/user/mo",
      dropbox: "$12/user/mo"
    },
    {
      category: "Pricing Model",
      googleWorkspace: "Per user/month",
      microsoft365: "Per user/month",
      zoho: "Per user/month",
      bitrix24: "Flat rate per organization",
      notion: "Per user/month",
      slack: "Per user/month",
      dropbox: "Per user/month (5+ min)"
    },
    {
      category: "User Minimum",
      googleWorkspace: "1 user",
      microsoft365: "1 user",
      zoho: "1 user",
      bitrix24: "Unlimited (free plan)",
      notion: "1 user",
      slack: "1 user",
      dropbox: "5 users"
    },
    {
      category: "Email Hosting",
      googleWorkspace: "✅ Gmail (30GB-5TB)",
      microsoft365: "✅ Outlook (50GB)",
      zoho: "✅ Zoho Mail (30-100GB)",
      bitrix24: "✅ Basic email",
      notion: "❌ None",
      slack: "❌ None",
      dropbox: "❌ None"
    },
    {
      category: "Storage Per User",
      googleWorkspace: "30GB-5TB",
      microsoft365: "1TB",
      zoho: "30GB-100GB",
      bitrix24: "5GB-100GB shared",
      notion: "Unlimited blocks",
      slack: "10GB-1TB shared",
      dropbox: "5TB-Unlimited"
    },
    {
      category: "Video Conferencing",
      googleWorkspace: "✅ Meet (500 participants)",
      microsoft365: "✅ Teams (300 participants)",
      zoho: "✅ Meeting (100 participants)",
      bitrix24: "✅ Basic video calls",
      notion: "❌ None",
      slack: "✅ Huddles (50 participants)",
      dropbox: "❌ None"
    },
    {
      category: "AI Features",
      googleWorkspace: "✅ Gemini AI (included)",
      microsoft365: "✅ Copilot AI (+$30/mo)",
      zoho: "✅ Zia AI (basic)",
      bitrix24: "⚠️ Basic AI (premium)",
      notion: "✅ Notion AI (+$10/mo)",
      slack: "✅ Slack AI (add-on)",
      dropbox: "✅ Dash AI (included)"
    },
    {
      category: "Office Applications",
      googleWorkspace: "✅ Docs, Sheets, Slides",
      microsoft365: "✅ Word, Excel, PowerPoint",
      zoho: "✅ Writer, Sheet, Show",
      bitrix24: "⚠️ Basic editor",
      notion: "✅ Pages & databases",
      slack: "⚠️ Canvas (basic)",
      dropbox: "⚠️ Paper (basic)"
    },
    {
      category: "Real-time Collaboration",
      googleWorkspace: "⭐ Excellent",
      microsoft365: "⭐ Very Good",
      zoho: "⭐ Good",
      bitrix24: "⭐ Fair",
      notion: "⭐ Excellent",
      slack: "⭐ Excellent",
      dropbox: "⭐ Good"
    },
    {
      category: "Team Chat/Messaging",
      googleWorkspace: "✅ Chat integrated",
      microsoft365: "✅ Teams integrated",
      zoho: "✅ Cliq integrated",
      bitrix24: "✅ Built-in chat",
      notion: "❌ None",
      slack: "✅ Primary feature",
      dropbox: "❌ None"
    },
    {
      category: "Project Management",
      googleWorkspace: "⚠️ Basic (Tasks)",
      microsoft365: "✅ Planner, Lists",
      zoho: "✅ Projects, Tasks",
      bitrix24: "✅ Advanced PM",
      notion: "✅ Databases, Kanban",
      slack: "⚠️ Workflow builder",
      dropbox: "⚠️ Basic tasks"
    },
    {
      category: "CRM Features",
      googleWorkspace: "❌ None",
      microsoft365: "⚠️ Basic CRM",
      zoho: "✅ Zoho CRM integration",
      bitrix24: "✅ Full CRM included",
      notion: "❌ None",
      slack: "❌ None",
      dropbox: "❌ None"
    },
    {
      category: "Calendar Integration",
      googleWorkspace: "✅ Google Calendar",
      microsoft365: "✅ Outlook Calendar",
      zoho: "✅ Zoho Calendar",
      bitrix24: "✅ Built-in calendar",
      notion: "⚠️ Database views",
      slack: "✅ App integration",
      dropbox: "✅ App integration"
    },
    {
      category: "File Sharing & Sync",
      googleWorkspace: "✅ Drive sharing",
      microsoft365: "✅ OneDrive sharing",
      zoho: "✅ WorkDrive sharing",
      bitrix24: "✅ Document sharing",
      notion: "✅ Page sharing",
      slack: "✅ File uploads",
      dropbox: "✅ Advanced sharing"
    },
    {
      category: "Mobile App Experience",
      googleWorkspace: "⭐ Excellent",
      microsoft365: "⭐ Very Good",
      zoho: "⭐ Good",
      bitrix24: "⭐ Fair",
      notion: "⭐ Very Good",
      slack: "⭐ Excellent",
      dropbox: "⭐ Excellent"
    },
    {
      category: "Desktop Applications",
      googleWorkspace: "❌ Web-based",
      microsoft365: "✅ Full desktop apps",
      zoho: "⚠️ Limited desktop",
      bitrix24: "⚠️ Web-based",
      notion: "✅ Desktop app",
      slack: "✅ Desktop app",
      dropbox: "✅ Desktop sync"
    },
    {
      category: "Third-Party Integrations",
      googleWorkspace: "5,000+ apps",
      microsoft365: "3,000+ apps",
      zoho: "1,000+ apps",
      bitrix24: "Limited",
      notion: "100+ via API",
      slack: "2,600+ apps",
      dropbox: "300+ apps"
    },
    {
      category: "API Access",
      googleWorkspace: "✅ Extensive APIs",
      microsoft365: "✅ Extensive APIs",
      zoho: "✅ Good APIs",
      bitrix24: "✅ REST API",
      notion: "✅ API available",
      slack: "✅ Extensive APIs",
      dropbox: "✅ API available"
    },
    {
      category: "Admin Console",
      googleWorkspace: "⭐ Excellent",
      microsoft365: "⭐ Comprehensive",
      zoho: "⭐ Good",
      bitrix24: "⭐ Complex",
      notion: "⭐ Basic",
      slack: "⭐ Good",
      dropbox: "⭐ Good"
    },
    {
      category: "Security Features",
      googleWorkspace: "SOC 2/3, ISO 27001, HIPAA",
      microsoft365: "SOC 2/3, ISO 27001, FedRAMP",
      zoho: "SOC 2, ISO 27001, HIPAA",
      bitrix24: "Basic SSL encryption",
      notion: "SOC 2 Type II",
      slack: "SOC 2/3, ISO 27001, HIPAA",
      dropbox: "SOC 2/3, ISO 27001"
    },
    {
      category: "Uptime SLA",
      googleWorkspace: "99.9%",
      microsoft365: "99.9%",
      zoho: "99.9%",
      bitrix24: "No SLA",
      notion: "99.9%",
      slack: "99.99%",
      dropbox: "99.9%"
    },
    {
      category: "Support Options",
      googleWorkspace: "24/7 phone, chat, email",
      microsoft365: "24/7 (Enterprise)",
      zoho: "Email, limited phone",
      bitrix24: "Email (slow)",
      notion: "Email, documentation",
      slack: "24/7 (Business+)",
      dropbox: "Priority support"
    },
    {
      category: "Learning Curve",
      googleWorkspace: "Low - intuitive",
      microsoft365: "Medium - familiar",
      zoho: "Medium",
      bitrix24: "High - complex",
      notion: "Medium-High",
      slack: "Low",
      dropbox: "Low"
    },
    {
      category: "Free Trial",
      googleWorkspace: "14 days",
      microsoft365: "1 month",
      zoho: "15 days",
      bitrix24: "Free forever plan",
      notion: "Free personal plan",
      slack: "Freemium model",
      dropbox: "30 days"
    },
    {
      category: "Best For Business Size",
      googleWorkspace: "All sizes",
      microsoft365: "Medium to Enterprise",
      zoho: "Small to Medium",
      bitrix24: "Small teams",
      notion: "All sizes",
      slack: "All sizes",
      dropbox: "Small to Enterprise"
    },
    {
      category: "Best For Use Case",
      googleWorkspace: "All-round collaboration",
      microsoft365: "Office power users",
      zoho: "Budget-conscious teams",
      bitrix24: "CRM + projects",
      notion: "Documentation & wikis",
      slack: "Team communication",
      dropbox: "File storage & sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  DigiCompares
                </h1>
                <p className="text-xs text-gray-600">Unbiased Tech Comparisons</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6 text-sm">
              <a href="#rankings" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Rankings</a>
              <a href="#comparison" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Compare</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Pricing</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 cursor-default">
            <TrendingUp className="w-4 h-4" />
            <span>Updated for 2025 - Including Latest Pricing & AI Features</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Best Cloud Workspace<br />Platforms for 2025
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Compare Google Workspace, Microsoft 365, Zoho, and more. Find the perfect cloud productivity suite for your business with our comprehensive, data-driven analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => document.getElementById('rankings')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Rankings
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Compare All Features
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Google Workspace Promotional Banner */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-8 h-8" />
              <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                #1 RATED 2025
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Google Workspace - The Best Choice
            </h2>
            
            <p className="text-xl mb-6 text-blue-100 max-w-2xl">
              Now with Gemini AI included at no extra cost. Get started at only $7/user/month for Business Starter plan with annual billing.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Gemini AI Included</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>14-Day Free Trial</span>
              </div>
            </div>
            
            <motion.a
              href={AFFILIATE_LINKS.googleWorkspace}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Google Workspace Now</span>
              <Zap className="w-5 h-5" />
            </motion.a>
            
            <p className="text-sm text-blue-100 mt-4">
              ⏱️ Limited Time: 20% off first 3 months for new customers
            </p>
          </div>
        </div>
      </motion.section>

      {/* Rankings Section */}
      <section id="rankings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            2025 Cloud Workspace Rankings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based on pricing, features, reliability, AI capabilities, and user experience
          </p>
        </div>

        <div className="space-y-6">
          {platforms.map((platform, index) => {
            const firstPlan = getFirstPricingPlan(platform.pricing);
            return (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 transition-all hover:shadow-xl ${
                platform.isRecommended 
                  ? 'border-blue-500 ring-4 ring-blue-100' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Rank Badge */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                  platform.rank === 1 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  #{platform.rank}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-4xl">{platform.logo}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                          <p className="text-sm text-gray-600">{platform.tagline}</p>
                        </div>
                      </div>
                      {platform.badge && (
                        <div className="inline-flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          <Star className="w-3 h-3" />
                          <span>{platform.badge}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-yellow-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5"
                            fill={i < Math.floor(platform.rating) ? 'currentColor' : 'none'}
                          />
                        ))}
                        <span className="text-gray-900 font-bold ml-2">{platform.rating}</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {firstPlan.annual === "$0" ? "Free" : firstPlan.annual}/user/mo
                      </div>
                      <div className="text-sm text-gray-600">Starting price</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{platform.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {platform.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ideal For:</h4>
                      <p className="text-sm text-gray-600 mb-3">{platform.idealFor}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">AI Features:</h4>
                      <p className="text-sm text-gray-600">{platform.aiFeatures}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {platform.pros.slice(0, 3).map((pro, i) => (
                      <span key={i} className="inline-flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        <Check className="w-3 h-3" />
                        <span>{pro}</span>
                      </span>
                    ))}
                    {platform.cons.slice(0, 1).map((con, i) => (
                      <span key={i} className="inline-flex items-center space-x-1 bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                        <X className="w-3 h-3" />
                        <span>{con}</span>
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4" />
                        <span>{platform.security.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{platform.support.split(',')[0]}</span>
                      </div>
                    </div>
                    <motion.a
                      href={AFFILIATE_LINKS[platform.name.toLowerCase().replace(/\s+/g, '') as keyof typeof AFFILIATE_LINKS]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                        platform.isRecommended
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {platform.isRecommended ? 'Get Best Deal' : 'View Plans'}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section id="comparison" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Detailed Feature Comparison
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare every feature across all major cloud workspace platforms - 28+ detailed comparison points
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 min-w-[250px] sticky left-0 bg-gray-50 z-10">
                    Feature Category
                  </th>
                  {platforms.map((platform) => (
                    <th key={platform.name} className="text-center py-4 px-6 min-w-[180px]">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl mb-2">{platform.logo}</span>
                        <span className="font-semibold text-gray-900 text-sm">{platform.name}</span>
                        {platform.isRecommended && (
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full mt-1">
                            RECOMMENDED
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr 
                    key={feature.category} 
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900 text-sm sticky left-0 bg-inherit z-10">
                      {feature.category}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 text-sm">
                      {feature.googleWorkspace}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 text-sm">
                      {feature.microsoft365}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 text-sm">
                      {feature.zoho}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 text-sm">
                      {feature.bitrix24}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 text-sm">
                      {feature.notion}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 text-sm">
                      {feature.slack}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700 text-sm">
                      {feature.dropbox}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllFeatures(!showAllFeatures)}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-center space-x-2 mx-auto cursor-pointer"
          >
            <span>{showAllFeatures ? 'Show Less Features' : 'Show All 28+ Features'}</span>
            {showAllFeatures ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Scroll horizontally to view all platform features and comparisons
          </p>
        </div>
      </section>

      {/* Feature Battle Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Head-to-Head Feature Battles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how the top platforms compare in critical business areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gmail vs Outlook */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📧 Gmail vs Outlook</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-semibold text-green-800">Gmail</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold text-green-800">Winner</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Superior spam filtering (99.9% accuracy)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Better search functionality</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Seamless integration with other Google services</span>
                </li>
              </ul>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="font-semibold text-blue-800">Outlook</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>• Better for desktop Office integration</li>
                  <li>• More complex folder management</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Google Meet vs Teams */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎥 Google Meet vs Microsoft Teams</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-semibold text-green-800">Google Meet</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold text-green-800">Winner</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Simpler, more intuitive interface</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No software installation required</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Better performance on low-bandwidth connections</span>
                </li>
              </ul>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="font-semibold text-blue-800">Microsoft Teams</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>• More features but complex interface</li>
                  <li>• Better for persistent team chat</li>
                  <li>• Requires software installation</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* AI Integration Battle */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🤖 Gemini AI vs Copilot AI</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-semibold text-green-800">Gemini AI</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold text-green-800">Winner</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Included in all Google Workspace plans at no extra cost</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Seamlessly integrated across all apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Real-time collaboration with AI assistance</span>
                </li>
              </ul>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="font-semibold text-blue-800">Microsoft Copilot</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>• Additional $30/user/month cost</li>
                  <li>• Powerful but expensive for teams</li>
                  <li>• Better for deep Office integration</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Mobile Experience */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 Mobile Experience</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-semibold text-green-800">Google Workspace</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-bold text-green-800">Winner</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Consistent experience across iOS and Android</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Offline functionality in all apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Faster app performance and updates</span>
                </li>
              </ul>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="font-semibold text-blue-800">Microsoft 365</span>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>• Feature-rich but can be slow</li>
                  <li>• Better document editing on tablets</li>
                  <li>• More complex mobile interface</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expandable Deep-Dive Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4">
          {[
            {
              title: "What is a Cloud Workspace?",
              content: "A cloud workspace is a comprehensive suite of productivity tools and applications that are hosted in the cloud and accessible from anywhere. Unlike traditional software that requires installation on individual computers, cloud workspaces provide browser-based access to email, document creation, storage, video conferencing, and collaboration tools. They enable teams to work together in real-time, share files seamlessly, and maintain productivity whether in the office or remote."
            },
            {
              title: "Why Businesses Use Modern Workspaces",
              content: "Modern businesses adopt cloud workspaces for several key reasons: Cost efficiency (no hardware investment), scalability (grow as needed), collaboration (real-time teamwork), security (enterprise-grade protection), and mobility (work from anywhere). Studies show companies using cloud workspaces see 20-30% productivity gains and 40% reduction in IT costs compared to traditional on-premise solutions."
            },
            {
              title: "Google Workspace vs Microsoft 365 - Detailed Breakdown",
              content: "While both are excellent platforms, Google Workspace excels in collaboration, ease of use, and AI integration. Microsoft 365 shines in desktop application power and enterprise features. Google's real-time collaboration is superior, with multiple users able to edit documents simultaneously without conflicts. Microsoft's strength lies in its deep Office application features and Windows integration. For most modern businesses, Google Workspace provides better value and a more intuitive experience."
            },
            {
              title: "How to Choose the Right Workspace for Your Organization",
              content: "Consider these factors: Team size (small teams may prefer simplicity, large enterprises need advanced controls), existing tools (migration costs), collaboration needs (real-time vs async), budget constraints, and IT expertise. Google Workspace is ideal for most businesses due to its balance of features, pricing, and ease of use. Microsoft 365 better suits Office-heavy enterprises, while Zoho appeals to budget-conscious teams."
            }
          ].map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-white rounded-lg shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                {expandedSections[section.title] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedSections[section.title] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-4 text-gray-700"
                >
                  {section.content}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing Comparison
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare monthly and annual pricing across all platforms (per user unless noted)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              className={`bg-white rounded-xl shadow-lg p-6 border-2 ${
                platform.isRecommended 
                  ? 'border-blue-500 ring-4 ring-blue-100 transform scale-105' 
                  : 'border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {platform.isRecommended && (
                <div className="text-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    RECOMMENDED
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <span className="text-4xl mb-2 block">{platform.logo}</span>
                <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                <p className="text-sm text-gray-600">{platform.tagline}</p>
              </div>

              <div className="space-y-3 mb-6">
                {Object.entries(platform.pricing).map(([plan, details]) => (
                  <div key={plan} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900 capitalize">{plan}</span>
                      <span className="text-lg font-bold text-blue-600">
                        {details.annual === "$0" ? "Free" : details.annual}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">
                      {details.monthly && details.monthly !== details.annual && (
                        <span className="line-through text-gray-500 mr-1">{details.monthly}</span>
                      )}
                      <span>annual • {details.storage} storage</span>
                    </div>
                  </div>
                ))}
              </div>

              <motion.a
                href={AFFILIATE_LINKS[platform.name.toLowerCase().replace(/\s+/g, '') as keyof typeof AFFILIATE_LINKS]}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all cursor-pointer ${
                  platform.isRecommended
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {platform.isRecommended ? 'Get Best Deal' : 'View Plans'}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="w-8 h-8" />
              <span className="text-2xl font-bold">#1 Rated for 2025</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Team's Productivity?
            </h2>
            
            <p className="text-xl mb-8 text-blue-100">
              Join over 10 million businesses worldwide that trust Google Workspace for their daily operations. Get started with a 14-day free trial and experience the difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Setup in 15 minutes</span>
              </div>
            </div>

            <motion.a
              href={AFFILIATE_LINKS.googleWorkspace}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl shadow-2xl hover:shadow-3xl transition-all mb-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-6 h-6" />
              <span>Start Your Google Workspace Free Trial</span>
            </motion.a>

            <p className="text-sm text-blue-200">
              ⚡ Limited Time: Get 20% off your first 3 months with annual billing
            </p>
          </div>
        </motion.div>
      </section>

      {/* Legal Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Disclaimer</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            DigiCompares (DC) provides unbiased, research-based comparisons of cloud 
            workspace platforms. We may earn affiliate commissions from purchases 
            made through our links. You are solely responsible for any purchases 
            or activities conducted on the official websites of the respective 
            companies. DigiCompares is not liable for financial losses, subscription 
            charges, or decisions made on third-party platforms. Always verify 
            details directly with the provider.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Last updated: {new Date().getFullYear()}. Pricing and features subject to change. 
            Verify current details on official provider websites.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DC</span>
              </div>
              <h3 className="text-2xl font-bold">DigiCompares</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Providing unbiased, data-driven comparisons of the best technology solutions for modern businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">About Us</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Contact</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Affiliate Disclosure</a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              © {new Date().getFullYear()} DigiCompares. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CloudWorkspaceComparison;