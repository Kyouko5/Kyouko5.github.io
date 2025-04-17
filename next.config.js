/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/kyouko5.github.io' : '',
  trailingSlash: true,
}

module.exports = nextConfig;