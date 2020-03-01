const presets = [
	["@babel/preset-env", {
		debug: true, // output targets / plugins when compiling
		useBuiltIns: 'usage', // load polyfills if used by src
		corejs: 3, // must mage versin in package.json
	}],
];

const plugins = [];

module.exports = {presets, plugins};

