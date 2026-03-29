import { 
  Building2, 
  Cpu, 
  Globe, 
  ShieldCheck,
  Smartphone,
  TrendingUp
} from 'lucide-react';

const highlights = [
  {
    icon: Building2,
    title: 'Hong Kong Incorporated',
    description: 'Registered and operating as a private limited company in Hong Kong.',
  },
  {
    icon: Cpu,
    title: 'Application-Layer AI',
    description: 'Builds application-layer products, not foundation models. We focus on practical, user-facing solutions.',
  },
  {
    icon: Globe,
    title: 'Global Digital Distribution',
    description: 'Products distributed through digital platforms such as the Apple App Store and web-based SaaS.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & SaaS Products',
    description: 'Developing AI-powered mobile applications and SaaS tools for productivity, workflow, and learning.',
  },
  {
    icon: TrendingUp,
    title: 'Subscription-Based Revenue',
    description: 'Business model centered on digital distribution, subscription monetization, and continuous improvement.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliant Operations',
    description: 'Serving individual users and SME customers through transparent, auditable business operations.',
  },
];

export function CompanyOverview() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-fuyera-slate/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuyera-cyan/10 border border-fuyera-cyan/20 text-fuyera-cyan text-xs font-medium mb-4">
            <Building2 className="w-3 h-3" />
            About Fuyera Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Building AI software products{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              with real-world value.
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              Fuyera Intelligence Limited is a Hong Kong incorporated technology company focused on developing and distributing AI-powered software applications.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              We build application-layer products for individual users and small-to-medium-sized businesses, with a focus on practical digital tools, productivity support, workflow enablement, and commercial AI use cases.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              Our business model centers on product development, digital distribution, subscription monetization, and continuous product improvement.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-fuyera-slate/30 border border-white/5 hover:border-fuyera-cyan/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-fuyera-cyan/10 flex items-center justify-center mb-4 group-hover:bg-fuyera-cyan/20 transition-colors">
                  <Icon className="w-6 h-6 text-fuyera-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Founder Brief */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-fuyera-cyan/10 via-fuyera-slate/30 to-fuyera-slate/30 border border-fuyera-cyan/20">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuyera-cyan/20 to-fuyera-cyan/5 flex items-center justify-center border border-fuyera-cyan/20">
              <span className="text-2xl font-bold text-fuyera-cyan">FY</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">FU YE (傅晔)</h3>
              <p className="text-sm text-fuyera-cyan mb-4">Founder & Sole Director</p>
              <div className="space-y-2 text-sm text-slate-400 leading-relaxed">
                <p>
                  Drawing upon years of senior management experience in listed medical device companies and proficiency in full-stack development, Mr. Fu established Fuyera to combine his product capabilities with AI. Approved under Hong Kong's Top Talent Pass Scheme (TTPS) in Sep 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
