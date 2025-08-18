# Exeevo Frontend - Single Responsive Layout

A modern frontend project for Exeevo built with Vite, Tailwind CSS, featuring a **single responsive layout** that adapts seamlessly between desktop and mobile without code duplication.

## 🎨 Design Features

- **Single Responsive Layout**: One HTML structure that adapts to both desktop and mobile
- **No Code Duplication**: Uses Tailwind's responsive utilities to show/hide elements
- **Typography**: Uses Segoe UI Variable font family with exact sizes from Figma
- **Color Scheme**: Primary text color #333F48 with proper contrast
- **Grid-First Layout**: Uses CSS Grid for layout with Flexbox for specific alignments
- **Image Optimization**: Responsive images with proper mobile/desktop variants

## 📁 Project Structure

```
Exeevo-AI-Generate/
├── src/
│   ├── css/
│   │   └── main.css           # Tailwind directives + responsive styles
│   ├── js/
│   │   └── main.js            # JavaScript functionality
│   ├── images/                # Figma images (desktop & mobile)
│   └── fonts/                 # Font files
├── public/                    # Public assets
├── dist/                      # Build output
├── index.html                 # Single responsive HTML
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind with Exeevo parameters
├── postcss.config.js          # PostCSS configuration
├── package.json               # Dependencies and scripts
├── .gitignore                 # Git exclusions
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

This will start the development server at `http://localhost:3001/` and automatically open your browser.

### Build for Production

```bash
npm run build
```

This will create a production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Design Specifications

### Typography
- **Primary Font**: Segoe UI Variable
- **Fallback Font**: Inter (Google Fonts)
- **Hero Title**: 48px (mobile) / 62px (desktop)
- **Subtitle**: 18px (mobile) / 20px (desktop)
- **Button Text**: 16px
- **Microsoft Text**: 16px

### Colors
- **Primary Text**: #333F48
- **Background**: #FFFFFF
- **Button Border**: #333F48

### Layout
- **Container Width**: 1312px (desktop)
- **Padding**: 24px (mobile), 1rem (desktop)
- **Grid Gap**: 48px between elements
- **Button Height**: 48px

### Responsive Breakpoints
- **Mobile**: < 768px
- **Desktop**: ≥ 768px

## 🛠️ Technical Implementation

### Single Responsive Layout Approach

Instead of duplicating HTML for desktop and mobile, this project uses:

1. **Responsive Utilities**: `md:hidden` and `md:block` to show/hide elements
2. **Conditional Content**: Different text breaks and layouts using responsive classes
3. **Overlay Positioning**: Mobile content positioned over images using absolute positioning
4. **Gradient Overlays**: Mobile-specific gradient overlays for better text readability

### Key Responsive Features

#### Desktop Layout
- Content appears above the hero image
- Clean, centered layout with proper spacing
- Large hero image below content
- No gradient overlays needed

#### Mobile Layout
- Content overlaid on hero image with gradient backgrounds
- Additional mockup image below hero
- Microsoft badge with logos
- Gradient overlays for text readability

### CSS Architecture
- Uses `@layer base` for typography styles
- Tailwind utility classes in HTML for layout and spacing
- Custom component classes for buttons and specific elements
- Responsive design with mobile-first approach

### JavaScript
- Vanilla JavaScript for interactivity
- Button click handlers for future functionality
- Modular structure for easy extension

## 📱 Responsive Features

### Desktop Layout
- Centered container with max-width 1312px
- Large hero image below content
- Optimized typography for larger screens
- Clean, professional appearance

### Mobile Layout
- Full-width hero image with gradient overlays
- Content overlaid on image for space efficiency
- Additional mockup image below
- Microsoft badge with logos
- Optimized for touch interaction

## 🎨 Design Elements

### Hero Section
- **Desktop**: Clean layout with content above image
- **Mobile**: Layered design with content overlay and gradient effects

### Button Design
- Rounded pill shape (100px border-radius)
- 2px border with primary text color
- Hover effects for better UX
- Consistent across all screen sizes

### Microsoft Integration
- Microsoft logo and icon
- "Built on Microsoft" text
- Proper spacing and alignment
- Mobile-only display

## 🔧 Customization

### Adding New Sections
1. Create new HTML sections following the responsive approach
2. Use `md:hidden` and `md:block` for responsive visibility
3. Add custom CSS classes in `src/css/main.css` using `@layer base`
4. Update `tailwind.config.js` for new design tokens

### Modifying Colors
Update the color tokens in `tailwind.config.js`:
```javascript
colors: {
  'text-primary': '#333F48',
  'text-muted': '#A3A3A3',
  // Add new colors here
}
```

### Adding New Fonts
1. Add font files to `src/fonts/`
2. Update `tailwind.config.js` fontFamily section
3. Include font imports in CSS

## 📄 License

This project is part of the Exeevo website redesign and follows the provided slicing rules and design specifications.

## 🤝 Contributing

Please follow the slicing rules outlined in `slicing-rules.mdc` when making changes to this project.

---

**Built with ❤️ using Vite, Tailwind CSS and following Exeevo design standards**
