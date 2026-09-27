'use client';

import { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { useRateStore } from '@/store/useRateStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import { formatCurrency } from '@/lib/utils';

export default function LiveRateTicker() {
  const { rates } = useRateStore();
  const { language } = useLanguageStore();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rates.length]);

  const currentRate = rates[currentIndex];

  return (
    <div className="flex items-center justify-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 animate-pulse" />
        <span className="font-semibold">
          {language === 'hi' ? 'लाइव रेट' : 'LIVE RATES'}
        </span>
      </div>
      <div className="flex items-center gap-2 animate-fadeIn">
        <span className="font-medium">
          {language === 'hi' ? currentRate.nameHi : currentRate.nameEn}:
        </span>
        <span className="font-bold text-[#D4AF37]">
          {formatCurrency(currentRate.ratePerGram, language)}/g
        </span>
      </div>
    </div>
  );
}
