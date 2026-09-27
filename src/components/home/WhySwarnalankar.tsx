'use client';

import { Shield, Award, Sparkles, Users, Clock, Heart } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';

const features = [
  {
    icon: Shield,
    titleEn: 'BIS Certified',
    titleHi: 'बीआईएस प्रमाणित',
    descEn: '100% BIS 916 Hallmarked Gold with guaranteed purity',
    descHi: 'गारंटीकृत शुद्धता के साथ 100% बीआईएस 916 हॉलमार्क स्वर्ण'
  },
  {
    icon: Award,
    titleEn: 'Lab Certified Gems',
    titleHi: 'प्रयोगशाला प्रमाणित रत्न',
    descEn: 'Natural gemstones with authentic lab certificates',
    descHi: 'प्रामाणिक प्रयोगशाला प्रमाणपत्रों के साथ प्राकृतिक रत्न'
  },
  {
    icon: Sparkles,
    titleEn: 'Exquisite Designs',
    titleHi: 'शानदार डिजाइन',
    descEn: 'Timeless traditional and contemporary collections',
    descHi: 'कालजयी पारंपरिक और समकालीन संग्रह'
  },
  {
    icon: Users,
    titleEn: 'Expert Guidance',
    titleHi: 'विशेषज्ञ मार्गदर्शन',
    descEn: 'Personalized consultation from experienced jewelers',
    descHi: 'अनुभवी जौहरियों से व्यक्तिगत परामर्श'
  },
  {
    icon: Clock,
    titleEn: 'Lifetime Support',
    titleHi: 'जीवन भर सहायता',
    descEn: 'Free cleaning, maintenance, and buyback services',
    descHi: 'मुफ्त सफाई, रखरखाव और बायबैक सेवाएं'
  },
  {
    icon: Heart,
    titleEn: 'Trusted Legacy',
    titleHi: 'विश्वसनीय विरासत',
    descEn: 'Serving Godda and Mahagama with dedication',
    descHi: 'समर्पण के साथ गोड्डा और महागामा की सेवा'
  }
];

export default function WhySwarnalankar() {
  const { language, t } = useLanguageStore();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0C] mb-4">
            {t('Why Choose Swarnalankar?', 'स्वर्णलंकार क्यों चुनें?')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              'Experience trust, purity, and excellence in every piece',
              'हर टुकड़े में विश्वास, शुद्धता और उत्कृष्टता का अनुभव करें'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 luxury-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA8C2C] flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0C] mb-2">
                {language === 'hi' ? feature.titleHi : feature.titleEn}
              </h3>
              <p className="text-gray-600">
                {language === 'hi' ? feature.descHi : feature.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
