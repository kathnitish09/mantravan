"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentItem } from "../types/content";
import { sound } from "../lib/sound";
import {
  Play,
  Pause,
  Languages,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ChalisaScrollReaderProps {
  content: ContentItem;
}

export default function ChalisaScrollReader({ content }: ChalisaScrollReaderProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isUnrolling, setIsUnrolling] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 575; // 9m 35s simulated audio length
  const [activeVerseIndex, setActiveVerseIndex] = useState(0);
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [expandedMeanings, setExpandedMeanings] = useState<Record<number, boolean>>({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [audioPlaybackSpeed, setAudioPlaybackSpeed] = useState(1);

  const verseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Synchronized verse calculation
  useEffect(() => {
    const matchedIdx = content.verses.findIndex((v) => {
      const start = v.audioStartTime ?? 0;
      const end = v.audioEndTime ?? start + 14;
      return currentTime >= start && currentTime < end;
    });

    if (matchedIdx !== -1 && matchedIdx !== activeVerseIndex) {
      setActiveVerseIndex(matchedIdx);
      if (isPlaying && verseRefs.current[matchedIdx]) {
        verseRefs.current[matchedIdx]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [currentTime, content.verses, activeVerseIndex, isPlaying]);

  // Audio time ticker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / audioPlaybackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, audioPlaybackSpeed]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const el = scrollContainerRef.current;
      const total = el.scrollHeight - el.clientHeight;
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.round((el.scrollTop / total) * 100)));
      }
    };

    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
    }
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCeremonialUnroll = () => {
    sound.playTempleBell(440);
    setIsUnrolling(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsUnrolling(false);
    }, 1200);
  };

  const togglePlay = () => {
    if (!isPlaying) {
      sound.playTempleBell(528);
    }
    setIsPlaying(!isPlaying);
  };

  const jumpToVerse = (index: number) => {
    setActiveVerseIndex(index);
    const targetVerse = content.verses[index];
    if (targetVerse && targetVerse.audioStartTime !== undefined) {
      setCurrentTime(targetVerse.audioStartTime);
    }
    sound.playTempleBell(580);
    verseRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const toggleMeaningForVerse = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedMeanings((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8">
      {/* 1. Surrounding Ancient Manuscript Chamber Environment */}
      <div className="relative rounded-3xl overflow-hidden border border-[#E0B84B]/30 shadow-2xl p-4 sm:p-10 md:p-12">
        {/* Background photo of ancient stone temple desk with brass diyas, marigolds and incense smoke */}
        <div className="absolute inset-0">
          <Image
            src="/images/manuscript_chamber.jpg"
            alt="Ancient stone temple manuscript sanctum with brass diya and marigold offerings"
            fill
            className="object-cover object-center filter brightness-[0.45] contrast-[1.1]"
            sizes="100vw"
          />
        </div>

        {/* Ambient Warm Diya Radial Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020906]/95 via-[#03170F]/80 to-[#020906]/90 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-radial-gradient from-[#E6A72D]/20 via-transparent to-transparent pointer-events-none blur-2xl" />

        {/* Chamber Header & Manuscript Environment Controls */}
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E0B84B]/20">
          <div className="flex items-center gap-3">
            {/* Flickering Diya in Header */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-t from-[#C2410C] via-[#E6A72D] to-[#FDF8EC] shadow-diya-lg animate-flicker flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </div>
            <div>
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#E0B84B] block">
                Chalisa Kutir • Royal Manuscript
              </span>
              <span className="text-xs font-serif text-[#F0E1BC]/80">
                Aged Cotton-Rag Parchment with Awadhi Devanagari
              </span>
            </div>
          </div>

          {/* Integrated Ceremonial Controls */}
          <div className="flex items-center gap-2.5">
            {/* Transliteration Switch */}
            <button
              onClick={() => setShowTransliteration(!showTransliteration)}
              className={`px-3 py-1.5 rounded-full text-xs font-serif flex items-center gap-1.5 transition-all cursor-pointer ${
                showTransliteration
                  ? "bg-[#C99A24] text-[#03170F] font-semibold shadow-diya"
                  : "bg-[#03170F]/80 text-[#E8D5A8] border border-[#E0B84B]/30 hover:border-[#E0B84B]"
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>English Transliteration</span>
            </button>

            {/* Scroll Progress Bead */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#03170F]/80 border border-[#E0B84B]/30 text-xs font-serif text-[#E0B84B]">
              <span>Scroll:</span>
              <span className="font-mono text-white">{scrollProgress}%</span>
            </div>
          </div>
        </div>

        {/* Closed Scroll State with Unroll Action */}
        {!isOpen ? (
          <div className="relative z-20 text-center py-20 px-6 max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#E0B84B]/15 border border-[#E0B84B]/40 mx-auto mb-6 flex items-center justify-center shadow-diya-lg">
              <BookOpen className="w-8 h-8 text-[#E0B84B]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              The Royal Scroll is Sealed
            </h3>
            <p className="text-sm font-serif text-[#F0E1BC]/80 mb-8 leading-relaxed">
              Step into the stillness of the manuscript chamber. Unroll Goswami Tulsidas’s sacred verses upon aged parchment.
            </p>
            <button
              onClick={handleCeremonialUnroll}
              disabled={isUnrolling}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#99741b] via-[#C99A24] to-[#E0B84B] text-[#03170F] font-serif font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-diya-lg cursor-pointer"
            >
              {isUnrolling ? "Unrolling Sacred Scroll..." : "Read Manuscript Scroll"}
            </button>
          </div>
        ) : (
          /* 2. Open Royal Manuscript Scroll */
          <div
            className={`relative z-20 mx-auto max-w-3xl transition-all duration-1000 ${
              isUnrolling ? "scale-95 opacity-50" : "scale-100 opacity-100"
            }`}
          >
            {/* Top Carved Dark Teakwood Scroll Roller Rod with Brass Finials */}
            <div className="relative z-30 mx-auto mb-[-8px]">
              <div className="h-9 sm:h-11 rounded-full bg-gradient-to-r from-[#170e08] via-[#29180D] to-[#170e08] border-y-2 border-[#C99A24]/60 shadow-2xl flex items-center justify-between px-3">
                {/* Left Brass Endcap */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#FDF8EC] via-[#E0B84B] to-[#735213] shadow-md border border-[#FDF8EC]/40 flex items-center justify-center">
                  <span className="text-[10px] text-[#29180D] font-bold">🪔</span>
                </div>
                <div className="h-1 w-3/4 bg-gradient-to-r from-transparent via-[#E0B84B]/40 to-transparent" />
                {/* Right Brass Endcap */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#FDF8EC] via-[#E0B84B] to-[#735213] shadow-md border border-[#FDF8EC]/40 flex items-center justify-center">
                  <span className="text-[10px] text-[#29180D] font-bold">🪔</span>
                </div>
              </div>
            </div>

            {/* The Authentic Aged Parchment Paper Roll */}
            <div
              ref={scrollContainerRef}
              className="relative z-20 bg-[#F0E1BC] text-[#2E1507] px-6 sm:px-14 md:px-16 py-12 shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_0_50px_rgba(115,75,25,0.22)] border-x-[12px] sm:border-x-[16px] border-[#362013] max-h-[820px] overflow-y-auto selection:bg-[#99551c]/30 selection:text-[#200e05]"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% 30%, #FDF8EC 0%, #F0E1BC 45%, #E5CF9F 80%, #D4BA85 100%)",
              }}
            >
              {/* Natural Parchment Deckle & Aging Vignette */}
              <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#5a391c_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Manuscript Scroll Title Header */}
              <div className="text-center pt-4 pb-8 border-b-2 border-[#8A5626]/25">
                <div className="text-[#8A5626] font-serif text-xs uppercase tracking-[0.3em] font-semibold mb-2">
                  ॥ श्री सीता लक्ष्मण भरत शत्रुघ्न हनुमत् समेताय नमः ॥
                </div>

                <h2 className="text-3xl sm:text-5xl font-devanagari font-bold text-[#2A1305] tracking-wide my-3 drop-shadow-sm">
                  ॥ श्री हनुमान चालीसा ॥
                </h2>

                <p className="text-xs sm:text-sm font-serif tracking-[0.2em] text-[#6E421B] uppercase font-semibold">
                  गोस्वामी तुलसीदास कृत • अवधी महाकाव्य
                </p>

                {/* Traditional Decorative Separator */}
                <div className="flex items-center justify-center gap-3 mt-4 opacity-80">
                  <span className="h-[1px] w-20 bg-[#8A5626]" />
                  <span className="text-[#8A5626] text-base">✦ ॐ ✦</span>
                  <span className="h-[1px] w-20 bg-[#8A5626]" />
                </div>
              </div>

              {/* Verses Stream (NO Modern Rectangular Boxes! Authentic Manuscript Spacing) */}
              <div className="py-6 space-y-7">
                {content.verses.map((verse, idx) => {
                  const isActive = activeVerseIndex === idx;
                  const isMeaningOpen = expandedMeanings[idx];

                  return (
                    <div
                      key={idx}
                      ref={(el) => {
                        verseRefs.current[idx] = el;
                      }}
                      onClick={() => jumpToVerse(idx)}
                      className={`group relative py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-[#E6A72D]/20 shadow-[0_0_20px_rgba(230,167,45,0.25)] border-l-4 border-[#C99A24]"
                          : "hover:bg-[#E5CF9F]/40 border-l-4 border-transparent"
                      }`}
                    >
                      {/* Active Chanting Diya Indicator */}
                      {isActive && isPlaying && (
                        <div className="flex items-center gap-1.5 text-[10px] font-serif uppercase tracking-widest text-[#8A5626] font-bold mb-1">
                          <span className="w-2 h-2 rounded-full bg-[#C2410C] animate-ping" />
                          <span>Chanting Now</span>
                        </div>
                      )}

                      {/* Section Identification */}
                      <div className="flex items-center justify-between text-xs font-serif text-[#78471E] mb-1.5">
                        <span className="font-semibold tracking-wider uppercase">
                          {verse.section || "चौपाई"} {verse.number}
                        </span>
                        {verse.audioStartTime !== undefined && (
                          <span className="text-[11px] font-mono text-[#8A5626]/70">
                            [{formatTime(verse.audioStartTime)}]
                          </span>
                        )}
                      </div>

                      {/* Authentic Large Devanagari Hindi Text */}
                      <div className="font-devanagari text-xl sm:text-2xl text-[#261003] font-semibold leading-relaxed tracking-wide space-y-1">
                        {verse.devanagari.map((line, lIdx) => (
                          <p key={lIdx}>{line}</p>
                        ))}
                      </div>

                      {/* Optional Transliteration */}
                      {showTransliteration && verse.transliteration && (
                        <div className="mt-2 text-xs sm:text-sm font-serif italic text-[#593416] space-y-0.5">
                          {verse.transliteration.map((line, lIdx) => (
                            <p key={lIdx}>{line}</p>
                          ))}
                        </div>
                      )}

                      {/* Expandable Devotional Meaning */}
                      {verse.meaning && (
                        <div className="mt-2.5">
                          <button
                            onClick={(e) => toggleMeaningForVerse(idx, e)}
                            className="inline-flex items-center gap-1 text-[11px] font-serif text-[#8A5626] hover:text-[#4A2407] font-semibold uppercase tracking-wider"
                          >
                            <span>Meaning</span>
                            {isMeaningOpen ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )}
                          </button>

                          {isMeaningOpen && (
                            <div className="mt-1.5 p-3 rounded-lg bg-[#E5CF9F]/50 border border-[#8A5626]/20 text-xs sm:text-sm font-serif text-[#381B07] leading-relaxed">
                              {verse.meaning}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Manuscript Conclusion Seal */}
              <div className="text-center pt-8 pb-4 border-t-2 border-[#8A5626]/25 mt-8">
                <div className="inline-block p-4 rounded-full border border-dashed border-[#8A5626]/60 text-[#4A2407] font-devanagari text-lg">
                  ॥ इति श्री हनुमान चालीसा समाप्तम् ॥
                </div>
                <p className="text-xs font-serif text-[#6E421B] mt-2 uppercase tracking-widest font-semibold">
                  पवनतनय संकट हरन मंगल मूरति रूप
                </p>
              </div>
            </div>

            {/* Bottom Carved Dark Teakwood Scroll Roller Rod with Brass Finials */}
            <div className="relative z-30 mx-auto mt-[-8px]">
              <div className="h-9 sm:h-11 rounded-full bg-gradient-to-r from-[#170e08] via-[#29180D] to-[#170e08] border-y-2 border-[#C99A24]/60 shadow-2xl flex items-center justify-between px-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#FDF8EC] via-[#E0B84B] to-[#735213] shadow-md border border-[#FDF8EC]/40 flex items-center justify-center">
                  <span className="text-[10px] text-[#29180D] font-bold">🪔</span>
                </div>
                <div className="h-1 w-3/4 bg-gradient-to-r from-transparent via-[#E0B84B]/40 to-transparent" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#FDF8EC] via-[#E0B84B] to-[#735213] shadow-md border border-[#FDF8EC]/40 flex items-center justify-center">
                  <span className="text-[10px] text-[#29180D] font-bold">🪔</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Synchronized Devotional Audio Player Dock */}
        <div className="relative z-20 mt-8 rounded-2xl bg-[#03170F]/90 border border-[#E0B84B]/30 p-4 sm:p-5 backdrop-blur-xl shadow-diya-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C99A24] to-[#E0B84B] text-[#03170F] font-bold flex items-center justify-center shadow-diya hover:scale-105 transition-all shrink-0 cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" />
                ) : (
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                )}
              </button>

              <div>
                <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-[#E0B84B] block">
                  Synchronized Recitation
                </span>
                <span className="text-sm font-serif font-bold text-white">
                  Verse {activeVerseIndex + 1} of {content.verses.length}
                </span>
              </div>
            </div>

            {/* Time progress slider */}
            <div className="w-full sm:flex-1 max-w-md flex items-center gap-3">
              <span className="text-xs font-mono text-[#F0E1BC]/80 shrink-0">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={(e) => setCurrentTime(Number(e.target.value))}
                className="w-full accent-[#E0B84B] bg-[#11281E] h-1.5 rounded-full cursor-pointer"
              />
              <span className="text-xs font-mono text-[#F0E1BC]/80 shrink-0">
                {formatTime(duration)}
              </span>
            </div>

            {/* Speed & 108 Jaap link */}
            <div className="flex items-center gap-3">
              <select
                value={audioPlaybackSpeed}
                onChange={(e) => setAudioPlaybackSpeed(Number(e.target.value))}
                className="bg-[#052216] border border-[#E0B84B]/30 text-xs font-mono text-[#E0B84B] rounded-lg px-2.5 py-1.5 cursor-pointer"
              >
                <option value={0.75}>0.75x</option>
                <option value={1}>1.0x</option>
                <option value={1.25}>1.25x</option>
              </select>

              <Link
                href="/hanuman-shakti-jaap?mode=jaap"
                className="px-3.5 py-1.5 rounded-lg border border-[#E0B84B]/40 bg-[#E0B84B]/10 hover:bg-[#E0B84B]/20 text-xs font-serif text-[#E0B84B] transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>108 Jaap</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
