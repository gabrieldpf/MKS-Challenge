/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
}

module.exports = nextConfig
