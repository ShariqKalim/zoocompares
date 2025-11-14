'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const SearchBar = dynamic(() => import('@/components/search-bar'), { ssr: false });
const CategorySection = dynamic(() => import('@/components/category-section'), { ssr: false });

const StatCard = ({ icon, value, label }: { icon: string; value: string; label: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-4xl mb-3">{icon}</div>
    <div className="text-3xl font-bold text-foreground">{value}</div>
    <div className="text-sm text-muted-foreground mt-1">{label}</div>
  </div>
);

interface ButtonConfig {
  primaryText: string;
  primaryLink: string;
  secondaryText: string;
  secondaryLink: string;
}

const DEFAULT_BUTTONS: ButtonConfig = {
  primaryText: 'Start Comparing',
  primaryLink: '#categories',
  secondaryText: 'Learn More',
  secondaryLink: '#features',
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [buttonConfig, setButtonConfig] = useState<ButtonConfig>(DEFAULT_BUTTONS);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedConfig = localStorage.getItem('buttonConfig');
    if (storedConfig) {
      setButtonConfig(JSON.parse(storedConfig));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('buttonConfig', JSON.stringify(buttonConfig));
    }
  }, [buttonConfig, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur border-b border-border' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Comparizon
          </Link>
          <Link href="/admin" className="text-sm text-muted-foreground hover:text-primary transition-colors opacity-60 hover:opacity-100">
            Admin
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                Product Match
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Compare features, prices, and reviews all in one place. Make informed decisions faster with intelligent side-by-side comparisons.
            </p>
          </div>

          <div className="pt-8">
            <SearchBar />
          </div>

          <div className="pt-12 grid grid-cols-3 gap-8 md:gap-12">
            <StatCard icon="⚡" value="50+" label="Categories" />
            <StatCard icon="🔄" value="1000+" label="Products" />
            <StatCard icon="👥" value="100K+" label="Users" />
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Top Categories */}
      <CategorySection />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Features Section */}
      <section className="py-20 md:py-32 px-4 bg-muted/30" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Comparizon?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed to help you make smarter purchasing decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Accurate Data',
                description: 'Real-time product information from verified sources',
              },
              {
                icon: '⚙️',
                title: 'Easy Filtering',
                description: 'Filter by price, features, ratings, and more',
              },
              {
                icon: '📊',
                title: 'Visual Comparison',
                description: 'See differences at a glance with intuitive layouts',
              },
              {
                icon: '🔒',
                title: 'Trustworthy Reviews',
                description: 'Verified user reviews and expert ratings',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-muted-foreground">
              See what users love about Comparizon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Found exactly what I needed in minutes. The comparison tool saved me hours of research!',
                author: 'Sarah Chen',
                role: 'Product Manager',
              },
              {
                quote: 'The best comparison platform I\'ve used. Clear, detailed, and always up-to-date.',
                author: 'Marcus Johnson',
                role: 'Entrepreneur',
              },
              {
                quote: 'Makes decision-making so much easier. Highly recommended!',
                author: 'Emma Williams',
                role: 'Freelancer',
              },
            ].map((testimonial) => (
              <div key={testimonial.author} className="p-6 rounded-lg border border-border bg-card">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-muted/30 to-background" id="cta">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-lg text-muted-foreground">
              Start comparing products today and make smarter choices
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
              const element = document.getElementById('categories');
              element?.scrollIntoView({ behavior: 'smooth' });
            }} className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              {buttonConfig.primaryText}
            </button>
            <button onClick={() => {
              const element = document.getElementById('features');
              element?.scrollIntoView({ behavior: 'smooth' });
            }} className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors">
              {buttonConfig.secondaryText}
            </button>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Footer */}
      <footer className="border-t border-border bg-card py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API Docs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">&copy; 2025 Comparizon. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
