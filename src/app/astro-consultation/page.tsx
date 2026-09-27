'use client';

import { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, Target, Send } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { gemstoneData } from '@/config/navigation';

export default function AstroConsultationPage() {
  const { language, t } = useLanguageStore();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    dob: '',
    tob: '',
    pob: '',
    objective: 'wealth'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-10 h-10 text-[#D4AF37]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('Vedic Astrology Consultation', 'वैदिक ज्योतिष परामर्श')}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(
              'Get personalized gemstone recommendations based on your birth chart and planetary positions',
              'अपनी जन्म कुंडली और ग्रहों की स्थिति के आधार पर व्यक्तिगत रत्न सिफारिश प्राप्त करें'
            )}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Consultation Form */}
            <div className="luxury-card p-8">
              <h2 className="text-2xl font-bold text-[#0B0B0C] mb-6">
                {t('Book Your Consultation', 'अपना परामर्श बुक करें')}
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    {t('Thank You!', 'धन्यवाद!')}
                  </h3>
                  <p className="text-gray-600">
                    {t(
                      'Your consultation request has been received. Our expert will contact you within 24 hours.',
                      'आपका परामर्श अनुरोध प्राप्त हो गया है। हमारे विशेषज्ञ 24 घंटे के भीतर आपसे संपर्क करेंगे।'
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {t('Date of Birth', 'जन्म तिथि')} *
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {t('Time of Birth', 'जन्म समय')} *
                      </label>
                      <input
                        type="time"
                        name="tob"
                        value={formData.tob}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        {t('Place of Birth', 'जन्म स्थान')} *
                      </label>
                      <input
                        type="text"
                        name="pob"
                        value={formData.pob}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Target className="w-4 h-4 inline mr-1" />
                      {t('Consultation Goal', 'परामर्श लक्ष्य')} *
                    </label>
                    <select
                      name="objective"
                      value={formData.objective}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none bg-white"
                    >
                      <option value="wealth">{t('Wealth & Prosperity', 'धन और समृद्धि')}</option>
                      <option value="career">{t('Career Success', 'करियर की सफलता')}</option>
                      <option value="health">{t('Health & Well-being', 'स्वास्थ्य और कल्याण')}</option>
                      <option value="marriage">{t('Marriage & Relationships', 'विवाह और रिश्ते')}</option>
                      <option value="education">{t('Education & Knowledge', 'शिक्षा और ज्ञान')}</option>
                      <option value="protection">{t('Protection & Peace', 'सुरक्षा और शांति')}</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    {t('Submit Request', 'अनुरोध भेजें')}
                  </button>
                </form>
              )}
            </div>

            {/* Gemstone Benefits */}
            <div className="space-y-6">
              <div className="luxury-card p-6 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
                <h3 className="text-xl font-bold text-[#0B0B0C] mb-4">
                  {t('Why Vedic Gemstones?', 'वैदिक रत्न क्यों?')}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] mt-1">✦</span>
                    <span className="text-gray-700">
                      {t(
                        'Based on ancient Vedic astrology principles',
                        'प्राचीन वैदिक ज्योतिष सिद्धांतों पर आधारित'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] mt-1">✦</span>
                    <span className="text-gray-700">
                      {t(
                        'Strengthen beneficial planetary influences',
                        'लाभकारी ग्रह प्रभावों को मजबूत करें'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] mt-1">✦</span>
                    <span className="text-gray-700">
                      {t(
                        'Only 100% natural, certified gemstones',
                        'केवल 100% प्राकृतिक, प्रमाणित रत्न'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4AF37] mt-1">✦</span>
                    <span className="text-gray-700">
                      {t(
                        'Proper rituals and activation guidance provided',
                        'उचित अनुष्ठान और सक्रियण मार्गदर्शन प्रदान किया गया'
                      )}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="luxury-card p-6">
                <h3 className="text-xl font-bold text-[#0B0B0C] mb-4">
                  {t('Available Gemstones', 'उपलब्ध रत्न')}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {gemstoneData.slice(0, 6).map((gem) => (
                    <div key={gem.id} className="flex items-center gap-2 p-2 bg-[#FDFBF7] rounded">
                      <div
                        className="w-8 h-8 rounded-full flex-shrink-0"
                        style={{ backgroundColor: gem.color }}
                      ></div>
                      <span className="text-sm font-medium">
                        {language === 'hi' ? gem.nameHi : gem.nameEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
