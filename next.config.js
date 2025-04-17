/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // 如果有外部图片域名，添加在这里
  },
  output: 'export', // 启用静态导出
  basePath: '/kyouko-portfolio', // 替换为你的 GitHub 仓库名
  trailingSlash: true // 确保 URL 以 / 结尾，兼容 GitHub Pages
}

module.exports = nextConfig;