"use client";

import { useState, useRef } from "react";
import MovieCard from "./MovieCard";

interface TrendingMovie {
  id: string;
  title: string;
  poster: string;
  rating: number;
  year: string;
  genre: string[];
  description: string;
  trending: "up" | "down" | "new";
  rank: number;
}

// Sample trending movies data
const trendingMovies: TrendingMovie[] = [
  {
    id: "1",
    title: "The Batman",
    poster: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    rating: 8.5,
    year: "Jul 01, 2022",
    genre: ["Action", "Crime", "Drama"],
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    trending: "up",
    rank: 1,
  },
  {
    id: "2",
    title: "Top Gun: Maverick",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    rating: 4.2,
    year: "Nov 23, 2022",
    genre: ["Action", "Drama"],
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
    trending: "up",
    rank: 2,
  },
  {
    id: "3",
    title: "Everything Everywhere All at Once",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    rating: 9.1,
    year: "Jul 01, 2022",
    genre: ["Action", "Adventure", "Comedy"],
    description:
      "A Chinese-American woman gets swept up in an insane adventure, where she alone can save existence.",
    trending: "new",
    rank: 3,
  },
  {
    id: "4",
    title: "Avatar: The Way of Water",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    rating: 8.9,
    year: "Nov 23, 2022",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "Jake Sully lives with his newfound family formed on the planet of Pandora.",
    trending: "down",
    rank: 4,
  },
  {
    id: "5",
    title: "Black Panther: Wakanda Forever",
    poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    rating: 6.1,
    year: "Nov 23, 2022",
    genre: ["Action", "Adventure", "Drama"],
    description:
      "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation.",
    trending: "up",
    rank: 5,
  },
  {
    id: "6",
    title: "The Menu",
    poster: "https://image.tmdb.org/t/p/w500/v31MsWhF9WFh7Qooq6xSBbmJxoG.jpg",
    rating: 7.9,
    year: "Nov 23, 2022",
    genre: ["Comedy", "Horror", "Thriller"],
    description:
      "A young couple travels to a remote island to eat at an exclusive restaurant.",
    trending: "new",
    rank: 6,
  },
  {
    id: "7",
    title: "Everything Everywhere All at Once",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    rating: 5.6,
    year: "Nov 23, 2022",
    genre: ["Action", "Adventure", "Comedy"],
    description:
      "A Chinese-American woman gets swept up in an insane adventure, where she alone can save existence.",
    trending: "new",
    rank: 3,
  },
  {
    id: "8",
    title: "Avatar: The Way of Water",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    rating: 8.9,
    year: "Jul 01, 2022",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "Jake Sully lives with his newfound family formed on the planet of Pandora.",
    trending: "down",
    rank: 4,
  },
];

export function TrendingSliderMovies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 320; // Width of card + gap
    const newScrollLeft =
      scrollRef.current.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    // Update button states
    setTimeout(() => {
      if (scrollRef.current) {
        setCanScrollLeft(scrollRef.current.scrollLeft > 0);
        setCanScrollRight(
          scrollRef.current.scrollLeft <
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        );
      }
    }, 100);
  };

  return (
    <section className="pt-10 -mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <div>
            <h2 className="heading-cinematic text-2xl md:text-3xl lg:text-4xl text-white mb-2">
              Trending Now
            </h2>
          </div>

          {/* Navigation Controls - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`
                w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                ${
                  canScrollLeft
                    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
                    : "bg-white/5 text-gray-600 border border-white/10 cursor-not-allowed"
                }
              `}
            >
              ◀
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`
                w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                ${
                  canScrollRight
                    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
                    : "bg-white/5 text-gray-600 border border-white/10 cursor-not-allowed"
                }
              `}
            >
              ▶
            </button>
          </div>
        </div>

        {/* Movies Slider */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {trendingMovies.map((movie, index) => (
              <div key={movie.id} className="relative flex-shrink-0">
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  poster={movie.poster}
                  rating={movie.rating}
                  year={movie.year}
                  genre={movie.genre}
                  description={movie.description}
                  size="sm"
                  onClick={() => {
                    // Handle movie click - would navigate to movie detail page
                    console.log("Navigate to movie:", movie.id);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
