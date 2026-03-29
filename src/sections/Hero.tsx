import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-radial from-fuyera-slate/30 via-transparent to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-fuyera-cyan/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuyera-cyan/10 border border-fuyera-cyan/20 text-fuyera-cyan text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-fuyera-cyan animate-pulse" />
                Hong Kong · Est. 2026
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                AI-powered software products for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
                  individuals and SMEs
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
                Fuyera Intelligence is a Hong Kong-based technology company developing SaaS and mobile applications for productivity, workflow support, and applied AI use cases.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-fuyera-cyan text-fuyera-dark hover:bg-fuyera-cyan-glow font-semibold group px-6"
                onClick={() => scrollToSection('#products')}
              >
                Our Products
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-white/5 hover:text-white group px-6"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Us
              </Button>
            </div>

            {/* Key facts */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm text-slate-400">Apple Developer ✓</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-fuyera-cyan" />
                <span className="text-sm text-slate-400">iOS Native Apps</span>
              </div>
            </div>
          </div>

          {/* Right: Product Concept Visual */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-fuyera-cyan/20 to-fuyera-cyan-glow/10 rounded-2xl blur-2xl opacity-50" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-fuyera-slate/30 p-8 lg:p-10">
              {/* Product Showcase cards */}
              <div className="space-y-4">
                <div className="text-xs text-fuyera-cyan font-medium uppercase tracking-wider mb-6">
                  Our Product Lines
                </div>
                
                {/* Anchor card */}
                <div className="p-4 rounded-xl bg-fuyera-dark/50 border border-fuyera-cyan/20 hover:border-fuyera-cyan/40 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-fuyera-cyan/20 flex items-center justify-center">
                      <span className="text-fuyera-cyan text-sm font-bold">A</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Fuyera Anchor</div>
                      <div className="text-slate-500 text-xs">Productivity & Intent Management</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-fuyera-cyan/10 text-fuyera-cyan border border-fuyera-cyan/20">iOS Native</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-green-500/10 text-green-400 border border-green-500/20">In Development</span>
                  </div>
                </div>

                {/* FuyeClaw card */}
                <div className="p-4 rounded-xl bg-fuyera-dark/50 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <span className="text-slate-300 text-sm font-bold">C</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">FuyeClaw</div>
                      <div className="text-slate-500 text-xs">AI Workflow System for SMEs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-400 border border-white/10">SaaS</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Planning</span>
                  </div>
                </div>

                {/* FuyePal card */}
                <div className="p-4 rounded-xl bg-fuyera-dark/50 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <span className="text-slate-400 text-sm font-bold">P</span>
                    </div>
                    <div>
                      <div className="text-slate-300 font-semibold text-sm">FuyePal</div>
                      <div className="text-slate-500 text-xs">AI Learning Assistant</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-500 border border-white/5">Reserve</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-fuyera-cyan/10 rounded-full blur-xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-fuyera-cyan/5 rounded-full blur-lg" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-fuyera-dark to-transparent" />
    </section>
  );
}
