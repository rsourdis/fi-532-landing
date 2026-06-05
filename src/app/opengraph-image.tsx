import { ImageResponse } from "next/og";

export const alt = "FI-532 — Household Budget for Couples & Families";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social share card. Next also reuses this for the Twitter card.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse 90% 70% at 15% 0%, #0d3b2e 0%, #0a0a0a 60%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #28c08e 0%, #0a6f4d 100%)",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            FI
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-1px" }}>
            FI-532
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: 900,
            }}
          >
            <span>The 50/30/20 budget rule,&nbsp;</span>
            <span style={{ color: "#28c08e" }}>automated.</span>
          </div>
          <div style={{ fontSize: 30, color: "#a8a29e", maxWidth: 820 }}>
            Household budgeting for couples, families & roommates — track shared
            expenses, split costs, and save more every month.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 26,
            color: "#d6d3d1",
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            <span style={{ color: "#28c08e", fontWeight: 700 }}>50% Needs</span>
            <span style={{ color: "#facc15", fontWeight: 700 }}>30% Wants</span>
            <span style={{ color: "#10b981", fontWeight: 700 }}>20% Savings</span>
          </div>
          <div style={{ color: "#78716c" }}>•</div>
          <div>Free on iOS</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
