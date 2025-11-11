# Company Landing Page 2.0

## Project Overview

This is a premium Astro-based landing page template for micro SaaS startups. Built with modern web technologies and optimized for performance.

**Live Site:** https://superchillmarketing.com

## Tech Stack

- **Framework:** Astro 5.5.4
- **Interactivity:** Alpine.js 3.14.3
- **Animations:** GSAP 3.12.5
- **Language:** TypeScript 5.6.3
- **Dev Server Port:** 3001

## Project Structure

```
company-landing-page2.0/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ContactForm.astro      # Contact form component (new)
│   │   ├── Faq.astro              # FAQ accordion section
│   │   ├── Features.astro         # Features showcase
│   │   ├── Footer.astro           # Site footer
│   │   ├── Header.astro           # Site header/navigation
│   │   ├── Hero.astro             # Hero section with animations
│   │   ├── PriceTable.astro       # Pricing table
│   │   ├── SeenOn.astro           # Brand logos section
│   │   ├── Showcase.astro         # Product showcase
│   │   └── Testimony.astro        # Testimonials section
│   ├── demo/
│   │   └── ai-pro-thumbnail.png   # Demo screenshot
│   ├── images/
│   │   ├── brands/                # Brand logos (Apple, GitHub, IBM, Laravel, etc.)
│   │   ├── features/              # Feature icons (one.svg, two.svg, three.svg)
│   │   ├── shots/                 # Product screenshots
│   │   ├── hero.svg               # Hero section graphic (6.5MB)
│   │   ├── logo.svg               # Company logo
│   │   ├── pedro.webp             # Testimonial avatar
│   │   └── quote.svg              # Quote decoration
│   ├── layouts/
│   │   └── Layout.astro           # Base layout template
│   ├── pages/
│   │   ├── index.astro            # Home page
│   │   └── pricing.astro          # Pricing page
│   ├── env.d.ts                   # TypeScript environment definitions
│   └── utils.ts                   # Utility constants (links, titles)
├── astro.config.mjs               # Astro configuration
├── package.json                   # Project dependencies
├── pnpm-lock.yaml                 # PNPM lock file (untracked)
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## Components Description

### Pages
- **index.astro** - Main landing page combining all components
- **pricing.astro** - Dedicated pricing page

### Layout
- **Layout.astro** - Base layout with meta tags, global styles, and Alpine.js/GSAP setup

### Core Components
- **Header.astro** - Navigation header with logo and menu
- **Hero.astro** - Hero section with GSAP animations and CTA buttons
- **Features.astro** - Feature grid showcasing product capabilities
- **Showcase.astro** - Product demonstration section
- **SeenOn.astro** - Social proof with brand logos
- **Testimony.astro** - Customer testimonials
- **PriceTable.astro** - Pricing tiers and plans
- **Faq.astro** - Frequently asked questions with Alpine.js accordion
- **ContactForm.astro** - Contact/lead capture form (newly added)
- **Footer.astro** - Site footer with links and information

## Configuration

### Astro Config (astro.config.mjs)
- Site URL: https://superchillmarketing.com
- Alpine.js integration enabled
- Custom server port: 3001
- Allowed hosts: true (for development)

### Utils (src/utils.ts)
Contains project constants:
- Title: "Get Started Today"
- Stripe buy link
- Free template link (GitHub)
- Creator Instagram link

## Available Commands

| Command | Action |
|---------|--------|
| `npm install` or `pnpm install` | Install dependencies |
| `npm run dev` or `pnpm dev` | Start dev server at localhost:3001 |
| `npm run build` or `pnpm build` | Build production site to ./dist/ |
| `npm run preview` or `pnpm preview` | Preview production build |
| `astro check` | Run TypeScript type checking |

## Git Status

**Current Branch:** main

**Untracked Files:**
- pnpm-lock.yaml
- src/components/ContactForm.astro

**Recent Work:**
- Upgraded to Astro v5
- Added image shadow effects
- Implemented fade-in effect on hero image
- Created ContactForm component

## Development Notes

### Animation Libraries
- **GSAP** is used for sophisticated animations (hero section, scroll effects)
- **Alpine.js** handles interactive components (FAQ accordion, mobile menu)

### Image Assets
- Hero image is quite large (6.5MB) - consider optimization
- Brand logos include: Apple, GitHub, IBM, Laravel, Tailwind, McLaren, etc.
- Feature and shot icons are organized in subdirectories

### Styling
The project uses Skeleton CSS framework (not in dependencies, likely via CDN in Layout.astro)

### External Links
- Stripe payment integration for premium purchases
- Links to GitHub for free version
- Creator Instagram: @codetonero

## Template Origin

Based on "Astro Idol Pro" template by LaB-CH3
- Free version: https://github.com/LaB-CH3/Astro-idol
- More templates: https://github.com/LaB-CH3

## Company Story Brand
Use this section as a guide for brand and tone.

### Company Overview
Rapid Insights is a data consulting business that helps small to medium-sized businesses transition from manual spreadsheet-based operations to automated data platforms.
What we do:
We build custom data infrastructure that extracts data from multiple sources (spreadsheets, databases, business tools), organizes it through automated pipelines, keeps it fresh with scheduled updates, and presents it through custom-designed dashboards.
Who we serve:
Businesses currently managing data in spreadsheets who lack technical infrastructure but need organized, accessible data to make informed decisions. Most clients don't know terms like "ETL" or "data pipeline"—they just know they're spending too much time compiling reports manually.

### 1. Aspirational Identity: The efficient leader
Our customers want to stop wasting time on manual work and reclaim their weekends. They aspire to run their business efficiently, not be trapped in spreadsheets. This identity sells best because the pain is immediate, tangible, and quantifiable.

### 2. The Promise: Drowning in spreadsheets
The core problem we solve: "Stop drowning in spreadsheets. Start running your business."

### 3. Solution Clarity: Customer as the hero
What they achieve (not what you do): "Pull any report in seconds. See your numbers update automatically. Make decisions with confidence—not guesswork."

### CTAs
**Main**
Book Free Call

### TODO - Free offers
* Customized roadmap
* Data ROI calculator
* Data maturity test

### Service / Product Offerings
Card 1: Data Command Center
Your starting point

3 data sources connected
Daily automated updates
Unlimited custom dashboards
Reports in seconds

For: Escaping spreadsheet chaos
[Get Started]

Card 2: Scale & Analyze
Expand your capabilities

Everything in Command Center
Unlimited data sources
Ongoing analytics partnership
Advanced reporting & trends
Monthly optimization

For: Complex needs, long-term growth
[Let's Talk]

Card 3: AI-Ready
Add intelligence

Predictive analytics
Automated anomaly detection
Smart recommendations
Custom ML features

Requires Command Center first
For: Moving beyond dashboards
[Explore AI]