'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { navigation } from '@/config/navigation';
import { useLanguageStore } from '@/store/useLanguageStore';

export default function Footer() {
  const { language, t } = useLanguageStore();

  return (
    <footer className="bg-gradient-to-br from-[#0B0B0C] to-[#38000A] text-[#FDFBF7]">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] bg-clip-text text-transparent mb-4">
              {language === 'hi' ? siteConfig.name.hi : siteConfig.name.en}
            </h3>
            <p className="text-[#D4AF37]/80 text-sm mb-6">
              {language === 'hi' ? siteConfig.tagline.hi : siteConfig.tagline.en}
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4 text-lg">
              {t('Quick Links', 'त्वरित लिंक')}
            </h4>
            <ul className="space-y-2">
              {navigation.main.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#FDFBF7]/70 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {language === 'hi' ? item.labelHi : item.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4 text-lg">
              {t('Contact Us', 'संपर्क करें')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <span className="text-sm text-[#FDFBF7]/80">
                  {siteConfig.address.line1}<br />
                  {siteConfig.address.line2}<br />
                  {siteConfig.address.city}, {siteConfig.address.district}<br />
                  {siteConfig.address.state} - {siteConfig.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-sm text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-[#FDFBF7]/80 hover:text-[#D4AF37] transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Store Hours */}
          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4 text-lg">
              {t('Store Hours', 'दुकान का समय')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#FDFBF7]">
                    {t('Monday - Friday', 'सोमवार - शुक्रवार')}
                  </p>
                  <p className="text-[#FDFBF7]/70">{siteConfig.hours.weekdays}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#FDFBF7]">
                    {t('Saturday', 'शनिवार')}
                  </p>
                  <p className="text-[#FDFBF7]/70">{siteConfig.hours.saturday}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="font-medium text-[#FDFBF7]">
                    {t('Sunday', 'रविवार')}
                  </p>
                  <p className="text-[#FDFBF7]/70">{siteConfig.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#D4AF37]">BIS</span>
              </div>
              <p className="text-xs text-[#FDFBF7]/70">
                {t('Hallmarked', 'हॉलमार्क')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#D4AF37]">916</span>
              </div>
              <p className="text-xs text-[#FDFBF7]/70">
                {t('Pure Gold', 'शुद्ध सोना')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#D4AF37]">✓</span>
              </div>
              <p className="text-xs text-[#FDFBF7]/70">
                {t('Certified', 'प्रमाणित')}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#D4AF37]/20 text-center text-sm text-[#FDFBF7]/60">
          <p>
            © {new Date().getFullYear()} {siteConfig.name.en}. {t('All rights reserved.', 'सर्वाधिकार सुरक्षित।')}
          </p>
          <p className="mt-2">
            {t(
              'Designed with tradition, crafted with precision.',
              'परंपरा के साथ डिज़ाइन किया गया, सटीकता के साथ तैयार किया गया।'
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
