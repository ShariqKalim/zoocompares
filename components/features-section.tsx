'use client';

import { CheckCircle, BarChart3, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Detailed Comparisons',
    description: 'Side-by-side analysis of features, specs, and pricing across multiple products.',
  },
  {
    icon: CheckCircle,
    title: 'Verified Reviews',
    description: 'Real user reviews and expert analysis to help you make informed decisions.',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'Unbiased comparisons with no hidden agendas. Data-driven results you can rely on.',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get comprehensive comparison reports in seconds with our advanced search engine.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Comparizon?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We make product comparison simple, transparent, and trustworthy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
