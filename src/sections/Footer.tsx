const footerLinks = {
  products: {
    title: 'Products',
    links: [
      { label: 'Fuyera Anchor', href: '#products' },
      { label: 'FuyeClaw', href: '#products' },
      { label: 'FuyePal', href: '#products' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Business Model', href: '#business-model' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuyera-cyan to-fuyera-cyan-glow flex items-center justify-center">
                <span className="text-fuyera-dark font-bold text-sm">F</span>
              </div>
              <span className="font-semibold text-white text-lg">Fuyera</span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs mb-4">
              AI-powered mobile applications and SaaS tools. Headquartered in Hong Kong.
            </p>
            <p className="text-xs text-slate-500">
              Fuyera Intelligence Limited<br />
              孚烨纳智能科技有限公司
            </p>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
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
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Fuyera Intelligence Limited. Hong Kong.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
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
