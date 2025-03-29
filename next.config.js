/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['api.quantumgrove.tech'],
  },
}

module.exports = nextConfig 