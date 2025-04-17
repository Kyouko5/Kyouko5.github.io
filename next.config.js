/*
 * @Author: Kyouko
 * @Date: 2025-04-17 21:57:25
 * @LastEditTime: 2025-04-17 23:51:14
 * @Description: 请输入文件描述
 * @FilePath: /page/next.config.js
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 启用静态导出
  images: {
    unoptimized: true, // 为了静态导出
    domains: [],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '', // 替换为你的仓库名
  trailingSlash: true,
}

module.exports = nextConfig;