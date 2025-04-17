/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Kyouko5.github.io', // 替换为你的 GitHub 仓库名
  trailingSlash: true,
}

module.exports = nextConfig;