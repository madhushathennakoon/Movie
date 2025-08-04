"use client";

import { useEffect, useState } from "react";

interface CircularRatingProps {
  rating: number; // 0-100
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

export function CircularRating2({
  rating,
  size = "md",
  animated = true,
  className = "",
}: CircularRatingProps) {
  const [displayRating, setDisplayRating] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Size configurations
  const sizeConfig = {
    sm: {
      container: "w-12 h-12",
      text: "text-xs",
      strokeWidth: 3,
      fontSize: "10px",
    },
    md: {
      container: "w-16 h-16",
      text: "text-sm",
      strokeWidth: 4,
      fontSize: "12px",
    },
    lg: {
      container: "w-24 h-24",
      text: "text-lg",
      strokeWidth: 5,
      fontSize: "25px",
    },
  };

  const config = sizeConfig[size];
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (displayRating / 100) * circumference;

  // Get color based on rating
  const getColor = (score: number) => {
    if (score >= 80)
      return { main: "#10B981", glow: "rgba(16, 185, 129, 0.5)" }; // Green
    if (score >= 60)
      return { main: "#F59E0B", glow: "rgba(245, 158, 11, 0.5)" }; // Yellow
    if (score >= 40) return { main: "#EF4444", glow: "rgba(239, 68, 68, 0.5)" }; // Red
    return { main: "#6B7280", glow: "rgba(107, 114, 128, 0.5)" }; // Gray
  };

  const colors = getColor(rating);

  useEffect(() => {
    setIsVisible(true);
    if (animated) {
      const timer = setTimeout(() => {
        let current = 0;
        const increment = rating / 30; // Animation duration
        const animateRating = () => {
          current += increment;
          if (current >= rating) {
            setDisplayRating(rating);
          } else {
            setDisplayRating(Math.floor(current));
            requestAnimationFrame(animateRating);
          }
        };
        animateRating();
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayRating(rating);
    }
  }, [rating, animated]);

  return (
    <div className={`relative ${config.container} ${className}`}>
      {/* Background circle */}
      <svg
        className="absolute inset-0 transform -rotate-90"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
      >
        {/* Background track */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={config.strokeWidth}
          fill="transparent"
        />

        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={colors.main}
          strokeWidth={config.strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
          style={{
            filter: `drop-shadow(0 0 6px ${colors.glow})`,
          }}
        />
      </svg>

      {/* Rating text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-bold text-white ${config.text} heading-modern`}
          style={{
            textShadow: `0 0 10px ${colors.glow}`,
            fontSize: config.fontSize,
          }}
        >
          {displayRating}
        </span>
      </div>

      {/* Glow effect */}
      {isVisible && (
        <div
          className="absolute inset-0 rounded-full opacity-75 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      )}
    </div>
  );
}
