'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const vpnServices = [
  { id: 1, name: 'NordVPN', price: '$3.99/mo', rating: 4.6, features: ['6000+ servers', 'No logs', 'Kill switch'] },
  { id: 2, name: 'ExpressVPN', price: '$6.67/mo', rating: 4.5, features: ['94 countries', 'Speed guaranteed', 'Router support'] },
  { id: 3, name: 'Surfshark', price: '$2.49/mo', rating: 4.4, features: ['Unlimited devices', 'CleanWeb', 'Camouflage mode'] },
];

export default function VPNPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-foreground">VPN Comparison</h1>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {vpnServices.map((service) => (
            <div key={service.id} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{service.name}</h2>
                  <p className="text-sm text-muted-foreground">Rating: {service.rating}/5</p>
                </div>
                <p className="text-lg font-bold text-primary">{service.price}</p>
              </div>
              <ul className="grid grid-cols-3 gap-2 text-sm">
                {service.features.map((feature, idx) => (
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
