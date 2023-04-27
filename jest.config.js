module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/build/'],
    globals: {
      'ts-jest': {
        tsconfig: {
          jsx: 'react-jsx',
        },
      },
    },
    setupFilesAfterEnv: ['./src/setupTests.ts'], // Add this line
  };
  