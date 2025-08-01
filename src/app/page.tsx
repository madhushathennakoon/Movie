import { HeroCarousel } from "@/components/HeroCarousel";
import { HeroCarousel1 } from "@/components/HeroCarousel1";
import HeroMobile from "@/components/HeroMobile";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <div className="min-h-screen ">
        <HeroCarousel />
        <HeroCarousel1 />
      </div>
      {/* <div className="block md:hidden">
        <HeroMobile />
      </div> */}
    </main>
  );
};

export default HomePage;
