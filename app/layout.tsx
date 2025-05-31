import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import CursorFollower from "@/components/ui/cursor-follower";
import LenisScrollProvider from "@/providers/lenis-provider";
import ClientLayoutWrapper from "@/components/layout/client-layout-wrapper";

export const metadata: Metadata = {
  title: "Quinch",
  description: "Web Portfolio of Cyril James De Guzman",
  metadataBase: new URL("https://quinch.vercel.app"),
  openGraph: {
    title: "Quinch — Cyril James De Guzman",
    description:
      "Web Portfolio of Cyril James De Guzman. Full-stack developer, creative engineer.",
    url: "https://quinch.vercel.app",
    siteName: "Quinch",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistMono.className} flex flex-col items-center justify-center`}
      >
        <LenisScrollProvider>
          <ClientLayoutWrapper>
            <main id="main-content">{children}</main>
          </ClientLayoutWrapper>
          <CursorFollower />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
