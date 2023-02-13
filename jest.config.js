module.exports = {
  preset: 'ts-jest',
  setupFiles: [
    "<rootDir>/config/setupTests.js"
  ],
  roots: [
    "<rootDir>/src"
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.svg$": "<rootDir>/config/svgTransform.js",
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(!shared-ui-components)"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.svg": "<rootDir>/config/svgTransform.js"
  },
  collectCoverageFrom: [
    "src/**/**/**/*.component.tsx"
  ],
  collectCoverage: true,
  coverageReporters: ["cobertura", "text-summary", "lcov", "html"],
  coverageDirectory: '<rootDir>/coverage/',
  reporters: ["jest-junit", "default"]
}
