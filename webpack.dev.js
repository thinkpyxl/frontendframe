const webpack = require('webpack')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  },

  watchOptions: {
    ignored: /node_modules/
  }
}
