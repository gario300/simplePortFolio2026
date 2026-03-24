'use client'
import { useState, useEffect, useCallback, startTransition } from 'react';

export type Language = 'es' | 'en';

function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  const stored = localStorage.getItem('lang');
  return stored === 'es' || stored === 'en' ? stored : 'es';
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(getStoredLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language | null;
    if (stored === 'es' || stored === 'en') {
      startTransition(() => setLanguageState(stored));
    }
    startTransition(() => setMounted(true));
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  }, []);

  return { language, setLanguage, mounted };
}
