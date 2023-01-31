module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testRunner: "jest-jasmine2",
  testURL: "http://localhost",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  verbose: false,
};
