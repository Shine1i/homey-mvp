/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geist Sans', 'sans-serif'],
				vibes: ['Great Vibes', 'cursive'],
				pacifico: ['Pacifico', 'cursive']
			},
			colors: {
				darkblue: '#4D62D1',
				yelow: '#FEFA7f',
				pomidor: '#FF7B61',
				darkyellow: '#D9D530',
				lime: '#A3F161',
				lightblue: '#7DD4FF',
				background: '#1C1E1F'
			},
			animation: {
				blob: 'blob 7s infinite'
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)'
					},
					'100%': {
						transform: 'tranlate(0px, 0px) scale(1)'
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
