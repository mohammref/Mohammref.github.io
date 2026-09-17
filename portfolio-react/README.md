# Mohamed Refaat - React Portfolio

A modern, responsive portfolio website built with React, Vite, and Framer Motion.

## 🚀 Features

- ✨ Modern UI with smooth animations
- 📱 Fully responsive design
- 🎬 Project showcase with video modals
- 📧 Functional contact form
- 🎨 Framer Motion animations
- ⚡ Fast performance with Vite
- 🔍 SEO optimized with React Helmet

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animations
- **EmailJS** - Contact form (needs configuration)
- **React Helmet Async** - SEO meta tags
- **React Icons** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Development

The dev server runs at `http://localhost:5173/`

Project structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Resume.jsx
│       ├── Services.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       └── Contact.jsx
├── data/
│   └── portfolio-data.js
├── styles/
│   └── index.css
└── App.jsx
```

## 📧 Email Form Configuration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your public key
5. Update `Contact.jsx` with your credentials:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',    // From EmailJS dashboard
  'YOUR_TEMPLATE_ID',   // From EmailJS dashboard
  formData,
  'YOUR_PUBLIC_KEY'     // From EmailJS dashboard
)
```

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: '/your-repo-name/',
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

### Other Platforms

- **Vercel**: Connect GitHub repo and deploy automatically
- **Netlify**: Drag & drop `dist` folder or connect repo
- **Azure Static Web Apps**: Deploy via GitHub Actions

## 📝 Customization

Update your information in `src/data/portfolio-data.js`:

- Personal information
- Social media links
- Education history
- Services offered
- Skills and expertise levels
- Projects and portfolio items

## 📄 License

This portfolio is created for Mohamed Refaat. Feel free to use as inspiration!

## 🤝 Contact

- **Email**: mohammref312@gmail.com
- **Phone**: +971 583044548
- **Location**: Sports City Dubai
- **LinkedIn**: [mohammref](https://www.linkedin.com/in/mohammref/)

---

Built with ❤️ using React & Vite
