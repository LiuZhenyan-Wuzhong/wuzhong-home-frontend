/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-20px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        }
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
      },
      colors: {
        primary: '#0070f3',
        primaryHover: '#8EBEF7',
        primaryActive: '#005DCA',
        customGreen: '#0894B3',
        resumePrimary: '#358FCE'
      },
      width: {
        140: '560px',
        160: '640px',
        172: '688px',
        192: '768px',
        236: '944px',
        256: '1024px',
        300: '1200px',
        320: '1280px',
        364: '1456px',
        384: '1536px'
      },
      height: {
        140: '560px',
        160: '640px',
        172: '688px',
        192: '768px',
        236: '944px',
        256: '1024px',
        300: '1200px',
        320: '1280px',
        364: '1456px',
        384: '1536px'
      }
    }
  },
  corePlugins: {
    preflight: true
  },
  plugins: [require('tailwindcss-radix')(), require('@tailwindcss/aspect-ratio')]
};
