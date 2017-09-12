import chalk from 'chalk';
import { execSync, spawn } from 'child_process';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import baseConfig from './webpack.config.base';

const dll = path.resolve(process.cwd(), 'app/dll');
const manifest = path.resolve(dll, 'renderer.json');
const port = process.env.PORT || 8080;
const publicPath = `http://localhost:${port}/dist`;

if (!(fs.existsSync(dll) && fs.existsSync(manifest))) {
  console.log(chalk.black.bgYellow.bold(
    'The DLL files are missing. Sit back while we build them for you with "npm run build-dll"'
  ));
  execSync('npm run build-dll');
}

export default webpackMerge(baseConfig, {
  devServer: {
    port, publicPath,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    hot: true,
    lazy: false,
    noInfo: true,
    setup: () => {
      if (process.env.START_HOT) {
        console.log('Starting Main Process...');
        spawn(
          'npm',
          ['run', 'start-main-dev'],
          { shell: true, env: process.env, stdio: 'inherit' }
        )
          .on('close', code => process.exit(code))
          .on('error', error => console.error(error))
      }
    },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100
    }
  },

  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}/`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src/index.js')
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              'transform-class-properties',
              'transform-es2015-classes',
              'react-hot-loader/babel'
            ],
          }
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIndentName=[name]!stylus-loader?outputStyle=expanded&sourceMap&sourceMapContents&paths=static'
      }
    ]
  },

  output: {
    publicPath: `http://localhost:${port}/dist/`
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifest),
      sourceType: 'var',
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true
    }),

    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],

  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules', path.join(__dirname, 'src'), path.join(__dirname, 'static')]
  },

  target: 'electron-renderer'
});
