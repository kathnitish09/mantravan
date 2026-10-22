import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Sparkles, Heart, Compass, Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mantra Van | Mystical Sacred Forest Sanctuary",
  description:
    "Learn about the philosophy, craftsmanship, and purpose behind Mantra Van (mantravan.in) — where every mantra becomes a journey within.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-van-green-950 text-[#edebe8] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-van-gold-500/10 border border-van-gold-500/25 text-van-gold-300 text-xs font-serif uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-van-gold-400" />
            Our Sacred Mission
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-3">
            About MANTRA VAN
          </h1>
          <p className="font-serif italic text-lg text-van-gold-400">
            “Where Every Mantra Becomes a Journey Within.”
          </p>
        </div>

        <div className="rounded-3xl border border-van-gold-500/20 bg-van-charcoal-900/80 p-8 sm:p-12 space-y-8 font-serif leading-relaxed text-van-parchment-200/90 shadow-2xl backdrop-blur-md">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
              The Genesis of the Sacred Forest
            </h2>
            <p>
              In an era dominated by relentless digital distractions, social feeds, and intrusive advertisements, our spiritual moments deserve an unhurried, consecrated space. MANTRA VAN was envisioned not as a conventional content blog, but as an ancient mystical forest—a sacred digital sanctuary where seekers can step off the highway of modern life into deep quietude.
            </p>
            <p>
              Drawing inspiration from the ancient Aranyakas (forest treatises) and the meditative hermitages of Indian sages, Mantra Van connects time-honored Vedic acoustics with refined, quiet design.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
              Our Core Philosophical Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-van-green-950/70 border border-van-gold-500/20">
                <h3 className="font-bold text-white text-base mb-1 text-van-gold-300">
                  Respect for Traditional Wisdom
                </h3>
                <p className="text-xs text-van-parchment-300/80 leading-relaxed">
                  We honor public devotional scriptures—from Goswami Tulsidas to the Rigveda—maintaining authentic Sanskrit and Awadhi texts without distortions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-van-green-950/70 border border-van-gold-500/20">
                <h3 className="font-bold text-white text-base mb-1 text-van-gold-300">
                  Royal Manuscript Craftsmanship
                </h3>
                <p className="text-xs text-van-parchment-300/80 leading-relaxed">
                  Sacred verses are presented as tactile royal parchment scrolls, illuminated by glowing brass diyas and synchronized audio verse highlighting.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-van-green-950/70 border border-van-gold-500/20">
                <h3 className="font-bold text-white text-base mb-1 text-van-gold-300">
                  Pure Mindful Sādhanā
                </h3>
                <p className="text-xs text-van-parchment-300/80 leading-relaxed">
                  Our 108 japa mala counters feature pure synthesized temple bell chimes and calm breathing pacing, free from commercial algorithmic hooks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-van-green-950/70 border border-van-gold-500/20">
                <h3 className="font-bold text-white text-base mb-1 text-van-gold-300">
                  Uncluttered Devotional Space
                </h3>
                <p className="text-xs text-van-parchment-300/80 leading-relaxed">
                  No popup ads over sacred mantras, no sensationalist claims, and no corporate SaaS clutter. Pure, peaceful devotion first.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4 border-t border-van-gold-500/15">
            <h2 className="text-xl font-serif font-bold text-white">
              Domain & Stewardship
            </h2>
            <p className="text-sm">
              MANTRA VAN is hosted and published at <strong className="text-van-gold-300">mantravan.in</strong>. We warmly invite seekers of all traditions to wander these forest paths and discover the silence within.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
