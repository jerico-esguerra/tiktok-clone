/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.boredpanda.com', 'lh3.googleusercontent.com', 'xsgames.co'],
  },
}

module.exports = nextConfig
