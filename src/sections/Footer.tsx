const footerLinks = {
  products: {
    title: 'PRODUCTS',
    links: [
      { label: 'Fuyera Anchor', href: '#products' },
      { label: 'FuyeClaw', href: '#products' },
      { label: 'FuyePal', href: '#products' },
    ],
  },
  company: {
    title: 'COMPANY',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Business Model', href: '#business-model' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  legal: {
    title: 'LEGAL',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-8 group w-fit">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-black font-bold text-sm display-font">F</span>
              </div>
              <span className="font-bold text-white text-xl display-font uppercase tracking-tight">Fuyera</span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs mb-8 font-light">
              AI-powered mobile applications and SaaS tools. Headquartered in Hong Kong.
            </p>
            <div className="border border-white/10 p-4 inline-block">
              <p className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-2">Registration</p>
              <p className="text-sm font-medium text-white">Fuyera Intelligence Limited</p>
              <p className="text-xs font-light text-slate-400 mt-1">孚烨纳智能科技有限公司</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-mono text-xs tracking-widest text-slate-500 mb-6 uppercase">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono tracking-widest text-slate-500 uppercase">
            © 2026 Fuyera Intelligence Limited. Hong Kong.
          </p>
          <div className="flex items-center gap-6 text-xs font-mono tracking-widest text-slate-500 uppercase">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
