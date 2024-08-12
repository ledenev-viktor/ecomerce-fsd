/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
