# EzParkk - Smart Hourly Parking Marketplace

A premium, tech-focused startup website for EzParkk, featuring advanced animations, glassmorphism effects, and a modern multi-page experience.

## Features

- 🎨 **Premium Design**: Dark, futuristic theme with glassmorphism effects
- ✨ **Advanced Animations**: Zoom match cut, shape morphing, motion blur, staggered animations
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🚀 **Next.js 14**: Built with the latest Next.js and React
- 🎭 **Framer Motion**: Smooth, performant animations throughout
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body), Oswald (display)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── page.tsx          # Home page with hero and overview
│   ├── features/         # Features/Product page
│   ├── hosts/            # For Hosts page
│   ├── contact/          # Contact page
│   ├── privacy/          # Privacy Policy
│   ├── terms/            # Terms of Service
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Main navigation
│   └── Footer.tsx        # Footer component
├── public/
│   ├── logo.png          # EzParkk logo
│   ├── nature-background.jpg
│   ├── futuristic-car.jpg
│   └── phone-mockup.jpg
└── ...
```

## Design Features

### Hero Section
- Zoom match cut animation on page load
- Glassmorphic container with liquid morphing background
- Nature background with overlay
- Motion blur echo effects on phone mockup and car

### Animations
- **Zoom Match Cut**: Phone mockup zooms from full-screen to hero position
- **Staggered Animations**: Elements animate in sequence with delays
- **Motion Blur/Echo**: Trailing effects on moving elements
- **Shape Morphing**: Liquid blob animations in glassmorphic sections
- **Scroll Animations**: Elements animate on scroll into view

### Glassmorphism
- Semi-transparent containers with backdrop blur
- Subtle borders and shadows
- Liquid morphing backgrounds
- Layered depth effects

### Typography
- **Display Font**: Oswald (headings)
- **Body Font**: Inter (body text)
- Parentheses used for visual hierarchy in headings

## Pages

1. **Home (/)**: Hero, stats, overview blocks, hiring section
2. **Features (/features)**: Deep dive into platform features
3. **For Hosts (/hosts)**: Earning potential, host experience, testimonials
4. **Contact (/contact)**: Contact form and information
5. **Privacy (/privacy)**: Privacy Policy
6. **Terms (/terms)**: Terms of Service

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `dark-bg`: Primary background (#020617)
- `cyan`: Primary accent (#38bdf8)
- `purple`: Secondary accent (#a855f7)

### Fonts
Fonts are loaded in `app/layout.tsx`. To change fonts, update the Google Fonts imports.

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 EzParkk. All rights reserved.

