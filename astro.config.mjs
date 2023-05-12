import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pragnamos-club.github.io',
  base: '/pragnamos-club.github.io',
  integrations: [tailwind()]
});