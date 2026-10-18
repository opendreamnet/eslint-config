import type { TSESLint } from '@typescript-eslint/utils'
import { ESLint } from 'eslint'
import { defineConfig as defineEslintConfig } from 'eslint/config'

import js from '@eslint/js'
import pluginPromise from 'eslint-plugin-promise'
import { importX } from 'eslint-plugin-import-x'
import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'
import unicorn from 'eslint-plugin-unicorn'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'
import { RULES } from './rules.js'

export { RULES }

type ConfigWithExtendsArray = Parameters<typeof defineEslintConfig>

/**
Default list of files to include
*/
export const INCLUDE_LIST = ['**/*.{js,ts,vue}']

/**
List of files that must be ignored globally
*/
export const GLOBAL_IGNORE_LIST = [
  'eslint.config.js',
  'eslint.config.ts',
  '*.min.*',
  '*.d.ts',
  'CHANGELOG.md',
  'dist/**',
  'LICENSE*',
  'output/**',
  'coverage/**',
  'temp/**',
  'build/**',
  '.yalc/**',
  'pnpm-lock.yaml',
  'yarn.lock',
  'package-lock.json',
  'node_modules/**',
]

/**
Default set of plugins to apply to the config
*/
export const PLUGINS_LIST: Record<string, ESLint.Plugin> = {
  unicorn,
  stylistic,
  js,
}

export const RULES_VUE: TSESLint.FlatConfig.Rules = {
  'unicorn/no-null': 'off',
}

export function defineConfig(...configs: ConfigWithExtendsArray) {
  return defineEslintConfig(
    { ignores: GLOBAL_IGNORE_LIST },

    {
      name: 'Plugins list',
      plugins: { ...PLUGINS_LIST },
    },

    js.configs.recommended,

    {
      name: 'typescript-eslint',
      extends: [
        tseslint.configs.strictTypeChecked,
        tseslint.configs.stylisticTypeChecked,
      ],
      languageOptions: {
        parserOptions: {
          projectService: true,
        },
      },
    },

    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,

    unicorn.configs.recommended,

    pluginVue.configs['flat/recommended'],
    // @ts-expect-error Unknown package error
    pluginPromise.configs['flat/recommended'],

    {
      name: 'opendreamnet/eslint-config',
      files: INCLUDE_LIST,
      rules: RULES,
    },

    {
      name: 'opendreamnet/eslint-config',
      files: ['**/*.vue'],
      rules: RULES_VUE,
    },

    ...configs,

    eslintPluginPrettierRecommended
  )
}
