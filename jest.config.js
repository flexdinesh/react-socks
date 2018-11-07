module.exports = {
  coverageReporters: [
    'json',
    'lcov',
    'text-summary'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'scss'
  ],
  modulePaths: [
    './src'
  ],
  setupFiles: [
    '<rootDir>/config/jest/setup.js'
  ],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
  ]
}