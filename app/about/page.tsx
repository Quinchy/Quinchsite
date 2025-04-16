"use client";

import Image from "next/image";
import MainWrapper from "@/components/layout/main-wrapper";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProfilePicture from "@/components/ui/profile-picture";
import SocialMediaList from "@/components/ui/social-media-list";

export default function About() {
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
                Hello! I'm{" "}
                <span className="text-highlight">Cyril James De Guzman</span>{" "}
                and I'm a Full-stack Software Developer that specialize in Web
                and Mobile Development based in the Philippines.
                <br />
                <br />
                I'm a Developer with a passion for creating stunning visuals and
                solving problems. From a very young age, I showed joy and
                interest towards technology. This early fascination led me to
                pursue a computer-related course. Which later before college, I
                tried to pick up programming and found liking on it, leading to
                me choosing a degree in computer science and pursue this career.
                <br />
                <br />
                Outside of tech, I'm an introverted and chill person to hang
                with. I enjoy things such as art, photography, and animation,
                with hobbies involving playing games, drawing, reading manga,
                and watching anime, shows or movies.
              </p>
            </article>
          </div>
        </section>
      </MainWrapper>
      <Footer />
    </>
  );
}