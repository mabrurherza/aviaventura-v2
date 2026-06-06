// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

import node from '@astrojs/node';

import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

export default defineConfig({
  integrations: [sanity({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: "2025-01-28",
    studioBasePath: '/studio'
  }), react()],

  adapter: node({ mode: "standalone" }),

  vite: {
    plugins: [tailwindcss()],
  },
});