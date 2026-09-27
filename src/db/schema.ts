import { pgTable, text, serial, timestamp, boolean, real, integer, pgEnum } from 'drizzle-orm/pg-core';

// Enums
export const metalCategoryEnum = pgEnum('metal_category', [
  'GOLD_24K',
  'GOLD_22K',
  'GOLD_18K',
  'SILVER_999',
  'SILVER_925',
  'PLATINUM'
]);

export const gemstoneFamilyEnum = pgEnum('gemstone_family', [
  'YELLOW_SAPPHIRE_PUKHRAJ',
  'BLUE_SAPPHIRE_NEELAM',
  'EMERALD_PANNA',
  'RUBY_MANIK',
  'RED_CORAL_MOONGA',
  'PEARL_MOTI',
  'HESSONITE_GOMED',
  'CATS_EYE_LEHSUNIA',
  'DIAMOND_HEERA'
]);

export const productCategoryEnum = pgEnum('product_category', [
  'JEWELLERY',
  'GEMSTONE',
  'GOLD_COIN',
  'SILVER_ARTICLE'
]);

export const consultationStatusEnum = pgEnum('consultation_status', [
  'PENDING',
  'CONTACTED',
  'CONVERTED',
  'CLOSED'
]);

// Products Table
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  sku: text('sku').notNull().unique(),
  titleEn: text('title_en').notNull(),
  titleHi: text('title_hi').notNull(),
  slug: text('slug').notNull().unique(),
  descriptionEn: text('description_en').notNull(),
  descriptionHi: text('description_hi').notNull(),
  category: productCategoryEnum('category').notNull(),
  metalType: metalCategoryEnum('metal_type'),
  purityPercent: real('purity_percent'),
  grossWeightGrams: real('gross_weight_grams').notNull(),
  netWeightGrams: real('net_weight_grams').notNull(),
  makingChargeRate: real('making_charge_rate').notNull(),
  isHallmarked: boolean('is_hallmarked').default(true),
  gemstoneType: gemstoneFamilyEnum('gemstone_type'),
  gemstoneOrigin: text('gemstone_origin'),
  caratWeight: real('carat_weight'),
  rattiWeight: real('ratti_weight'),
  certifiedBy: text('certified_by'),
  certificateNo: text('certificate_no').unique(),
  images: text('images').array().default([]),
  inStock: boolean('in_stock').default(true),
  isFeatured: boolean('is_featured').default(false),
  basePrice: real('base_price'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

// Consultation Leads Table
export const consultationLeads = pgTable('consultation_leads', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  phoneNumber: text('phone_number').notNull(),
  email: text('email'),
  dob: timestamp('dob'),
  tob: text('tob'),
  pob: text('pob'),
  objective: text('objective'),
  rashi: text('rashi'),
  recommendedGems: text('recommended_gems').array().default([]),
  status: consultationStatusEnum('status').default('PENDING'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

// Metal Rates Table (for tracking historical rates)
export const metalRates = pgTable('metal_rates', {
  id: serial('id').primaryKey(),
  metalType: metalCategoryEnum('metal_type').notNull(),
  ratePerGram: real('rate_per_gram').notNull(),
  effectiveDate: timestamp('effective_date').defaultNow(),
  createdAt: timestamp('created_at').defaultNow()
});

// Certificate Verifications Table
export const certificateVerifications = pgTable('certificate_verifications', {
  id: serial('id').primaryKey(),
  certificateNo: text('certificate_no').notNull().unique(),
  gemstoneType: gemstoneFamilyEnum('gemstone_type').notNull(),
  origin: text('origin').notNull(),
  caratWeight: real('carat_weight').notNull(),
  rattiWeight: real('ratti_weight').notNull(),
  specificGravity: text('specific_gravity'),
  refractiveIndex: text('refractive_index'),
  isNatural: boolean('is_natural').default(true),
  treatmentStatus: text('treatment_status'),
  certifiedBy: text('certified_by').notNull(),
  issueDate: timestamp('issue_date').notNull(),
  verificationUrl: text('verification_url'),
  createdAt: timestamp('created_at').defaultNow()
});

// Gold Scheme Enrollments
export const goldSchemeEnrollments = pgTable('gold_scheme_enrollments', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  phoneNumber: text('phone_number').notNull(),
  email: text('email'),
  schemeType: text('scheme_type').notNull(),
  monthlyAmount: real('monthly_amount').notNull(),
  duration: integer('duration').notNull(),
  startDate: timestamp('start_date'),
  status: text('status').default('INQUIRY'),
  createdAt: timestamp('created_at').defaultNow()
});

// Contact Inquiries
export const contactInquiries = pgTable('contact_inquiries', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  phoneNumber: text('phone_number').notNull(),
  email: text('email'),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  preferredContact: text('preferred_contact').default('PHONE'),
  status: text('status').default('NEW'),
  createdAt: timestamp('created_at').defaultNow()
});
