'use client';

import Link from 'next/link';
import { Gem, ArrowRight } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { gemstoneData } from '@/config/navigation';

export default function VedicGemstoneGuide() {
  const { language, t } = useLanguageStore();

  return (
    <section className="section-padding bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gem className="w-8 h-8 text-[#D4AF37]" />
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('Vedic Gemstone Guide', 'वैदिक रत्न मार्गदर्शिका')}
            </h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t(
              'Choose the right gemstone based on your birth chart and planetary influences',
              'अपनी जन्म कुंडली और ग्रहों के प्रभाव के आधार पर सही रत्न चुनें'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gemstoneData.map((gem) => (
            <div
              key={gem.id}
              className="luxury-card hover:shadow-2xl transition-all duration-300 p-6 bg-white/5 backdrop-blur-lg border-[#D4AF37]/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-16 h-16 rounded-full flex-shrink-0"
                  style={{ backgroundColor: gem.color }}
                ></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-1">
                    {language === 'hi' ? gem.nameHi : gem.nameEn}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {language === 'hi' ? gem.planetHi : gem.planet}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">
                    {t('Benefits', 'लाभ')}:
                  </p>
                  <ul className="text-sm space-y-1">
                    {(language === 'hi' ? gem.benefitsHi : gem.benefits).slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1">•</span>
                        <span className="text-gray-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/5 rounded p-2">
                    <p className="text-gray-400">{t('Metal', 'धातु')}</p>
                    <p className="font-semibold text-[#D4AF37]">
                      {language === 'hi' ? gem.metalHi : gem.metal}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded p-2">
                    <p className="text-gray-400">{t('Day', 'दिन')}</p>
                    <p className="font-semibold text-[#D4AF37]">
                      {language === 'hi' ? gem.dayHi : gem.day}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href={`/gemstones/${gem.id}`}
                className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#0B0B0C] rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                {t('Learn More', 'और जानें')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/astro-consultation" className="btn-primary inline-flex items-center gap-2">
            {t('Get Personalized Gemstone Recommendation', 'व्यक्तिगत रत्न सिफारिश प्राप्त करें')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
