// // https://nextjs.org/docs/basic-features/eslint#lint-staged

// import path from "path";

// const buildEslintCommand = (filenames) =>
// 	`"eslint --fix" ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

// export default {
// 	"*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}": [buildEslintCommand],
// 	"*.*": "prettier --write --ignore-unknown",
// };
// .lintstagedrc.js
import path from "path";

const buildEslintCommand = (filenames) =>
	`eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

export default {
	"**/*.{js,jsx,ts,tsx}": [buildEslintCommand],
	"**/*.{json,md,css,scss,html}": ["prettier --write"],
};
