'use client';

import { use, useMemo } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Gem, MessageCircle, ShieldCheck, Sparkles, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { gemstoneData } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { generateWhatsAppLink } from '@/lib/utils';
import { useLanguageStore } from '@/store/useLanguageStore';

export default function GemstoneDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { language, t } = useLanguageStore();

  const gem = useMemo(
    () => gemstoneData.find((g) => g.id.toLowerCase() === resolvedParams.id.toLowerCase()),
    [resolvedParams.id]
  );

  if (!gem) {
    notFound();
  }

  const handleWhatsAppInquiry = () => {
    const gemName = language === 'hi' ? gem.nameHi : gem.nameEn;
    const planetName = language === 'hi' ? gem.planetHi : gem.planet;
    const message =
      `*Swarnalankar Jewellery - Gemstone Inquiry*\n\n` +
      `Hello! I want to know about this product: *${gemName}* (${planetName}).\n` +
      `Could you please share the available carat options, lab certifications, and current pricing?`;

    window.open(generateWhatsAppLink(siteConfig.contact.whatsapp, message), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12">
      <div className="container-custom">
        <Link
          href="/gemstones"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#D4AF37] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('Back to All Gemstones', 'सभी रत्नों पर वापस जाएं')}
        </Link>

        <div className="luxury-card overflow-hidden grid lg:grid-cols-2 gap-10 p-8 md:p-12">
          {/* Gemstone Visual Display */}
          <div className="relative min-h-[380px] rounded-xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 to-[#1A0005]">
            <div
              className="absolute inset-0 opacity-40 blur-2xl"
              style={{
                background: `radial-gradient(circle at center, ${gem.color}, transparent 70%)`
              }}
            />
            <div
              className="w-48 h-48 rounded-full shadow-2xl relative z-10 border-4 border-white/20 transition-transform duration-500 hover:scale-105"
              style={{ backgroundColor: gem.color }}
            />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-[#D4AF37] border border-[#D4AF37]/30">
              <ShieldCheck className="w-4 h-4" />
              {t('100% Lab Certified Vedic Quality', '100% प्रयोगशाला प्रमाणित वैदिक गुणवत्ता')}
            </span>
          </div>

          {/* Details & CTA */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {language === 'hi' ? gem.planetHi : gem.planet}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#0B0B0C] mb-4">
                {language === 'hi' ? gem.nameHi : gem.nameEn}
              </h1>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {t(
                  'Unheated and untreated natural astrological gemstone energized under precise Vedic protocols.',
                  'प्राकृतिक और शुद्ध ज्योतिषीय रत्न, जिसे पूर्ण वैदिक विधि एवं अनुष्ठान द्वारा सिद्ध किया गया है।'
                )}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3.5 bg-neutral-100 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase">{t('Recommended Metal', 'सुझावित धातु')}</p>
                  <p className="font-semibold text-gray-800">{language === 'hi' ? gem.metalHi : gem.metal}</p>
                </div>
                <div className="p-3.5 bg-neutral-100 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase">{t('Wearing Finger', 'धारण उंगली')}</p>
                  <p className="font-semibold text-gray-800">{language === 'hi' ? gem.fingerHi : gem.finger}</p>
                </div>
                <div className="p-3.5 bg-neutral-100 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase">{t('Auspicious Day', 'शुभ दिन')}</p>
                  <p className="font-semibold text-gray-800">{language === 'hi' ? gem.dayHi : gem.day}</p>
                </div>
                <div className="p-3.5 bg-neutral-100 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase">{t('Certification', 'प्रमाणन')}</p>
                  <p className="font-semibold text-gray-800">{t('Govt Approved Lab', 'सरकारी मान्यता प्राप्त लैब')}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                  {t('Key Astrological Benefits', 'प्रमुख ज्योतिषीय लाभ')}
                </h3>
                <ul className="space-y-2">
                  {(language === 'hi' ? gem.benefitsHi : gem.benefits).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#AA8C2C] flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-base shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                {t('Inquire on WhatsApp', 'व्हाट्सएप पर जानकारी प्राप्त करें')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
