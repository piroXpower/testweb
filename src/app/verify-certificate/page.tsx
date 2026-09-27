'use client';

import { useState } from 'react';
import { Shield, Search, CheckCircle, XCircle } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';

export default function VerifyCertificatePage() {
  const { language, t } = useLanguageStore();
  const [certificateNo, setCertificateNo] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, show a mock result
      if (certificateNo.toUpperCase().startsWith('SWL-GEM')) {
        setResult({
          valid: true,
          certificateNo: certificateNo.toUpperCase(),
          gemstoneType: 'Yellow Sapphire (Pukhraj)',
          gemstoneTypeHi: 'पुखराज',
          origin: 'Ceylon (Sri Lanka)',
          originHi: 'सीलोन (श्रीलंका)',
          caratWeight: 5.25,
          rattiWeight: 4.78,
          isNatural: true,
          treatmentStatus: 'Unheated / Untreated',
          treatmentStatusHi: 'बिना गर्म / अनुपचारित',
          certifiedBy: 'Government Gem Testing Laboratory',
          certifiedByHi: 'सरकारी रत्न परीक्षण प्रयोगशाला',
          issueDate: '2024-01-15'
        });
      } else {
        setResult({
          valid: false
        });
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-10 h-10 text-[#D4AF37]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('Certificate Verification', 'प्रमाणपत्र सत्यापन')}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t(
              'Verify the authenticity of your gemstone certificate',
              'अपने रत्न प्रमाणपत्र की प्रामाणिकता सत्यापित करें'
            )}
          </p>
        </div>
      </section>

      {/* Verification Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="luxury-card p-8 md:p-12">
            <form onSubmit={handleVerify} className="max-w-2xl mx-auto mb-8">
              <label className="block text-lg font-semibold text-gray-700 mb-4 text-center">
                {t('Enter Certificate Number', 'प्रमाणपत्र संख्या दर्ज करें')}
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={certificateNo}
                  onChange={(e) => setCertificateNo(e.target.value)}
                  placeholder={t('e.g., SWL-GEM-2024-001', 'उदा. SWL-GEM-2024-001')}
                  required
                  className="flex-1 px-6 py-4 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none text-lg"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary flex items-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      {t('Verifying...', 'सत्यापित कर रहे हैं...')}
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      {t('Verify', 'सत्यापित करें')}
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Results */}
            {result && (
              <div className="mt-8">
                {result.valid ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                      <div>
                        <h3 className="text-2xl font-bold text-green-800">
                          {t('Certificate Verified!', 'प्रमाणपत्र सत्यापित!')}
                        </h3>
                        <p className="text-green-700">
                          {t('This is a valid certificate', 'यह एक वैध प्रमाणपत्र है')}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">
                          {t('Certificate Number', 'प्रमाणपत्र संख्या')}
                        </p>
                        <p className="font-bold text-lg">{result.certificateNo}</p>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">
                          {t('Gemstone Type', 'रत्न प्रकार')}
                        </p>
                        <p className="font-bold text-lg">
                          {language === 'hi' ? result.gemstoneTypeHi : result.gemstoneType}
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">
                          {t('Origin', 'उत्पत्ति')}
                        </p>
                        <p className="font-bold text-lg">
                          {language === 'hi' ? result.originHi : result.origin}
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">
                          {t('Weight', 'वजन')}
                        </p>
                        <p className="font-bold text-lg">
                          {result.caratWeight} Carat / {result.rattiWeight} Ratti
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">
                          {t('Natural Status', 'प्राकृतिक स्थिति')}
                        </p>
                        <p className="font-bold text-lg text-green-600">
                          {result.isNatural ? t('100% Natural', '100% प्राकृतिक') : t('Not Natural', 'प्राकृतिक नहीं')}
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">
                          {t('Treatment Status', 'उपचार स्थिति')}
                        </p>
                        <p className="font-bold text-lg">
                          {language === 'hi' ? result.treatmentStatusHi : result.treatmentStatus}
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4 md:col-span-2">
                        <p className="text-sm text-gray-600 mb-1">
                          {t('Certified By', 'द्वारा प्रमाणित')}
                        </p>
                        <p className="font-bold text-lg">
                          {language === 'hi' ? result.certifiedByHi : result.certifiedBy}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 border-2 border-red-500 rounded-xl p-8 text-center">
                    <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-red-800 mb-2">
                      {t('Certificate Not Found', 'प्रमाणपत्र नहीं मिला')}
                    </h3>
                    <p className="text-red-700">
                      {t(
                        'The certificate number you entered could not be verified. Please check and try again.',
                        'आपके द्वारा दर्ज की गई प्रमाणपत्र संख्या सत्यापित नहीं की जा सकी। कृपया जांचें और पुनः प्रयास करें।'
                      )}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="luxury-card p-6">
              <h3 className="text-xl font-bold text-[#0B0B0C] mb-4">
                {t('How to Find Your Certificate Number', 'अपना प्रमाणपत्र नंबर कैसे खोजें')}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>{t('Check the certificate provided with your gemstone', 'अपने रत्न के साथ प्रदान किए गए प्रमाणपत्र की जांच करें')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>{t('Certificate number starts with "SWL-GEM"', 'प्रमाणपत्र संख्या "SWL-GEM" से शुरू होती है')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span>{t('Contact us if you need assistance', 'यदि आपको सहायता चाहिए तो हमसे संपर्क करें')}</span>
                </li>
              </ul>
            </div>

            <div className="luxury-card p-6">
              <h3 className="text-xl font-bold text-[#0B0B0C] mb-4">
                {t('Certificate Features', 'प्रमाणपत्र विशेषताएं')}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">✓</span>
                  <span>{t('Lab-certified authenticity', 'प्रयोगशाला-प्रमाणित प्रामाणिकता')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">✓</span>
                  <span>{t('Natural vs treated status', 'प्राकृतिक बनाम उपचारित स्थिति')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">✓</span>
                  <span>{t('Origin verification', 'उत्पत्ति सत्यापन')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] mt-1">✓</span>
                  <span>{t('Precise weight measurements', 'सटीक वजन माप')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
