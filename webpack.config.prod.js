import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackChunkHash from 'webpack-chunk-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {

  mode:"production",
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    app: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new WebpackChunkHash(),
    new webpack.LoaderOptionsPlugin({
      options: {
        optimize: {
          splitChunks: {
            name: 'vendor'
          }
        }
      }
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
      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.trackJSToken
      trackJSToken: 'e1128357237240e18287674cd9630aee'
    }),
    new ExtractTextPlugin('[name].[hash].css'),
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, use: ExtractTextPlugin.extract("css-loader?sourceMap")}

    ]
  },
}