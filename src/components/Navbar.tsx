"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";
import AmbientSoundToggle from "./AmbientSoundToggle";
import {
  Search,
  Menu,
  X,
  Compass,
  Sparkles,
  BookOpen,
  Waves,
  Flame,
  Music,
  Mountain,
  Home,
  Video,
} from "lucide-react";

const NAV_ITEMS = [
  { name: "HOME", href: "/" },
  { name: "MANTRAS", href: "/category/mantra" },
  { name: "JAAPS", href: "/category/jaap" },
  { name: "CHALISAS", href: "/category/chalisa" },
  { name: "AARTIS", href: "/category/aarti" },
  { name: "BHAJANS", href: "/category/bhajan" },
  { name: "MEDITATION", href: "/category/meditation" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#E0B84B]/20 bg-[#020B07]/90 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#E0B84B]/40 bg-[#03170F] flex items-center justify-center shadow-diya group-hover:border-[#E0B84B] transition-colors">
              <span className="text-xl font-devanagari text-[#E0B84B] select-none">
                ॐ
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold tracking-[0.18em] text-lg sm:text-xl text-white group-hover:text-[#E0B84B] transition-colors">
                MANTRA VAN
              </span>
              <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-[#E0B84B]/80 -mt-1 hidden sm:block">
                The Sacred Forest
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-serif font-semibold tracking-wider transition-colors ${
                    isActive
                      ? "bg-van-gold-500/15 text-van-gold-300 border border-van-gold-500/30"
                      : "text-van-parchment-200/80 hover:text-van-gold-300 hover:bg-van-green-900/30"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Ambient Sound & Search Button */}
          <div className="flex items-center gap-3">
            <AmbientSoundToggle />

            {/* Official YouTube Channel Link */}
            <a
              href="https://www.youtube.com/@MANTRAVAN-09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-red-500/30 bg-red-950/40 hover:bg-red-900/60 text-red-400 hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
              title="Official YouTube Channel (@MANTRAVAN-09)"
            >
              <Video className="w-4 h-4 text-red-500" />
              <span className="hidden xl:inline text-xs font-serif text-red-200">YouTube</span>
            </a>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full border border-van-gold-500/20 bg-van-charcoal-900/70 hover:border-van-gold-500/40 text-van-parchment-200 hover:text-van-gold-300 transition-colors cursor-pointer flex items-center gap-2"
              title="Search sacred texts"
            >
              <Search className="w-4 h-4 text-van-gold-400" />
              <span className="hidden xl:inline text-xs font-serif text-van-parchment-300/70">
                Search...
              </span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg lg:hidden text-van-parchment-200 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-van-gold-500/15 bg-van-charcoal-950/95 backdrop-blur-2xl px-6 py-6 space-y-3 animate-fadeIn">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-serif font-semibold tracking-wider text-van-parchment-200 hover:text-van-gold-300 py-2 border-b border-van-gold-500/10"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://www.youtube.com/@MANTRAVAN-09"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-serif font-semibold text-red-400 hover:text-white py-2 border-b border-van-gold-500/10"
            >
              <Video className="w-4 h-4 text-red-500" />
              <span>YouTube Channel (@MANTRAVAN-09)</span>
            </a>
            <div className="pt-2 text-xs font-serif text-van-parchment-300/60 italic">
              “Where Every Mantra Becomes a Journey Within.”
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation Bar for intuitive smartphone thumb reach */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-van-gold-500/20 bg-van-charcoal-950/90 backdrop-blur-xl px-4 py-2 flex items-center justify-around shadow-2xl">
        <Link
          href="/"
          className={`flex flex-col items-center gap-1 py-1 text-[10px] font-serif ${
            pathname === "/" ? "text-van-gold-400 font-bold" : "text-van-parchment-300/70"
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <Link
          href="/hanuman-chalisa"
          className={`flex flex-col items-center gap-1 py-1 text-[10px] font-serif ${
            pathname === "/hanuman-chalisa" ? "text-van-gold-400 font-bold" : "text-van-parchment-300/70"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Chalisa</span>
        </Link>
        <Link
          href="/sita-ram-jaap?mode=jaap"
          className={`flex flex-col items-center gap-1 py-1 text-[10px] font-serif ${
            pathname.includes("jaap") ? "text-van-gold-400 font-bold" : "text-van-parchment-300/70"
          }`}
        >
          <Waves className="w-4 h-4" />
          <span>108 Jaap</span>
        </Link>
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center gap-1 py-1 text-[10px] font-serif text-van-parchment-300/70"
        >
          <Search className="w-4 h-4 text-van-gold-400" />
          <span>Search</span>
        </button>
      </nav>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
