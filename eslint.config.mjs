import { dirname } from "path"
import { fileURLToPath } from "url"
import checkFile from "eslint-plugin-check-file"
import nextConfig from "eslint-config-next/core-web-vitals"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  ...nextConfig,

  // ─── General rules (all JS / TS files) ───────────────────────────────────
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "check-file": checkFile,
    },
    rules: {
      // File and folder naming rules
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/components/**/*": "PASCAL_CASE",
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/app/**/": "NEXT_JS_APP_ROUTER_CASE",
          "src/!(app)/**/": "KEBAB_CASE",
        },
      ],

      // Formatting rules
      semi: ["error", "never"],
      quotes: ["error", "double"],

      // Enforce camelCase for variables/properties
      camelcase: ["error", { properties: "always" }],

      // PascalCase for constructors and React components
      "new-cap": ["error", { newIsCap: true }],

      // Block console.log; allow warn and error
      "no-console": ["error", { allow: ["warn", "error"] }],

      // Error on unused variables and imports (ignores those starting with an underscore)
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Enforce absolute imports — no cross-feature relative imports
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../*"],
              message:
                "Avoid relative imports across features, use @/... instead.",
            },
          ],
        },
      ],
    },
  },
]

export default eslintConfig
