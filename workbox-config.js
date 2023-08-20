module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,png,jpg,PNG,xml,ico,svg,webmanifest,css,js,txt,json}'
	],
	swDest: '_site/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};