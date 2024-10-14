// eslint-disable-next-line n/no-extraneous-import
import type { TSESLint } from '@typescript-eslint/utils'

export const RULES: TSESLint.FlatConfig.Rules = {
  'import/order': [
    'error',
    {
      groups: [
        'type',
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
      ],
    },
  ],
  'import/first': [
    'error',
  ],
  'import/no-absolute-path': [
    'error',
    {
      esmodule: true,
      commonjs: true,
      amd: false,
    },
  ],
  'import/no-webpack-loader-syntax': [
    'error',
  ],
  'n/handle-callback-err': [
    'error',
    '^(err|error)$',
  ],
  'n/no-callback-literal': [
    'error',
  ],
  'n/no-new-require': [
    'error',
  ],
  'n/no-path-concat': [
    'error',
  ],
  '@stylistic/func-call-spacing': [
    'error',
    'never',
  ],
  '@stylistic/generator-star-spacing': [
    'error',
    {
      before: true,
      after: true,
    },
  ],
  '@stylistic/object-curly-newline': [
    'error',
    {
      multiline: true,
      consistent: true,
    },
  ],
  '@stylistic/object-property-newline': [
    'error',
    {
      allowMultiplePropertiesPerLine: true,
      allowAllPropertiesOnSameLine: false,
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
  ],
  '@typescript-eslint/method-signature-style': [
    'error',
  ],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variableLike',
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
      format: [
        'camelCase',
        'PascalCase',
        'UPPER_CASE',
      ],
    },
  ],
  '@typescript-eslint/prefer-readonly': [
    'error',
  ],
  '@typescript-eslint/promise-function-async': [
    'error',
  ],
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    {
      ignoreStringArrays: true,
    },
  ],
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {
      allowString: false,
      allowNumber: false,
      allowNullableObject: false,
      allowNullableBoolean: false,
      allowNullableString: false,
      allowNullableNumber: false,
      allowAny: false,
    },
  ],

  'object-shorthand': [
    'error',
    'properties',
  ],
  'array-callback-return': [
    'error',
    {
      allowImplicit: false,
      checkForEach: false,
      allowVoid: false,
    },
  ],
  'camelcase': [
    'error',
    {
      allow: [
        '^UNSAFE_',
      ],
      properties: 'never',
    },
  ],
  'curly': [
    'error',
    'multi-line',
  ],
  'default-case-last': [
    'error',
  ],
  'eqeqeq': [
    'error',
    'always',
    {
      null: 'never',
    },
  ],
  'new-cap': [
    'error',
    {
      newIsCap: true,
      capIsNew: false,
      properties: true,
    },
  ],
  'no-caller': [
    'error',
  ],
  'no-eval': [
    'error',
  ],
  'no-extend-native': [
    'error',
  ],
  'no-extra-bind': [
    'error',
  ],
  'no-iterator': [
    'error',
  ],
  'no-labels': [
    'error',
  ],
  'no-lone-blocks': [
    'error',
  ],
  'no-multi-str': [
    'error',
  ],
  'no-new': [
    'error',
  ],
  'no-new-func': [
    'error',
  ],
  'no-new-wrappers': [
    'error',
  ],
  'no-octal-escape': [
    'error',
  ],
  'no-proto': [
    'error',
  ],
  'no-return-assign': [
    'error',
    'except-parens',
  ],
  'no-self-compare': [
    'error',
  ],
  'no-sequences': [
    'error',
  ],
  'no-template-curly-in-string': [
    'error',
  ],
  'no-undef-init': [
    'error',
  ],
  'no-unmodified-loop-condition': [
    'error',
  ],
  'no-unneeded-ternary': [
    'error',
    {
      defaultAssignment: false,
    },
  ],
  'no-nested-ternary': [
    'error',
  ],
  'no-unreachable-loop': [
    'error',
  ],
  'no-useless-call': [
    'error',
  ],
  'no-useless-computed-key': [
    'error',
  ],
  'no-useless-rename': [
    'error',
  ],
  'no-useless-return': [
    'error',
  ],
  'no-void': [
    'error',
  ],
  'one-var': [
    'error',
    {
      initialized: 'never',
    },
  ],
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],
  'symbol-description': [
    'error',
  ],
  'unicode-bom': [
    'error',
    'never',
  ],
  'yoda': [
    'error',
    'never',
  ],
}
