import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mantra Van",
  description: "Terms and Conditions governing the use of Mantra Van (mantravan.in).",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-van-green-950 text-[#edebe8] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2">
            Terms of Service
          </h1>
          <p className="font-serif text-xs text-van-gold-400 uppercase tracking-widest">
            Mantra Van (mantravan.in) • Updated 2026
          </p>
        </div>

        <div className="rounded-3xl border border-van-gold-500/20 bg-van-charcoal-900/80 p-8 sm:p-12 space-y-6 font-serif leading-relaxed text-sm text-van-parchment-200/90 shadow-2xl backdrop-blur-md">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and exploring Mantra Van at mantravan.in, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">2. Intellectual Property & Sacred Heritage</h2>
            <p>
              Traditional devotional hymns, shlokas, and mantras (including the Hanuman Chalisa, Gayatri Mantra, and Vedic suktas) belong to humanity&apos;s public spiritual heritage.
            </p>
            <p>
              Original UI layouts, digital manuscript designs, audio compositions, typography arrangements, and specific articles produced by Mantra Van are protected by applicable copyright and intellectual property laws.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">3. Non-Commercial Personal Contemplation</h2>
            <p>
              Permission is granted to seekers to access, read, listen, and meditate upon the materials hosted on Mantra Van for personal, non-commercial, and devotional purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">4. Revisions & Errata</h2>
            <p>
              The materials appearing on Mantra Van may include technical, typographical, or transliteration nuances. Mantra Van may make changes to materials at any time without notice to enhance accuracy and spiritual reverence.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
