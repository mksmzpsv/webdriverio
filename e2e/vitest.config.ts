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
                external: [
                    '@testing-library/svelte',
                    '@testing-library/jest-dom',
                    '@testing-library/user-event',
                    '@testing-library/react',
                    '@testing-library/preact'
                ]
            }
        }
    }
})
