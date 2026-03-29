import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../lib/i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden border-b border-white/10 bg-architectural-grid">
      {/* Editorial Brutalist Layout */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Top Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-12 lg:mb-20 gap-4 sm:gap-0">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-slate-500">
            <span className="text-fuyera-amber font-bold">FUYERA INTEL</span>
            <span className="w-1 h-1 bg-white/20 hidden sm:block"></span>
            <span>{t.hero.stats.registration.value}</span>
            <span className="w-1 h-1 bg-white/20 hidden sm:block"></span>
            <span>{t.hero.stats.founded.value}</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-400 font-mono tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-fuyera-amber"></div>
              <span>APPLE DEVELOPER</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white"></div>
              <span>{t.hero.stats.delivery.value}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left: Dominant Typographic Header (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-sm font-mono tracking-widest text-fuyera-amber mb-6 uppercase">{t.hero.headlineLabel}</p>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[6rem] font-bold text-white leading-[1] tracking-tight mb-8 display-font">
                {t.hero.titleLine1}
                <br />
                <span className="text-white italic">{t.hero.titleLine2}</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed font-light mb-12">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-8">
              <Button
                size="lg"
                className="bg-fuyera-amber text-black hover:bg-white rounded-none font-bold text-sm tracking-widest uppercase h-14 px-8 border-2 border-transparent hover:border-black transition-colors w-full sm:w-auto"
                onClick={() => scrollToSection('#products')}
              >
                {t.hero.primaryCta}
                <ArrowDownRight className="w-4 h-4 ml-3" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-black rounded-none font-bold text-sm tracking-widest uppercase h-14 px-8 transition-colors w-full sm:w-auto"
                onClick={() => scrollToSection('#about')}
              >
                {t.hero.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Right: Technical Directory List (5 cols) */}
          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-white/10 flex flex-col justify-center mt-12 lg:mt-0">
            
            <div className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-white/20"></span>
              {t.products.sectionLabel}
            </div>
            
            <div className="flex flex-col gap-0 border-t border-white/10">
              
              {/* Product 1 */}
              <div className="group border-b border-white/10 py-6 hover:bg-white/[0.02] cursor-pointer transition-colors" onClick={() => scrollToSection('#products')}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-fuyera-amber font-mono text-xs">P.01</span>
                    <h3 className="text-2xl font-bold text-white display-font group-hover:text-fuyera-amber transition-colors">{t.products.anchor.name}</h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-fuyera-amber transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300 hidden sm:block" />
                </div>
                <div className="pl-11">
                  <p className="text-base text-slate-400 font-light mb-4 line-clamp-2">{t.products.anchor.description}</p>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-wider">
                    <span className="text-white bg-white/10 px-2 py-1">{t.products.anchor.status}</span>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group border-b border-white/10 py-6 hover:bg-white/[0.02] cursor-pointer transition-colors" onClick={() => scrollToSection('#products')}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-slate-500 font-mono text-xs">P.02</span>
                    <h3 className="text-xl font-bold text-slate-300 display-font group-hover:text-white transition-colors">{t.products.claw.name}</h3>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-sm text-slate-500 font-light mb-4 line-clamp-2">{t.products.claw.description}</p>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-wider">
                    <span className="text-slate-400 border border-white/10 px-2 py-1">{t.products.claw.status}</span>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group border-b border-white/10 py-6 hover:bg-white/[0.02] cursor-pointer transition-colors" onClick={() => scrollToSection('#products')}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-slate-600 font-mono text-xs">P.03</span>
                    <h3 className="text-xl font-bold text-slate-400 display-font group-hover:text-white transition-colors">{t.products.pal.name}</h3>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-sm text-slate-600 font-light mb-4 line-clamp-2">{t.products.pal.description}</p>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-wider">
                    <span className="text-slate-600 border border-white/5 px-2 py-1 opacity-50">{t.products.pal.status}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
