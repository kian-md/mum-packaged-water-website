# Mum Packaged Drinking Water - Design Guidelines

## Design Approach
**Reference-Based**: Premium bottled water brands (Evian, Fiji Water, Voss) with focus on purity, trust, and sophistication. Clean, minimal aesthetic emphasizing product quality and certifications.

## Brand Identity

**Brand Name**: Mum  
**Tagline**: Pure • Safe • Refreshing  
**Color Palette**:
- Deep Navy Blue: #0C2D48 (primary)
- Aqua Blue: #0FB4D4 (accent)
- Gold Accent: #F2C46D (highlights)

**Typography**:
- Headings: Serif font for "Mum" brand name (Playfair Display or similar elegant serif)
- Body: Clean sans-serif - Inter or Open Sans
- Hierarchy: Large serif for brand, medium sans-serif for section titles, regular sans-serif for body

## Layout System

**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 on desktop, py-12 on mobile
- Container: max-w-7xl for full sections, max-w-6xl for content areas
- Card spacing: gap-6 to gap-8 in grids

**Responsive Breakpoints**:
- Mobile: Single column stacking
- Tablet (md): 2-column layouts
- Desktop (lg): Multi-column grids (up to 4 columns)

## Core Components

### Header (Sticky)
- Transparent on hero, solid on scroll
- Logo left (Mum + bottle icon from provided PNG)
- Navigation right: Home | About | Process | Products | Certifications | Contact
- Mobile: Hamburger menu

### Hero Section
- Full-width background: Provided water ripple gradient image (hero-bg.jpg)
- Height: 90vh on desktop, 70vh on mobile
- Centered content with provided hero-logo.png
- Brand name "Mum" in large serif
- Subtitle "PACKAGED DRINKING WATER" in smaller sans-serif
- Tagline with bullet separators: "PURE • SAFE • REFRESHING"
- Dual CTA buttons with blur backdrop effect:
  - Primary: "Know More" (links to About)
  - Secondary: "Contact for Bulk Orders"

### Section Layouts

**About Mum** (2-column on desktop):
- Left: Brand story text with generous line-height
- Right: Bottle/plant image (use provided bottle1.jpg)

**Treatment Process** (Horizontal timeline):
- 6 cards in scrollable row on mobile, full row on desktop
- Steps: Raw Filtration → Carbon Filter → RO → UV → Ozone → Mineral Balance
- Each card: Icon (use Heroicons water-related icons) + title + brief description
- Connected with arrow indicators

**Products Grid**:
- 4-column grid on desktop (2 on tablet, 1 on mobile)
- Cards for: 500ml, 1L, 2L, 20L
- Each card: Bottle image, size, description, "Ideal for..." use case
- Uniform card heights with subtle borders

**Why Choose Mum**:
- 4-column icon grid
- Large icons (Heroicons): beaker (Pure), shield-check (Safe), badge-check (Certified), sparkles (Hygienic)
- Title + short description under each

**Certifications**:
- Display FSSAI and ISI badge icons
- Certification numbers prominently shown
- Download buttons for lab reports (PDF placeholders)

**Contact/Bulk Enquiry**:
- 2-column layout (form left, map/address right)
- Form fields: Name, Phone, Email, Message (with product type, quantity, city)
- Validation indicators
- Map placeholder with address details

### Footer
- 3-column layout on desktop
- Left: Small Mum logo
- Center: Address, phone, email
- Right: Social icons
- Bottom: Copyright line
- Generous padding (py-12)

## Images

**Hero Image**: Use provided hero-bg.jpg - water ripple gradient (teal to gold to blue)  
**Logo**: hero-logo.png for hero section, mum-logo-transparent.png for header/footer  
**Product**: bottle1.jpg for product cards and about section  
**Certifications**: Placeholder badges for FSSAI and ISI  
**Contact**: Google Maps embed placeholder

## Page-Specific Guidelines

**About Page**: Hero with shorter height (50vh), expanded brand story with mission/values cards  
**Process Page**: Vertical detailed step cards with expanded descriptions  
**Products Page**: Large product grid with bigger bottle images and detailed specs  
**Certifications Page**: Certificate images in masonry-style grid  
**Contact Page**: Full-width form with embedded map

## Form Design
- Rounded input fields with subtle borders
- Focus states with aqua blue accent
- Error states with red indicators
- Submit button with navy background and gold hover
- Generous spacing between fields (mb-6)

## Navigation Pattern
- Smooth scroll to sections on homepage
- Route-based navigation for dedicated pages
- Active state indicators for current page
- Mobile menu slides from right

## Quality Standards
- All images optimized for web
- Lazy loading for below-fold content
- SEO meta tags on all pages
- Accessible form labels and ARIA attributes
- Fast loading with minimal animations