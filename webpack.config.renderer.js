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
        loader: 'babel-loader?cacheDirectory!baggage-loader?[file].styl=styles'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIndentName=[name]!stylus-loader?outputStyle=expanded&sourceMap&sourceMapContents&paths=static'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=65000&name=public/images/[name].[ext]'
      },
      {
        test: /\.[ot]tf$/,
        loader: 'url-loader?limit=65000&name=public/fonts/[name].[ext]'
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
      classNames: 'classnames',
      connect: ['react-redux', 'connect'],
      moment: 'moment',
      reduxForm: ['redux-form', 'reduxForm'],
      Component: ['react', 'Component'],
      PropTypes: 'prop-types',
      React: 'react',
      ReactDOM: 'react-dom',
      Redirect: ['react-router-dom', 'Redirect'],
      Route: ['react-router-dom', 'Route'],
      Switch: ['react-router-dom', 'Switch']
    })
  ],

  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules', path.join(__dirname, 'src'), path.join(__dirname, 'static')]
  },

  target: 'electron-renderer'
}
