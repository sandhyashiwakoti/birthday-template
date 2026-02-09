# 🎂 Interactive Birthday Memory Website

A beautiful, interactive birthday website template built with React and Vite. Perfect for creating personalized birthday surprises with memories, photos, and an interactive cake-cutting experience!

## Live Demo

Coming soon after deployment!

## Features

- **Memory Timeline** - Scroll through beautifully animated memory cards
- **Interactive Cake** - Make a wish, blow candles, and cut the cake!
- **Photo Gallery** - Showcase special moments with a lightbox gallery
- **Smooth Animations** - Powered by Framer Motion
- **Confetti Effects** - Celebrate with canvas-confetti
- **Particle Background** - Animated sparkle effects
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Beautiful UI** - Modern gradient design with smooth transitions

## Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Canvas Confetti** - Confetti effects
- **CSS3** - Custom styling and animations

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/birthday-template.git
cd birthday-template
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser** at `http://localhost:5173`

## Customization Guide

### 1. Update Memories Content

Edit `/src/memories.js`:
```javascript
export const memories = [
  {
    title: "Your Memory Title",
    text: "Your memory description...",
    image: "image-url-or-path",
  },
  // Add more memories...
];
```

### 2. Add Your Photos

**Option A: Local Images**
- Create `/public/images/` folder
- Add your photos
- Reference as: `image: "/images/your-photo.jpg"`

**Option B: External URLs**
- Use Unsplash, Imgur, or any image hosting
- Reference as: `image: "https://images.unsplash.com/..."`

### 3. Customize Colors

Edit `/src/App.css`:
```css
/* Change primary colors */
--primary: #ff2d75;
--secondary: #ff82ad;

/* Update gradient background */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Interactive Features

### Cake Interaction Flow:
1. **Make a Wish** - Close your eyes and make a wish
2. **Countdown** - 3, 2, 1... get ready!
3. **Blow Candles** - Candles magically go out
4. **Cut the Cake** - Tap to slice it
5. **Celebrate** - Confetti explosion!

## Project Structure
```
birthday-template/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Cake.jsx         # Interactive cake
│   │   ├── Cake.css
│   │   └── Particles.jsx    # Background effects
│   ├── App.jsx              # Main component
│   ├── App.css
│   ├── Card.css
│   ├── index.css
│   ├── main.jsx
│   └── memories.js          # CUSTOMIZE THIS!
├── index.html
├── package.json
└── README.md
```

## Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. "Add new site" → "Import from GitHub"
4. Select your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Deploy!

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## Acknowledgments

- Built with love for creating memorable celebrations
- Powered by React, Vite, and Framer Motion
- Confetti by [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)


**⭐ Star this repo if you found it helpful!**

**Made with ❤️ by Sandhya Shiwakoti**