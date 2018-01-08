const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin('./index.html')
  ],
  devServer: {
    port: 8000,
    compress: true,
    inline: true
  }
}

module.exports = config
