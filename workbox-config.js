module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,png,jpg,PNG,xml,ico,svg,webmanifest,css,js,txt,json}'
	],
	swDest: '_site/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	runtimeCaching: [
		{
		  urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
		  handler: 'CacheFirst',
		  options: {
			cacheName: 'images-cache',
		  },
		},
		{
		  urlPattern: /\.(?:css|js|webmanifest)$/,
		  handler: 'CacheFirst',
		  options: {
			cacheName: 'static-cache',
		  },
		},
		{
		  urlPattern: /\.(?:html)$/,
		  handler: 'NetworkFirst',
		  options: {
			cacheName: 'html-cache',
		  },
		},
		{
		  urlPattern: /\.(?:xml|txt|json)$/,
		  handler: 'NetworkOnly',
		},
	  ],	
};