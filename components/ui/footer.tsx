import React from "react";
import SocialMediaList from "@/components/ui/social-media-list";

const Footer: React.FC = () => {
  return (
    <footer className="w-full" role="contentinfo">
      <div className="mb-10 sm flex flex-col lg:flex-row items-center justify-center gap-1 border-t border-muted pt-10 sm:gap-[2rem] lg:gap-[16rem]">
        <SocialMediaList />
        <div className="flex flex-col lg:items-end">
          <small className="text-center lg:text-right text-[0.65rem] min-[520px]:text-[0.75rem] sm:text-[0.85rem]">
            {"© 2024 Cyril James De Guzman. All Rights Reserved."}
          </small>
          <small className="text-center lg:text-right text-[0.65rem] min-[520px]:text-[0.75rem] sm:text-[0.85rem]">
            {"Made using Next.js, with Tailwind CSS."}
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
