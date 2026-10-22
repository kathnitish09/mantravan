import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ChalisaScrollReader from "../../components/ChalisaScrollReader";
import JaapCounter108 from "../../components/JaapCounter108";
import AdSenseSlot from "../../components/AdSenseSlot";
import { getContentBySlug, getAllContent } from "../../data/content";
import {
  Sparkles,
  BookOpen,
  Headphones,
  Video,
  Share2,
  Heart,
  ChevronRight,
  ShieldCheck,
  Compass,
  Waves,
  ArrowRight,
} from "lucide-react";

interface PageProps {
  params: { slug: string };
  searchParams?: { mode?: string };
}

// Generate static params for all content pages for SSG speed & SEO
export async function generateStaticParams() {
  const content = getAllContent();
  return content.map((c) => ({ slug: c.slug }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = getContentBySlug(params.slug);
  if (!item) return { title: "Not Found | Mantra Van" };

  return {
    title: `${item.title} (${item.hindiTitle}) | Mantra Van`,
    description: item.seoDescription,
    keywords: item.keywords,
    alternates: {
      canonical: `https://mantravan.in/${item.slug}`,
    },
    openGraph: {
      title: item.seoTitle,
      description: item.seoDescription,
      url: `https://mantravan.in/${item.slug}`,
      siteName: "MANTRA VAN",
      locale: "hi_IN",
      type: "article",
      authors: ["Mantra Van Spiritual Sanctuaries"],
    },
    twitter: {
      card: "summary_large_image",
      title: item.seoTitle,
      description: item.seoDescription,
    },
  };
}

export default function ContentPage({ params, searchParams }: PageProps) {
  const item = getContentBySlug(params.slug);
  if (!item) notFound();

  const isChalisa = item.category === "chalisa";
  const relatedItems = item.relatedSlugs
    .map((s) => getContentBySlug(s))
    .filter(Boolean);

  // Schema.org structured data for SEO rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    alternativeHeadline: item.hindiTitle,
    description: item.shortDescription,
    author: {
      "@type": "Organization",
      name: "MANTRA VAN",
      url: "https://mantravan.in",
    },
    publisher: {
      "@type": "Organization",
      name: "MANTRA VAN",
      logo: {
        "@type": "ImageObject",
        url: "https://mantravan.in/logo.png",
      },
    },
    datePublished: item.publishedDate,
    mainEntityOfPage: `https://mantravan.in/${item.slug}`,
  };

  const bgImage =
    item.category === "chalisa"
      ? "/images/manuscript_chamber.jpg"
      : item.category === "jaap"
      ? "/images/jaap_sarovar.jpg"
      : item.category === "mantra"
      ? "/images/mantra_mandir.jpg"
      : item.category === "aarti"
      ? "/images/aarti_deep.jpg"
      : item.category === "bhajan"
      ? "/images/bhajan_van.jpg"
      : "/images/dhyan_path.jpg";

  return (
    <div className="min-h-screen bg-[#020B07] text-[#EDEBE8] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumbs for SEO and Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-serif text-[#E8D5A8]/70">
          <Link href="/" className="hover:text-[#E0B84B] transition-colors">
            Sacred Forest
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={`/category/${item.category}`}
            className="hover:text-[#E0B84B] capitalize transition-colors"
          >
            {item.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#E0B84B] font-semibold">{item.title}</span>
        </nav>

        {/* Hero Area with Photorealistic Forest Vista */}
        <section className="relative rounded-3xl border border-[#E0B84B]/30 overflow-hidden shadow-2xl p-6 sm:p-12 mb-10">
          {/* Background Image of the Sacred Forest Sanctuary */}
          <div className="absolute inset-0">
            <Image
              src={bgImage}
              alt={item.title}
              fill
              priority
              className="object-cover object-center filter brightness-[0.4] contrast-[1.1]"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020B07]/95 via-[#03170F]/70 to-[#020B07]/90 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#03170F]/90 border border-[#E0B84B]/40 text-[#E0B84B] text-xs font-serif uppercase tracking-widest shadow-diya">
                {item.category}
              </span>
              <span className="text-xs font-serif text-[#E0B84B]">
                • {item.deityLabel}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-wide mb-3 drop-shadow-md">
              {item.title}
            </h1>

            <p className="text-2xl sm:text-4xl font-devanagari sacred-gold-text mb-4 font-normal">
              {item.hindiTitle}
            </p>

            <p className="text-sm sm:text-base font-serif text-van-parchment-200/90 leading-relaxed mb-6">
              {item.shortDescription}
            </p>

            {/* Quick Action Anchors */}
            <div className="flex flex-wrap items-center gap-3">
              {isChalisa ? (
                <a
                  href="#scroll-reader"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-van-gold-600 to-van-gold-400 text-van-charcoal-950 font-serif font-bold text-xs uppercase tracking-wider shadow-diya hover:scale-105 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 fill-current" />
                  <span>Read Manuscript Scroll</span>
                </a>
              ) : (
                <a
                  href="#jaap-counter"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-van-gold-600 to-van-gold-400 text-van-charcoal-950 font-serif font-bold text-xs uppercase tracking-wider shadow-diya hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Waves className="w-4 h-4" />
                  <span>Begin 108 Jaap</span>
                </a>
              )}

              {item.youtubeId && (
                <a
                  href="#video"
                  className="px-5 py-3 rounded-full bg-van-charcoal-800/80 border border-van-gold-500/25 hover:border-van-gold-400 text-van-parchment-200 font-serif text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <Video className="w-4 h-4 text-red-400" />
                  <span>Watch on YouTube</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Respectful Patronage Ad Slot */}
        <AdSenseSlot slotId={`ad-${item.slug}-below-hero`} format="horizontal" />

        {/* If it's the signature Hanuman Chalisa, present the Royal Manuscript Experience */}
        {isChalisa && (
          <section id="scroll-reader" className="my-12">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-serif uppercase tracking-widest text-van-gold-400">
                Interactive Manuscript
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                Synchronized Ancient Scroll
              </h2>
            </div>
            <ChalisaScrollReader content={item} />
          </section>
        )}

        {/* 108 Jaap Counter (If applicable or if requested in query param) */}
        {(!isChalisa || searchParams?.mode === "jaap") && (
          <section id="jaap-counter" className="my-12">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-xs font-serif uppercase tracking-widest text-van-gold-400">
                Mindful Japa
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                108 Meditative Counter
              </h2>
              <p className="text-xs font-serif text-van-parchment-300/70 mt-1">
                Tap the circle or press Spacebar to count your japa beads with serene temple bell chimes.
              </p>
            </div>
            <JaapCounter108
              mantraText={item.verses[0]?.devanagari[0] || item.hindiTitle.replace(/॥/g, "").trim()}
              mantraEnglish={item.verses[0]?.transliteration?.[0] || item.title}
              deityName={item.deityLabel}
              targetCount={item.jaapTarget || 108}
            />
          </section>
        )}

        {/* About this practice & Devotional Intention (Carefully phrased, no medical or supernatural guarantees) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16">
          {/* About Column */}
          <div className="lg:col-span-7 rounded-2xl border border-van-gold-500/20 bg-van-charcoal-900/60 p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-van-gold-400" />
              <span>About this Sacred Practice</span>
            </h2>

            <div className="prose prose-invert max-w-none text-sm sm:text-base font-serif text-van-parchment-200/90 leading-relaxed space-y-4">
              <p>{item.about}</p>
              {item.traditionalContext && (
                <div className="p-4 rounded-xl bg-van-green-950/60 border border-van-gold-500/15 text-xs text-van-parchment-300/80">
                  <span className="font-bold text-van-gold-400 uppercase tracking-wider block mb-1">
                    Traditional Scriptural Context:
                  </span>
                  {item.traditionalContext}
                </div>
              )}
            </div>
          </div>

          {/* Devotional Intentions & Spiritual Orientation */}
          <div className="lg:col-span-5 rounded-2xl border border-van-gold-500/20 bg-van-charcoal-900/60 p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-xl font-serif font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-van-gold-400" />
              <span>Devotional Intentions</span>
            </h2>

            <p className="text-xs font-serif text-van-parchment-300/70 mb-4">
              Practitioners traditionally sit with these mental orientations to cultivate inner peace, steadfast courage, and sincere devotion:
            </p>

            <ul className="space-y-3">
              {item.devotionalIntention.map((intent, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm font-serif text-van-parchment-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-van-gold-400 mt-1.5 shrink-0" />
                  <span>{intent}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-van-gold-500/15 text-[11px] font-serif text-van-parchment-300/50 italic">
              * Mantra Van presents traditional texts as sacred heritage for contemplation. No supernatural or medical cures are implied.
            </div>
          </div>
        </section>

        {/* Sacred Verses, Transliteration & Meaning Section (For non-chalisa or complementary deep reading) */}
        {!isChalisa && (
          <section className="my-16">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-serif uppercase tracking-widest text-van-gold-400">
                Text & Meaning
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                Sacred Sanskrit Verses
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {item.verses.map((v, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-van-gold-500/20 bg-van-charcoal-900/60 p-6 sm:p-8 backdrop-blur-sm"
                >
                  {v.section && (
                    <span className="px-2.5 py-0.5 rounded-full bg-van-gold-500/15 text-van-gold-300 text-xs font-serif font-semibold mb-3 inline-block">
                      {v.section}
                    </span>
                  )}

                  {/* Devanagari */}
                  <div className="font-devanagari text-xl sm:text-2xl text-van-gold-300 space-y-1 mb-4 leading-relaxed">
                    {v.devanagari.map((l, li) => (
                      <p key={li}>{l}</p>
                    ))}
                  </div>

                  {/* Transliteration */}
                  {v.transliteration && (
                    <div className="text-xs sm:text-sm font-serif italic text-van-parchment-300/80 space-y-0.5 mb-4">
                      {v.transliteration.map((l, li) => (
                        <p key={li}>{l}</p>
                      ))}
                    </div>
                  )}

                  {/* Meaning */}
                  <div className="pt-4 border-t border-van-gold-500/15 text-xs sm:text-sm font-serif text-van-parchment-100 leading-relaxed">
                    <span className="font-bold text-van-gold-400 uppercase tracking-wider block mb-1">
                      Devotional Meaning:
                    </span>
                    {v.meaning}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* YouTube Cinematic Presentation Section */}
        {item.youtubeId && (
          <section id="video" className="my-16 max-w-4xl mx-auto">
            <div className="rounded-3xl border border-red-500/20 bg-van-charcoal-950/80 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-[10px] font-serif uppercase tracking-widest text-red-400 block">
                    Cinematic Forest Rendition
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {item.youtubeTitle || `Watch ${item.title}`}
                  </h3>
                </div>
                <a
                  href="https://www.youtube.com/@MANTRAVAN-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-serif text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>@MANTRAVAN-09</span>
                </a>
              </div>

              {/* Responsive Video Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#E0B84B]/20 bg-black shadow-2xl flex items-center justify-center">
                <div className="text-center p-6 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-500/40 mx-auto flex items-center justify-center shadow-diya">
                    <Video className="w-7 h-7 text-red-500" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white">
                    Mantra Van Official Channel (@MANTRAVAN-09)
                  </h4>
                  <p className="text-xs font-serif text-[#F0E1BC]/80 max-w-md mx-auto">
                    Experience this sacred jaap visualized with morning forest mist, sacred diya lamps, and acoustic temple resonance.
                  </p>
                  <div className="flex items-center justify-center gap-3 pt-1">
                    <a
                      href="https://www.youtube.com/@MANTRAVAN-09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C2410C] hover:bg-[#EA580C] text-white font-serif text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105"
                    >
                      <span>Watch On @MANTRAVAN-09</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.youtube.com/@MANTRAVAN-09?sub_confirmation=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-serif text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105"
                    >
                      <span>Subscribe</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Respectful Patronage Ad Slot */}
        <AdSenseSlot slotId={`ad-${item.slug}-bottom`} format="horizontal" />

        {/* Related Mantras & Chalisas */}
        {relatedItems.length > 0 && (
          <section className="my-16 pt-8 border-t border-van-gold-500/15">
            <div className="text-center max-w-md mx-auto mb-8">
              <span className="text-xs font-serif uppercase tracking-widest text-van-gold-400">
                Continue the Journey
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1">
                Related Sacred Teachings
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedItems.map((rel) => {
                if (!rel) return null;
                return (
                  <div
                    key={rel.id}
                    className="rounded-2xl border border-van-gold-500/20 bg-van-charcoal-900/60 p-5 hover:border-van-gold-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-wider px-2 py-0.5 rounded bg-van-gold-500/15 text-van-gold-300 border border-van-gold-500/20 mb-2 inline-block">
                        {rel.category}
                      </span>
                      <Link href={`/${rel.slug}`} className="block">
                        <h4 className="font-serif font-bold text-lg text-white group-hover:text-van-gold-300 transition-colors">
                          {rel.title}
                        </h4>
                      </Link>
                      <p className="text-xs font-devanagari text-van-gold-400 mt-0.5">
                        {rel.hindiTitle}
                      </p>
                      <p className="text-xs text-van-parchment-300/70 font-serif line-clamp-2 mt-2">
                        {rel.shortDescription}
                      </p>
                    </div>

                    <Link
                      href={`/${rel.slug}`}
                      className="mt-4 pt-3 border-t border-van-gold-500/10 text-xs font-serif text-van-gold-400 group-hover:text-van-gold-300 flex items-center justify-between"
                    >
                      <span>Explore Practice</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
