interface ComparisonProduct {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
  icon: string;
  createdAt: string;
  colorTheme?: string;
}

const DEFAULT_PRODUCTS: ComparisonProduct[] = [
  {
    id: 'ai_writing_assistant',
    name: 'AI Writing Assistant',
    description: 'Compare the best AI writing tools and assistants for content creation',
    imageUrl: '/ai-writing.jpg',
    slug: 'grammarly-ai-assistant',
    icon: 'FileText',
    colorTheme: 'blue',
    createdAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'ai_tools',
    name: 'AI Tools',
    description: 'Explore and compare various artificial intelligence tools and platforms',
    imageUrl: '/ai-tools.jpg',
    slug: 'ai-tools',
    icon: 'Brain',
    colorTheme: 'purple',
    createdAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'seo_tools',
    name: 'SEO Tools',
    description: 'Compare SEO tools for keyword research, ranking tracking, and optimization',
    imageUrl: '/seo-tools.jpg',
    slug: 'seo-tools',
    icon: 'TrendingUp',
    colorTheme: 'green',
    createdAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'cloud_workspaces',
    name: 'Cloud Workspaces',
    description: 'Compare cloud workspace solutions for remote collaboration and productivity',
    imageUrl: '/cloud-workspaces.jpg',
    slug: 'cloud-workspaces',
    icon: 'Cloud',
    colorTheme: 'orange',
    createdAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'vpn_services',
    name: 'VPN Services',
    description: 'Compare VPN services for security, privacy, streaming, and global server access',
    imageUrl: '/vpn-security.jpg',
    slug: 'vpn',
    icon: 'Shield',
    colorTheme: 'indigo',
    createdAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'web_hosting',
    name: 'Web Hosting',
    description: 'Compare web hosting providers for speed, reliability, support, and pricing plans',
    imageUrl: '/web-hosting.jpg',
    slug: 'web-hosting',
    icon: 'Server',
    colorTheme: 'teal',
    createdAt: '2024-01-01T00:00:00.000Z',
  },

  // -----------------------------
  // ⭐ NEW CATEGORY #1 — CRM Tools
  // -----------------------------
  {
    id: 'crm_tools',
    name: 'CRM Tools',
    description: 'Compare top CRM tools for sales pipelines, automation, and customer management',
    imageUrl: '/crm-tools.jpg',
    slug: 'crm-tools',
    icon: 'Users',
    colorTheme: 'pink',
    createdAt: '2024-01-01T00:00:00.000Z',
  },

  // ------------------------------------------
  // ⭐ NEW CATEGORY #2 — E-Commerce Business Tools
  // ------------------------------------------
  {
    id: 'ecommerce_business_tools',
    name: 'E-Commerce Tools',
    description: 'Compare the best e-commerce platforms and tools for online business growth',
    imageUrl: '/ecommerce-tools.jpg',
    slug: 'e-commerce',
    icon: 'ShoppingCart',
    colorTheme: 'red',
    createdAt: '2024-01-01T00:00:00.000Z',
  }
];

export function getProducts(): ComparisonProduct[] {
  return DEFAULT_PRODUCTS;
}

export function getProductBySlug(slug: string): ComparisonProduct | undefined {
  return DEFAULT_PRODUCTS.find(p => p.slug === slug);
}
