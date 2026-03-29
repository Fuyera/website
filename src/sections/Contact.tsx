import { MapPin, Globe, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-fuyera-dark">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 mb-16 items-end">
          <div className="pb-4 border-b border-white/10">
            <h2 className="text-4xl sm:text-6xl font-bold text-white display-font tracking-tight uppercase">
              Connections
            </h2>
          </div>
          <div className="pb-4 sm:text-right">
            <p className="text-lg text-slate-400 font-light">
              We welcome inquiries from partners, platforms, and potential clients.
            </p>
          </div>
        </div>

        {/* Contact Matrix */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 bg-black">
          
          <div className="p-8 lg:p-12 group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center justify-between mb-16">
              <span className="font-mono text-xs text-slate-500">ORG</span>
              <MapPin className="w-5 h-5 text-fuyera-amber" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2">Company</p>
              <h3 className="text-2xl font-bold text-white display-font tracking-tight mb-2">Fuyera Intelligence<br/>Limited</h3>
              <p className="text-sm font-light text-slate-500">孚烨纳智能科技有限公司</p>
            </div>
          </div>

          <div className="p-8 lg:p-12 group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center justify-between mb-16">
              <span className="font-mono text-xs text-slate-500">LOC</span>
              <Globe className="w-5 h-5 text-fuyera-amber" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2">Operating Base</p>
              <h3 className="text-2xl font-bold text-white display-font tracking-tight mb-2">Hong Kong</h3>
              <p className="text-sm font-light text-slate-500">Incorporated March 2026</p>
            </div>
          </div>

          <div className="p-8 lg:p-12 group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center justify-between mb-16">
              <span className="font-mono text-xs text-slate-500">COM</span>
              <Mail className="w-5 h-5 text-fuyera-amber" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2">Inquiries</p>
              <a href="mailto:contact@fuyera.com" className="text-2xl font-bold text-white hover:text-fuyera-amber transition-colors display-font tracking-tight border-b border-transparent hover:border-fuyera-amber">
                contact@fuyera.com
              </a>
              <p className="text-sm font-light text-slate-500 mt-2">Business inquiries welcome</p>
            </div>
          </div>

        </div>

        {/* Business focus summary */}
        <div className="mt-8 p-6 bg-fuyera-slate border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 items-center">
            <div className="w-2 h-2 bg-fuyera-amber rounded-full animate-pulse-slow"></div>
            <span className="text-xs font-mono tracking-widest text-white uppercase">Business Focus</span>
          </div>
          <p className="text-sm text-slate-400 font-light flex-1 lg:max-w-3xl">
            AI-powered software applications, SaaS, and mobile products. Serving individual users and SME clients through digital distribution and subscription-based services.
          </p>
        </div>
        
      </div>
    </section>
  );
}
