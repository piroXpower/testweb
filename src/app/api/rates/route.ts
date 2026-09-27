import { NextResponse } from 'next/server';

export async function GET() {
  // In a real application, these rates would come from a live API or database
  const rates = [
    {
      type: 'GOLD_24K',
      nameEn: '24K Gold (999)',
      nameHi: '24 कैरेट सोना (999)',
      ratePerGram: 6800,
      ratePerTola: 79315,
      lastUpdated: new Date().toISOString()
    },
    {
      type: 'GOLD_22K',
      nameEn: '22K Gold (916 Hallmark)',
      nameHi: '22 कैरेट सोना (916 हॉलमार्क)',
      ratePerGram: 6230,
      ratePerTola: 72682,
      lastUpdated: new Date().toISOString()
    },
    {
      type: 'GOLD_18K',
      nameEn: '18K Gold (750)',
      nameHi: '18 कैरेट सोना (750)',
      ratePerGram: 5100,
      ratePerTola: 59500,
      lastUpdated: new Date().toISOString()
    },
    {
      type: 'SILVER_999',
      nameEn: 'Pure Silver (999)',
      nameHi: 'शुद्ध चांदी (999)',
      ratePerGram: 78,
      ratePerTola: 910,
      lastUpdated: new Date().toISOString()
    },
    {
      type: 'SILVER_925',
      nameEn: 'Sterling Silver (925)',
      nameHi: 'स्टर्लिंग चांदी (925)',
      ratePerGram: 72,
      ratePerTola: 840,
      lastUpdated: new Date().toISOString()
    }
  ];

  return NextResponse.json({ rates });
}
