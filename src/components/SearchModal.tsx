"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { getAllContent } from "../data/content";
import { ContentItem } from "../types/content";
import {
  Search,
  X,
  BookOpen,
  Headphones,
  Video,
  Sparkles,
  ArrowRight,
  Filter,
} from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const allContent = useMemo(() => getAllContent(), []);

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Multilingual & transliteration search matching
  const filteredResults = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    return allContent.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }

      if (!cleanQuery) return true;

      const titleMatch = item.title.toLowerCase().includes(cleanQuery);
      const hindiTitleMatch = item.hindiTitle.toLowerCase().includes(cleanQuery);
      const shortDescMatch = item.shortDescription.toLowerCase().includes(cleanQuery);
      const deityMatch = item.deity.toLowerCase().includes(cleanQuery) || item.deityLabel.toLowerCase().includes(cleanQuery);
      const keywordMatch = item.keywords.some((k) => k.toLowerCase().includes(cleanQuery));
      const verseMatch = item.verses.some((v) =>
        v.devanagari.some((line) => line.includes(cleanQuery)) ||
        v.transliteration?.some((line) => line.toLowerCase().includes(cleanQuery))
      );

      return titleMatch || hindiTitleMatch || shortDescMatch || deityMatch || keywordMatch || verseMatch;
    });
  }, [allContent, query, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl border border-van-gold-500/30 bg-van-charcoal-900/95 shadow-2xl p-6 sm:p-8 flex flex-col max-h-[85vh] overflow-hidden">
        {/* Top Header & Close */}
        <div className="flex items-center justify-between pb-4 border-b border-van-gold-500/20">
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-van-gold-400">
            <Sparkles className="w-4 h-4 text-van-gold-400" />
            <span>Search Sacred Archives</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-van-charcoal-800 text-van-parchment-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative my-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-van-gold-400/80" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a mantra, jaap, chalisa or aarti…"
            className="w-full bg-van-charcoal-800/90 border border-van-gold-500/30 rounded-2xl py-3.5 pl-12 pr-4 text-base text-white placeholder-van-parchment-300/40 focus:outline-none focus:border-van-gold-400 focus:ring-1 focus:ring-van-gold-400 font-body"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-2">
          {["all", "chalisa", "jaap", "mantra", "aarti", "bhajan", "meditation"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-serif uppercase tracking-wider capitalize whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-van-gold-500 text-van-charcoal-950 font-bold"
                  : "bg-van-charcoal-800/70 border border-van-gold-500/15 text-van-parchment-300/70 hover:text-van-gold-300"
              }`}
            >
              {cat === "all" ? "All Traditions" : cat}
            </button>
          ))}
        </div>

        {/* Suggested Quick Searches */}
        {!query && (
          <div className="flex items-center gap-2 text-[11px] text-van-parchment-300/60 mb-3 flex-wrap font-serif">
            <span>Try searching:</span>
            {["हनुमान चालीसा", "Sita Ram", "Om Namah Shivaya", "Ganesh Aarti"].map((hint) => (
              <button
                key={hint}
                onClick={() => setQuery(hint)}
                className="text-van-gold-400 hover:underline"
              >
                “{hint}”
              </button>
            ))}
          </div>
        )}

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-van-parchment-300/60 font-serif">
              <p>No sacred passages found for &ldquo;{query}&rdquo;.</p>
              <p className="text-xs mt-1">Try searching in English, Devanagari, or transliteration.</p>
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-van-gold-500/15 bg-van-charcoal-800/40 hover:bg-van-green-950/40 hover:border-van-gold-500/35 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-serif uppercase tracking-wider px-2 py-0.5 rounded bg-van-gold-500/15 text-van-gold-300 border border-van-gold-500/20">
                        {item.category}
                      </span>
                      <span className="text-xs text-van-gold-400/80 font-serif">
                        {item.deityLabel}
                      </span>
                    </div>

                    <Link
                      href={`/${item.slug}`}
                      onClick={onClose}
                      className="block font-serif font-bold text-lg text-white group-hover:text-van-gold-300 transition-colors"
                    >
                      {item.title}
                    </Link>

                    <p className="text-xs font-devanagari text-van-gold-400/90 mt-0.5">
                      {item.hindiTitle}
                    </p>

                    <p className="text-xs text-van-parchment-200/70 font-serif line-clamp-2 mt-1.5">
                      {item.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Direct Action Badges */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-van-gold-500/10">
                  <Link
                    href={`/${item.slug}`}
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-van-green-900/60 border border-van-gold-500/20 hover:border-van-gold-500/40 text-xs font-serif text-van-parchment-100 transition-colors"
                  >
                    <BookOpen className="w-3 h-3 text-van-gold-400" />
                    <span>Read</span>
                  </Link>

                  <Link
                    href={`/${item.slug}?mode=audio`}
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-van-green-900/60 border border-van-gold-500/20 hover:border-van-gold-500/40 text-xs font-serif text-van-parchment-100 transition-colors"
                  >
                    <Headphones className="w-3 h-3 text-van-gold-400" />
                    <span>Listen</span>
                  </Link>

                  {item.youtubeId && (
                    <Link
                      href={`/${item.slug}#video`}
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-van-green-900/60 border border-van-gold-500/20 hover:border-van-gold-500/40 text-xs font-serif text-van-parchment-100 transition-colors"
                    >
                      <Video className="w-3 h-3 text-van-gold-400" />
                      <span>Watch</span>
                    </Link>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
