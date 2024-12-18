module.exports = {
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.[jt]sx?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};