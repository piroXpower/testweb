swarnalankar-enterprise/
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── prisma/
│   └── schema.prisma
├── public/
│   ├── brand/
│   │   ├── logo-gold.svg
│   │   └── hallmark-cert.png
│   ├── gemstones/
│   └── jewellery/
└── src/
    ├── app/
    │   ├── [lang]/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   ├── error.tsx
    │   │   ├── loading.tsx
    │   │   ├── jewellery/
    │   │   │   ├── page.tsx
    │   │   │   └── [slug]/page.tsx
    │   │   ├── gemstones/
    │   │   │   ├── page.tsx
    │   │   │   └── [slug]/page.tsx
    │   │   ├── astro-consultation/
    │   │   │   └── page.tsx
    │   │   ├── rate-calculator/
    │   │   │   └── page.tsx
    │   │   ├── verify-certificate/
    │   │   │   └── page.tsx
    │   │   ├── gold-scheme/
    │   │   │   └── page.tsx
    │   │   └── contact/
    │   │       └── page.tsx
    │   ├── api/
    │   │   ├── rates/route.ts
    │   │   ├── verify-gem/route.ts
    │   │   └── consultation/route.ts
    │   ├── sitemap.ts
    │   └── robots.ts
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   ├── LanguageSwitcher.tsx
    │   │   ├── MegaMenu.tsx
    │   │   └── MobileFloatingBar.tsx
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Modal.tsx
    │   │   ├── GoldCard.tsx
    │   │   └── RatingStars.tsx
    │   ├── 3d/
    │   │   └── GemstoneViewer3D.tsx
    │   ├── home/
    │   │   ├── HeroSlider.tsx
    │   │   ├── LiveRateTicker.tsx
    │   │   ├── CuratedCollections.tsx
    │   │   ├── VedicAstroBanner.tsx
    │   │   ├── WhySwarnalankar.tsx
    │   │   └── CustomerStories.tsx
    │   ├── calculators/
    │   │   ├── LiveGoldCalculator.tsx
    │   │   └── GemstoneRattiConverter.tsx
    │   └── astro/
    │       ├── KundaliGemRecommender.tsx
    │       └── CertificateVerifierModal.tsx
    ├── config/
    │   ├── site.ts
    │   ├── navigation.ts
    │   └── constants.ts
    ├── lib/
    │   ├── utils.ts
    │   ├── prisma.ts
    │   └── whatsapp.ts
    ├── store/
    │   ├── useRateStore.ts
    │   └── useCartStore.ts
    └── types/
        ├── jewellery.ts
        ├── gemstone.ts
        └── rates.ts
