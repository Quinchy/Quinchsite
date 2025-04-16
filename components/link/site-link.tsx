"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SiteLinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const SiteLink: React.FC<SiteLinkProps> = ({ href="", children, className }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover group border-highlight/50 hover:border-highlight inline-flex items-center gap-1 rounded-lg border-[1px] px-2 py-1 text-sm font-medium transition-all duration-300 ease-in-out hover:underline ${className || ""}`}
    >
      {children}
      <ArrowUpRight
        width={20}
        height={20}
        className="transition-all duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
};

export default SiteLink;
