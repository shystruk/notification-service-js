const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PATHS = {
	src: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build')
}

const common = {
	entry: {
		'notification-service-module': `${PATHS.src}/notification-service-module.js`,
		'notification-service': `${PATHS.src}/notification-service.js`
	},
	resolve: {
		extensions: ['.js']
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
				include: PATHS.src
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				sourceMap: false
			})
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
}

module.exports = common
