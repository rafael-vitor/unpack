const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    })
  ]
}