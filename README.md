# Atelier-One-Modern-Editorial-Fashion-Store
Atelier One — Modern Editorial Fashion Store Frontend

A complete, polished, and fully responsive fashion store frontend designed for Atelier One, a fictional independent clothing brand characterized by minimalist tailoring, conscious materials, and enduring silhouettes.

Built as an exemplary first-year web development project using plain HTML5, CSS3 (CSS Grid & Flexbox), and vanilla JavaScript — zero frameworks, no external libraries, and no paid services.

1. Project Overview & Design Direction
Brand Aesthetic: Clean, modern editorial fashion look inspired by minimalist luxury houses (The Row, Lemaire, Totême, Studio Nicholson).
Color Palette:
Warm Off-White Canvas: --bg-body: #FAF8F5, --bg-subtle: #F3EFE9
Dark Charcoal Typography: --text-primary: #1C1B18, --text-secondary: #57554F
Muted Olive Accent: --color-olive: #4E5D43, --color-olive-dark: #394532, --color-olive-border: #D1DBCB
Subtle Badges: Rust red (#8F3A2E) for Sale/Archive, Olive (#4E5D43) for New Season, Dark Charcoal (#292825) for Limited Editions.
Typography:
Serif: Cormorant Garamond / Didot / Georgia for high-fashion editorial headlines.
Sans-Serif: Plus Jakarta Sans / system sans-serif for clean, legible interface text.
Visual Polish: Tactile product photography, subtle hover flip reveals (primary view to detail/alt view), and clean micro-interactions.
2. File Organization
atelier-one/
│
├── index.html         # Semantic HTML5 markup structure
├── style.css          # Plain CSS3 styles (CSS Grid, Flexbox, Custom Properties)
├── script.js          # Clean, modular vanilla JavaScript application logic
├── README.md          # Project guide and presentation documentation
│
└── assets/
    └── images/        # 30 bespoke local SVG vector illustrations
        ├── trench-coat.svg & trench-coat-alt.svg
        ├── merino-knit.svg & merino-knit-alt.svg
        ├── pleated-trousers.svg & pleated-trousers-alt.svg
        ├── canvas-tote.svg & canvas-tote-alt.svg
        ├── leather-loafers.svg & leather-loafers-alt.svg
        ├── wool-blazer.svg & wool-blazer-alt.svg
        ├── silk-dress.svg & silk-dress-alt.svg
        ├── chelsea-boots.svg & chelsea-boots-alt.svg
        ├── alpaca-scarf.svg & alpaca-scarf-alt.svg
        ├── derby-shoes.svg & derby-shoes-alt.svg
        ├── brass-earrings.svg & brass-earrings-alt.svg
        ├── denim-jacket.svg & denim-jacket-alt.svg
        ├── calfskin-belt.svg & calfskin-belt-alt.svg
        ├── woven-slides.svg & woven-slides-alt.svg
        ├── hero-editorial.svg
        └── story-craft.svg
3. Features & Architecture
A. Semantic HTML5 Markup (index.html)
Slim Announcement Bar: Promotional banner with currency selector and link to seasonal editorial.
Site Header:
Spaced editorial brand typography (ATELIER ONE).
Primary navigation (Collection, New Arrivals, Clothing, Footwear, Accessories, Editorial, Atelier).
Search input with clear button.
Interactive Wishlist button with live counter badge.
Interactive Shopping Bag button with live item counter badge.
Accessible mobile hamburger button (aria-expanded, aria-controls).
Hero Banner:
Editorial campaign headline ("Form, Fiber & Modern Quietude").
"Shop The Collection" and "Explore The Journal" call-to-action buttons.
Trust highlights (100% Traceable Wools, Limited Atelier Runs, Carbon-Neutral Dispatch).
Framed hero visual with floating collection pill.
Visual Category Navigation ("Curated Disciplines"):
4 visual exploration cards: New Arrivals, Tailored Clothing, Footwear, and Accessories.
Clicking any card automatically filters the catalog and scrolls into view.
Catalog Section:
14 curated product cards (exceeding the 12-item requirement).
Category filter chips (All Pieces, New Arrivals, Clothing, Footwear, Accessories, Archive Sale).
Live search input matching names, fabrics, and categories.
Sort dropdown (Featured, Price: Low to High, Price: High to Low, Highest Discount, Alphabetical).
Live counter displaying matching piece count.
Friendly empty-state with a "Reset All Filters" button when no items match.
Product Cards Architecture:
Absolute CSS positioning for Sale/New badges and heart wishlist buttons.
Smooth hover flip effect: primary front view fades into detail/alt view.
Quick "Add to Bag" button overlay.
Color swatch indicators.
Accessible button labels with descriptive aria-label.
Dual-layer image fallback: onerror automatically swaps in local SVG artwork if offline.
Featured Editorial Story:
Split-screen story block ("Purity of Material, Longevity in Form").
Designer quote, workshop provenance (Biella & Porto), and sustainability metrics.
Brand Value Pillars:
4 guarantee cards: Artisanal Provenance, Insured Express Courier, 30-Day Easy Returns, Lifetime Care Guarantee.
Slide-Over Shopping Bag Drawer:
Side drawer with dark backdrop blur.
Free shipping progress bar ($250 threshold) calculated live.
Item list with quantity adjusters (- and +), line item totals, and remove buttons.
Subtotal, shipping estimate, and order total calculation.
Clear demo disclaimer: "Student Demo Showcase: No real orders or transactions are processed."
Toast Notification System:
Non-intrusive floating feedback pill for bag additions and wishlist updates.
Comprehensive Footer:
Brand manifesto, social media links, categorized navigation links, and newsletter subscription form with live frontend validation.
4. CSS Techniques Used (style.css)
CSS Custom Properties (Variables): Centralized design system tokens for colors, fonts, spacing, shadows, and transitions.
CSS Grid:
Desktop product grid: grid-template-columns: repeat(4, 1fr).
Tablet product grid: grid-template-columns: repeat(3, 1fr).
Mobile product grid: grid-template-columns: repeat(2, 1fr) down to 1fr on small mobile screens.
Category tiles: repeat(4, 1fr) scaling to repeat(2, 1fr) and 1fr.
Split layouts: 2-column editorial grids.
CSS Flexbox: Used for announcement bar, header navigation, product pricing, quantity controls, drawer headers, and footer bottom bar.
CSS Positioning:
position: sticky on site header with scroll shadow.
position: relative and position: absolute for badges, wishlist heart icons, and quick-add overlays.
position: fixed for shopping bag drawer, backdrop overlay, and toast notifications.
CSS Transitions & Animations:
Opacity and transform transitions for the hover alternate image reveal.
Keyframe bounce animation (@keyframes badgePop) on badge counters when clicked.
5. Vanilla JavaScript Architecture (script.js)
Clean State Object:
javascript
const state = {
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  cart: [],
  wishlist: new Set(),
  freeShippingThreshold: 250
};
Filter & Search Engine: Real-time filtering synchronizing search inputs across the page with debounced execution and friendly empty-state handling.
Shopping Bag Engine: Full client-side cart logic supporting item creation, quantity adjustments, item removal, drawer visibility toggles, and dynamic shipping progress bar recalculation.
Wishlist Toggle: Manages a JavaScript Set of saved IDs, toggling visual heart states and updating header counts with feedback toasts.
Graceful Fallbacks: Event listener on image errors that instantly replaces any unresolvable image with local vector artwork without broken image icons.
6. How to Open the Website Locally

You can run the project in any modern web browser using either method:

Option 1: Direct File Open (No Server Needed)
Navigate to the project directory in your file manager (Finder / Explorer): /Users/yuvrajgupta/.gemini/antigravity/scratch/atelier-one
Double-click index.html to open it directly in Chrome, Safari, Edge, or Firefox.
Option 2: Using a Simple Local Web Server (Recommended)

From your terminal:

bash
# Navigate to project folder
cd /Users/yuvrajgupta/.gemini/antigravity/scratch/atelier-one
# Using Python 3 (built-in on macOS/Linux):
python3 -m http.server 8080

Then open your browser and navigate to: http://localhost:8080

7. First-Year Web Development Student Presentation Notes

When presenting this project for grading:

Explain the HTML Structure: Show semantic tags (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>) and emphasize accessibility (aria-label, aria-expanded, role="tablist").
Explain the CSS Layouts: Point out the use of CSS Custom Properties for theme consistency, demonstrate how CSS Grid powers the product grid, and show the media queries that adapt from 4 columns to 1 column.
Demonstrate CSS Positioning: Show the product card hover effect where position: absolute image overlays transition opacity, and explain how the badges and heart buttons stay pinned to the corners.
Demonstrate JavaScript Features:
Click category filter chips (Clothing, Footwear, etc.) and show instant filtering.
Type in the search box to demonstrate real-time matching.
Click a heart icon to show the wishlist counter incrementing and toast feedback.
Click "Add to Bag" to demonstrate the slide-over cart drawer opening, quantity adjusting, and the free shipping progress bar moving towards $250.
Demonstrate the mobile menu by resizing the browser window to mobile width.
