import path from 'path'
import webpack from 'webpack';

export default {
  externals: {
    Client: '@ties-network/ties-client-base'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }, {
          loader: 'baggage-loader?[file].styl=styles'
        }]
      },
      {
        test: /\.[ot]tf$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 65000,
            mimetype: 'application/octet-stream'
          }
        }
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=65000&name=public/images/[name].[ext]'
      }
    ]
  },

  output: {
    libraryTarget: 'commonjs2',
    filename: 'renderer.dev.js',
    path: path.join(__dirname, 'app')
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      classNames: 'classnames',
      connect: ['react-redux', 'connect'],
      moment: 'moment',
      reduxForm: ['redux-form', 'reduxForm'],
      withRouter: ['react-router-dom', 'withRouter'],
      Client: 'Client',
      Component: ['react', 'Component'],
      PropTypes: 'prop-types',
      React: 'react',
      ReactDOM: 'react-dom',
      Redirect: ['react-router-dom', 'Redirect'],
      Route: ['react-router-dom', 'Route'],
      Switch: ['react-router-dom', 'Switch']
    }),

    new webpack.NamedModulesPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss'],
    modules: ['node_modules', path.join(__dirname, 'src'), path.join(__dirname, 'static')]
  }
}
