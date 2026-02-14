# Robotics Educator Portfolio Website

A professional, academic-style portfolio website for **Abdoukadir Jabbi** - AI & Robotics Educator.

## 📁 Files Included

- `index.html` - Main HTML structure
- `style.css` - All styling and design
- `script.js` - Interactive functionality

## 🚀 Getting Started

### Quick Start
1. Download all three files to the same folder
2. Open `index.html` in any web browser
3. The website is fully functional offline!

### Hosting Online
Upload all three files to any web hosting service:
- **GitHub Pages** (Free): Upload to a repository and enable GitHub Pages
- **Netlify** (Free): Drag and drop the folder
- **Vercel** (Free): Connect via GitHub
- **Traditional hosting**: Upload via FTP to your web server

## ✏️ How to Customize

### 1. Update Personal Information

**In `index.html`:**

**Contact Details** (Lines 18-24 and 697-719):
```html
<!-- Update these with your actual information -->
<a href="mailto:YOUR_EMAIL@gmail.com">YOUR_EMAIL@gmail.com</a>
<a href="tel:+YOUR_PHONE">+YOUR_PHONE</a>
<a href="https://YOUR_PORTFOLIO_URL" target="_blank">YOUR_PORTFOLIO_URL</a>
```

**Hero Section** (Lines 51-78):
- Change your name, title, and professional statement
- Update the statistics (Years Teaching, Students Taught, etc.)

**About Me** (Lines 84-138):
- Edit your teaching philosophy text
- Customize the 4 philosophy points

### 2. Update Images

**Project Images:**
All images currently use Unsplash URLs. To use your own images:

1. Replace the `src` URLs in the HTML (lines 401-472)
2. Upload your images to your hosting provider
3. Update the URLs like this:

```html
<!-- Old -->
<img src="https://images.unsplash.com/photo-..." alt="...">

<!-- New -->
<img src="images/my-robot-project.jpg" alt="AI Healthcare Robot">
```

**Recommended image sizes:**
- Project cards: 800x600px
- Modal images: 1200x800px
- Gallery images: 600x450px

### 3. Customize Project Details

**In `script.js` (Lines 9-143):**

The `projectData` object contains all project information. Edit each project:

```javascript
healthcare: {
    title: "YOUR PROJECT TITLE",
    image: "path/to/your/image.jpg",
    description: "Your project description...",
    technologies: ["Tech 1", "Tech 2", ...],
    features: ["Feature 1", "Feature 2", ...],
    learningOutcomes: ["Outcome 1", "Outcome 2", ...]
}
```

### 4. Update Experience Timeline

**In `index.html` (Lines 178-242):**

Add, remove, or edit timeline items:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-date">YOUR DATES</div>
        <h3>YOUR POSITION</h3>
        <p class="timeline-org">YOUR ORGANIZATION</p>
        <ul>
            <li>Achievement 1</li>
            <li>Achievement 2</li>
        </ul>
    </div>
</div>
```

### 5. Modify Courses

**In `index.html` (Lines 259-370):**

Each course card can be edited:
- Change the level (beginner/intermediate/advanced)
- Update course title and description
- Modify topics list
- Change duration

### 6. Add YouTube Videos

**In `index.html` (Lines 588-608):**

Replace the video placeholders with actual YouTube embeds:

```html
<!-- Replace the placeholder divs with: -->
<div class="video-embed">
    <iframe 
        width="100%" 
        height="315" 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>
```

### 7. Change Colors and Design

**In `style.css` (Lines 9-36):**

Edit the CSS variables to change the entire color scheme:

```css
:root {
    --color-primary: #1a3a5c;        /* Main color */
    --color-secondary: #d4a574;      /* Accent color */
    --color-accent: #3498db;         /* Interactive elements */
    /* ... more variables ... */
}
```

### 8. Update Footer Links

**In `index.html` (Lines 696-752):**

Customize footer content, add social media links, etc.

## 🔧 Advanced Customization

### Adding New Sections

1. Add HTML in `index.html`
2. Add navigation link in the navbar
3. Style it in `style.css`
4. Add smooth scroll behavior (automatic)

### Enable Contact Form Emails

The contact form currently shows a success message but doesn't send emails. To enable:

**Option 1: EmailJS (Easiest)**
1. Sign up at https://www.emailjs.com/
2. Add the EmailJS SDK to `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
3. Uncomment the EmailJS code in `script.js` (lines 403-413)
4. Add your Service ID and Template ID

**Option 2: Backend Server**
Create a server endpoint (PHP, Node.js, etc.) and send form data via fetch/AJAX.

### Enable Back-to-Top Button

Uncomment line 528 in `script.js`:
```javascript
createBackToTopButton();
```

## 📱 Mobile Responsive

The website is fully responsive and works perfectly on:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (320px+)

## ⚡ Performance

- **No external dependencies** (except Google Fonts)
- **Lazy loading images** for fast initial load
- **Optimized animations** using CSS and Intersection Observer
- **Lightweight**: < 100KB total (without images)

## 🎨 Design Features

✅ Academic/professional aesthetic  
✅ Clean typography (Libre Baskerville + Work Sans)  
✅ Smooth scrolling navigation  
✅ Sticky navbar  
✅ Mobile hamburger menu  
✅ Project modal popups  
✅ Animated statistics counter  
✅ Scroll-triggered animations  
✅ Responsive image gallery  
✅ Contact form with validation  

## 🐛 Troubleshooting

**Images not loading?**
- Check that image URLs are correct
- Ensure images are uploaded to your server
- Check browser console for errors

**Menu not working on mobile?**
- Clear browser cache
- Check that all three files are in the same folder
- Ensure JavaScript is enabled

**Fonts not loading?**
- Check internet connection (Google Fonts requires online access)
- Or download fonts locally and update CSS

## 📞 Support

For questions about customization:
- Email: buxinjabbi@gmail.com
- Phone: +91 9319038312

## 📄 License

This portfolio template is provided as-is for personal or educational use.

---

**Built with:** Pure HTML, CSS, and JavaScript (No frameworks!)  
**Design Style:** Academic/Technical/Professional  
**Target Audience:** Universities, Schools, Robotics Labs

Good luck with your teaching career! 🤖🎓
