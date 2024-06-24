import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    exclude: ["**/playright/**", "**/node_modules/**"],
  },
});
