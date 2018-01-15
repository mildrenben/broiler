const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const constants = require('./constants.js')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	entry: {
		poly: 'babel-polyfill',
		app: path.join(constants.SRC, 'app.js'),
		// Example of code splitting out major dependencies (see line 24-26 also)
		vendor: [
			'react',
			'react-dom',
			'react-router-dom',
			'prop-types',
			'styled-components'
		]
	},
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		})
	],
	output: {
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|svg|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 80,
							},
							optipng: {
								optimizationLevel: 4,
							},
							pngquant: {
								quality: '60-80',
								speed: 8
							},
							gifsicle: {
								optimizationLevel: 2
							}
						}
					}
				]
			}
		]
	}
})