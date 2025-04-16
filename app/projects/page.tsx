"use client";

import MainWrapper from "@/components/layout/main-wrapper";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AppointmentSystem from "@/public/images/appointment_system.png";
import PeerToPeerDeliverySystem from "@/public/images/peer_to_peer_delivery_system.png";
import HueFitMobile from "@/public/images/huefit_mobile.png";
import HueFitWeb from "@/public/images/huefit_web.png";
import ProjectCard from "@/components/ui/project-card";

function Projects() {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <div
          className={`grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2 xl:grid-cols-3`}
        >
          <div>
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
              ]}
              link="https://github.com/Quinchy/Hue-Fit"
            />
          </div>
          <div>
            <ProjectCard
              thumbnail={HueFitMobile}
              title="HueFit Mobile"
              description="A Men's Apparel E-commerce Mobile Application with Virtual Fitting built using React Native Expo."
              longDescription="HueFit is a men's outfit recommendation and shopping platform. It's mobile-based platform is an E-commerce App used by customers to find, buy, generate, and virtual fit men's clothing products"
              technologies={["React Native Expo", "NativeBase", "Formik"]}
              link="https://github.com/Quinchy/Hue-Fit"
            />
          </div>
          <div>
            <ProjectCard
              thumbnail={PeerToPeerDeliverySystem}
              title="PasaBuy"
              description="A Mobile Community Delivery App built using Android Studio."
              longDescription={`PasaBuy is an Android mobile app inspired by the Filipino concept of "PasaBuy." It's a community-driven delivery platform that connects users with individuals—often from abroad or different areas—who can help purchase and bring specific products home.`}
              technologies={["Android Studio", "Java", "Firebase"]}
              link="https://github.com/Quinchy/Pasabuy"
            />
          </div>
          <div>
            <ProjectCard
              thumbnail={AppointmentSystem}
              title="Dental Appointment System"
              description="A Web-based Appointment System built using Laravel."
              longDescription="Donna Mae Jorge-Hollman Dental Clinic is web-based appointment scheduling for a local dental clinic. Patients are able to select appointment schedules that are created by the assistant doctor."
              technologies={["Laravel", "PHP", "MySQL"]}
              link="https://github.com/Quinchy/Donna-Mae-Jorge-Hollman-Dental-Clinic-Scheduling-System"
            />
          </div>
        </div>
      </MainWrapper>
      <Footer />
    </>
  );
}

export default Projects;
