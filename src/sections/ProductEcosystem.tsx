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
  Users,
  ChevronDown
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
  statusClasses: string;
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
    status: 'IN DEVELOPMENT',
    statusClasses: 'bg-fuyera-amber text-black border-transparent',
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
    status: 'PLANNING',
    statusClasses: 'bg-transparent text-slate-400 border-slate-500',
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
    status: 'RESERVE',
    statusClasses: 'bg-transparent text-slate-500 border-white/10',
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
      className={`machined-panel group cursor-pointer p-0 flex flex-col justify-between ${
        product.tier === 'reserve' ? 'lg:col-span-2 shadow-none border-dashed' : 'shadow-machined-dark hover:shadow-machined'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8 pb-4">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center shrink-0">
              <Icon className={`w-5 h-5 ${product.id === 'anchor' ? 'text-fuyera-amber' : 'text-white'}`} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white display-font tracking-tight">{product.name}</h3>
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mt-1">{product.tagline}</p>
            </div>
          </div>
          <span className={`px-3 py-1 text-[10px] font-mono tracking-widest uppercase border ${product.statusClasses} shrink-0`}>
            {product.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features Content */}
        <div className={`grid transition-all duration-300 ${isExpanded ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {product.features.map((feature) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 p-3 bg-fuyera-slate text-sm font-light text-slate-300 hover:bg-black transition-colors"
                  >
                    <FeatureIcon className="w-4 h-4 text-fuyera-amber shrink-0" />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Monetization */}
            <div className="border border-white/10 p-3 bg-black flex justify-between items-center text-xs font-mono uppercase tracking-wider">
              <span className="text-slate-500">Monetization Mode</span>
              <span className="text-fuyera-amber text-right text-[10px]">{product.monetization}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle Bar */}
      <div className="border-t border-white/10 p-3 bg-black flex justify-center items-center group-hover:bg-fuyera-amber transition-colors">
        <ChevronDown className={`w-4 h-4 text-slate-500 group-hover:text-black transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </div>
    </div>
  );
}

export function ProductEcosystem() {
  return (
    <section id="products" className="relative py-24 bg-fuyera-dark border-b border-white/10 bg-architectural-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 border-l-4 border-fuyera-amber pl-6">
          <p className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-4">Ecosystem Architecture</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white display-font tracking-tight">
            Current Product Matrix
          </h2>
        </div>

        {/* Current Products */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.filter(p => p.tier === 'current').map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
        </div>

        {/* Reserve Product Header */}
        <div className="mt-24 mb-12 border-t border-white/10 pt-12 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white display-font tracking-tight">Reserve Product Stack</h3>
            <p className="text-sm font-mono text-slate-500 mt-2">LONG-TERM ROADMAP</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.filter(p => p.tier === 'reserve').map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
        </div>

        {/* Tech architecture note */}
        <div className="mt-16 border border-white/10 border-l-4 border-l-slate-500 bg-black p-6">
          <p className="text-sm font-mono text-slate-400 leading-relaxed uppercase tracking-widest text-[10px]">
            <strong className="text-white">Technical Architecture Note:</strong> Products integrate compliant open-source frameworks and AI endpoint APIs (OpenAI, Anthropic). Development strictly focuses on application layer workflows and UX, not foundation model training.
          </p>
        </div>
        
      </div>
    </section>
  );
}
