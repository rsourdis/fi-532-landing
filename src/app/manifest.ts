import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Household Budget for Couples`,
    short_name: SITE_NAME,
    description:
      "Automate the 50/30/20 budget rule and manage shared household finances with your partner, family, or roommates.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#28c08e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
