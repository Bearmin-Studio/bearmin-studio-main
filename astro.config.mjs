// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bearmin.jp',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        if (url === 'https://bearmin.jp') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (url.endsWith('/services') || url.endsWith('/contact')) {
          item.priority = 0.9;
        } else if (url.endsWith('/cases') || url.endsWith('/faq')) {
          item.priority = 0.8;
        } else if (url.includes('/news/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else if (url.endsWith('/privacy') || url.endsWith('/about')) {
          item.priority = 0.5;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
