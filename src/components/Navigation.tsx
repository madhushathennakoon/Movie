"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Reviews", href: "/reviews" },
  { name: "Trending", href: "/trending" },
  { name: "Discover", href: "/discover" },
];

const authItems = [
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/signup" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10   bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:from-black/80 md:via-black/40 md:to-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center neon-glow group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm md:text-lg">
                  R
                </span>
              </div>
            </div>
            <span className="heading-cinematic text-lg md:text-xl text-white group-hover:text-purple-300 transition-colors duration-300">
              ReelGlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8  ">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    pathname === item.href
                      ? "text-purple-300 bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <span className="flex items-center space-x-2">
                  <span>{item.name}</span>
                </span>

                {/* Active indicator */}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 neon-glow" />
                )}
              </Link>
            ))}
          </div>

          {/* Search Bar - Hidden on small screens */}
          <div className="hidden xl:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                className="
                  w-56 px-4 py-2 rounded-lg
                  bg-white/10 backdrop-blur-sm
                  border border-white/20
                  text-white placeholder-gray-400
                  focus:outline-none focus:border-purple-400 focus:bg-white/15
                  transition-all duration-300
                "
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <span className="text-gray-400"></span>
              </div>
            </div>
          </div>

          {/* Auth Links - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {authItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    item.name === "Sign Up"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 neon-glow"
                      : "text-gray-300 hover:text-white border border-white/20 hover:border-white/40 hover:bg-white/5"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center text-white touch-manipulation"
            aria-label="Toggle menu"
          >
            <div
              className="w-5 h-0.5 bg-white transition-all duration-300 absolute"
              style={{
                transform: isMenuOpen ? "rotate(45deg)" : "translateY(-4px)",
              }}
            />
            <div
              className="w-5 h-0.5 bg-white transition-all duration-300 absolute"
              style={{
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <div
              className="w-5 h-0.5 bg-white transition-all duration-300 absolute"
              style={{
                transform: isMenuOpen ? "rotate(-45deg)" : "translateY(4px)",
              }}
            />
          </button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <>
            <div
              className="mobile-menu-overlay md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="md:hidden mobile-glass-card border-t border-cyan-200/30 py-4 absolute top-full left-0 right-0 max-h-[calc(100vh-56px)] overflow-y-auto z-50 neon-glow-intense">
              <div className="px-4 space-y-4">
                {/* Search bar with matching theme */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search movies..."
                    className="
              w-full px-4 py-3 rounded-lg
              bg-black/20 backdrop-blur-md
              border border-cyan-200/40
              text-white placeholder-cyan-100
              focus:outline-none focus:border-cyan-300 focus:bg-black/30
              transition-all duration-300
              shadow-lg shadow-blue-500/20
            "
                  />
                </div>

                {/* Navigation items */}
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
              block px-4 py-3 rounded-lg text-base font-medium 
              transition-all duration-300 touch-manipulation
              ${
                pathname === item.href
                  ? "text-white bg-black/30 border border-cyan-200/30 shadow-inner shadow-cyan-400/20"
                  : "text-cyan-100 hover:text-white hover:bg-black/25 hover:border hover:border-cyan-200/20"
              }
            `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center space-x-3">
                      <span>{item.name}</span>
                    </span>
                  </Link>
                ))}

                {/* Mobile auth links with enhanced glass effect */}
                <div className="pt-4 border-t border-white/20 space-y-3">
                  {authItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium text-center transition-all duration-300 touch-manipulation ${
                        item.name === "Sign Up"
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white neon-glow hover:from-purple-700 hover:to-blue-700 "
                          : "text-gray-300 border border-white/25 hover:border-white/40 hover:bg-white/10"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
