import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [mdx(), react(), keystatic()],
  output: 'hybrid',
  adapter: cloudflare(),
});
