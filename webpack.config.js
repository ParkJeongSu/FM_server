const path = require('path');

module.exports = {
  entry: './Server/src/www.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  target: 'node',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  mode:"none",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'Server/dist')
  }
};