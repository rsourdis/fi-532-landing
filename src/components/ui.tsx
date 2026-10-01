import Image, { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { Headline, StatCallout } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

/** Headline with one verde-accented fragment (same pattern as the App Store screenshots). */
export function HeadlineText({
  value,
  emClassName = "text-teal-500",
}: {
  value: Headline;
  emClassName?: string;
}) {
  return (
    <>
      {value.pre}
      <span className={emClassName}>{value.em}</span>
      {value.post}
    </>
  );
}

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-teal-500",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * iPhone chassis around a raw app capture. Radii and bezel scale with the
 * phone's width (cqw), so set the width on this component via className.
 */
export function Phone({
  src,
  alt,
  className,
  sizes = "320px",
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("@container", className)}>
      <div
        className="rounded-[15.3cqw] bg-[#0d0d0d] p-[2.45cqw] ring-1 ring-white/10"
        style={{ boxShadow: "0 40px 90px -20px rgba(0,0,0,0.6)" }}
      >
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full rounded-[13cqw]"
        />
      </div>
    </div>
  );
}

const CALLOUT_BASE =
  "rounded-[20px] bg-white text-ink shadow-[0_18px_50px_rgba(0,0,0,0.35)]";

/** White label / value / sub-line card floating over a phone. */
export function StatCard({
  value,
  className,
}: {
  value: StatCallout;
  className?: string;
}) {
  return (
    <div className={cn(CALLOUT_BASE, "px-5 py-4 text-left", className)}>
      <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0a7a4a]">
        {value.k}
      </div>
      <div className="font-display text-[26px] font-black leading-tight tracking-tight whitespace-nowrap">
        {value.v}
      </div>
      {value.s && (
        <div className="mt-0.5 text-xs font-bold text-[#0a7a4a] whitespace-nowrap">
          {value.s}
        </div>
      )}
    </div>
  );
}

/** Speech-bubble quote card (voice / assistant). */
export function QuoteCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        CALLOUT_BASE,
        "rounded-bl-md px-5 py-4 text-left text-[17px] font-extrabold leading-snug",
        className,
      )}
    >
      {children}
    </div>
  );
}
