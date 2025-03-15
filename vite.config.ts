import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "rcc-react-lib",
      fileName: "rcc-react-lib",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "next"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          next: "Next",
        },
      },
    },
  },
  // Allowing Link element on storybook
  define: {
    global: "window", 
    "process.env": {}, // Evita el error de `process is not defined`
  },
});
