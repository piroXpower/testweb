'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  const { language, t } = useLanguageStore();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.pincode}`
  )}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-[#38000A] to-[#0B0B0C] text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Contact Us', 'संपर्क करें')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t(
              "We're here to help. Reach out for inquiries, appointments, or assistance.",
              'हम मदद के लिए यहां हैं। पूछताछ, अपॉइंटमेंट या सहायता के लिए संपर्क करें।'
            )}
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Address */}
            <div className="luxury-card p-6 text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0C] mb-2">
                {t('Visit Us', 'हमसे मिलें')}
              </h3>
              <p className="text-gray-600 text-sm">
                {siteConfig.address.line1}<br />
                {siteConfig.address.line2}<br />
                {siteConfig.address.city}, {siteConfig.address.district}<br />
                {siteConfig.address.state} - {siteConfig.address.pincode}
              </p>
            </div>

            {/* Phone */}
            <div className="luxury-card p-6 text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0C] mb-2">
                {t('Call Us', 'हमें कॉल करें')}
              </h3>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-[#D4AF37] font-semibold hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
              <p className="text-gray-600 text-sm mt-2">
                {t('Mon-Sat: 9:00 AM - 8:00 PM', 'सोम-शनि: 9:00 AM - 8:00 PM')}
              </p>
            </div>

            {/* Email */}
            <div className="luxury-card p-6 text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0C] mb-2">
                {t('Email Us', 'हमें ईमेल करें')}
              </h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#D4AF37] font-semibold hover:underline text-sm break-all"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="luxury-card p-8">
              <h2 className="text-2xl font-bold text-[#0B0B0C] mb-6">
                {t('Send us a Message', 'हमें संदेश भेजें')}
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
                  {t('Thank you! We will contact you soon.', 'धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।')}
                </div>
              )}

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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('Subject', 'विषय')} *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none bg-white"
                  >
                    <option value="">{t('Select Subject', 'विषय चुनें')}</option>
                    <option value="jewellery">{t('Jewellery Inquiry', 'आभूषण पूछताछ')}</option>
                    <option value="gemstone">{t('Gemstone Inquiry', 'रत्न पूछताछ')}</option>
                    <option value="custom">{t('Custom Order', 'कस्टम आदेश')}</option>
                    <option value="appointment">{t('Book Appointment', 'अपॉइंटमेंट बुक करें')}</option>
                    <option value="other">{t('Other', 'अन्य')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('Message', 'संदेश')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[#D4AF37]/30 rounded-lg focus:border-[#D4AF37] focus:outline-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  {t('Send Message', 'संदेश भेजें')}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="luxury-card overflow-hidden h-[600px]">
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
    </div>
  );
}
