import { MapPin, Users, Sparkles } from 'lucide-react';

const locations = ['Hong Kong', 'Singapore', 'San Francisco'];

export function SocialProof() {
  return (
    <section className="relative py-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Trust metrics */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-fuyera-cyan/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-fuyera-cyan" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">2,400+</div>
                <div className="text-xs text-slate-400">OPC operators</div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-400">
                {locations.join(' • ')}
              </span>
            </div>
          </div>

          {/* Backing statement */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Sparkles className="w-4 h-4 text-fuyera-cyan/50" />
            <span>
              Backed by technical founders from{' '}
              <span className="text-slate-400">med-tech</span> and{' '}
              <span className="text-slate-400">embedded systems</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
