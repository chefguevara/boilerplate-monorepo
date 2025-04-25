//eslint-plugin-import.d.ts
declare module 'eslint-plugin-import' {
  export const flatConfigs: {
    recommended: {
      rules: {
        'import/first': 'error',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/exports-last': 'error',
        'import/no-duplicates': 'error',
        'import/no-named-as-default': 'error',
        'import/no-unresolved': [
          'error',
          { commonjs: true, caseSensitive: true },
        ],
      },
    };
    typescript: {
      rules: {
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/export': 'off',
        'import/exports-last': 'off'
      };
    },
  };
}
