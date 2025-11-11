// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';


// https://astro.build/config
export default defineConfig({
  site: "https://superchillmarketing.com",
  integrations: [alpinejs()],
  server: {
    port: 3001,
    allowedHosts: true
  }
});