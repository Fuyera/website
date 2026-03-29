import { useState } from 'react';
import { 
  Target, 
  Zap, 
  GraduationCap, 
  ArrowRight,
  Smartphone,
  Mic,
  Bell,
  Activity,
  Layout,
  Command,
  Workflow,
  FileSearch,
  MessageSquare,
  Settings2,
  BookOpen,
  Users
} from 'lucide-react';

interface ProductCard {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  iconLetter: string;
  tier: 'current' | 'reserve';
  status: string;
  statusColor: string;
  features: { icon: React.ElementType; label: string }[];
  monetization: string;
}

const products: ProductCard[] = [
  {
    id: 'anchor',
    name: 'Fuyera Anchor',
    tagline: 'Productivity & Intention Management',
    description: 'Fuyera Anchor is an AI-powered productivity and intention management application designed for individuals, knowledge workers, and small teams. It is being developed as a mobile-first product and is intended to support task organization, thought capture, action tracking, and work rhythm management.',
    icon: Target,
    iconLetter: 'A',
    tier: 'current',
    status: 'In Development',
    statusColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    features: [
      { icon: Mic, label: 'Voice, Tag & Text Input' },
      { icon: Bell, label: '3-Level Smart Reminder System' },
      { icon: Activity, label: 'iOS Live Activities & Dynamic Island' },
      { icon: Command, label: 'Siri Shortcuts Integration' },
      { icon: Layout, label: 'WidgetKit Home Screen Widgets' },
      { icon: Smartphone, label: 'SwiftUI + SwiftData (iOS 17+)' },
    ],
    monetization: 'Subscription-based monetization',
  },
  {
    id: 'fuyeclaw',
    name: 'FuyeClaw',
    tagline: 'AI Application System for SMEs',
    description: 'FuyeClaw is an AI application system for SMEs, developed for business workflow support and industry-specific use cases. It is built on compliant open-source frameworks and AI API services, with Fuyera focusing on application-layer functionality, workflow integration, interface design, and solution delivery.',
    icon: Zap,
    iconLetter: 'C',
    tier: 'current',
    status: 'Planning',
    statusColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    features: [
      { icon: Workflow, label: 'Workflow Automation' },
      { icon: FileSearch, label: 'Content Operations' },
      { icon: MessageSquare, label: 'Knowledge Organization' },
      { icon: Settings2, label: 'Business Process Automation' },
    ],
    monetization: 'SaaS subscription and service-based deployment',
  },
  {
    id: 'fuyepal',
    name: 'FuyePal',
    tagline: 'AI Learning Assistant',
    description: 'FuyePal is a reserve product line for future education-oriented applications. It is intended for AI-assisted learning and study support scenarios, and will be developed in later stages based on market response and product roadmap priorities.',
    icon: GraduationCap,
    iconLetter: 'P',
    tier: 'reserve',
    status: 'Reserve',
    statusColor: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    features: [
      { icon: BookOpen, label: 'AI-Assisted Learning' },
      { icon: Users, label: 'Student & Parent Support' },
    ],
    monetization: 'To be determined',
  },
];

function ProductCardComponent({ product }: { product: ProductCard }) {
  const [isExpanded, setIsExpanded] = useState(product.id === 'anchor');
  const Icon = product.icon;

  return (
    <div
      className={`relative group cursor-pointer ${
        product.tier === 'reserve' ? 'lg:col-span-2' : ''
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div
        className={`
          relative h-full p-6 lg:p-8 rounded-2xl border transition-all duration-300
          ${product.id === 'anchor'
            ? 'border-fuyera-cyan/30 bg-fuyera-slate/50'
            : 'border-white/5 bg-fuyera-slate/30 hover:border-white/10'
          }
        `}
      >
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-0.5 rounded text-xs font-medium border ${product.statusColor}`}>
            {product.status}
          </span>
        </div>

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            product.id === 'anchor' ? 'bg-fuyera-cyan/20' : 'bg-white/5'
          }`}>
            <Icon className={`w-6 h-6 ${
              product.id === 'anchor' ? 'text-fuyera-cyan' : 'text-slate-400'
            }`} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{product.name}</h3>
            <p className={`text-sm font-medium ${
              product.id === 'anchor' ? 'text-fuyera-cyan' : 'text-slate-500'
            }`}>{product.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Features */}
        {isExpanded && (
          <div className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feature) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-sm"
                  >
                    <FeatureIcon className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <span className="text-slate-300">{feature.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/5">
              <span className="text-xs text-slate-500">Monetization: </span>
              <span className="text-xs text-slate-400">{product.monetization}</span>
            </div>
          </div>
        )}

        {/* Expand hint */}
        {!isExpanded && product.features.length > 0 && (
          <div className="flex items-center gap-1 text-xs text-slate-500 mt-2">
            <ArrowRight className="w-3 h-3" />
            Click for details
          </div>
        )}
      </div>
    </div>
  );
}

export function ProductEcosystem() {
  return (
    <section id="products" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Current Products Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Current Products{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              in Development
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            AI-powered software applications for productivity, workflow support, and education.
          </p>
        </div>

        {/* Current Products */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {products.filter(p => p.tier === 'current').map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
        </div>

        {/* Reserve Product Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-sm text-slate-500 font-medium">Reserve Product Direction</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {products.filter(p => p.tier === 'reserve').map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
        </div>

        {/* Tech note */}
        <div className="mt-12 p-6 rounded-xl border border-white/5 bg-fuyera-slate/20">
          <p className="text-sm text-slate-500 text-center">
            Our products incorporate compliant open-source frameworks and leading AI service integrations — including services from OpenAI, Anthropic, and others — as part of their technical implementation. Fuyera focuses on the application layer, not foundation model development.
          </p>
        </div>
      </div>
    </section>
  );
}
