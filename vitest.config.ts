import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";
import { resolve } from "path";
import { configDefaults, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';


export default mergeConfig(
    viteConfig,
    defineConfig({
        plugins: [
        Components({
            resolvers: [
              AntDesignVueResolver({
                importStyle: false,
              }),
            ],
          }),
        ],
        test: {
            environment: "jsdom",
            deps: {
                fallbackCJS: true,
                interopDefault: true,
            },
            alias: {
                "@/": `${resolve(__dirname, "src")}/`,
                "&/": `${resolve(__dirname, "tests")}/`,
            },
            globals: true,
            exclude: [...configDefaults.exclude, "e2e/*"],
            root: fileURLToPath(new URL("./", import.meta.url)),
            transformMode: {
                web: [/\.[jt]sx$/],
            },
            coverage: {
                include: ["src/**/*.{ts,vue}"],
                exclude: [
                    "src/models/**/*.ts",
                    "src/main.js",
                    "src/App.vue",
                ],
                reporter: ["html", "lcov"],
                all: true,
                lines: 10,
                statements: 10,
            },
            outputFile: "./reports/junit.xml",
        },
     })
);
