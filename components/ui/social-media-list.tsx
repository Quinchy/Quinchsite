import React from "react";
import SocialMediaLink from "../link/social-media-link";
import GitHubIcon from "@/public/images/github_icon.svg";
import LinkedInIcon from "@/public/images/linkedin_icon.svg";

const SocialMediaList: React.FC = () => {
  return (
    <nav
      className="flex flex-row items-center gap-0 md:gap-3"
      aria-label="Social Media Links"
    >
      <SocialMediaLink
        href="https://github.com/QuinchY"
        iconSrc={GitHubIcon}
        alt="GitHub Icon"
      />
      <SocialMediaLink
        href="https://linkedin.com/in/cyril-james-de-guzman"
        iconSrc={LinkedInIcon}
        alt="LinkedIn Icon"
      />
    </nav>
  );
};

export default SocialMediaList;
