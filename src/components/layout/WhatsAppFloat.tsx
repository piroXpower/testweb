'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { generateWhatsAppLink } from '@/lib/utils';
import { useLanguageStore } from '@/store/useLanguageStore';

export default function WhatsAppFloat() {
  const { t } = useLanguageStore();

  const message = t(
    `Hello! I'm interested in learning more about Swarnalankar Jewellery and Gemstones.`,
    `नमस्ते! मैं स्वर्णलंकार ज्वेलरी और रत्नों के बारे में अधिक जानने में रुचि रखता/रखती हूं।`
  );

  const whatsappLink = generateWhatsAppLink(siteConfig.contact.whatsapp, message);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="WhatsApp"
    >
      <div className="relative">
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#0B0B0C] text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          <span className="text-sm font-medium">
            {t('Chat with us on WhatsApp', 'व्हाट्सएप पर चैट करें')}
          </span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-[#0B0B0C] border-b-8 border-b-transparent"></div>
          </div>
        </div>
      </div>
    </a>
  );
}
