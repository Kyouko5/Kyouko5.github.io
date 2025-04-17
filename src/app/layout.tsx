/*
 * @Author: Kyouko
 * @Date: 2025-04-17 21:57:57
 * @LastEditTime: 2025-04-18 02:01:06
 * @Description: 请输入文件描述
 * @FilePath: /page/src/app/layout.tsx
 */
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Kyouko",
  description: "Personal portfolio website of Kyouko, a college student from China",
  keywords: ["portfolio", "student", "web development", "China", "college"],
  authors: [{ name: "Kyouko" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: '/favicon/black-cat.ico',
    apple: '/favicon/christmas-decorations.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
} 