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
        console.log('Starting Main Process...');
        spawn(
          'npm',
          ['run', 'start-main-dev'],
          { shell: true, env: process.env, stdio: 'inherit' }
        )
          .on('close', code => process.exit(code))
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
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIndentName=[name]!stylus-loader?outputStyle=expanded&sourceMap&sourceMapContents&paths=static'
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
      withRouter: ['react-router-dom', 'withRouter'],
      Component: ['react', 'Component'],
      PropTypes: 'prop-types',
      React: 'react',
      ReactDOM: 'react-dom',
      Redirect: ['react-router-dom', 'Redirect'],
      Route: ['react-router-dom', 'Route'],
      Switch: ['react-router-dom', 'Switch']
    }),
  ],

  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules', path.join(__dirname, 'src'), path.join(__dirname, 'static')]
  },

  target: 'electron-renderer'
}
