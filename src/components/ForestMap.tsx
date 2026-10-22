"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sound } from "../lib/sound";
import { Sparkles, ArrowRight, Compass } from "lucide-react";

interface SacredLocation {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  description: string;
  categorySlug: string;
  href: string;
  image: string;
  atmosphere: string;
  signatureItem: { title: string; slug: string };
}

const LOCATIONS: SacredLocation[] = [
  {
    id: "mantra-mandir",
    name: "Mantra Mandir",
    hindiName: "मंत्र मंदिर",
    tagline: "Explore Ancient Mantras",
    description:
      "An ancient carved stone temple shikhara shrine cradled within towering banyan roots. Brass diyas glow upon the mossy steps, echoing primordial Vedic vibrations into the silence of the woods.",
    categorySlug: "mantra",
    href: "/category/mantra",
    image: "/images/mantra_mandir.jpg",
    atmosphere: "Ancient Stone Sanctum • Vedic Vibrations",
    signatureItem: { title: "Om Namah Shivaya", slug: "om-namah-shivaya" },
  },
  {
    id: "jaap-sarovar",
    name: "Jaap Sarovar",
    hindiName: "जाप सरोवर",
    tagline: "Immerse in 108 Jaap",
    description:
      "A serene sacred lake deep within the forest reflecting golden morning rays and ancient trees. Pink lotus blossoms drift quietly as seekers chant 108 japa malas along the mossy stone ghats.",
    categorySlug: "jaap",
    href: "/category/jaap",
    image: "/images/jaap_sarovar.jpg",
    atmosphere: "Reflective Waters • 108 Japa Malas",
    signatureItem: { title: "Sita Ram Jaap", slug: "sita-ram-jaap" },
  },
  {
    id: "chalisa-kutir",
    name: "Chalisa Kutir",
    hindiName: "चालीसा कुटीर",
    tagline: "Read Royal Chalisas",
    description:
      "An ancient hermitage library built of carved teakwood and stone, sheltered by giant banyan boughs. Shelves hold sacred palm-leaf scriptures and royal manuscripts illuminated by warm ghee lamps.",
    categorySlug: "chalisa",
    href: "/hanuman-chalisa",
    image: "/images/chalisa_kutir.jpg",
    atmosphere: "Ancient Scroll Library • Awadhi Verses",
    signatureItem: { title: "Shri Hanuman Chalisa", slug: "hanuman-chalisa" },
  },
  {
    id: "aarti-deep",
    name: "Aarti Deep",
    hindiName: "आरती दीप",
    tagline: "Experience Sacred Aartis",
    description:
      "A temple courtyard in the forest illuminated at twilight by dozens of flickering brass diya lamps and hanging deepams. Fragrant incense smoke rises with evening prayers of heartfelt devotion.",
    categorySlug: "aarti",
    href: "/category/aarti",
    image: "/images/aarti_deep.jpg",
    atmosphere: "Flickering Brass Lamps • Evening Aradhana",
    signatureItem: { title: "Shri Ganesh Ji Aarti", slug: "ganesh-aarti" },
  },
  {
    id: "bhajan-van",
    name: "Bhajan Van",
    hindiName: "भजन वन",
    tagline: "Listen to Devotional Bhajans",
    description:
      "A sunlit sacred forest clearing surrounded by flowering kadamba trees. Under a sacred banyan sits an antique veena and bansuri adorned with fresh marigold garlands, filling the grove with melodies.",
    categorySlug: "bhajan",
    href: "/category/bhajan",
    image: "/images/bhajan_van.jpg",
    atmosphere: "Musical Forest Clearing • Sweet Kirtan",
    signatureItem: { title: "Shree Krishna Sharanam", slug: "shree-krishna-sharanam-mamah" },
  },
  {
    id: "dhyan-path",
    name: "Dhyan Path",
    hindiName: "ध्यान पथ",
    tagline: "Enter Mountain Meditation",
    description:
      "A quiet stone pathway winding through misty deodar pines in the high forest. In the distance, glorious snow-covered Himalayan peaks catch the dawn light, guiding the mind into pure stillness.",
    categorySlug: "meditation",
    href: "/category/meditation",
    image: "/images/dhyan_path.jpg",
    atmosphere: "Himalayan Forest Trail • Deep Silence",
    signatureItem: { title: "Om Dum Durgayei Namaha", slug: "om-dum-durgayei-namaha" },
  },
];

export default function ForestMap() {
  const [activeLocation, setActiveLocation] = useState<SacredLocation>(LOCATIONS[0]);

  const handleLocationSelect = (loc: SacredLocation) => {
    setActiveLocation(loc);
    sound.playTempleBell(480 + Math.random() * 60);
  };

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0B84B]/10 border border-[#E0B84B]/25 text-[#E0B84B] text-xs font-serif tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E0B84B]" />
          Wandering Through Mantra Van
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-wide mb-4">
          Sacred Forest Sanctuaries
        </h2>
        <p className="text-base sm:text-lg text-[#F0E1BC]/85 font-serif leading-relaxed">
          Journey along the stone pathway through the ancient forest. Discover six sacred sanctuaries nestled amongst towering trees, sacred waters, and glowing temple diyas.
        </p>
      </div>

      {/* Main Environmental Explorer Display */}
      <div className="relative rounded-3xl overflow-hidden border border-[#E0B84B]/30 shadow-2xl bg-[#03170F]/90">
        {/* Background Vista Image of Active Sacred Location */}
        <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px]">
          <Image
            src={activeLocation.image}
            alt={activeLocation.name}
            fill
            priority
            className="object-cover object-center transition-all duration-700 ease-in-out filter brightness-[0.75] contrast-[1.05]"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />

          {/* Environmental Dark Gradient Vignette for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020B07] via-[#03170F]/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020B07]/80 via-transparent to-[#020B07]/70 pointer-events-none" />

          {/* Location Details Overlay inside the Vista */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 max-w-2xl z-10 space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#03170F]/80 border border-[#E0B84B]/40 text-[#E0B84B] text-[10px] sm:text-xs font-serif uppercase tracking-widest shadow-diya">
                {activeLocation.atmosphere}
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white drop-shadow-md">
                {activeLocation.name}
              </h3>
              <span className="text-xl sm:text-2xl font-devanagari text-[#E0B84B] font-normal">
                {activeLocation.hindiName}
              </span>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-serif text-[#F0E1BC] leading-relaxed drop-shadow line-clamp-3 sm:line-clamp-none">
              {activeLocation.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={activeLocation.href}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#99741b] via-[#C99A24] to-[#E0B84B] text-[#03170F] font-serif font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-diya flex items-center gap-2"
              >
                <span>Enter {activeLocation.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href={`/${activeLocation.signatureItem.slug}`}
                className="text-xs font-serif text-[#F0E1BC] hover:text-[#E0B84B] underline flex items-center gap-1.5"
              >
                <span>Signature: {activeLocation.signatureItem.title}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Discovery Trail: 6 Organic Forest Waypoints Selector */}
        <div className="p-4 sm:p-6 bg-gradient-to-b from-[#020B07] to-[#04160E] border-t border-[#E0B84B]/20">
          <div className="text-xs font-serif uppercase tracking-widest text-[#E0B84B] mb-3 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
            <Compass className="w-3.5 h-3.5 text-[#E0B84B]" />
            <span>Discoveries Along the Sacred Forest Trail</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LOCATIONS.map((loc) => {
              const isSelected = activeLocation.id === loc.id;

              return (
                <button
                  key={loc.id}
                  onClick={() => handleLocationSelect(loc)}
                  className={`relative p-3 rounded-2xl transition-all duration-300 text-left overflow-hidden cursor-pointer group border ${
                    isSelected
                      ? "border-[#E0B84B] shadow-diya scale-[1.03] ring-1 ring-[#E0B84B]/40"
                      : "border-[#E0B84B]/15 hover:border-[#E0B84B]/40 hover:scale-[1.01]"
                  }`}
                >
                  {/* Miniature Thumbnail of the Forest Location */}
                  <div className="relative w-full h-16 sm:h-20 rounded-xl overflow-hidden mb-2">
                    <Image
                      src={loc.image}
                      alt={loc.name}
                      fill
                      className="object-cover object-center filter brightness-[0.7] group-hover:brightness-90 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B07] to-transparent opacity-60" />
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E0B84B] shadow-diya animate-ping" />
                    )}
                  </div>

                  <div className="font-serif font-bold text-xs text-white truncate group-hover:text-[#E0B84B] transition-colors">
                    {loc.name}
                  </div>
                  <div className="text-[10px] font-devanagari text-[#E0B84B]/80 truncate">
                    {loc.hindiName}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
