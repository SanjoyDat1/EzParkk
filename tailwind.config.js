/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#020617',
        'dark-bg-alt': '#050816',
        'glass': 'rgba(15, 23, 42, 0.6)',
        'glass-border': 'rgba(148, 163, 184, 0.35)',
        'cyan': '#38bdf8',
        'cyan-dark': '#0ea5e9',
        'purple': '#a855f7',
      },
      fontFamily: {
        'display': ['Oswald', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'liquid-morph': 'liquidMorph 18s ease-in-out infinite alternate',
        'blob': 'blob 14s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        liquidMorph: {
          '0%': {
            transform: 'translate3d(-10px, -10px, 0) rotate(0deg)',
            borderRadius: '40% 60% 55% 45%',
          },
          '50%': {
            transform: 'translate3d(10px, 0, 0) rotate(10deg)',
            borderRadius: '60% 40% 50% 50%',
          },
          '100%': {
            transform: 'translate3d(0, 10px, 0) rotate(-8deg)',
            borderRadius: '50% 50% 60% 40%',
          },
        },
        blob: {
          '0%': {
            transform: 'translate3d(0, 0, 0) scale(1)',
          },
          '50%': {
            transform: 'translate3d(15px, -10px, 0) scale(1.05)',
          },
          '100%': {
            transform: 'translate3d(-10px, 15px, 0) scale(0.98)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}
