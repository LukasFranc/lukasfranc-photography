/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com']
	},
	plugins: ['tailwindcss', 'postcss-preset-env']
}

module.exports = nextConfig
