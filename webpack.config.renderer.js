import { spawn } from 'child_process'
import path from 'path'
import webpack from 'webpack'

const PORT = process.env.PORT || 8080

export default {
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    hot: true,
    lazy: false,
    noInfo: true,
    port: PORT,
    publicPath: `http://localhost:${PORT}/dist`,
    setup: () => {
      if (process.env.START_HOT) {
        spawn('npm', ['run', 'start-hot-renderer'], {
          env: process.env,
          shell: true,
          stdio: 'inherit'
        }).on('close', code => process.exit(code))
          .on('error', error => console.error(error))
      }
    }
  },

  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${PORT}/`,
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
            cacheDirectory: true
          }
        }
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src'),
    publicPath: `http://localhost:${PORT}/dist`
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.ProvidePlugin({
      _: 'lodash',
      PropTypes: 'prop-types',
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],

  resolve: {
    extensions: ['.js'],
    modules: ['node_modules']
  },

  target: 'electron-renderer'
}
