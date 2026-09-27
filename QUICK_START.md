# ⚡ Quick Start Guide - Swarnalankar Platform

## 🚀 5-Minute Setup

### 1. Clone & Install (1 min)
```bash
npm install
```

### 2. Environment Setup (1 min)
```bash
cp .env.example .env
# Edit .env with your database URL
```

### 3. Database Setup (1 min)
```bash
npx drizzle-kit push
```

### 4. Run Development Server (1 min)
```bash
npm run dev
```

### 5. Open Browser (1 min)
```
http://localhost:3000
```

## 📋 Essential Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm start               # Start production server

# Database
npx drizzle-kit push    # Apply schema changes
npx drizzle-kit studio  # Open database GUI

# Type Checking
npm run typecheck       # Check TypeScript errors

# Code Quality
npm run lint            # Run ESLint
```

## 🗂️ Key Files to Know

### Configuration
- `src/config/site.ts` - Business info, colors, contact
- `src/config/navigation.ts` - Menus, gemstone data
- `.env` - Environment variables

### Important Pages
- `src/app/page.tsx` - Homepage
- `src/app/layout.tsx` - Global layout
- `src/app/globals.css` - Styling

### Core Components
- `src/components/layout/Header.tsx` - Navigation
- `src/components/layout/Footer.tsx` - Footer
- `src/components/home/*` - Homepage sections

## 🎨 Customization Quick Tips

### Change Business Info
Edit `src/config/site.ts`:
```typescript
export const siteConfig = {
  name: { en: "Your Name", hi: "आपका नाम" },
  address: { ... },
  contact: { phone: "+91 XXXXX XXXXX" }
}
```

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
  --champagne-gold: #D4AF37;
  --antique-gold: #AA8C2C;
  /* etc */
}
```

### Add/Edit Gemstones
Edit `src/config/navigation.ts`:
```typescript
export const gemstoneData = [
  {
    id: 'stone-id',
    nameEn: 'Stone Name',
    nameHi: 'पत्थर का नाम',
    // ...
  }
]
```

### Update Metal Rates
Edit `src/store/useRateStore.ts`:
```typescript
const defaultRates: MetalRate[] = [
  {
    type: 'GOLD_22K',
    ratePerGram: 6230, // Update this
    // ...
  }
]
```

## 🌐 Language Support

Switch between English/Hindi:
- Click EN/HI toggle in header
- Preference saved in localStorage
- All content auto-translates

Add new translations:
```typescript
const { t } = useLanguageStore();
t('English text', 'हिंदी पाठ')
```

## 📱 Test Checklist

### Homepage
- [ ] Hero slider works
- [ ] Rate ticker updates
- [ ] Calculator computes correctly
- [ ] Collections display
- [ ] Gemstone guide shows
- [ ] Testimonials render
- [ ] Map loads

### Forms
- [ ] Astro consultation submits
- [ ] Contact form works
- [ ] Gold scheme calculator
- [ ] Certificate verification

### Navigation
- [ ] All menu links work
- [ ] Language switcher works
- [ ] WhatsApp button opens
- [ ] Footer links active

## 🐛 Common Issues & Fixes

### Database Connection Error
```bash
# Check DATABASE_URL in .env
# Ensure PostgreSQL is running
pg_isready
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Change port or kill process
PORT=3001 npm run dev
# or
lsof -ti:3000 | xargs kill
```

## 📚 Documentation Links

- **Full Documentation:** README.md
- **All Features:** FEATURES.md
- **Deployment Guide:** DEPLOYMENT.md
- **Project Overview:** PROJECT_SUMMARY.md

## 🆘 Support

**For technical support:**
- Check documentation files
- Review code comments
- Check TypeScript errors

**For business inquiries:**
- Phone: +91 82084 66690
- Email: contact@swarnalankarjewelleryandgemstones.co.in

## 🎯 Quick Navigation

### Main Routes
- `/` - Homepage
- `/jewellery/gold` - Gold collections
- `/gemstones` - Gemstone catalog
- `/astro-consultation` - Astrology
- `/rate-calculator` - Price calculator
- `/verify-certificate` - Certificate check
- `/gold-scheme` - Savings scheme
- `/contact` - Contact page

### API Routes
- `/api/rates` - Metal rates
- `/api/consultation` - Submit consultation
- `/api/contact` - Contact form
- `/api/health` - Health check

## ⚙️ Environment Variables

Required:
```env
DATABASE_URL=postgresql://...
```

Optional:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
```

## 🔄 Deployment Shortcuts

### Vercel (Fastest)
```bash
npm i -g vercel
vercel
```

### Production Build Test
```bash
npm run build
npm start
```

### Docker
```bash
docker-compose up -d
```

## ✅ Pre-Deployment Checklist

- [ ] Update business info in `site.ts`
- [ ] Set environment variables
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Verify language switching
- [ ] Test WhatsApp integration
- [ ] Check all images load
- [ ] Test calculator accuracy
- [ ] Verify database connection
- [ ] Run production build
- [ ] Check SEO meta tags

## 🎊 You're Ready!

The platform is production-ready. Start customizing and deploying!

**Happy Coding! ✨**
