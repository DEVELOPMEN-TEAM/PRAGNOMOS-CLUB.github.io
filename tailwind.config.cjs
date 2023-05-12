/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				josefin: ["Josefin Sans", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [require("flowbite/plugin"), require("@tailwindcss/typography"), require('@tailwindcss/line-clamp'),],
};
