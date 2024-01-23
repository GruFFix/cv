module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    "plugin:eslint-comments/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'eslint-comments/no-unused-disable': 'warn',
    '@shopify/jsx-prefer-fragment-wrappers': 'off',
    '@shopify/images-no-direct-imports': 'off',
    '@shopify/jsx-no-complex-expressions': 'off',
    '@shopify/jsx-no-hardcoded-content': 'off',
    '@shopify/prefer-early-return': 'off',
    '@shopify/prefer-module-scope-constants': 'off',
    '@shopify/strict-component-boundaries': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    'no-unused-expressions': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'id-length': 'off',
    'import/no-mutable-exports': 'off',
    'import/order': 'off',
    'no-process-env': 'off',
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-negated-condition': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-irregular-whitespace': 'off',
    'prefer-const': 'off',
    'react/button-has-type': 'error',
    'react/jsx-child-element-spacing': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@shopify/react-hooks-strict-return': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],
    'jsx-a11y/no-autofocus': 'off',
    'no-nested-ternary': 'off',
    'react/display-name': 'off',
    'line-comment-position': 'off',
    'react/jsx-pascal-case': 'off',
    'lines-around-comment': 'off',
    'react/no-unescaped-entities': 'off',
    'dot-notation': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-warning-comments': 'warn'
  },
}

