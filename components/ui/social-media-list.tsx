import React from "react";
import SocialMediaLink from "../link/social-media-link";
import GitHubIcon from "@/public/images/github_icon.svg";
import LinkedInIcon from "@/public/images/linkedin_icon.svg";
import ResumeIcon from "@/public/images/resume_icon.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialMediaList: React.FC = () => {
  return (
    <nav
      className="flex flex-row items-center gap-0"
      aria-label="Social Media Links"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <SocialMediaLink
              href="https://github.com/QuinchY"
              iconSrc={GitHubIcon}
              alt="GitHub Icon"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <SocialMediaLink
              href="https://linkedin.com/in/cyril-james-de-guzman"
              iconSrc={LinkedInIcon}
              alt="LinkedIn Icon"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <SocialMediaLink
              href="https://drive.google.com/file/d/1glbtWTyKUdlL7OVwjGxAAVXQXR-xHMb9/view?usp=sharing"
              iconSrc={ResumeIcon}
              alt="Resume Icon"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
};

export default SocialMediaList;
