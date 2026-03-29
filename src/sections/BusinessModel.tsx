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
    title: 'Digital Product Distribution',
    description: 'Applications distributed through the Apple App Store and other digital platforms.',
  },
  {
    icon: CreditCard,
    title: 'App Subscription Revenue',
    description: 'Subscription-based and one-time purchase monetization for mobile applications.',
  },
  {
    icon: FileText,
    title: 'SaaS & Enterprise Service Income',
    description: 'Recurring SaaS subscriptions and service-based deployment for business clients.',
  },
];

const operatingExpenses = [
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'AWS, Cloudflare, and related infrastructure for product deployment and operations.',
  },
  {
    icon: Server,
    title: 'AI API Services',
    description: 'OpenAI, Anthropic, and other AI service providers for application-layer intelligence.',
  },
  {
    icon: Wrench,
    title: 'Software & Development Tools',
    description: 'Apple Developer Program, design tools, collaboration software, and technical services.',
  },
];

export function BusinessModel() {
  return (
    <section id="business-model" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-fuyera-slate/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              Operate
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Fuyera develops digital software products and commercializes them through subscription-based applications, SaaS services, and selected business solutions.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Revenue */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <ArrowDownToLine className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Expected Revenue Streams</h3>
            </div>
            
            <div className="space-y-4">
              {revenueStreams.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-fuyera-slate/30 border border-white/5 hover:border-green-500/20 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expenses */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-fuyera-cyan/10 flex items-center justify-center">
                <ArrowUpFromLine className="w-5 h-5 text-fuyera-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white">Operating Expenses</h3>
            </div>
            
            <div className="space-y-4">
              {operatingExpenses.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-fuyera-slate/30 border border-white/5 hover:border-fuyera-cyan/20 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-fuyera-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-fuyera-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Transaction note */}
        <div className="mt-12 p-6 rounded-xl border border-white/5 bg-fuyera-slate/20">
          <div className="grid sm:grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-slate-500 mb-1">Primary Currencies</div>
              <div className="text-white font-medium">HKD & USD</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1">Transaction Methods</div>
              <div className="text-white font-medium">Bank Transfer · Platform Settlement</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1">Operating Regions</div>
              <div className="text-white font-medium">Hong Kong · Asia-Pacific · Global</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
