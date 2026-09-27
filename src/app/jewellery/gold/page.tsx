'use client';

import Link from 'next/link';
import { Crown, ArrowRight, Shield } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';

const collections = [
  {
    slug: 'bridal',
    titleEn: 'Bridal Collection',
    titleHi: 'वैवाहिक संग्रह',
    descEn: 'Exquisite bridal sets and wedding jewellery',
    descHi: 'शानदार दुल्हन सेट और शादी के गहने',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070'
  },
  {
    slug: 'temple',
    titleEn: 'Temple Jewellery',
    titleHi: 'मंदिर आभूषण',
    descEn: 'Traditional South Indian temple designs',
    descHi: 'पारंपरिक दक्षिण भारतीय मंदिर डिजाइन',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2070'
  },
  {
    slug: 'daily-wear',
    titleEn: 'Daily Wear',
    titleHi: 'दैनिक पहनावा',
    descEn: 'Elegant pieces for everyday elegance',
    descHi: 'रोजमर्रा की सुंदरता के लिए सुरुचिपूर्ण',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2072'
  },
  {
    slug: 'antique',
    titleEn: 'Antique Collection',
    titleHi: 'प्राचीन संग्रह',
    descEn: 'Royal vintage and antique designs',
    descHi: 'शाही विंटेज और प्राचीन डिजाइन',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?q=80&w=2069'
  }
];

export default function GoldJewelleryPage() {
  const { language, t } = useLanguageStore();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-10 h-10 text-[#D4AF37]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('22K Gold Jewellery Collection', '22 कैरेट स्वर्ण आभूषण संग्रह')}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t(
              'BIS 916 Hallmarked Gold Jewellery with Certified Purity and Craftsmanship',
              'प्रमाणित शुद्धता और शिल्प कौशल के साथ बीआईएस 916 हॉलमार्क स्वर्ण आभूषण'
            )}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">{t('BIS 916 Hallmarked', 'बीआईएस 916 हॉलमार्क')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm">{t('100% Purity Guarantee', '100% शुद्धता गारंटी')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/jewellery/gold/${collection.slug}`}
                className="group luxury-card overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${collection.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/50 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {language === 'hi' ? collection.titleHi : collection.titleEn}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {language === 'hi' ? collection.descHi : collection.descEn}
                    </p>
                    <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                      <span>{t('View Collection', 'संग्रह देखें')}</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gradient-to-br from-[#FDFBF7] to-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-[#0B0B0C] mb-12">
            {t('Why Choose Our Gold Jewellery', 'हमारे सोने के आभूषण क्यों चुनें')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#D4AF37]">916</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t('BIS Hallmarked', 'बीआईएस हॉलमार्क')}
              </h3>
              <p className="text-gray-600">
                {t('Every piece is BIS 916 hallmarked ensuring 91.6% gold purity', 'हर टुकड़ा बीआईएस 916 हॉलमार्क है जो 91.6% सोने की शुद्धता सुनिश्चित करता है')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t('Exquisite Craftsmanship', 'शानदार शिल्प कौशल')}
              </h3>
              <p className="text-gray-600">
                {t('Handcrafted by skilled artisans with decades of experience', 'दशकों के अनुभव वाले कुशल कारीगरों द्वारा हस्तनिर्मित')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t('Lifetime Support', 'जीवन भर सहायता')}
              </h3>
              <p className="text-gray-600">
                {t('Free cleaning, polishing, and exchange services', 'मुफ्त सफाई, पॉलिशिंग और एक्सचेंज सेवाएं')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
