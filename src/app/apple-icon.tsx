import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Branded "FI" monogram — matches the teal mark used across the site.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12c77a",
          color: "white",
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: "-2px",
        }}
      >
        FI
      </div>
    ),
    { ...size },
  );
}
