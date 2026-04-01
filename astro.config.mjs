// @ts-check
import { defineConfig, fontProviders } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Anton',
      cssVariable: '--font-anton',
      weights: ['400'],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Times New Roman',
      cssVariable: '--font-times',
      weights: ['400'],
      styles: ['normal'],
      subsets: ['latin'],
    }
  ]
});
