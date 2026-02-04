// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://encresa.github.io',
    base: '/aura-website',
    output: 'static',
    build: {
        assets: '_assets'
    }
});
