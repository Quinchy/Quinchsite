import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface SocialMediaLinkProps {
  href: string;
  iconSrc: string | StaticImageData;
  alt?: string;
  className?: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  iconSrc,
  alt = 'Social Media Icon',
  className = 'w-12 h-12 xl:w-14 xl:h-14',
}) => {
  return (
    <Link href={href} target="_blank" passHref>
      <div
        className={`cursor-pointer rounded-xl p-3 hover:bg-[--muted] hover:brightness-125 ease-in-out duration-500 ${className}`}
      >
        <Image
          src={iconSrc}
          alt={alt}
          placeholder="empty"
          quality={100}
          priority
        />
      </div>
    </Link>
  );
};

export default SocialMediaLink;
