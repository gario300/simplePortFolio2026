'use client'
import { useLanguage, Language } from "@/hooks/useLanguage";
import FloatingNav from "@/components/FloatingNav/FloatingNav";
import Footer from "@/components/Footer/Footer";

export default function PageShell({ children }: { children: (language: Language) => React.ReactNode }) {
  const { language, setLanguage, mounted } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col selection:bg-cta selection:text-white">
      <FloatingNav language={language} setLanguage={setLanguage} />
      <div id="main-content" style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children(language)}
      </div>
      <Footer language={language} />
    </div>
  );
}
