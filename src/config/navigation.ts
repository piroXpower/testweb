export const navigation = {
  main: [
    {
      labelEn: 'Home',
      labelHi: 'होम',
      href: '/'
    },
    {
      labelEn: 'Gold Jewellery',
      labelHi: 'सोने के आभूषण',
      href: '/jewellery/gold',
      submenu: [
        { labelEn: 'Bridal Collection', labelHi: 'वैवाहिक संग्रह', href: '/jewellery/gold/bridal' },
        { labelEn: 'Daily Wear', labelHi: 'दैनिक पहनने', href: '/jewellery/gold/daily-wear' },
        { labelEn: 'Temple Jewellery', labelHi: 'मंदिर आभूषण', href: '/jewellery/gold/temple' },
        { labelEn: 'Antique Designs', labelHi: 'प्राचीन डिजाइन', href: '/jewellery/gold/antique' }
      ]
    },
    {
      labelEn: 'Silver Jewellery',
      labelHi: 'चांदी के आभूषण',
      href: '/jewellery/silver',
      submenu: [
        { labelEn: 'Silver Ornaments', labelHi: 'चांदी के गहने', href: '/jewellery/silver/ornaments' },
        { labelEn: 'Puja Articles', labelHi: 'पूजा सामग्री', href: '/jewellery/silver/puja' },
        { labelEn: 'Silver Coins', labelHi: 'चांदी के सिक्के', href: '/jewellery/silver/coins' }
      ]
    },
    {
      labelEn: 'Vedic Gemstones',
      labelHi: 'वैदिक रत्न',
      href: '/gemstones',
      submenu: [
        { labelEn: 'Yellow Sapphire (Pukhraj)', labelHi: 'पुखराज', href: '/gemstones/pukhraj' },
        { labelEn: 'Blue Sapphire (Neelam)', labelHi: 'नीलम', href: '/gemstones/neelam' },
        { labelEn: 'Emerald (Panna)', labelHi: 'पन्ना', href: '/gemstones/panna' },
        { labelEn: 'Ruby (Manik)', labelHi: 'माणिक', href: '/gemstones/manik' },
        { labelEn: 'Red Coral (Moonga)', labelHi: 'मूंगा', href: '/gemstones/moonga' },
        { labelEn: 'Pearl (Moti)', labelHi: 'मोती', href: '/gemstones/moti' },
        { labelEn: 'All Gemstones', labelHi: 'सभी रत्न', href: '/gemstones' }
      ]
    },
    {
      labelEn: 'Astro Consultation',
      labelHi: 'ज्योतिष परामर्श',
      href: '/astro-consultation'
    },
    {
      labelEn: 'Services',
      labelHi: 'सेवाएं',
      href: '/services',
      submenu: [
        { labelEn: 'Rate Calculator', labelHi: 'दर कैलकुलेटर', href: '/rate-calculator' },
        { labelEn: 'Verify Certificate', labelHi: 'प्रमाणपत्र सत्यापित करें', href: '/verify-certificate' },
        { labelEn: 'Gold Savings Scheme', labelHi: 'स्वर्ण बचत योजना', href: '/gold-scheme' }
      ]
    },
    {
      labelEn: 'Contact Us',
      labelHi: 'संपर्क करें',
      href: '/contact'
    }
  ]
};

export const gemstoneData = [
  {
    id: 'pukhraj',
    nameEn: 'Yellow Sapphire',
    nameHi: 'पुखराज',
    planet: 'Jupiter (Guru)',
    planetHi: 'गुरु',
    benefits: ['Wealth & Prosperity', 'Marriage & Children', 'Wisdom & Knowledge'],
    benefitsHi: ['धन और समृद्धि', 'विवाह और संतान', 'ज्ञान और बुद्धि'],
    metal: 'Gold',
    metalHi: 'सोना',
    finger: 'Index Finger',
    fingerHi: 'तर्जनी उंगली',
    day: 'Thursday',
    dayHi: 'गुरुवार',
    color: '#F4D03F',
    image: '/gemstones/pukhraj.jpg'
  },
  {
    id: 'neelam',
    nameEn: 'Blue Sapphire',
    nameHi: 'नीलम',
    planet: 'Saturn (Shani)',
    planetHi: 'शनि',
    benefits: ['Career Success', 'Health & Longevity', 'Mental Clarity'],
    benefitsHi: ['करियर की सफलता', 'स्वास्थ्य और दीर्घायु', 'मानसिक स्पष्टता'],
    metal: 'Silver or Gold',
    metalHi: 'चांदी या सोना',
    finger: 'Middle Finger',
    fingerHi: 'मध्यमा उंगली',
    day: 'Saturday',
    dayHi: 'शनिवार',
    color: '#1E3A8A',
    image: '/gemstones/neelam.jpg'
  },
  {
    id: 'panna',
    nameEn: 'Emerald',
    nameHi: 'पन्ना',
    planet: 'Mercury (Budh)',
    planetHi: 'बुध',
    benefits: ['Business Growth', 'Communication Skills', 'Intellectual Power'],
    benefitsHi: ['व्यापार वृद्धि', 'संचार कौशल', 'बौद्धिक शक्ति'],
    metal: 'Gold or Silver',
    metalHi: 'सोना या चांदी',
    finger: 'Little Finger',
    fingerHi: 'कनिष्ठिका उंगली',
    day: 'Wednesday',
    dayHi: 'बुधवार',
    color: '#10B981',
    image: '/gemstones/panna.jpg'
  },
  {
    id: 'manik',
    nameEn: 'Ruby',
    nameHi: 'माणिक',
    planet: 'Sun (Surya)',
    planetHi: 'सूर्य',
    benefits: ['Leadership & Authority', 'Vitality & Energy', 'Success & Fame'],
    benefitsHi: ['नेतृत्व और अधिकार', 'जीवन शक्ति और ऊर्जा', 'सफलता और प्रसिद्धि'],
    metal: 'Gold or Copper',
    metalHi: 'सोना या तांबा',
    finger: 'Ring Finger',
    fingerHi: 'अनामिका उंगली',
    day: 'Sunday',
    dayHi: 'रविवार',
    color: '#DC2626',
    image: '/gemstones/manik.jpg'
  },
  {
    id: 'moonga',
    nameEn: 'Red Coral',
    nameHi: 'मूंगा',
    planet: 'Mars (Mangal)',
    planetHi: 'मंगल',
    benefits: ['Courage & Confidence', 'Physical Strength', 'Property & Land'],
    benefitsHi: ['साहस और आत्मविश्वास', 'शारीरिक शक्ति', 'संपत्ति और भूमि'],
    metal: 'Gold or Copper',
    metalHi: 'सोना या तांबा',
    finger: 'Ring Finger',
    fingerHi: 'अनामिका उंगली',
    day: 'Tuesday',
    dayHi: 'मंगलवार',
    color: '#EF4444',
    image: '/gemstones/moonga.jpg'
  },
  {
    id: 'moti',
    nameEn: 'Pearl',
    nameHi: 'मोती',
    planet: 'Moon (Chandra)',
    planetHi: 'चंद्र',
    benefits: ['Emotional Balance', 'Peace of Mind', 'Mother\'s Blessings'],
    benefitsHi: ['भावनात्मक संतुलन', 'मन की शांति', 'माता का आशीर्वाद'],
    metal: 'Silver',
    metalHi: 'चांदी',
    finger: 'Little Finger',
    fingerHi: 'कनिष्ठिका उंगली',
    day: 'Monday',
    dayHi: 'सोमवार',
    color: '#F5F5F5',
    image: '/gemstones/moti.jpg'
  }
];
