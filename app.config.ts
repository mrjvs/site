import { defineConfig } from '@solidjs/start/config';
import solidMarkedPlugin from 'unplugin-solid-marked';

export default defineConfig({
  ssr: false,
  vite: {
    plugins: [solidMarkedPlugin.vite({})],
  },
});
