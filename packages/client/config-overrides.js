/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addWebpackAlias, addBabelPlugin } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@emotion/core': '@emotion/react',
    '@emotion/styled': '@emotion/styled-base',
    '@': path.resolve(__dirname, 'src'),
  }),
  addBabelPlugin('@emotion/babel-plugin'),
);

module.exports.jest = {
  configure: {
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  },
};
