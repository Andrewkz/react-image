module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    _: true,
    $: true,
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-find-dom-node': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'react/no-children-prop': 'off',
    'space-before-function-paren': 0,
  },
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       '@typescript-eslint/explicit-module-boundary-types': 'off'
  //     }
  //     // files: '**/*.ts',
  //     // extends: [
  //     //   'eslint-config-airbnb',
  //     //   'plugin:@typescript-eslint/recommended',
  //     // ],
  //   }
  // ]
}
