'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const dematBrokers = [
  { id: 1, name: 'Zerodha', price: '₹0 brokerage', rating: 4.7, features: ['Lowest fees', 'Best platform', '2M+ users'] },
  { id: 2, name: 'Upstox', price: '₹0 brokerage', rating: 4.5, features: ['Fast execution', 'Mobile first', 'Algo trading'] },
  { id: 3, name: 'Angel One', price: '₹20 per trade', rating: 4.3, features: ['Free training', 'Multi assets', 'Advanced tools'] },
];

export default function DematAccountsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Demat Accounts Comparison</h1>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {dematBrokers.map((broker) => (
            <div key={broker.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{broker.name}</h2>
                  <p className="text-sm text-muted-foreground">Rating: {broker.rating}/5</p>
                </div>
                <p className="text-lg font-bold text-primary">{broker.price}</p>
              </div>
              <ul className="grid grid-cols-3 gap-2 text-sm">
                {broker.features.map((feature, idx) => (
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
