const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 入口 
  entry:'./src/main.js',
  // 插件
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  // 输出
  output:{
    filename:'bundles.js',
    path:path.resolve(__dirname,'dist')
  },
  devServer:{
    contentBase: './dist',
    port: 8000
  },
  module:{
    rules:[
      {
          test: /\.css$/,
          use: [
                'style-loader',
                'css-loader'
            ]
      },
      {
          test: /\.(jpg|png|svg|gif)$/,
          use: [
              'file-loader'
          ]
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
              'file-loader'
          ]
      },
      {
          test: /\.js$/,
          use: [
              'babel-loader'
          ],
          exclude: /node_modules/
      },
      {
          test: /\.vue$/,
          use: [
                'vue-loader'
            ],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  }
}