"use client";

import React, { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import ProfilePic from "@/public/images/me.png";
import BankingSystem from "@/public/images/banking_system.png";
import AppointmentSystem from "@/public/images/appointment_system.png";
import PeerToPeerDeliverySystem from "@/public/images/peer_to_peer_delivery_system.png";
import GitHubIcon from "@/public/images/github_icon.svg";
import LinkedInIcon from "@/public/images/linkedin_icon.svg";
import Navbar from "@/components/ui/navbar";
import { GlareCard } from "@/components/ui/glare-card";

export default function Home() {
  const [age, setAge] = useState<number | null>(null);

  // 1. Move date-based calculation into a client-only effect
  useEffect(() => {
    const birthDate = new Date(2002, 7, 25);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let calculatedAge = currentYear - birthDate.getFullYear();
    const isBirthdayPassed =
      currentDate >= new Date(currentYear, birthDate.getMonth(), birthDate.getDate());
    if (!isBirthdayPassed) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, []);

  // 2. Scroll to Projects
  const scrollToProjects = useCallback(() => {
    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // 3. Memoized "About Me" section
  const AboutMe = React.memo(() => (
    <section id="about-section" className="scroll-mt-40 flex flex-col items-center gap-5">
      <p className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] tracking-[-0.05em] font-bold text-[--color-highlight] self-center ease-in-out duration-300">
        about:me
      </p>
      <p className="text-center self-center text-[--color-main-light] text-base">
        Hello! My name is <span className="text-[--color-highlight]">Cyril James De Guzman</span>.
        <br />
        {age !== null && (
          <>
            I&apos;m a {age}-year-old{" "}
            <span className="text-[--color-highlight]">Computer Science student</span> from Bataan
            Peninsula State University - Main Campus.
            <br />
            <br />
          </>
        )}
        I am focused on improving my{" "}
        <span className="text-[--color-highlight]">Software Development</span> skills, throughout
        web, desktop, and mobile. And soon, become a{" "}
        <span className="text-[--color-highlight]">Software Engineer</span>.
        <br />
        <br />
        I love exploring a wide array of technologies and open at learning new technologies to keep
        on improving and{" "}
        <span className="text-[--color-highlight]">
          producing up-to-date, innovative software with high-quality visuals
        </span>
        .
        <br />
        <br />
        Aside from coding and tech, I enjoy things such as Art, Photography, and Animation. And my
        hobbies involve playing games, reading mangas, and watching fictional shows.
      </p>
    </section>
  ));

  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-[8rem] gap-64 overflow-hidden max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        {/* 1. Heading */}
        <section className="flex flex-col items-center gap-5 md:items-start">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16 lg:gap-32 xl:gap-44 ease-in-out duration-300">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex gap-3 md:gap-5 content-center">
                <p className="text-[3rem] md:text-[4.5rem] text-[--color-highlight] leading-none font-semibold tracking-[-0.08em] cursor-default">
                  quinch
                </p>
                <div className="inline-flex flex-row items-center gap-0 md:gap-3 mt-2">
                  <Link href="https://github.com/QuinchY" target="_blank" passHref>
                    <div className="cursor-pointer rounded-lg p-3 hover:bg-[--color-main-light-opacity] hover:brightness-125 ease-in-out duration-500">
                      <Image
                        src={GitHubIcon}
                        alt="GitHub Icon"
                        placeholder="empty"
                        quality={100}
                        priority
                      />
                    </div>
                  </Link>
                  <Link href="https://linkedin.com/in/cyril-james-de-guzman" target="_blank" passHref>
                    <div className="cursor-pointer rounded-lg p-3 hover:bg-[--color-main-light-opacity] hover:brightness-125 ease-in-out duration-500">
                      <Image
                        src={LinkedInIcon}
                        alt="LinkedIn Icon"
                        placeholder="empty"
                        quality={100}
                        priority
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <p className="mt-7 ml-2 text-[1.1rem] min-[320px]:text-[1rem] md:text-[1.40rem] text-[--color-main-light] opacity-90 tracking-tighter cursor-default">
                A Software Developer.
              </p>
            </div>
            <Image
              src={ProfilePic}
              alt="Profile Picture"
              width={200}
              height={200}
              placeholder="empty"
              quality={100}
              priority
              className="rounded-full"
            />
          </div>
          {/* Go to Projects Button */}
          <motion.button
            onClick={scrollToProjects}
            className="relative mt-3 cursor-pointer border border-[--color-main-light-opacity2] rounded-xl flex text-[1.35rem] font-semibold pl-14 pr-7 py-4 ease-in-out duration-500 group"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div
              className="bg-[--color-highlight] h-full rounded-s-xl absolute top-0 left-0 -z-10"
              variants={{
                rest: {
                  width: "10%",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                },
                hover: {
                  width: "100%",
                  borderTopRightRadius: "0.75rem",
                  borderBottomRightRadius: "0.75rem",
                },
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="relative flex items-center sm:text-[1.25rem] min-[320px]:text-[1.1rem]"
              variants={{
                rest: { color: "var(--color-highlight)" },
                hover: { color: "var(--color-background)" },
              }}
              transition={{ duration: 0.5 }}
            >
              View my Projects
              <motion.div
                className="ml-2"
                variants={{
                  rest: { rotate: -90 },
                  hover: { rotate: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <FaArrowDown />
              </motion.div>
            </motion.span>
          </motion.button>
        </section>

        {/* 2. About Me Content */}
        <AboutMe />

        {/* 3. Projects content */}
        <section id="projects-section" className="scroll-mt-40 flex flex-col items-center w-full gap-5">
          <p className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] tracking-[-0.05em] font-bold text-[--color-highlight] self-center ease-in-out duration-300">
            code:projects
          </p>
          <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 w-fit">
            <Link href="https://github.com/Quinchy/Pasabuy" target="_blank" passHref>
              <div className="cursor-pointer">
                <GlareCard className="flex flex-col items-center justify-center gap-10 px-5 w-80">
                  <Image
                    src={PeerToPeerDeliverySystem}
                    alt="Peer-to-Peer Delivery System"
                    width={300}
                    height={300}
                    placeholder="empty"
                    quality={100}
                    loading="lazy"
                    className="rounded-[0.75rem]"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[1.25rem] font-bold text-[--color-highlight]">➡ PasaBuy</p>
                    <p className="text-base text-[--color-main-light] ml-3">
                      A Peer-to-Peer Mobile Delivery App built using Android Studio.
                    </p>
                  </div>
                </GlareCard>
              </div>
            </Link>
            <Link
              href="https://github.com/Quinchy/Donna-Mae-Jorge-Hollman-Dental-Clinic-Scheduling-System"
              target="_blank"
              passHref
            >
              <div className="cursor-pointer">
                <GlareCard className="flex flex-col items-center justify-center gap-10 px-5 w-80">
                  <Image
                    src={AppointmentSystem}
                    alt="Appointment System"
                    width={300}
                    height={300}
                    placeholder="empty"
                    quality={100}
                    loading="lazy"
                    className="rounded-[0.75rem]"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[1.25rem] font-bold text-[--color-highlight]">
                      ➡ DMJH Clinic Website
                    </p>
                    <p className="text-base text-[--color-main-light] ml-3">
                      A User and Admin Website for managing appointments built using PHP Laravel.
                    </p>
                  </div>
                </GlareCard>
              </div>
            </Link>
            <Link href="https://github.com/Quinchy/BankingSystem" target="_blank" passHref>
              <div className="cursor-pointer">
                <GlareCard className="flex flex-col items-center justify-center gap-10 px-5 w-80">
                  <Image
                    src={BankingSystem}
                    alt="Banking System"
                    width={300}
                    height={300}
                    placeholder="empty"
                    quality={100}
                    loading="lazy"
                    className="rounded-[0.75rem]"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-[1.25rem] font-bold text-[--color-highlight]">➡ OnlyFunds</p>
                    <p className="text-base text-[--color-main-light] ml-3">
                      A Mock-up Desktop Banking System built using C# Windows Form.
                    </p>
                  </div>
                </GlareCard>
              </div>
            </Link>
          </div>
        </section>

        {/* 4. Footer */}
        <footer className="w-full">
          <div className="flex flex-row items-center justify-center gap-[2rem] sm:gap-[5rem] md:gap-[8rem] lg:gap-[16rem] mb-10 pt-10 text-[--color-main-light] border-t border-[--color-main-light-opacity2]">
            {/* Links */}
            <div className="flex flex-row items-center gap-0 md:gap-3 mt-2">
              <Link href="https://github.com/QuinchY" target="_blank" passHref>
                <div className="cursor-pointer rounded-lg p-3 hover:bg-[--color-main-light-opacity] hover:brightness-125 ease-in-out duration-500">
                  <Image
                    src={GitHubIcon}
                    alt="GitHub Icon"
                    placeholder="empty"
                    quality={100}
                    priority
                  />
                </div>
              </Link>
              <Link href="https://linkedin.com/in/cyril-james-de-guzman" target="_blank" passHref>
                <div className="cursor-pointer rounded-lg p-3 hover:bg-[--color-main-light-opacity] hover:brightness-125 ease-in-out duration-500">
                  <Image
                    src={LinkedInIcon}
                    alt="LinkedIn Icon"
                    placeholder="empty"
                    quality={100}
                    priority
                  />
                </div>
              </Link>
            </div>
            {/* Copyright */}
            <div className="flex flex-col items-end">
              <p className="text-[0.65rem] min-[520px]:text-[0.75rem] sm:text-[0.85rem] text-right ease-in-out duration-300">
                © 2024 Cyril James De Guzman. All Rights Reserved.
              </p>
              <p className="text-[0.65rem] min-[520px]:text-[0.75rem] sm:text-[0.85rem] text-right ease-in-out duration-300">
                Made using Next JS, with Aceternity UI.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
