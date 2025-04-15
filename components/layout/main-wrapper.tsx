"use client";

import React from "react";

interface MainWrapperProps {
  children?: React.ReactNode;
}

export default function MainWrapper({ children }: MainWrapperProps) {
  return (
    <main className="mt-[9rem] mb-[10rem] flex flex-col items-center justify-center gap-64 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
      {children}
    </main>
  );
}
