module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
