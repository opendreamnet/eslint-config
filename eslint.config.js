import config from './dist/index.mjs'

export default [
  ...config,
  {
    ignores: ['dist/**']
  }
]
