import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import CursorFollower from "@/components/ui/cursor-follower"; // Adjust the import path as necessary

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
        className={`${GeistMono.className} flex flex-col items-center justify-center text-[--regular]`}
      >
        {children}
        <CursorFollower />
      </body>
    </html>
  );
}
