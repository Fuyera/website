import { MapPin, Globe, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuyera-cyan/10 via-fuyera-slate/20 to-fuyera-dark" />
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuyera-cyan/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              Touch
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            We welcome inquiries from partners, platforms, and potential clients.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-fuyera-slate/30 border border-white/5 text-center hover:border-fuyera-cyan/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-fuyera-cyan/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-fuyera-cyan" />
            </div>
            <h3 className="font-semibold text-white mb-2">Company</h3>
            <p className="text-sm text-slate-400">Fuyera Intelligence Limited</p>
            <p className="text-xs text-slate-500 mt-1">孚烨纳智能科技有限公司</p>
          </div>

          <div className="p-6 rounded-xl bg-fuyera-slate/30 border border-white/5 text-center hover:border-fuyera-cyan/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-fuyera-cyan/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-fuyera-cyan" />
            </div>
            <h3 className="font-semibold text-white mb-2">Operating Base</h3>
            <p className="text-sm text-slate-400">Hong Kong</p>
            <p className="text-xs text-slate-500 mt-1">Incorporated March 2026</p>
          </div>

          <div className="p-6 rounded-xl bg-fuyera-slate/30 border border-white/5 text-center hover:border-fuyera-cyan/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-fuyera-cyan/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-fuyera-cyan" />
            </div>
            <h3 className="font-semibold text-white mb-2">Contact</h3>
            <a href="mailto:contact@fuyera.com" className="text-sm text-fuyera-cyan hover:text-fuyera-cyan-glow transition-colors">
              contact@fuyera.com
            </a>
            <p className="text-xs text-slate-500 mt-1">Business inquiries welcome</p>
          </div>
        </div>

        {/* Business focus summary */}
        <div className="p-6 rounded-xl bg-fuyera-slate/20 border border-white/5 text-center">
          <p className="text-sm text-slate-400 leading-relaxed">
            <span className="text-slate-300 font-medium">Business Focus:</span>{' '}
            AI-powered software applications, SaaS, and mobile products.{' '}
            Serving individual users and SME clients through digital distribution and subscription-based services.
          </p>
        </div>
      </div>
    </section>
  );
}
