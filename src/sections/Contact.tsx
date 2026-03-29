import { MapPin, Globe, Mail } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-fuyera-dark">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-end">
          <div className="pb-4 border-b border-white/10">
            <h2 className="text-4xl sm:text-6xl font-bold text-white display-font tracking-tight uppercase">
              {t.contact.title}
            </h2>
          </div>
          <div className="pb-4 lg:text-right">
            <p className="text-lg text-slate-400 font-light">
              {t.contact.subtitle}
            </p>
          </div>
        </div>

        {/* Contact Matrix */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 bg-black">
          
          <div className="p-8 sm:p-12 group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center justify-between mb-16">
              <span className="font-mono text-xs text-slate-500 tracking-widest">ORG</span>
              <MapPin className="w-5 h-5 text-fuyera-amber shrink-0" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2">Company</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white display-font tracking-tight mb-2 leading-tight">
                {t.contact.companyName}
              </h3>
              <p className="text-sm font-light text-slate-500">{t.contact.companyNameZh}</p>
            </div>
          </div>

          <div className="p-8 sm:p-12 group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center justify-between mb-16">
              <span className="font-mono text-xs text-slate-500 tracking-widest">LOC</span>
              <Globe className="w-5 h-5 text-fuyera-amber shrink-0" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2">Operating Base</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white display-font tracking-tight mb-2 leading-tight">
                {t.contact.location}
              </h3>
              <p className="text-sm font-light text-slate-500">{t.contact.incorporationDate}</p>
            </div>
          </div>

          <div className="p-8 sm:p-12 group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center justify-between mb-16">
              <span className="font-mono text-xs text-slate-500 tracking-widest">COM</span>
              <Mail className="w-5 h-5 text-fuyera-amber shrink-0" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2">Inquiries</p>
              <a href={`mailto:${t.contact.email}`} className="text-xl sm:text-2xl font-bold text-white hover:text-fuyera-amber transition-colors display-font tracking-tight border-b border-transparent hover:border-fuyera-amber leading-tight truncate block max-w-full">
                {t.contact.email}
              </a>
              <p className="text-sm font-light text-slate-500 mt-2">{t.contact.inquiries}</p>
            </div>
          </div>

        </div>

        {/* Business focus summary */}
        <div className="mt-8 p-6 sm:p-8 bg-fuyera-slate border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex gap-4 items-center shrink-0">
            <div className="w-2 h-2 bg-fuyera-amber rounded-full animate-pulse-slow"></div>
            <span className="text-xs font-mono tracking-widest text-white uppercase">{t.contact.businessFocus}</span>
          </div>
          <p className="text-sm text-slate-400 font-light flex-1 lg:max-w-3xl leading-relaxed">
            {t.contact.businessFocusDesc}
          </p>
        </div>
        
      </div>
    </section>
  );
}
