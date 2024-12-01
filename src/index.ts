import { Linter } from 'eslint'
import eslint from '@eslint/js'
import nodePlugin from 'eslint-plugin-n'
// @ts-expect-error The package has no types.
import importPlugin from 'eslint-plugin-import'
// @ts-expect-error The package has no types.
import promisePlugin from 'eslint-plugin-promise'
import stylisticPlugin from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'
import { RULES } from './rules.js'

export { Linter }

export const recommended: Linter.Config = {
  name: 'opendreamnet/eslint-config',

  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },

    globals: {
      document: 'readonly',
      navigator: 'readonly',
      window: 'readonly',
    },
  },

  rules: RULES,
}

export const config = tseslint.config(
  {
    ignores: ['node_modules/**'],
  },
  eslint.configs.recommended,
  nodePlugin.configs['flat/recommended'],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  importPlugin.flatConfigs.recommended,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  promisePlugin.configs['flat/recommended'],
  stylisticPlugin.configs['recommended-flat'],
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  recommended,
)

export default config
