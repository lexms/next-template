// Documentation for this file: https://prettier.io/en/configuration.html
module.exports = {
  // We use a larger print width because Prettier's word-wrapping seems to be tuned
  // for plain JavaScript without type annotations
  printWidth: 100,

  // Use .gitattributes to manage newlines
  endOfLine: 'auto',

  // Use single quotes instead of double quotes
  singleQuote: true,

  // For ES5, trailing commas cannot be used in function parameters; it is counterintuitive
  // to use them for arrays only
  trailingComma: 'none',
  plugins: [
    'prettier-plugin-packagejson',
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  importOrder: [
    '^(^react$|@react|react|@reduxjs)',
    '^@mui/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]'
  ],
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
