"use client";

import { useState, useRef } from "react";
import TVCard from "./TVCard";

interface TrendingTVShows {
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
const trendingTVShows: TrendingTVShows[] = [
  {
    id: "1",
    title: "Wednesday",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/36xXlhEpQqVVPuiZhfoQuaY4OlA.jpg",
    rating: 84,
    year: "Nov 23, 2022",
    genre: ["Sci-Fi", "Fantasy", "Mystery", "Comedy"],
    description:
      "Smart, sarcastic and a little dead inside, Wednesday Addams investigates twisted mysteries while making new friends — and foes — at Nevermore Academy",
    trending: "up",
    rank: 1,
  },
  {
    id: "2",
    title: "Peacemaker",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yb4F1Oocq8GfQt6iIuAgYEBokhG.jpg",
    rating: 82,
    year: "Jan 13, 2022",
    genre: ["Action", "Drama"],
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
    trending: "up",
    rank: 2,
  },
  {
    id: "3",
    title: "Breaking Bad",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    rating: 89,
    year: "Jan 20, 2008",
    genre: ["Action", "Adventure", "Comedy"],
    description:
      "A Chinese-American woman gets swept up in an insane adventure, where she alone can save existence.",
    trending: "new",
    rank: 3,
  },
  {
    id: "4",
    title: "Supernaturalr",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg",
    rating: 83,
    year: "Sap 13, 2005",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "Jake Sully lives with his newfound family formed on the planet of Pandora.",
    trending: "down",
    rank: 4,
  },
  {
    id: "5",
    title: "Alien: Earth",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yueXS3q8BtoWekcHOATFHicLl3e.jpg",
    rating: 78,
    year: "Aug 12, 2025",
    genre: ["Action", "Adventure", "Drama"],
    description:
      "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation.",
    trending: "up",
    rank: 5,
  },
  {
    id: "6",
    title: "The Summer I Turned Pretty",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xBIz53wYWsKfFpN0TaizVAjKJ0z.jpg",
    rating: 82,
    year: "Jun 16, 2022",
    genre: ["Comedy", "Horror", "Thriller"],
    description:
      "A young couple travels to a remote island to eat at an exclusive restaurant.",
    trending: "new",
    rank: 6,
  },
  {
    id: "7",
    title: "The Rookie",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bL1mwXDnH5fCxqc4S2n40hoVyoe.jpg",
    rating: 85,
    year: "Oct 16, 2018",
    genre: ["Action", "Adventure", "Comedy"],
    description:
      "A Chinese-American woman gets swept up in an insane adventure, where she alone can save existence.",
    trending: "new",
    rank: 3,
  },
  {
    id: "8",
    title: "In the Mud",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9JWQYB7FkGtg47wFO7GOrUDgYrx.jpg",
    rating: 80,
    year: "Aug 14, 2025",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "Jake Sully lives with his newfound family formed on the planet of Pandora.",
    trending: "down",
    rank: 4,
  },
  {
    id: "9",
    title: "Prison Break",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5E1BhkCgjLBlqx557Z5yzcN0i88.jpg",
    rating: 81,
    year: "Aug 29, 2005",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "Jake Sully lives with his newfound family formed on the planet of Pandora.",
    trending: "down",
    rank: 4,
  },
];

export function TrendingSliderTVShows() {
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
    <section className="pt-8 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <div>
            <h2 className="heading-cinematic text-2xl md:text-3xl lg:text-4xl text-white mb-2">
              Trending TV Shows
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
            {trendingTVShows.map((movie, index) => (
              <div key={movie.id} className="relative flex-shrink-0">
                <TVCard
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
