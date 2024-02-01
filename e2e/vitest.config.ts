/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        testTimeout: 1000 * 60 * 3,
        include: ['./e2e/**/*.test.ts'],
        hookTimeout: 60 * 1000,
        threads: false,
        // deps: {
        //     optimizer: {
        //         ssr: {
        //             enabled: true,
        //             include: [
        //                 '@testing-library/preact',
        //                 '@testing-library/svelte'
        //             ],
        //         },
        //     }
        // },
        testTransformMode: {
            web: ['./e2e/pr-eact.test.ts', './e2e/svelte.test.ts']
        }
    }
})
