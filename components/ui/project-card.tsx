"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  thumbnail: string | StaticImageData;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
  longDescription,
  technologies,
  link
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="border-border hover:bg-muted flex h-96 w-80 cursor-pointer flex-col gap-5 rounded-3xl border-[1px] p-7 duration-500 ease-in-out"
      >
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
          <p className="text-highlight text-lg font-bold">{title}</p>
          <p>{description}</p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="flex h-[70vh] min-w-[40rem] flex-col">
          <DialogHeader>
            <DialogTitle asChild>
              <div className="inline-flex items-center">
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-highlight hover group inline-flex items-center gap-1 text-2xl hover:underline"
                >
                  {title}
                  <ArrowUpRight
                    width={24}
                    height={24}
                    className="transition-all duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 pr-2 overflow-y-auto">
            <Image
              src={thumbnail}
              alt={title}
              width={600}
              height={400}
              quality={100}
              className="h-auto w-full rounded-xl"
            />
            <p className="text-base">{longDescription}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} className="bg-muted text-foreground">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
