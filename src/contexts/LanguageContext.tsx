
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.support': 'Support',
    'nav.login': 'Login',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.badge': 'AI-Powered UK Market Entry',
    'hero.title': 'Expand Your Turkish Business to the UK Market',
    'hero.description': 'Get your AI-powered Marketability Score, receive a custom UK-readiness roadmap, and access verified partners to seamlessly launch your business in the United Kingdom.',
    'hero.startJourney': 'Start Your UK Journey',
    'hero.watchDemo': 'Watch Demo',
    
    // Features Section
    'features.title': 'Everything You Need for UK Market Entry',
    'features.subtitle': 'Our AI-powered platform guides you through every step of expanding to the UK market',
    'features.aiScore': 'AI Marketability Score',
    'features.aiScoreDesc': 'Get instant analysis of your business potential in the UK market with our advanced AI scoring engine',
    'features.docGenerator': 'Document Generator',
    'features.docGeneratorDesc': 'Automatically generate contracts, NDAs, VAT forms, and other essential UK business documents',
    'features.partnerMatching': 'Partner Matching',
    'features.partnerMatchingDesc': 'Connect with verified UK accountants, legal advisors, and logistics providers tailored to your needs',
    'features.smartRoadmap': 'Smart Roadmap',
    'features.smartRoadmapDesc': 'Receive a personalized step-by-step roadmap with legal, tax, and operational checklists',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Simple steps to get your business UK-ready',
    'howItWorks.step1': 'Enter Business Details',
    'howItWorks.step1Desc': 'Complete our comprehensive onboarding form with your business information, products, and goals',
    'howItWorks.step2': 'Get AI Analysis',
    'howItWorks.step2Desc': 'Our AI engine analyzes your marketability and generates your UK readiness score instantly',
    'howItWorks.step3': 'Execute Your Plan',
    'howItWorks.step3Desc': 'Follow your personalized roadmap, generate documents, and connect with UK partners',
    
    // CTA Section
    'cta.title': 'Ready to Expand to the UK?',
    'cta.description': 'Join hundreds of Turkish businesses successfully entering the UK market with our AI-powered platform',
    'cta.startAnalysis': 'Start Free Analysis',
    'cta.scheduleConsult': 'Schedule Consultation',
    
    // Footer
    'footer.description': 'Empowering Turkish SMEs to expand successfully into the UK market through AI-powered insights and expert guidance.',
    'footer.platform': 'Platform',
    'footer.api': 'API',
    'footer.support': 'Support',
    'footer.helpCenter': 'Help Center',
    'footer.contact': 'Contact',
    'footer.community': 'Community',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.copyright': '© 2024 UK Bridge. All rights reserved.'
  },
  tr: {
    // Header
    'nav.features': 'Özellikler',
    'nav.pricing': 'Fiyatlandırma',
    'nav.support': 'Destek',
    'nav.login': 'Giriş',
    'nav.getStarted': 'Başlayın',
    
    // Hero Section
    'hero.badge': 'AI Destekli İngiltere Pazar Girişi',
    'hero.title': 'Türk İşletmenizi İngiltere Pazarına Genişletin',
    'hero.description': 'AI destekli Pazarlanabilirlik Puanınızı alın, özel İngiltere hazırlık yol haritanızı edinin ve İngiltere\'de işletmenizi sorunsuz bir şekilde başlatmak için doğrulanmış ortaklara erişin.',
    'hero.startJourney': 'İngiltere Yolculuğunuzu Başlatın',
    'hero.watchDemo': 'Demo İzleyin',
    
    // Features Section
    'features.title': 'İngiltere Pazar Girişi İçin İhtiyacınız Olan Her Şey',
    'features.subtitle': 'AI destekli platformumuz İngiltere pazarına genişleme sürecinin her adımında size rehberlik eder',
    'features.aiScore': 'AI Pazarlanabilirlik Puanı',
    'features.aiScoreDesc': 'Gelişmiş AI puanlama motorumuzla İngiltere pazarındaki iş potansiyelinizin anında analizini alın',
    'features.docGenerator': 'Belge Üreticisi',
    'features.docGeneratorDesc': 'Sözleşmeler, gizlilik anlaşmaları, KDV formları ve diğer önemli İngiltere iş belgelerini otomatik olarak oluşturun',
    'features.partnerMatching': 'Ortak Eşleştirme',
    'features.partnerMatchingDesc': 'İhtiyaçlarınıza uygun doğrulanmış İngiltere muhasebecileri, hukuk danışmanları ve lojistik sağlayıcılarıyla bağlantı kurun',
    'features.smartRoadmap': 'Akıllı Yol Haritası',
    'features.smartRoadmapDesc': 'Hukuki, vergi ve operasyonel kontrol listeleri ile kişiselleştirilmiş adım adım yol haritası alın',
    
    // How It Works
    'howItWorks.title': 'Nasıl Çalışır',
    'howItWorks.subtitle': 'İşletmenizi İngiltere\'ye hazır hale getirmek için basit adımlar',
    'howItWorks.step1': 'İşletme Bilgilerini Girin',
    'howItWorks.step1Desc': 'İşletme bilgileriniz, ürünleriniz ve hedeflerinizle kapsamlı başlangıç formunu doldurun',
    'howItWorks.step2': 'AI Analizi Alın',
    'howItWorks.step2Desc': 'AI motorumuz pazarlanabilirliğinizi analiz eder ve İngiltere hazırlık puanınızı anında oluşturur',
    'howItWorks.step3': 'Planınızı Uygulayın',
    'howItWorks.step3Desc': 'Kişiselleştirilmiş yol haritanızı takip edin, belgeler oluşturun ve İngiltere ortaklarıyla bağlantı kurun',
    
    // CTA Section
    'cta.title': 'İngiltere\'ye Genişlemeye Hazır mısınız?',
    'cta.description': 'AI destekli platformumuzla İngiltere pazarına başarıyla giren yüzlerce Türk işletmesine katılın',
    'cta.startAnalysis': 'Ücretsiz Analiz Başlatın',
    'cta.scheduleConsult': 'Danışmanlık Planlayın',
    
    // Footer
    'footer.description': 'AI destekli içgörüler ve uzman rehberliği aracılığıyla Türk KOBİ\'lerinin İngiltere pazarına başarıyla genişlemesini destekliyoruz.',
    'footer.platform': 'Platform',
    'footer.api': 'API',
    'footer.support': 'Destek',
    'footer.helpCenter': 'Yardım Merkezi',
    'footer.contact': 'İletişim',
    'footer.community': 'Topluluk',
    'footer.legal': 'Yasal',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Hizmet Şartları',
    'footer.cookies': 'Çerez Politikası',
    'footer.copyright': '© 2024 UK Bridge. Tüm hakları saklıdır.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
