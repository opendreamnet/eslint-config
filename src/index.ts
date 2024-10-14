import { Linter } from 'eslint'
import eslint from '@eslint/js'
import nodePlugin from 'eslint-plugin-n'
// @ts-ignore
import importPlugin from 'eslint-plugin-import'
// @ts-ignore
import promisePlugin from 'eslint-plugin-promise'
import stylisticPlugin from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'
import { RULES } from './rules.js'

export const recommended = {
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
} satisfies Linter.Config

export const config = tseslint.config(
  {
    ignores: ['node_modules/**']
  },
  eslint.configs.recommended,
  nodePlugin.configs['flat/recommended'],
  importPlugin.flatConfigs.recommended,
  promisePlugin.configs['flat/recommended'],
  stylisticPlugin.configs['recommended-flat'],
  recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
)

export default config
