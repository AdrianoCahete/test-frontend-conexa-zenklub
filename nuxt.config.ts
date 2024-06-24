export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/root.scss" as *;',
        },
      },
    },
  },

  fonts: {
    families: [{ name: "Quicksand", provider: "google" }], // https://fonts.google.com/specimen/Quicksand?preview.text=Professional%20Name
  },

  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  modules: [
    "@nuxt/test-utils/module",
    "nuxt-svgo",
    "@nuxt/fonts",
    "dayjs-nuxt",
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  experimental: {
    viewTransition: true,
  },
});
