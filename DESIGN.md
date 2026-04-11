# Design System — Menco Motorsports

## Product Context
- **What this is:** Showcase website with merch store for a diesel repair and performance shop
- **Who it's for:** Individual diesel truck owners and fleet managers in Lafayette, LA
- **Space/industry:** Automotive diesel repair, local service business
- **Project type:** Marketing site with simple e-commerce (reserve for pickup)

## Aesthetic Direction
- **Direction:** Industrial/Utilitarian
- **Decoration level:** Minimal. One subtle diagonal hatch pattern in the hero section. No gradients, blobs, swoops, or shadows. Red accent lines are structural, not decorative.
- **Mood:** Function-first, serious about craft. The shop is the brand. Design gets out of the way and lets real work photos speak. Feels like a well-maintained machine shop, not a SaaS product.
- **Reference sites:** Doc's Diesel (dark theme, heavy-duty), Monument Diesel (black/red industrial)

## Typography
- **Display/Hero:** Barlow Condensed 800, uppercase, letter-spacing 2px — Industrial, compressed, reads like machine shop signage
- **Body:** Barlow 400 — Clean, legible, pairs perfectly with its condensed sibling
- **UI/Labels:** Barlow 500
- **Data/Tables:** Barlow 500, font-variant-numeric: tabular-nums — For prices, phone numbers, order refs
- **Code:** JetBrains Mono (if ever needed)
- **Loading:** Self-hosted woff2 in /public/fonts/. No Google Fonts CDN. font-display: swap. Preload primary weights (Barlow 400, Barlow Condensed 800).
- **Scale:**
  - Hero h1: 48px / 1.1 line-height (mobile: 32px)
  - Section h2: 32px / 1.2 (mobile: 24px)
  - Card h3: 16px / 1.3, uppercase, letter-spacing 1px
  - Body: 16px / 1.6
  - Small/captions: 13px / 1.5
  - All sizes rem-based for accessibility

## Color
- **Approach:** Restrained (1 accent + neutrals, red is rare and meaningful)
- **Backgrounds:**
  - Primary: `#0a0a0a`
  - Surface (cards): `#111111`
  - Elevated: `#1a1a1a`
- **Text:**
  - Primary (headings): `#ffffff`
  - Body: `#d4d4d4`
  - Muted: `#888888`
  - Dim: `#555555`
- **Accent:** `#c41e1e` — CTAs, borders, tags, large headings, decorative elements ONLY
- **Accessible accent:** `#e85454` — For any red text on dark backgrounds (meets WCAG AA 4.5:1)
- **Border:** `#222222`
- **Semantic:**
  - Success: `#22c55e`
  - Warning: `#eab308`
  - Error: `#ef4444`
  - Info: `#3b82f6`
- **Contrast rule:** Never use #c41e1e for body text, links, or form labels on dark backgrounds (~2.8:1, fails WCAG AA). Use #e85454 or brighter.

## Icons
- **Service cards:** No icons. Bold condensed titles + red hover border carry the hierarchy. Icons looked vibe-coded and competed with the industrial aesthetic.
- **Elsewhere (nav, footer, social):** Lucide SVG line icons, 1.5px stroke, white (#fff) default, red on hover. Only when functionally needed (social links, hamburger menu, close button).
- **Never use emoji as icons anywhere on the site.**

## Spacing
- **Base unit:** 4px
- **Density:** Comfortable
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px) 4xl(80px)
- **Section padding:** 80px vertical / 40px horizontal (desktop), 48px / 20px (mobile)
- **Card padding:** 24px-32px
- **Card gap:** 24px

## Layout
- **Approach:** Grid-disciplined (strict columns, predictable alignment)
- **Breakpoints:**
  - Mobile: 0-639px
  - Tablet: 640-1023px
  - Desktop: 1024px+
- **Max content width:** 1000px, centered
- **Grid columns:**
  - Services: 2 columns desktop, 1 mobile
  - Gallery: 3-column masonry desktop, 2 tablet, 1 mobile
  - Merch: 3 columns desktop, 2 tablet, 1 mobile
  - Contact: 2 columns (60/40 form/info) desktop, stacked mobile
- **Border radius:** 0px everywhere. Sharp corners match the industrial/mechanical aesthetic. No rounded cards, no pill buttons.
- **Borders:** 1px solid #222 for card borders. 2px solid #c41e1e for accent borders (nav bottom, footer top). No box-shadows.

## Motion
- **Approach:** Minimal-functional (only transitions that aid comprehension)
- **Easing:** ease-out for enter, ease-in for exit, ease-in-out for move
- **Duration:** micro 50-100ms, short 150-250ms
- **Used for:** Card hover border color (0.2s), form field focus (0.15s), mobile nav open/close (0.25s)
- **Never used for:** Scroll animations, entrance animations, parallax, decorative motion. The site should feel fast and solid.

## Photography
- **Source:** Real photos from client's Facebook page. No stock photos ever.
- **Gallery aspect ratio:** 4:3 landscape, cropped before upload. Masonry handles minor variation.
- **Hero photo:** Split layout. Photo on right at full brightness, text on solid dark left. Object-fit: cover.
- **Merch photos:** Flat lay on dark background (#1a1a1a). Square (1:1) if lifestyle photos.
- **Alt text:** Required on all images. Descriptive (e.g., "2018 Ford F-250 with DCR conversion installed at Menco Motorsports").
- **Optimization:** Astro Image component for automatic WebP conversion and srcset. Blur-up LQIP placeholders for gallery.

## Accessibility
- WCAG AA compliance
- Focus-visible: 2px solid #e85454 outline, 2px offset on all interactive elements
- Touch targets: minimum 44x44px on all buttons and links
- Skip-to-content link
- Keyboard-navigable gallery (GLightbox) and merch ordering
- Form labels explicitly associated with inputs (no placeholder-only labels)
- All images require descriptive alt text

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-11 | Initial design system created | Created by /design-consultation based on office-hours design doc, competitive research, and design review |
| 2026-04-11 | 0px border radius everywhere | Industrial aesthetic, differentiates from rounded template clones |
| 2026-04-11 | Barlow Condensed as display font | Reads as machine shop signage, unusual for diesel shop category |
| 2026-04-11 | No icons on service cards | Icons looked vibe-coded, bold titles carry hierarchy without them |
| 2026-04-11 | Self-hosted fonts | Eliminates Google Fonts CDN dependency, better performance + privacy |
| 2026-04-11 | Zero decoration | Photos become the hero, nothing competes with real work imagery |
