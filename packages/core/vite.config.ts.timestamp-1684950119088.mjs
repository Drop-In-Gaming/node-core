var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// package.json
var require_package = __commonJS({
  "package.json"(exports, module) {
    module.exports = {
      name: "@drop-in-gaming/core",
      repository: {
        type: "git",
        url: "https://github.com/drop-in-gaming/node-core.git"
      },
      version: "0.2.7",
      type: "module",
      description: "A component library for getting people started with easy to re-use components for everyday projects.",
      main: "dist/index.cjs.js",
      module: "dist/index.es.js",
      typings: "dist/index.d.ts",
      files: [
        "dist"
      ],
      exports: {
        ".": {
          import: "./dist/core.es.jsx",
          require: "./dist/core.umd.js"
        }
      },
      sass: {
        includePaths: [
          "./node_modules",
          "../../node_modules"
        ]
      },
      scripts: {
        build: "rm -rf dist/ && npm run build:css && npm run build:index && npm run build:esm && vite build",
        watch: "npm run build:css && npm run build:index && npm run build:esm && vite build --watch",
        "build:index": "npx barrelsby -d ./src --delete --exclude '(jestHoc|\\.test|\\.d).tsx?$' --exportDefault --verbose",
        "build:esm": "tsc --module es6 --declaration --emitDeclarationOnly --declarationDir dist/",
        "build:cjs": "tsc --module CommonJS --outDir dist/cjs",
        "build:css": "sass  ./src:./src && tcm src",
        githooks: "git config core.hooksPath .githooks && chmod +x .githooks/*"
      },
      author: "Drop-In Gaming",
      license: "LICENSE",
      devDependencies: {
        "@aws-sdk/client-translate": "^3.303.0",
        "@babel/core": "7.21.4",
        "@drop-in-gaming/barrelsby": "^0.0.2",
        "@fortawesome/fontawesome-free": "^6.1.2",
        "@fortawesome/fontawesome-svg-core": "^6.1.2",
        "@fortawesome/free-solid-svg-icons": "^6.1.2",
        "@fortawesome/react-fontawesome": "^0.2.0",
        "@jest/globals": "^29.5.0",
        "@storybook/addon-a11y": "6.5.0-alpha.50",
        "@storybook/addon-actions": "6.5.0-alpha.50",
        "@storybook/addon-docs": "^7.0.12",
        "@storybook/addon-essentials": "^7.0.12",
        "@storybook/addon-links": "6.5.0-alpha.50",
        "@storybook/react": "^7.0.12",
        "@testing-library/react": "^14.0.0",
        "@types/node": "^18.15.11",
        "@types/react": "^18.0.32",
        "@types/react-dom": "^18.0.11",
        "@types/styled-components": "5.1.24",
        "@vitejs/plugin-react": "1.2.0",
        "acorn-jsx": "5.3.2",
        axios: "^1.4.0",
        "axios-cache-adapter": "^2.7.3",
        "babel-loader": "8.2.4",
        bootstrap: "5.2.3",
        classnames: "^2.3.2",
        "dangerously-set-html-content": "^1.0.9",
        deepmerge: "^4.2.2",
        dropzone: "^5.7.1",
        history: "^5.3.0",
        json: "11.0.0",
        "moment-timezone": "^0.5.43",
        "php-serialized-data": "^0.6.1",
        qs: "^6.11.1",
        react: "^18.2.0",
        "react-datetime": "^3.2.0",
        "react-dom": "^18.2.0",
        "react-loading-skeleton": "^3.2.0",
        "react-outside-click-handler": "^1.3.0",
        "react-router-dom": "^6.10.0",
        "react-toastify": "^9.1.2",
        sass: "^1.62.1",
        "sass-loader": "^13.2.2",
        "storybook-builder-vite": "^0.0.2",
        "ts-css-modules-vite-plugin": "^1.0.20",
        "typed-css-modules": "^0.7.2",
        typescript: "^5.0.3",
        vite: "4.2.1",
        "vite-plugin-dts": "2.2.0",
        "vite-plugin-sass-dts": "^1.3.2",
        "vite-plugin-svgr": "^2.4.0",
        "vite-tsconfig-paths": "^4.0.8",
        webpack: "^5.82.1",
        prettier: "^2.8.8",
        "stream-http": "^3.2.0"
      },
      peerDependencies: {
        axios: "^1.3.4",
        "axios-cache-adapter": "^2.7.3",
        bootstrap: "^5.2.3",
        "canvas-nest.js": "^2.0.4",
        "moment-timezone": "^0.5.43",
        qs: "^6.11.1",
        react: "^18.2.0",
        "react-dom": "^18.2.0"
      },
      dependencies: {}
    };
  }
});

// vite.config.ts
import react from "file:///Users/richardmiles/IdeaProjects/node-core/node_modules/@vitejs/plugin-react/dist/index.js";
import svgr from "file:///Users/richardmiles/IdeaProjects/node-core/node_modules/vite-plugin-svgr/dist/index.mjs";
import { defineConfig } from "file:///Users/richardmiles/IdeaProjects/node-core/node_modules/vite/dist/node/index.js";
import sassDts from "file:///Users/richardmiles/IdeaProjects/node-core/node_modules/vite-plugin-sass-dts/dist/index.js";
import dts from "file:///Users/richardmiles/IdeaProjects/node-core/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///Users/richardmiles/IdeaProjects/node-core/node_modules/vite-tsconfig-paths/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/richardmiles/IdeaProjects/node-core/packages/core";
var pkg = require_package();
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "named",
        jsxRuntime: "automatic"
      }
    }),
    tsconfigPaths(),
    sassDts({
      global: {
        generate: true,
        outFile: path.resolve(__vite_injected_original_dirname, "./src/style.d.ts")
      }
    }),
    dts({
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: [
      /// { find: '@', replacement: path.resolve(__dirname, 'src') },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        importer(...args) {
          return {
            file: `${path.resolve(__vite_injected_original_dirname, "./src")}`
          };
        }
      }
    },
    modules: {
      localsConvention: "camelCase"
    }
  },
  build: {
    assetsDir: "src/assets",
    sourcemap: true,
    minify: false,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "@drop-in-gaming/core",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => format === "es" ? `core.${format}.jsx` : `core.${format}.js`
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.peerDependencies)
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
          axios: "axios",
          "axios-cache-adapter": "axios-cache-adapter"
        },
        minifyInternalExports: false
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZS5qc29uIiwgInZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG4gICAgXCJuYW1lXCI6IFwiQGRyb3AtaW4tZ2FtaW5nL2NvcmVcIixcbiAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZHJvcC1pbi1nYW1pbmcvbm9kZS1jb3JlLmdpdFwiXG4gICAgfSxcbiAgICBcInZlcnNpb25cIjogXCIwLjIuN1wiLFxuICAgIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIGNvbXBvbmVudCBsaWJyYXJ5IGZvciBnZXR0aW5nIHBlb3BsZSBzdGFydGVkIHdpdGggZWFzeSB0byByZS11c2UgY29tcG9uZW50cyBmb3IgZXZlcnlkYXkgcHJvamVjdHMuXCIsXG4gICAgXCJtYWluXCI6IFwiZGlzdC9pbmRleC5janMuanNcIixcbiAgICBcIm1vZHVsZVwiOiBcImRpc3QvaW5kZXguZXMuanNcIixcbiAgICBcInR5cGluZ3NcIjogXCJkaXN0L2luZGV4LmQudHNcIixcbiAgICBcImZpbGVzXCI6IFtcbiAgICAgICAgXCJkaXN0XCJcbiAgICBdLFxuICAgIFwiZXhwb3J0c1wiOiB7XG4gICAgICAgIFwiLlwiOiB7XG4gICAgICAgICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9jb3JlLmVzLmpzeFwiLFxuICAgICAgICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L2NvcmUudW1kLmpzXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJzYXNzXCI6IHtcbiAgICAgICAgXCJpbmNsdWRlUGF0aHNcIjogW1xuICAgICAgICAgICAgXCIuL25vZGVfbW9kdWxlc1wiLFxuICAgICAgICAgICAgXCIuLi8uLi9ub2RlX21vZHVsZXNcIlxuICAgICAgICBdXG4gICAgfSxcbiAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICBcImJ1aWxkXCI6IFwicm0gLXJmIGRpc3QvICYmIG5wbSBydW4gYnVpbGQ6Y3NzICYmIG5wbSBydW4gYnVpbGQ6aW5kZXggJiYgbnBtIHJ1biBidWlsZDplc20gJiYgdml0ZSBidWlsZFwiLFxuICAgICAgICBcIndhdGNoXCI6IFwibnBtIHJ1biBidWlsZDpjc3MgJiYgbnBtIHJ1biBidWlsZDppbmRleCAmJiBucG0gcnVuIGJ1aWxkOmVzbSAmJiB2aXRlIGJ1aWxkIC0td2F0Y2hcIixcbiAgICAgICAgXCJidWlsZDppbmRleFwiOiBcIm5weCBiYXJyZWxzYnkgLWQgLi9zcmMgLS1kZWxldGUgLS1leGNsdWRlICcoamVzdEhvY3xcXFxcLnRlc3R8XFxcXC5kKS50c3g/JCcgLS1leHBvcnREZWZhdWx0IC0tdmVyYm9zZVwiLFxuICAgICAgICBcImJ1aWxkOmVzbVwiOiBcInRzYyAtLW1vZHVsZSBlczYgLS1kZWNsYXJhdGlvbiAtLWVtaXREZWNsYXJhdGlvbk9ubHkgLS1kZWNsYXJhdGlvbkRpciBkaXN0L1wiLFxuICAgICAgICBcImJ1aWxkOmNqc1wiOiBcInRzYyAtLW1vZHVsZSBDb21tb25KUyAtLW91dERpciBkaXN0L2Nqc1wiLFxuICAgICAgICBcImJ1aWxkOmNzc1wiOiBcInNhc3MgIC4vc3JjOi4vc3JjICYmIHRjbSBzcmNcIixcbiAgICAgICAgXCJnaXRob29rc1wiOiBcImdpdCBjb25maWcgY29yZS5ob29rc1BhdGggLmdpdGhvb2tzICYmIGNobW9kICt4IC5naXRob29rcy8qXCJcbiAgICB9LFxuICAgIFwiYXV0aG9yXCI6IFwiRHJvcC1JbiBHYW1pbmdcIixcbiAgICBcImxpY2Vuc2VcIjogXCJMSUNFTlNFXCIsXG4gICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICBcIkBhd3Mtc2RrL2NsaWVudC10cmFuc2xhdGVcIjogXCJeMy4zMDMuMFwiLFxuICAgICAgICBcIkBiYWJlbC9jb3JlXCI6IFwiNy4yMS40XCIsXG4gICAgICAgIFwiQGRyb3AtaW4tZ2FtaW5nL2JhcnJlbHNieVwiOiBcIl4wLjAuMlwiLFxuICAgICAgICBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlXCI6IFwiXjYuMS4yXCIsXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI6IFwiXjYuMS4yXCIsXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI6IFwiXjYuMS4yXCIsXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI6IFwiXjAuMi4wXCIsXG4gICAgICAgIFwiQGplc3QvZ2xvYmFsc1wiOiBcIl4yOS41LjBcIixcbiAgICAgICAgXCJAc3Rvcnlib29rL2FkZG9uLWExMXlcIjogXCI2LjUuMC1hbHBoYS41MFwiLFxuICAgICAgICBcIkBzdG9yeWJvb2svYWRkb24tYWN0aW9uc1wiOiBcIjYuNS4wLWFscGhhLjUwXCIsXG4gICAgICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1kb2NzXCI6IFwiXjcuMC4xMlwiLFxuICAgICAgICBcIkBzdG9yeWJvb2svYWRkb24tZXNzZW50aWFsc1wiOiBcIl43LjAuMTJcIixcbiAgICAgICAgXCJAc3Rvcnlib29rL2FkZG9uLWxpbmtzXCI6IFwiNi41LjAtYWxwaGEuNTBcIixcbiAgICAgICAgXCJAc3Rvcnlib29rL3JlYWN0XCI6IFwiXjcuMC4xMlwiLFxuICAgICAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvcmVhY3RcIjogXCJeMTQuMC4wXCIsXG4gICAgICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMTguMTUuMTFcIixcbiAgICAgICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMC4zMlwiLFxuICAgICAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMC4xMVwiLFxuICAgICAgICBcIkB0eXBlcy9zdHlsZWQtY29tcG9uZW50c1wiOiBcIjUuMS4yNFwiLFxuICAgICAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiMS4yLjBcIixcbiAgICAgICAgXCJhY29ybi1qc3hcIjogXCI1LjMuMlwiLFxuICAgICAgICBcImF4aW9zXCI6IFwiXjEuNC4wXCIsXG4gICAgICAgIFwiYXhpb3MtY2FjaGUtYWRhcHRlclwiOiBcIl4yLjcuM1wiLFxuICAgICAgICBcImJhYmVsLWxvYWRlclwiOiBcIjguMi40XCIsXG4gICAgICAgIFwiYm9vdHN0cmFwXCI6IFwiNS4yLjNcIixcbiAgICAgICAgXCJjbGFzc25hbWVzXCI6IFwiXjIuMy4yXCIsXG4gICAgICAgIFwiZGFuZ2Vyb3VzbHktc2V0LWh0bWwtY29udGVudFwiOiBcIl4xLjAuOVwiLFxuICAgICAgICBcImRlZXBtZXJnZVwiOiBcIl40LjIuMlwiLFxuICAgICAgICBcImRyb3B6b25lXCI6IFwiXjUuNy4xXCIsXG4gICAgICAgIFwiaGlzdG9yeVwiOiBcIl41LjMuMFwiLFxuICAgICAgICBcImpzb25cIjogXCIxMS4wLjBcIixcbiAgICAgICAgXCJtb21lbnQtdGltZXpvbmVcIjogXCJeMC41LjQzXCIsXG4gICAgICAgIFwicGhwLXNlcmlhbGl6ZWQtZGF0YVwiOiBcIl4wLjYuMVwiLFxuICAgICAgICBcInFzXCI6IFwiXjYuMTEuMVwiLFxuICAgICAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgICAgICBcInJlYWN0LWRhdGV0aW1lXCI6IFwiXjMuMi4wXCIsXG4gICAgICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgICAgICBcInJlYWN0LWxvYWRpbmctc2tlbGV0b25cIjogXCJeMy4yLjBcIixcbiAgICAgICAgXCJyZWFjdC1vdXRzaWRlLWNsaWNrLWhhbmRsZXJcIjogXCJeMS4zLjBcIixcbiAgICAgICAgXCJyZWFjdC1yb3V0ZXItZG9tXCI6IFwiXjYuMTAuMFwiLFxuICAgICAgICBcInJlYWN0LXRvYXN0aWZ5XCI6IFwiXjkuMS4yXCIsXG4gICAgICAgIFwic2Fzc1wiOiBcIl4xLjYyLjFcIixcbiAgICAgICAgXCJzYXNzLWxvYWRlclwiOiBcIl4xMy4yLjJcIixcbiAgICAgICAgXCJzdG9yeWJvb2stYnVpbGRlci12aXRlXCI6IFwiXjAuMC4yXCIsXG4gICAgICAgIFwidHMtY3NzLW1vZHVsZXMtdml0ZS1wbHVnaW5cIjogXCJeMS4wLjIwXCIsXG4gICAgICAgIFwidHlwZWQtY3NzLW1vZHVsZXNcIjogXCJeMC43LjJcIixcbiAgICAgICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMC4zXCIsXG4gICAgICAgIFwidml0ZVwiOiBcIjQuMi4xXCIsXG4gICAgICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiMi4yLjBcIixcbiAgICAgICAgXCJ2aXRlLXBsdWdpbi1zYXNzLWR0c1wiOiBcIl4xLjMuMlwiLFxuICAgICAgICBcInZpdGUtcGx1Z2luLXN2Z3JcIjogXCJeMi40LjBcIixcbiAgICAgICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI6IFwiXjQuMC44XCIsXG4gICAgICAgIFwid2VicGFja1wiOiBcIl41LjgyLjFcIixcbiAgICAgICAgXCJwcmV0dGllclwiOiBcIl4yLjguOFwiLFxuICAgICAgICBcInN0cmVhbS1odHRwXCI6IFwiXjMuMi4wXCJcbiAgICB9LFxuICAgIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgICAgIFwiYXhpb3NcIjogXCJeMS4zLjRcIixcbiAgICAgICAgXCJheGlvcy1jYWNoZS1hZGFwdGVyXCI6IFwiXjIuNy4zXCIsXG4gICAgICAgIFwiYm9vdHN0cmFwXCI6IFwiXjUuMi4zXCIsXG4gICAgICAgIFwiY2FudmFzLW5lc3QuanNcIjogXCJeMi4wLjRcIixcbiAgICAgICAgXCJtb21lbnQtdGltZXpvbmVcIjogXCJeMC41LjQzXCIsXG4gICAgICAgIFwicXNcIjogXCJeNi4xMS4xXCIsXG4gICAgICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiXG4gICAgfSxcbiAgICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgfVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcmljaGFyZG1pbGVzL0lkZWFQcm9qZWN0cy9ub2RlLWNvcmUvcGFja2FnZXMvY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3JpY2hhcmRtaWxlcy9JZGVhUHJvamVjdHMvbm9kZS1jb3JlL3BhY2thZ2VzL2NvcmUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3JpY2hhcmRtaWxlcy9JZGVhUHJvamVjdHMvbm9kZS1jb3JlL3BhY2thZ2VzL2NvcmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzYXNzRHRzIGZyb20gJ3ZpdGUtcGx1Z2luLXNhc3MtZHRzJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5cblxuY29uc3QgcGtnID0gcmVxdWlyZShcIi4vcGFja2FnZS5qc29uXCIpO1xuXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHJlYWN0KCksXG4gICAgICAgIHN2Z3Ioe1xuICAgICAgICAgICAgc3Znck9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBleHBvcnRUeXBlOiAnbmFtZWQnLCBqc3hSdW50aW1lOiAnYXV0b21hdGljJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdHNjb25maWdQYXRocygpLFxuICAgICAgICBzYXNzRHRzKHtcbiAgICAgICAgICAgIGdsb2JhbDoge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG91dEZpbGU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvc3R5bGUuZC50c1wiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBkdHMoe1xuICAgICAgICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZVxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IFtcbiAgICAgICAgICAgIC8vLyB7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAgICAgc2Nzczoge1xuICAgICAgICAgICAgICAgIGltcG9ydGVyKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpfWBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZXM6IHtcbiAgICAgICAgICAgIGxvY2Fsc0NvbnZlbnRpb246ICdjYW1lbENhc2UnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIGFzc2V0c0RpcjogJ3NyYy9hc3NldHMnLFxuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAgIG1pbmlmeTogZmFsc2UsXG4gICAgICAgIGxpYjoge1xuICAgICAgICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgICAgICAgIG5hbWU6ICdAZHJvcC1pbi1nYW1pbmcvY29yZScsXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCcsICdjanMnXSxcbiAgICAgICAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBmb3JtYXQgPT09ICdlcycgPyBgY29yZS4ke2Zvcm1hdH0uanN4YCA6IGBjb3JlLiR7Zm9ybWF0fS5qc2AsXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMocGtnLnBlZXJEZXBlbmRlbmNpZXMpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZWQtY29tcG9uZW50cyc6ICdzdHlsZWQnLFxuICAgICAgICAgICAgICAgICAgICBheGlvczogJ2F4aW9zJyxcbiAgICAgICAgICAgICAgICAgICAgJ2F4aW9zLWNhY2hlLWFkYXB0ZXInOiAnYXhpb3MtY2FjaGUtYWRhcHRlcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtaW5pZnlJbnRlcm5hbEV4cG9ydHM6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSSxNQUFRO0FBQUEsTUFDUixZQUFjO0FBQUEsUUFDVixNQUFRO0FBQUEsUUFDUixLQUFPO0FBQUEsTUFDWDtBQUFBLE1BQ0EsU0FBVztBQUFBLE1BQ1gsTUFBUTtBQUFBLE1BQ1IsYUFBZTtBQUFBLE1BQ2YsTUFBUTtB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
