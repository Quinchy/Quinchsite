import Link from "next/link";
import React from "react";

interface ViewMoreProjectsLinkProps {
  href?: string;
  label?: string;
  className?: string;
}

const ViewMoreProjectsLink: React.FC<ViewMoreProjectsLinkProps> = ({
  href = "/projects",
  label = "View More Projects",
}) => {
  return (
    <Link
      href={href}
      className="min-w-[320px] md:w-full rounded-xl mt-5 text-lg border-[1px] border-border py-5 text-center duration-500 ease-in-out hover:bg-muted"
    >
      {label}
    </Link>
  );
};

export default ViewMoreProjectsLink;
