'use client';

import HeroSection from '@/components/home/HeroSection';
import RateCalculator from '@/components/home/RateCalculator';
import CuratedCollections from '@/components/home/CuratedCollections';
import VedicGemstoneGuide from '@/components/home/VedicGemstoneGuide';
import WhySwarnalankar from '@/components/home/WhySwarnalankar';
import StoreLocator from '@/components/home/StoreLocator';
import CustomerTestimonials from '@/components/home/CustomerTestimonials';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RateCalculator />
      <CuratedCollections />
      <VedicGemstoneGuide />
      <WhySwarnalankar />
      <CustomerTestimonials />
      <StoreLocator />
    </>
  );
}
