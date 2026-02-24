"use client";

import Image, { StaticImageData } from "next/image";
import AnimateInView from "./AnimateInView";
import HomeScreen from "@/assets/app-screens/Home.png";
import TransactionsScreen from "@/assets/app-screens/Transactions.png";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const RecurringScreen: StaticImageData = require("@/assets/app-screens/Recurring- Subscriptions.png");

const screens = [
  {
    image: TransactionsScreen,
    alt: "FI-532 Transactions screen",
    title: "Every transaction, accounted for",
    desc: "Log income, expenses, and transfers instantly. Filter by date, category, or type. Your spending story told clearly.",
    color: "#facc15",
    rotate: "-3deg",
    yOffset: "20px",
  },
  {
    image: HomeScreen,
    alt: "FI-532 Home dashboard",
    title: "Your 50/30/20 dashboard",
    desc: "See your needs, wants, and savings at a glance. Watch the budget meter move as you spend — in real time.",
    color: "#14b8a6",
    rotate: "0deg",
    yOffset: "0px",
  },
  {
    image: RecurringScreen,
    alt: "FI-532 Recurring bills & subscriptions",
    title: "Never miss a bill again",
    desc: "All recurring expenses in one place — rent, subscriptions, utilities. Mark as paid, auto-create transactions.",
    color: "#10b981",
    rotate: "3deg",
    yOffset: "20px",
  },
];

export default function AppShowcase() {
  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#0c0a09" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <AnimateInView type="up" delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{
                borderColor: "rgb(20 184 166 / 0.3)",
                backgroundColor: "rgb(20 184 166 / 0.08)",
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#2dd4bf" }}>
                The App
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight leading-tight mb-4"
              style={{ color: "#fafaf9" }}
            >
              Every dollar.{" "}
              <span style={{ color: "#14b8a6" }}>Every decision.</span>
              <br />
              In one place.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#78716c" }}>
              FI-532 brings your entire financial picture into a single,
              beautifully designed workspace.
            </p>
          </div>
        </AnimateInView>

        {/* Phone screens — staggered layout */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-4 lg:gap-8 mb-16">
          {screens.map((screen, i) => (
            <AnimateInView
              key={screen.alt}
              type={i === 0 ? "left" : i === 2 ? "right" : "up"}
              delay={i * 120}
              className={i === 1 ? "z-10 md:-mx-2" : ""}
            >
              <PhoneCard
                image={screen.image}
                alt={screen.alt}
                color={screen.color}
                rotate={screen.rotate}
                yOffset={screen.yOffset}
                featured={i === 1}
              />
            </AnimateInView>
          ))}
        </div>

        {/* Captions row */}
        <div className="grid md:grid-cols-3 gap-6">
          {screens.map((screen, i) => (
            <AnimateInView key={screen.title} type="up" delay={200 + i * 80}>
              <div className="text-center px-2">
                <div
                  className="w-2 h-2 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: screen.color }}
                />
                <h3
                  className="font-display font-bold text-base mb-2"
                  style={{ color: "#e7e5e4" }}
                >
                  {screen.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#57534e" }}>
                  {screen.desc}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneCard({
  image,
  alt,
  color,
  rotate,
  yOffset,
  featured,
}: {
  image: StaticImageData;
  alt: string;
  color: string;
  rotate: string;
  yOffset: string;
  featured?: boolean;
}) {
  const width = featured ? "clamp(200px, 24vw, 280px)" : "clamp(165px, 20vw, 240px)";

  return (
    <div
      className={featured ? "animate-float" : "animate-float-b"}
      style={{
        transform: `rotate(${rotate}) translateY(${yOffset})`,
        transformOrigin: "bottom center",
      }}
    >
      {/* Glow */}
      <div
        className="absolute -inset-6 rounded-[3.5rem] blur-2xl opacity-25"
        style={{ backgroundColor: color }}
      />

      {/* Phone chassis */}
      <div
        className="relative rounded-[2.8rem] border shadow-2xl"
        style={{
          backgroundColor: "#0c0a09",
          borderColor: "rgb(255 255 255 / 0.09)",
          padding: "9px",
          width,
          boxShadow: `0 32px 80px -16px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)`,
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full z-20"
          style={{
            top: "15px",
            width: "76px",
            height: "24px",
            backgroundColor: "#0c0a09",
          }}
        />

        {/* Screen */}
        <div className="rounded-[2.2rem] overflow-hidden">
          <Image
            src={image}
            alt={alt}
            className="w-full h-auto block"
          />
        </div>

        {/* Accent color bar at bottom */}
        <div
          className="absolute bottom-0 left-1/4 right-1/4 h-[2px] rounded-b-full"
          style={{ backgroundColor: color, opacity: 0.6 }}
        />
      </div>
    </div>
  );
}
