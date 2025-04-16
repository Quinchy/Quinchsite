"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ProfilePic from "@/public/images/me.png";
import AppointmentSystem from "@/public/images/appointment_system.png";
import PeerToPeerDeliverySystem from "@/public/images/peer_to_peer_delivery_system.png";
import HueFitMobile from "@/public/images/huefit_mobile.png";
import HueFitWeb from "@/public/images/huefit_web.png";
import MainWrapper from "@/components/layout/main-wrapper";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToButton from "@/components/button/move-to-project-button";
import SocialMediaList from "@/components/ui/social-media-list";
import TypewriterText from "@/components/ui/typewriter-text";
import ProjectCard from "@/components/ui/project-card";
import ViewMoreProjectsLink from "@/components/link/view-more-projects-link";
import ProjectData from "@/data/projects.json";
import ProfilePicture from "@/components/ui/profile-picture";
import useInView from "@/hooks/useInView"; 

// Create a mapping of names to actual imports
const thumbnails: Record<string, StaticImageData> = {
  AppointmentSystem,
  HueFitMobile,
  HueFitWeb,
  PeerToPeerDeliverySystem,
};

export default function Home() {
  const [typewriterAnimationDone, setTypewriterAnimationDone] = useState(false);
  const { ref: projectsRef, isInView: hasReachedProjects } =
    useInView<HTMLDivElement>();

  return (
    <>
      <Navbar />
      <MainWrapper>
        {/* 1. Hero Section */}
        <section className="flex items-center gap-5 md:items-start">
          <div className="flex flex-col items-center gap-10 duration-300 ease-in-out lg:items-start">
            <figure
              className="fade-in flex flex-row items-start gap-4 lg:gap-8 xl:gap-8"
              style={{ animationDelay: "0s" }}
            >
              <ProfilePicture />
              <figcaption>
                <div className="flex min-w-[10.75rem] flex-col items-start gap-1 select-none md:items-start lg:min-w-[20rem] lg:gap-4">
                  <h1 className="text-highlight flex text-[3rem] leading-none font-semibold tracking-[-0.08em] md:text-[4.5rem]">
                    qu<p className="tracking-[-0.55rem]">i</p>nch
                  </h1>
                  <p className="ml-1 text-[1rem] tracking-tighter opacity-90 md:text-[1.40rem] lg:ml-2">
                    Software Developer.
                  </p>
                  <SocialMediaList />
                </div>
              </figcaption>
            </figure>
            <article
              id="about-section"
              className="fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="max-w-[20rem] text-center text-base sm:max-w-[25rem] md:max-w-[32rem] lg:max-w-[40rem] xl:text-start">
                Hi! My name is{" "}
                <span className="text-highlight">Cyril James De Guzman</span>{" "}
                and I'm a Full-stack Software Developer that specialize in Web
                and Mobile Development based in the Philippines.
                <br />
                <br />
                I'm a Developer with a passion for creating stunning visuals and
                solving problems. Whether it's a website, mobile application, or
                other solutions, I strive to deliver software that's both
                pleasing and efficient to use.
                <br />
                <br />
                Aside from coding and tech, I enjoy Art, Gaming, Photography,
                Animation, and more.
              </p>
            </article>
            <div className="fade-in" style={{ animationDelay: "0.6s" }}>
              <ScrollToButton />
            </div>
          </div>
        </section>

        {/* 2. Projects Section */}
        <section
          id="projects-section"
          ref={projectsRef}
          className="flex w-full scroll-mt-40 flex-col items-center gap-5"
        >
          {hasReachedProjects && (
            <>
              <TypewriterText
                label="code:projects"
                className="text-[2.25rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem]"
                onComplete={() => setTypewriterAnimationDone(true)}
              />
              <div
                className={`grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 ${
                  typewriterAnimationDone ? "opacity-100" : "opacity-0"
                }`}
              >
                {ProjectData.slice(0, 4).map((project, index) => (
                  <div
                    key={index}
                    className={
                      typewriterAnimationDone
                        ? `animate-[fadeIn_${500 + index * 200}ms_ease-in-out]`
                        : ""
                    }
                  >
                    <ProjectCard
                      thumbnail={thumbnails[project.thumbnail]}
                      title={project.title}
                      description={project.description}
                      longDescription={project.longDescription}
                      technologies={project.technologies}
                      githubLink={project.githubLink}
                      websiteLink={project.websiteLink}
                    />
                  </div>
                ))}
              </div>

              <ViewMoreProjectsLink
                href="/projects"
                label="View more projects"
                className={
                  typewriterAnimationDone
                    ? "animate-[fadeIn_1200ms_ease-in-out]"
                    : "opacity-0"
                }
              />
            </>
          )}
        </section>
      </MainWrapper>
      <Footer />
    </>
  );
}
