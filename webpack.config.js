const env = process.env.NODE_ENV
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: env,

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.twig$/,
        use: {
          loader: 'twig-loader',
          options: {
            // See options section below
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  node: {
    fs: 'empty' // avoids error messages
  },

  watchOptions: {
    ignored: /node_modules/
  }
}
