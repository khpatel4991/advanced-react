const webpack = require('webpack');
const { resolve } = require('path');

const config = {
  resolve: {
    modules: [resolve('./lib'), resolve('./node_modules')]
  },
  entry: {
    vendor: [
      '@babel/polyfill',
      'react',
      'react-dom',
      'prop-types',
      'axios',
      'lodash'
    ],
    app: ['./lib/renderers/dom.js']
  },
  output: {
    path: resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    }
  }
};

module.exports = config;
