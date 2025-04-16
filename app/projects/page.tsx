"use client";

import MainWrapper from "@/components/layout/main-wrapper";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AppointmentSystem from "@/public/images/appointment_system.png";
import AniQuinch from "@/public/images/aniquinch_ecommerce.png";
import BankingSystem from "@/public/images/banking_system.png";
import HueFitMobile from "@/public/images/huefit_mobile.png";
import HueFitWeb from "@/public/images/huefit_web.png";
import PeerToPeerDeliverySystem from "@/public/images/peer_to_peer_delivery_system.png";
import ProjectCard from "@/components/ui/project-card";

function Projects() {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <div
          className={`grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2 xl:grid-cols-3`}
        >
          <ProjectCard
            thumbnail={HueFitWeb}
            title="HueFit Web"
            description="A Web-based Inventory and Ordering Management System plus Business Website of HueFit built using Next.js."
            longDescription="HueFit is a men's outfit recommendation and shopping platform. Its web-based system serves as both the official business website and a comprehensive inventory and order management platform for HueFit's vendors."
            technologies={[
              "Next.js",
              "Supabase",
              "Prisma",
              "TailwindCSS",
              "NextAuth",
              "Formik",
              "SWR",
              "Shadcn",
              "Vercel",
            ]}
            githubLink="https://github.com/Quinchy/Hue-Fit"
            websiteLink="https://hue-fit-web.vercel.app/"
          />
          <ProjectCard
            thumbnail={HueFitMobile}
            title="HueFit Mobile"
            description="A Men's Apparel E-commerce Mobile Application with Virtual Fitting built using React Native Expo."
            longDescription="HueFit is a men's outfit recommendation and shopping platform. It's mobile-based platform is an E-commerce App used by customers to find, buy, generate, and virtual fit men's clothing products"
            technologies={["React Native Expo", "NativeBase", "Formik"]}
            githubLink="https://github.com/Quinchy/Hue-Fit"
          />
          <ProjectCard
            thumbnail={PeerToPeerDeliverySystem}
            title="PasaBuy"
            description="A Mobile Community Delivery App built using Android Studio."
            longDescription={`PasaBuy is an Android mobile app inspired by the Filipino concept of "PasaBuy." It's a community-driven delivery platform that connects users with individuals—often from abroad or different areas—who can help purchase and bring specific products home.`}
            technologies={["Android Studio", "Java", "Firebase"]}
            githubLink="https://github.com/Quinchy/Pasabuy"
          />
          <ProjectCard
            thumbnail={AppointmentSystem}
            title="Dental Appointment System"
            description="A Web-based Appointment System built using Laravel."
            longDescription="Donna Mae Jorge-Hollman Dental Clinic is web-based appointment scheduling for a local dental clinic. Patients are able to select appointment schedules that are created by the assistant doctor."
            technologies={[
              "Laravel",
              "PHP",
              "Breeze",
              "Socialite",
              "MySQL",
              "Heroku",
            ]}
            githubLink="https://github.com/Quinchy/Donna-Mae-Jorge-Hollman-Dental-Clinic-Scheduling-System"
          />
          <ProjectCard
            thumbnail={BankingSystem}
            title="OnlyFunds"
            description="A Mock-up Desktop Banking System App built using C# Windows Form."
            longDescription="OnlyFunds is a mock-up desktop banking system built using C# Windows Form. This project was made in my second year college in subject - Object Oriented Programming."
            technologies={["C#", "Windows Form", "MySQL"]}
            githubLink="https://github.com/Quinchy/BankingSystem"
          />
          <ProjectCard
            thumbnail={AniQuinch}
            title="AniQuinch"
            description="A Mock-up E-commerce Website made only using HTML, CSS, and JavaScript."
            longDescription="AniQuinch is an anime merchandise store simulating how an e-commerce look only using HTML, CSS, and JavaScript. This project was made in my first year college in subject - Computer Fundamental."
            technologies={["HTML", "CSS", "JavaScript"]}
            githubLink="https://github.com/QuinchX/AniQuinch"
            websiteLink="https://quinchx.github.io/AniQuinch/"
          />
        </div>
      </MainWrapper>
      <Footer />
    </>
  );
}

export default Projects;
