// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // base: "/time-tracking-dashboard",
  site: "https://brunagoncalves.github.io",
  integrations: [tailwind(), sitemap()],
});
