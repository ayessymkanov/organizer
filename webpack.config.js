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
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: 'standard-loader',
        exclude: /(node_modules)/,
        options: {
          parser: 'babel-eslint'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin('./index.html')
  ],
  devServer: {
    port: 8000,
    compress: true,
    inline: true,
    hot: true
  }
}

module.exports = config
