"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For Next.js 13+ App Router

const Navbar = () => {
  const pathname = usePathname(); // e.g. "/", "/about", "/projects"

  // Server fallback: unscrolled, default width
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState("45rem");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const updateWidth = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setWidth(scrolled ? "40rem" : "45rem");
    } else if (window.innerWidth >= 768) {
      setWidth(scrolled ? "33rem" : "38rem");
    } else if (window.innerWidth >= 640) {
      setWidth(scrolled ? "28rem" : "33rem");
    } else if (window.innerWidth >= 512) {
      setWidth(scrolled ? "23rem" : "28rem");
    } else {
      setWidth(scrolled ? "20rem" : "25rem");
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateWidth);

    // On client mount, run once
    handleScroll();
    updateWidth();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateWidth);
    };
  }, [updateWidth]);

  // Helper function to conditionally apply highlight class if pathname matches
  const linkClasses = (href: string) => {
    const baseClasses =
      "rounded-3xl px-4 py-3 duration-300 ease-in-out hover:bg-[--muted] md:px-6";
    // If current pathname matches the link's href, add highlight color
    return pathname === href
      ? `${baseClasses} text-[--highlight]`
      : baseClasses;
  };

  return (
    <motion.div
      initial={{
        backgroundColor: "var(--background)",
        width: width, // same fallback used for SSR
        boxShadow: "none",
        marginTop: 0,
      }}
      animate={{
        backgroundColor: scrolled ? "var(--nav)" : "var(--background)",
        width: width,
        boxShadow: scrolled ? "0px 4px 15px rgba(2, 14, 12, 0.9)" : "none",
        marginTop: scrolled ? "0.5rem" : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed left-1/2 top-0 z-[5] -translate-x-1/2 select-none rounded-2xl py-2"
    >
      <nav className="flex items-center justify-center gap-4 text-lg font-semibold tracking-tighter text-[--color-main-light] sm:gap-12 md:gap-16 lg:gap-24 xl:px-[15rem]">
        <Link href="/" className={linkClasses("/")}>
          {"/"}
        </Link>
        <Link href="/about" className={linkClasses("/about")}>
          {"/about"}
        </Link>
        <Link href="/projects" className={linkClasses("/projects")}>
          {"/projects"}
        </Link>
      </nav>
    </motion.div>
  );
};

export default Navbar;
