// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://encresa.com',
    output: 'static',
    build: {
        assets: '_assets'
    }
});
