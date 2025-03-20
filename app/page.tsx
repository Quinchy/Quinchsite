"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from "@/public/images/me.png";
import AppointmentSystem from "@/public/images/appointment_system.png";
import PeerToPeerDeliverySystem from "@/public/images/peer_to_peer_delivery_system.png";
import HueFitMobile from "@/public/images/huefit_mobile.png";
import HueFitWeb from "@/public/images/huefit_web.png";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ScrollToButton from "@/components/ui/move-to-project-button";
import SocialMediaList from "@/components/ui/social-media-list";
import ProjectCard from "@/components/ui/project-card";
import ViewMoreProjectsLink from "@/components/ui/view-more-projects-link";

export default function Home() {
  // Typewriter effect for "code:projects" text
  const fullText = "code:projects";
  const [displayedText, setDisplayedText] = useState("");
  const [typewriterDone, setTypewriterDone] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
        setTypewriterDone(true);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer to trigger project animations when section is in view
  const projectsRef = useRef(null);
  const [projectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProjectsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Projects animate only if typewriter effect is done and section is visible
  const canAnimateProjects = typewriterDone && projectsVisible;

  return (
    <>
      <Navbar />
      <main className="mt-[9rem] mb-[10rem] flex flex-col items-center justify-center gap-64 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {/* 1. Hero Section */}
        <section className="flex items-center gap-5 md:items-start">
          <div className="flex flex-col items-center gap-10 duration-300 ease-in-out lg:items-start">
            <figure
              className="fade-in flex flex-row items-start gap-4 lg:gap-8 xl:gap-8"
              style={{ animationDelay: "0s" }}
            >
              <Image
                src={ProfilePic}
                alt="Profile Picture"
                width={250}
                height={250}
                placeholder="empty"
                quality={100}
                priority
                className="h-auto w-[125px] rounded-full sm:w-[200px] md:w-[250px]"
              />
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
                and I'm a Software Developer specializing in Web and Mobile
                Development.
                <br />
                <br />
                I'm a Developer with a passion for creating stunning visuals and
                using clear logic to solve challenging problems. Whether it's
                full-stack applications with Next.js, Laravel, React Native
                Expo, or other technologies, I strive to build software that's
                both glorious and efficient.
                <br />
                <br />
                Aside from coding and tech, I enjoy Art, Gaming, Photography,
                Animation, and anything fun.
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
          <p
            className="text-highlight self-center text-[2rem] font-bold tracking-[-0.05em] duration-300 ease-in-out sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem]"
            style={{ minHeight: "3rem" }}
          >
            {displayedText}
          </p>
          {/* Always render projects container; use inline style to reserve space */}
          <div
            className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2"
            style={!typewriterDone ? { opacity: 0 } : {}}
          >
            <Link
              href="https://github.com/Quinchy/Hue-Fit"
              target="_blank"
              passHref
              className={canAnimateProjects ? "fade-in" : ""}
              style={{ animationDelay: canAnimateProjects ? "0s" : "0s" }}
            >
              <ProjectCard
                thumbnail={HueFitWeb}
                title="HueFit Web"
                description="A Web-based Inventory and Ordering Management System plus Business Website of HueFit built using Next.js."
              />
            </Link>
            <Link
              href="https://github.com/Quinchy/Hue-Fit"
              target="_blank"
              passHref
              className={canAnimateProjects ? "fade-in" : ""}
              style={{ animationDelay: canAnimateProjects ? "0.2s" : "0s" }}
            >
              <ProjectCard
                thumbnail={HueFitMobile}
                title="HueFit Mobile"
                description="A Men's Apparel E-commerce Mobile Application with Virtual Fitting built using React Native Expo."
              />
            </Link>
            <Link
              href="https://github.com/Quinchy/Pasabuy"
              target="_blank"
              passHref
              className={canAnimateProjects ? "fade-in" : ""}
              style={{ animationDelay: canAnimateProjects ? "0.4s" : "0s" }}
            >
              <ProjectCard
                thumbnail={PeerToPeerDeliverySystem}
                title="PasaBuy"
                description="A Peer-to-Peer Mobile Delivery App built using Android Studio."
              />
            </Link>
            <Link
              href="https://github.com/Quinchy/Donna-Mae-Jorge-Hollman-Dental-Clinic-Scheduling-System"
              target="_blank"
              passHref
              className={canAnimateProjects ? "fade-in" : ""}
              style={{ animationDelay: canAnimateProjects ? "0.6s" : "0s" }}
            >
              <ProjectCard
                thumbnail={AppointmentSystem}
                title="Dental Appointment System"
                description="A Web-based Appointment System built using Laravel."
              />
            </Link>
          </div>
          <ViewMoreProjectsLink
            href="/projects"
            className={canAnimateProjects ? "fade-in" : ""}
            style={
              !typewriterDone
                ? { opacity: 0 }
                : { animationDelay: canAnimateProjects ? "0.8s" : "0s" }
            }
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
