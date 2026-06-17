const path = require("path");
const { globSync } = require("glob");
const compareVersions = require("compare-versions");

module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.mjs/,
			include: /node_modules/,
			type: "javascript/auto",
		});
		return config;
	},

	// Next.js config
	async redirects() {
		return [
			{
				source: "/case-studies/:slug*",
				destination: "/products/case-studies/:slug*",
				permanent: true,
			},
			{
				source: "/company/docs",
				destination: "/company/docs/overview/about-us",
				permanent: true,
			},
			{
				source: "/company/docs/tests/:slug*",
				destination: "/company",
				permanent: true,
			},
			{
				source: "/docs/company/palette-composition/the-scales",
				destination: "/company/docs/palette-composition/scales",
				permanent: true,
			},
			{
				source: "/docs/company/getting-started/:slug*",
				destination: "/company/docs/overview/:slug*",
				permanent: true,
			},
			{
				source: "/docs/company/:slug*",
				destination: "/company/docs/:slug*",
				permanent: true,
			},
			{
				source: "/developer/docs",
				destination: "/developer/docs/overview/installation",
				permanent: true,
			},
			{
				source: "/developer/docs/tests/:slug*",
				destination: "/developer",
				permanent: true,
			},
			{
				source: "/docs/developer/palette-composition/the-scales",
				destination: "/developer/docs/palette-composition/scales",
				permanent: true,
			},
			{
				source: "/docs/developer/getting-started/:slug*",
				destination: "/developer/docs/overview/:slug*",
				permanent: true,
			},
			{
				source: "/docs/developer/:slug*",
				destination: "/developer/docs/:slug*",
				permanent: true,
			},
			{
				source: "/docs/products",
				destination: "/products/docs/overview/introduction",
				permanent: false,
			},
			{
				source: "/docs/products/utilities/aspect-ratio/:slug*",
				destination: "/products/docs/components/aspect-ratio",
				permanent: true,
			},
			{
				source: "/docs/products/utilities/label/:slug*",
				destination: "/products/docs/components/label",
				permanent: true,
			},
			{
				source: "/products/docs/components/:slug/:version",
				destination: "/products/docs/components/:slug",
				permanent: true,
			},
			{
				source: "/products/docs/utilities/:slug/:version",
				destination: "/products/docs/utilities/:slug",
				permanent: true,
			},
			{
				source: "/docs/products/:slug*",
				destination: "/products/docs/:slug*",
				permanent: true,
			},
			{
				source: "/products/docs",
				destination: "/products/docs/overview/introduction",
				permanent: false,
			},
			{
				source: "/research",
				destination: "/",
				permanent: false,
			},
			{
				source: "/research/docs",
				destination: "/research/docs/overview/getting-started",
				permanent: false,
			},
		];
	},
};
