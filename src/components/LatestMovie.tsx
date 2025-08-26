import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LatestMovies {
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

//  Sample latest movies data
const latestmovies: LatestMovies[] = [
  {
    id: "1",
    title: "After (2019)",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
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
    title: "John Wick (2014)",
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
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
    title: "After We Collided (2020)",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
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
    title: "John Wick: Chapter 2 (2017)",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
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
    title: "After We Fell (2021)",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dU4HfnTEJDf9KvxGS9hgO7BVeju.jpg",
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
    title: "John Wick: Chapter 3 – Parabellum (2019)",
    poster: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
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
    title: "After Ever Happy (2022)",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/moogpu8rNkEjTgFyLXwhPghft5w.jpg",
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
    title: "John Wick: Chapter 4 (2023)",
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    rating: 8.9,
    year: "Jul 01, 2022",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "Jake Sully lives with his newfound family formed on the planet of Pandora.",
    trending: "down",
    rank: 4,
  },
  {
    id: "9",
    title: "After Everything (2023)",
    poster:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg",
    rating: 8.9,
    year: "Jul 01, 2022",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "Jake Sully lives with his newfound family formed on the planet of Pandora.",
    trending: "down",
    rank: 4,
  },
  {
    id: "10",
    title: "Philosopher's Stone (2001)",
    poster: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    rating: 8.9,
    year: "Jul 01, 2022",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "Jake Sully lives with his newfound family formed on the planet of Pandora.",
    trending: "down",
    rank: 4,
  },
  {
    id: "11",
    title: "Prisoner of Azkaban (2004)",
    poster: "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    rating: 8.9,
    year: "Jul 01, 2022",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "Jake Sully lives with his newfound family formed on the planet of Pandora.",
    trending: "down",
    rank: 4,
  },
  {
    id: "12",
    title: "Chamber of Secrets (2002)",
    poster: "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    rating: 8.9,
    year: "Jul 01, 2022",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description:
      "Jake Sully lives with his newfound family formed on the planet of Pandora.",
    trending: "down",
    rank: 4,
  },
];

const LatestMovie = () => {
  return (
    <section className="pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-start gap-x-4 md:justify-between mb-2 md:mb-4">
          <h2 className="heading-cinematic text-2xl md:text-3xl lg:text-4xl text-white mb-1">
            Latest Movies
          </h2>

          <div className="items-center space-x-2">
            <Link href="#">
              <p className="heading-cinematic text-base text-white tracking-wider hover:text-green-300 transition-colors">
                Browse All →
              </p>
            </Link>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left: Movies (80%) */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {latestmovies.map((movie) => (
                <div key={movie.id} className="overflow-hidden group">
                  {/* Poster + Hover Overlay */}
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden glass-card">
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <Link href="#">
                      <div className="absolute inset-0 bg-black/60  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-3">
                        {/* Rating */}
                        <span className="px-3 py-1 text-2xl mb-2">⭐</span>
                        <span className="bg-white text-black px-3 py-1 text-2xl font-bold rounded-md mb-2">
                          {movie.rating} / 10
                        </span>
                        {/* Genres */}
                        <div className="mb-10 mt-6 flex flex-col gap-1">
                          {movie.genre.slice(0, 2).map((g) => (
                            <span
                              key={g}
                              className="text-3xl font-bold text-white"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                        {/* View Details Button */}
                        <Link
                          href="#"
                          className="px-3 py-1 mt-2 bg-white text-black font-semibold text-base rounded-md hover:bg-gray-200 transition"
                        >
                          View Details
                        </Link>
                      </div>
                    </Link>
                  </div>

                  {/* Title + Year (always visible) */}
                  <div className="p-2">
                    <Link href="#">
                      <h3 className="text-white text-sm font-semibold truncate hover:text-gray-200">
                        {movie.title}
                      </h3>
                      <p className="text-gray-400 text-xs">{movie.year}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Ads (20%) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg h-full flex items-center justify-center">
              {/* Replace this with your Adsterra / Google Ads script or image */}
              <span className="text-gray-400 text-sm">Advertisement Area</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestMovie;
