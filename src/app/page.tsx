import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Strategy from "@/components/Strategy";
import AppShowcase from "@/components/AppShowcase";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hook — Dark hero with 50/30/20 anchor + real app screenshot */}
        <Hero />

        {/* 2. Educate — The 50/30/20 method, explained visually */}
        <Strategy />

        {/* 3. Demonstrate — Real app screens showing the method in action */}
        <AppShowcase />

        {/* 4. Inform — Full feature breakdown */}
        <Features />

        {/* 5. Guide — How to get started in 4 steps */}
        <HowItWorks />

        {/* 6. Trust — Social proof from real users */}
        <Testimonials />

        {/* 7. Convert — Pricing tiers */}
        <Pricing />

        {/* 8. Close — Final download CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
