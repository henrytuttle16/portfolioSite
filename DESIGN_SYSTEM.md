# Digital Archive: Design System & Brand Guide
This document outlines the design system, brand voice, and component roadmap for a personal portfolio website.

## Vibe & Aesthetic
The core concept is "Digital Archive"—a space that feels intentional, curated, and timeless. It balances a high-concept, minimalist aesthetic with a clear, user-friendly information hierarchy. The design should be clean, monochrome-leaning, and typographically bold.

**Core Principles:**
- **Clarity First:** Despite the creative direction, the primary goal is to communicate information effectively.
- **Purposeful Simplicity:** Interactivity should be deliberate, not flashy. Use of stark contrasts, monospace fonts, and grid-based layouts.
- **Approachable Minimalism:** Clean and structured, but not cold. Use subtle warmth through spacing and hierarchy.
- **Content-Focused:** The design serves the content (films, projects, writing), not the other way around.
- **Performance-First:** Lightweight, fast-loading design. Optimize for video content delivery without compromising speed.
- **Mobile-Responsive:** Seamless experience across all device sizes, from phone to desktop.

**Inspiration:**
- **pg-lang.com:** High-contrast, brutalist typography; "newsfeed" style layout.
- **cnewton.org:** Minimalist, clean grid; use of monospace fonts; clear category segmentation.
- **elsewheremag.org:** Intentional use of white space; creative borders.

## Brand Voice
The voice should reflect the owner's identity: a Mandarin learner, strategist, and film lover.

- **Strategist:** Clear, concise, and structured.
- **Film Lover:** Evokes a sense of narrative and curation.
- **Mandarin Learner:** Hints of global perspective and intellectual curiosity.

Tone should be professional yet personal, avoiding jargon where possible.

## Technical Approach

**Stack:**
- Vanilla HTML5, CSS3, JavaScript (ES6+)
- No frameworks or dependencies for core functionality
- Lightweight, semantic, accessible

**Video Strategy:**
- Mixed platform embeds (Vimeo, YouTube) with consistent styling
- Lazy loading pattern (load iframes only when needed)
- Thumbnail facade for fast initial page load

**Performance:**
- Mobile-first responsive design
- Lazy loading for videos and images
- Optimized images (WebP with fallbacks)
- Minimal JavaScript footprint
- Target Lighthouse score: 90+

**Browser Support:**
- Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Color Palette

**Monochrome Base:**
- Background: `#ffffff` (White)
- Text: `#0a0a0a` (Near Black)
- Borders: `#0a0a0a` (Near Black)
- Muted Text: `#666666` (Medium Gray)

**Accent:**
- Accent Color: `#ff0000` (Red) - used sparingly for emphasis

## Typography

**Font Families:**
- Primary: System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- Monospace: `'Courier New', monospace` (for labels, metadata)

**Scale:**
- XS: 12px (0.75rem) - Captions, labels
- SM: 14px (0.875rem) - Small text
- Base: 16px (1rem) - Body text
- LG: 20px (1.25rem) - Subheadings
- XL: 24px (1.5rem) - Section titles
- 2XL: 32px (2rem) - Page titles
- 3XL: 48px (3rem) - Hero headings

**Line Height:**
- Headings: 1.2
- Body: 1.6

## Spacing System

**8px Base Unit:**
- XS: 8px (0.5rem)
- SM: 16px (1rem)
- MD: 24px (1.5rem)
- LG: 32px (2rem)
- XL: 48px (3rem)
- 2XL: 64px (4rem)

## Component Roadmap
A list of components to be built, forming the core of the design system.

### Navigation
- **GlobalNav:** A persistent, high-impact navigation bar
- **MobileNav:** Responsive mobile navigation (hamburger or stacked)
- **Footer:** Minimalist footer with copyright info

### Typography
- **Heading:** Oversized, bold headings for impact
- **Body:** Clean, readable body text
- **Monospace:** For labels, dates, and metadata

### Layout
- **Container:** Max-width container for content
- **GridContainer:** A flexible grid system for layout
- **ResponsiveContainer:** Handles mobile/tablet/desktop breakpoints

### Video Components
- **VideoGrid:** Grid layout for film thumbnails
- **VideoCard:** Individual video item with thumbnail and metadata
- **VideoModal:** Modal overlay for video playback
- **VideoEmbed:** Flexible wrapper supporting Vimeo, YouTube, and other platforms
- **VideoFacade:** Lazy-loading thumbnail that loads iframe on click

### Project Components
- **ProjectList:** Container for project items
- **ProjectCard:** Card-based component for individual projects
- **ProjectMeta:** Metadata display (role, date, tags)

### UI Elements
- **Button:** Simple, brutalist-style button
- **Link:** Styled anchor tags with hover states
- **SocialLinks:** Link component for LinkedIn, GitHub, etc.
- **ResumeViewer:** Component for displaying/downloading resume

### Utility
- **Modal Overlay:** Reusable modal backdrop
- **Close Button:** Consistent close button styling
- **Loading State:** Simple loading indicator

## Layout Grid

**Desktop (1024px+):**
- Max width: 1200px
- Grid columns: 12
- Gap: 32px

**Tablet (768px - 1023px):**
- Max width: 768px
- Grid columns: 8
- Gap: 24px

**Mobile (320px - 767px):**
- Max width: 100%
- Grid columns: 4
- Gap: 16px

## Interactions

**Hover States:**
- Links: Underline on hover
- Buttons: Background color change
- Video cards: Subtle scale or border change

**Transitions:**
- Fast: 150ms (for small UI changes)
- Base: 250ms (for most interactions)

**Focus States:**
- Visible outline for keyboard navigation
- High contrast for accessibility

## Accessibility Guidelines

**Required Standards:**
- WCAG 2.1 Level AA compliance
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support (Tab, Enter, Esc)
- Color contrast ratio 4.5:1 minimum
- Alt text for all images
- Focus visible states
- Skip to content link
- Video captions (mention in descriptions)

## File Structure

```
my-portfolio-website-claude/
├── index.html                 # Home page
├── films.html                 # Films showcase
├── projects.html              # PM/Strategy projects
├── contact.html               # Contact page
│
├── css/
│   ├── reset.css             # CSS reset/normalize
│   ├── variables.css         # CSS custom properties
│   ├── base.css              # Base typography & elements
│   ├── layout.css            # Grid/flexbox layouts
│   ├── components.css        # Reusable components
│   └── utilities.css         # Utility classes
│
├── js/
│   ├── main.js               # Core functionality
│   ├── video-loader.js       # Lazy loading & embed handling
│   └── navigation.js         # Mobile navigation
│
├── assets/
│   ├── images/               # Thumbnails, logos, etc.
│   ├── fonts/                # Custom fonts (if any)
│   └── icons/                # SVG icons
│
└── data/
    └── content.json          # Centralized content data
```

## CSS Architecture

**Methodology:** Hybrid BEM + Utility Classes

**Block Element Modifier (BEM):**
```css
.block {}
.block__element {}
.block__element--modifier {}
```

**Utility Classes:**
```css
.u-text-center {}
.u-mb-large {}
.u-hide-mobile {}
```

**Example:**
```html
<div class="video-grid">
  <div class="video-grid__item video-grid__item--featured">
    <img class="video-grid__thumbnail" src="..." alt="...">
    <h3 class="video-grid__title u-mb-sm">Film Title</h3>
  </div>
</div>
```

## Content Data Structure

Content should be centralized in `data/content.json`:

```json
{
  "films": [
    {
      "id": 1,
      "title": "Film Title",
      "year": 2024,
      "duration": "5:30",
      "platform": "vimeo",
      "videoId": "123456789",
      "thumbnail": "/assets/images/film-1-thumb.jpg",
      "description": "Brief description..."
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "role": "Product Manager",
      "date": "2023-2024",
      "description": "Project description...",
      "tags": ["Strategy", "Product"]
    }
  ],
  "contact": {
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/...",
    "github": "https://github.com/...",
    "resume": "/assets/resume.pdf"
  }
}
```

## Development Phases

### Phase 1: Foundation
- File structure setup
- CSS system (reset, variables, base styles)
- Header/footer components
- Home page

### Phase 2: Films Page
- Video grid layout
- Modal component
- Lazy loading implementation
- Video embed handling

### Phase 3: Projects & Contact
- Projects page layout
- Contact page with links
- Navigation integration

### Phase 4: Polish & Optimization
- Performance optimization
- Accessibility audit
- Cross-browser testing
- Content finalization
