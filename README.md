# Pointer - AI Landing Page

A modern, responsive landing page for an AI-powered development platform built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark theme with vibrant accent colors and gradient text effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects, animated backgrounds, and interactive elements
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Reusable components with clean architecture

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: class-variance-authority, clsx, tailwind-merge

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── animated-background.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── sections/            # Page sections
│       ├── navigation.tsx
│       ├── hero.tsx
│       ├── features.tsx
│       ├── testimonials.tsx
│       ├── faq.tsx
│       └── cta.tsx
├── lib/
│   └── utils.ts             # Utility functions
└── types/                   # TypeScript type definitions
```

## 🎨 Design Features

### Color Palette
- **Background**: Dark (#1A1A1A)
- **Primary**: Bright Green (#00FF00)
- **Secondary**: Teal (#00C8C8)
- **Accent**: Purple (#8A2BE2)
- **Muted**: Dark Gray (#2A2A2A)

### Animations
- Floating background elements
- Scroll-triggered animations
- Hover effects and transitions
- Gradient text animations
- Glow effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Sections

1. **Navigation**: Sticky header with mobile menu
2. **Hero**: Animated heading with code editor mockup
3. **Features**: Icon grid and feature cards with code examples
4. **Testimonials**: Customer quotes and social proof
5. **FAQ**: Expandable accordion with common questions
6. **CTA**: Final call-to-action with footer

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  background: '#1A1A1A',
  foreground: '#FFFFFF',
  primary: {
    DEFAULT: '#00FF00',
    foreground: '#000000',
  },
  // ... other colors
}
```

### Animations
Modify animation settings in `tailwind.config.js` or component files.

### Content
Update text content in the respective section components.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Component Architecture

### UI Components
- **Button**: Variant-based button component with hover effects
- **Card**: Reusable card component with header, content, and footer
- **AnimatedBackground**: Floating elements and glow effects

### Section Components
Each section is a self-contained component with:
- Framer Motion animations
- Responsive design
- TypeScript interfaces
- Reusable styling

## 🚀 Performance Optimizations

- Lazy loading of animations
- Optimized images and assets
- Efficient CSS with Tailwind
- TypeScript for better performance
- Next.js optimizations

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
# Ai_Landing_Page_NextJs
