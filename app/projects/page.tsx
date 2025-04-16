"use client";

import MainWrapper from "@/components/layout/main-wrapper";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProjectCard from "@/components/ui/project-card";
import ProjectData from "@/data/projects.json";

// Import all thumbnails
import AppointmentSystem from "@/public/images/appointment_system.png";
import AniQuinch from "@/public/images/aniquinch_ecommerce.png";
import BankingSystem from "@/public/images/banking_system.png";
import HueFitMobile from "@/public/images/huefit_mobile.png";
import HueFitWeb from "@/public/images/huefit_web.png";
import PeerToPeerDeliverySystem from "@/public/images/peer_to_peer_delivery_system.png";
import { StaticImageData } from "next/image";

// Create a mapping of names to actual imports
const thumbnails: Record<string, StaticImageData> = {
  AppointmentSystem,
  AniQuinch,
  BankingSystem,
  HueFitMobile,
  HueFitWeb,
  PeerToPeerDeliverySystem,
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <div className="grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {ProjectData.map((project, index) => (
            <ProjectCard
              key={index}
              thumbnail={thumbnails[project.thumbnail]}
              title={project.title}
              description={project.description}
              longDescription={project.longDescription}
              technologies={project.technologies}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
            />
          ))}
        </div>
      </MainWrapper>
      <Footer />
    </>
  );
}