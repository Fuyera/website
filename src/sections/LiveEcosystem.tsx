import { useEffect, useState, useRef } from 'react';
import { Globe, Activity, Zap, Server } from 'lucide-react';

interface Node {
  id: string;
  name: string;
  region: string;
  status: 'active' | 'backup' | 'planned';
  x: number;
  y: number;
}

const nodes: Node[] = [
  { id: 'hkg', name: 'Hong Kong', region: 'APAC Primary', status: 'active', x: 75, y: 45 },
  { id: 'sin', name: 'Singapore', region: 'APAC Backup', status: 'backup', x: 70, y: 55 },
  { id: 'lax', name: 'Los Angeles', region: 'US West', status: 'active', x: 15, y: 35 },
  { id: 'fra', name: 'Frankfurt', region: 'Europe', status: 'planned', x: 48, y: 25 },
];

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
}

const stats: Stat[] = [
  { label: 'Active Agents', value: 2847, suffix: '', icon: Activity },
  { label: 'API Calls Today', value: 14.2, suffix: 'M', icon: Zap },
  { label: 'Edge Uptime', value: 99.97, suffix: '%', icon: Server },
];

function AnimatedCounter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue)}
      {suffix}
    </span>
  );
}

export function LiveEcosystem() {
  const [pulseNode, setPulseNode] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const activeNodes = nodes.filter((n) => n.status === 'active');
      const randomNode = activeNodes[Math.floor(Math.random() * activeNodes.length)];
      setPulseNode(randomNode?.id || null);
      setTimeout(() => setPulseNode(null), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuyera-cyan/10 border border-fuyera-cyan/20 text-fuyera-cyan text-xs font-medium mb-4">
            <Globe className="w-3 h-3" />
            Global Edge Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Distributed.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              Resilient. Real-time.
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Your agents run on our global edge network, with sub-50ms latency to major metros.
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative mb-12">
          <div className="aspect-[2/1] max-w-4xl mx-auto relative">
            {/* Map background */}
            <div className="absolute inset-0 rounded-2xl bg-fuyera-slate/20 border border-white/5 overflow-hidden">
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute w-full h-px bg-fuyera-cyan/30"
                    style={{ top: `${(i + 1) * 10}%` }}
                  />
                ))}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute h-full w-px bg-fuyera-cyan/30"
                    style={{ left: `${(i + 1) * 5}%` }}
                  />
                ))}
              </div>

              {/* Continents (simplified as dots) */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 50">
                {/* North America */}
                <ellipse cx="20" cy="20" rx="12" ry="8" fill="currentColor" className="text-fuyera-slate" />
                {/* South America */}
                <ellipse cx="28" cy="38" rx="6" ry="10" fill="currentColor" className="text-fuyera-slate" />
                {/* Europe */}
                <ellipse cx="48" cy="18" rx="8" ry="6" fill="currentColor" className="text-fuyera-slate" />
                {/* Africa */}
                <ellipse cx="50" cy="32" rx="8" ry="10" fill="currentColor" className="text-fuyera-slate" />
                {/* Asia */}
                <ellipse cx="70" cy="22" rx="18" ry="10" fill="currentColor" className="text-fuyera-slate" />
                {/* Australia */}
                <ellipse cx="82" cy="40" rx="6" ry="4" fill="currentColor" className="text-fuyera-slate" />
              </svg>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                {nodes.map((node, i) =>
                  nodes.slice(i + 1).map((targetNode) => (
                    <line
                      key={`${node.id}-${targetNode.id}`}
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${targetNode.x}%`}
                      y2={`${targetNode.y}%`}
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                      className="text-fuyera-cyan/20"
                    />
                  ))
                )}
              </svg>

              {/* Nodes */}
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {/* Pulse effect */}
                  {node.status === 'active' && pulseNode === node.id && (
                    <div className="absolute inset-0 animate-ping">
                      <div className="w-4 h-4 rounded-full bg-fuyera-cyan/50" />
                    </div>
                  )}
                  
                  {/* Node dot */}
                  <div
                    className={`
                      w-3 h-3 rounded-full border-2
                      ${node.status === 'active' 
                        ? 'bg-fuyera-cyan border-fuyera-cyan-glow shadow-glow-cyan-sm' 
                        : node.status === 'backup'
                        ? 'bg-yellow-500/50 border-yellow-400'
                        : 'bg-slate-600 border-slate-500'
                      }
                    `}
                  />
                  
                  {/* Label */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="text-xs font-medium text-white">{node.name}</div>
                    <div className="text-[10px] text-slate-500">{node.region}</div>
                    {node.status === 'planned' && (
                      <div className="text-[10px] text-slate-600">(Planned)</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-fuyera-slate/30 border border-white/5 text-center group hover:border-fuyera-cyan/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-fuyera-cyan/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-fuyera-cyan/20 transition-colors">
                  <Icon className="w-5 h-5 text-fuyera-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.value % 1 !== 0 ? 2 : 0} 
                  />
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
