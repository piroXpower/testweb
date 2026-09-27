'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguageStore } from '@/store/useLanguageStore';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    titleEn: 'Timeless Bridal Elegance',
    titleHi: 'कालजयी दुल्हन की शान',
    subtitleEn: 'BIS 916 Hallmarked Gold Jewellery',
    subtitleHi: 'बीआईएस 916 हॉलमार्क स्वर्ण आभूषण',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070',
    cta: '/jewellery/gold/bridal'
  },
  {
    titleEn: 'Vedic Gemstone Power',
    titleHi: 'वैदिक रत्न की शक्ति',
    subtitleEn: 'Certified Natural Gemstones for Astrological Benefits',
    subtitleHi: 'ज्योतिषीय लाभों के लिए प्रमाणित प्राकृतिक रत्न',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070',
    cta: '/gemstones'
  },
  {
    titleEn: 'Temple & Heritage Collection',
    titleHi: 'मंदिर और विरासत संग्रह',
    subtitleEn: 'Antique Designs Inspired by Indian Royalty',
    subtitleHi: 'भारतीय राजसी परंपरा से प्रेरित प्राचीन डिजाइन',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?q=80&w=2069',
    cta: '/jewellery/gold/temple'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language, t } = useLanguageStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-[#0B0B0C]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/90 via-[#0B0B0C]/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full container-custom flex items-center">
            <div className="max-w-2xl text-white space-y-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-2 text-[#D4AF37]"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-wider uppercase">
                  {t('Exclusive Collection', 'विशेष संग्रह')}
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                {language === 'hi' ? slide.titleHi : slide.titleEn}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-200"
              >
                {language === 'hi' ? slide.subtitleHi : slide.subtitleEn}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex gap-4"
              >
                <Link href={slide.cta} className="btn-primary">
                  {t('Explore Collection', 'संग्रह देखें')}
                </Link>
                <Link href="/contact" className="btn-secondary">
                  {t('Book Appointment', 'अपॉइंटमेंट बुक करें')}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#D4AF37]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-[#D4AF37]" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-[#D4AF37]'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
