/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        testTimeout: 1000 * 60 * 3,
        include: ['./e2e/**/*.test.{ts, js, tsx}'],
        hookTimeout: 60 * 1000,
        threads: false,
        // testTransformMode: {
        //     web: ['./e2e/browser-runner/*.test.{ts, js, tsx}']
        // }
    }
})
