module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  extends: ['plugin:prettier/recommended', 'prettier',"plugin:node/recommended","eslint:recommended"],
  plugins: ['prettier'],
  rules: {}
}
