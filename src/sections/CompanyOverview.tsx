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
    id: "OP.01",
    title: 'HONG KONG INCORPORATED',
    description: 'Registered and operating as a private limited company in Hong Kong.',
  },
  {
    icon: Cpu,
    id: "OP.02",
    title: 'APPLICATION-LAYER AI',
    description: 'Builds application-layer products, not foundation models. Focus on practical solutions.',
  },
  {
    icon: Globe,
    id: "OP.03",
    title: 'GLOBAL DIGITAL DIST.',
    description: 'Products distributed through Apple App Store and web-based SaaS platforms.',
  },
  {
    icon: Smartphone,
    id: "OP.04",
    title: 'MOBILE & SAAS',
    description: 'Developing AI-powered applications for productivity, workflow, and learning.',
  },
  {
    icon: TrendingUp,
    id: "OP.05",
    title: 'SUBSCRIPTION MODEL',
    description: 'Business model centered on digital distribution and subscription monetization.',
  },
  {
    icon: ShieldCheck,
    id: "OP.06",
    title: 'COMPLIANT OPS',
    description: 'Serving users and SMEs through transparent, auditable business operations.',
  },
];

export function CompanyOverview() {
  return (
    <section id="about" className="relative py-24 bg-fuyera-darker border-b border-white/10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-end">
          <div className="lg:col-span-4 pb-4 border-b border-white/10">
            <h2 className="text-sm font-mono tracking-widest text-fuyera-amber uppercase">
              Corporate Overview
            </h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-3xl sm:text-5xl font-bold text-white leading-tight display-font">
              Building AI software with <br/> <span className="text-slate-500 italic">real-world value.</span>
            </h3>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl font-light">
              Fuyera Intelligence is a Hong Kong incorporated technology company focused on developing and distributing application-layer AI software. We prioritize practical digital tools, productivity support, and commercial AI use cases.
            </p>
          </div>
        </div>

        {/* Typographic Dossier List */}
        <div className="border-t border-b border-white/20 divide-y divide-white/10">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 group hover:bg-white/[0.02] transition-colors">
                <div className="md:col-span-2 flex items-center gap-4 text-slate-500">
                  <span className="font-mono text-xs">{item.id}</span>
                  <Icon className="w-5 h-5 group-hover:text-fuyera-amber transition-colors" />
                </div>
                <div className="md:col-span-4">
                  <h4 className="text-lg font-bold text-white tracking-wide">{item.title}</h4>
                </div>
                <div className="md:col-span-6">
                  <p className="text-slate-400 font-light">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder Dossier */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="machined-panel p-0 flex flex-col md:flex-row shadow-machined-dark">
            {/* Identity Badge Side */}
            <div className="bg-white text-black p-8 md:w-64 flex flex-col justify-between shrink-0">
              <div>
                <p className="text-xs font-mono font-bold tracking-widest mb-1 text-slate-500 uppercase">Director</p>
                <h3 className="text-2xl font-bold display-font tracking-tight mt-4">FU YE</h3>
                <p className="text-2xl font-light display-font tracking-tight text-slate-400">(傅晔)</p>
              </div>
              <div className="mt-12">
                <div className="w-12 h-1 bg-black mb-4"></div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Fuyera Intelligence Limited</p>
              </div>
            </div>
            
            {/* Intel details */}
            <div className="p-8 lg:p-10 flex-1 bg-fuyera-slate text-slate-300 font-light leading-relaxed flex flex-col justify-center">
              <div className="space-y-6">
                <p>
                  <strong className="text-white font-medium">Background:</strong> Bachelor's degree in Automation from Tianjin University. Over 25 years of experience in technology management, product development, and enterprise operations in the medical technology and intelligent systems sectors.
                </p>
                <div className="h-px bg-white/10 w-full my-4"></div>
                <p>
                  <strong className="text-white font-medium">Status:</strong> Approved under Hong Kong's Top Talent Pass Scheme (TTPS) in September 2025, establishing a legal basis for long-term residence and commercial activity in Hong Kong.
                </p>
                <div className="h-px bg-white/10 w-full my-4"></div>
                <p>
                  Drawing upon years of technology management expertise, Mr. FU established Fuyera Intelligence to combine product development capabilities with AI technology, creating intelligent application products of genuine value for users worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
