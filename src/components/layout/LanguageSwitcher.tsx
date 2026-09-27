'use client';

import { useLanguageStore } from '@/store/useLanguageStore';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex items-center gap-2 bg-[#FDFBF7] border border-[#D4AF37]/30 rounded-full p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#0B0B0C]'
            : 'text-gray-600 hover:text-[#D4AF37]'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('hi')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'hi'
            ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#0B0B0C]'
            : 'text-gray-600 hover:text-[#D4AF37]'
        }`}
      >
        हिं
      </button>
    </div>
  );
}
