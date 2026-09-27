'use client';

import { useState } from 'react';
import { Coins, Calendar, Gift, TrendingUp, CheckCircle, Send } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { formatCurrency } from '@/lib/utils';

export default function GoldSchemePage() {
  const { language, t } = useLanguageStore();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    monthlyAmount: 5000,
    duration: 11
  });
  const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/gold-scheme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Failed to submit enrollment:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const totalSavings = formData.monthlyAmount * formData.duration;
  const bonusAmount = formData.monthlyAmount; // 12th month bonus
  const totalValue = totalSavings + bonusAmount;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coins className="w-10 h-10 text-[#D4AF37]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('Swarna Bachat Yojana', 'स्वर्ण बचत योजना')}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(
              'Save systematically for your gold jewellery dreams with attractive benefits',
              'आकर्षक लाभों के साथ अपने सोने के गहनों के सपनों के लिए व्यवस्थित रूप से बचत करें'
            )}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-[#0B0B0C] mb-12">
            {t('Scheme Benefits', 'योजना के लाभ')}
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center luxury-card p-6">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t('11 Months Plan', '11 महीने की योजना')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('Pay for 11 months', '11 महीने का भुगतान')}
              </p>
            </div>

            <div className="text-center luxury-card p-6">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t('12th Month Bonus', '12वें महीने का बोनस')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('Get 12th month free', '12वां महीना मुफ्त पाएं')}
              </p>
            </div>

            <div className="text-center luxury-card p-6">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t('Current Rate Lock', 'वर्तमान दर लॉक')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('Beat price inflation', 'मूल्य वृद्धि से बचें')}
              </p>
            </div>

            <div className="text-center luxury-card p-6">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t('Flexible Plans', 'लचीली योजनाएं')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('Choose your amount', 'अपनी राशि चुनें')}
              </p>
            </div>
          </div>

          {/* Calculator and Form */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator */}
            <div className="luxury-card p-8 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
              <h3 className="text-2xl font-bold text-[#0B0B0C] mb-6">
                {t('Scheme Calculator', 'योजना कैलकुलेटर')}
              </h3>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('Monthly Amount', 'मासिक राशि')}: {formatCurrency(formData.monthlyAmount, language)}
                  </label>
                  <input
                    type="range"
                    name="monthlyAmount"
                    value={formData.monthlyAmount}
                    onChange={handleChange}
                    min="2000"
                    max="50000"
                    step="1000"
                    className="w-full accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹2,000</span>
                    <span>₹50,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('Duration', 'अवधि')}: {formData.duration} {t('months', 'महीने')}
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none bg-white"
                  >
                    <option value="11">11 {t('Months', 'महीने')}</option>
                    <option value="23">23 {t('Months', 'महीने')}</option>
                  </select>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-4 text-[#D4AF37]">
                  {t('Your Savings Summary', 'आपकी बचत सारांश')}
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-[#D4AF37]/20">
                    <span>{t('Monthly Payment', 'मासिक भुगतान')}</span>
                    <span className="font-semibold">{formatCurrency(formData.monthlyAmount, language)}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#D4AF37]/20">
                    <span>{t('Total Payments', 'कुल भुगतान')} ({formData.duration})</span>
                    <span className="font-semibold">{formatCurrency(totalSavings, language)}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-[#D4AF37]/20">
                    <span>{t('Bonus Amount', 'बोनस राशि')}</span>
                    <span className="font-semibold text-[#D4AF37]">{formatCurrency(bonusAmount, language)}</span>
                  </div>
                  <div className="flex justify-between pt-2 text-xl">
                    <span className="font-bold">{t('Total Value', 'कुल मूल्य')}</span>
                    <span className="font-bold text-[#D4AF37]">{formatCurrency(totalValue, language)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment Form */}
            <div className="luxury-card p-8">
              <h3 className="text-2xl font-bold text-[#0B0B0C] mb-6">
                {t('Enroll Now', 'अभी नामांकन करें')}
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-600 mb-2">
                    {t('Enrollment Request Received!', 'नामांकन अनुरोध प्राप्त हुआ!')}
                  </h4>
                  <p className="text-gray-600">
                    {t(
                      'Our team will contact you within 24 hours to complete the enrollment process.',
                      'हमारी टीम नामांकन प्रक्रिया को पूरा करने के लिए 24 घंटे के भीतर आपसे संपर्क करेगी।'
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('Full Name', 'पूरा नाम')} *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('Phone Number', 'फ़ोन नंबर')} *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('Email', 'ईमेल')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      {t('Submit Enrollment Request', 'नामांकन अनुरोध भेजें')}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    {t(
                      'Terms and conditions apply. Visit our showroom for complete details.',
                      'नियम और शर्तें लागू। पूर्ण विवरण के लिए हमारे शोरूम पर जाएं।'
                    )}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding bg-gradient-to-br from-[#FDFBF7] to-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-[#0B0B0C] mb-12">
            {t('How It Works', 'यह कैसे काम करता है')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t('Choose Plan', 'योजना चुनें')}
              </h3>
              <p className="text-gray-600">
                {t('Select your monthly amount and duration', 'अपनी मासिक राशि और अवधि चुनें')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t('Pay Monthly', 'मासिक भुगतान करें')}
              </h3>
              <p className="text-gray-600">
                {t('Make regular monthly payments for chosen duration', 'चुनी गई अवधि के लिए नियमित मासिक भुगतान करें')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t('Get Bonus', 'बोनस प्राप्त करें')}
              </h3>
              <p className="text-gray-600">
                {t('Receive full value including bonus to purchase jewellery', 'आभूषण खरीदने के लिए बोनस सहित पूर्ण मूल्य प्राप्त करें')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
