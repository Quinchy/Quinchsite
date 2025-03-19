"use client";

import React, { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from "@/public/images/me.png";
import AppointmentSystem from "@/public/images/appointment_system.png";
import PeerToPeerDeliverySystem from "@/public/images/peer_to_peer_delivery_system.png";
import HueFitMobile from "@/public/images/huefit_mobile.png"
import HueFitWeb from "@/public/images/huefit_web.png"
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ScrollToButton from "@/components/ui/move-to-project-button";
import SocialMediaList from "@/components/ui/social-media-list";
import ProjectCard from "@/components/ui/project-card";
import ViewMoreProjectsLink from "@/components/ui/view-more-projects-link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mb-[10rem] mt-[10rem] flex flex-col items-center justify-center gap-64 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {/* 1. Hero Section */}
        <section className="flex items-center gap-5 md:items-start">
          <div className="flex flex-col items-center lg:items-start gap-10 duration-300 ease-in-out">
            <figure className="flex flex-row items-start gap-4 lg:gap-8 xl:gap-8">
              <Image
                src={ProfilePic}
                alt="Profile Picture"
                width={250}
                height={250}
                placeholder="empty"
                quality={100}
                priority
                className="h-auto w-[125px] rounded-2xl sm:w-[200px] md:w-[250px]"
              />
              <figcaption>
                <div className="flex min-w-[10.75rem] lg:min-w-[20rem] select-none flex-col items-start gap-1 lg:gap-4 md:items-start">
                  <h1 className="flex text-[3rem] font-semibold leading-none tracking-[-0.08em] text-[--highlight] md:text-[4.5rem]">
                    qu<p className="tracking-[-0.55rem]">i</p>nch
                  </h1>
                  <p className="ml-1 lg:ml-2 tracking-tighter opacity-90 text-[1rem] md:text-[1.40rem]">
                    Software Developer.
                  </p>
                  <SocialMediaList />
                </div>
              </figcaption>
            </figure>
            <article id="about-section">
              <p className="text-center xl:text-start text-base max-w-[20rem] sm:max-w-[25rem] md:max-w-[32rem] lg:max-w-[40rem]">
                Hello! My name is{" "}
                <span className="text-[--highlight]">
                  Cyril James De Guzman
                </span>
                . {"I'm"} a Software Developer with specialization in Web and
                Mobile Development.
                <br />
                <br />I love exploring a different kind of technologies and
                frameworks, and {"I'm"} always open for something new to keep on
                improving my current skills and knowledge. Currently, I use
                technologies such as Next.js, Laravel, React Native Expo, and
                etc for building maintainable, scalable, and efficient
                full-stack applications.
                <br />
                <br />
                Aside from coding and tech, I enjoy things such as Art,
                Photography, and Animation.
              </p>
            </article>
            <ScrollToButton />
          </div>
        </section>
        {/* 2. Projects Section */}
        <section
          id="projects-section"
          className="flex w-full scroll-mt-40 flex-col items-center gap-5"
        >
          <p className="self-center text-[2rem] font-bold tracking-[-0.05em] text-[--highlight] duration-300 ease-in-out sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem]">
            code:projects
          </p>
          <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2">
            <Link
              href="https://github.com/Quinchy/Hue-Fit"
              target="_blank"
              passHref
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
            >
              <ProjectCard
                thumbnail={AppointmentSystem}
                title="Dental Appointment System"
                description="A Web-based Appointment System built using Laravel."
              />
            </Link>
          </div>
          <ViewMoreProjectsLink href="/projects" />
        </section>
      </main>
      <Footer />
    </>
  );
}