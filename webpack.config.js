const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: '#eval-source-map',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js' // Use development unminified Vue
    }
  },
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './www/build/')
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: "vue-style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "vue-style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            javascriptEnabled: true
          }
        }]
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: './fonts/',
          publicPath: './build/fonts'
        }
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './images/',
          publicPath: './build/images/'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.NamedChunksPlugin()
  ]
};