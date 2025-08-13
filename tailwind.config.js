/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#a21caf',
					dark: '#86198f',
					light: '#c026d3',
				},
			},
			backgroundImage: {
				'grid-radial': 'radial-gradient(circle at 50% 0%, rgba(162,28,175,0.15), transparent 60%)',
			},
		},
	},
	plugins: [],
}


