export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFiles: ['<rootDir>/src/tests/mocks.js'],
};
