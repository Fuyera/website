import { Check, X, ArrowRight } from 'lucide-react';

const comparisonData = {
  traditional: {
    title: 'Traditional Enterprise',
    items: [
      { label: 'Rollout Time', value: '6-month rollout', negative: true },
      { label: 'Infrastructure', value: '$50K+ infra cost', negative: true },
      { label: 'Team Size', value: '20-person team', negative: true },
      { label: 'Vendor Lock-in', value: 'Locked to vendor', negative: true },
    ],
  },
  fuyera: {
    title: 'Fuyera OPC-First',
    items: [
      { label: 'Rollout Time', value: 'Ship in a day', negative: false },
      { label: 'Infrastructure', value: 'Start at $0', negative: false },
      { label: 'Team Size', value: '1 founder + AI', negative: false },
      { label: 'Ownership', value: 'Own your stack', negative: false },
    ],
  },
  result: {
    title: 'The Result',
    items: [
      { label: 'Speed', value: '90% faster to revenue', highlight: true },
      { label: 'Efficiency', value: '10x leaner operation', highlight: true },
      { label: 'Risk', value: 'Zero exit risk', highlight: true },
      { label: 'Control', value: 'Full stack ownership', highlight: true },
    ],
  },
};

export function OPCDifference() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-fuyera-slate/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              OPC Difference
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Built from the ground up for operators who ship. No enterprise bloat, no vendor lock-in.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Traditional */}
          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-50" />
            <div className="relative p-6 rounded-2xl bg-fuyera-slate/30 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-300">
                  {comparisonData.traditional.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {comparisonData.traditional.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{item.label}</span>
                    <span className="text-sm text-slate-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fuyera - Highlighted */}
          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-b from-fuyera-cyan/30 to-fuyera-cyan/5 rounded-2xl" />
            <div className="relative p-6 rounded-2xl bg-fuyera-slate/50 border border-fuyera-cyan/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-fuyera-cyan/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-fuyera-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {comparisonData.fuyera.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {comparisonData.fuyera.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{item.label}</span>
                    <span className="text-sm text-fuyera-cyan font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Recommended badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 text-xs font-medium bg-fuyera-cyan text-fuyera-dark rounded-full">
                  Recommended
                </span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-b from-green-500/20 to-transparent rounded-2xl opacity-50" />
            <div className="relative p-6 rounded-2xl bg-fuyera-slate/30 border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {comparisonData.result.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {comparisonData.result.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{item.label}</span>
                    <span className="text-sm text-green-400 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            Join 2,400+ operators who&apos;ve made the switch
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-fuyera-cyan hover:text-fuyera-cyan-glow transition-colors"
          >
            See how it works
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
