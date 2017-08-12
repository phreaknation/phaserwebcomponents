const path = require('path');
const webpack = require('webpack');
const yargs = require('yargs');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyles = new ExtractTextPlugin('css/[name].css');
const assetsPath = path.resolve(__dirname, 'dist');
const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const nodeEnv = optimizeMinimize ? 'production' : 'development';

var phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
var phaser = path.join(phaserModule, 'build/phaser.min.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')

module.exports = {
  entry: {
    'phaser-web-components': [
      path.resolve(__dirname, 'src/js/index.js'),
      path.resolve(__dirname, 'src/sass/index.scss')
    ],
  },
  devtool: 'cheap-source-map',
  output: {
    pathinfo: true,
    path: assetsPath,
    publicPath: "/",
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].js'
  },
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'/* chunkName= */,
      filename: './js/vendor.bundle.js'/* filename= */
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version', 'Explorer >= 10', 'Android >= 4']
          })
        ],
        sassLoader: {
          includePaths: [
            path.resolve(__dirname, 'node_modules/sanitize.css/')
          ]
        }
      }
    }),
    extractStyles,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src/js')
      },
      {
        test: /pixi\.js/,
        use: ['expose-loader?PIXI']
      },
      {
        test: /phaser-arcade-physics\.js$/,
        use: ['expose-loader?Phaser']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[local]'
                // localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[local]'
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      phaser: phaser,
      pixi: pixi,
    }
  }
};
