# Portfolio Website - Digital Archive

A minimalist, brutalist-inspired portfolio website built with vanilla HTML, CSS, and JavaScript. Features a film showcase, project portfolio, and contact page.

## 🎯 Features

- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Fast Performance**: Lazy-loaded videos, optimized assets, minimal JavaScript
- **Accessible**: WCAG 2.1 AA compliant, keyboard navigation, screen reader friendly
- **Video Showcase**: Modal-based video player supporting Vimeo and YouTube
- **Clean Architecture**: BEM CSS methodology with utility classes
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required

## 📁 Project Structure

```
my-portfolio-website-claude/
├── index.html              # Home page
├── films.html              # Films showcase with video grid
├── projects.html           # PM & strategy projects
├── contact.html            # Contact information
├── DESIGN_SYSTEM.md        # Complete design documentation
├── README.md               # This file
│
├── css/
│   ├── reset.css          # CSS reset
│   ├── variables.css      # Design tokens (colors, spacing, etc.)
│   ├── base.css           # Typography and base elements
│   ├── layout.css         # Grid, flexbox, containers
│   ├── components.css     # Reusable components
│   └── utilities.css      # Utility classes
│
├── js/
│   ├── main.js            # Core functionality
│   ├── navigation.js      # Mobile navigation
│   └── video-loader.js    # Video modal and lazy loading
│
├── assets/
│   ├── images/            # Thumbnails, images
│   ├── fonts/             # Custom fonts (if any)
│   └── icons/             # SVG icons
│
└── data/
    └── content.json       # Content data structure
```

## 🚀 Quick Start

### 1. Local Development

The easiest way to run the site locally is with a simple HTTP server:

**Using Python (built-in on Mac/Linux):**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```

**Using VS Code:**
- Install the "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

Then open your browser to `http://localhost:8000`

### 2. Customization

#### Update Site Information

1. **Personal Information** - Update in all HTML files:
   - Replace "Your Name" with your actual name
   - Update page titles and meta descriptions
   - Change "[Your Location]" to your location

2. **Content** - Edit `data/content.json`:
   ```json
   {
     "site": {
       "name": "Your Name",
       "title": "Filmmaker & Strategist"
     },
     "films": [...],
     "projects": [...],
     "contact": {...}
   }
   ```

3. **Films** - For each film in `films.html`:
   - Update `data-title` with film title
   - Update `data-description` with film description
   - Update `data-platform` (either "vimeo" or "youtube")
   - Update `data-video-id` with your video ID
   - Replace placeholder thumbnail images in `/assets/images/`

   **Finding Video IDs:**
   - Vimeo: `https://vimeo.com/123456789` → ID is `123456789`
   - YouTube: `https://youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

4. **Projects** - Edit `projects.html`:
   - Update each `<article class="project-card">` with your project details
   - Modify title, role, date, description, and tags

5. **Contact Information** - Edit `contact.html`:
   - Update email address
   - Update LinkedIn URL
   - Update GitHub URL
   - Add your resume PDF to `/assets/resume.pdf`

#### Customize Design

**Colors** - Edit `css/variables.css`:
```css
:root {
  --color-bg: #ffffff;        /* Background color */
  --color-text: #0a0a0a;      /* Text color */
  --color-accent: #ff0000;    /* Accent color */
  --color-muted: #666666;     /* Muted text */
}
```

**Typography** - Edit `css/variables.css`:
```css
:root {
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Courier New', monospace;
}
```

**Spacing** - Adjust the spacing scale in `css/variables.css`:
```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  /* ... etc */
}
```

### 3. Add Your Content

#### Film Thumbnails

1. Create thumbnail images (recommended: 640x360px, 16:9 aspect ratio)
2. Save as: `film-1-thumb.jpg`, `film-2-thumb.jpg`, etc.
3. Place in `/assets/images/`
4. Update image paths in `films.html`

**Thumbnail Tips:**
- Use WebP format with JPG fallback for best performance
- Compress images (use tools like TinyPNG or ImageOptim)
- Keep file sizes under 100KB

#### Resume

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place in `/assets/` folder
4. Update the filename in `contact.html` if different

## 🎨 Design System

See `DESIGN_SYSTEM.md` for complete documentation on:
- Color palette
- Typography scale
- Spacing system
- Component library
- CSS architecture
- Accessibility guidelines

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## ♿ Accessibility

This site follows WCAG 2.1 Level AA guidelines:
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation (Tab, Enter, Esc)
- Focus visible states
- Color contrast ratio 4.5:1 minimum
- Skip to content link
- Screen reader friendly

**Keyboard Shortcuts:**
- `Tab` - Navigate through links and buttons
- `Enter` or `Space` - Activate buttons/links
- `Esc` - Close modal or mobile navigation

## 🚀 Deployment

### Option 1: Netlify (Recommended)

1. Create a GitHub repository for your site
2. Push your code to GitHub
3. Go to [netlify.com](https://netlify.com)
4. Click "New site from Git"
5. Select your repository
6. Deploy!

### Option 2: Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Option 3: GitHub Pages

1. Push code to a GitHub repository
2. Go to Settings → Pages
3. Select branch to deploy (usually `main`)
4. Your site will be at `https://yourusername.github.io/repo-name`

### Option 4: Cloudflare Pages

1. Push code to GitHub/GitLab
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect your repository
4. Deploy!

**All options provide:**
- Free hosting
- Automatic HTTPS
- Global CDN
- Easy custom domain setup

## 🔧 Customization Ideas

### Add Dark Mode

Uncomment the dark mode styles in `css/variables.css` and add a toggle button.

### Add Analytics

Add Google Analytics or Plausible tracking code before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### Add Contact Form

Replace static contact links with a form using:
- [Netlify Forms](https://www.netlify.com/products/forms/) (free, easy)
- [Formspree](https://formspree.io/) (free tier available)
- [EmailJS](https://www.emailjs.com/) (client-side)

### Optimize Performance

1. **Images**: Convert to WebP format
2. **CSS**: Minify CSS files for production
3. **JavaScript**: Minify JS files
4. **Fonts**: Use system fonts (already done!) or self-host custom fonts

### SEO Improvements

Add to `<head>` of each page:
```html
<!-- Open Graph / Facebook -->
<meta property="og:title" content="Your Name - Filmmaker & Strategist">
<meta property="og:description" content="Portfolio of films and strategic work">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name - Filmmaker & Strategist">
<meta name="twitter:description" content="Portfolio of films and strategic work">
<meta name="twitter:image" content="https://yoursite.com/og-image.jpg">
```

## 📝 Content Checklist

Before launching, make sure you've updated:

- [ ] All instances of "Your Name" → your actual name
- [ ] All video IDs and thumbnails
- [ ] All project descriptions
- [ ] Contact information (email, LinkedIn, GitHub)
- [ ] Resume PDF
- [ ] Page titles and meta descriptions
- [ ] Footer copyright year
- [ ] Location information
- [ ] About/bio text on home page
- [ ] Favicon (optional but recommended)

## 🐛 Troubleshooting

**Videos not loading?**
- Check that video IDs are correct
- Verify platform is set to "vimeo" or "youtube"
- Ensure videos are public/unlisted (not private)

**Images not showing?**
- Check file paths are correct
- Verify images exist in `/assets/images/`
- Check file names match exactly (case-sensitive)

**Mobile navigation not working?**
- Ensure `navigation.js` is loaded
- Check browser console for JavaScript errors

**Styles not applying?**
- Verify all CSS files are linked in correct order
- Check for typos in class names
- Clear browser cache

## 📚 Resources

- [BEM Methodology](https://getbem.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

## 🤝 Support

If you run into issues or have questions:
1. Check this README
2. Review `DESIGN_SYSTEM.md`
3. Check browser console for errors
4. Verify all file paths are correct

## 📄 License

This template is open source. Feel free to use it for your personal portfolio.

---

**Built with vanilla HTML, CSS, and JavaScript**
No frameworks, no build process, just clean code.
