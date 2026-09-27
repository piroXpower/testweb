'use client';

import { use, useMemo } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MessageCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { generateWhatsAppLink } from '@/lib/utils';
import { useLanguageStore } from '@/store/useLanguageStore';

const catalogDatabase: Record<
  string,
  {
    titleEn: string;
    titleHi: string;
    descEn: string;
    descHi: string;
    items: Array<{
      nameEn: string;
      nameHi: string;
      purity: string;
      approxWeight: string;
      image: string;
    }>;
  }
> = {
  bridal: {
    titleEn: 'Bridal Gold Collection',
    titleHi: 'वैवाहिक स्वर्ण संग्रह',
    descEn: 'Regal bridal necklace sets, matha patti, and bangles hallmarked with BIS 916 purity.',
    descHi: 'शाही दुल्हन सेट, माथा पट्टी एवं कंगन, पूर्णतः बीआईएस 916 हॉलमार्क प्रमाणित।',
    items: [
      {
        nameEn: 'Royal Kundan Choker Bridal Set',
        nameHi: 'शाही कुंदन चोकर ब्राइडल सेट',
        purity: '22K (916 BIS Hallmark)',
        approxWeight: '65g - 85g',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200'
      },
      {
        nameEn: 'Heritage Rani Haar & Jhumka Set',
        nameHi: 'हेरिटेज रानी हार एवं झुमका सेट',
        purity: '22K (916 BIS Hallmark)',
        approxWeight: '45g - 60g',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200'
      }
    ]
  },
  temple: {
    titleEn: 'Temple Heritage Jewellery',
    titleHi: 'मंदिर हेरिटेज आभूषण',
    descEn: 'Traditional motifs of Goddess Lakshmi and divine deities handcrafted by master artisans.',
    descHi: 'देवी लक्ष्मी और पारंपरिक देव प्रतिमाओं से प्रेरित नक्काशीदार आभूषण।',
    items: [
      {
        nameEn: 'Lakshmi Kasu Haran Antique Necklace',
        nameHi: 'लक्ष्मी कासू हारम एंटीक हार',
        purity: '22K (916 BIS Hallmark)',
        approxWeight: '38g - 55g',
        image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200'
      },
      {
        nameEn: 'Peacock Nakshi Gold Kangan',
        nameHi: 'मयूर नक्शी स्वर्ण कंगन',
        purity: '22K (916 BIS Hallmark)',
        approxWeight: '28g - 42g',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200'
      }
    ]
  },
  'daily-wear': {
    titleEn: 'Daily Wear Gold Jewellery',
    titleHi: 'दैनिक उपयोग स्वर्ण आभूषण',
    descEn: 'Lightweight, durable, and sophisticated gold essentials designed for modern lifestyles.',
    descHi: 'हल्के, मजबूत और सुरुचिपूर्ण आभूषण जो दैनिक उपयोग के लिए उपयुक्त हैं।',
    items: [
      {
        nameEn: 'Minimalist Floral Gold Chain & Pendant',
        nameHi: 'फ्लोरल गोल्ड चैन एवं पेंडेंट',
        purity: '22K (916 BIS Hallmark)',
        approxWeight: '8g - 14g',
        image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200'
      },
      {
        nameEn: 'Classic Comfort Fit Gold Bangles (Pair)',
        nameHi: 'क्लासिक गोल्ड चूड़ियां (जोड़ी)',
        purity: '22K (916 BIS Hallmark)',
        approxWeight: '16g - 24g',
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?q=80&w=1200'
      }
    ]
  },
  antique: {
    titleEn: 'Vintage Antique Gold Collection',
    titleHi: 'प्राचीन विंटेज स्वर्ण संग्रह',
    descEn: 'Exclusive matte antique finish pieces inspired by historic Indian royalty.',
    descHi: 'भारतीय राजसी विरासत और प्राचीन मैट फ़िनिश से सज्जित कलाकृतियाँ।',
    items: [
      {
        nameEn: 'Imperial Matte Finish Filigree Choker',
        nameHi: 'इंपीरियल मैट फ़िनिश फिलीग्री चोकर',
        purity: '22K (916 BIS Hallmark)',
        approxWeight: '40g - 58g',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200'
      }
    ]
  }
};

export default function GoldCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const { language, t } = useLanguageStore();

  const categoryData = useMemo(() => catalogDatabase[resolvedParams.category.toLowerCase()], [resolvedParams.category]);

  if (!categoryData) {
    notFound();
  }

  const handleProductWhatsApp = (productName: string, purity: string) => {
    const message =
      `*Swarnalankar Jewellery - Product Inquiry*\n\n` +
      `Hello! I want to know about this product: *${productName}*.\n` +
      `Purity: ${purity}\n` +
      `Category: ${language === 'hi' ? categoryData.titleHi : categoryData.titleEn}\n\n` +
      `Please provide current availability, making charges, and price estimates.`;

    window.open(generateWhatsAppLink(siteConfig.contact.whatsapp, message), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-12">
      <div className="container-custom">
        <Link
          href="/jewellery/gold"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#D4AF37] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('Back to Gold Collections', 'स्वर्ण संग्रह पर वापस जाएं')}
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0B0B0C] mb-3">
            {language === 'hi' ? categoryData.titleHi : categoryData.titleEn}
          </h1>
          <p className="text-gray-600 max-w-3xl">
            {language === 'hi' ? categoryData.descHi : categoryData.descEn}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.items.map((item, index) => {
            const productName = language === 'hi' ? item.nameHi : item.nameEn;
            return (
              <div key={index} className="luxury-card overflow-hidden flex flex-col justify-between">
                <div className="aspect-[4/3] relative overflow-hidden bg-neutral-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
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
                      <span className="font-semibold">{t('Approx. Weight', 'अनुमानित वजन')}:</span> {item.approxWeight}
                    </p>
                  </div>

                  <button
                    onClick={() => handleProductWhatsApp(productName, item.purity)}
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
