# Upsoma - Web Development Agency

> Award-winning web development and digital design agency in Delhi, India

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## 🚀 About Upsoma

Upsoma is a leading web development agency specializing in custom website design, e-commerce solutions, WordPress development, and mobile applications. With 8+ years of experience and 50+ completed projects, we deliver cutting-edge digital solutions to businesses across India.

### ✨ Services

- **Custom Web Development** - React, Node.js, Next.js, TypeScript
- **E-commerce Solutions** - Full-stack online stores with payment integration
- **WordPress Development** - Custom themes, plugins, and optimization
- **Mobile App Development** - React Native, cross-platform applications
- **SEO & Digital Marketing** - Technical SEO, content strategy, analytics
- **UI/UX Design** - User-centered design, prototyping, brand identity

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with Vite
- **Routing**: React Router 6 (SPA mode)
- **Styling**: TailwindCSS 3 + Tailwind Animate
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion

### Backend
- **Runtime**: Node.js 20+
- **Framework**: Express 5
- **Database**: MongoDB (backend/config/db.js)
- **API**: RESTful architecture
- **Validation**: Zod schemas

### Development
- **Build Tool**: Vite 7
- **Language**: TypeScript 5
- **Testing**: Vitest
- **Linting**: Prettier
- **Package Manager**: pnpm (recommended)

## 📦 Installation

### Prerequisites
- Node.js 20.19.0 or higher
- pnpm 10.14.0+ (or npm/yarn)
- MongoDB (for backend database)

### Clone Repository
```bash
git clone https://github.com/upsoma/website.git
cd website
```

### Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your configuration
# MONGO_URI=mongodb://localhost:27017/upsoma_database
# VITE_PUBLIC_BUILDER_KEY=your_key_here
```

## 🚀 Development

### Start Development Server
```bash
# Frontend + Backend (port 8080)
pnpm dev

# Backend only (port 5000)
cd backend && npm start
```

Visit: `http://localhost:8080`

### Build for Production
```bash
# Build both client and server
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
upsoma/
├── client/                 # React frontend (SPA)
│   ├── pages/             # Route components
│   │   └── Index.tsx      # Homepage
│   ├── components/        # Reusable components
│   │   └── ui/           # Radix UI component library
│   ├── lib/              # Utilities & helpers
│   ├── App.tsx           # Main app + routing
│   └── global.css        # TailwindCSS styles
│
├── server/                # Express backend
│   ├── routes/           # API endpoints
│   ├── index.ts          # Server configuration
│   └── node-build.ts     # Production entry
│
├── backend/              # MongoDB backend
│   ├── config/          # Database configuration
│   ├── models/          # Mongoose schemas
│   ├── controllers/     # Route controllers
│   └── routes/          # API routes
│
├── shared/              # Shared TypeScript types
│   └── api.ts          # API interface definitions
│
├── public/             # Static assets
│   ├── robots.txt     # SEO crawler instructions
│   ├── sitemap.xml    # Site structure
│   └── site.webmanifest # PWA configuration
│
└── dist/              # Production builds
    ├── spa/          # Frontend build
    └── server/       # Backend build
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start dev server (client + server)
pnpm test             # Run tests with Vitest

# Building
pnpm build            # Build for production
pnpm build:client     # Build frontend only
pnpm build:server     # Build backend only

# Production
pnpm start            # Run production server

# Code Quality
pnpm typecheck        # TypeScript type checking
pnpm format.fix       # Format code with Prettier
```

## 🎨 Key Features

### SEO Optimized
- ✅ Complete meta tags (title, description, keywords)
- ✅ Open Graph & Twitter Card tags
- ✅ JSON-LD structured data (Organization, LocalBusiness, FAQPage)
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Sitemap.xml and robots.txt
- ✅ Canonical URLs
- ✅ Mobile-responsive and fast loading

### Performance
- ✅ Vite for lightning-fast builds
- ✅ Code splitting & lazy loading
- ✅ Optimized bundle sizes
- ✅ Image optimization
- ✅ Compression & caching headers
- ✅ Core Web Vitals optimized

### Developer Experience
- ✅ TypeScript for type safety
- ✅ Hot Module Replacement (HMR)
- ✅ Path aliases (@/, @shared/)
- ✅ ESLint + Prettier configuration
- ✅ Component library with Radix UI

## 📊 SEO Checklist

- [x] Title tags (50-60 characters)
- [x] Meta descriptions (150-160 characters)
- [x] H1-H6 heading hierarchy
- [x] Alt text for all images
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Schema.org JSON-LD
- [x] robots.txt
- [x] sitemap.xml
- [x] site.webmanifest (PWA)
- [x] Mobile responsive design
- [x] Fast page load speed (<3s)
- [x] HTTPS enabled
- [x] Clean URL structure

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Builder.io (optional)
VITE_PUBLIC_BUILDER_KEY=your_builder_key

# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/upsoma_database

# Server Configuration
PORT=3000
NODE_ENV=production

# CORS Origins (comma-separated)
ALLOWED_ORIGINS=https://upsoma.com,https://www.upsoma.com

# Optional: Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## 🌐 Deployment

### Using Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Using Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Using Docker
```bash
# Build image
docker build -t upsoma-web .

# Run container
docker run -p 3000:3000 upsoma-web
```

## 📈 Performance Metrics

**Target Lighthouse Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

**Core Web Vitals:**
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Upsoma**
- Website: [https://upsoma.com](https://upsoma.com)
- Email: hello@upsoma.com
- Phone: +91-85-1234-5678
- Location: Delhi, India

**Social Media:**
- LinkedIn: [@upsoma](https://linkedin.com/company/upsoma)
- Twitter: [@upsoma](https://twitter.com/upsoma)
- Instagram: [@upsoma](https://instagram.com/upsoma)
- GitHub: [@upsoma](https://github.com/upsoma)

---

<div align="center">

**Built with ❤️ by the Upsoma Team**

[Website](https://upsoma.com) • [Services](https://upsoma.com/#services) • [Portfolio](https://upsoma.com/#works) • [Contact](https://upsoma.com/#contact)

</div>