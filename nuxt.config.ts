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

  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  modules: ["@nuxt/test-utils/module"],
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