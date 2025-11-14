'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getProducts } from '@/lib/product-storage';
import { iconMap } from '@/lib/icon-library';


const themeColorMap: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300',
  green: 'bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300',
  purple: 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300',
  orange: 'bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300',
  pink: 'bg-pink-50 dark:bg-pink-950 text-pink-700 dark:text-pink-300',
  indigo: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300',
  red: 'bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300',
  yellow: 'bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300',
  teal: 'bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300',
  cyan: 'bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300',
};

export default function CategorySection() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <section className="py-16 md:py-20 px-4 bg-background" id="categories">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Top Comparison Categories
        </h2>
        <p className="text-muted-foreground mb-12">
          Browse popular product categories and comparisons
        </p>

        <div className={`grid grid-cols-1 md:grid-cols-${Math.min(3, Math.max(1, products.length))} gap-6`}>
          {products.map((product) => {
            const IconComponent = iconMap[product.icon] || iconMap['Globe'];
            const colorClass = themeColorMap[product.colorTheme || 'blue'] || themeColorMap.blue;

            return (
              <Link
                key={product.id}
                href={`/${product.slug}`}
                className="group"
              >
                <div
                  className={`${colorClass} p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}
                >
                  {IconComponent && <IconComponent className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />}
                  <h3 className="font-semibold mb-2 group-hover:font-bold transition-all">
                    {product.name}
                  </h3>
                  <p className="text-sm opacity-90 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No categories available yet. Visit the admin panel to add some!</p>
          </div>
        )}
      </div>
    </section>
  );
}
