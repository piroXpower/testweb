# 🚀 Deployment Guide - Swarnalankar Luxury Platform

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel provides the best hosting experience for Next.js applications.

#### Steps:

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - Swarnalankar luxury platform"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Configure Environment Variables in Vercel:**
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `NEXT_PUBLIC_SITE_URL` - Your production domain

4. **Configure Custom Domain:**
   - Add domain: `swarnalankarjewelleryandgemstones.co.in`
   - Update DNS records as instructed by Vercel

### Option 2: Self-Hosted (VPS/Dedicated Server)

For complete control and potentially lower costs for high traffic.

#### Prerequisites:
- Ubuntu 22.04 LTS or similar
- Node.js 18+
- PostgreSQL 14+
- Nginx
- SSL certificate (Let's Encrypt)

#### Steps:

1. **Server Setup:**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Install Nginx
sudo apt install -y nginx

# Install PM2 for process management
sudo npm install -g pm2
```

2. **Database Setup:**
```bash
# Create database and user
sudo -u postgres psql
CREATE DATABASE swarnalankar;
CREATE USER swarnalankar_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE swarnalankar TO swarnalankar_user;
\q
```

3. **Application Deployment:**
```bash
# Clone repository
cd /var/www
git clone YOUR_REPO_URL swarnalankar
cd swarnalankar

# Install dependencies
npm install

# Create .env file
nano .env
# Add: DATABASE_URL=postgresql://swarnalankar_user:secure_password@localhost:5432/swarnalankar

# Push database schema
npx drizzle-kit push

# Build application
npm run build

# Start with PM2
pm2 start npm --name "swarnalankar" -- start
pm2 save
pm2 startup
```

4. **Nginx Configuration:**
```bash
sudo nano /etc/nginx/sites-available/swarnalankar
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name swarnalankarjewelleryandgemstones.co.in www.swarnalankarjewelleryandgemstones.co.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/swarnalankar /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

5. **SSL Certificate (Let's Encrypt):**
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d swarnalankarjewelleryandgemstones.co.in -d www.swarnalankarjewelleryandgemstones.co.in
```

### Option 3: Docker Deployment

For containerized deployment.

1. **Create Dockerfile:**
```dockerfile
# Create this file as "Dockerfile" in project root
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
```

2. **Create docker-compose.yml:**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/swarnalankar
      - NEXT_PUBLIC_SITE_URL=https://swarnalankarjewelleryandgemstones.co.in
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:14-alpine
    environment:
      - POSTGRES_DB=swarnalankar
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=secure_password_here
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

3. **Deploy:**
```bash
docker-compose up -d
```

## DNS Configuration

Point your domain to your server:

### For Vercel:
- Add CNAME record: `www` → `cname.vercel-dns.com`
- Add A record: `@` → (Vercel provides IP)

### For Self-Hosted:
- Add A record: `@` → Your server IP
- Add A record: `www` → Your server IP

## Post-Deployment Checklist

- [ ] Database is connected and schema is pushed
- [ ] All environment variables are set
- [ ] SSL certificate is active (HTTPS working)
- [ ] Test all forms (Contact, Consultation, Gold Scheme)
- [ ] Verify WhatsApp integration works
- [ ] Check mobile responsiveness
- [ ] Test language switcher (EN/HI)
- [ ] Verify rate calculator functionality
- [ ] Test certificate verification
- [ ] Check SEO tags and meta descriptions
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Configure Google Analytics (optional)

## Monitoring & Maintenance

### Performance Monitoring:
- Use Vercel Analytics (if on Vercel)
- Or Google PageSpeed Insights
- Monitor Core Web Vitals

### Database Backups:
```bash
# Daily backup script
#!/bin/bash
BACKUP_DIR="/backups/swarnalankar"
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump swarnalankar > $BACKUP_DIR/backup_$DATE.sql
# Keep only last 30 days
find $BACKUP_DIR -name "backup_*.sql" -mtime +30 -delete
```

### Updates:
```bash
# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build
npm run build

# Restart (if using PM2)
pm2 restart swarnalankar

# Or restart Docker
docker-compose restart
```

## Security Best Practices

1. **Keep dependencies updated:**
```bash
npm audit
npm update
```

2. **Use strong passwords** for database
3. **Enable firewall** on server
4. **Regular backups** of database
5. **Monitor logs** for suspicious activity
6. **Keep SSL certificates** up to date

## Support

For deployment assistance:
- Email: contact@swarnalankarjewelleryandgemstones.co.in
- Phone: +91 82084 66690

---

**Last Updated:** December 2024
