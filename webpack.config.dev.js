var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin')
var BabiliPlugin = require('babili-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

export default {
  devtool: 'inline-source-map',
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    vendor: ['mithril', 'redux-immutable-state-invariant', 'redux',
             'redux-thunk', 'babel-polyfill', 'ramda', 'validate.js']
  },
  target: 'web',
  output: {
    path: path.join(__dirname, 'src'),
    publicPath: '/assets',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //new BabiliPlugin(),
    new ExtractTextPlugin({
      filename:"[name].[chunkhash].css",
      allChunks: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    new ResourceHintWebpackPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: {cacheDirectory: true}},
      {

        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            options: {
              sourceMap: true
            }
          }),
      }
    ],
  }
}
