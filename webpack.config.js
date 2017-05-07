const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'},
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
