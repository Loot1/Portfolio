// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://louissachy.fr",
  output: 'static',
  integrations: [mdx(), sitemap(), tailwind(), icon({ iconDir : 'src/assets/icons' })],
});