import { defineConfig } from "vite";
import kontra from "rollup-plugin-kontra";
import path from "path";

export default defineConfig({
  server: {
    port: 5174,
  },
  plugins: [
    kontra({
      gameObject: {
        group: true,
        ttl: true,
        velocity: true,
      },
      vector: {
        angle: true,
        distance: true,
        normalize: true,
        scale: true,
        subtract: true,
      },
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      toplevel: true,
      compress: {
        passes: 2,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_math: true,
      },
      mangle: { properties: { keep_quoted: false } },
      module: true,
    },
    assetsInlineLimit: 0,
    modulePreload: {
      polyfill: false,
    },
    reportCompressedSize: false,
  },
});
