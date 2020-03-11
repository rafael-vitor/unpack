const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  }
});