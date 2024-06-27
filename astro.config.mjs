import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), mdx(), sitemap()],
  output: "server",
  adapter: vercel({
    webAnalytics: {enabled: true }
  })
});
