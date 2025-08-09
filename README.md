# Deep Learning Mastery - Course Website

A modern, learner-centered course website built with Next.js and designed for seamless integration with Canvas LMS. This repository contains all course materials, resources, and documentation for the Deep Learning Mastery course.

## 🎯 Project Overview

This project implements a **hybrid approach** combining the best of GitHub Pages and Canvas LMS:

- **GitHub Pages**: Delivers beautiful, static course content (videos, readings, code examples)
- **Canvas LMS**: Handles course management (authentication, progress tracking, quizzes, assignments)

### Why This Approach?

- ✅ **Clean Separation**: Content delivery vs. course management
- ✅ **Always Accessible**: Materials remain available after course completion
- ✅ **Easy Maintenance**: Update content without breaking Canvas integration
- ✅ **Professional Design**: Modern, responsive, and accessible interface
- ✅ **SEO Friendly**: Course materials discoverable by search engines

## 🏗️ Architecture

\`\`\`
┌─────────────────┐    ┌─────────────────┐
│   GitHub Pages  │    │   Canvas LMS    │
│                 │    │                 │
│ • Course Content│◄──►│ • Authentication│
│ • Video Lectures│    │ • Progress Track│
│ • Code Examples │    │ • Quizzes       │
│ • Resources     │    │ • Assignments   │
│ • Documentation │    │ • Gradebook     │
└─────────────────┘    └─────────────────┘
\`\`\`

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git
- GitHub account
- Canvas LMS access (for course management)

### Local Development

1. **Clone the repository**
   ```bash
   # HTTPS
   git clone https://github.com/Shakeri-Lab/dl-course-site.git
   cd dl-course-site

   # or SSH
   git clone git@github.com:Shakeri-Lab/dl-course-site.git
   cd dl-course-site
   ```

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

### Deployment to GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder

2. **Configure custom domain (optional)**
   \`\`\`bash
   echo "your-domain.com" > public/CNAME
   \`\`\`

3. **Deploy**
   \`\`\`bash
   npm run build
   npm run export
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   \`\`\`

## 📁 Project Structure

\`\`\`
dl-course-site/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Homepage with course overview
│   ├── layout.tsx               # Global layout and navigation
│   ├── globals.css              # Global styles
│   ├── module/
│   │   └── [id]/
│   │       └── page.tsx         # Individual module pages
│   ├── resources/
│   │   └── page.tsx             # Additional learning resources
│   ├── setup/
│   │   └── page.tsx             # Environment setup guide
│   ├── faq/
│   │   └── page.tsx             # Frequently asked questions
│   ├── canvas-integration/
│   │   └── page.tsx             # Canvas integration guide
│   └── implementation/
│       └── page.tsx             # Implementation checklist
├── components/                   # Reusable UI components
│   └── ui/                      # shadcn/ui components
├── public/                      # Static assets
│   ├── slides/                  # Course slide decks
│   ├── images/                  # Course images
│   └── requirements.txt         # Python requirements
├── docs/                        # Documentation
│   ├── canvas-setup.md          # Canvas configuration guide
│   └── deployment.md            # Deployment instructions
├── package.json                 # Node.js dependencies
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # This file
\`\`\`

## 🎓 Course Structure

The course consists of 12 modules, each following a consistent structure:

### Module Components
- **Learning Objectives**: Clear goals for each module
- **Lecture Materials**: Video lectures and slide presentations
- **Required Readings**: Essential texts and research papers
- **Code Examples**: Jupyter notebooks and Python scripts
- **Additional Resources**: Supplementary materials and tools

### Module Flow
\`\`\`
Pre-class Preparation → Lectures → Readings → Code Practice → Assessment
\`\`\`

## 🔧 Canvas Integration

### Setup Overview

1. **Create Canvas Modules**: One for each course module (1-12)
2. **Configure External Tools**: Set up LTI integration with GitHub Pages
3. **Link Content**: Point Canvas modules to GitHub Pages materials
4. **Set Up Assessments**: Create quizzes and assignments in Canvas

### Canvas Module Template

Each Canvas module should include:
- Overview page with link to GitHub materials
- Knowledge check quiz (due before live session)
- Assignment submission portal
- Discussion forum for Q&A

### Example Canvas Page HTML
\`\`\`html
<div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #007bff;">
  <h3>📚 Course Materials</h3>
  <p>Review the materials before taking the quiz.</p>
  <a href="https://your-username.github.io/dl-course-materials/module/1" 
     target="_blank" class="btn btn-primary">
    Open Module 1 Materials
  </a>
</div>
\`\`\`

## 🎨 Customization

### Branding
- Update colors in `tailwind.config.js`
- Replace logo/branding in `app/layout.tsx`
- Modify course title and description

### Content Updates
- Module content: Edit files in `app/module/[id]/page.tsx`
- Course overview: Update `app/page.tsx`
- Resources: Modify `app/resources/page.tsx`

### Navigation
- Add/remove navigation items in `app/layout.tsx`
- Update footer links and information

## 📚 Content Management

### Adding New Modules
1. Create new module data in the appropriate page component
2. Add module to the main course modules array
3. Create any associated resources (slides, notebooks, etc.)
4. Update Canvas to link to the new module

### Updating Existing Content
1. Edit the relevant page component
2. Update any linked resources
3. Test changes locally before deploying
4. Deploy to GitHub Pages

### Managing Resources
- **Videos**: Host on YouTube/Vimeo, embed links
- **Slides**: Store in `public/slides/` directory
- **Notebooks**: Host on Google Colab, link to GitHub
- **Readings**: Link to external sources or PDFs

## 🔍 SEO and Analytics

### Built-in SEO Features
- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags for social sharing
- Sitemap generation

### Adding Analytics
\`\`\`javascript
// Add to app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
\`\`\`

## 🧪 Testing

### Local Testing
\`\`\`bash
# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm start
\`\`\`

### Pre-deployment Checklist
- [ ] All links work correctly
- [ ] Mobile responsiveness verified
- [ ] Canvas integration tested
- [ ] Content accuracy reviewed
- [ ] Performance optimized

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push changes to main branch
2. GitHub Actions automatically deploys
3. Site available at `https://username.github.io/repository-name`

### Custom Domain Setup
1. Add CNAME file: `echo "yourdomain.com" > public/CNAME`
2. Configure DNS records with your domain provider
3. Enable HTTPS in GitHub Pages settings

### Alternative Deployment Options
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop build folder or connect repo
- **AWS S3**: Upload build files to S3 bucket with static hosting

## 🛠️ Troubleshooting

### Common Issues

**Build Errors**
\`\`\`bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
\`\`\`

**Canvas Integration Issues**
- Verify External Tool configuration
- Check CORS settings
- Test iframe embedding as fallback

**Mobile Display Problems**
- Test responsive breakpoints
- Verify touch interactions
- Check viewport meta tag

### Getting Help
- Check the [FAQ page](./app/faq/page.tsx)
- Review [Canvas Integration Guide](./app/canvas-integration/page.tsx)
- Open GitHub issue for bugs
- Contact course administrators for Canvas issues

## 📈 Performance

### Optimization Features
- Static site generation (SSG)
- Image optimization with Next.js
- CSS and JavaScript minification
- Lazy loading for images and components

### Performance Monitoring
\`\`\`bash
# Analyze bundle size
npm run build
npm run analyze

# Lighthouse audit
npx lighthouse http://localhost:3000
\`\`\`

## 🔒 Security

### Best Practices Implemented
- No sensitive data in client-side code
- External links open in new tabs
- Content Security Policy headers
- Regular dependency updates

### Security Checklist
- [ ] No API keys in public code
- [ ] External links properly configured
- [ ] Dependencies regularly updated
- [ ] HTTPS enabled for production

## 🤝 Contributing

### For Course Instructors
1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-module`
3. Make changes and test locally
4. Submit pull request with description

### Content Guidelines
- Follow existing module structure
- Ensure mobile responsiveness
- Test all external links
- Include proper attribution for resources

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js**: React framework for production
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautiful UI components
- **Lucide React**: Icon library
- **Canvas LMS**: Learning management system integration

## 📞 Support

### For Students
- Use Canvas discussion forums for course questions
- Check the [Setup Guide](./app/setup/page.tsx) for technical issues
- Contact course instructors via Canvas messaging

### For Instructors
- Review the [Implementation Guide](./app/implementation/page.tsx)
- Check [Canvas Integration documentation](./app/canvas-integration/page.tsx)
- Open GitHub issues for technical problems

### Contact Information
- **Course Website**: https://your-username.github.io/dl-course-materials
- **Canvas Course**: https://canvas.instructure.com/courses/your-course
- **GitHub Repository**: https://github.com/your-username/dl-course-materials
- **Instructor Email**: instructor@university.edu

---

## 🚀 Quick Links

- [Live Course Website](https://your-username.github.io/dl-course-materials)
- [Canvas Course](https://canvas.instructure.com/courses/your-course)
- [GitHub Repository](https://github.com/your-username/dl-course-materials)
- [Implementation Checklist](./app/implementation/page.tsx)
- [Canvas Integration Guide](./app/canvas-integration/page.tsx)

**Happy Learning! 🎓**

## 🗂️ Module Page Standard

Each module page (`/module/[id]`) follows this structure *in order*:

1. **Lecture Video** – Embedded YouTube iframe inside a responsive 16:9 container (`padding-bottom: 56.25%`) and wrapped in `max-w-4xl mx-auto`.  A right-aligned button in the header links to **"Lecture Notes & HW Notebook"** (GitHub).
2. **Resources & Homework Card** – placed directly under the video and contains:
     - A short paragraph with the recommended reading from *Dive into Deep Learning* (D2L), e.g. "read up to § 5.2".
     - A second paragraph describing the homework notebook.
   (No buttons here—the *Notes & Notebook* button is next to the lecture title, and Gradescope lives in the top navbar.)

That's it—no separate "Lecture Notes" or "Homework" sections. The page remains minimal: video ➜ single card.

### Notebook Repository Layout
```text
notebooks/ (kept only if you want rendered copies)  
# Active development happens in the separate repo:
https://github.com/Shakeri-Lab/dl-course
```

In each module folder of that repo you keep:
 * `notes.pdf` or `notes.ipynb`
 * `homework.ipynb`

### Creating a New Module
 1. Duplicate `app/module/1/page.tsx` ➜ `app/module/2/page.tsx` (etc.).
 2. Change:
    • YouTube `src` and `title`  • D2L reading range  • Button links.
3. Add the new materials under `https://github.com/Shakeri-Lab/dl-course/tree/main/module-X`.

## 🧰 Git Remote (SSH)

If you prefer SSH, the remote for this repository is:

```text
git@github.com:Shakeri-Lab/dl-course-site.git
```

To switch an existing clone to SSH:

```bash
git remote set-url origin git@github.com:Shakeri-Lab/dl-course-site.git
git remote -v
```

## 🔐 Git Remote (HTTPS)

To switch the remote to HTTPS and push:

```bash
git remote set-url origin https://github.com/Shakeri-Lab/dl-course-site.git
git push origin main
```
