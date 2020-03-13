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
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      exclude: ['*.twig']
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Outset',
      inject: '<h1>hi</h1>'
    })
  ],

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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: process.env.NODE_ENV === 'development',
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            },
          },
          'css-loader',
          'postcss-loader',
        ]
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
