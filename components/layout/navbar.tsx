"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use a consistent height to avoid layout jumps
  const baseClass =
    "fixed top-0 left-1/2 z-10 -translate-x-1/2 rounded-2xl py-2 select-none";
  const transitionClass =
    "transition-[background,box-shadow,border-color,backdrop-filter,margin-top,width] duration-500 ease-in-out";
  const style = {
    willChange: "backdrop-filter, box-shadow, transform",
    transform: "translateZ(0)",
  };

  return (
    <div
      className={`${baseClass} ${transitionClass} ${
        scrolled
          ? "bg-nav/75 border-b-highlight/55 shadow-highlight/25 mt-2 w-[20rem] border-b-[1px] shadow-lg backdrop-blur-lg sm:w-[28rem] md:w-[35rem] lg:w-[40rem]"
          : "mt-0 w-[25rem] border-b-0 border-b-transparent bg-transparent shadow-none sm:w-[32rem] md:w-[38rem] lg:w-[45rem]"
      }`}
      style={style}
    >
      <nav className="flex items-center justify-center gap-4 text-lg font-semibold tracking-tighter sm:gap-12 md:gap-16 lg:gap-24 xl:px-[15rem]">
        <Link
          href="/"
          className={`hover:bg-muted/90 rounded-3xl px-4 py-3 duration-300 ease-in-out md:px-6 ${
            pathname === "/"
              ? "text-highlight text-shadow-highlight text-shadow-lg/35"
              : ""
          }`}
        >
          {"/"}
        </Link>
        <Link
          href="/about"
          className={`hover:bg-muted/90 rounded-3xl px-4 py-3 duration-300 ease-in-out md:px-6 ${
            pathname === "/about"
              ? "text-highlight text-shadow-highlight text-shadow-lg/15"
              : ""
          }`}
        >
          {"/about"}
        </Link>
        <Link
          href="/projects"
          className={`hover:bg-muted/90 rounded-3xl px-4 py-3 duration-300 ease-in-out md:px-6 ${
            pathname === "/projects"
              ? "text-highlight text-shadow-highlight text-shadow-lg/15"
              : ""
          }`}
        >
          {"/projects"}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
