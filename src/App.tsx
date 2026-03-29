import { useEffect } from 'react';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { CompanyOverview } from './sections/CompanyOverview';
import { ProductEcosystem } from './sections/ProductEcosystem';
import { BusinessModel } from './sections/BusinessModel';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { LanguageProvider } from './lib/i18n/LanguageContext';
import './App.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-fuyera-dark text-foreground">
        <Navigation />
        
        <main>
          <Hero />
          <CompanyOverview />
          <ProductEcosystem />
          <BusinessModel />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
