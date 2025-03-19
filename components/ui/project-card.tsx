import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  thumbnail: string | StaticImageData;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col h-96 w-80 border-[1px] border-border rounded-3xl gap-5 p-7 hover:bg-muted duration-500 ease-in-out">
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={300}
        placeholder="empty"
        quality={100}
        loading="lazy"
        className="rounded-xl"
      />
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold text-highlight">
          {title}
        </p>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
