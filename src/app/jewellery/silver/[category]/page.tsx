'use client';

import { use, useMemo } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MessageCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { generateWhatsAppLink } from '@/lib/utils';
import { useLanguageStore } from '@/store/useLanguageStore';

const silverCatalog: Record<
  string,
  {
    titleEn: string;
    titleHi: string;
    items: Array<{
      nameEn: string;
      nameHi: string;
      purity: string;
      weight: string;
      image: string;
    }>;
  }
> = {
  ornaments: {
    titleEn: '925 Sterling Silver Ornaments',
    titleHi: '925 स्टर्लिंग चांदी के गहने',
    items: [
      {
        nameEn: 'Designer Antique Silver Payal (Pair)',
        nameHi: 'डिज़ाइनर एंटीक सिल्वर पायल (जोड़ी)',
        purity: '925 Sterling Silver',
        weight: '60g - 110g',
        image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200'
      },
      {
        nameEn: 'Handmade Solid Silver Kada',
        nameHi: 'हस्तनिर्मित ठोस चांदी का कड़ा',
        purity: '925 Sterling Silver',
        weight: '35g - 65g',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200'
      }
    ]
  },
  puja: {
    titleEn: 'Silver Puja Articles & Utensils',
    titleHi: 'चांदी पूजा सामग्री व बर्तन',
    items: [
      {
        nameEn: 'Embossed Silver Puja Thali Set with Diya',
        nameHi: 'नक्काशीदार चांदी पूजा थाली सेट एवं दीया',
        purity: '999 Pure Silver',
        weight: '150g - 350g',
        image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200'
      }
    ]
  },
  coins: {
    titleEn: '999 Pure Silver Coins & Bars',
    titleHi: '999 शुद्ध चांदी सिक्के और सिल्लियां',
    items: [
      {
        nameEn: 'Lakshmi Ganesh 999 Silver Coin',
        nameHi: 'श्री लक्ष्मी गणेश 999 चांदी सिक्का',
        purity: '999 Fine Silver',
        weight: '10g / 20g / 50g / 100g',
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?q=80&w=1200'
      }
    ]
  }
};

export default function SilverCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const { language, t } = useLanguageStore();

  const data = useMemo(() => silverCatalog[resolvedParams.category.toLowerCase()], [resolvedParams.category]);

  if (!data) {
    notFound();
  }

  const handleInquiry = (productName: string, purity: string) => {
    const message =
      `*Swarnalankar Jewellery - Silver Product Inquiry*\n\n` +
      `Hello! I want to know about this product: *${productName}*.\n` +
      `Purity: ${purity}\n` +
      `Category: ${language === 'hi' ? data.titleHi : data.titleEn}\n\n` +
      `Please share availability and current pricing details.`;

    window.open(generateWhatsAppLink(siteConfig.contact.whatsapp, message), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12">
      <div className="container-custom">
        <Link
          href="/jewellery/silver"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#D4AF37] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('Back to Silver Categories', 'चांदी श्रेणियों पर वापस जाएं')}
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-[#0B0B0C] mb-8">
          {language === 'hi' ? data.titleHi : data.titleEn}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, idx) => {
            const productName = language === 'hi' ? item.nameHi : item.nameEn;
            return (
              <div key={idx} className="luxury-card overflow-hidden flex flex-col justify-between">
                <div className="aspect-[4/3] relative bg-neutral-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#D4AF37] text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 border border-[#D4AF37]/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {item.purity}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#0B0B0C] mb-2">{productName}</h3>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">{t('Weight Options', 'वजन विकल्प')}:</span> {item.weight}
                    </p>
                  </div>

                  <button
                    onClick={() => handleInquiry(productName, item.purity)}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-3 text-sm font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t('Want to know about this product', 'इस उत्पाद के बारे में जानकारी प्राप्त करें')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
