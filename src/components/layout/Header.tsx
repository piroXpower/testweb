'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { navigation } from '@/config/navigation';
import { useLanguageStore } from '@/store/useLanguageStore';
import LanguageSwitcher from './LanguageSwitcher';
import LiveRateTicker from '../home/LiveRateTicker';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, t } = useLanguageStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#38000A] to-[#0B0B0C] text-[#D4AF37] py-2 px-4">
        <div className="container-custom">
          <LiveRateTicker />
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        {/* Top Contact Bar */}
        <div className="border-b border-[#D4AF37]/20 hidden md:block">
          <div className="container-custom py-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-gray-700">
                    {siteConfig.address.city}, {siteConfig.address.district}, {siteConfig.address.state}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-gray-700">{t(siteConfig.hours.weekdays, 'सोम-शुक्र: 10:00-20:00')}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-[#38000A] hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">{siteConfig.contact.phone}</span>
                </a>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] bg-clip-text text-transparent">
                {language === 'hi' ? siteConfig.name.hi : siteConfig.name.en}
              </span>
              <span className="text-xs md:text-sm text-gray-600 mt-1">
                {language === 'hi' ? siteConfig.tagline.hi : siteConfig.tagline.en}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.main.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="text-gray-800 hover:text-[#D4AF37] font-medium transition-colors py-2"
                  >
                    {language === 'hi' ? item.labelHi : item.labelEn}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-2xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#D4AF37]/20">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-6 py-3 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                        >
                          {language === 'hi' ? subItem.labelHi : subItem.labelEn}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-800 hover:text-[#D4AF37]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D4AF37]/20 bg-white">
            <nav className="container-custom py-4 space-y-2">
              <div className="flex items-center justify-between mb-4">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-[#38000A] hover:text-[#D4AF37]"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-semibold">{siteConfig.contact.phone}</span>
                </a>
                <LanguageSwitcher />
              </div>
              {navigation.main.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-800 hover:text-[#D4AF37] font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === 'hi' ? item.labelHi : item.labelEn}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block py-2 text-sm text-gray-600 hover:text-[#D4AF37]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {language === 'hi' ? subItem.labelHi : subItem.labelEn}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
