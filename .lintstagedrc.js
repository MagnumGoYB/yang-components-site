const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  "*": "pnpm pretty",
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}