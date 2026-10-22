import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import AdSenseSlot from "../../../components/AdSenseSlot";
import { getContentByCategory, getAllContent } from "../../../data/content";
import { CategoryType } from "../../../types/content";
import {
  Compass,
  BookOpen,
  Waves,
  Flame,
  Music,
  Mountain,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Image from "next/image";

interface CategoryPageProps {
  params: { category: string };
}

const CATEGORY_BACKGROUNDS: Record<string, string> = {
  mantra: "/images/mantra_mandir.jpg",
  jaap: "/images/jaap_sarovar.jpg",
  chalisa: "/images/chalisa_kutir.jpg",
  aarti: "/images/aarti_deep.jpg",
  bhajan: "/images/bhajan_van.jpg",
  meditation: "/images/dhyan_path.jpg",
};

const CATEGORY_META: Record<
  string,
  {
    title: string;
    hindiTitle: string;
    sanctuary: string;
    description: string;
    icon: React.ElementType;
  }
> = {
  mantra: {
    title: "Sacred Mantras",
    hindiTitle: "मंत्र मंदिर",
    sanctuary: "Mantra Mandir",
    description:
      "Vedic formulas and primordial vibrations carrying eternal wisdom for spiritual awakening, purification, and alignment.",
    icon: Compass,
  },
  jaap: {
    title: "108 Jaap Sādhanā",
    hindiTitle: "जाप सरोवर",
    sanctuary: "Jaap Sarovar",
    description:
      "Continuous meditative repetitions and 108 japa malas that calm the mind and awaken divine remembrance.",
    icon: Waves,
  },
  chalisa: {
    title: "Sacred Chalisas",
    hindiTitle: "चालीसा कुटीर",
    sanctuary: "Chalisa Kutir",
    description:
      "Timeless forty-verse devotional hymns preserved on royal parchment manuscripts with synchronized audio reading.",
    icon: BookOpen,
  },
  aarti: {
    title: "Devotional Aartis",
    hindiTitle: "आरती दीप",
    sanctuary: "Aarti Deep",
    description:
      "Joyful evening invocations waving the sacred ghee lamp in heartfelt gratitude and surrender to the Divine.",
    icon: Flame,
  },
  bhajan: {
    title: "Devotional Bhajans",
    hindiTitle: "भजन वन",
    sanctuary: "Bhajan Van",
    description:
      "Melodic expressions of love and praise celebrating divine forms across the forest clearings.",
    icon: Music,
  },
  meditation: {
    title: "Dhyan & Stillness",
    hindiTitle: "ध्यान पथ",
    sanctuary: "Dhyan Path",
    description:
      "Mountain trail meditations and silent contemplative vibrations leading from external noise to inner peace.",
    icon: Mountain,
  },
};

export async function generateStaticParams() {
  return [
    { category: "mantra" },
    { category: "jaap" },
    { category: "chalisa" },
    { category: "aarti" },
    { category: "bhajan" },
    { category: "meditation" },
  ];
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const meta = CATEGORY_META[params.category];
  if (!meta) return { title: "Category | Mantra Van" };

  return {
    title: `${meta.title} (${meta.hindiTitle}) | Mantra Van`,
    description: meta.description,
    alternates: {
      canonical: `https://mantravan.in/category/${params.category}`,
    },
    openGraph: {
      title: `${meta.title} — ${meta.sanctuary} | Mantra Van`,
      description: meta.description,
      url: `https://mantravan.in/category/${params.category}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const meta = CATEGORY_META[params.category];
  if (!meta) notFound();

  const items = getContentByCategory(params.category);
  const Icon = meta.icon;

  const bgImage = CATEGORY_BACKGROUNDS[params.category] || "/images/forest_entrance.jpg";

  return (
    <div className="min-h-screen bg-[#020B07] text-[#EDEBE8] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Category Hero with Photorealistic Vista */}
        <div className="relative rounded-3xl border border-[#E0B84B]/30 overflow-hidden shadow-2xl p-8 sm:p-14 mb-12 text-center">
          <div className="absolute inset-0">
            <Image
              src={bgImage}
              alt={meta.title}
              fill
              priority
              className="object-cover object-center filter brightness-[0.45] contrast-[1.1]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020B07]/95 via-[#03170F]/65 to-[#020B07]/90 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#03170F]/90 border border-[#E0B84B]/40 mx-auto flex items-center justify-center text-[#E0B84B] mb-6 shadow-diya">
              <Icon className="w-8 h-8" />
            </div>

            <span className="text-xs font-serif uppercase tracking-[0.25em] text-[#E0B84B] block mb-2">
              {meta.sanctuary}
            </span>

            <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white mb-3 drop-shadow-md">
              {meta.title}
            </h1>

            <p className="font-devanagari text-2xl text-[#E0B84B] mb-4 font-normal">
              {meta.hindiTitle}
            </p>

            <p className="text-sm sm:text-base font-serif text-[#F0E1BC]/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              {meta.description}
            </p>
          </div>
        </div>

        {/* AdSlot */}
        <AdSenseSlot slotId={`ad-category-${params.category}`} format="horizontal" />

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-van-gold-500/20 bg-van-charcoal-900/80 p-6 flex flex-col justify-between hover:border-van-gold-500/40 transition-all hover:-translate-y-1 group shadow-mystic"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-van-gold-500/15 border border-van-gold-500/20 text-van-gold-300 text-[10px] font-serif uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs font-serif text-van-gold-400/80">
                    {item.deityLabel}
                  </span>
                </div>

                <Link href={`/${item.slug}`} className="block">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-van-gold-300 transition-colors">
                    {item.title}
                  </h3>
                </Link>

                <p className="text-sm font-devanagari text-van-gold-400 mt-1 mb-3">
                  {item.hindiTitle}
                </p>

                <p className="text-xs text-van-parchment-200/75 font-serif line-clamp-3 leading-relaxed mb-4">
                  {item.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-van-gold-500/15 flex items-center justify-between">
                <Link
                  href={`/${item.slug}`}
                  className="text-xs font-serif text-van-gold-400 hover:text-van-gold-300 flex items-center gap-1 group-hover:underline"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Enter Practice</span>
                </Link>

                <Link
                  href={`/${item.slug}`}
                  className="p-1.5 rounded-full bg-van-gold-500/10 text-van-gold-400 group-hover:bg-van-gold-500 group-hover:text-van-charcoal-950 transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
