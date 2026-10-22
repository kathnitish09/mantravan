"use client";

import React, { useState, useEffect } from "react";
import { sound } from "../lib/sound";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export default function AmbientSoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    const nextState = sound.toggleSacredAmbience();
    setIsPlaying(nextState);
  };

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-serif transition-all duration-300 cursor-pointer ${
        isPlaying
          ? "bg-van-gold-500/20 border-van-gold-400 text-van-gold-300 shadow-diya"
          : "bg-van-charcoal-900/60 border-van-gold-500/20 text-van-parchment-300/70 hover:text-van-gold-300 hover:border-van-gold-500/40"
      }`}
      title="Sacred Forest Ambiance (Drone & Subtle Wind Chime)"
    >
      {isPlaying ? (
        <>
          <span className="w-2 h-2 rounded-full bg-van-gold-400 animate-ping" />
          <Volume2 className="w-3.5 h-3.5 text-van-gold-400" />
          <span className="hidden sm:inline">Forest Drone On</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Forest Drone</span>
        </>
      )}
    </button>
  );
}
