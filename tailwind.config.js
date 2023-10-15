/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      animation: {
        'text-pop-up-top': 'text-pop-up-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'focus-in': 'focus-in 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both',
        'slide-in-elliptic-top-fwd':
          'slide-in-elliptic-top-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
      keyframes: {
        'text-pop-up-top': {
          '0%': {
            transform: 'translateY(100px)',
            transformOrigin: '50% 50%',
            textShadow: 'none',
            filter: 'blur(12px)',
            opacity: '0',
          },
          '70%': {
            textShadow: 'none',
          },
          '100%': {
            transform: 'translateY(-15px)',
            transformOrigin: '50% 50%',
            textShadow: '0 10px 10px rgba(0, 0, 0, 0.2)',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'focus-in': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          '100%': {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'slide-in-elliptic-top-fwd': {
          '0%': {
            transform: 'translateY(-600px) rotateX(-30deg) scale(0)',
            transformOrigin: '50% 100%',
            opacity: '0',
            filter: 'blur(12px)',
          },
          '100%': {
            transform: 'translateY(0) rotateX(0) scale(1)',
            transformOrigin: '50% 1400px',
            opacity: '1',
            filter: 'blur(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
