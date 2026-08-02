import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

const googleFonts = fontProviders.google();

export default defineConfig({
  site: "https://anthonydavalos.github.io",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  fonts: [
    {
      provider: googleFonts,
      name: "Roboto",
      cssVariable: "--font-roboto",
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin"],
      formats: ["woff2"],
      display: "swap",
      fallbacks: ["Arial", "sans-serif"],
    },
    {
      provider: googleFonts,
      name: "Poppins",
      cssVariable: "--font-poppins",
      weights: [600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      formats: ["woff2"],
      display: "swap",
      fallbacks: ["Arial", "sans-serif"],
    },
    {
      provider: googleFonts,
      name: "Raleway",
      cssVariable: "--font-raleway",
      weights: [600],
      styles: ["normal"],
      subsets: ["latin"],
      formats: ["woff2"],
      display: "swap",
      fallbacks: ["Arial", "sans-serif"],
    },
  ],
});
