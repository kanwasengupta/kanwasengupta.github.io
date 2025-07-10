# Kanwa Sengupta - Personal Portfolio Website

A modern, animated portfolio website for geologist and PhD student Kanwa Sengupta, built with static HTML, CSS, and JavaScript for optimal GitHub Pages hosting.

## 🌟 Features

### ✨ **Full Animations & Interactions**
- **Typed.js** - Animated typing effect for role descriptions
- **Particles.js** - Interactive particle background system
- **CSS Animations** - Geological background effects, floating elements, hover animations
- **Scroll Animations** - Fade-in effects triggered by viewport intersection
- **Smooth Scrolling** - Seamless navigation between sections

### 🎨 **Geological Theme**
- **Mountain Silhouettes** - Animated mountain ranges
- **Starfield Background** - Twinkling star animations
- **Geological Color Palette** - Earth-tones with amber and sky blue accents
- **Rock Texture Effects** - Subtle geological background patterns

### 📱 **Responsive Design**
- **Mobile-First** - Optimized for all device sizes
- **Touch-Friendly** - Mobile navigation and interactions
- **Progressive Enhancement** - Works without JavaScript

### 🔧 **Modern Functionality**
- **Working Contact Form** - Integrated with Formspree
- **Blog Search** - Real-time search through blog posts
- **Social Media Integration** - Links to GitHub, LinkedIn, Twitter
- **SEO Optimized** - Proper meta tags and semantic HTML

## 📁 **File Structure**

\`\`\`
portfolio-website/
├── index.html                 # Main homepage
├── blog/                      # Blog post pages
│   ├── southeastern-gsa-2025.html
│   ├── agu-2024.html
│   ├── summer-national-parks-1.html
│   ├── summer-national-parks-2.html
│   └── epma-adventures.html
├── images/                    # Image assets
│   └── kanwa-profile.jpg
└── README.md                  # This file
\`\`\`

## 🚀 **Deployment to GitHub Pages**

### **Option 1: Replace Existing Site (kanwasengupta.github.io)**

1. **Backup your current site:**
   \`\`\`bash
   git clone https://github.com/kanwasengupta/kanwasengupta.github.io.git backup-site
   \`\`\`

2. **Clear the repository:**
   \`\`\`bash
   cd kanwasengupta.github.io
   git rm -rf .
   git commit -m "Clear repository for new portfolio"
   \`\`\`

3. **Add new files:**
   - Copy all files from this project to your repository
   - Add your profile image as `images/kanwa-profile.jpg`

4. **Deploy:**
   \`\`\`bash
   git add .
   git commit -m "Deploy new animated portfolio website"
   git push origin main
   \`\`\`

5. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)

### **Option 2: New Repository**

1. **Create new repository** named `portfolio` or similar
2. **Upload all files** to the repository
3. **Enable GitHub Pages** in repository settings
4. **Access at:** `https://kanwasengupta.github.io/portfolio/`

## ✏️ **Adding New Content**

### **Adding Blog Posts**

1. **Create new HTML file** in `blog/` folder:
   \`\`\`html
   blog/new-post-title.html
   \`\`\`

2. **Use existing blog post as template** (copy from any existing blog post)

3. **Update the main index.html:**
   - Add new blog post card in the blog section
   - Include proper `data-title` and `data-excerpt` for search functionality

4. **Update navigation** in other blog posts if needed

### **Adding Publications**

1. **Edit index.html**
2. **Find the Publications section** (around line 800)
3. **Add new publication card:**
   \`\`\`html
   <div class="fade-in-up bg-white/95 backdrop-blur-sm shadow-lg border border-amber-200 hover:border-amber-600 transition-all duration-300 rounded-lg p-6 card-animate hover-glow">
       <div class="flex justify-between items-start mb-3">
           <div class="flex-1 pr-4">
               <h4 class="font-bold text-lg mb-2 leading-tight">Your Publication Title</h4>
               <p class="text-gray-600 mb-2 text-sm">Authors</p>
               <p class="text-sm text-gray-600"><em>Journal Name</em> (Year)</p>
           </div>
           <div class="flex flex-col gap-2 items-end">
               <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm pulse-glow">Published</span>
               <span class="border border-blue-600 text-blue-600 px-2 py-1 rounded text-sm">Article Type</span>
           </div>
       </div>
       <a href="your-link" target="_blank" class="btn-animate inline-flex items-center gap-2 border border-amber-600 text-amber-600 hover:bg-amber-50 px-4 py-2 rounded text-sm transition-all duration-300 hover-lift">
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
           </svg>
           View Publication
       </a>
   </div>
   \`\`\`

### **Adding Research Projects**

1. **Edit index.html**
2. **Find the Research Projects section** (around line 600)
3. **Add new project card** following the existing pattern

### **Updating Personal Information**

1. **Profile Image:** Replace `images/kanwa-profile.jpg`
2. **Contact Info:** Update email and social links in the contact section
3. **CV Link:** Update the CV link in the hero section
4. **About Text:** Modify the about section content

## 🎨 **Customization**

### **Colors**
- **Primary:** Amber (#d97706)
- **Secondary:** Sky Blue (#0ea5e9)
- **Geological:** Earth tones and gradients
- **Text:** Gray scale for readability

### **Animations**
- **Typing Speed:** Modify Typed.js configuration
- **Particle Count:** Adjust particles.js settings
- **Animation Delays:** Change CSS animation-delay values

### **Fonts**
- **Primary:** Inter (Google Fonts)
- **Fallback:** System fonts for performance

## 🔧 **Technical Details**

### **Dependencies**
- **Tailwind CSS** - Utility-first CSS framework
- **Typed.js** - Typing animation library
- **Particles.js** - Particle system library
- **Formspree** - Contact form handling

### **Performance**
- **Static HTML** - Fast loading, no build process
- **CDN Resources** - External libraries loaded from CDN
- **Optimized Images** - Compressed and properly sized
- **Minimal JavaScript** - Only essential functionality

### **Browser Support**
- **Modern Browsers** - Chrome, Firefox, Safari, Edge
- **Mobile Browsers** - iOS Safari, Chrome Mobile
- **Progressive Enhancement** - Works without JavaScript

## 📞 **Support**

For questions about customization or deployment:
1. **Check GitHub Issues** for common problems
2. **Review GitHub Pages documentation**
3. **Test locally** before deploying

## 📄 **License**

This project is open source and available under the MIT License.

---

**Built with passion for Earth sciences** 🌍
