const { resolve } = require('path');

const config = {
  resolve: {
    modules: [resolve('./lib'), resolve('./node_modules')]
  },
  entry: ['@babel/polyfill', './lib/renderers/dom.js'],
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
