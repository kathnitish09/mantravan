import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ShieldAlert, Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual & Medical Disclaimer | Mantra Van",
  description:
    "Important spiritual context and non-medical advisory for Mantra Van devotional practices.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-van-green-950 text-[#edebe8] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-van-gold-500/10 border border-van-gold-500/25 text-van-gold-300 text-xs font-serif uppercase tracking-widest mb-4">
            <ShieldAlert className="w-3.5 h-3.5 text-van-gold-400" />
            Spiritual Integrity Notice
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2">
            Spiritual & Medical Disclaimer
          </h1>
          <p className="font-serif text-xs text-van-gold-400 uppercase tracking-widest">
            Mantra Van (mantravan.in)
          </p>
        </div>

        <div className="rounded-3xl border border-van-gold-500/20 bg-van-charcoal-900/80 p-8 sm:p-12 space-y-6 font-serif leading-relaxed text-sm text-van-parchment-200/90 shadow-2xl backdrop-blur-md">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              Devotional Heritage & Philosophical Contemplation
            </h2>
            <p>
              The mantras, prayers, chalisas, aartis, and meditations presented on Mantra Van (mantravan.in) are curated strictly for spiritual reflection, peace of mind, devotional practice, and cultural appreciation. They reflect the classical wisdom of Sanatan Dharma and timeless traditions of human contemplation.
            </p>
          </section>

          <section className="space-y-3 p-5 rounded-2xl bg-van-green-950/60 border border-van-gold-500/20">
            <h2 className="text-lg font-bold text-van-gold-300">
              No Medical or Psychological Treatment Advice
            </h2>
            <p>
              Mantra Van makes <strong>no claims, warranties, or representations</strong> that chanting mantras or practicing japa can cure, diagnose, treat, or prevent any physical disease, psychiatric illness, or physiological ailment.
            </p>
            <p>
              Mantras and breathing exercises are contemplative practices. They should never replace professional medical evaluation, psychological counseling, prescribed pharmaceuticals, or emergency health interventions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              No Superstitious or Guaranteed Outcomes
            </h2>
            <p>
              Devotional intentions referenced across our library (e.g., courage, tranquility, clarity, gratitude) describe inner spiritual dispositions cultivated through quiet focus. Mantra Van does not endorse superstition, nor do we promise guaranteed supernatural results or financial windfalls.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-van-gold-500/15">
            <h2 className="text-lg font-bold text-white">
              Personal Responsibility
            </h2>
            <p>
              Every seeker engages with these practices at their own pace and personal discretion. We encourage a balanced, grounded path that honors spiritual devotion alongside reason, compassion, and sound health practices.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
