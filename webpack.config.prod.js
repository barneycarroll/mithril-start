import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import ResourceHintWebpackPlugin from 'resource-hints-webpack-plugin'

export default {
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    vendor: path.resolve(__dirname, 'src/vendor')
  },
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
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
    new webpack.optimize.UglifyJsPlugin(),
    // new FaviconsWebpackPlugin({
    //   logo: path.join(__dirname, 'src/img/hammock-logo.png'),
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
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      }
    ]
  }
}
