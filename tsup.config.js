// tsup.config.js
export default {
    entry: ["index.js", "components/**/*.js"],
    format: ["esm", "cjs"],
    dts: false,
    splitting: false,
    sourcemap: false,
    clean: true,
    loader: {
      ".js": "jsx",
    },
    esbuildOptions(options) {
      options.jsx = "automatic";
    },
  };
  