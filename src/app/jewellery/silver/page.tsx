'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';

const silverCollections = [
  {
    slug: 'ornaments',
    titleEn: 'Silver Ornaments',
    titleHi: 'चांदी के गहने',
    descEn: 'Payals, anklets, bracelets, and rings crafted in 925 sterling silver.',
    descHi: '925 स्टर्लिंग चांदी में निर्मित पायल, कड़े, ब्रेसलेट और अंगूठियां।',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200'
  },
  {
    slug: 'puja',
    titleEn: 'Silver Puja Articles',
    titleHi: 'पूजा सामग्री व बर्तन',
    descEn: 'Pure silver thalis, diyas, kalash, and idols for sacred ceremonies.',
    descHi: 'धार्मिक अनुष्ठानों के लिए शुद्ध चांदी की थाली, दीपक, कलश और मूर्तियां।',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200'
  },
  {
    slug: 'coins',
    titleEn: 'Pure Silver Coins & Bars',
    titleHi: 'चांदी के सिक्के एवं सिल्लियां',
    descEn: '999 pure silver coins with Lakshmi-Ganesh impressions for gifting and investment.',
    descHi: 'उपहार और निवेश के लिए 999 शुद्ध चांदी के लक्ष्मी-गणेश अंकित सिक्के।',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?q=80&w=1200'
  }
];

export default function SilverJewelleryPage() {
  const { language, t } = useLanguageStore();

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <section className="section-padding bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-10 h-10 text-[#D4AF37]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('Pure Silver & 925 Sterling Silver', 'शुद्ध चांदी एवं 925 स्टर्लिंग चांदी')}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            {t(
              'Hallmarked silver articles, divine puja vessels, and designer jewelry',
              'हॉलमार्क प्रमाणित चांदी के आभूषण, पूजा पात्र और उपहार सामग्री'
            )}
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm">{t('999 Purity & 925 Sterling Guaranteed', '999 शुद्धता और 925 स्टर्लिंग की गारंटी')}</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {silverCollections.map((col) => (
              <Link
                key={col.slug}
                href={`/jewellery/silver/${col.slug}`}
                className="group luxury-card overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-neutral-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${col.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-2xl font-bold mb-1">
                      {language === 'hi' ? col.titleHi : col.titleEn}
                    </h2>
                    <p className="text-xs text-gray-300 mb-3">
                      {language === 'hi' ? col.descHi : col.descEn}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37]">
                      {t('View Collection', 'संग्रह देखें')}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
