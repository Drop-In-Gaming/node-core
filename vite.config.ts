import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import sassDts from 'vite-plugin-sass-dts'
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

const path = require('path');


export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                // svgr options
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
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: '@drop-in-gaming/core',
            formats: ['es', 'umd', 'cjs'],
            fileName: (format) => `core.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled'
                }
            }
        }
    }
});
