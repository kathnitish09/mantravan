"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ForestEntrance from "../components/ForestEntrance";
import Navbar from "../components/Navbar";
import ForestMap from "../components/ForestMap";
import MantraOfTheDay from "../components/MantraOfTheDay";
import JaapCounter108 from "../components/JaapCounter108";
import AdSenseSlot from "../components/AdSenseSlot";
import Footer from "../components/Footer";
import { getAllContent, getContentBySlug } from "../data/content";
import {
  BookOpen,
  Waves,
  ArrowRight,
  Headphones,
  Video,
  Feather,
  RotateCcw,
} from "lucide-react";

export default function HomePage() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [selectedDeity, setSelectedDeity] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const allContent = getAllContent();

  const handleEnter = () => {
    setHasEntered(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("mantravan_entered", "true");
    }
  };

  const handleSkip = () => {
    setHasEntered(true);
  };

  const handleReenter = () => {
    setHasEntered(false);
  };

  const filteredItems = allContent.filter((item) => {
    const matchesDeity = selectedDeity === "all" || item.deity === selectedDeity;
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesDeity && matchesCategory;
  });

  const hanumanChalisa = getContentBySlug("hanuman-chalisa");

  return (
    <main className="min-h-screen bg-[#020B07] text-[#EDEBE8] relative selection:bg-[#C99A24]/30 selection:text-[#FDF8EC]">
      {/* 1. Full-Screen Cinematic Sacred Forest Entrance Portal */}
      {!hasEntered && (
        <ForestEntrance onEnter={handleEnter} onSkip={handleSkip} />
      )}

      {/* Main Continuous Sacred Forest Journey */}
      <div
        className={`transition-opacity duration-1000 ${
          hasEntered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar />

        {/* 2. Hero Section: Stepping Deeper Along the Ancient Forest Path */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
          {/* Photorealistic Sacred Forest Backdrop (Ancient Trees framing sides, stone pathway, volumetric sunbeams) */}
          <div className="absolute inset-0">
            <Image
              src="/images/forest_entrance.jpg"
              alt="Ancient sacred Indian forest with giant tree trunks, mossy stone pathway and golden sunbeams"
              fill
              priority
              className="object-cover object-center filter brightness-[0.7] contrast-[1.05]"
              sizes="100vw"
            />
          </div>

          {/* Organic Dark Vignette Overlay for Crisp Readability without Hiding the Forest */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020B07] via-[#03170F]/55 to-[#020B07]/80 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#03170F]/40 to-[#020B07]/85 pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <button
                onClick={handleReenter}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#03170F]/80 border border-[#E0B84B]/40 hover:border-[#E0B84B] text-[#E0B84B] text-xs font-serif tracking-widest uppercase transition-all shadow-diya cursor-pointer group"
              >
                <RotateCcw className="w-3.5 h-3.5 group-hover:-rotate-90 transition-transform duration-300" />
                <span>Return to Forest Entrance</span>
              </button>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-wide text-white drop-shadow-xl">
              Welcome to MANTRA VAN
            </h1>

            <p className="text-xl sm:text-3xl text-[#F0E1BC] font-serif max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
              “Explore Mantras, Jaaps, Chalisas, Aartis, Bhajans and peaceful spiritual journeys.”
            </p>

            <p className="text-sm sm:text-base text-[#E8D5A8]/80 font-serif max-w-xl mx-auto leading-relaxed drop-shadow-sm">
              Walk the mossy stone pathway between towering banyan trees. Leave behind the noise of the modern web and enter an ancient forest of sound, prayer, and silence.
            </p>

            {/* Quick Action Pathways */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/hanuman-chalisa"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#99741b] via-[#C99A24] to-[#E0B84B] text-[#03170F] font-serif font-bold text-xs uppercase tracking-widest shadow-diya-lg hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 fill-current" />
                <span>Open Royal Chalisa Scroll</span>
              </Link>

              <Link
                href="/sita-ram-jaap?mode=jaap"
                className="px-7 py-4 rounded-full bg-[#03170F]/80 border border-[#E0B84B]/40 hover:border-[#E0B84B] text-[#E0B84B] font-serif font-semibold text-xs uppercase tracking-widest transition-all hover:bg-[#03170F] flex items-center gap-2 cursor-pointer shadow-diya"
              >
                <Waves className="w-4 h-4" />
                <span>108 Sita Ram Jaap</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Respectful Devotional Patronage */}
        <AdSenseSlot slotId="mantravan-hero-below" format="horizontal" />

        {/* 3. Sacred Locations Forest Map: 6 Photorealistic Sanctuaries */}
        <ForestMap />

        {/* 4. Mantra of the Day in Forest Glade */}
        <MantraOfTheDay />

        {/* 5. Signature Feature Spotlight: Royal Manuscript Chalisa in Ancient Chamber */}
        {hanumanChalisa && (
          <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
            <div className="rounded-3xl border border-[#E0B84B]/30 overflow-hidden shadow-2xl relative p-8 sm:p-14">
              {/* Manuscript Chamber Backdrop */}
              <div className="absolute inset-0">
                <Image
                  src="/images/manuscript_chamber.jpg"
                  alt="Ancient stone temple manuscript sanctum"
                  fill
                  className="object-cover object-center filter brightness-[0.4] contrast-[1.1]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#020B07]/95 via-[#03170F]/70 to-[#020B07]/90 pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Description */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03170F] border border-[#E0B84B]/40 text-[#E0B84B] text-xs font-serif uppercase tracking-widest shadow-diya">
                    <Feather className="w-3.5 h-3.5 text-[#E0B84B]" />
                    <span>Ancient Royal Manuscript</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-wide leading-tight">
                    Shri Hanuman Chalisa on Royal Parchment Scroll
                  </h2>

                  <p className="font-devanagari text-2xl text-[#E0B84B] font-normal">
                    ॥ श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ॥
                  </p>

                  <p className="text-sm sm:text-base font-serif text-[#F0E1BC]/90 leading-relaxed">
                    Inside the quiet stone chamber of Chalisa Kutir, Goswami Tulsidas’s forty verses unroll upon aged handmade cotton-rag parchment. Framed by carved teakwood rollers, glowing brass diyas, and synchronized audio verse illumination.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <Link
                      href="/hanuman-chalisa"
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#99741b] via-[#C99A24] to-[#E0B84B] text-[#03170F] font-serif font-bold text-xs uppercase tracking-widest shadow-diya-lg hover:scale-105 transition-all flex items-center gap-2"
                    >
                      <span>Read Royal Scroll</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/hanuman-chalisa?mode=audio"
                      className="px-6 py-3.5 rounded-full bg-[#03170F]/80 border border-[#E0B84B]/35 text-[#E0B84B] font-serif text-xs uppercase tracking-wider hover:border-[#E0B84B] transition-colors flex items-center gap-2"
                    >
                      <Headphones className="w-4 h-4" />
                      <span>Synchronized Audio</span>
                    </Link>
                  </div>
                </div>

                {/* Right Scroll Visual Preview */}
                <div className="lg:col-span-6">
                  <Link href="/hanuman-chalisa" className="block group">
                    <div className="relative rounded-2xl bg-[#F0E1BC] text-[#2E1507] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-x-[12px] border-[#29180D] transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="text-center pb-4 border-b border-[#8A5626]/20">
                        <span className="text-xs font-serif text-[#8A5626] uppercase tracking-widest font-bold">
                          ॥ अवधी मूल पाठ ॥
                        </span>
                        <h3 className="text-2xl font-devanagari font-bold text-[#2A1305] mt-1">
                          श्री हनुमान चालीसा
                        </h3>
                      </div>

                      <div className="py-6 text-center space-y-2">
                        <p className="font-devanagari text-xl text-[#261003] font-semibold">
                          जय हनुमान ज्ञान गुन सागर ।
                        </p>
                        <p className="font-devanagari text-xl text-[#261003] font-semibold">
                          जय कपीस तिहुँ लोक उजागर ॥
                        </p>
                        <p className="font-serif text-xs text-[#6E421B] italic pt-2">
                          Victory to Shri Hanuman, boundless ocean of wisdom & virtue...
                        </p>
                      </div>

                      <div className="pt-3 text-center text-xs font-serif text-[#78471E] uppercase tracking-wider font-semibold group-hover:text-[#2A1305] flex items-center justify-center gap-1">
                        <span>Click to enter full manuscript sanctum</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 6. 108 Jaap Experience in Lake Grove */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-serif uppercase tracking-widest text-[#E0B84B] block mb-2">
              Jaap Sarovar Practice
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-wide mb-3">
              The 108 Jaap Experience
            </h2>
            <p className="text-sm sm:text-base font-serif text-[#F0E1BC]/80 leading-relaxed">
              Count each sacred repetition with pure brass temple bell chimes, guided breathing rhythms, and peaceful focus.
            </p>
          </div>

          <JaapCounter108
            mantraText="सीता राम"
            mantraEnglish="Sita Ram"
            deityName="Sita Ram"
            targetCount={108}
          />
        </section>

        {/* Respectful Devotional Patronage */}
        <AdSenseSlot slotId="mantravan-mid-content" format="horizontal" />

        {/* 7. Sacred Library & Explorations (Natural Stone Folios, Not Modern Cards) */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E0B84B]/20">
            <div>
              <span className="text-xs font-serif uppercase tracking-widest text-[#E0B84B] block mb-2">
                Sacred Forest Archives
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
                Ancient Mantras, Prayers & Chalisas
              </h2>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {[
                { label: "All Sanctuaries", val: "all" },
                { label: "Mantras", val: "mantra" },
                { label: "108 Jaaps", val: "jaap" },
                { label: "Chalisas", val: "chalisa" },
                { label: "Aartis", val: "aarti" },
                { label: "Bhajans", val: "bhajan" },
                { label: "Meditation", val: "meditation" },
              ].map((c) => (
                <button
                  key={c.val}
                  onClick={() => setSelectedCategory(c.val)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-serif uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === c.val
                      ? "bg-[#E0B84B] text-[#03170F] font-bold shadow-diya"
                      : "bg-[#03170F]/80 border border-[#E0B84B]/20 text-[#E8D5A8] hover:text-[#E0B84B]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Deity Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-8 text-xs font-serif">
            <span className="text-[#E8D5A8]/60 uppercase tracking-wider mr-2 shrink-0">
              Filter by Deity:
            </span>
            {[
              { label: "All Traditions", val: "all" },
              { label: "Hanuman", val: "hanuman" },
              { label: "Ram", val: "ram" },
              { label: "Sita Ram", val: "sita-ram" },
              { label: "Shiva", val: "shiva" },
              { label: "Ganesh", val: "ganesh" },
              { label: "Krishna", val: "krishna" },
              { label: "Devi", val: "devi" },
              { label: "Other", val: "other" },
            ].map((d) => (
              <button
                key={d.val}
                onClick={() => setSelectedDeity(d.val)}
                className={`px-3 py-1 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedDeity === d.val
                    ? "bg-[#E0B84B]/20 text-[#E0B84B] border border-[#E0B84B] font-semibold"
                    : "text-[#E8D5A8]/70 hover:text-[#E0B84B] hover:bg-[#03170F]"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Grid of Sacred Folios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-[#E0B84B]/20 bg-[#03170F]/90 p-6 flex flex-col justify-between hover:border-[#E0B84B]/40 transition-all hover:-translate-y-1 group shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E0B84B]/15 border border-[#E0B84B]/25 text-[#E0B84B] text-[10px] font-serif uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs font-serif text-[#E0B84B]/80">
                      {item.deityLabel}
                    </span>
                  </div>

                  <Link href={`/${item.slug}`} className="block">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#E0B84B] transition-colors">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="text-sm font-devanagari text-[#E0B84B] mt-1 mb-3">
                    {item.hindiTitle}
                  </p>

                  <p className="text-xs text-[#F0E1BC]/80 font-serif line-clamp-3 leading-relaxed mb-4">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E0B84B]/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/${item.slug}`}
                      className="text-xs font-serif text-[#E0B84B] hover:text-[#F0E1BC] flex items-center gap-1 group-hover:underline"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Text</span>
                    </Link>

                    <Link
                      href={`/${item.slug}?mode=jaap`}
                      className="text-xs font-serif text-[#E0B84B] hover:text-[#F0E1BC] flex items-center gap-1 group-hover:underline ml-2"
                    >
                      <Waves className="w-3.5 h-3.5" />
                      <span>108 Jaap</span>
                    </Link>
                  </div>

                  <Link
                    href={`/${item.slug}`}
                    className="p-1.5 rounded-full bg-[#E0B84B]/10 text-[#E0B84B] group-hover:bg-[#E0B84B] group-hover:text-[#03170F] transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. YouTube Integration Sanctuary Banner */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
          <div className="rounded-3xl border border-[#C2410C]/30 bg-gradient-to-r from-[#020B07] via-[#2A100B]/60 to-[#020B07] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md shadow-2xl">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#E0B84B]">
                <Video className="w-4 h-4 text-[#C2410C]" />
                <span>Official Channel • @MANTRAVAN-09</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Mantra Van on YouTube
              </h3>
              <p className="text-sm font-serif text-[#F0E1BC]/85 leading-relaxed">
                Experience sacred forest dawn chants, synchronized jaaps, and peaceful meditative visual journeys on our official YouTube sanctuary.
              </p>
              <div className="text-xs font-mono text-[#E0B84B]/90 pt-1">
                youtube.com/@MANTRAVAN-09
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="https://www.youtube.com/@MANTRAVAN-09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C2410C] hover:bg-[#EA580C] text-white font-serif font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer hover:scale-105"
              >
                <Video className="w-4 h-4" />
                <span>Visit @MANTRAVAN-09</span>
              </a>

              <a
                href="https://www.youtube.com/@MANTRAVAN-09?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-serif font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:scale-105"
              >
                <span>Subscribe</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
