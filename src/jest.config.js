module.exports = {
  cache: false,
  preset: 'jest-preset-angular',
  globals: {
    '__TRANSFORM_HTML__': true
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js'
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
    '.html'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/.jest/setup-jest.ts',
  setupFiles: ['<rootDir>/.jest/setup-require-context.js'],
  transformIgnorePatterns: [
    'node_modules'
  ]
};
