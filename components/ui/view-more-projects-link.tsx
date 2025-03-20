import Link from "next/link";
import React from "react";

interface ViewMoreProjectsLinkProps {
  href?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ViewMoreProjectsLink: React.FC<ViewMoreProjectsLinkProps> = ({
  href = "/projects",
  label = "View More Projects",
  className = "",
  style,
}) => {
  return (
    <Link
      href={href}
      className={`border-border hover:bg-muted mt-5 min-w-[320px] rounded-xl border-[1px] py-5 text-center text-lg duration-500 ease-in-out md:w-full ${className}`}
      style={style}
    >
      {label}
    </Link>
  );
};

export default ViewMoreProjectsLink;
