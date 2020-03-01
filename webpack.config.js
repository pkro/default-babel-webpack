const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_SOURCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = env => {
	const environment = env.environment;
	const isProduction = environment === 'production';
	const isDevelopment = environment === 'development';

	return {
		mode: environment,
		entry: [
			path.join(PATH_SOURCE, './index.js'),
		],
		output: {
			path: PATH_DIST,
			filename: 'js/[name].[hash].js',
		},
	
		module: {
			rules: [
				{
					test: /\.js$/, // apply this rule to all js files
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', {
									debug: true, // output targets / plugins when compiling
									useBuiltIns: 'usage', // only load polyfills when necessary
									corejs: 3, // must match installed version in package.json
									// targets: "" //(already done in package.json)
								}]
							]
						}
					}
				}
			]
		},
		plugins: [
			// This plugin will generate an HTML5 file that imports all our Webpack
      		// bundles using <script> tags. The file will be placed in `output.path`.
      		// https://github.com/jantimon/html-webpack-plugin
			new HtmlWebpackPlugin({
				template: path.join(PATH_SOURCE, './index.html'),
			}),
		],
	}
	
};


