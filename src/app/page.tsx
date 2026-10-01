import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Problems from "@/components/Problems";
import Method from "@/components/Method";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    // Dark "negro + verde" canvas — mirrors the app's dark theme and store screenshots
    <div className="theme-night overflow-x-clip bg-night text-white">
      <Navbar />
      <main>
        {/* 1. Hook — the one number, real app screens, download CTA */}
        <Hero />

        {/* 2. Reassure — objections answered at a glance */}
        <ProofStrip />

        {/* 3. Agitate → Resolve — 3 household money problems */}
        <Problems />

        {/* 4. Educate — the 50/30/20 rule with a live split calculator */}
        <Method />

        {/* 5. Demonstrate — feature bento with real screens */}
        <Features />

        {/* 6. Guide — 3 steps to get started */}
        <HowItWorks />

        {/* 7. Trust — households using the app */}
        <Testimonials />

        {/* 8. Convert — pricing tiers */}
        <Pricing />

        {/* 9. Unblock — FAQ */}
        <Faq />

        {/* 10. Close — final download CTA */}
        <CTA />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
