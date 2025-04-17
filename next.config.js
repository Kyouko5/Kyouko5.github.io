/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any domains for external images here
  },
}

module.exports = {
  output: 'export', // 启用静态导出
  basePath: '/kyouko5.github.io/repo', // 可选，替换为 GitHub Pages 子路径（如 username.github.io/repo）
  trailingSlash: true // 确保 URL 以 / 结尾，兼容 GitHub Pages
}