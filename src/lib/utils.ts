import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, locale: 'en' | 'hi' = 'en'): string {
  return new Intl.NumberFormat(locale === 'hi' ? 'hi-IN' : 'en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatNumber(num: number, locale: 'en' | 'hi' = 'en'): string {
  return new Intl.NumberFormat(locale === 'hi' ? 'hi-IN' : 'en-IN').format(num);
}

export function gramsToTola(grams: number): number {
  return grams / 11.664;
}

export function tolaToGrams(tola: number): number {
  return tola * 11.664;
}

export function caratToRatti(carat: number): number {
  return carat * 0.91;
}

export function rattiToCarat(ratti: number): number {
  return ratti / 0.91;
}

export function generateWhatsAppLink(
  phoneNumber: string,
  message: string
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+91)(\d{5})(\d{5})/, '$1 $2 $3');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

export const calculateGoldPrice = (
  weightGrams: number,
  ratePerGram: number,
  makingChargePercent: number = 10,
  gstPercent: number = 3
) => {
  const metalCost = weightGrams * ratePerGram;
  const makingCharge = (metalCost * makingChargePercent) / 100;
  const subtotal = metalCost + makingCharge;
  const gst = (subtotal * gstPercent) / 100;
  const totalCost = subtotal + gst;

  return {
    metalCost,
    makingCharge,
    subtotal,
    gst,
    totalCost
  };
};
