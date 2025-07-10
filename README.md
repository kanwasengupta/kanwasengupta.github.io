# Kanwa Sen Gupta - Portfolio Website

A modern, responsive portfolio website showcasing geological research, web development projects, and academic achievements.

## 🚀 Quick Deployment to GitHub Pages

### Option 1: Direct Upload (Recommended)
1. **Download all files** from this project
2. **Go to your GitHub repository** (kanwasengupta.github.io)
3. **Upload files directly** using GitHub's web interface:
   - Click "Add file" → "Upload files"
   - Drag and drop all files
   - Commit changes
4. **Your site will be live** at https://kanwasengupta.github.io

### Option 2: Git Commands
\`\`\`bash
git clone https://github.com/kanwasengupta/kanwasengupta.github.io.git
cd kanwasengupta.github.io
# Copy all files from this project to the repository
git add .
git commit -m "Deploy portfolio website"
git push origin main
\`\`\`

## 📱 Mobile Optimized Features

- **Responsive design** that works on all devices
- **Touch-friendly navigation** with hamburger menu
- **Optimized performance** on mobile devices
- **Disabled particles** on mobile for better performance
- **Touch gestures** and feedback
- **Mobile-first form inputs** (prevents zoom on iOS)

## 🎨 Features

- **Modern Design** with dark theme and geological animations
- **Responsive Layout** optimized for all screen sizes
- **Interactive Elements** with smooth animations
- **Blog System** with individual post pages
- **Contact Form** with email integration
- **SEO Optimized** with proper meta tags

## 📝 Adding New Content

### Adding Blog Posts

1. **Create HTML file** in the `blog/` directory:
   \`\`\`html
   <!-- blog/new-post.html -->
   <!DOCTYPE html>
   <html lang="en">
   <!-- Copy structure from existing blog posts -->
   \`\`\`

2. **Add to main page** by editing `index.html`:
   \`\`\`html
   <!-- Add new article in the blog section -->
   <article class="bg-slate-800/50 p-6 rounded-lg border border-slate-700 fade-in hover-scale">
       <img src="public/images/blog/new-image.jpg" alt="New Post" class="w-full h-48 object-cover rounded-lg mb-4">
       <h3 class="text-xl font-bold mb-3">New Blog Post Title</h3>
       <p class="text-gray-300 mb-4">Brief description...</p>
       <a href="blog/new-post.html" class="text-blue-400 hover:text-blue-300 font-medium">Read More →</a>
   </article>
   \`\`\`

### Adding Projects

Edit the projects section in `index.html`:
\`\`\`html
<div class="bg-slate-800/50 p-6 rounded-lg border border-slate-700 fade-in hover-scale">
    <img src="public/images/new-project.png" alt="New Project" class="w-full h-48 object-cover rounded-lg mb-4">
    <h3 class="text-xl font-bold mb-3">Project Name</h3>
    <p class="text-gray-300 mb-4">Project description...</p>
    <div class="flex flex-wrap gap-2 mb-4">
        <span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">Tech Stack</span>
    </div>
    <a href="#" class="text-blue-400 hover:text-blue-300 font-medium">View Project →</a>
</div>
\`\`\`

### Adding Images

1. **Upload images** to the `public/images/` directory
2. **Reference in HTML** using relative paths:
   \`\`\`html
   <img src="public/images/your-image.jpg" alt="Description">
   \`\`\`

## 🔧 Customization

### Colors
Edit CSS variables in the `<style>` section:
\`\`\`css
:root {
    --primary: #0f172a;
    --secondary: #1e293b;
    --accent: #3b82f6;
    --text: #f8fafc;
    --muted: #64748b;
}
\`\`\`

### Content
- **Personal info**: Edit the hero section
- **About section**: Update your background and experience
- **Research**: Add your current research projects
- **Contact**: Update email and social links

## 📊 Analytics & SEO

The site includes:
- **Meta tags** for SEO optimization
- **Open Graph** tags for social sharing
- **Structured data** for search engines
- **Performance optimizations** for fast loading

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No build process required
- **Tailwind CSS** via CDN for styling
- **Particles.js** for background animations
- **Typed.js** for typing animations
- **Responsive design** with mobile-first approach
- **Accessibility features** with proper ARIA labels

## 📞 Support

If you need help with deployment or customization:
- **Email**: kanwa.sengupta@aggiemail.usu.edu
- **GitHub**: Create an issue in the repository

---

**Live Site**: https://kanwasengupta.github.io
