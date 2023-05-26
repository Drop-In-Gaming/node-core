import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import sassDts from 'vite-plugin-sass-dts'
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';


const pkg = require("./package.json");

// @ts-ignore
import path from 'path';

export default defineConfig({
    base: './',
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                exportType: 'named', jsxRuntime: 'automatic'
            }
        }),
        tsconfigPaths(),
        sassDts({
            global: {
                generate: true,
                outFile: path.resolve(__dirname, "./src/style.d.ts"),
            },
        }),
        dts({
            insertTypesEntry: true
        }),
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
                        file: `${path.resolve(__dirname, './src')}`
                    };
                }
            }
        },
        modules: {
            localsConvention: 'camelCase'
        }
    },
    build: {
        assetsDir: 'src/assets',
        sourcemap: true,
        minify: false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: '@drop-in-gaming/core',
            formats: ['es', 'umd', 'cjs'],
            fileName: (format) => format === 'es' ? `core.${format}.jsx` : `core.${format}.js`,
        },
        rollupOptions: {
            external: [
                ...Object.keys(pkg.peerDependencies)
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                    axios: 'axios',
                    'axios-cache-adapter': 'axios-cache-adapter',
                },
                minifyInternalExports: false
            },
        },
    }
});
