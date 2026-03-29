import { useLanguage } from '../lib/i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          
          {/* Brand column */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-8 group w-fit">
              <div className="w-8 h-8 bg-white flex items-center justify-center shrink-0">
                <span className="text-black font-bold text-sm display-font">F</span>
              </div>
              <span className="font-bold text-white text-xl display-font uppercase tracking-tight">Fuyera</span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs mb-8 font-light leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="border border-white/10 p-4 inline-block bg-fuyera-dark">
              <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2">{t.footer.registration}</p>
              <p className="text-sm font-bold text-white tracking-widest uppercase">Fuyera Intelligence Limited</p>
              <p className="text-xs font-light text-slate-400 mt-1">孚烨纳智能科技有限公司</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(t.footer.links).map(([key, section]: [string, any]) => (
            <div key={key}>
              <h4 className="font-mono text-xs tracking-widest text-slate-500 mb-6 uppercase">{section.title}</h4>
              <ul className="space-y-4">
                {section.items.map((link: any) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-slate-400 hover:text-fuyera-amber transition-colors"
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
        <div className="mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-500 uppercase text-center md:text-left">
            {t.footer.rights}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-mono tracking-widest text-slate-500 uppercase">
            <a href="#" className="hover:text-fuyera-amber transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-700 hidden sm:inline">&middot;</span>
            <a href="#" className="hover:text-fuyera-amber transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
