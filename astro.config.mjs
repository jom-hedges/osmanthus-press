import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), mdx(), sitemap(), db()],
  output: "server",
  adapter: vercel({
    webAnalytics: {enabled: true }
  })
});