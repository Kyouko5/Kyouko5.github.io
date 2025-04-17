/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Kyouko5.github.io' : '', // 这里的 'portfolio' 需要替换成你的 GitHub 仓库名
  trailingSlash: true,
}

module.exports = nextConfig;