import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://meihanliu01.github.io",
  base: "/", // ✅ 现在是根域名
  vite: { plugins: [tailwindcss()] },
});
