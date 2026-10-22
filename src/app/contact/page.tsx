"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Mail, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-van-green-950 text-[#edebe8] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-van-gold-500/10 border border-van-gold-500/25 text-van-gold-300 text-xs font-serif uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5 text-van-gold-400" />
            Connect with the Sanctuary
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2">
            Contact Mantra Van
          </h1>
          <p className="font-serif text-sm text-van-parchment-200/80">
            For devotional inquiries, recitation suggestions, feedback, or respectful collaborations.
          </p>
        </div>

        <div className="rounded-3xl border border-van-gold-500/20 bg-van-charcoal-900/80 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-van-gold-400 mx-auto" />
              <h2 className="text-2xl font-serif font-bold text-white">
                Namaste. Message Received.
              </h2>
              <p className="font-serif text-sm text-van-parchment-200/80 max-w-md mx-auto">
                Thank you for reaching out to Mantra Van. Our custodians will review your message with care and respond promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-van-gold-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full bg-van-charcoal-800/80 border border-van-gold-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-van-parchment-300/40 focus:outline-none focus:border-van-gold-400 font-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-van-gold-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full bg-van-charcoal-800/80 border border-van-gold-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-van-parchment-300/40 focus:outline-none focus:border-van-gold-400 font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-van-gold-400 mb-2">
                  Subject / Sacred Topic
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Suggestion for a new Chalisa or Jaap"
                  className="w-full bg-van-charcoal-800/80 border border-van-gold-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-van-parchment-300/40 focus:outline-none focus:border-van-gold-400 font-body"
                />
              </div>

              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-van-gold-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your thoughts with us..."
                  className="w-full bg-van-charcoal-800/80 border border-van-gold-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-van-parchment-300/40 focus:outline-none focus:border-van-gold-400 font-body"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-van-gold-600 to-van-gold-500 text-van-charcoal-950 font-serif font-bold text-sm tracking-wider uppercase hover:from-van-gold-500 hover:to-van-gold-400 transition-all flex items-center justify-center gap-2 shadow-diya cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Devotional Note</span>
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-van-gold-500/15 text-center text-xs font-serif text-van-parchment-300/60">
            Official Sanctuary Correspondence: <span className="text-van-gold-300">contact@mantravan.in</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
