module.exports = {
  mode: process.env.MODE,
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    contentBase: `${__dirname}/`,
    open: true,
    port: 3000,
  }
}
