import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';
import type { Language } from './translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'zh')) {
      setLanguage(saved);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.includes('zh')) {
        setLanguage('zh');
      }
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev: Language) => {
      const next = prev === 'en' ? 'zh' : 'en';
      localStorage.setItem('language', next);
      return next;
    });
  };

  const t = translations[language] as typeof translations.en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
