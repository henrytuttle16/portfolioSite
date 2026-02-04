# Next Steps - Launch Checklist

Follow these steps to customize and launch your portfolio website.

## 🎬 Immediate Actions

### 1. Test the Site Locally

Start a local server to preview your site:

```bash
# Using Python 3 (recommended for Mac)
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

**Test checklist:**
- [ ] Home page loads correctly
- [ ] Navigation works (try mobile view)
- [ ] Films page displays video grid
- [ ] Click a video card to test modal
- [ ] Projects page shows all projects
- [ ] Contact page displays all links
- [ ] Resize browser to test responsive design

---

## 📝 Content Customization

### 2. Update Personal Information

**In ALL HTML files** (`index.html`, `films.html`, `projects.html`, `contact.html`):

- [ ] Replace "Your Name" with your actual name
- [ ] Update page `<title>` tags
- [ ] Update meta descriptions
- [ ] Change "[Your Location]" to your actual location

**Quick find & replace:**
- Find: `Your Name` → Replace with: `[Your Actual Name]`
- Find: `your.email@example.com` → Replace with: `[Your Email]`

### 3. Add Your Films

For each of your 7 films:

1. **Get video IDs:**
   - Vimeo: `https://vimeo.com/123456789` → ID is `123456789`
   - YouTube: `https://youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

2. **Create thumbnails:**
   - Export thumbnail from video (recommended: 640x360px, 16:9 ratio)
   - Save as: `film-1-thumb.jpg`, `film-2-thumb.jpg`, etc.
   - Place in `/assets/images/` folder

3. **Update `films.html`:**
   - [ ] Update each `data-title` with your film title
   - [ ] Update each `data-description` with film description
   - [ ] Update each `data-platform` ("vimeo" or "youtube")
   - [ ] Update each `data-video-id` with your video ID
   - [ ] Update year and duration in `<p class="video-card__meta">`
   - [ ] Update image `src` and `alt` attributes

4. **Update `data/content.json`:**
   - [ ] Update films array with your actual film data

### 4. Add Your Projects

**In `projects.html`:**

For each project:
- [ ] Update title
- [ ] Update role (Product Manager, Analyst, etc.)
- [ ] Update date
- [ ] Update description (2-3 sentences highlighting impact)
- [ ] Update tags (Strategy, Product, Research, etc.)

**Tips:**
- Focus on outcomes and impact
- Use metrics when possible (e.g., "increased engagement by 40%")
- Keep descriptions concise but meaningful

### 5. Update Contact Information

**In `contact.html`:**

- [ ] Email address (appears in 2 places)
- [ ] LinkedIn URL and display text
- [ ] GitHub URL and display text
- [ ] Add your `resume.pdf` to `/assets/` folder

**Resume checklist:**
- [ ] Export resume as PDF
- [ ] Name it `resume.pdf`
- [ ] Place in `/assets/` folder
- [ ] File size under 5MB (recommended)

### 6. Customize Home Page Bio

**In `index.html`:**

- [ ] Update hero heading if desired
- [ ] Update bio section with your actual background
- [ ] Adjust description of films/projects sections
- [ ] Update "Available for collaboration" text

---

## 🎨 Design Customization (Optional)

### 7. Adjust Colors (Optional)

**In `css/variables.css`:**

```css
:root {
  --color-accent: #ff0000;  /* Change to your preferred accent color */
}
```

Popular alternatives:
- Blue: `#0000ff`
- Green: `#00ff00`
- Orange: `#ff6600`
- Purple: `#9900ff`

### 8. Adjust Fonts (Optional)

**In `css/variables.css`:**

Currently using system fonts (recommended for performance), but you can add Google Fonts or custom fonts if desired.

---

## 🚀 Pre-Launch Checklist

### 9. Content Review

- [ ] All text is spell-checked
- [ ] All links work (test them!)
- [ ] All images load correctly
- [ ] Video IDs are correct and videos play
- [ ] Resume downloads correctly
- [ ] No placeholder text remains
- [ ] Copyright year is current

### 10. Browser Testing

Test in multiple browsers:
- [ ] Chrome (desktop)
- [ ] Safari (desktop)
- [ ] Firefox (desktop)
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

**Test responsive design:**
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)

### 11. Performance Check

- [ ] Images are compressed (use [TinyPNG](https://tinypng.com/))
- [ ] Videos load in modal (lazy loading working)
- [ ] Page loads quickly
- [ ] No console errors in browser DevTools

### 12. Accessibility Check

- [ ] Can navigate entire site with keyboard only (Tab, Enter, Esc)
- [ ] All images have alt text
- [ ] Links have descriptive text
- [ ] Focus states are visible
- [ ] Test with screen reader if possible

---

## 🌐 Deployment

### 13. Choose a Hosting Platform

**Recommended: Netlify (easiest)**

1. Create account at [netlify.com](https://netlify.com)
2. Drag & drop your project folder to Netlify dashboard
3. Get your live URL!

**Alternative: GitHub Pages**

1. Create a GitHub account
2. Create new repository
3. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
4. Enable GitHub Pages in repository settings
5. Your site will be at `https://yourusername.github.io/your-repo`

### 14. Custom Domain (Optional)

If you want a custom domain like `yourname.com`:

1. Buy domain from Namecheap, Google Domains, etc.
2. Configure DNS in your hosting platform:
   - Netlify: [Netlify Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
   - GitHub Pages: [GitHub Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 🔧 Optional Enhancements

### 15. Add Favicon

1. Create a simple icon (32x32px)
2. Use [Favicon Generator](https://realfavicongenerator.net/)
3. Add to `/assets/icons/`
4. Uncomment favicon line in HTML `<head>`

### 16. Add Analytics (Optional)

Track visitors with:
- [Google Analytics](https://analytics.google.com/)
- [Plausible](https://plausible.io/) (privacy-friendly)
- [Fathom](https://usefathom.com/) (privacy-friendly)

### 17. SEO Optimization

Add Open Graph tags for better social media sharing:
```html
<meta property="og:title" content="Your Name - Filmmaker & Strategist">
<meta property="og:description" content="Portfolio of films and strategic work">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
```

Create an OG image (1200x630px) showing your name and title.

---

## ✅ Final Launch Checklist

Before going live:

- [ ] All content is updated and accurate
- [ ] All links work
- [ ] Tested on multiple devices
- [ ] Tested on multiple browsers
- [ ] Images are optimized
- [ ] Resume is up to date
- [ ] Contact information is correct
- [ ] Site has been spell-checked
- [ ] Copyright year is current

---

## 🎉 Post-Launch

After launching:

1. **Share your site:**
   - [ ] Add to LinkedIn
   - [ ] Add to GitHub profile
   - [ ] Add to resume
   - [ ] Share with friends and colleagues

2. **Monitor:**
   - [ ] Check analytics (if added)
   - [ ] Test all forms/links periodically
   - [ ] Keep content updated

3. **Maintain:**
   - [ ] Update projects as you complete new work
   - [ ] Add new films as you create them
   - [ ] Keep resume current
   - [ ] Update bio/about section

---

## 💡 Tips

**Content Tips:**
- Keep descriptions concise but impactful
- Focus on outcomes and results
- Use active voice
- Highlight your unique perspective (Mandarin learner, strategist, filmmaker)

**Design Tips:**
- Less is more - the minimalist aesthetic is intentional
- Let your work speak for itself
- Maintain consistency across pages
- Update regularly but don't over-design

**Performance Tips:**
- Compress images before uploading
- Keep video thumbnails under 100KB
- Test on slow connections
- Use WebP format for images when possible

---

## 📞 Need Help?

Refer to:
- `README.md` - Full documentation
- `DESIGN_SYSTEM.md` - Design guidelines
- Browser console - Check for errors

---

**You're ready to launch! 🚀**

Good luck with your portfolio. Your clean, intentional design will make your work stand out.
