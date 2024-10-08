// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details
// Check also: https://github.com/lint-staged/lint-staged#examples

const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
