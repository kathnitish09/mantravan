"use client";

import React from "react";

interface AdSenseSlotProps {
  slotId?: string;
  format?: "horizontal" | "rectangle" | "sidebar";
  className?: string;
}

export default function AdSenseSlot({
  slotId = "default-slot",
  format = "horizontal",
  className = "",
}: AdSenseSlotProps) {
  return (
    <div
      className={`relative mx-auto my-10 rounded-2xl border border-van-gold-500/15 bg-van-charcoal-900/40 p-4 text-center backdrop-blur-sm overflow-hidden ${
        format === "horizontal"
          ? "max-w-4xl min-h-[90px] flex items-center justify-center"
          : format === "rectangle"
          ? "max-w-md min-h-[250px] flex flex-col items-center justify-center"
          : "w-full min-h-[600px] flex flex-col items-center justify-center"
      } ${className}`}
    >
      <div className="flex flex-col items-center justify-center space-y-1 select-none pointer-events-none opacity-50">
        <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-van-gold-400/60">
          Devotional Patronage & Sponsorship
        </span>
        <p className="text-[11px] font-serif text-van-parchment-300/40 italic">
          Respectful, unobtrusive partner placement supporting Mantra Van
        </p>
      </div>

      {/* When actual Google AdSense client code is added, it sits here cleanly:
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot={slotId}
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
      */}
    </div>
  );
}
