var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackMd5Hash = require('webpack-md5-hash')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin')
var CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, '../src/index'),
    vendor: ['mithril', 'redux', 'babel-polyfill', 'ramda']
  },
  target: 'web',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 0,
      minRatio: 0.8
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      trackJSToken: '1e10579fcef54461b1a1b08ba546ac52'
    }),
    // new FaviconsWebpackPlugin({
    //   logo: path.join(__dirname, '../src/img/hammock-logo.png'),
    //   title: 'Dont\'t Work',
    //   icons: {
    //     android: true,
    //     appleIcon: true,
    //     appleStartup: true,
    //     coast: true,
    //     favicons: true,
    //     firefox: true,
    //     opengraph: true,
    //     twitter: true,
    //     yandex: true,
    //     windows: true
    //   }
    // }),
    new ResourceHintWebpackPlugin()
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      'data': path.resolve(__dirname, '../src/data')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          cacheDirectory: true,
          'plugins': [
            'syntax-dynamic-import'
          ],
          'presets': [
            [
              'latest', {
                'es2015': {
                  'modules': false
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        })
      }
    ]
  }
}
