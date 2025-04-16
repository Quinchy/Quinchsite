"use client";

import { useState } from "react";
import Image from "next/image";
import FrontImage from "@/public/images/me.png";
import BackImage from "@/public/images/quinch.png";

export default function ProfilePicture() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(!flipped);

  return (
    <div
      className="relative h-[250px] w-[250px] cursor-pointer perspective"
      onClick={handleClick}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute h-full w-full backface-hidden">
          <Image
            src={FrontImage}
            alt="Profile Picture Front"
            fill
            placeholder="empty"
            quality={100}
            className="object-contain rounded-full"
            priority
          />
        </div>

        {/* Back */}
        <div className="absolute h-full w-full rotate-y-180 backface-hidden">
          <Image
            src={BackImage}
            alt="Profile Picture Back"
            fill
            placeholder="empty"
            quality={100}
            className="object-contain rounded-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
