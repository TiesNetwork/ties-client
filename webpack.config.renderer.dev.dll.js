import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import baseConfig from './webpack.config.base';

const dist = path.resolve(process.cwd(), 'dll');

export default webpackMerge(baseConfig, {
  context: process.cwd(),

  devtool: 'eval',

  entry: {
    renderer: (Object.keys(dependencies || {}))
  },

  externals: ['crypt-browserify', 'fsevents'],

  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIndentName=[name]!stylus-loader?outputStyle=expanded&sourceMap&sourceMapContents&paths=static'
      }
    ]
  },

  output: {
    library: 'renderer',
    libraryTarget: 'var',
    filename: '[name].dev.dll.js',
    path: dist
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(dist, '[name].json')
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: path.resolve(process.cwd(), 'app'),
        output: {
          path: path.resolve(process.cwd(), 'dll'),
        },
      },
    })
  ],

  resolve: {
    modules: ['src'],
  },

  target: 'electron-renderer'
});
