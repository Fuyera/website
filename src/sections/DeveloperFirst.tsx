import { useState } from 'react';
import { Copy, Check, ExternalLink, Terminal, Code2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const codeExample = `from fuyera import Agent, OpenClaw

# Initialize your agent in 3 lines
anchor = Agent("focus-tracker")
anchor.connect(OpenClaw.edge("hkg-01"))

# Deploy to iOS, Web, and AI Box simultaneously
anchor.deploy(["ios", "web", "edge"])`;

const sdks = [
  { name: 'Python', status: 'Stable', version: 'v2.1.0' },
  { name: 'TypeScript', status: 'Stable', version: 'v1.8.2' },
  { name: 'Go', status: 'Beta', version: 'v0.9.0' },
  { name: 'Rust', status: 'Alpha', version: 'v0.3.0' },
];

const resources = [
  { name: 'Documentation', icon: BookOpen, description: 'Complete API reference' },
  { name: 'GitHub', icon: Code2, description: 'Open source SDKs' },
  { name: 'CLI', icon: Terminal, description: 'Command line tools' },
];

export function DeveloperFirst() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developers" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-fuyera-slate/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuyera-cyan/10 border border-fuyera-cyan/20 text-fuyera-cyan text-xs font-medium mb-4">
            <Code2 className="w-3 h-3" />
            Developer-First
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ship in minutes,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              not months.
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Clean APIs, comprehensive SDKs, and documentation that actually helps you build.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Code Block */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-fuyera-cyan/10 to-transparent rounded-2xl blur-xl opacity-50" />
            
            <div className="relative terminal rounded-xl overflow-hidden">
              {/* Header */}
              <div className="terminal-header px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-slate-500 font-mono ml-2">example.py</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-7 px-2 text-slate-400 hover:text-white hover:bg-white/5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm bg-fuyera-darker/80 overflow-x-auto">
                <pre className="text-slate-300">
                  <code>
                    {codeExample.split('\n').map((line, i) => (
                      <div key={i} className="leading-relaxed">
                        {line.startsWith('#') ? (
                          <span className="text-slate-500">{line}</span>
                        ) : line.startsWith('from') || line.startsWith('import') ? (
                          <>
                            <span className="text-purple-400">from</span>{' '}
                            <span className="text-slate-300">fuyera</span>{' '}
                            <span className="text-purple-400">import</span>{' '}
                            <span className="text-yellow-400">Agent</span>,{' '}
                            <span className="text-yellow-400">OpenClaw</span>
                          </>
                        ) : line.includes('=') ? (
                          <>
                            <span className="text-blue-400">anchor</span>{' '}
                            <span className="text-slate-500">=</span>{' '}
                            <span className="text-yellow-400">Agent</span>
                            <span className="text-slate-500">(</span>
                            <span className="text-green-400">&quot;focus-tracker&quot;</span>
                            <span className="text-slate-500">)</span>
                          </>
                        ) : line.includes('.connect') ? (
                          <>
                            <span className="text-blue-400">anchor</span>
                            <span className="text-slate-500">.</span>
                            <span className="text-cyan-400">connect</span>
                            <span className="text-slate-500">(</span>
                            <span className="text-yellow-400">OpenClaw</span>
                            <span className="text-slate-500">.</span>
                            <span className="text-cyan-400">edge</span>
                            <span className="text-slate-500">(</span>
                            <span className="text-green-400">&quot;hkg-01&quot;</span>
                            <span className="text-slate-500">))</span>
                          </>
                        ) : line.includes('.deploy') ? (
                          <>
                            <span className="text-blue-400">anchor</span>
                            <span className="text-slate-500">.</span>
                            <span className="text-cyan-400">deploy</span>
                            <span className="text-slate-500">([</span>
                            <span className="text-green-400">&quot;ios&quot;</span>
                            <span className="text-slate-500">, </span>
                            <span className="text-green-400">&quot;web&quot;</span>
                            <span className="text-slate-500">, </span>
                            <span className="text-green-400">&quot;edge&quot;</span>
                            <span className="text-slate-500">])</span>
                          </>
                        ) : (
                          line
                        )}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>

            {/* SDK badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {sdks.map((sdk) => (
                <div
                  key={sdk.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-fuyera-slate/30 border border-white/5 text-xs"
                >
                  <span className="text-slate-300">{sdk.name}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                    sdk.status === 'Stable' 
                      ? 'bg-green-500/20 text-green-400' 
                      : sdk.status === 'Beta'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-slate-500/20 text-slate-400'
                  }`}>
                    {sdk.status}
                  </span>
                  <span className="text-slate-500">{sdk.version}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Developer Resources</h3>
            
            <div className="space-y-3">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <a
                    key={resource.name}
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-xl bg-fuyera-slate/30 border border-white/5 hover:border-fuyera-cyan/20 hover:bg-fuyera-slate/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-fuyera-cyan/10 flex items-center justify-center group-hover:bg-fuyera-cyan/20 transition-colors">
                      <Icon className="w-5 h-5 text-fuyera-cyan" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{resource.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-slate-400">{resource.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick links */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-3">
                <a href="#" className="text-sm text-fuyera-cyan hover:text-fuyera-cyan-glow transition-colors">
                  API Reference →
                </a>
                <a href="#" className="text-sm text-fuyera-cyan hover:text-fuyera-cyan-glow transition-colors">
                  Quick Start →
                </a>
                <a href="#" className="text-sm text-fuyera-cyan hover:text-fuyera-cyan-glow transition-colors">
                  Examples →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
