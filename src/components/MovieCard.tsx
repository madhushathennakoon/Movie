import React from "react";
import Image from "next/image";
import { CircularRating1 } from "./CircularRating1";

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  year: string;
  genre: string[];
  description?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const MovieCard = ({
  id,
  title,
  poster,
  rating,
  year,
  genre,
  description,
  size = "md",
  onClick,
}: MovieCardProps) => {
  return (
    <div className="cursor-pointer">
      <div className="max-w-40">
        <div
          className="relative h-60 rounded-lg overflow-hidden group glass-card "
          title={title}
        >
          <a href="#">
            <Image
              className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105"
              src={poster}
              alt={title}
              width={160}
              height={240}
            />
          </a>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg transition-opacity duration-300 group-hover:opacity-80" />
        </div>

        {/* CircularRating1 floating half outside the card */}
        <div className="relative">
          <div className="absolute -top-5 left-3 z-10">
            <CircularRating1
              rating={rating}
              size="sm"
              className="bg-black/20 backdrop-blur-sm rounded-full p-1"
            />
          </div>
        </div>
      </div>

      <div className="max-w-40 p-3 mb-8 mt-6 group">
        <a href="#">
          <h3
            title={title}
            className="mb-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 line-clamp-2"
          >
            {title}
          </h3>
        </a>
        <span className="font-normal text-gray-700 dark:text-gray-400 text-xs">
          {year}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
