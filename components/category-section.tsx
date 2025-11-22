'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  FileText,
  Brain,
  TrendingUp,
  Cloud,
  Shield,
  Server,
  Globe,
  Users,
  ShoppingBag
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, any> = {
  FileText,
  Brain,
  TrendingUp,
  Cloud,
  Shield,
  Server,
  Globe,
  Users,
  ShoppingBag,
};

// Color themes (enhanced aesthetics)
const themeColorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-800',
  green: 'bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-300 dark:border-green-800',
  purple: 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800',
  orange: 'bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-800',
  indigo: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
  teal: 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-800',
  pink: 'bg-pink-50 dark:bg-pink-950 text-pink-700 dark:text-pink-300 border-pink-300 dark:border-pink-800',
  cyan: 'bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800',
};

// Updated categories (8 total → 4 per row)
const staticCategories = [
  {
    id: 1,
    name: 'AI Writing Assistant',
    description: 'Compare world-class AI writing tools for content creators, marketers, and bloggers.',
    slug: 'grammarly-ai-assistant',
    icon: 'FileText',
    colorTheme: 'blue',
  },
  {
    id: 2,
    name: 'AI Tools',
    description: 'Explore cutting-edge AI tools, automation services, and emerging AI platforms.',
    slug: 'ai-tools',
    icon: 'Brain',
    colorTheme: 'purple',
  },
  {
    id: 3,
    name: 'SEO Tools',
    description: 'Keyword research, ranking reports, site audits & growth insights — compare top SEO tools.',
    slug: 'seo-tools',
    icon: 'TrendingUp',
    colorTheme: 'green',
  },
  {
    id: 4,
    name: 'Cloud Workspaces',
    description: 'Compare Google Workspace, Microsoft 365, Zoho Workplace, and top cloud suites.',
    slug: 'cloud-workspaces',
    icon: 'Cloud',
    colorTheme: 'orange',
  },
  {
    id: 5,
    name: 'VPN Services',
    description: 'Compare VPN performance, privacy, global server networks & streaming features.',
    slug: 'vpn',
    icon: 'Shield',
    colorTheme: 'indigo',
  },
  {
    id: 6,
    name: 'Web Hosting',
    description:
      'Speed, uptime, support & pricing — compare top web hosting providers like Hostinger.',
    slug: 'web-hosting',
    icon: 'Server',
    colorTheme: 'teal',
  },
  {
    id: 7,
    name: 'CRM Tools',
    description:
      'Compare CRM tools like HubSpot, Zoho CRM, Salesforce & more to grow your sales pipeline.',
    slug: 'crm-tools',
    icon: 'Users',
    colorTheme: 'pink',
  },
  {
    id: 8,
    name: 'E-Commerce Tools',
    description:
      'Shopify, WooCommerce, BigCommerce & more — compare the best e-commerce business platforms.',
    slug: 'e-commerce',
    icon: 'ShoppingBag',
    colorTheme: 'cyan',
  },
];

export default function CategorySection() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setProducts(staticCategories);
  }, []);

  return (
    <section className="py-20 px-4 bg-background" id="categories">
      <div className="max-w-7xl mx-auto">

        {/* Beautiful Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-primary via-blue-600 to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
            Explore Top Comparison Categories
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Compare the best tools & services with highly researched, unbiased, and professional breakdowns.
          </p>
        </div>

        {/* Grid → 4 per row → responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const IconComponent = iconMap[product.icon];
            const colorClass =
              themeColorMap[product.colorTheme] || themeColorMap.blue;

            return (
              <Link
                key={product.id}
                href={`/${product.slug}`}
                className="group"
              >
                <div
                  className={`${colorClass} relative border p-8 rounded-2xl shadow-sm transition-all duration-500
                    hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden`}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent"></div>

                  {/* Floating Gradient Orb */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-current opacity-10 rounded-full blur-2xl"></div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-all duration-300">
                    {product.name}
                  </h3>

                  <p className="text-sm opacity-80 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
