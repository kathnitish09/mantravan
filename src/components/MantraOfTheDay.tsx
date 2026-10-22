"use client";

import React from "react";
import Link from "next/link";
import { getMantraOfTheDay } from "../data/content";
import { Play, Flame } from "lucide-react";

export default function MantraOfTheDay() {
  const mantra = getMantraOfTheDay();

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Organic Forest Clearing Container */}
      <div className="relative rounded-3xl border border-[#E0B84B]/30 bg-gradient-to-b from-[#03170F]/90 via-[#062016]/90 to-[#020B07]/95 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Warm Diya Light Vignette */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-radial-gradient from-[#E6A72D]/15 via-transparent to-transparent pointer-events-none blur-3xl" />

        {/* Diya Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#03170F] border border-[#E0B84B]/30 text-[#E0B84B] text-xs font-serif tracking-widest uppercase mb-6 shadow-diya">
          <Flame className="w-3.5 h-3.5 text-[#E6A72D] animate-flicker" />
          <span>Mantra of the Day</span>
        </div>

        {/* Large Devanagari Sacred Seed */}
        <div className="my-4">
          <h3 className="text-5xl sm:text-7xl md:text-8xl font-devanagari text-[#FDF8EC] drop-shadow-md py-2 tracking-wide font-normal">
            {mantra.hindiTitle.replace(/॥/g, "").trim()}
          </h3>
          <p className="text-xs sm:text-sm font-serif text-[#E0B84B] tracking-[0.25em] uppercase mt-1 font-semibold">
            {mantra.title}
          </p>
        </div>

        {/* Meditative Breathing Invocations */}
        <div className="max-w-md mx-auto my-6 space-y-1 text-[#F0E1BC] font-serif text-base sm:text-lg italic leading-relaxed">
          <p>“Take a moment.</p>
          <p>Breathe slowly.</p>
          <p>Chant with devotion.”</p>
        </div>

        {mantra.dailyQuote && (
          <p className="text-xs sm:text-sm text-[#F0E1BC]/75 font-serif max-w-lg mx-auto mb-8 leading-relaxed">
            {mantra.dailyQuote}
          </p>
        )}

        {/* Begin Jaap Action */}
        <div className="flex justify-center">
          <Link
            href={`/${mantra.slug}?mode=jaap`}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#99741b] via-[#C99A24] to-[#E0B84B] text-[#03170F] font-serif font-bold text-sm tracking-widest uppercase shadow-diya-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Begin Jaap</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
