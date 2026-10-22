"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Compass } from "lucide-react";

interface ForestEntranceProps {
  onEnter: () => void;
  onSkip: () => void;
}

export default function ForestEntrance({ onEnter, onSkip }: ForestEntranceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Subtle floating golden dust motes & sacred fireflies
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      alpha: number;
      pulse: number;
    }> = [];

    const particleCount = width < 768 ? 35 : 70;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.4 + 0.6,
        speedY: -(Math.random() * 0.35 + 0.12),
        speedX: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.65 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Subtle volumetric golden sunlight oscillation in center
      const sunCenter = ctx.createRadialGradient(
        width * 0.5,
        height * 0.38,
        20,
        width * 0.5,
        height * 0.42,
        width * 0.55
      );
      const sunPulse = 0.14 + 0.04 * Math.sin(time * 0.8);
      sunCenter.addColorStop(0, `rgba(224, 184, 75, ${sunPulse})`);
      sunCenter.addColorStop(0.4, `rgba(201, 154, 36, ${sunPulse * 0.5})`);
      sunCenter.addColorStop(1, "transparent");
      ctx.fillStyle = sunCenter;
      ctx.fillRect(0, 0, width, height);

      // Delicate floating mist layers
      for (let layer = 0; layer < 2; layer++) {
        ctx.fillStyle = `rgba(215, 230, 220, ${0.035 + layer * 0.018})`;
        ctx.beginPath();
        const yOff = height * (0.68 + layer * 0.12);
        ctx.moveTo(0, height);
        ctx.lineTo(0, yOff);
        for (let x = 0; x <= width; x += 50) {
          const wave =
            Math.sin(x * 0.003 + time * 0.7 + layer * 2) * 18 +
            Math.cos(x * 0.006 - time * 0.4) * 10;
          ctx.lineTo(x, yOff + wave);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
      }

      // Golden particles / sacred fireflies
      particles.forEach((p) => {
        p.pulse += 0.025;
        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.fillStyle = `rgba(224, 184, 75, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.pulse * 0.6) * 0.15;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleEnterClick = () => {
    setIsEntering(true);
    // 2.2 second forward travel transition into the forest
    setTimeout(() => {
      onEnter();
    }, 2200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isEntering
          ? "scale-115 opacity-0 pointer-events-none filter blur-sm"
          : "opacity-100"
      }`}
    >
      {/* 1. Photorealistic Cinematic Forest Entrance Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/forest_entrance.jpg"
          alt="Ancient Sacred Indian Forest Entrance with ancient trees and stone pathway"
          fill
          priority
          className="object-cover object-center transform scale-105 transition-transform duration-[4000ms] ease-out"
          sizes="100vw"
        />
      </div>

      {/* 2. Atmospheric Forest Vignette & Readability Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020b07]/90 via-[#03170F]/50 to-[#020b07]/75 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#03170F]/30 to-[#010805]/85 pointer-events-none" />

      {/* 3. Interactive Floating Particles & Mist Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 4. Center Entrance Portal & Sacred Invitation */}
      <div className="relative z-10 max-w-xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Sacred ॐ Emblem with Diya Aura */}
        <div className="relative mb-5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#E0B84B]/40 flex items-center justify-center bg-[#03170F]/60 backdrop-blur-md shadow-diya-lg relative animate-pulse-glow">
            <span className="text-3xl sm:text-4xl text-[#E0B84B] font-devanagari select-none drop-shadow">
              ॐ
            </span>
          </div>
          {/* Subtle floral orbit ring */}
          <div className="absolute -inset-2.5 rounded-full border border-dashed border-[#E0B84B]/20 pointer-events-none animate-spin [animation-duration:50s]" />
        </div>

        {/* Title & Tagline */}
        <div className="space-y-3 mb-8">
          <span className="inline-block text-xs uppercase tracking-[0.35em] text-[#E0B84B] font-medium font-serif drop-shadow-sm">
            The Sacred Forest of Wisdom
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-wider text-white drop-shadow-lg">
            MANTRA VAN
          </h1>
          <p className="text-base sm:text-xl text-[#F0E1BC] italic font-serif max-w-md mx-auto leading-relaxed drop-shadow">
            “Where Every Mantra Becomes a Journey Within.”
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={handleEnterClick}
            disabled={isEntering}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#99741b] via-[#C99A24] to-[#E0B84B] text-[#03170F] font-serif font-bold tracking-widest uppercase text-sm hover:from-[#C99A24] hover:to-[#F0E1BC] transition-all duration-300 shadow-diya-lg flex items-center justify-center gap-3 group cursor-pointer hover:scale-105"
          >
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45 duration-300 text-[#03170F]" />
            <span>Enter Mantra Van</span>
            <Sparkles className="w-4 h-4 text-[#03170F]" />
          </button>

          <button
            onClick={onSkip}
            className="text-xs uppercase tracking-widest text-[#E8D5A8]/80 hover:text-[#E0B84B] transition-colors py-2 px-4 cursor-pointer font-serif"
          >
            Skip Intro
          </button>
        </div>

        <p className="text-[11px] text-[#E8D5A8]/60 mt-8 tracking-widest uppercase font-serif">
          Walk the Ancient Stone Path • Discover Mantras, Jaaps, Chalisas & Dhyan
        </p>
      </div>
    </div>
  );
}
