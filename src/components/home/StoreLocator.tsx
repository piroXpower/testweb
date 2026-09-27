'use client';

import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { siteConfig } from '@/config/site';

export default function StoreLocator() {
  const { language, t } = useLanguageStore();

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.pincode}`
  )}`;

  return (
    <section className="section-padding bg-[#0B0B0C] text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
            {t('Visit Our Showroom', 'हमारे शोरूम पर आएं')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t(
              'Experience our exclusive collection in person at our Mahagama showroom',
              'हमारे महागामा शोरूम में व्यक्तिगत रूप से हमारे विशेष संग्रह का अनुभव करें'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Store Information */}
          <div className="space-y-6">
            <div className="luxury-card p-8 bg-white/5 backdrop-blur-lg border-[#D4AF37]/20">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-6">
                {language === 'hi' ? siteConfig.name.hi : siteConfig.name.en}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{t('Address', 'पता')}:</p>
                    <p className="text-gray-300">
                      {siteConfig.address.line1}<br />
                      {siteConfig.address.line2}<br />
                      {siteConfig.address.city}, {siteConfig.address.district}<br />
                      {siteConfig.address.state} - {siteConfig.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{t('Contact', 'संपर्क')}:</p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-[#D4AF37] hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{t('Store Hours', 'दुकान का समय')}:</p>
                    <div className="text-gray-300 space-y-1">
                      <p>{t('Mon-Fri', 'सोम-शुक्र')}: {siteConfig.hours.weekdays}</p>
                      <p>{t('Saturday', 'शनिवार')}: {siteConfig.hours.saturday}</p>
                      <p>{t('Sunday', 'रविवार')}: {siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 btn-primary w-full flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                {t('Get Directions', 'दिशा-निर्देश प्राप्त करें')}
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="luxury-card overflow-hidden h-[500px]">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5!2d${siteConfig.coordinates.lng}!3d${siteConfig.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ5JzU5LjIiTiA4N8KwMTMnMDAuMSJF!5e0!3m2!1sen!2sin!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Swarnalankar Showroom Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
