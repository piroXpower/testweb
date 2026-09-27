'use client';

import { Star, Quote } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';

const testimonials = [
  {
    nameEn: 'Priya Sharma',
    nameHi: 'प्रिया शर्मा',
    location: 'Godda',
    ratingEn: 'Excellent bridal collection! The quality and designs are outstanding.',
    ratingHi: 'उत्कृष्ट वैवाहिक संग्रह! गुणवत्ता और डिजाइन शानदार हैं।',
    rating: 5
  },
  {
    nameEn: 'Rajesh Kumar',
    nameHi: 'राजेश कुमार',
    location: 'Mahagama',
    ratingEn: 'Purchased a Blue Sapphire based on their astrology consultation. Very satisfied!',
    ratingHi: 'उनके ज्योतिष परामर्श के आधार पर नीलम खरीदा। बहुत संतुष्ट हूं!',
    rating: 5
  },
  {
    nameEn: 'Anita Devi',
    nameHi: 'अनिता देवी',
    location: 'Godda',
    ratingEn: 'Trusted shop with genuine BIS hallmarked gold. Fair pricing and great service.',
    ratingHi: 'वास्तविक बीआईएस हॉलमार्क स्वर्ण वाली विश्वसनीय दुकान। उचित मूल्य और बेहतरीन सेवा।',
    rating: 5
  }
];

export default function CustomerTestimonials() {
  const { language, t } = useLanguageStore();

  return (
    <section className="section-padding bg-gradient-to-br from-[#FDFBF7] to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0C] mb-4">
            {t('Customer Stories', 'ग्राहक प्रशंसापत्र')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              'Hear what our valued customers say about their experience',
              'हमारे मूल्यवान ग्राहकों का अनुभव सुनें'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="luxury-card p-6 hover:shadow-2xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#D4AF37] mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">
                "{language === 'hi' ? testimonial.ratingHi : testimonial.ratingEn}"
              </p>

              <div className="border-t border-[#D4AF37]/20 pt-4">
                <p className="font-bold text-[#0B0B0C]">
                  {language === 'hi' ? testimonial.nameHi : testimonial.nameEn}
                </p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
