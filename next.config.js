/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
  // Optimasi untuk Vercel
  swcMinify: true,
  compress: true,
}

module.exports = nextConfig
