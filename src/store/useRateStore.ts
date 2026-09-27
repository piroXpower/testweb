import { create } from 'zustand';
import type { MetalRate } from '@/types';

interface RateStore {
  rates: MetalRate[];
  lastUpdated: Date;
  setRates: (rates: MetalRate[]) => void;
  getRateByType: (type: string) => MetalRate | undefined;
}

const defaultRates: MetalRate[] = [
  {
    type: 'GOLD_24K',
    nameEn: '24K Gold (999)',
    nameHi: '24 कैरेट सोना (999)',
    ratePerGram: 6800,
    ratePerTola: 79315,
    lastUpdated: new Date()
  },
  {
    type: 'GOLD_22K',
    nameEn: '22K Gold (916 Hallmark)',
    nameHi: '22 कैरेट सोना (916 हॉलमार्क)',
    ratePerGram: 6230,
    ratePerTola: 72682,
    lastUpdated: new Date()
  },
  {
    type: 'GOLD_18K',
    nameEn: '18K Gold (750)',
    nameHi: '18 कैरेट सोना (750)',
    ratePerGram: 5100,
    ratePerTola: 59500,
    lastUpdated: new Date()
  },
  {
    type: 'SILVER_999',
    nameEn: 'Pure Silver (999)',
    nameHi: 'शुद्ध चांदी (999)',
    ratePerGram: 78,
    ratePerTola: 910,
    lastUpdated: new Date()
  },
  {
    type: 'SILVER_925',
    nameEn: 'Sterling Silver (925)',
    nameHi: 'स्टर्लिंग चांदी (925)',
    ratePerGram: 72,
    ratePerTola: 840,
    lastUpdated: new Date()
  }
];

export const useRateStore = create<RateStore>((set, get) => ({
  rates: defaultRates,
  lastUpdated: new Date(),
  setRates: (rates) => set({ rates, lastUpdated: new Date() }),
  getRateByType: (type) => {
    const { rates } = get();
    return rates.find(r => r.type === type);
  }
}));
