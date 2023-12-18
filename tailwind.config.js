/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  screens: {
    'xl': '1440px',
    'md': '770px'
  },
	theme: {
		extend: {
      colors: {
        'cyan': 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
        'rose-red': 'hsl(0, 87%, 67%)',
        'gray': 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'very-dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8%, 14%)'
      }
    },
	},
	plugins: [],
}

