const path = require('path');

const PATH_SOURCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = {
	mode: 'development',
	entry: [
		path.join(PATH_SOURCE, './index.js'),
	],
	output: {
		path: PATH_DIST,
		filename: 'js/[name].[hash].js',
	},
};
