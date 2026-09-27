export type Language = 'en' | 'hi';

export interface MetalRate {
  type: string;
  nameEn: string;
  nameHi: string;
  ratePerGram: number;
  ratePerTola?: number;
  lastUpdated: Date;
}

export interface GoldCalculation {
  metalType: string;
  weightGrams: number;
  weightTola?: number;
  metalRate: number;
  metalCost: number;
  makingChargePercent: number;
  makingCharge: number;
  subtotal: number;
  gstPercent: number;
  gst: number;
  totalCost: number;
}

export interface AstroConsultationForm {
  fullName: string;
  phoneNumber: string;
  email?: string;
  dob: Date | null;
  tob: string;
  pob: string;
  objective: string;
  rashi?: string;
}

export interface GemstoneRecommendation {
  gemstone: string;
  gemstoneHi: string;
  planet: string;
  planetHi: string;
  weight: string;
  metal: string;
  metalHi: string;
  finger: string;
  fingerHi: string;
  day: string;
  dayHi: string;
  mantra: string;
  benefits: string[];
  benefitsHi: string[];
}

export interface CertificateVerification {
  certificateNo: string;
  gemstoneType: string;
  origin: string;
  caratWeight: number;
  rattiWeight: number;
  isNatural: boolean;
  treatmentStatus: string;
  certifiedBy: string;
  issueDate: Date;
}

export interface Product {
  id: number;
  sku: string;
  titleEn: string;
  titleHi: string;
  slug: string;
  descriptionEn: string;
  descriptionHi: string;
  category: string;
  metalType?: string;
  grossWeightGrams: number;
  netWeightGrams: number;
  makingChargeRate: number;
  isHallmarked: boolean;
  gemstoneType?: string;
  images: string[];
  inStock: boolean;
  isFeatured: boolean;
  basePrice?: number;
}
