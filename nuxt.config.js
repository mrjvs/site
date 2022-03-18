export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Jelle van Snik",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A showcase of Jelle van Snik's work both professionally and personally.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.about.png",
        hid: "icon",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["plugins/vue-scrollactive"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/svg",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // tailwind
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },

  // 404 handling
  generate: {
    fallback: true,
  },

  // nuxt content
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-night-owl.css",
      },
    },
  },
};
