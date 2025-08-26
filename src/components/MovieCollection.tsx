"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
interface Movie {
  id: string;
  title: string;
  poster: string;
  date: string;
}

interface Collection {
  id: string;
  title: string;
  yearRange: string;
  movies: Movie[];
}

// Dummy data
const collections: Collection[] = [
  {
    id: "after",
    title: "After Series",
    yearRange: "2019 - 2023",
    movies: [
      {
        id: "1",
        title: "After (2019)",
        poster:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
        date: "2019",
      },
      {
        id: "2",
        title: "After We Collided (2020)",
        poster:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
        date: "2020",
      },
      {
        id: "3",
        title: "After We Fell (2021)",
        poster:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dU4HfnTEJDf9KvxGS9hgO7BVeju.jpg",
        date: "2021",
      },
      {
        id: "4",
        title: "After Ever Happy (2022)",
        poster:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/moogpu8rNkEjTgFyLXwhPghft5w.jpg",
        date: "2022",
      },
      {
        id: "5",
        title: "After Everything (2023)",
        poster:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg",
        date: "2023",
      },
      {
        id: "6",
        title: "After Everything (2023)",
        poster:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg",
        date: "2023",
      },
    ],
  },
  {
    id: "john-wick",
    title: "John Wick Series ",
    yearRange: "2014 - 2023",
    movies: [
      {
        id: "1",
        title: "John Wick (2014)",
        poster:
          "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
        date: "2014",
      },
      {
        id: "2",
        title: "John Wick: Chapter 2 (2017)",
        poster:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
        date: "2017",
      },
      {
        id: "3",
        title: "John Wick: Chapter 3 – Parabellum (2019)",
        poster:
          "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
        date: "2019",
      },
      {
        id: "4",
        title: "John Wick: Chapter 4 (2023)",
        poster:
          "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        date: "2023",
      },
    ],
  },
  {
    id: "harry-potter",
    title: "Harry Potter Series",
    yearRange: "2001 - 2007",
    movies: [
      {
        id: "1",
        title: "Philosopher's Stone (2001)",
        poster:
          "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        date: "2001",
      },
      {
        id: "2",
        title: "Chamber of Secrets (2002)",
        poster:
          "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
        date: "2002",
      },
      {
        id: "3",
        title: "Prisoner of Azkaban (2004)",
        poster:
          "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
        date: "2004",
      },
      {
        id: "4",
        title: "Goblet of Fire (2005)",
        poster:
          "https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
        date: "2005",
      },
    ],
  },
];

export default function MovieCollection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRow = () => {
    if (currentIndex < collections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevRow = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean[]>([]);
  const [canScrollRight, setCanScrollRight] = useState<boolean[]>([]);

  const updateScrollState = (index: number) => {
    const el = rowRefs.current[index];
    if (!el) return;

    setCanScrollLeft((prev) => {
      const newState = [...prev];
      newState[index] = el.scrollLeft > 0;
      return newState;
    });

    setCanScrollRight((prev) => {
      const newState = [...prev];
      newState[index] = el.scrollLeft + el.clientWidth < el.scrollWidth;
      return newState;
    });
  };

  useEffect(() => {
    // Initialize scroll state
    rowRefs.current.forEach((el, idx) => {
      if (!el) return;
      setCanScrollLeft((prev) => [...prev, el.scrollLeft > 0]);
      setCanScrollRight((prev) => [
        ...prev,
        el.scrollLeft + el.clientWidth < el.scrollWidth,
      ]);
    });
  }, []);

  const scrollRow = (index: number, direction: "left" | "right") => {
    const el = rowRefs.current[index];
    if (!el) return;

    const scrollAmount =
      direction === "left" ? -el.clientWidth / 2 : el.clientWidth / 2;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="pt-8 md:pt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top header with title + arrows */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="heading-cinematic text-2xl md:text-3xl lg:text-4xl text-white ">
            Movie Collections
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevRow}
              disabled={currentIndex === 0}
              className={` w-8 h-8  rounded-full transition bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 ${
                currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              ◀
            </button>
            <button
              onClick={nextRow}
              disabled={currentIndex === collections.length - 1}
              className={`w-8 h-8 rounded-full transition bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 ${
                currentIndex === collections.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }`}
            >
              ▶
            </button>
          </div>
        </div>

        {/* Slider container */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className="min-w-full flex flex-col lg:flex-row gap-6 py-4"
              >
                {/* Info card */}
                <div className="w-full h-60 lg:w-[280px] flex-shrink-0 flex flex-col py-6 glass-card shadow-lg rounded-xl ">
                  <div>
                    <h2 className="text-2xl font-bold text-white text-center mb-2 line-clamp-2">
                      {collection.title}
                    </h2>
                    <p className="text-gray-400 text-center">
                      {collection.yearRange}
                    </p>
                  </div>
                  <button className="mx-auto mt-4 w-fit px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                    View Collection
                  </button>
                  <button className="mx-auto mt-4 w-fit px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                    View All Movie Collection
                  </button>
                </div>

                {/* Posters */}
                <div className="w-full lg:w-3/4 relative">
                  <div
                    ref={(el) => {
                      rowRefs.current[index] = el;
                    }}
                    onScroll={() => updateScrollState(index)}
                    className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                  >
                    {collection.movies.map((movie) => (
                      <motion.div
                        key={movie.id}
                        whileHover={{ scale: 1.08, y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex-shrink-0 w-40 "
                      >
                        <Image
                          src={movie.poster}
                          alt={movie.title}
                          width={200}
                          height={300}
                          className="object-cover w-full h-60 rounded-lg glass-card shadow-lg"
                          title={movie.title}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Left Arrow */}
                  {canScrollLeft[index] && (
                    <button
                      onClick={() => scrollRow(index, "left")}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-10"
                    >
                      ◀
                    </button>
                  )}

                  {/* Right Arrow */}
                  {canScrollRight[index] && (
                    <button
                      onClick={() => scrollRow(index, "right")}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-10"
                    >
                      ▶
                    </button>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
