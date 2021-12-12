module.exports = {
  clearMocks: true,
  collectCoverage: ['<rootdir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
