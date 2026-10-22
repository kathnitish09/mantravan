import React from "react";
import Link from "next/link";
import { Sparkles, Video, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-van-gold-500/20 bg-gradient-to-b from-van-charcoal-950 via-van-green-950 to-black text-van-parchment-200 pb-20 lg:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-van-gold-500/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-van-gold-500/40 bg-van-green-900/60 flex items-center justify-center shadow-diya">
                <span className="text-xl font-devanagari text-van-gold-400">ॐ</span>
              </div>
              <span className="font-serif font-bold text-2xl tracking-[0.16em] text-white">
                MANTRA VAN
              </span>
            </div>

            <p className="font-serif italic text-sm text-van-gold-400/90 leading-relaxed">
              “Where Every Mantra Becomes a Journey Within.”
            </p>

            <p className="font-serif text-xs text-van-parchment-300/70 max-w-sm leading-relaxed">
              A serene digital sanctuary reviving timeless Sanatan wisdom through royal manuscript readings, synchronized verse meditation, and peaceful 108 japa counters.
            </p>

            <div className="pt-2">
              <a
                href="https://www.youtube.com/@MANTRAVAN-09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 hover:text-white hover:border-red-500 text-xs font-serif transition-colors"
              >
                <Video className="w-4 h-4 text-red-500" />
                <span>@MANTRAVAN-09 on YouTube</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Sacred Sanctuaries */}
          <div>
            <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-van-gold-400 mb-4">
              Sacred Sanctuaries
            </h4>
            <ul className="space-y-2 text-xs font-serif text-van-parchment-200/80">
              <li>
                <Link href="/category/mantra" className="hover:text-van-gold-300 transition-colors">
                  Mantra Mandir (Mantras)
                </Link>
              </li>
              <li>
                <Link href="/category/jaap" className="hover:text-van-gold-300 transition-colors">
                  Jaap Sarovar (108 Jaap)
                </Link>
              </li>
              <li>
                <Link href="/category/chalisa" className="hover:text-van-gold-300 transition-colors">
                  Chalisa Kutir (Manuscripts)
                </Link>
              </li>
              <li>
                <Link href="/category/aarti" className="hover:text-van-gold-300 transition-colors">
                  Aarti Deep (Aartis)
                </Link>
              </li>
              <li>
                <Link href="/category/bhajan" className="hover:text-van-gold-300 transition-colors">
                  Bhajan Van (Devotion)
                </Link>
              </li>
              <li>
                <Link href="/category/meditation" className="hover:text-van-gold-300 transition-colors">
                  Dhyan Path (Stillness)
                </Link>
              </li>
            </ul>
          </div>

          {/* Essential Readings */}
          <div>
            <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-van-gold-400 mb-4">
              Featured Recitations
            </h4>
            <ul className="space-y-2 text-xs font-serif text-van-parchment-200/80">
              <li>
                <Link href="/hanuman-chalisa" className="hover:text-van-gold-300 transition-colors">
                  Shri Hanuman Chalisa
                </Link>
              </li>
              <li>
                <Link href="/sita-ram-jaap" className="hover:text-van-gold-300 transition-colors">
                  Sita Ram Jaap (108)
                </Link>
              </li>
              <li>
                <Link href="/om-namah-shivaya" className="hover:text-van-gold-300 transition-colors">
                  Om Namah Shivaya
                </Link>
              </li>
              <li>
                <Link href="/ganesh-aarti" className="hover:text-van-gold-300 transition-colors">
                  Shri Ganesh Ji Aarti
                </Link>
              </li>
              <li>
                <Link href="/hanuman-shakti-jaap" className="hover:text-van-gold-300 transition-colors">
                  Hanuman Shakti Jaap
                </Link>
              </li>
              <li>
                <Link href="/ram-naam-jaap" className="hover:text-van-gold-300 transition-colors">
                  Ram Naam Jaap
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional & Legal Links */}
          <div>
            <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-van-gold-400 mb-4">
              Institutional
            </h4>
            <ul className="space-y-2 text-xs font-serif text-van-parchment-200/80">
              <li>
                <Link href="/about" className="hover:text-van-gold-300 transition-colors">
                  About Mantra Van
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-van-gold-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-van-gold-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-van-gold-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-van-gold-300 transition-colors">
                  Spiritual Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-van-gold-300 transition-colors">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-van-parchment-300/50">
          <p>
            © {new Date().getFullYear()} MANTRA VAN (mantravan.in). All traditional verses are public spiritual heritage. Original curated arrangements & manuscript experience protected.
          </p>
          <div className="flex items-center gap-2">
            <span>Crafted with devotion for quiet minds</span>
            <span className="text-van-gold-400">🪔</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
