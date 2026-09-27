'use client';

import Link from 'next/link';
import { Calculator, ShieldCheck, Coins, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';

export default function ServicesPage() {
  const { t } = useLanguageStore();

  const services = [
    {
      titleEn: 'Live Metal Rate Calculator',
      titleHi: 'लाइव धातु दर कैलकुलेटर',
      descEn: 'Compute real-time 22K/24K gold and silver values with exact making charges and GST breakdown.',
      descHi: 'सटीक बनावट शुल्क और जीएसटी के साथ वर्तमान सोने-चांदी के मूल्यों की गणना करें।',
      icon: Calculator,
      href: '/rate-calculator'
    },
    {
      titleEn: 'Gemstone Certificate Verification',
      titleHi: 'रत्न प्रमाणपत्र सत्यापन',
      descEn: 'Verify government and certified laboratory test reports for natural gemstones instantly.',
      descHi: 'प्राकृतिक रत्नों के प्रामाणिक परीक्षण प्रमाणपत्रों की ऑनलाइन पुष्टि करें।',
      icon: ShieldCheck,
      href: '/verify-certificate'
    },
    {
      titleEn: 'Swarna Bachat Yojana (Gold Scheme)',
      titleHi: 'स्वर्ण बचत योजना',
      descEn: 'Monthly systematic gold savings plan with a 12th-month bonus contribution from our store.',
      descHi: '11 महीने का भुगतान करने पर 12वें महीने के बोनस के साथ आसान स्वर्ण बचत योजना।',
      icon: Coins,
      href: '/gold-scheme'
    },
    {
      titleEn: 'Vedic Astrology Consultation',
      titleHi: 'वैदिक ज्योतिष परामर्श',
      descEn: 'Personalized birth chart (kundali) analysis to identify auspicious ratnas and planetary remedies.',
      descHi: 'जन्म कुंडली के आधार पर अनुकूल रत्नों और ज्योतिषीय उपायों हेतु व्यक्तिगत परामर्श।',
      icon: Sparkles,
      href: '/astro-consultation'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B0C] mb-4">
            {t('Our Services & Tools', 'हमारी सेवाएं एवं सुविधाएं')}
          </h1>
          <p className="text-gray-600 text-lg">
            {t(
              'Transparent pricing, authenticity verification, and personalized gemstone consultation.',
              'पारदर्शी मूल्य निर्धारण, प्रामाणिकता सत्यापन और व्यक्तिगत रत्न परामर्श सेवाएं।'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div key={index} className="luxury-card p-8 flex flex-col justify-between hover:shadow-2xl transition-all">
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#AA8C2C] mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B0B0C] mb-3">
                    {t(svc.titleEn, svc.titleHi)}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t(svc.descEn, svc.descHi)}
                  </p>
                </div>

                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 font-semibold text-[#AA8C2C] hover:text-[#38000A] transition-colors"
                >
                  <span>{t('Access Service', 'सेवा का उपयोग करें')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
