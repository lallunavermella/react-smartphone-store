module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
    {
      files: ['src/redux/*.js'],
      rules: { 'no-param-reassign': ['error', { props: false }] },
    },
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx',
      ],
      env: {
        'jest/globals': true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
  },
};
