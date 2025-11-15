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
    id: 'default_web_hosting',
    name: 'Web Hosting',
    description: 'Compare the best web hosting providers for your website',
    imageUrl: '/web-hosting-concept.png',
    slug: 'web-hosting',
    icon: 'Globe',
    colorTheme: 'blue',
    createdAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'default_vpn',
    name: 'VPN',
    description: 'Compare top VPN services for privacy and security',
    imageUrl: '/vpn-security.jpg',
    slug: 'vpn',
    icon: 'Shield',
    colorTheme: 'green',
    createdAt: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'default_demat',
    name: 'Demat Accounts',
    description: 'Compare demat accounts and trading platforms',
    imageUrl: '/trading-accounts.jpg',
    slug: 'demat-accounts',
    icon: 'TrendingUp',
    colorTheme: 'purple',
    createdAt: '2024-01-01T00:00:00.000Z',
  },
  // ====================================
  // TO ADD MORE PRODUCTS: Copy the format above and add new objects here
  // 
  // Example:
  // {
  //   id: 'default_credit_cards',
  //   name: 'Credit Cards',
  //   description: 'Compare the best credit cards with rewards and benefits',
  //   imageUrl: '/credit-cards.jpg',
  //   slug: 'credit-cards',
  //   icon: 'CreditCard',
  //   colorTheme: 'orange',
  //   createdAt: '2024-01-01T00:00:00.000Z',
  // },
  // 
  // Available icons: Check lib/icon-library.ts for full list
  // Available colors: blue, green, purple, orange, pink, indigo, red, yellow, teal, cyan
  // ====================================
];

export function getProducts(): ComparisonProduct[] {
  return DEFAULT_PRODUCTS;
}

export function getProductBySlug(slug: string): ComparisonProduct | undefined {
  return DEFAULT_PRODUCTS.find(p => p.slug === slug);
}
