# Mum Packaged Drinking Water - Website

## Overview
A premium, responsive website for Mum Packaged Drinking Water - a **new business launching in tier 2 and tier 3 cities across India**. The website emphasizes purity, safety, and quality certifications with a water ripple gradient design aesthetic.

## Project Structure

```
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── TopBar.tsx     # Contact bar with phone, email, WhatsApp
│   │   │   ├── Header.tsx     # Sticky navigation header
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   └── sections/      # Homepage section components
│   │   │       ├── HeroSection.tsx
│   │   │       ├── AboutSection.tsx
│   │   │       ├── WhoWeServeSection.tsx
│   │   │       ├── ProcessSection.tsx
│   │   │       ├── ProductsSection.tsx
│   │   │       ├── BenefitsSection.tsx
│   │   │       ├── CertificationsSection.tsx
│   │   │       └── ContactSection.tsx
│   │   ├── pages/             # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Certifications.tsx
│   │   │   └── Contact.tsx
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utility functions
│   │   └── App.tsx            # Main app with routing
│   └── index.html             # HTML template with SEO meta tags
├── server/                    # Backend Express server
│   ├── routes.ts              # API endpoints
│   ├── storage.ts             # In-memory data storage
│   └── github.ts              # GitHub integration helper
├── shared/                    # Shared types and schemas
│   └── schema.ts              # Enquiry schema and types
└── attached_assets/           # Brand assets (logos, images)
```

## Brand Identity

- **Brand Name**: Mum
- **Tagline**: Pure • Safe • Refreshing
- **Contact Email**: wecare@mumdrinks.com
- **Phone**: +91 98765 43210
- **Primary Colors**:
  - Deep Navy Blue: #0C2D48
  - Aqua Blue: #0FB4D4
  - Gold Accent: #F2C46D

## Target Market

- Tier 2 and Tier 3 cities across India
- Customer segments: Homes & Families, Offices & Corporates, Retail & Shops, Events & Functions

## Features

### Pages
1. **Home** - Full landing page with all sections including "Who We Serve"
2. **About** - Brand story, mission, values (positioned as new business)
3. **Process** - Detailed 6-stage purification process
4. **Products** - All bottle sizes (500ml, 1L, 2L, 20L)
5. **Certifications** - FSSAI, ISI certificates and lab testing
6. **Contact** - Enquiry form with contact information

### Key Components
- **TopBar**: Fixed contact bar with phone, email (wecare@mumdrinks.com), and WhatsApp
- **Who We Serve Section**: 4 cards highlighting customer segments
- **Header**: Sticky navigation with scroll behavior
- **Contact Form**: Bulk enquiry form with validation

### Functionality
- Responsive design for mobile, tablet, desktop
- TopBar with contact info that hides on scroll
- Sticky header with smooth scroll navigation
- Contact/enquiry form with validation
- In-memory storage for enquiry submissions

## API Endpoints

- `POST /api/enquiries` - Submit a new enquiry
- `GET /api/enquiries` - List all enquiries (admin)
- `GET /api/enquiries/:id` - Get single enquiry

## Running the Application

The application runs on port 5000 with:
- Frontend: Vite React development server
- Backend: Express API server

```bash
npm run dev
```

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn/UI
- **Backend**: Express.js, Node.js
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Data Fetching**: TanStack Query

## Assets

All brand assets are located in `attached_assets/`:
- `hero-background_1764884714555.jpg` - Water ripple hero background
- `mum-logo-transparent_1764879258461.png` - Main logo
- `hero-logo_1764879253961.png` - Hero section logo
- `bottle1_1764879240478.jpg` - Product bottle image

## Recent Changes

- December 2024: Latest updates
  - Added TopBar component with phone, email (wecare@mumdrinks.com), and WhatsApp
  - Updated hero section with new water ripple background image
  - Added "Who We Serve" section with 4 customer segment cards
  - Updated About content to reflect new business status (removed milestones)
  - Updated all contact information to wecare@mumdrinks.com

- December 2024: Initial website creation
  - Implemented all 6 pages with responsive design
  - Added contact form with validation
  - Integrated brand assets and color scheme
  - Set up API endpoints for enquiry management

## User Preferences

- Premium, professional water brand aesthetic
- Clean, modern design with trust-building elements
- Focus on certifications and quality messaging
- Target audience: Tier 2 and 3 cities in India
- Contact email: wecare@mumdrinks.com
