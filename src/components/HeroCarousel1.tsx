"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CircularRating } from "./CircularRating";

interface Movie {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  year: number;
  genre: string[];
  description: string;
  director: string;
  cast: string[];
}

const heroMovies: Movie[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    rating: 87,
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
    rating: 93,
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
    rating: 95,
    year: 2023,
    genre: ["Animation", "Action", "Adventure"],
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People.",
    director: "Joaquim Dos Santos",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"],
  },
];

export function HeroCarousel1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  return (
    <div
      className="relative min-h-[100dvh] w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {heroMovies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={movie.backdrop}
            alt={movie.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:from-black/80 md:via-black/40 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-2">
                  <span className="text-purple-400 text-sm sm:text-base font-medium bg-purple-400/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    Featured
                  </span>
                  <span className="text-gray-300 text-sm sm:text-base">
                    {currentMovie.year} • {currentMovie.director}
                  </span>
                </div>

                <h1 className="heading-cinematic text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
                  {currentMovie.title}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
                    <CircularRating rating={currentMovie.rating} size="lg" />
                    <div className="text-center sm:text-left">
                      <p className="text-purple-300 text-xs sm:text-sm font-medium">
                        IMDB
                      </p>
                      <p className="text-gray-400 text-xs">
                        Based on critic reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
                    <CircularRating rating={currentMovie.rating} size="lg" />
                    <div className="text-center sm:text-left">
                      <p className="text-purple-300 text-xs sm:text-sm font-medium">
                        Tomatometer
                      </p>
                      <p className="text-gray-400 text-xs">
                        Based on critic reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-4 lg:px-0">
                {currentMovie.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {currentMovie.genre.map((g) => (
                  <span
                    key={g}
                    className="text-black text-sm sm:text-base font-medium bg-[#FAF1E6] px-3 py-1 rounded-full backdrop-blur-sm"
                  >
                    {g}
                  </span>
                ))}
              </div>

              <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start px-2 sm:px-4 lg:px-0">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-transform duration-300 neon-glow hover:scale-105">
                  Watch Trailer
                </button>
                <button className="border border-white/30 hover:border-white/50 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                  Read Review
                </button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative group">
                <div className="w-60 sm:w-72 md:w-80 h-[400px] sm:h-[460px] md:h-[500px] relative overflow-hidden rounded-xl glass-card">
                  <Image
                    src={currentMovie.poster}
                    alt={currentMovie.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 320px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-1 sm:space-x-2">
          {heroMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-500 w-5 sm:w-6 md:w-8 neon-glow"
                  : "bg-white/30 hover:bg-white/50 w-2 sm:w-2.5 md:w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
