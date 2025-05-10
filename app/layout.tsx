import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import CursorFollower from "@/components/ui/cursor-follower";
import LenisScrollProvider from "@/providers/lenis-provider";
import ClientLayoutWrapper from "@/components/layout/client-layout-wrapper";

export const metadata: Metadata = {
  title: "Quinch",
  description: "Web Portfolio of Cyril James De Guzman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.className} flex flex-col items-center justify-center`}
      >
        <LenisScrollProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          <CursorFollower />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
