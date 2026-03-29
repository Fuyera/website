import { useState } from 'react';
import { 
  Target, 
  Zap, 
  GraduationCap, 
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

function ProductCardComponent({ 
  id, 
  product, 
  icon: Icon, 
  statusClasses, 
  isReserve 
}: { 
  id: string, 
  product: any, 
  icon: any, 
  statusClasses: string, 
  isReserve: boolean 
}) {
  const [isExpanded, setIsExpanded] = useState(id === 'anchor');

  return (
    <div
      className={`machined-panel group cursor-pointer p-0 flex flex-col justify-between ${
        isReserve ? 'lg:col-span-2 shadow-none border-dashed border-white/20' : 'shadow-machined-dark hover:shadow-machined border-white/10'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6 sm:p-8 pb-4">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center shrink-0">
              <Icon className={`w-5 h-5 ${id === 'anchor' ? 'text-fuyera-amber' : 'text-white'}`} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white display-font tracking-tight leading-tight">{product.name}</h3>
            </div>
          </div>
          <span className={`px-3 py-1 text-[10px] font-mono tracking-widest uppercase border ${statusClasses} shrink-0 w-fit`}>
            {product.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features Content */}
        <div className={`grid transition-all duration-300 ${isExpanded ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden space-y-4">
            <div className="flex flex-col gap-px bg-white/10 border border-white/10">
              {product.details?.map((detail: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-fuyera-slate text-sm font-light text-slate-300 hover:bg-black transition-colors gap-2 sm:gap-4"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-500 shrink-0">{detail.label}</span>
                  <span className="text-fuyera-amber font-mono text-xs text-left sm:text-right">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle Bar */}
      <div className="border-t border-white/10 p-3 bg-black flex justify-center items-center group-hover:bg-fuyera-amber transition-colors">
        <ChevronDown className={`w-4 h-4 text-slate-500 group-hover:text-black transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </div>
    </div>
  );
}

export function ProductEcosystem() {
  const { t } = useLanguage();

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-fuyera-dark border-b border-white/10 bg-architectural-grid">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-16 border-l-4 border-fuyera-amber pl-6">
          <p className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-4">{t.products.sectionLabel}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white display-font tracking-tight">
            {t.products.title}
          </h2>
          <p className="mt-4 text-slate-400 font-light max-w-2xl">{t.products.description}</p>
        </div>

        {/* Current Products */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <ProductCardComponent 
            id="anchor" 
            product={t.products.anchor} 
            icon={Target} 
            statusClasses="bg-fuyera-amber text-black border-transparent font-bold" 
            isReserve={false} 
          />
          <ProductCardComponent 
            id="claw" 
            product={t.products.claw} 
            icon={Zap} 
            statusClasses="bg-transparent text-slate-400 border-slate-500" 
            isReserve={false} 
          />
        </div>

        {/* Reserve Product Header */}
        <div className="mt-24 mb-12 border-t border-white/10 pt-12 flex items-center justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white display-font tracking-tight">Reserve Product Stack</h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ProductCardComponent 
            id="pal" 
            product={t.products.pal} 
            icon={GraduationCap} 
            statusClasses="bg-transparent text-slate-500 border-white/10" 
            isReserve={true} 
          />
        </div>

      </div>
    </section>
  );
}
