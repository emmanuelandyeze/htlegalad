/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				navy: '#2C3E50',
				primaryText: '#7F8C8D',
				secondaryText: '#ECF0F1',
				teal: '#1ABC9C',
				gold: '#F39C12',
			},
			transform: {
				'preserve-3d': 'preserve-3d',
			},
			transformOrigin: {
				center: 'center',
			},
			rotate: {
				'y-180': 'rotateY(180deg)',
			},
			transitionDuration: {
				700: '700ms',
			},
		},
	},
	variants: {
		extend: {
			transform: ['group-hover'],
			rotate: ['group-hover'],
		},
	},
	plugins: [],
};
