import { 
  ArrowDownToLine, 
  ArrowUpFromLine, 
  CreditCard,
  Cloud,
  Smartphone,
  FileText,
  Server,
  Wrench
} from 'lucide-react';

const revenueStreams = [
  {
    icon: Smartphone,
    title: 'DIGITAL DIST.',
    description: 'Applications distributed through the Apple App Store and other digital platforms.',
  },
  {
    icon: CreditCard,
    title: 'SUBSCRIPTIONS',
    description: 'Subscription-based and one-time purchase monetization for mobile applications.',
  },
  {
    icon: FileText,
    title: 'SAAS & SERVICES',
    description: 'Recurring SaaS subscriptions and service-based deployment for business clients.',
  },
];

const operatingExpenses = [
  {
    icon: Cloud,
    title: 'CLOUD INFRA',
    description: 'AWS, Cloudflare, and related infrastructure for product deployment and operations.',
  },
  {
    icon: Server,
    title: 'AI PROVISIONING',
    description: 'OpenAI, Anthropic, and other AI service providers for application-layer intelligence.',
  },
  {
    icon: Wrench,
    title: 'TOOLING',
    description: 'Apple Developer Program, design tools, collaboration software, and technical services.',
  },
];

export function BusinessModel() {
  return (
    <section id="business-model" className="relative py-24 bg-fuyera-darker border-b border-white/10">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-end">
          <div className="lg:col-span-4 pb-4 border-b border-white/10">
            <h2 className="text-sm font-mono tracking-widest text-fuyera-amber uppercase">
              Financial Architecture
            </h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-4xl sm:text-5xl font-bold text-white leading-tight display-font tracking-tight">
              Operating Model
            </h3>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl font-light">
              Fuyera develops digital software products and commercializes them through subscription-based applications, SaaS services, and selected business solutions.
            </p>
          </div>
        </div>

        {/* Two-Column Ledger Layout */}
        <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          
          {/* Revenue */}
          <div className="bg-fuyera-darker p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="flex items-center justify-between gap-3 mb-10 pb-4 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white display-font tracking-tight">INFLOW</h3>
              <ArrowDownToLine className="w-5 h-5 text-fuyera-amber" />
            </div>
            
            <div className="space-y-8">
              {revenueStreams.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group">
                    <div className="flex items-start gap-4">
                      <div className="font-mono text-xs text-slate-500 mt-1">
                        0{index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-4 h-4 text-fuyera-amber" />
                          <h4 className="font-bold text-white tracking-widest text-sm uppercase">{item.title}</h4>
                        </div>
                        <p className="text-sm text-slate-400 font-light leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expenses */}
          <div className="bg-fuyera-darker p-8 lg:p-12 border-b lg:border-b-0 lg:border-r lg:border-r-0 border-white/10">
            <div className="flex items-center justify-between gap-3 mb-10 pb-4 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white display-font tracking-tight">OUTFLOW</h3>
              <ArrowUpFromLine className="w-5 h-5 text-slate-500" />
            </div>
            
            <div className="space-y-8">
              {operatingExpenses.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="group">
                    <div className="flex items-start gap-4">
                      <div className="font-mono text-xs text-slate-500 mt-1">
                        0{index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-4 h-4 text-white group-hover:text-fuyera-amber transition-colors" />
                          <h4 className="font-bold text-white tracking-widest text-sm uppercase">{item.title}</h4>
                        </div>
                        <p className="text-sm text-slate-400 font-light leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Transaction Matrix */}
        <div className="mt-16 border border-white/10 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-6 md:p-8">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">Primary Currencies</p>
              <p className="text-lg font-bold text-white display-font tracking-tight">HKD & USD</p>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">Transaction Protocol</p>
              <p className="text-lg font-bold text-white display-font tracking-tight">Bank Transfer &middot; Platform</p>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">Coverage Zone</p>
              <p className="text-lg font-bold text-white display-font tracking-tight">HK &middot; APAC &middot; GLOBAL</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
