'use client';

import { useState } from 'react';
import { Calculator, Download, MessageCircle, TrendingUp } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useRateStore } from '@/store/useRateStore';
import { formatCurrency, calculateGoldPrice, generateWhatsAppLink, gramsToTola } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export default function RateCalculatorPage() {
  const { language, t } = useLanguageStore();
  const { rates, getRateByType } = useRateStore();
  
  const [selectedMetal, setSelectedMetal] = useState('GOLD_22K');
  const [weight, setWeight] = useState(10);
  const [weightUnit, setWeightUnit] = useState<'grams' | 'tola'>('grams');
  const [makingCharge, setMakingCharge] = useState(10);
  const [stoneWeight, setStoneWeight] = useState(0);

  const rate = getRateByType(selectedMetal);
  
  const effectiveWeight = weightUnit === 'tola' 
    ? weight * 11.664 - stoneWeight 
    : weight - stoneWeight;
    
  const calculation = rate 
    ? calculateGoldPrice(effectiveWeight, rate.ratePerGram, makingCharge, 3)
    : null;

  const handleWhatsAppQuote = () => {
    if (!calculation || !rate) return;
    
    const message = `*Swarnalankar Jewellery - Price Quote*\n\n` +
      `Metal: ${language === 'hi' ? rate.nameHi : rate.nameEn}\n` +
      `Weight: ${weight} ${weightUnit}\n` +
      `${stoneWeight > 0 ? `Stone Weight: ${stoneWeight}g\n` : ''}` +
      `Net Metal: ${effectiveWeight.toFixed(2)}g\n` +
      `Rate: ${formatCurrency(rate.ratePerGram, language)}/g\n\n` +
      `Metal Cost: ${formatCurrency(calculation.metalCost, language)}\n` +
      `Making Charge (${makingCharge}%): ${formatCurrency(calculation.makingCharge, language)}\n` +
      `GST (3%): ${formatCurrency(calculation.gst, language)}\n` +
      `*Total: ${formatCurrency(calculation.totalCost, language)}*\n\n` +
      `I would like to know more about this.`;
    
    window.open(generateWhatsAppLink(siteConfig.contact.whatsapp, message), '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="w-10 h-10 text-[#D4AF37]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('Live Gold & Silver Rate Calculator', 'लाइव सोना-चांदी दर कैलकुलेटर')}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(
              'Get instant price estimates with current market rates, making charges, and GST',
              'वर्तमान बाजार दरों, बनावट शुल्क और जीएसटी के साथ तत्काल मूल्य अनुमान प्राप्त करें'
            )}
          </p>
        </div>
      </section>

      {/* Live Rates Display */}
      <section className="py-8 bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C]">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-[#0B0B0C]" />
            <h2 className="text-2xl font-bold text-[#0B0B0C]">
              {t('Today\'s Live Rates', 'आज की लाइव दरें')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {rates.map((rate) => (
              <div key={rate.type} className="bg-white/20 backdrop-blur-md rounded-lg p-4 text-center">
                <p className="text-sm text-[#0B0B0C] mb-1">
                  {language === 'hi' ? rate.nameHi : rate.nameEn}
                </p>
                <p className="text-xl font-bold text-[#0B0B0C]">
                  {formatCurrency(rate.ratePerGram, language)}/g
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="luxury-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0B0B0C] mb-6">
                  {t('Calculate Price', 'मूल्य की गणना करें')}
                </h3>

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
                        {language === 'hi' ? rate.nameHi : rate.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('Weight Unit', 'वजन इकाई')}
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setWeightUnit('grams')}
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                        weightUnit === 'grams'
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#0B0B0C]'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t('Grams', 'ग्राम')}
                    </button>
                    <button
                      onClick={() => setWeightUnit('tola')}
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                        weightUnit === 'tola'
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-[#0B0B0C]'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t('Tola', 'तोला')}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('Weight', 'वजन')}: {weight} {weightUnit}
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
                    {t('Stone Weight (if any)', 'पत्थर का वजन (यदि हो)')}: {stoneWeight}g
                  </label>
                  <input
                    type="number"
                    value={stoneWeight}
                    onChange={(e) => setStoneWeight(parseFloat(e.target.value) || 0)}
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

              {/* Result Display */}
              {calculation && rate && (
                <div className="bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">
                    {t('Price Breakdown', 'मूल्य विवरण')}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="pb-3 border-b border-[#D4AF37]/20">
                      <p className="text-sm text-gray-300 mb-1">{t('Metal Type', 'धातु प्रकार')}</p>
                      <p className="font-semibold">{language === 'hi' ? rate.nameHi : rate.nameEn}</p>
                    </div>

                    <div className="pb-3 border-b border-[#D4AF37]/20">
                      <p className="text-sm text-gray-300 mb-1">{t('Gross Weight', 'सकल वजन')}</p>
                      <p className="font-semibold">{weight} {weightUnit}</p>
                    </div>

                    {stoneWeight > 0 && (
                      <div className="pb-3 border-b border-[#D4AF37]/20">
                        <p className="text-sm text-gray-300 mb-1">{t('Stone Weight', 'पत्थर का वजन')}</p>
                        <p className="font-semibold">{stoneWeight}g</p>
                      </div>
                    )}

                    <div className="pb-3 border-b border-[#D4AF37]/20">
                      <p className="text-sm text-gray-300 mb-1">{t('Net Metal Weight', 'शुद्ध धातु वजन')}</p>
                      <p className="font-semibold">{effectiveWeight.toFixed(2)}g</p>
                    </div>

                    <div className="pb-3 border-b border-[#D4AF37]/20">
                      <p className="text-sm text-gray-300 mb-1">{t('Current Rate', 'वर्तमान दर')}</p>
                      <p className="font-semibold">{formatCurrency(rate.ratePerGram, language)}/g</p>
                    </div>

                    <div className="pb-3 border-b border-[#D4AF37]/20">
                      <p className="text-sm text-gray-300 mb-1">{t('Metal Cost', 'धातु लागत')}</p>
                      <p className="font-semibold text-lg">{formatCurrency(calculation.metalCost, language)}</p>
                    </div>

                    <div className="pb-3 border-b border-[#D4AF37]/20">
                      <p className="text-sm text-gray-300 mb-1">{t('Making Charge', 'बनावट शुल्क')} ({makingCharge}%)</p>
                      <p className="font-semibold text-lg">{formatCurrency(calculation.makingCharge, language)}</p>
                    </div>

                    <div className="pb-3 border-b border-[#D4AF37]/20">
                      <p className="text-sm text-gray-300 mb-1">{t('GST', 'जीएसटी')} (3%)</p>
                      <p className="font-semibold text-lg">{formatCurrency(calculation.gst, language)}</p>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-gray-300 mb-2">{t('Total Amount', 'कुल राशि')}</p>
                      <p className="text-4xl font-bold text-[#D4AF37]">
                        {formatCurrency(calculation.totalCost, language)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <button
                      onClick={handleWhatsAppQuote}
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {t('Send Quote to WhatsApp', 'व्हाट्सएप पर भेजें')}
                    </button>
                    <p className="text-xs text-center text-gray-400">
                      {t('* Final price may vary based on actual design and current rates', '* वास्तविक डिजाइन और वर्तमान दरों के आधार पर अंतिम मूल्य भिन्न हो सकता है')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
