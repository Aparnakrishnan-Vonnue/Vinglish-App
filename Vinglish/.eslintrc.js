module.exports = {
  root: true,
  extends: '@react-native',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
};
