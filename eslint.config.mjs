import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Next.js core web vitals (via FlatCompat bridge)
  ...compat.extends("next/core-web-vitals"),

  // ─── General rules (all JS / TS files) ───────────────────────────────────
  {
    rules: {
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
