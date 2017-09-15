import BabiliWebpackPlugin from 'babili-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path'
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import baseConfig from './webpack.config.base';

export default webpackMerge(baseConfig, {
  devtool: 'source-map',

  entry: './src/index',

  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIndentName=[hash:base64:5]!stylus-loader?outputStyle=expanded&sourceMap&sourceMapContents&paths=static'
      }
      // {
      //   test: /\.styl$/,
      //   use: ExtractTextPlugin.extract({
      //     use: [
      //       {
      //         loader: 'style-loader'
      //       },
      //       {
      //         loader: 'css-loader',
      //         options: {
      //           importLoaders: 2,
      //           localIndentName: '[hash:base64:5]',
      //           modules: true,
      //         }
      //       },
      //       {
      //         loader: 'stylus-loader',
      //         options: {
      //           outputStyle: 'expanded',
      //           paths: 'static',
      //           sourceMap: true,
      //           sourceMapContents: true
      //         }
      //       }
      //     ]
      //   })
      // }
    ]
  },

  output: {
    filename: 'renderer.prod.js',
    path: path.join(__dirname, 'app/dist'),
    publicPath: './dist/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),

    new BabiliWebpackPlugin(),

    new ExtractTextPlugin('style.css'),

    new BundleAnalyzerPlugin({
      analyzerMode: process.env.OPEN_ANALYZER === 'true' ? 'server' : 'disabled',
      openAnalyzer: process.env.OPEN_ANALYZER === 'true'
    })
  ],


  target: 'electron-renderer'
})
