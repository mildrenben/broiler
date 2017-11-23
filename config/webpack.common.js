const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const constants = require('./constants.js')

module.exports = {
	plugins: [
		new CleanWebpackPlugin(
			['dist'],
			{ root: path.resolve(__dirname, '..') }
		),
		new HtmlWebpackPlugin({ 
			template: path.join(constants.SRC, 'index.html')
		}),
		new webpack.NamedModulesPlugin()
	],
	output: {
		path: constants.DIST,
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			}
		]
	},
	// This is so you can import files without their extensions
	resolve: {
		extensions: ['.js', '.jsx']
	}
}