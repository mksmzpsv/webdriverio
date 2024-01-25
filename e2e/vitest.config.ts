/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        testTimeout: 1000 * 60 * 3,
        include: ['./e2e/**/*.test.ts'],
        hookTimeout: 60 * 1000,
        threads: false,
        server: {
            deps: {
                cacheDir: 'node_modules/.vite-test'
            }
        },
        deps: {
            optimizer: {
                web: {
                    exclude: [
                        '@testing-library/preact',
                        '@testing-library/svelte'
                    ],
                },
                ssr: {
                    exclude: [
                        '@testing-library/preact',
                        '@testing-library/svelte'
                    ],
                },
            }
        }
    }
})
