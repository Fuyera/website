import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden border-b border-white/10 bg-architectural-grid">
      {/* Editorial Brutalist Layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-12 lg:mb-20">
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 sm:mb-0">
            <span className="text-fuyera-amber font-bold">FUYERA INTEL</span>
            <span className="w-1 h-1 bg-white/20"></span>
            <span>HONG KONG, CHN</span>
            <span className="w-1 h-1 bg-white/20"></span>
            <span>EST. 2026</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-fuyera-amber"></div>
              <span>APPLE DEVELOPER</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white"></div>
              <span>IOS NATIVE</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left: Dominant Typographic Header (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold text-white leading-[0.9] tracking-tight mb-8 display-font">
                AI software 
                <br />
                infrastructure
                <br />
                <span className="text-fuyera-amber italic">for the real world.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed font-light mb-12">
                Fuyera Intelligence is a Hong Kong-based technology company developing highly precise SaaS and mobile applications for intent management, productivity, and applied AI use cases.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 mt-8">
              <Button
                size="lg"
                className="bg-fuyera-amber text-black hover:bg-white rounded-none font-bold text-sm tracking-widest uppercase h-14 px-8 border-2 border-transparent hover:border-black transition-colors"
                onClick={() => scrollToSection('#products')}
              >
                Our Products
                <ArrowDownRight className="w-4 h-4 ml-3" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-black rounded-none font-bold text-sm tracking-widest uppercase h-14 px-8 transition-colors mt-4 sm:mt-0"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right: Technical Directory List (5 cols) */}
          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-white/10 flex flex-col justify-center">
            
            <div className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-white/20"></span>
              Active Product Directory
            </div>
            
            <div className="flex flex-col gap-0 border-t border-white/10">
              
              {/* Product 1 */}
              <div className="group border-b border-white/10 py-6 hover:bg-white/[0.02] cursor-pointer transition-colors" onClick={() => scrollToSection('#products')}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-fuyera-amber font-mono text-xs">P.01</span>
                    <h3 className="text-2xl font-bold text-white display-font group-hover:text-fuyera-amber transition-colors">Fuyera Anchor</h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-fuyera-amber transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300" />
                </div>
                <div className="pl-11">
                  <p className="text-base text-slate-400 font-light mb-4">Intent Lifecycle Management & Productivity</p>
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider">
                    <span className="text-white bg-white/10 px-2 py-1">iOS Native</span>
                    <span className="text-fuyera-amber border border-fuyera-amber/30 px-2 py-1">In Development</span>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group border-b border-white/10 py-6 hover:bg-white/[0.02] cursor-pointer transition-colors" onClick={() => scrollToSection('#products')}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-slate-500 font-mono text-xs">P.02</span>
                    <h3 className="text-xl font-bold text-slate-300 display-font group-hover:text-white transition-colors">FuyeClaw</h3>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-sm text-slate-500 font-light mb-4">AI Workflow System for SMEs</p>
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider">
                    <span className="text-slate-400 border border-white/10 px-2 py-1">Web SaaS</span>
                    <span className="text-slate-500 border border-white/5 px-2 py-1">Planning</span>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group border-b border-white/10 py-6 hover:bg-white/[0.02] cursor-pointer transition-colors" onClick={() => scrollToSection('#products')}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-slate-600 font-mono text-xs">P.03</span>
                    <h3 className="text-xl font-bold text-slate-400 display-font group-hover:text-white transition-colors">FuyePal</h3>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-sm text-slate-600 font-light mb-4">AI Learning Assistant</p>
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider">
                    <span className="text-slate-600 border border-white/5 px-2 py-1 opacity-50">Reserve</span>
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
