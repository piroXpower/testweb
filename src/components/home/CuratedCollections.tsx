'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';

const collections = [
  {
    titleEn: 'Bridal Collection',
    titleHi: 'वैवाहिक संग्रह',
    descEn: 'Exquisite bridal sets for your special day',
    descHi: 'आपके विशेष दिन के लिए शानदार दुल्हन सेट',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070',
    href: '/jewellery/gold/bridal'
  },
  {
    titleEn: 'Temple Jewellery',
    titleHi: 'मंदिर आभूषण',
    descEn: 'Traditional South Indian temple designs',
    descHi: 'पारंपरिक दक्षिण भारतीय मंदिर डिजाइन',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2070',
    href: '/jewellery/gold/temple'
  },
  {
    titleEn: 'Daily Wear',
    titleHi: 'दैनिक पहनावा',
    descEn: 'Elegant pieces for everyday elegance',
    descHi: 'रोजमर्रा की सुंदरता के लिए सुरुचिपूर्ण',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2072',
    href: '/jewellery/gold/daily-wear'
  },
  {
    titleEn: 'Vedic Gemstones',
    titleHi: 'वैदिक रत्न',
    descEn: 'Certified natural gemstones for prosperity',
    descHi: 'समृद्धि के लिए प्रमाणित प्राकृतिक रत्न',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070',
    href: '/gemstones'
  }
];

export default function CuratedCollections() {
  const { language, t } = useLanguageStore();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0C] mb-4">
            {t('Curated Collections', 'चयनित संग्रह')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              'Discover our handpicked collections blending tradition with contemporary elegance',
              'परंपरा को समकालीन सुंदरता के साथ मिश्रित हमारे हस्तचयनित संग्रह की खोज करें'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={index}
              href={collection.href}
              className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[3/4] relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${collection.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/50 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {language === 'hi' ? collection.titleHi : collection.titleEn}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {language === 'hi' ? collection.descHi : collection.descEn}
                  </p>
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                    <span>{t('Explore', 'देखें')}</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
