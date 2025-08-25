import Link from "next/link";
import React from "react";

interface ReviewCard {
  id: string;
  title: string;
  poster: string;
  date: string;
}

// Sample review cards data
const reviewCards: ReviewCard[] = [
  {
    id: "1",
    title:
      "Everything Everywhere All at Once Everything Everywhere All at Once Madhusha Sampath Bandara Everything Everywhere All at Once",
    poster:
      "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    date: "Aug 6, 2025",
  },
  {
    id: "2",
    title:
      "Everything Everywhere All at Once Hello World Everything Madhusha All at",
    poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    date: "Aug 6, 2025",
  },
  {
    id: "3",
    title:
      "Everything Everywhere All at Once Hello World Everything Madhusha All at Once Sampath Bandara Bandara Everything Everywhere All at Once",
    poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    date: "Aug 6, 2025",
  },
];

const Reviews = () => {
  return (
    <section className="py-8 md:py-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-start gap-x-4 md:justify-between mb-2 md:mb-4">
          <div>
            <h2 className="heading-cinematic text-2xl md:text-3xl lg:text-4xl text-white mb-1">
              Reviews
            </h2>
          </div>

          {/* Navigation - see more*/}
          <div className="items-center space-x-2">
            <Link href="#">
              <p className="heading-cinematic text-base text-white tracking-wider hover:text-green-300 transition-colors">
                see more →
              </p>
            </Link>
          </div>
        </div>

        {/* Review Cards */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
            {/* First (large) card */}
            <div className="md:col-span-2 ">
              <div className="bg-gray-800 rounded-lg overflow-hidden relative h-48 md:h-90 glass-card">
                <img
                  src={reviewCards[0].poster}
                  alt={reviewCards[0].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with date and title */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-gray-300 text-sm mb-1">
                    {reviewCards[0].date}
                  </p>
                  <h3 className="text-2xl/relaxed font-bold text-white line-clamp-2 tracking-wide ">
                    {reviewCards[0].title}
                  </h3>
                </div>
              </div>
            </div>
            {/* Next two (small) cards */}
            <div className="md:col-span-2 grid grid-cols-2 gap-2">
              {reviewCards.slice(1).map((card) => (
                <div
                  key={card.id}
                  className="bg-gray-800 rounded-lg overflow-hidden glass-card relative h-48 md:h-90"
                >
                  <img
                    src={card.poster}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with date and title */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-gray-300 text-sm mb-1">{card.date}</p>
                    <h3 className="text-base/normal font-bold text-white line-clamp-2 md:line-clamp-3 tracking-wider">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
