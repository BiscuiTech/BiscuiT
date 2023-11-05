const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssNesting = require('postcss-nesting');

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
	plugins: [
		//Some plugins, like postcss-nested, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer(),
		!dev && cssnano({
			preset: "default",
		}),
		postcssNesting(/* pluginOptions */)
	],
};

module.exports = config;
