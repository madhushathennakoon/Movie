import { HeroCarousel } from "@/components/HeroCarousel";
import MovieCollection from "@/components/MovieCollection";
import Reviews from "@/components/Reviews";
import { TrendingSliderMovies } from "@/components/TrendingSliderMovies";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <div className="min-h-screen ">
        <HeroCarousel />
        <TrendingSliderMovies />
        <Reviews />
        <MovieCollection />
      </div>
    </main>
  );
};

export default HomePage;
