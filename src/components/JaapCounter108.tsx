"use client";

import React, { useState, useEffect, useCallback } from "react";
import { sound } from "../lib/sound";
import {
  RotateCcw,
  Play,
  Pause,
  Infinity as InfinityIcon,
  CheckCircle2,
  Bell,
  VolumeX,
} from "lucide-react";

interface JaapCounter108Props {
  mantraText: string;
  mantraEnglish: string;
  deityName?: string;
  targetCount?: number;
}

export default function JaapCounter108({
  mantraText,
  mantraEnglish,
  deityName,
  targetCount = 108,
}: JaapCounter108Props) {
  const [count, setCount] = useState(0);
  const [completedMalas, setCompletedMalas] = useState(0);
  const [isAutoPacing, setIsAutoPacing] = useState(false);
  const [isContinuous, setIsContinuous] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Chant" | "Exhale">("Chant");
  const [justTapped, setJustTapped] = useState(false);

  const incrementCount = useCallback(() => {
    setCount((prev) => {
      const next = prev + 1;

      if (soundEnabled) {
        if (next === targetCount) {
          sound.playMalaCompleteSound();
        } else {
          sound.playTempleBell(480 + (next % 12) * 15);
        }
      }

      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate?.(next === targetCount ? [50, 100, 150] : 15);
      }

      setJustTapped(true);
      setTimeout(() => setJustTapped(false), 200);

      if (next >= targetCount) {
        setCompletedMalas((m) => m + 1);
        if (!isContinuous) {
          setIsAutoPacing(false);
          return targetCount;
        }
        return 0;
      }
      return next;
    });
  }, [soundEnabled, targetCount, isContinuous]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        incrementCount();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [incrementCount]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPacing) {
      timer = setInterval(() => {
        incrementCount();
      }, 4200);
    }
    return () => clearInterval(timer);
  }, [isAutoPacing, incrementCount]);

  useEffect(() => {
    if (!isAutoPacing) return;
    const interval = setInterval(() => {
      setBreathPhase((prev) => {
        if (prev === "Inhale") return "Chant";
        if (prev === "Chant") return "Exhale";
        return "Inhale";
      });
    }, 1400);
    return () => clearInterval(interval);
  }, [isAutoPacing]);

  const handleReset = () => {
    setCount(0);
    setIsAutoPacing(false);
  };

  const progressPercentage = Math.min(100, (count / targetCount) * 100);
  const strokeDashoffset = 754 - (754 * progressPercentage) / 100;

  return (
    <div className="relative max-w-xl mx-auto my-8 p-6 sm:p-10 rounded-3xl border border-[#E0B84B]/30 bg-gradient-to-b from-[#03170F]/95 via-[#062016]/95 to-[#020B07]/95 backdrop-blur-xl shadow-2xl overflow-hidden select-none">
      {/* Warm Diya radial backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-radial-gradient from-[#E6A72D]/15 via-transparent to-transparent pointer-events-none blur-3xl" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E0B84B] animate-pulse" />
          <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#E0B84B]">
            {deityName ? `${deityName} • Jaap Sādhanā` : "108 Jaap Counter"}
          </span>
        </div>

        {completedMalas > 0 && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C99A24]/20 border border-[#E0B84B]/40 text-[#E0B84B] text-xs font-serif">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{completedMalas} {completedMalas === 1 ? "Mala" : "Malas"} Completed</span>
          </div>
        )}
      </div>

      {/* Circular Japa Disk */}
      <div className="relative z-10 flex flex-col items-center justify-center my-6">
        <div
          onClick={incrementCount}
          className={`relative w-72 h-72 sm:w-80 sm:h-80 rounded-full flex flex-col items-center justify-center cursor-pointer transition-transform duration-150 active:scale-95 group ${
            justTapped ? "scale-98" : ""
          }`}
          title="Click, Tap, or Press Spacebar to Chant"
        >
          {/* SVG Progress Bead Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 260 260">
            <circle
              cx="130"
              cy="130"
              r="120"
              className="stroke-[#11281E]"
              strokeWidth="6"
              fill="transparent"
            />
            <circle
              cx="130"
              cy="130"
              r="120"
              className="stroke-[#E0B84B] transition-all duration-300"
              strokeWidth="7"
              strokeDasharray="754"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>

          {/* Inner Sacred Center */}
          <div className="relative z-10 text-center px-4 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-devanagari text-[#FDF8EC] font-normal tracking-wide drop-shadow-md">
              {mantraText}
            </h2>

            <p className="text-xs sm:text-sm font-serif text-[#F0E1BC]/80 tracking-wider uppercase mt-1">
              {mantraEnglish}
            </p>

            <div className="my-3 font-serif">
              <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                {count}
              </span>
              <span className="text-lg text-[#E0B84B]/80 ml-1.5 font-light">
                / {targetCount}
              </span>
            </div>

            <span className="text-[11px] font-serif uppercase tracking-widest text-[#E0B84B]/70 group-hover:text-[#E0B84B] transition-colors">
              Tap to Chant (Mala Bead)
            </span>

            {isAutoPacing && (
              <div className="mt-2 text-[10px] uppercase font-serif tracking-widest px-2.5 py-0.5 rounded-full bg-[#E0B84B]/20 text-[#E0B84B] animate-pulse">
                {breathPhase}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Completion message */}
      {count >= targetCount && (
        <div className="relative z-10 text-center my-4 p-4 rounded-2xl bg-[#E0B84B]/15 border border-[#E0B84B]/40">
          <p className="font-devanagari text-lg text-[#E0B84B]">
            ॥ श्री सद्गुरु शरणम् ॥
          </p>
          <p className="font-serif text-sm text-[#F0E1BC] mt-1">
            108 sacred repetitions completed with devotion and peace.
          </p>
        </div>
      )}

      {/* Secondary Controls (Quiet, understated, not looking like a dashboard) */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-[#E0B84B]/20">
        <button
          onClick={handleReset}
          className="p-2.5 rounded-full border border-[#E0B84B]/20 hover:border-[#E0B84B] text-[#F0E1BC]/70 hover:text-[#E0B84B] transition-colors cursor-pointer"
          title="Reset"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsAutoPacing(!isAutoPacing)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-serif uppercase tracking-wider transition-colors cursor-pointer ${
            isAutoPacing
              ? "bg-[#E0B84B] text-[#03170F] border-[#E0B84B] font-bold shadow-diya"
              : "bg-[#03170F] border-[#E0B84B]/30 text-[#F0E1BC] hover:border-[#E0B84B]"
          }`}
        >
          {isAutoPacing ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          <span>{isAutoPacing ? "Pause Auto" : "Auto Pace"}</span>
        </button>

        <button
          onClick={() => setIsContinuous(!isContinuous)}
          className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
            isContinuous
              ? "bg-[#E0B84B]/20 border-[#E0B84B] text-[#E0B84B]"
              : "border-[#E0B84B]/20 text-[#F0E1BC]/60 hover:text-[#F0E1BC]"
          }`}
          title={isContinuous ? "Continuous Mode" : "Stop at 108"}
        >
          <InfinityIcon className="w-4 h-4" />
        </button>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
            soundEnabled
              ? "bg-[#E0B84B]/20 border-[#E0B84B] text-[#E0B84B]"
              : "border-[#E0B84B]/20 text-[#F0E1BC]/60"
          }`}
          title={soundEnabled ? "Bell chime enabled" : "Bell chime muted"}
        >
          {soundEnabled ? <Bell className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
