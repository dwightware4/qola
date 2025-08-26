// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import arrow from 'eslint-plugin-prefer-arrow-functions'

export default antfu(
  {
    react: true,
    formatters: true,
    typescript: true,
    stylistic: true,
  },
  {
    rules: {
      'n/prefer-global/process': ['error', 'always'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'antfu/top-level-function': 'off',
      'prefer-arrow-functions/prefer-arrow-functions': ['warn'],
      'unused-imports/no-unused-vars': 'warn',
      'no-console': 'warn',
    },
    plugins: { 'prefer-arrow-functions': arrow },
  },
)
