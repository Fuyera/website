import { 
  Building2, 
  Calendar, 
  Hash, 
  FileDigit,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function CompanyOverview() {
  const { t } = useLanguage();

  const infoRecords = [
    { id: 'REC.01', icon: Building2, ...t.company.infoRecords.entity },
    { id: 'REC.02', icon: Calendar, ...t.company.infoRecords.incorporation },
    { id: 'REC.03', icon: Hash, ...t.company.infoRecords.crn },
    { id: 'REC.04', icon: FileDigit, ...t.company.infoRecords.brn },
    { id: 'REC.05', icon: MapPin, ...t.company.infoRecords.address },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-fuyera-darker border-b border-white/10">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-end">
          <div className="lg:col-span-4 pb-4 border-b border-white/10">
            <h2 className="text-sm font-mono tracking-widest text-fuyera-amber uppercase">
              {t.company.sectionLabel}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] display-font">
              {t.company.title}
            </h3>
            <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
              {t.company.description}
            </p>
          </div>
        </div>

        {/* Typographic Dossier List */}
        <div className="border-t border-b border-white/20 divide-y divide-white/10 mt-12">
          {infoRecords.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 group hover:bg-white/[0.02] transition-colors items-center">
                <div className="md:col-span-3 flex items-center gap-4 text-slate-500">
                  <span className="font-mono text-xs tracking-widest">{item.id}</span>
                  <Icon className="w-5 h-5 group-hover:text-fuyera-amber transition-colors" />
                </div>
                <div className="md:col-span-3">
                  <h4 className="text-sm font-bold text-white tracking-widest font-mono uppercase">{item.label}</h4>
                </div>
                <div className="md:col-span-6">
                  <p className="text-slate-300 font-light text-base sm:text-lg">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder Dossier */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="machined-panel p-0 flex flex-col md:flex-row shadow-machined-dark border border-white/10">
            {/* Identity Badge Side */}
            <div className="bg-white text-black p-8 md:w-64 flex flex-col justify-between shrink-0">
              <div>
                <p className="text-xs font-mono font-bold tracking-widest mb-1 text-slate-500 uppercase">{t.company.founder.title}</p>
                <h3 className="text-2xl font-bold display-font tracking-tight mt-4 uppercase">{t.company.founder.name}</h3>
              </div>
              <div className="mt-12 sm:mt-24">
                <div className="w-12 h-1 bg-black mb-4"></div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{t.company.founder.label}</p>
              </div>
            </div>
            
            {/* Intel details */}
            <div className="p-8 lg:p-12 flex-1 bg-fuyera-slate text-slate-300 font-light leading-relaxed flex flex-col justify-center">
              <div className="space-y-6">
                <p className="text-base sm:text-lg leading-relaxed">
                  {t.company.founder.description}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
