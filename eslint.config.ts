// import reactHooks from 'eslint-plugin-react-hooks';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import * as tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint, { configs } from 'typescript-eslint';

export default [
  ...tseslint.config(
    eslint.configs.recommended,
    configs.recommended,
    configs.stylistic,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    reactPlugin.configs.flat.recommended,
    // reactHooks.configs['recommended-latest'],
    jsxA11y.flatConfigs.recommended,
    reactRefresh.configs.vite,
    {
      plugins: {
        '@stylistic': stylistic,
        // 'react-hooks': reactHooks,
      },

      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
          project: [
            './tsconfig.json',
            './packages/*/tsconfig.json',
          ],
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        // 'comma-style': ['error', 'last'],
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/eol-last': ['error', 'always'],
        '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
        'global-require': 0,
        'import/order': ['error', {
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        }],

        'import/prefer-default-export': 0,
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
        'arrow-body-style': ['error', 'as-needed'],
        '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
        '@stylistic/multiline-ternary': ['error', 'always'],
        '@stylistic/newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
        '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
        '@stylistic/no-tabs': ['error'],
        'no-var': 2,
        'no-undef': 2,
        'object-curly-spacing': ['error', 'always'],
        '@stylistic/quotes': ['error', 'single'],
        // 'react-hooks/exhaustive-deps': 'warn',
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/jsx-quotes': ['error', 'prefer-single'],
        'react/function-component-definition': 0,
        'react/jsx-filename-extension': [
          1,
          {
            'extensions': [
              '.tsx',
              '.ts',
            ],
          },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 0,

      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
        },
        react: {
          version: 'detect',
        },
        'import/resolver': {
          typescript: {
            project: [
              './tsconfig.json',
              './packages/*/tsconfig.json',
              './services/*/tsconfig.json',
              './apps/*/tsconfig.json',
            ],
          },
        },
      },
    },
  ),
  {
    ignores: ['**/dist/*', '**/node_modules/*', '**/.tmp/*'],
  },
];
