import { 
  ArrowDownToLine, 
  ArrowUpFromLine, 
  CreditCard,
  Cloud,
  Smartphone,
  Server,
  Wrench,
  Globe
} from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function BusinessModel() {
  const { t } = useLanguage();

  const inflowIcons = [Smartphone, CreditCard];
  const outflowIcons = [Cloud, Server, Wrench, Globe];

  return (
    <section id="business-model" className="relative py-24 sm:py-32 bg-fuyera-darker border-b border-white/10">
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-end">
          <div className="lg:col-span-4 pb-4 border-b border-white/10">
            <h2 className="text-sm font-mono tracking-widest text-fuyera-amber uppercase">
              {t.businessModel.sectionLabel}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight display-font tracking-tight">
              {t.businessModel.title}
            </h3>
            <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
              {t.businessModel.description}
            </p>
          </div>
        </div>

        {/* Two-Column Ledger Layout */}
        <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          
          {/* Revenue */}
          <div className="bg-fuyera-darker p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-10 pb-4 border-b border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white display-font tracking-tight">{t.businessModel.inflow.title}</h3>
              <ArrowDownToLine className="w-5 h-5 text-fuyera-amber shrink-0" />
            </div>
            
            <div className="space-y-8 flex-1">
              {t.businessModel.inflow.items.map((item, index) => {
                const Icon = inflowIcons[index] || Smartphone;
                return (
                  <div key={item.name} className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="font-mono text-xs text-slate-500 mt-1 shrink-0">
                        0{index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-4 h-4 text-fuyera-amber shrink-0" />
                          <h4 className="font-bold text-white tracking-widest text-sm uppercase">{item.name}</h4>
                        </div>
                        <p className="text-sm text-slate-400 font-light leading-relaxed mb-3">{item.desc}</p>
                        <span className="text-[10px] font-mono tracking-widest uppercase border border-white/10 px-2 py-1 text-slate-500 inline-block bg-black">{item.value}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expenses */}
          <div className="bg-fuyera-darker p-8 sm:p-12 border-b lg:border-b-0 lg:border-r lg:border-r-0 border-white/10 flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-10 pb-4 border-b border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white display-font tracking-tight">{t.businessModel.outflow.title}</h3>
              <ArrowUpFromLine className="w-5 h-5 text-slate-500 shrink-0" />
            </div>
            
            <div className="space-y-8 flex-1">
              {t.businessModel.outflow.items.map((item, index) => {
                const Icon = outflowIcons[index] || Cloud;
                return (
                  <div key={item.name} className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="font-mono text-xs text-slate-500 mt-1 shrink-0">
                        0{index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-4 h-4 text-white group-hover:text-fuyera-amber transition-colors shrink-0" />
                          <h4 className="font-bold text-white tracking-widest text-sm uppercase">{item.name}</h4>
                        </div>
                        <p className="text-sm text-slate-400 font-light leading-relaxed mb-3">{item.desc}</p>
                        <span className="text-[10px] font-mono tracking-widest uppercase border border-white/10 px-2 py-1 text-slate-500 inline-block bg-black">{item.value}</span>
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
            <div className="p-6 sm:p-8">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">Primary Currencies</p>
              <p className="text-lg sm:text-xl font-bold text-white display-font tracking-tight">HKD & USD</p>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">Transaction Protocol</p>
              <p className="text-lg sm:text-xl font-bold text-white display-font tracking-tight">Bank Transfer &middot; Platforms</p>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-2">Coverage Zone</p>
              <p className="text-lg sm:text-xl font-bold text-white display-font tracking-tight break-words uppercase">{t.businessModel.regions}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
