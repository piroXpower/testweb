# 🏆 Swarnalankar Jewellery and Gemstones - Luxury Omnichannel E-Commerce Platform

## स्वर्णलंकार ज्वेलरी एंड जेमस्टोन्स

> **Tagline:** *Purity in Every Carat, Divinity in Every Gem | शुद्धता, आस्था और विश्वास का प्रतीक*

A comprehensive, enterprise-level luxury e-commerce and consultation platform for Swarnalankar Jewellery and Gemstones, located in Mahagama, Godda, Jharkhand, India.

## ✨ Features

### 🛍️ E-Commerce Features
- **Live Metal Rate Ticker** - Real-time gold and silver rates
- **Interactive Gold Price Calculator** - Calculate exact pricing with making charges and GST
- **Bilingual Support** - Full English and Hindi language support
- **Product Catalogs** - Gold jewellery and certified gemstones
- **WhatsApp Integration** - Instant price quotes and inquiries
- **Certificate Verification** - Verify gemstone authenticity

### 🔮 Vedic Astrology Consultation
- **Personalized Gemstone Recommendations** - Based on birth chart
- **Kundali Analysis** - Date, time, and place of birth analysis
- **Planetary Guidance** - Gemstone recommendations for specific goals
- **Expert Consultation Booking** - Direct consultation with astrology experts

### 💰 Gold Savings Scheme (Swarna Bachat Yojana)
- **11+1 Month Plan** - Pay for 11 months, get 12th month free
- **Flexible Payment Options** - Choose monthly amount
- **Scheme Calculator** - Calculate total savings and benefits
- **Easy Enrollment** - Online enrollment request system

### 🏪 Store Features
- **Store Locator** - Interactive Google Maps integration
- **Operating Hours** - Detailed business hours display
- **Contact Information** - Multiple contact channels
- **Appointment Booking** - Schedule showroom visits

## 🎨 Design & Technology

### Design Palette
- **Deep Obsidian** (#0B0B0C) - Primary dark
- **Royal Crimson Velvet** (#38000A) - Accent dark
- **Champagne Gold** (#D4AF37) - Primary gold
- **Antique Brushed Gold** (#AA8C2C) - Secondary gold
- **Crystal White** (#FDFBF7) - Background

### Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management:** Zustand
- **Database:** PostgreSQL with Drizzle ORM
- **Fonts:** Playfair Display, Inter, Noto Sans Devanagari

## 📁 Project Structure

```
swarnalankar-enterprise/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Homepage
│   │   ├── layout.tsx                  # Root layout
│   │   ├── globals.css                 # Global styles
│   │   ├── astro-consultation/         # Astrology consultation
│   │   ├── contact/                    # Contact page
│   │   ├── gemstones/                  # Gemstones catalog
│   │   ├── gold-scheme/                # Gold savings scheme
│   │   ├── jewellery/gold/             # Gold jewellery catalog
│   │   ├── rate-calculator/            # Price calculator
│   │   ├── verify-certificate/         # Certificate verification
│   │   ├── api/
│   │   │   ├── consultation/           # Consultation API
│   │   │   ├── contact/                # Contact form API
│   │   │   ├── rates/                  # Metal rates API
│   │   │   └── health/                 # Health check
│   │   ├── sitemap.ts                  # SEO sitemap
│   │   └── robots.ts                   # Robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Main navigation
│   │   │   ├── Footer.tsx              # Footer
│   │   │   ├── LanguageSwitcher.tsx    # Language toggle
│   │   │   └── WhatsAppFloat.tsx       # Floating WhatsApp button
│   │   └── home/
│   │       ├── HeroSection.tsx         # Hero carousel
│   │       ├── RateCalculator.tsx      # Gold calculator
│   │       ├── CuratedCollections.tsx  # Product collections
│   │       ├── VedicGemstoneGuide.tsx  # Gemstone guide
│   │       ├── WhySwarnalankar.tsx     # Benefits section
│   │       ├── CustomerTestimonials.tsx # Reviews
│   │       └── StoreLocator.tsx        # Map & directions
│   ├── config/
│   │   ├── site.ts                     # Site configuration
│   │   └── navigation.ts               # Navigation & content
│   ├── store/
│   │   ├── useLanguageStore.ts         # Language state
│   │   └── useRateStore.ts             # Metal rates state
│   ├── lib/
│   │   └── utils.ts                    # Utility functions
│   ├── db/
│   │   ├── schema.ts                   # Database schema
│   │   └── index.ts                    # Database connection
│   └── types/
│       └── index.ts                    # TypeScript types
└── package.json
```

## 🗄️ Database Schema

### Tables
- **products** - Jewellery and gemstone products
- **consultation_leads** - Astrology consultation requests
- **metal_rates** - Historical metal rate tracking
- **certificate_verifications** - Gemstone certificates
- **gold_scheme_enrollments** - Gold scheme registrations
- **contact_inquiries** - Contact form submissions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env
```

Edit `.env` and add your database URL:
```
DATABASE_URL=postgresql://user:password@localhost:5432/swarnalankar
```

3. **Push database schema:**
```bash
npx drizzle-kit push
```

4. **Run development server:**
```bash
npm run dev
```

5. **Build for production:**
```bash
npm run build
npm start
```

## 📍 Business Information

**Swarnalankar Jewellery and Gemstones**
- **Address:** Ground Floor 1, Opposite LIC Office, Near High School, Main Road, Mahagama, Godda, Jharkhand - 814154, India
- **Phone:** +91 82084 66690
- **Hours:**
  - Monday - Friday: 10:00 AM – 08:00 PM
  - Saturday: 09:00 AM – 08:00 PM
  - Sunday: 09:00 AM – 05:00 PM

## 🎯 Key Pages

1. **Homepage** (`/`) - Hero, rates, collections, gemstones, testimonials
2. **Gold Jewellery** (`/jewellery/gold`) - BIS hallmarked gold collections
3. **Gemstones** (`/gemstones`) - Certified Vedic gemstones catalog
4. **Astro Consultation** (`/astro-consultation`) - Personalized gemstone recommendations
5. **Rate Calculator** (`/rate-calculator`) - Live gold/silver price calculator
6. **Certificate Verification** (`/verify-certificate`) - Gemstone certificate lookup
7. **Gold Scheme** (`/gold-scheme`) - Swarna Bachat Yojana details
8. **Contact** (`/contact`) - Contact form and store locator

## 🌐 SEO & Performance

- **Server-Side Rendering** - Fast initial page loads
- **Static Generation** - Pre-rendered pages
- **Structured Data** - JSON-LD schema for rich results
- **Sitemap** - Auto-generated XML sitemap
- **Responsive Design** - Mobile-first approach
- **Image Optimization** - Next.js Image component
- **Font Optimization** - Google Fonts with display=swap

## 🔐 Security Features

- Type-safe database queries with Drizzle ORM
- Server-side API routes
- Environment variable protection
- Input validation on forms

## 🎨 Brand Identity

**Colors:**
- Primary: Champagne Gold (#D4AF37)
- Secondary: Antique Gold (#AA8C2C)
- Dark: Obsidian (#0B0B0C)
- Accent: Royal Crimson (#38000A)

**Typography:**
- Headings: Playfair Display (Royal, elegant)
- Body: Inter (Clean, readable)
- Hindi: Noto Sans Devanagari

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

This is a production website for Swarnalankar Jewellery. For business inquiries, please contact:
- Phone: +91 82084 66690
- Email: contact@swarnalankarjewelleryandgemstones.co.in

## 📄 License

© 2024 Swarnalankar Jewellery and Gemstones. All rights reserved.

---

**Built with ❤️ for luxury, trust, and tradition**
