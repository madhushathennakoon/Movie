"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CircularRating1 } from "./CircularRating1";
import { CircularRating2 } from "./CircularRating2";

interface Movie {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rateTomato: number;
  rateIMDB: number;
  year: number;
  genre: string[];
  description: string;
  director: string;
  cast: string[];
}

// Sample hero movies data
const heroMovies: Movie[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    rateTomato: 47,
    rateIMDB: 8.7,
    year: 2024,
    genre: ["Sci-Fi", "Adventure", "Drama"],
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  },
  {
    id: "2",
    title: "Oppenheimer",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    rateTomato: 53,
    rateIMDB: 7.7,
    year: 2023,
    genre: ["Biography", "Drama", "History"],
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr."],
  },
  {
    id: "3",
    title: "Spider-Man: Across the Spider-Verse",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
    rateTomato: 85,
    rateIMDB: 5.7,
    year: 2023,
    genre: ["Animation", "Action", "Adventure"],
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People.",
    director: "Joaquim Dos Santos",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"],
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroMovies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentMovie = heroMovies[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroMovies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + heroMovies.length) % heroMovies.length
    );
  };

  return (
    <div
      className="relative min-h-[640px] h-screen w-full overflow-hidden sm:min-h-[700px] md:min-h-[750px] "
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images */}
      {heroMovies.map((movie, index) => (
        <div
          key={movie.id}
          className={`
            absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? "opacity-100" : "opacity-0"} 
          `}
        >
          <Image
            src={movie.backdrop}
            alt={movie.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />

          {/* Enhanced gradient overlays for mobile readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:from-black/80 md:via-black/40 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content - Mobile Optimized */}
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="space-y-3 md:space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <span className="text-purple-400 text-base font-medium  bg-purple-400/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    Featured
                  </span>
                  <span className="text-gray-300 text-base ">
                    {currentMovie.year} • {currentMovie.director}
                  </span>
                </div>

                <h1 className="heading-cinematic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
                  {currentMovie.title}
                </h1>

                <div className="w-full max-w-screen-lg mx-auto  ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center lg:justify-items-start">
                    {/* Component 1 */}
                    <div className="flex flex-col lg:flex-row items-center gap-2 text-center lg:text-left">
                      <CircularRating1
                        rating={currentMovie.rateIMDB}
                        size="lg"
                      />
                      <div>
                        <p className="text-purple-300 text-base font-bold">
                          IMDB
                        </p>
                        <p className="text-gray-400 text-xs">
                          Based on critic reviews
                        </p>
                      </div>
                    </div>

                    {/* Component 2 */}
                    <div
                      className="flex flex-col lg:flex-row items-center gap-2 text-center lg:text-left 
                /* Add a specific class for targeting */
                custom-hide-on-small-devices"
                    >
                      <CircularRating2
                        rating={currentMovie.rateTomato}
                        size="lg"
                      />
                      <div>
                        <p className="text-purple-300 text-base font-bold">
                          Tomatometer
                        </p>
                        <p className="text-gray-400 text-xs">
                          Based on critic reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 lg:px-0 ">
                {currentMovie.description}
              </p>

              <div className="space-y-3 ">
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {currentMovie.genre.map((g) => (
                    <span
                      key={g}
                      className="text-black text-base font-medium  bg-[#FAF1E6] px-3 py-1 rounded-full backdrop-blur-sm "
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div className="  flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 md:gap-4 px-4 sm:px-6 lg:px-0 w-full max-w-7xl mx-auto ">
                <button className=" w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 lg:px-8 py-3 rounded-lg font-medium transition-all duration-300 neon-glow hover:scale-105 text-sm sm:text-base md:text-lg">
                  Watch Trailer
                </button>
                <button className="w-full md:w-auto border border-white/30 hover:border-white/50 text-white px-5 lg:px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base md:text-lg">
                  Read Review
                </button>
              </div>
            </div>

            {/* Movie Poster - Hidden on mobile, visible on large screens */}
            <div className="hidden lg:flex justify-center">
              <div className="relative group">
                <div className="w-80 h-[480px] relative overflow-hidden rounded-xl glass-card">
                  <Image
                    src={currentMovie.poster}
                    alt={currentMovie.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="320px"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center neon-glow animate-bounce">
                  <span className="text-white text-2xl">🎬</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls - Mobile Optimized */}
      <div className=" absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 ">
        <div className="flex space-x-2">
          {heroMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                h-2 md:h-3 rounded-full transition-all duration-300 touch-manipulation
                ${
                  index === currentIndex
                    ? "bg-purple-500 w-6 md:w-8 neon-glow"
                    : "bg-white/30 hover:bg-white/50 w-2 md:w-3"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Arrow Controls - Enhanced for mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 touch-manipulation"
      >
        <span className="text-lg md:text-xl">←</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 touch-manipulation"
      >
        <span className="text-lg md:text-xl">→</span>
      </button>
    </div>
  );
}
