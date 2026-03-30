import { 
  Building2, 
  Cpu, 
  Globe, 
  ShieldCheck,
  Smartphone,
  TrendingUp
} from 'lucide-react';

const highlights = [
  {
    icon: Building2,
    title: 'Hong Kong Incorporated',
    description: 'Registered and operating as a private limited company in Hong Kong.',
  },
  {
    icon: Cpu,
    title: 'Application-Layer AI',
    description: 'Builds application-layer products, not foundation models. We focus on practical, user-facing solutions.',
  },
  {
    icon: Globe,
    title: 'Global Digital Distribution',
    description: 'Products distributed through digital platforms such as the Apple App Store and web-based SaaS.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & SaaS Products',
    description: 'Developing AI-powered mobile applications and SaaS tools for productivity, workflow, and learning.',
  },
  {
    icon: TrendingUp,
    title: 'Subscription-Based Revenue',
    description: 'Business model centered on digital distribution, subscription monetization, and continuous improvement.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliant Operations',
    description: 'Serving individual users and SME customers through transparent, auditable business operations.',
  },
];

export function CompanyOverview() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-fuyera-slate/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuyera-cyan/10 border border-fuyera-cyan/20 text-fuyera-cyan text-xs font-medium mb-4">
            <Building2 className="w-3 h-3" />
            About Fuyera Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Building AI software products{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuyera-cyan to-fuyera-cyan-glow">
              with real-world value.
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              Fuyera Intelligence Limited is a Hong Kong incorporated technology company focused on developing and distributing AI-powered software applications.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              We build application-layer products for individual users and small-to-medium-sized businesses, with a focus on practical digital tools, productivity support, workflow enablement, and commercial AI use cases.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              Our business model centers on product development, digital distribution, subscription monetization, and continuous product improvement.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-fuyera-slate/30 border border-white/5 hover:border-fuyera-cyan/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-fuyera-cyan/10 flex items-center justify-center mb-4 group-hover:bg-fuyera-cyan/20 transition-colors">
                  <Icon className="w-6 h-6 text-fuyera-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Founder Brief */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-fuyera-cyan/10 via-fuyera-slate/30 to-fuyera-slate/30 border border-fuyera-cyan/20">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuyera-cyan/20 to-fuyera-cyan/5 flex items-center justify-center border border-fuyera-cyan/20">
              <span className="text-2xl font-bold text-fuyera-cyan">FY</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">傅晔｜创始人</h3>
              <p className="text-sm text-fuyera-cyan mb-4">Founder</p>
              <div className="space-y-3 text-sm text-slate-400 leading-relaxed">
                <p>
                  傅晔毕业于天津大学自动化专业，拥有25年医疗器械研发、生产与管理经验，长期专注于二类、三类医疗器械的软硬件设计、法规合规与注册申报，熟悉医疗器械产品从研发设计、工程转化到注册上市的完整流程。
                </p>
                <p>
                  在深厚产业背景的基础上，傅晔持续拓展面向未来的技术能力，形成了覆盖智能硬件、嵌入式系统、移动应用开发与AI应用架构的综合技术体系。其技术方向包括医疗器械硬件研发与生产管理、嵌入式开发（STM32、ESP32、树莓派、MCU）、AIoT架构设计、嵌入式AI工具链，以及Flutter、UniApp、iOS/Android原生应用开发、多代理系统架构、微SaaS与无服务器架构等。
                </p>
                <p>
                  作为兼具产业经验、工程能力与产品创新视野的实践者，傅晔始终关注技术的真实落地价值，致力于推动医疗科技、智能设备与人工智能能力的深度融合，打造面向未来的高价值智能产品与解决方案。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
