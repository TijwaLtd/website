import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports"; // ✅ Import the plugin

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Reuse Next.js recommended settings
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add rules directly
  {
    plugins: {
      "unused-imports": eslintPluginUnusedImports,
    },
    rules: {
      // Remove unused imports
      "unused-imports/no-unused-imports": "error",

      // Warn about unused variables, ignoring those starting with "_"
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Disable the default TypeScript unused vars rule to avoid conflict
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  // Ignore generated/build folders
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
