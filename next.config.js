/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [],
  },
  output: 'export',
  basePath: '',
  trailingSlash: true,
}

module.exports = nextConfig;