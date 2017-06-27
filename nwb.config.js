const path = require('path')

module.exports = nwb => ({
  babel: { stage: 2 },
  type: 'react-app',
  webpack: {
    extra: {
      plugins: [
        new nwb.webpack.ProvidePlugin({
          classNames: 'classnames',
          PropTypes: 'prop-types',
          React: 'react',
          ReactDOM: 'react-dom'
        })
      ]
    },
    rules: {
      'sass-css': {
        localIdentName: '[local]',
        modules: true
      }
    }
  }
})
