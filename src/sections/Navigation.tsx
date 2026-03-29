import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Business Model', href: '#business-model' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-harsh border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-6 h-6 bg-white flex items-center justify-center">
                <span className="text-black font-bold text-xs display-font">F</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight display-font uppercase">
                FUYERA
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                size="sm"
                className="bg-white text-black hover:bg-fuyera-amber rounded-none font-bold text-xs uppercase tracking-widest h-9 px-6 transition-colors"
                onClick={() => scrollToSection('#contact')}
              >
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
               <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-16">
          <div
            className="absolute inset-0 glass-harsh"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 p-0 border-b border-white/10 bg-black">
            <div className="flex flex-col divide-y divide-white/10">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-6 py-4 text-sm font-mono tracking-widest text-slate-400 hover:text-white hover:bg-white/[0.02] uppercase transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="p-6">
                <Button
                  className="w-full justify-center bg-white text-black hover:bg-fuyera-amber rounded-none h-12 font-bold tracking-widest uppercase"
                  onClick={() => scrollToSection('#contact')}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
