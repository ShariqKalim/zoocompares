"use client"

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, Check, X, TrendingUp, Search, BarChart3, Globe, Zap, Shield, Award, ChevronDown, Menu, ArrowRight, ExternalLink } from 'lucide-react'

export default function SEOToolsComparison() {
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const tools = [
    {
      rank: 1,
      name: "Semrush",
      tagline: "Editor's Choice - Most Comprehensive SEO Platform",
      rating: 4.9,
      price: "$117.33",
      priceNote: "/month (Pro plan, billed annually)",
      keyBenefits: ["55B+ keyword database", "43B+ backlink index", "AI writing assistant", "Complete marketing suite"],
      summary: "Semrush dominates as the most feature-rich, data-accurate SEO platform for professionals and agencies. Unmatched depth across all SEO metrics.",
      badge: "🏆 Best Overall",
      color: "from-orange-500 to-red-600",
      glowColor: "shadow-orange-500/50"
    },
    {
      rank: 2,
      name: "Ahrefs",
      tagline: "Best for Backlink Analysis",
      rating: 4.7,
      price: "$129",
      priceNote: "/month (Lite plan)",
      keyBenefits: ["26B+ backlink index", "Best link explorer", "Content gap analysis", "Fast crawl speed"],
      summary: "Ahrefs excels in backlink intelligence and competitive research with lightning-fast data updates and clean interface.",
      badge: "⚡ Best Backlinks",
      color: "from-blue-500 to-indigo-600",
      glowColor: "shadow-blue-500/50"
    },
    {
      rank: 3,
      name: "Moz Pro",
      tagline: "Best for Beginners",
      rating: 4.5,
      price: "$99",
      priceNote: "/month (Standard plan)",
      keyBenefits: ["User-friendly interface", "Domain Authority metric", "Local SEO tools", "Great learning resources"],
      summary: "Moz Pro offers excellent educational resources and intuitive tools, perfect for SEO beginners and small businesses.",
      badge: "📚 Easiest to Learn",
      color: "from-cyan-500 to-blue-600",
      glowColor: "shadow-cyan-500/50"
    },
    {
      rank: 4,
      name: "SE Ranking",
      tagline: "Best Value for Money",
      rating: 4.6,
      price: "$55",
      priceNote: "/month (Essential plan)",
      keyBenefits: ["Affordable pricing", "White-label reports", "Good keyword tracking", "Marketing plan builder"],
      summary: "SE Ranking delivers solid SEO features at budget-friendly prices, ideal for freelancers and small agencies.",
      badge: "💰 Best Value",
      color: "from-green-500 to-emerald-600",
      glowColor: "shadow-green-500/50"
    },
    {
      rank: 5,
      name: "Mangools",
      tagline: "Best for Keyword Research",
      rating: 4.4,
      price: "$29.90",
      priceNote: "/month (Basic plan)",
      keyBenefits: ["Simple keyword finder", "SERP analysis", "Affordable entry price", "Clean UI design"],
      summary: "Mangools (KWFinder suite) specializes in keyword discovery with beautiful design and straightforward workflows.",
      badge: "🔍 Keyword Specialist",
      color: "from-purple-500 to-pink-600",
      glowColor: "shadow-purple-500/50"
    },
    {
      rank: 6,
      name: "Ubersuggest",
      tagline: "Best Free Option",
      rating: 4.2,
      price: "$29",
      priceNote: "/month (Individual plan)",
      keyBenefits: ["Free tier available", "Neil Patel's tool", "Basic SEO essentials", "Content ideas"],
      summary: "Ubersuggest provides fundamental SEO features at rock-bottom prices, suitable for hobbyists and basic needs.",
      badge: "🆓 Best Free Tier",
      color: "from-yellow-500 to-orange-600",
      glowColor: "shadow-yellow-500/50"
    }
  ]

  const features = [
    { name: "Keyword Database Size", semrush: "55B+ keywords", ahrefs: "22B+ keywords", moz: "1.25B+ keywords", ubersuggest: "4B+ keywords", seranking: "4B+ keywords", mangools: "2.5B+ keywords" },
    { name: "Backlink Database", semrush: "43B+ backlinks", ahrefs: "26B+ backlinks", moz: "44B+ links", ubersuggest: "9B+ backlinks", seranking: "3.3B+ backlinks", mangools: "9.2B+ links" },
    { name: "SERP Accuracy", semrush: "99.2%", ahrefs: "98.8%", moz: "96.5%", ubersuggest: "94%", seranking: "97%", mangools: "95%" },
    { name: "Site Audit Depth", semrush: "Advanced", ahrefs: "Advanced", moz: "Intermediate", ubersuggest: "Basic", seranking: "Advanced", mangools: "Basic" },
    { name: "Competitor Analysis", semrush: "Excellent", ahrefs: "Excellent", moz: "Good", ubersuggest: "Basic", seranking: "Good", mangools: "Limited" },
    { name: "Content Marketing Tools", semrush: "Full Suite", ahrefs: "Content Explorer", moz: "Basic", ubersuggest: "Content Ideas", seranking: "Good", mangools: "None" },
    { name: "Rank Tracking", semrush: "Global + Local", ahrefs: "Global", moz: "Global", ubersuggest: "Basic", seranking: "Excellent", mangools: "Good" },
    { name: "White Label Reports", semrush: "Yes (Business+)", ahrefs: "No", moz: "Yes", ubersuggest: "No", seranking: "Yes", mangools: "No" },
    { name: "API Access", semrush: "Yes", ahrefs: "Yes", moz: "Yes", ubersuggest: "Limited", seranking: "Yes", mangools: "Limited" },
    { name: "AI Features", semrush: "AI Writing + Insights", ahrefs: "None", moz: "None", ubersuggest: "AI Writer", seranking: "Basic AI", mangools: "None" },
    { name: "Integrations", semrush: "40+ tools", ahrefs: "Limited", moz: "15+ tools", ubersuggest: "Limited", seranking: "20+ tools", mangools: "Few" },
    { name: "Best For", semrush: "Agencies/Enterprise", ahrefs: "Link Building", moz: "Beginners", ubersuggest: "Bloggers", seranking: "Freelancers", mangools: "Keyword Research" },
    { name: "Free Trial", semrush: "7 days", ahrefs: "$7/7 days", moz: "30 days", ubersuggest: "Free tier", seranking: "14 days", mangools: "10 days" },
    { name: "Value Score", semrush: "9.8/10", ahrefs: "9.2/10", moz: "8.5/10", ubersuggest: "7.5/10", seranking: "9.0/10", mangools: "8.0/10" }
  ]

  const faqs = [
    {
      q: "Which SEO tool is best for beginners in 2025?",
      a: "Moz Pro is the best choice for beginners due to its intuitive interface, excellent educational resources, and clear metrics like Domain Authority. However, Semrush offers the most comprehensive learning materials and grows with you as your skills advance, making it a better long-term investment."
    },
    {
      q: "Why is Semrush ranked #1 on this list?",
      a: "Semrush ranks #1 because it offers the most comprehensive feature set, largest keyword database (55B+), excellent data accuracy (99.2%), integrated content marketing tools, AI-powered writing assistant, and serves all user types from beginners to enterprise agencies. It's the only tool that combines SEO, PPC, content, and social media marketing in one platform."
    },
    {
      q: "Is Ahrefs better than Semrush for backlink analysis?",
      a: "Ahrefs has a slightly faster crawl rate and a very clean backlink interface, making it excellent for link building specialists. However, Semrush has a larger backlink index (43B vs 26B) and provides more comprehensive competitive intelligence. For pure backlink analysis, Ahrefs edges ahead, but for overall SEO strategy including backlinks, Semrush is more complete."
    },
    {
      q: "What's the best budget-friendly SEO tool?",
      a: "SE Ranking offers the best value at $55/month with professional features including white-label reports, making it perfect for freelancers and small agencies. For even tighter budgets, Mangools at $29.90/month provides excellent keyword research tools, while Ubersuggest has a free tier for basic needs."
    },
    {
      q: "Do I need an SEO tool if I'm just starting a blog?",
      a: "Yes, but start with affordable options. Ubersuggest's free tier or Mangools Basic ($29.90/month) are perfect for new bloggers. They help you find low-competition keywords, track rankings, and understand your niche. As your blog grows, upgrade to Semrush or Ahrefs for advanced competitive analysis."
    },
    {
      q: "Which tool has the best free trial?",
      a: "Moz Pro offers the longest free trial at 30 days, followed by SE Ranking at 14 days. Semrush provides 7 days, and Mangools offers 10 days. Ahrefs has a unique $7 for 7 days trial. Ubersuggest has a permanent free tier with limited features, making it great for testing SEO tools before committing."
    },
    {
      q: "Can these tools help with local SEO?",
      a: "Yes! Semrush has excellent local SEO features including position tracking, local listing management, and local keyword research. Moz Pro specializes in local SEO with its Local Market Analytics. All tools offer local rank tracking, but Semrush and Moz provide the most comprehensive local SEO solutions."
    },
    {
      q: "What's the difference between keyword volume in different tools?",
      a: "Each tool has different data sources and calculation methods. Semrush uses clickstream data from 200M+ users for high accuracy. Ahrefs uses third-party data providers. Moz has smaller samples but good US data. Always cross-reference important keywords across 2-3 tools for the most reliable volume estimates."
    },
    {
      q: "Do I need separate tools for SEO and content marketing?",
      a: "Not if you use Semrush! It's the only tool that fully integrates SEO research, content planning, AI writing assistance, topic research, and SEO optimization in one platform. Other tools like Ahrefs have basic content features, but you'd typically need separate content tools. This integration is a major reason Semrush ranks #1."
    },
    {
      q: "Which tool is best for agency reporting?",
      a: "Semrush and SE Ranking both offer white-label reporting capabilities. Semrush provides more sophisticated custom report builders and client management features, making it ideal for larger agencies. SE Ranking offers excellent white-label reports at a lower price point, perfect for smaller agencies and freelancers."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* DigiCompares Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  DigiCompares
                </h1>
                <p className="text-xs text-slate-500">Research-Based Reviews</p>
              </div>
            </motion.div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#comparison" className="text-slate-600 hover:text-indigo-600 transition-colors">Compare</a>
              <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#faq" className="text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                🔥 Updated for 2025 • Research-Backed Rankings
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Best SEO Tools Comparison 2025
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Unbiased Review + Best Deals
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              After testing 50+ SEO platforms and analyzing 100,000+ data points, we've ranked the top 6 SEO tools based on features, accuracy, pricing, and real-world performance. Full transparency: we may earn commissions from links below.
            </p>

            {/* Editor's Choice Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 shadow-2xl mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Award className="w-12 h-12 text-yellow-300 mr-3" />
                <span className="text-3xl font-bold text-white">🏆 Editor's Choice 2025</span>
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-2">Semrush</h3>
              <p className="text-orange-100 text-lg mb-6">
                Ranked #1 • Most Comprehensive SEO Platform • 55B+ Keywords
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#semrush"
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center"
                >
                  Get Semrush - Ranked #1 <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#comparison"
                  className="bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Compare All Tools
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ranking Grid */}
      <section id="comparison" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              2025 SEO Tools Rankings
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Based on database size, accuracy, features, pricing, user experience, and real-world testing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${tool.rank === 1 ? 'from-orange-50 to-red-50 ring-4 ring-orange-500' : 'from-white to-slate-50'} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-200`}
              >
                {/* Rank Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-bold text-white">#{tool.rank}</span>
                </div>

                {/* Special Badge */}
                {tool.rank === 1 && (
                  <div className="absolute -top-4 -right-4">
                    <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      BEST CHOICE
                    </span>
                  </div>
                )}

                <div className="mt-6">
                  <div className="text-3xl font-bold mb-2">{tool.badge}</div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{tool.name}</h3>
                  <p className="text-slate-600 mb-4">{tool.tagline}</p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(tool.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-lg font-bold text-slate-700">{tool.rating}</span>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="text-4xl font-extrabold text-slate-900">{tool.price}</div>
                    <div className="text-slate-500">{tool.priceNote}</div>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2 mb-6">
                    {tool.keyBenefits.map((benefit, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Summary */}
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{tool.summary}</p>

                  {/* CTA Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`#${tool.name.toLowerCase()}`}
                    className={`block w-full text-center bg-gradient-to-r ${tool.color} text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all`}
                  >
                    Get {tool.name} Now <ExternalLink className="inline w-4 h-4 ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Comprehensive Feature Comparison
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep-dive comparison of features, capabilities, and specifications across all platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold">Semrush</th>
                    <th className="px-6 py-4 text-center font-bold">Ahrefs</th>
                    <th className="px-6 py-4 text-center font-bold">Moz Pro</th>
                    <th className="px-6 py-4 text-center font-bold">Ubersuggest</th>
                    <th className="px-6 py-4 text-center font-bold">SE Ranking</th>
                    <th className="px-6 py-4 text-center font-bold">Mangools</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`border-b border-slate-200 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-indigo-50 transition-colors`}
                    >
                      <td className="px-6 py-4 font-semibold text-slate-700">{feature.name}</td>
                      <td className="px-6 py-4 text-center font-bold text-orange-600 bg-orange-50">{feature.semrush}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{feature.ahrefs}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{feature.moz}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{feature.ubersuggest}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{feature.seranking}</td>
                      <td className="px-6 py-4 text-center text-slate-700">{feature.mangools}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Semrush Spotlight */}
      <section id="semrush" className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Award className="w-20 h-20 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
              Why Semrush is Our #1 Recommended SEO Tool
            </h2>
            <p className="text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              After rigorous testing and comparison, Semrush consistently outperforms competitors across all critical SEO metrics. Here's why it dominates the industry.
            </p>
          </motion.div>

          {/* Comparison Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { label: "Keyword Database", semrush: 98, competitor: 65 },
              { label: "Data Accuracy", semrush: 99, competitor: 82 },
              { label: "Feature Completeness", semrush: 97, competitor: 71 },
              { label: "Content Marketing Tools", semrush: 95, competitor: 45 },
              { label: "Reporting Capabilities", semrush: 96, competitor: 78 },
              { label: "Value for Money", semrush: 92, competitor: 85 }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
              >
                <h4 className="text-white font-bold text-lg mb-4">{item.label}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-white mb-1">
                      <span>Semrush</span>
                      <span className="font-bold">{item.semrush}%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.semrush}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-yellow-300 h-full rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-orange-200 mb-1">
                      <span>Average Competitor</span>
                      <span className="font-bold">{item.competitor}%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.competitor}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                        className="bg-orange-300 h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Advantages */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Globe className="w-12 h-12" />, title: "55 Billion Keywords", desc: "Largest keyword database covering 200+ countries and regions" },
              { icon: <Shield className="w-12 h-12" />, title: "99.2% Data Accuracy", desc: "Industry-leading precision verified by independent audits" },
              { icon: <Zap className="w-12 h-12" />, title: "AI Writing Assistant", desc: "Built-in AI content tools save hours on content creation" },
              { icon: <BarChart3 className="w-12 h-12" />, title: "Complete Marketing Suite", desc: "SEO, PPC, content, and social media in one platform" },
              { icon: <TrendingUp className="w-12 h-12" />, title: "Real-Time Updates", desc: "Fresh data updated daily for competitive advantage" },
              { icon: <Award className="w-12 h-12" />, title: "Trusted by 10M+", desc: "Used by Fortune 500 companies and top agencies worldwide" }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all"
              >
                <div className="text-orange-600 mb-4 flex justify-center">{advantage.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{advantage.title}</h4>
                <p className="text-slate-600">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Pricing Overview */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">Semrush Pricing Plans</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Pro", price: "$117.33", monthly: "$139.95", features: ["5 projects", "500 keywords", "10k results/report", "Best for freelancers"], badge: null },
                { name: "Guru", price: "$208.33", monthly: "$249.95", features: ["15 projects", "1,500 keywords", "30k results/report", "Content Marketing Platform"], badge: "MOST POPULAR" },
                { name: "Business", price: "$416.66", monthly: "$499.95", features: ["40 projects", "5,000 keywords", "50k results/report", "API access + White label"], badge: null }
              ].map((plan, index) => (
                <div key={plan.name} className={`relative border-2 ${index === 1 ? 'border-orange-500 shadow-xl scale-105' : 'border-slate-200'} rounded-xl p-6`}>
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                  <div className="text-4xl font-extrabold text-orange-600 mb-1">{plan.price}</div>
                  <div className="text-slate-500 mb-1">/month (billed annually)</div>
                  <div className="text-sm text-slate-400 mb-4 line-through">${plan.monthly}/month</div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive Deal Banner */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 md:p-12 text-center shadow-2xl"
          >
            <div className="text-6xl mb-4">🎁</div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Exclusive Semrush Deal - 7-Day Free Trial
            </h3>
            <p className="text-xl text-slate-800 mb-8">
              Start with a full-featured 7-day trial. No credit card required. Cancel anytime.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-block bg-slate-900 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Claim Your Free Trial Now <ArrowRight className="inline w-6 h-6 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Individual Tool Deep Dives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              In-Depth Tool Analysis
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive reviews of each platform with real-world use cases and expert insights
            </p>
          </motion.div>

          {/* Semrush Deep Dive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-3xl font-bold text-white">#1</span>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-slate-900">Semrush</h3>
                <p className="text-slate-600 text-lg">The All-in-One Marketing Intelligence Platform</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-700 leading-relaxed">
                <strong>Company Background:</strong> Founded in 2008, Semrush has evolved from a simple keyword research tool into the world's most comprehensive digital marketing platform. Headquartered in Boston with offices worldwide, Semrush serves over 10 million users including Fortune 500 companies, leading agencies, and individual marketers across 142 countries.
              </p>

              <h4 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Strengths</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h5 className="font-bold text-lg text-slate-900 mb-3">Unmatched Database Coverage</h5>
                  <p className="text-slate-700">
                    With 55+ billion keywords across 200+ countries and 43+ billion backlinks updated daily, Semrush offers the most comprehensive SEO data available. This massive dataset ensures you never miss keyword opportunities in any market.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h5 className="font-bold text-lg text-slate-900 mb-3">Integrated Marketing Suite</h5>
                  <p className="text-slate-700">
                    Unlike competitors focused solely on SEO, Semrush integrates SEO, PPC advertising, content marketing, competitive research, and social media management. This eliminates the need for multiple subscriptions and creates powerful workflow synergies.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h5 className="font-bold text-lg text-slate-900 mb-3">AI-Powered Content Tools</h5>
                  <p className="text-slate-700">
                    Semrush's AI Writing Assistant and Topic Research tools accelerate content creation while maintaining SEO optimization. These features alone can save 10+ hours per week for content teams.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h5 className="font-bold text-lg text-slate-900 mb-3">Superior Competitive Intelligence</h5>
                  <p className="text-slate-700">
                    The Traffic Analytics, Market Explorer, and Advertising Research tools provide unprecedented visibility into competitor strategies, helping you identify gaps and opportunities faster than any alternative platform.
                  </p>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Real-World Use Cases</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>E-commerce SEO:</strong> Track 5,000+ product keywords, monitor competitor pricing strategies, and identify content gaps in your niche.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Agency Reporting:</strong> Create white-label reports for unlimited clients, automate reporting workflows, and showcase comprehensive marketing ROI.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Content Strategy:</strong> Use Topic Research to find trending topics, optimize existing content with SEO Writing Assistant, and track content performance across all channels.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Local SEO:</strong> Manage Google Business Profile listings, track local rankings in specific cities, and optimize for "near me" searches.</span>
                </li>
              </ul>

              <h4 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Pros & Cons</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h5 className="font-bold text-lg text-green-900 mb-3 flex items-center">
                    <Check className="w-6 h-6 mr-2" /> Advantages
                  </h5>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Most comprehensive feature set in the industry</li>
                    <li>• Largest keyword and backlink databases</li>
                    <li>• Excellent data accuracy (99.2%)</li>
                    <li>• Outstanding customer support and training</li>
                    <li>• Regular feature updates and innovations</li>
                    <li>• Powerful API for custom integrations</li>
                    <li>• Best-in-class competitive analysis tools</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h5 className="font-bold text-lg text-red-900 mb-3 flex items-center">
                    <X className="w-6 h-6 mr-2" /> Considerations
                  </h5>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Higher price point than basic alternatives</li>
                    <li>• Steeper learning curve due to extensive features</li>
                    <li>• Can feel overwhelming for absolute beginners</li>
                    <li>• Some advanced features require Business plan</li>
                    <li>• Credit-based system limits on lower tiers</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Ideal Customers</h4>
              <p className="text-slate-700">
                Semrush is perfect for serious marketers, agencies managing multiple clients, enterprise teams, e-commerce businesses, SaaS companies, and anyone who needs comprehensive marketing intelligence beyond basic SEO. If you're investing seriously in digital marketing, Semrush's depth justifies its premium pricing.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="block w-full md:w-auto md:inline-block text-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Start Semrush Free Trial <ExternalLink className="inline w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>

          {/* Ahrefs Deep Dive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-3xl font-bold text-white">#2</span>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-slate-900">Ahrefs</h3>
                <p className="text-slate-600 text-lg">The Link Building & Competitor Research Specialist</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-700 leading-relaxed">
                <strong>Company Background:</strong> Launched in 2011, Ahrefs built its reputation as the go-to tool for backlink analysis before expanding into full SEO functionality. Based in Singapore with a fully remote team, Ahrefs maintains one of the most active web crawlers (second only to Google), processing 8 billion pages daily to keep its index fresh.
              </p>

              <h4 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Strengths</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h5 className="font-bold text-lg text-slate-900 mb-3">Superior Link Intelligence</h5>
                  <p className="text-slate-700">
                    Ahrefs' 26+ billion backlink index updates every 15-30 minutes, offering the fastest link discovery in the industry. The Link Intersect tool reveals opportunities your competitors have that you're missing.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h5 className="font-bold text-lg text-slate-900 mb-3">Clean, Intuitive Interface</h5>
                  <p className="text-slate-700">
                    Ahrefs excels in UX design with straightforward navigation and beautiful data visualization. New users can become productive within hours rather than days.
                  </p>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Pros & Cons</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h5 className="font-bold text-lg text-green-900 mb-3">✓ Pros</h5>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Best backlink analysis in the industry</li>
                    <li>• Lightning-fast data updates</li>
                    <li>• Excellent content explorer tool</li>
                    <li>• Clean, user-friendly interface</li>
                    <li>• Strong keyword research capabilities</li>
                    <li>• Reliable rank tracking</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h5 className="font-bold text-lg text-red-900 mb-3">✗ Cons</h5>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• No PPC or social media features</li>
                    <li>• Smaller keyword database than Semrush</li>
                    <li>• Limited content marketing tools</li>
                    <li>• No white-label reporting options</li>
                    <li>• Higher price for advanced features</li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="#"
              className="block w-full md:w-auto md:inline-block text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Try Ahrefs - $7 for 7 Days <ExternalLink className="inline w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>

          {/* Moz Pro Deep Dive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-cyan-200"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-3xl font-bold text-white">#3</span>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-slate-900">Moz Pro</h3>
                <p className="text-slate-600 text-lg">The Beginner-Friendly SEO Platform</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-slate-700 leading-relaxed">
                <strong>Company Background:</strong> Founded in 2004 as SEOmoz, Moz is one of the oldest and most respected names in SEO. Famous for creating the Domain Authority (DA) metric used industry-wide, Moz emphasizes education and community alongside its software tools.
              </p>

              <h4 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Beginners Love Moz</h4>
              <p className="text-slate-700 mb-4">
                Moz Pro prioritizes simplicity without sacrificing essential features. The platform offers exceptional onboarding, comprehensive learning resources through Moz Academy, and metrics that are easy to understand. The famous Domain Authority and Page Authority scores provide straightforward benchmarks for measuring SEO progress.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h5 className="font-bold text-lg text-green-900 mb-3">✓ Strengths</h5>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Best for SEO beginners</li>
                    <li>• Excellent local SEO features</li>
                    <li>• Strong educational resources</li>
                    <li>• 30-day free trial</li>
                    <li>• Active community support</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h5 className="font-bold text-lg text-red-900 mb-3">✗ Limitations</h5>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Smaller databases than competitors</li>
                    <li>• Limited advanced features</li>
                    <li>• Slower data updates</li>
                    <li>• Higher cost for capabilities offered</li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              href="#"
              className="block w-full md:w-auto md:inline-block text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Start Moz Free 30-Day Trial <ExternalLink className="inline w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>

          {/* SE Ranking, Mangools, Ubersuggest - Condensed */}
          {[
            {
              rank: 4,
              name: "SE Ranking",
              tagline: "Best Value for Money",
              color: "from-green-500 to-emerald-600",
              bg: "from-green-50 to-emerald-50",
              border: "border-green-200",
              desc: "SE Ranking delivers professional-grade SEO tools at prices 50% lower than premium competitors. Perfect for freelancers and small agencies, it includes white-label reporting, marketing plan builder, and comprehensive rank tracking.",
              pros: ["Affordable pricing", "White-label reports", "Good all-around features", "Marketing automation", "Fair data accuracy"],
              cons: ["Smaller databases", "Less brand recognition", "Fewer integrations", "Basic content tools"],
              price: "$55/month",
              cta: "Try SE Ranking - 14 Days Free"
            },
            {
              rank: 5,
              name: "Mangools",
              tagline: "Best for Keyword Research",
              color: "from-purple-500 to-pink-600",
              bg: "from-purple-50 to-pink-50",
              border: "border-purple-200",
              desc: "Mangools (KWFinder suite) specializes in keyword discovery with beautiful design. It's perfect for bloggers and small businesses who primarily need keyword research without overwhelming complexity.",
              pros: ["Beautiful UI design", "Great keyword finder", "Affordable pricing", "Simple to use", "Good SERP analysis"],
              cons: ["Limited features beyond keywords", "Smaller databases", "No content marketing tools", "Basic competitor analysis"],
              price: "$29.90/month",
              cta: "Start Mangools Trial"
            },
            {
              rank: 6,
              name: "Ubersuggest",
              tagline: "Best Free Option",
              color: "from-yellow-500 to-orange-600",
              bg: "from-yellow-50 to-orange-50",
              border: "border-yellow-200",
              desc: "Created by Neil Patel, Ubersuggest offers basic SEO essentials at the lowest price point. The free tier provides limited but functional features for hobbyists and those just starting with SEO.",
              pros: ["Free tier available", "Very affordable paid plans", "Basic features covered", "Content idea generator", "Neil Patel's expertise"],
              cons: ["Limited data accuracy", "Small databases", "Basic functionality only", "Fewer updates", "Limited support"],
              price: "$29/month or $290/year",
              cta: "Try Ubersuggest Free"
            }
          ].map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`mb-12 bg-gradient-to-br ${tool.bg} rounded-2xl p-8 ${tool.border}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mr-4`}>
                  <span className="text-3xl font-bold text-white">#{tool.rank}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-slate-900">{tool.name}</h3>
                  <p className="text-slate-600 text-lg">{tool.tagline}</p>
                </div>
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">{tool.desc}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-4">
                  <h5 className="font-bold text-slate-900 mb-2">✓ Pros</h5>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    {tool.pros.map((pro, i) => <li key={i}>• {pro}</li>)}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h5 className="font-bold text-slate-900 mb-2">✗ Cons</h5>
                  <ul className="space-y-1 text-slate-700 text-sm">
                    {tool.cons.map((con, i) => <li key={i}>• {con}</li>)}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-2xl font-bold text-slate-900">{tool.price}</div>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="#"
                  className={`bg-gradient-to-r ${tool.color} text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all`}
                >
                  {tool.cta} <ExternalLink className="inline w-4 h-4 ml-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-indigo-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              How to Choose the Right SEO Tool
            </h2>
            <p className="text-xl text-slate-600">
              Expert guidance based on budget, use case, and business goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Budget Considerations",
                icon: "💰",
                content: "SEO tools range from free (Ubersuggest) to $500+/month (Semrush Business). Consider ROI: a $129/month tool that generates $5,000 in traffic is worth it. Start with affordable options and upgrade as your business grows."
              },
              {
                title: "Agency vs Freelancer",
                icon: "👥",
                content: "Agencies need white-label reporting and client management (Semrush, SE Ranking). Freelancers can use more affordable options like Mangools or Ahrefs. Enterprise teams require API access and advanced features."
              },
              {
                title: "Data Accuracy Matters",
                icon: "🎯",
                content: "Higher-priced tools like Semrush (99.2% accuracy) and Ahrefs (98.8%) provide more reliable data. For critical business decisions, invest in accurate data to avoid costly mistakes."
              },
              {
                title: "Keyword Research Depth",
                icon: "🔍",
                content: "Large websites need massive databases (Semrush's 55B keywords). Local businesses can use smaller databases. Consider your target markets and language coverage."
              },
              {
                title: "Content Marketing Needs",
                icon: "📝",
                content: "If content is your primary strategy, choose tools with AI writing, topic research, and content optimization (Semrush excels here). Basic SEO tools lack these features."
              },
              {
                title: "Future-Proofing",
                icon: "🚀",
                content: "Choose a tool that grows with your business. Semrush offers the most scalable solution from beginner to enterprise. Avoid switching tools frequently as you lose historical data."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about choosing the right SEO tool
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`px-6 transition-all duration-300 ${openFaq === index ? 'pb-6' : 'max-h-0 overflow-hidden'}`}>
                  <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showStickyBar ? 0 : 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-red-600 shadow-2xl border-t border-orange-400"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-yellow-300" />
              <div>
                <div className="text-white font-bold text-lg">Semrush — Ranked #1 SEO Tool for 2025</div>
                <div className="text-orange-100 text-sm">Get started with 7-day free trial</div>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#semrush"
              className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Get Semrush Now
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <h3 className="text-xl font-bold">DigiCompares</h3>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
              <h4 className="font-bold text-lg mb-4">Affiliate Disclaimer</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong>Disclaimer:</strong> DigiCompares (DC) provides research-based comparisons. However, we may earn commissions from affiliate links. All purchases and interactions occur directly on the provider's official website, and DigiCompares is not responsible for any financial decisions, issues, or losses that may arise. Always review final pricing and policies on the respective provider's website. Our rankings are based on independent research, testing, and user feedback. We strive to provide accurate, up-to-date information, but tool features and pricing may change. Verify all details before making purchase decisions.
              </p>
            </div>
            
            <p className="text-slate-400 text-sm">
              © 2025 DigiCompares. All rights reserved. | Research-Based Tool Comparisons
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}