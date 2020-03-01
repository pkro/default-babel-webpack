const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
		// webpack-dev-server
		devServer: {
			contentBase: PATH_DIST,
			host: 'localhost',
			port: 8080,
			// When using the HTML5 History API (you'll probably do this with React
      		// later), index.html should be served in place of 404 responses.
			historyApiFallback: true,
			// full screen overlay in browser on error / warning
			overlay: {
				errors: true,
				warnings: true,
			}
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

			new CleanWebpackPlugin(),
		],
	}
	
};


