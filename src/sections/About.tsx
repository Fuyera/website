import { useState } from 'react';
import { 
  Target, 
  Users, 
  Lightbulb, 
  Shield, 
  Zap, 
  Globe,
  Heart,
  Cpu,
  ArrowRight,
  MapPin,
  Calendar
} from 'lucide-react';

const milestones = [
  { year: '2023', event: 'Fuyera founded in Hong Kong', highlight: true },
  { year: '2024', event: 'OpenClaw v1.0 released', highlight: true },
  { year: '2024', event: 'Anchor app hits 10K users', highlight: false },
  { year: '2025', event: 'AI Box pre-order launch', highlight: true },
  { year: '2025', event: '2,400+ OPC operators onboard', highlight: false },
];

const values = [
  {
    icon: Users,
    title: 'Operator-First',
    description: 'We build for the solo founder, the indie hacker, the one-person company. Your constraints are our design parameters.',
  },
  {
    icon: Shield,
    title: 'Own Your Stack',
    description: 'No vendor lock-in. Self-host when you need to. Your data, your agents, your infrastructure.',
  },
  {
    icon: Zap,
    title: 'Ship Fast, Scale Later',
    description: 'Start with a side project. Grow into enterprise. The same stack scales with you.',
  },
  {
    icon: Heart,
    title: 'Built with Empathy',
    description: 'We\'ve been there. Late nights, impossible deadlines, the weight of doing it all. This is our love letter to OPC operators.',
  },
];

const founderBackgrounds = [
  {
    field: 'Med-Tech',
    icon: Heart,
    description: 'Healthcare AI compliance, HIPAA-grade security, medical device software',
    color: 'from-rose-500/20 to-rose-500/5',
    borderColor: 'border-rose-500/20',
  },
  {
    field: 'Embedded Systems',
    icon: Cpu,
    description: 'Edge computing, IoT firmware, real-time systems, hardware-software integration',
    color: 'from-cyan-500/20 to-cyan-500/5',
    borderColor: 'border-cyan-500/20',
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState<'story' | 'values' | 'team'>('story');

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-fuyera-slate/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuyera-cyan/10 border border-fuyera-cyan/20 text-fuyera-cyan text-xs font-medium mb-4">
            <Globe className="w-3 h-3" />
            About Fuyera
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built by operators,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              for operators.
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We&apos;re a team of technical founders who believe the future belongs to one-person companies armed with AI.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-fuyera-slate/50 border border-white/5">
            {(['story', 'values', 'team'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-fuyera-cyan/20 text-fuyera-cyan'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Story Tab */}
        {activeTab === 'story' && (
          <div className="space-y-12 animate-fade-in">
            {/* Origin Story */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-fuyera-cyan text-sm font-medium">
                  <Lightbulb className="w-4 h-4" />
                  The Origin
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Why we built Fuyera
                </h3>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    Fuyera started with a simple observation: the most innovative companies of the next decade 
                    won&apos;t be built by 500-person teams. They&apos;ll be built by one person with AI.
                  </p>
                  <p>
                    Our founders came from med-tech and embedded systems—industries where reliability isn&apos;t 
                    optional and compliance is non-negotiable. We saw solo founders building critical infrastructure 
                    on tools that weren&apos;t designed for them.
                  </p>
                  <p>
                    So we built what we wished we had: production-grade AI infrastructure that ships like a side 
                    project and scales like enterprise software. Infrastructure that respects the OPC constraint: 
                    one human, infinite ambition.
                  </p>
                </div>
              </div>

              {/* Milestone Timeline */}
              <div className="p-6 rounded-2xl bg-fuyera-slate/30 border border-white/5">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-fuyera-cyan" />
                  <h4 className="font-semibold text-white">Our Journey</h4>
                </div>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-20 text-sm font-mono ${
                        milestone.highlight ? 'text-fuyera-cyan' : 'text-slate-500'
                      }`}>
                        {milestone.year}
                      </div>
                      <div className="flex-1">
                        <div className={`w-2 h-2 rounded-full mt-1.5 ${
                          milestone.highlight ? 'bg-fuyera-cyan' : 'bg-slate-600'
                        }`} />
                      </div>
                      <div className={`flex-1 text-sm ${
                        milestone.highlight ? 'text-white' : 'text-slate-400'
                      }`}>
                        {milestone.event}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-fuyera-cyan/10 via-fuyera-slate/30 to-fuyera-slate/30 border border-fuyera-cyan/20 text-center">
              <Target className="w-10 h-10 text-fuyera-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Empower one-person companies to build and scale production-grade AI systems 
                that rival enterprise teams—without the enterprise overhead.
              </p>
            </div>
          </div>
        )}

        {/* Values Tab */}
        {activeTab === 'values' && (
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 rounded-xl bg-fuyera-slate/30 border border-white/5 hover:border-fuyera-cyan/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-fuyera-cyan/10 flex items-center justify-center mb-4 group-hover:bg-fuyera-cyan/20 transition-colors">
                    <Icon className="w-6 h-6 text-fuyera-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-12 animate-fade-in">
            {/* Founder Backgrounds */}
            <div className="grid md:grid-cols-2 gap-6">
              {founderBackgrounds.map((bg) => {
                const Icon = bg.icon;
                return (
                  <div
                    key={bg.field}
                    className={`p-6 rounded-xl bg-gradient-to-br ${bg.color} border ${bg.borderColor}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{bg.field}</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{bg.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Team Size', value: '12', suffix: '' },
                { label: 'Countries', value: '6', suffix: '' },
                { label: 'Years Combined Experience', value: '80+', suffix: '' },
                { label: 'Open Source Contributors', value: '50+', suffix: '' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-fuyera-slate/30 border border-white/5 text-center"
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* HQ Location */}
            <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-fuyera-slate/20 border border-white/5">
              <MapPin className="w-4 h-4 text-fuyera-cyan" />
              <span className="text-sm text-slate-400">
                Headquartered in <span className="text-white">Hong Kong</span> • Remote-first team across APAC and North America
              </span>
            </div>

            {/* Join Us CTA */}
            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-fuyera-cyan hover:text-fuyera-cyan-glow transition-colors"
              >
                Join our team
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
