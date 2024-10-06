import { defineConfig } from '@solidjs/start/config';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  ssr: false,
  vite: {
    plugins: [mdx()],
  },
});
