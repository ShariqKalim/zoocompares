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
  Globe 
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
};

// Color theme mapping
const themeColorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  green: 'bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
  purple: 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  orange: 'bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
  indigo: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
  teal: 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
  pink: 'bg-pink-50 dark:bg-pink-950 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800',
  red: 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800',
  yellow: 'bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
  cyan: 'bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
};

// Static categories data with all 6 categories
const staticCategories = [
  {
    id: 1,
    name: 'AI Writing Assistant',
    description: 'Compare the best AI writing tools and assistants for content creation, blogging, and copywriting',
    slug: 'grammarly-ai-assistant',
    icon: 'FileText',
    colorTheme: 'blue'
  },
  {
    id: 2,
    name: 'AI Tools',
    description: 'Explore and compare various artificial intelligence tools, platforms, and machine learning solutions',
    slug: 'ai-tools',
    icon: 'Brain',
    colorTheme: 'purple'
  },
  {
    id: 3,
    name: 'SEO Tools',
    description: 'Compare SEO tools for keyword research, ranking tracking, site audits, and optimization',
    slug: 'seo-tools',
    icon: 'TrendingUp',
    colorTheme: 'green'
  },
  {
    id: 4,
    name: 'Cloud Workspaces',
    description: 'Compare cloud workspace solutions for remote collaboration, team productivity, and virtual offices',
    slug: 'cloud-workspaces',
    icon: 'Cloud',
    colorTheme: 'orange'
  },
  {
    id: 5,
    name: 'VPN Services',
    description: 'Compare VPN services for security, privacy, streaming, and global server access',
    slug: 'vpn',
    icon: 'Shield',
    colorTheme: 'indigo'
  },
  {
    id: 6,
    name: 'Web Hosting',
    description: 'Compare web hosting providers for speed, reliability, support, and pricing plans',
    slug: 'web-hosting',
    icon: 'Server',
    colorTheme: 'teal'
  }
];

export default function CategorySection() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // Use all 6 static categories
    setProducts(staticCategories);
  }, []);

  return (
    <section className="py-16 md:py-20 px-4 bg-background" id="categories">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Top Comparison Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover and compare the best tools and services across popular categories
          </p>
        </div>

        {/* Categories Grid - 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const IconComponent = iconMap[product.icon] || iconMap['Globe'];
            const colorClass = themeColorMap[product.colorTheme || 'blue'] || themeColorMap.blue;

            return (
              <Link
                key={product.id}
                href={`/${product.slug}`}
                className="group block"
              >
                <div
                  className={`${colorClass} border-2 p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer h-full flex flex-col relative overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10 transform translate-x-8 -translate-y-8">
                    <div className="w-full h-full bg-current rounded-full"></div>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="font-bold text-xl mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-6 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white dark:to-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </Link>
            );
          })}
        </div>

     
      </div>
    </section>
  );
}