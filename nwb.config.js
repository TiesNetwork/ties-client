const path = require('path')

module.exports = nwb => ({
  babel: { stage: 2 },
  type: 'react-app',
  webpack: {
    extra: {
      plugins: [
        new nwb.webpack.ProvidePlugin({
          React: 'react',
          ReactDOM: 'react-dom'
        })
      ]
    }
  }
})
