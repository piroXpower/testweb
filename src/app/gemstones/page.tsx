'use client';

import Link from 'next/link';
import { Gem, ArrowRight, Shield, Award } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { gemstoneData } from '@/config/navigation';

export default function GemstonesPage() {
  const { language, t } = useLanguageStore();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gem className="w-10 h-10 text-[#D4AF37]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('Certified Vedic Gemstones', 'प्रमाणित वैदिक रत्न')}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t(
              '100% Natural, Lab-Certified Gemstones for Astrological Benefits and Prosperity',
              'ज्योतिषीय लाभ और समृद्धि के लिए 100% प्राकृतिक, प्रयोगशाला-प्रमाणित रत्न'
            )}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">{t('Lab Certified', 'प्रयोगशाला प्रमाणित')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">{t('100% Natural', '100% प्राकृतिक')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Gem className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">{t('Authentic Origins', 'प्रामाणिक उत्पत्ति')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gemstones Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gemstoneData.map((gem) => (
              <div
                key={gem.id}
                className="luxury-card hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `radial-gradient(circle at center, ${gem.color}, transparent)`
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-32 h-32 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: gem.color }}
                    ></div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0B0B0C] mb-2">
                    {language === 'hi' ? gem.nameHi : gem.nameEn}
                  </h3>
                  <p className="text-[#D4AF37] font-semibold mb-4">
                    {language === 'hi' ? gem.planetHi : gem.planet}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1">
                        {t('Benefits', 'लाभ')}:
                      </p>
                      <ul className="text-sm space-y-1">
                        {(language === 'hi' ? gem.benefitsHi : gem.benefits).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#D4AF37] mt-1">✦</span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-500">{t('Metal', 'धातु')}</p>
                        <p className="font-semibold text-sm">
                          {language === 'hi' ? gem.metalHi : gem.metal}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{t('Finger', 'उंगली')}</p>
                        <p className="font-semibold text-sm">
                          {language === 'hi' ? gem.fingerHi : gem.finger}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{t('Day', 'दिन')}</p>
                        <p className="font-semibold text-sm">
                          {language === 'hi' ? gem.dayHi : gem.day}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/gemstones/${gem.id}`}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 btn-primary"
                  >
                    {t('View Details', 'विवरण देखें')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#FDFBF7] to-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0C] mb-4">
            {t('Need Expert Guidance?', 'विशेषज्ञ मार्गदर्शन चाहिए?')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {t(
              'Consult with our astrology experts to find the perfect gemstone for your birth chart',
              'अपनी जन्म कुंडली के लिए सही रत्न खोजने के लिए हमारे ज्योतिष विशेषज्ञों से परामर्श करें'
            )}
          </p>
          <Link href="/astro-consultation" className="btn-primary inline-flex items-center gap-2">
            {t('Book Consultation', 'परामर्श बुक करें')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
