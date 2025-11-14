'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const webHostingProviders = [
  { id: 1, name: 'Bluehost', price: '$2.95/mo', rating: 4.5, features: ['Free domain', 'SSL certificate', '24/7 support'] },
  { id: 2, name: 'SiteGround', price: '$3.99/mo', rating: 4.7, features: ['Speed optimized', 'Auto backups', 'Free CDN'] },
  { id: 3, name: 'Hostinger', price: '$1.99/mo', rating: 4.3, features: ['AI Builder', 'Email included', 'Easy setup'] },
];

export default function WebHostingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Web Hosting Comparison</h1>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {webHostingProviders.map((provider) => (
            <div key={provider.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{provider.name}</h2>
                  <p className="text-sm text-muted-foreground">Rating: {provider.rating}/5</p>
                </div>
                <p className="text-lg font-bold text-primary">{provider.price}</p>
              </div>
              <ul className="grid grid-cols-3 gap-2 text-sm">
                {provider.features.map((feature, idx) => (
                  <li key={idx} className="text-muted-foreground">✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
