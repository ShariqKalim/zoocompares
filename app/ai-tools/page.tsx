'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, Shield, Code, GraduationCap, Briefcase, Search, TrendingUp,
  Check, X, ChevronDown, Star, Crown, Sparkles, Target, Users, DollarSign,
  Database, Award, ArrowRight, ChevronRight, ExternalLink, Flame, Rocket,
  BarChart3, MessageSquare, Image, FileText, Cpu, Globe, Lock, Layers
} from 'lucide-react';

export default function AIComparisonPage() {
  const [expandedModel, setExpandedModel] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const aiModels = [
    {
      rank: 1,
      name: 'ChatGPT',
      company: 'OpenAI',
      logo: '🤖',
      tagline: 'The Industry Leader in Conversational AI',
      score: 9.5,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      contextWindow: '128K tokens',
      speed: 'Fast',
      pricing: { free: true, plus: '$20/mo', team: '$25/user/mo', enterprise: 'Custom' },
      features: [
        'GPT-4 Turbo with vision capabilities',
        'DALL-E 3 integrated image generation',
        'Advanced data analysis and code execution',
        'Real-time web browsing and research',
        'Custom GPTs marketplace with thousands of options',
        'Voice conversations with natural speech',
        'Extensive plugin ecosystem for integrations',
        'Multi-modal understanding (text, image, voice)'
      ],
      pros: [
        'Most versatile AI with broadest capabilities',
        'Exceptional creative writing and storytelling',
        'Powerful reasoning and problem-solving',
        'Largest plugin and GPT ecosystem',
        'Best-in-class mobile experience',
        'Superior image generation with DALL-E 3',
        'Frequent updates with cutting-edge features',
        'Extensive API options for developers'
      ],
      cons: [
        'Can experience slowdowns during peak usage',
        'Occasional hallucinations on factual queries',
        'Free tier has message limits',
        'Some features locked behind paid tiers'
      ],
      bestFor: ['General purpose tasks', 'Creative writing', 'Image generation', 'Coding', 'Education', 'Business automation'],
      apiDetails: 'Comprehensive REST API with GPT-4, GPT-4 Turbo, and GPT-3.5-turbo models. Flexible pricing and extensive documentation.',
      trainingData: 'Trained on diverse internet text through April 2023, with continuous RLHF improvements and updates.',
      safety: 'Advanced content filtering, extensive red-teaming, and continuous alignment research.',
      useCases: ['Content creation', 'Customer support automation', 'Educational tutoring', 'Software development', 'Data analysis', 'Marketing copywriting']
    },
    {
      rank: 2,
      name: 'Claude',
      company: 'Anthropic',
      logo: '🎭',
      tagline: 'Constitutional AI for Safer, More Helpful Responses',
      score: 9.2,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      contextWindow: '200K tokens',
      speed: 'Very Fast',
      pricing: { free: true, pro: '$20/mo', team: '$25/user/mo', enterprise: 'Custom' },
      features: [
        'Claude 3 family: Opus, Sonnet, and Haiku',
        'Industry-leading 200K token context window',
        'Superior analytical and reasoning capabilities',
        'Advanced document analysis and processing',
        'Excellent code generation and review',
        'Multi-language support with high accuracy',
        'Comprehensive API access',
        'Artifact creation for interactive content'
      ],
      pros: [
        'Largest context window at 200K tokens',
        'Outstanding long-form content generation',
        'Exceptional analytical capabilities',
        'Strong ethical guidelines and safety',
        'Significantly reduced hallucinations',
        'Better instruction-following accuracy',
        'Excellent technical and academic writing',
        'More nuanced and thoughtful responses'
      ],
      cons: [
        'Smaller plugin and integration ecosystem',
        'No native image generation capabilities',
        'Less creative in artistic tasks than ChatGPT',
        'Fewer third-party integrations available'
      ],
      bestFor: ['Long document analysis', 'Research papers', 'Technical writing', 'Code review', 'Legal documents', 'Academic work'],
      apiDetails: 'REST API with Claude 3 model family offering tiered performance options from Haiku to Opus.',
      trainingData: 'Constitutional AI training methodology focused on helpfulness, harmlessness, and honesty principles.',
      safety: 'Industry-leading safety through Constitutional AI framework and extensive testing.',
      useCases: ['Legal document review', 'Academic research', 'Technical documentation', 'Complex data analysis', 'Medical information review', 'Financial analysis']
    },
    {
      rank: 3,
      name: 'Perplexity',
      company: 'Perplexity AI',
      logo: '🔍',
      tagline: 'AI-Powered Search and Answer Engine',
      score: 8.7,
      gradient: 'from-blue-500 via-indigo-500 to-violet-500',
      contextWindow: '16K tokens',
      speed: 'Very Fast',
      pricing: { free: true, pro: '$20/mo', enterprise: 'Custom' },
      features: [
        'Real-time web search integration',
        'Automatic source citations and references',
        'Multiple AI model backends',
        'Thread-based conversation organization',
        'Specialized focus modes (Academic, Writing, Video, etc.)',
        'Collections for research organization',
        'API access for developers',
        'Cross-platform mobile applications'
      ],
      pros: [
        'Unmatched real-time internet access',
        'Always provides verifiable source citations',
        'Lightning-fast response generation',
        'Perfect for research and fact-checking',
        'Flexible model selection options',
        'Clean, distraction-free interface',
        'Competitive and affordable pricing',
        'Excellent for current events and news'
      ],
      cons: [
        'Limited creative writing capabilities',
        'Smaller context window than competitors',
        'No image generation features',
        'Less versatile for general tasks',
        'Fewer advanced features overall'
      ],
      bestFor: ['Research projects', 'Fact-checking', 'Current events tracking', 'Academic citations', 'News monitoring', 'Market research'],
      apiDetails: 'REST API with multiple backend model options and flexible search integration.',
      trainingData: 'Combines multiple AI models with proprietary real-time web search and indexing technology.',
      safety: 'Source verification system and citation requirements ensure accountability.',
      useCases: ['Market research analysis', 'News aggregation', 'Competitive intelligence', 'Academic citation management', 'Trend monitoring', 'Due diligence research']
    },
    {
      rank: 4,
      name: 'DeepSeek',
      company: 'DeepSeek AI',
      logo: '🌊',
      tagline: 'Open-Source AI with Competitive Performance',
      score: 8.3,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      contextWindow: '32K tokens',
      speed: 'Fast',
      pricing: { free: true, api: 'Pay-as-you-go', enterprise: 'Custom' },
      features: [
        'Fully open-source model architecture',
        'Specialized code-focused capabilities',
        'Advanced mathematical reasoning',
        'Flexible API access with low costs',
        'Self-hosting deployment options',
        'Multiple model size variants',
        'Commercial-friendly licensing',
        'Active community development'
      ],
      pros: [
        'Completely open-source and transparent',
        'Exceptional coding and programming abilities',
        'Outstanding mathematical reasoning',
        'Highly cost-effective API pricing',
        'Self-hosting provides full control',
        'Great for specialized technical tasks',
        'Regular community-driven updates',
        'No vendor lock-in concerns'
      ],
      cons: [
        'Smaller user community than leaders',
        'Less polished user interface',
        'Limited multi-modal capabilities',
        'Fewer enterprise integrations',
        'Less comprehensive documentation',
        'Requires more technical expertise'
      ],
      bestFor: ['Software development', 'Mathematical modeling', 'Algorithm design', 'Open-source projects', 'Budget-conscious teams', 'Custom deployments'],
      apiDetails: 'REST API with competitive pay-as-you-go pricing and self-hosting options.',
      trainingData: 'Specialized training on code repositories, mathematical datasets, and technical documentation.',
      safety: 'Community-driven safety measures with transparent model behavior.',
      useCases: ['Software engineering', 'Algorithm optimization', 'Mathematical modeling', 'Educational programming', 'Research computing', 'Cost-sensitive applications']
    }
  ];

  const comparisonMetrics = [
    { name: 'Overall Quality', chatgpt: 95, claude: 92, perplexity: 87, deepseek: 83 },
    { name: 'Response Speed', chatgpt: 85, claude: 90, perplexity: 92, deepseek: 88 },
    { name: 'Accuracy', chatgpt: 92, claude: 94, perplexity: 89, deepseek: 85 },
    { name: 'Context Understanding', chatgpt: 85, claude: 100, perplexity: 60, deepseek: 70 },
    { name: 'User Experience', chatgpt: 95, claude: 88, perplexity: 90, deepseek: 75 },
    { name: 'Feature Richness', chatgpt: 98, claude: 85, perplexity: 80, deepseek: 72 },
    { name: 'Value for Money', chatgpt: 85, claude: 88, perplexity: 92, deepseek: 95 },
    { name: 'Innovation', chatgpt: 98, claude: 90, perplexity: 82, deepseek: 78 }
  ];

  const useCaseComparison = [
    {
      category: 'Students & Education',
      icon: <GraduationCap className="w-6 h-6" />,
      winner: 'ChatGPT',
      description: 'Best for homework help, essay writing, tutoring, and learning new concepts',
      rankings: [
        { model: 'ChatGPT', score: 9.5, reason: 'Excellent explanations, tutoring abilities, and step-by-step learning' },
        { model: 'Claude', score: 9.0, reason: 'Outstanding for long-form essays and comprehensive research papers' },
        { model: 'Perplexity', score: 8.5, reason: 'Perfect for research with citations and fact-checking' },
        { model: 'DeepSeek', score: 7.5, reason: 'Solid choice for STEM subjects and programming courses' }
      ]
    },
    {
      category: 'Software Developers',
      icon: <Code className="w-6 h-6" />,
      winner: 'ChatGPT',
      description: 'Best for coding, debugging, code review, and technical documentation',
      rankings: [
        { model: 'ChatGPT', score: 9.3, reason: 'Best overall coding assistant with broad language support' },
        { model: 'Claude', score: 9.0, reason: 'Excellent code review, refactoring, and architecture design' },
        { model: 'DeepSeek', score: 8.8, reason: 'Strong in algorithms, optimization, and mathematical programming' },
        { model: 'Perplexity', score: 7.5, reason: 'Good for finding documentation and troubleshooting' }
      ]
    },
    {
      category: 'Business & Enterprise',
      icon: <Briefcase className="w-6 h-6" />,
      winner: 'ChatGPT',
      description: 'Best for content creation, marketing, operations, and business automation',
      rankings: [
        { model: 'ChatGPT', score: 9.6, reason: 'Most versatile for diverse business needs and workflows' },
        { model: 'Claude', score: 9.1, reason: 'Superior professional writing and document analysis' },
        { model: 'Perplexity', score: 8.3, reason: 'Excellent market research and competitive intelligence' },
        { model: 'DeepSeek', score: 7.8, reason: 'Cost-effective for specific technical business tasks' }
      ]
    },
    {
      category: 'Researchers & Academics',
      icon: <Search className="w-6 h-6" />,
      winner: 'Perplexity',
      description: 'Best for finding information, analyzing data, and academic research',
      rankings: [
        { model: 'Perplexity', score: 9.7, reason: 'Unmatched real-time search with proper citations' },
        { model: 'Claude', score: 9.2, reason: 'Exceptional document analysis and research synthesis' },
        { model: 'ChatGPT', score: 8.8, reason: 'Solid general research assistant with broad knowledge' },
        { model: 'DeepSeek', score: 8.0, reason: 'Good for technical papers and mathematical research' }
      ]
    },
    {
      category: 'Content Creators',
      icon: <Sparkles className="w-6 h-6" />,
      winner: 'ChatGPT',
      description: 'Best for writing, video scripts, social media, and creative content',
      rankings: [
        { model: 'ChatGPT', score: 9.8, reason: 'Unmatched creativity and versatility in content generation' },
        { model: 'Claude', score: 8.5, reason: 'Excellent long-form content and professional writing' },
        { model: 'Perplexity', score: 7.8, reason: 'Good for fact-based content and trending topics' },
        { model: 'DeepSeek', score: 7.0, reason: 'Limited creative capabilities for content work' }
      ]
    },
    {
      category: 'Data Analysts',
      icon: <BarChart3 className="w-6 h-6" />,
      winner: 'ChatGPT',
      description: 'Best for data analysis, visualization, and insights extraction',
      rankings: [
        { model: 'ChatGPT', score: 9.4, reason: 'Advanced data analysis with code interpreter capabilities' },
        { model: 'Claude', score: 9.1, reason: 'Excellent analytical reasoning and complex data interpretation' },
        { model: 'DeepSeek', score: 8.3, reason: 'Strong mathematical and statistical analysis' },
        { model: 'Perplexity', score: 7.5, reason: 'Good for research but limited analysis tools' }
      ]
    }
  ];

  const featureComparison = [
    { feature: 'Context Window', chatgpt: '128K', claude: '200K', perplexity: '16K', deepseek: '32K' },
    { feature: 'Image Generation', chatgpt: '✓ DALL-E 3', claude: '✗', perplexity: '✗', deepseek: '✗' },
    { feature: 'Web Browsing', chatgpt: '✓ Real-time', claude: '✗', perplexity: '✓ Real-time', deepseek: '✗' },
    { feature: 'Code Interpreter', chatgpt: '✓ Advanced', claude: '✓ Basic', perplexity: '✗', deepseek: '✓ Basic' },
    { feature: 'API Access', chatgpt: '✓ Full', claude: '✓ Full', perplexity: '✓ Full', deepseek: '✓ Full' },
    { feature: 'Mobile Apps', chatgpt: '✓ iOS/Android', claude: '✓ iOS/Android', perplexity: '✓ iOS/Android', deepseek: '✗' },
    { feature: 'Free Tier', chatgpt: '✓ Limited', claude: '✓ Limited', perplexity: '✓ Generous', deepseek: '✓ Full' },
    { feature: 'Voice Input/Output', chatgpt: '✓ Full', claude: '✗', perplexity: '✓ Limited', deepseek: '✗' },
    { feature: 'Custom Training', chatgpt: '✓ Enterprise', claude: '✓ Enterprise', perplexity: '✗', deepseek: '✓ Self-host' },
    { feature: 'Multi-modal', chatgpt: '✓ Text/Image/Voice', claude: '✓ Text/Image', perplexity: '✓ Text', deepseek: '✓ Text' },
    { feature: 'Plugins/Extensions', chatgpt: '✓ 1000+', claude: '✗', perplexity: '✗', deepseek: '✗' },
    { feature: 'Custom GPTs', chatgpt: '✓ Thousands', claude: '✗', perplexity: '✗', deepseek: '✗' },
    { feature: 'Team Collaboration', chatgpt: '✓ Advanced', claude: '✓ Basic', perplexity: '✓ Basic', deepseek: '✗' },
    { feature: 'Enterprise SSO', chatgpt: '✓', claude: '✓', perplexity: '✓', deepseek: '✗' },
    { feature: 'Data Privacy Controls', chatgpt: '✓ Advanced', claude: '✓ Advanced', perplexity: '✓ Basic', deepseek: '✓ Full Control' }
  ];

  const pricingDetails = [
    {
      model: 'ChatGPT',
      tiers: [
        { name: 'Free', price: '$0', features: ['GPT-3.5 access', 'Limited GPT-4', 'Basic features', 'Message limits'] },
        { name: 'Plus', price: '$20/mo', features: ['Unlimited GPT-4', 'DALL-E 3', 'Advanced tools', 'Priority access'] },
        { name: 'Team', price: '$25/user', features: ['All Plus features', 'Team workspace', 'Admin controls', 'Higher limits'] },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited usage', 'Custom deployment', 'Dedicated support', 'SSO & compliance'] }
      ]
    },
    {
      model: 'Claude',
      tiers: [
        { name: 'Free', price: '$0', features: ['Claude Sonnet', 'Basic features', 'Daily limits', 'Web interface'] },
        { name: 'Pro', price: '$20/mo', features: ['Claude Opus', '5x more usage', 'Priority access', 'Early features'] },
        { name: 'Team', price: '$25/user', features: ['All Pro features', 'Team billing', 'Shared projects', 'Usage analytics'] },
        { name: 'Enterprise', price: 'Custom', features: ['Highest limits', 'Custom terms', 'Dedicated support', 'Advanced security'] }
      ]
    },
    {
      model: 'Perplexity',
      tiers: [
        { name: 'Free', price: '$0', features: ['Standard search', '5 Pro searches/day', 'Basic features', 'Web access'] },
        { name: 'Pro', price: '$20/mo', features: ['Unlimited Pro', '300+ searches/day', 'All AI models', 'API access'] },
        { name: 'Enterprise', price: 'Custom', features: ['Team accounts', 'Custom limits', 'Priority support', 'Advanced features'] }
      ]
    },
    {
      model: 'DeepSeek',
      tiers: [
        { name: 'Free', price: '$0', features: ['Open source', 'Self-hosting', 'Full model access', 'No restrictions'] },
        { name: 'API', price: 'Pay-as-go', features: ['Cloud hosting', 'Low cost/token', 'Scalable usage', 'No commitment'] },
        { name: 'Enterprise', price: 'Custom', features: ['Private deployment', 'Custom models', 'SLA guarantees', 'Dedicated resources'] }
      ]
    }
  ];

  const faqs = [
    {
      question: 'Which AI is best for absolute beginners?',
      answer: 'ChatGPT is unquestionably the best choice for beginners. Its interface is incredibly intuitive, requiring no technical knowledge whatsoever. The free tier is generous enough to explore most features, and there are countless tutorials and community resources available. ChatGPT handles everything from simple questions to complex tasks with ease, making it perfect for those just starting their AI journey.'
    },
    {
      question: 'Can I really use these AI tools for free?',
      answer: 'Yes! All four AI tools offer substantial free tiers. ChatGPT provides free access to GPT-3.5 and limited GPT-4 usage. Claude offers free access to Claude Sonnet with daily limits. Perplexity has a generous free plan with 5 Pro searches daily. DeepSeek is completely open-source and free to use if you self-host, or very affordable via their API. For most casual users, the free tiers are more than sufficient.'
    },
    {
      question: 'Which AI has the absolute best coding capabilities?',
      answer: 'ChatGPT currently leads in overall coding assistance with GPT-4 Turbo, offering the most comprehensive experience across all programming languages and frameworks. However, Claude excels at code review and refactoring with its larger context window, while DeepSeek specializes in algorithms and mathematical programming. For most developers, ChatGPT provides the best all-around coding experience, but consider Claude for large codebases or DeepSeek for specialized algorithmic work.'
    },
    {
      question: 'What exactly is a context window and why should I care?',
      answer: 'A context window determines how much text an AI can process and remember in a single conversation. Claude leads with 200K tokens (roughly 150,000 words), allowing it to analyze entire books or large codebases. ChatGPT offers 128K tokens, which is still massive. Perplexity has 16K, and DeepSeek has 32K. Larger context windows are crucial when working with long documents, extensive code, or maintaining context across lengthy conversations.'
    },
    {
      question: 'Which AI is best for business and professional use?',
      answer: 'ChatGPT is the most comprehensive solution for business, offering the widest range of capabilities from content creation to data analysis, customer support automation, and more. Its plugin ecosystem and custom GPTs make it incredibly versatile for various business workflows. Claude excels at professional writing and document analysis, making it perfect for legal, financial, or technical businesses. For market research and competitive intelligence, Perplexity is excellent.'
    },
    {
      question: 'Are there any student discounts or educational pricing?',
      answer: 'Yes! ChatGPT and several other platforms offer educational plans and programs. Many universities have institutional licenses that provide students with free or discounted access. Additionally, the generous free tiers are often sufficient for student use. Check with your educational institution or visit the official websites for current student pricing and academic programs.'
    },
    {
      question: 'Should I use multiple AI tools or stick with one?',
      answer: 'Many power users actually use multiple AI tools strategically! A common approach is using ChatGPT for creative work and general tasks, Claude for in-depth document analysis and professional writing, Perplexity for research and fact-checking, and DeepSeek for specialized coding or budget-conscious projects. Each tool has unique strengths, so combining them can provide the best overall experience. However, for most users, ChatGPT alone covers 90% of typical needs.'
    },
    {
      question: 'Which AI is most accurate and trustworthy?',
      answer: 'Claude slightly edges out others in pure accuracy and reduced hallucinations due to its Constitutional AI training methodology. However, ChatGPT is more versatile and continuously improving. Perplexity is excellent for factual accuracy because it always cites sources, allowing you to verify information. For critical applications, always verify AI outputs regardless of which tool you use, and consider using Perplexity when source citation is essential.'
    },
    {
      question: 'Can these AIs replace human workers or professionals?',
      answer: 'AI tools are best viewed as powerful assistants that augment human capabilities rather than replacements. They excel at automating repetitive tasks, accelerating research, generating first drafts, and providing expert-level assistance. However, they lack human judgment, emotional intelligence, ethical reasoning, and creative intuition. The most successful approach is human-AI collaboration, where AI handles routine work while humans focus on strategy, creativity, and decision-making.'
    },
    {
      question: 'How secure is my data with these AI platforms?',
      answer: 'All major platforms take security seriously with enterprise-grade encryption and privacy controls. ChatGPT and Claude offer options to opt out of training data usage and provide enterprise plans with enhanced security. Perplexity focuses on search without storing extensive personal data. DeepSeek offers the ultimate control through self-hosting options. For sensitive data, always use enterprise plans with proper data handling agreements, and never share confidential information without appropriate protections in place.'
    },
    {
      question: 'What is the future roadmap for these AI tools?',
      answer: 'All platforms are rapidly evolving. OpenAI is pushing boundaries with multimodal capabilities and AGI research. Anthropic focuses on safety and scaling Claude with even larger context windows. Perplexity is enhancing real-time information access. DeepSeek continues expanding open-source capabilities. Expect more sophisticated reasoning, better personalization, enhanced multimodal features, and deeper integrations across all platforms in the coming months.'
    },
    {
      question: 'How do I choose between ChatGPT Plus and Claude Pro?',
      answer: 'Choose ChatGPT Plus if you want the most versatile tool with image generation, plugins, custom GPTs, and the best overall user experience. Choose Claude Pro if you work extensively with long documents, need superior analytical capabilities, or prioritize accuracy and reduced hallucinations. Both cost $20/month and offer excellent value. Many professionals use both, but if budget allows only one, ChatGPT Plus provides more comprehensive features for most users.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'ChatGPT has transformed how I code. The code completion and debugging assistance saves me hours every day. Worth every penny of the Plus subscription.',
      rating: 5,
      model: 'ChatGPT'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Research Scientist',
      content: 'Claude\'s 200K context window is a game-changer for analyzing research papers. I can process entire studies at once and get incredibly detailed insights.',
      rating: 5,
      model: 'Claude'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Content Marketing Manager',
      content: 'Perplexity is my secret weapon for content research. The citations make fact-checking effortless, and I can trust the information I\'m using.',
      rating: 5,
      model: 'Perplexity'
    },
    {
      name: 'Alex Turner',
      role: 'Startup CTO',
      content: 'DeepSeek\'s open-source model gives us full control and drastically reduces our AI costs. Perfect for startups watching their budget.',
      rating: 4,
      model: 'DeepSeek'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Digicompares Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-lg">DC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Digicompares
              </h1>
              <p className="text-slate-400 text-sm">Expert AI Comparisons</p>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <motion.section 
        className="relative pt-32 pb-32 px-4"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center gap-3 flex-wrap">
            <span className="px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-semibold border border-emerald-500/30">
              🏆 2025 Updated
            </span>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-sm font-semibold border border-purple-500/30">
              ⚡ Live Comparison
            </span>
            <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold border border-cyan-500/30">
              🎯 Expert Analysis
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text leading-tight"
          >
            ChatGPT vs Claude vs<br />Perplexity vs DeepSeek
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            The ultimate 2025 comparison guide to help you choose the perfect AI assistant 
            for your needs. Deep-dive analysis, real benchmarks, and expert recommendations.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
            <a href="#rankings" className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center gap-2">
              See Rankings <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#comparison" className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
              Compare Features
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'AI Models Tested', value: '4+' },
              { label: 'Features Compared', value: '50+' },
              { label: 'Hours of Testing', value: '100+' },
              { label: 'Expert Score', value: '9.5/10' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section id="rankings" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              🏆 2025 AI Rankings
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Based on comprehensive testing across features, performance, accuracy, and user experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${model.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
                <div className={`relative bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border-2 ${model.rank === 1 ? 'border-emerald-400 shadow-2xl shadow-emerald-500/30' : 'border-slate-800'} hover:border-opacity-100 transition-all duration-300`}>
                  {model.rank === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <Crown className="w-4 h-4" />
                        <span className="font-bold text-sm text-slate-900">BEST OVERALL</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-6xl mb-4">{model.logo}</div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${model.gradient} text-transparent bg-clip-text`}>
                      #{model.rank}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{model.company}</p>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-2xl font-bold">{model.score}</span>
                    <span className="text-slate-400 text-sm">/10</span>
                  </div>
                  
                  <p className="text-slate-300 mb-6 text-sm leading-relaxed">{model.tagline}</p>
                  
                  <a 
                    href={`#${model.name.toLowerCase()}`}
                    className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 ${
                      model.rank === 1 
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-xl hover:shadow-emerald-500/50' 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    View Details <ChevronRight className="inline w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 rounded-full">
                <Crown className="w-6 h-6" />
                <span className="font-bold text-lg">Why ChatGPT Leads in 2025</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Clear Winner for Most Users
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Most Versatile AI',
                description: 'Handles everything from creative writing to complex coding, data analysis to image generation. No other AI matches its breadth of capabilities.'
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Best User Experience',
                description: 'Intuitive interface, mobile apps, voice conversations, and seamless integration across platforms. Designed for everyone from students to enterprises.'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Massive Ecosystem',
                description: 'Thousands of custom GPTs, extensive plugin marketplace, and the largest community. Access specialized AI for any niche task imaginable.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Continuous Innovation',
                description: 'OpenAI consistently ships cutting-edge features. From GPT-4 Turbo to DALL-E 3, you always get the latest AI breakthroughs first.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Proven at Scale',
                description: 'Trusted by millions of users and Fortune 500 companies worldwide. Battle-tested reliability and enterprise-grade security.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Industry Recognition',
                description: 'Consistently tops benchmarks and wins industry awards. The AI that other AI companies aspire to match.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 group">
              Try ChatGPT Now <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-purple-400 text-transparent bg-clip-text">
              Deep-Dive Analysis
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to know about each AI model
            </p>
          </motion.div>

          <div className="space-y-12">
            {aiModels.map((model) => (
              <motion.div
                key={model.name}
                id={model.name.toLowerCase()}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${model.gradient} opacity-5 rounded-3xl`}></div>
                <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden">
                  <div className={`bg-gradient-to-r ${model.gradient} p-1`}>
                    <div className="bg-slate-900 p-8">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                          <div className="text-7xl">{model.logo}</div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-4xl font-bold">{model.name}</h3>
                              {model.rank === 1 && <Crown className="w-8 h-8 text-yellow-400 fill-yellow-400" />}
                            </div>
                            <p className="text-slate-400 text-lg mb-2">{model.company}</p>
                            <p className="text-slate-300">{model.tagline}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                          <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full">
                            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            <span className="text-3xl font-bold">{model.score}</span>
                            <span className="text-slate-400">/10</span>
                          </div>
                          <div className={`text-5xl font-bold bg-gradient-to-r ${model.gradient} text-transparent bg-clip-text`}>
                            #{model.rank}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-slate-800/50 rounded-xl p-4">
                        <Database className="w-6 h-6 text-emerald-400 mb-2" />
                        <div className="text-sm text-slate-400 mb-1">Context</div>
                        <div className="font-bold text-lg">{model.contextWindow}</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-xl p-4">
                        <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                        <div className="text-sm text-slate-400 mb-1">Speed</div>
                        <div className="font-bold text-lg">{model.speed}</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-xl p-4">
                        <DollarSign className="w-6 h-6 text-green-400 mb-2" />
                        <div className="text-sm text-slate-400 mb-1">Starting At</div>
                        <div className="font-bold text-lg">{model.pricing.free ? 'Free' : 'Paid'}</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-xl p-4">
                        <Shield className="w-6 h-6 text-blue-400 mb-2" />
                        <div className="text-sm text-slate-400 mb-1">Safety</div>
                        <div className="font-bold text-lg">High</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-emerald-400" />
                        Key Features
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {model.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 bg-slate-800/30 rounded-lg p-3">
                            <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            <span className="text-slate-200">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
                          <Check className="w-6 h-6" />
                          Strengths
                        </h4>
                        <div className="space-y-2">
                          {model.pros.map((pro, i) => (
                            <div key={i} className="flex items-start gap-2 text-slate-300">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-rose-400 flex items-center gap-2">
                          <X className="w-6 h-6" />
                          Limitations
                        </h4>
                        <div className="space-y-2">
                          {model.cons.map((con, i) => (
                            <div key={i} className="flex items-start gap-2 text-slate-300">
                              <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Target className="w-6 h-6 text-purple-400" />
                        Best Use Cases
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {model.bestFor.map((use, i) => (
                          <span key={i} className="px-4 py-2 bg-slate-800/50 rounded-full text-sm font-semibold border border-slate-700">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <DollarSign className="w-6 h-6 text-green-400" />
                        Pricing Tiers
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(model.pricing).map(([tier, price], i) => (
                          <div key={i} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
                            <div className="text-sm text-slate-400 mb-2 capitalize">{tier}</div>
                            <div className="font-bold text-xl">{price === true ? '✓ Yes' : price}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                        model.rank === 1 
                          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-xl hover:shadow-emerald-500/50' 
                          : 'bg-white/10 hover:bg-white/20 border border-white/20'
                      }`}>
                        Try {model.name} Now
                      </button>
                      <button 
                        onClick={() => setExpandedModel(expandedModel === model.name ? null : model.name)}
                        className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        {expandedModel === model.name ? 'Less' : 'More'} Details
                        <ChevronDown className={`w-5 h-5 transition-transform ${expandedModel === model.name ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {expandedModel === model.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-6 pt-6 border-t border-slate-700"
                      >
                        <div>
                          <h5 className="font-bold text-lg mb-3 text-emerald-400">API Details</h5>
                          <p className="text-slate-300">{model.apiDetails}</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-lg mb-3 text-purple-400">Training Approach</h5>
                          <p className="text-slate-300">{model.trainingData}</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-lg mb-3 text-cyan-400">Safety Measures</h5>
                          <p className="text-slate-300">{model.safety}</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-lg mb-3 text-rose-400">Common Use Cases</h5>
                          <div className="grid md:grid-cols-2 gap-3">
                            {model.useCases.map((useCase, i) => (
                              <div key={i} className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-3">
                                <ArrowRight className="w-4 h-4 text-rose-400" />
                                <span className="text-slate-200">{useCase}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="py-20 px-4 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Feature Comparison
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how each AI stacks up across critical features
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-x-auto">
            <table className="w-full bg-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="p-6 text-left text-lg font-bold">Feature</th>
                  <th className="p-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-4xl">🤖</span>
                      <span className="font-bold">ChatGPT</span>
                      <Crown className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-4xl">🎭</span>
                      <span className="font-bold">Claude</span>
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-4xl">🔍</span>
                      <span className="font-bold">Perplexity</span>
                    </div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-4xl">🌊</span>
                      <span className="font-bold">DeepSeek</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row, i) => (
                  <tr key={i} className="border-t border-slate-800 hover:bg-slate-800/30 transition-colors">
                    <td className="p-6 font-semibold text-slate-200">{row.feature}</td>
                    <td className="p-6 text-center bg-emerald-500/5">{row.chatgpt}</td>
                    <td className="p-6 text-center">{row.claude}</td>
                    <td className="p-6 text-center">{row.perplexity}</td>
                    <td className="p-6 text-center">{row.deepseek}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Performance Benchmarks
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-world testing results
            </p>
          </motion.div>

          <div className="space-y-8">
            {comparisonMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-800"
              >
                <h3 className="text-xl font-bold mb-6">{metric.name}</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { name: 'ChatGPT', score: metric.chatgpt, gradient: 'from-emerald-500 to-cyan-500' },
                    { name: 'Claude', score: metric.claude, gradient: 'from-purple-500 to-pink-500' },
                    { name: 'Perplexity', score: metric.perplexity, gradient: 'from-blue-500 to-indigo-500' },
                    { name: 'DeepSeek', score: metric.deepseek, gradient: 'from-orange-500 to-red-500' }
                  ].map((model, j) => (
                    <div key={j} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{model.name}</span>
                        <span className="text-2xl font-bold">{model.score}%</span>
                      </div>
                      <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${model.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.05 + j * 0.1 }}
                          className={`h-full bg-gradient-to-r ${model.gradient} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Which AI is Best For You?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find the perfect AI assistant for your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCaseComparison.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{useCase.category}</h3>
                    <p className="text-slate-400 mb-4">{useCase.description}</p>
                    <div className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-yellow-400" />
                      <span className="font-semibold text-emerald-400">Winner: {useCase.winner}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {useCase.rankings.map((ranking, j) => (
                    <div key={j} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-slate-400">#{j + 1}</span>
                        <span className="font-semibold">{ranking.model}</span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="font-bold">{ranking.score}</span>
                          <span className="text-slate-400 text-sm">/10</span>
                        </div>
                        <div className="text-sm text-slate-400 max-w-xs">{ranking.reason}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Pricing Comparison
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find the perfect plan for your budget and needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingDetails.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="p-8 border-b border-slate-800">
                  <h3 className="text-2xl font-bold mb-2">{model.model}</h3>
                  <p className="text-slate-400">Choose the right plan</p>
                </div>
                
                <div className="p-6 space-y-4">
                  {model.tiers.map((tier, j) => (
                    <div key={j} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-lg">{tier.name}</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                          {tier.price}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {tier.features.map((feature, k) => (
                          <div key={k} className="flex items-center gap-2 text-sm text-slate-300">
                            <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6">
                  <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 text-transparent bg-clip-text">
              User Testimonials
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See what real users are saying about their experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-5 h-5 ${j < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
                    />
                  ))}
                </div>
                
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                  <div className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold border border-slate-700">
                    {testimonial.model}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to know about choosing the right AI
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-all duration-300"
                >
                  <span className="text-lg font-semibold text-slate-200 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                
                {expandedFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-6 pb-6"
                  >
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-purple-500/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join millions of users who have transformed their workflow with AI. 
              Start with ChatGPT - the undisputed leader in AI assistance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="https://chat.openai.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group px-12 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center gap-3"
            >
              <Rocket className="w-6 h-6" />
              Try ChatGPT Now
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href="#rankings" 
              className="px-12 py-5 bg-white/10 backdrop-blur-sm rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Compare All Options
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-emerald-500/30"
          >
            <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-400" />
                <span className="font-semibold">Most Popular Choice</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="font-semibold">#1 Rated AI</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">100M+ Users</span>
              </div>
            </div>
            <p className="text-slate-300">
              ChatGPT consistently ranks as the top choice for beginners, professionals, and enterprises alike. 
              Start your AI journey with the most capable and versatile assistant available today.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Digicompares
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Independent analysis and comparison of leading AI assistants. 
              Our goal is to help you make informed decisions about which AI tools 
              best suit your needs.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-slate-400 text-sm">
              <span>© 2025 Digicompares</span>
              <span>•</span>
              <span>Expert AI Comparisons</span>
              <span>•</span>
              <span>Last Updated: January 2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}