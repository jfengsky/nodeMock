const webpack = require('webpack')

module.exports = {
  entry: './test/test.js',
  output: {
    path: __dirname,
    filename: 'dist/test.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('date')
  ]
}