import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for side projects and experimentation.',
    features: [
      '3 agents',
      '1,000 API calls/day',
      'Community support',
      'Basic analytics',
      'Shared infrastructure',
    ],
    cta: 'Start Free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For serious OPC operators ready to scale.',
    features: [
      'Unlimited agents',
      '10,000 API calls/min',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
      'Team collaboration',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: '$99',
    period: '/month',
    description: 'Enterprise-grade infrastructure and support.',
    features: [
      'Everything in Pro',
      'Team workspaces',
      'SLA guarantee',
      'Self-hosting license',
      'Dedicated support',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-fuyera-slate/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start free.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              Scale when you win.
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No credit card required to start. Upgrade when you&apos;re ready to grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-6 lg:p-8 ${
                tier.highlighted
                  ? 'bg-fuyera-slate/50 border-2 border-fuyera-cyan/30 shadow-glow-cyan-sm'
                  : 'bg-fuyera-slate/30 border border-white/5'
              }`}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-fuyera-cyan text-fuyera-dark rounded-full">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-slate-400">{tier.period}</span>
                </div>
                <p className="text-sm text-slate-400 mt-2">{tier.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 ${tier.highlighted ? 'text-fuyera-cyan' : 'text-slate-500'}`} />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${
                  tier.highlighted
                    ? 'bg-fuyera-cyan text-fuyera-dark hover:bg-fuyera-cyan-glow'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-4">
            All plans include OpenClaw core, API access, and community support.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-fuyera-cyan hover:text-fuyera-cyan-glow transition-colors"
          >
            Compare all features
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
