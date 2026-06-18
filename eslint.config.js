import { defineConfig } from "eslint/config";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginNoUnsanitized from "eslint-plugin-no-unsanitized";
import pluginVitest from "@vitest/eslint-plugin";
import pluginTestingLibrary from "eslint-plugin-testing-library";
import pluginJestDom from "eslint-plugin-jest-dom";

export default defineConfig(
  {
    files: ["**/*.@(ts|tsx)"],
    plugins: {
      tseslint,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    extends: [tseslint.configs.recommendedTypeChecked],
    rules: {
      "@typescript-eslint/no-deprecated": "error",
    },
  },
  {
    files: ["**/*.@(js|jsx|ts|tsx)"],
    plugins: {
      js: pluginJs,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "no-unsanitized": pluginNoUnsanitized,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      pluginJs.configs.recommended,
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat["jsx-runtime"],
      pluginReactHooks.configs.flat["recommended-latest"],
      pluginJsxA11y.flatConfigs.recommended,
      pluginNoUnsanitized.configs.recommended,
    ],
  },
  {
    files: ["**/*.@(test|spec).*"],
    plugins: {
      vitest: pluginVitest,
      pluginTestingLibrary,
      pluginJestDom,
    },
    extends: [
      pluginVitest.configs.recommended,
      pluginTestingLibrary.configs["flat/react"],
      pluginJestDom.configs["flat/recommended"],
    ],
  }
);
