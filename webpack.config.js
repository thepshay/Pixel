const path = require('path');

module.exports = {
  entry: './frontend/pixel.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/env", "@babel/react"],
        }
      },
      {
        test: /\.(png|jpg|svg|gif|mp3)$/,
        type: 'asset/session'
    },
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  }
};
