import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mantra Van",
  description: "Privacy Policy and data practices for Mantra Van (mantravan.in).",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-van-green-950 text-[#edebe8] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="font-serif text-xs text-van-gold-400 uppercase tracking-widest">
            Last Updated: January 2026 • Mantra Van (mantravan.in)
          </p>
        </div>

        <div className="rounded-3xl border border-van-gold-500/20 bg-van-charcoal-900/80 p-8 sm:p-12 space-y-6 font-serif leading-relaxed text-sm text-van-parchment-200/90 shadow-2xl backdrop-blur-md">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">1. Introduction & Sanctuary Commitment</h2>
            <p>
              At Mantra Van (accessible at <strong className="text-van-gold-300">mantravan.in</strong>), we deeply value your spiritual quietude and privacy. This Privacy Policy documents the types of information collected and recorded by Mantra Van and how we use it.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">2. Log Files</h2>
            <p>
              Mantra Van follows standard web logging procedures. These log files collect internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and anonymous analytics. None of this data is linked to personally identifiable information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">3. Cookies & Web Beacons</h2>
            <p>
              Like any modern website, Mantra Van uses &lsquo;cookies&rsquo; to store preferences, such as keeping track of whether you have entered the forest or your audio preferences. These cookies optimize your browsing experience by tailoring content.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">4. Google AdSense & Third-Party Vendors</h2>
            <p>
              Google is one of our third-party vendors. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to mantravan.in and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the official Google Ad Settings URL.
            </p>
            <p>
              Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on Mantra Van. They automatically receive your IP address when this occurs. Mantra Van has no access to or control over these cookies used by third-party advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">5. Children&apos;s Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. Mantra Van is a family-friendly spiritual platform and does not knowingly collect any Personal Identifiable Information from children under the age of 13.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-white">6. Consent & Contact</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you have additional questions or require more information, do not hesitate to contact us at <strong className="text-van-gold-300">contact@mantravan.in</strong>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
