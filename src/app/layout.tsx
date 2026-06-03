import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "../../node_modules/next/dist/esm/next-devtools/server/font/geist-latin.woff2",
      style: "normal",
    },
    {
      path: "../../node_modules/next/dist/esm/next-devtools/server/font/geist-latin-ext.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: [
    {
      path: "../../node_modules/next/dist/esm/next-devtools/server/font/geist-mono-latin.woff2",
      style: "normal",
    },
    {
      path: "../../node_modules/next/dist/esm/next-devtools/server/font/geist-mono-latin-ext.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Md Saddam Hossain | Full Stack Developer",
  description:
    "Full-stack developer from Bangladesh specializing in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL. Building modern, scalable web applications.",
  authors: [{ name: "Md Saddam Hossain" }],
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "PostgreSQL Developer",
    "Bangladesh Developer",
    "Web Developer Bangladesh",
    "Saddam Hossain Portfolio",
  ],
  verification: {
    google: "wvYHghpuAVq0Y6QJa8d8-FSP_rHHsZ64xAklE1uaryE",
  },
  openGraph: {
    title: "Md Saddam Hossain | Full Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL — building modern, scalable web applications.",
    url: "https://saddam-portfolio-phi.vercel.app",
    siteName: "Md Saddam Hossain — Portfolio",
    type: "website",
    images: [
      {
        url: "https://saddam-portfolio-phi.vercel.app/seo-banner.png",
        width: 1200,
        height: 630,
        alt: "Md Saddam Hossain — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yourTwitterHandle",
    title: "Md Saddam Hossain | Full Stack Developer",
    description:
      "Full-stack developer specializing in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL.",
    images: ["https://saddam-portfolio-phi.vercel.app/seo-banner.png"],
  },
  icons: "/favicon-logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
