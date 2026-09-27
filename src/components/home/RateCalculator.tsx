'use client';

import { useState } from 'react';
import { Calculator, Download, MessageCircle } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useRateStore } from '@/store/useRateStore';
import { formatCurrency, calculateGoldPrice, generateWhatsAppLink } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export default function RateCalculator() {
  const { language, t } = useLanguageStore();
  const { rates, getRateByType } = useRateStore();
  
  const [selectedMetal, setSelectedMetal] = useState('GOLD_22K');
  const [weight, setWeight] = useState(10);
  const [makingCharge, setMakingCharge] = useState(10);

  const rate = getRateByType(selectedMetal);
  const calculation = rate 
    ? calculateGoldPrice(weight, rate.ratePerGram, makingCharge, 3)
    : null;

  const handleWhatsAppQuote = () => {
    if (!calculation || !rate) return;
    
    const message = `*Swarnalankar Jewellery - Gold Quote*\n\n` +
      `Metal: ${language === 'hi' ? rate.nameHi : rate.nameEn}\n` +
      `Weight: ${weight}g\n` +
      `Rate: ${formatCurrency(rate.ratePerGram, language)}/g\n` +
      `Metal Cost: ${formatCurrency(calculation.metalCost, language)}\n` +
      `Making Charge (${makingCharge}%): ${formatCurrency(calculation.makingCharge, language)}\n` +
      `GST (3%): ${formatCurrency(calculation.gst, language)}\n` +
      `*Total: ${formatCurrency(calculation.totalCost, language)}*\n\n` +
      `I would like to know more about this.`;
    
    window.open(generateWhatsAppLink(siteConfig.contact.whatsapp, message), '_blank');
  };

  return (
    <section className="section-padding bg-gradient-to-br from-[#FDFBF7] to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="w-8 h-8 text-[#D4AF37]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0C]">
              {t('Live Gold Price Calculator', 'लाइव स्वर्ण मूल्य कैलकुलेटर')}
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              'Get instant price estimates with current market rates, making charges, and GST',
              'वर्तमान बाज़ार दरों, बनावट शुल्क और जीएसटी के साथ तत्काल मूल्य अनुमान प्राप्त करें'
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto luxury-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('Select Metal Type', 'धातु प्रकार चुनें')}
                </label>
                <select
                  value={selectedMetal}
                  onChange={(e) => setSelectedMetal(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none bg-white"
                >
                  {rates.map((rate) => (
                    <option key={rate.type} value={rate.type}>
                      {language === 'hi' ? rate.nameHi : rate.nameEn} - {formatCurrency(rate.ratePerGram, language)}/g
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('Weight (grams)', 'वजन (ग्राम)')}
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  min="0"
                  step="0.1"
                  className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('Making Charge', 'बनावट शुल्क')}: {makingCharge}%
                </label>
                <input
                  type="range"
                  value={makingCharge}
                  onChange={(e) => setMakingCharge(parseFloat(e.target.value))}
                  min="6"
                  max="20"
                  step="1"
                  className="w-full accent-[#D4AF37]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>6%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>

            {/* Calculation Display */}
            {calculation && rate && (
              <div className="bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">
                  {t('Price Breakdown', 'मूल्य विवरण')}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-[#D4AF37]/20">
                    <span>{t('Metal Cost', 'धातु लागत')}:</span>
                    <span className="font-semibold">{formatCurrency(calculation.metalCost, language)}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#D4AF37]/20">
                    <span>{t('Making Charge', 'बनावट शुल्क')} ({makingCharge}%):</span>
                    <span className="font-semibold">{formatCurrency(calculation.makingCharge, language)}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#D4AF37]/20">
                    <span>{t('GST', 'जीएसटी')} (3%):</span>
                    <span className="font-semibold">{formatCurrency(calculation.gst, language)}</span>
                  </div>
                  <div className="flex justify-between pt-2 text-xl font-bold text-[#D4AF37]">
                    <span>{t('Total Amount', 'कुल राशि')}:</span>
                    <span>{formatCurrency(calculation.totalCost, language)}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={handleWhatsAppQuote}
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('Send Quote to WhatsApp', 'व्हाट्सएप पर भेजें')}
                  </button>
                  <p className="text-xs text-center text-gray-400">
                    {t('* Final price may vary based on actual design', '* वास्तविक डिजाइन के आधार पर अंतिम मूल्य भिन्न हो सकता है')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
