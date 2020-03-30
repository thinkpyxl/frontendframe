const env = process.env.NODE_ENV
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');

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
      title: 'ABILITY Network',
      meta: {
        'viewport': 'width=device-width, initial-scale=1.0, shrink-to-fit=no'
      }
    }),
    new SvgSpriteHtmlWebpackPlugin({
      includeFiles: [
        'src/atoms/icons/*.svg',
      ],
    }),
    new CopyPlugin([
      {
        from: '**/*',
        to: 'assets/',
        context: 'src/atoms/'
      } ],
      { ignore: ['*.twig', '*.js', '*.css'] }
    )
  ],

  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: SvgSpriteHtmlWebpackPlugin.getLoader(),
      },
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
