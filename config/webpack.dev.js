const path = require('path')
const webpack = require('webpack')
const constants = require('./constants.js')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	entry: [
		'react-hot-loader/patch',
		'babel-polyfill',
		path.join(constants.SRC, 'app.js'),
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|svg|gif)$/i,
				use: [
					'file-loader',
				]
			}
		]
	},
	output: {
		filename: '[name].js',
	},
	devtool: 'inline-source-map',
	// This is required for React Router. For production, or any other server,
	// you'll need to configure it to work with React Router
	// See here for more details: https://github.com/ReactTraining/react-router/blob/v1.0.3/docs/guides/basics/Histories.md#histories
	devServer: {
		historyApiFallback: true,
		contentBase: '../dist',
		hot: true
	}
})