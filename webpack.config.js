const Path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      'Components': Path.resolve('resources/js/Components'),
      'Layout': Path.resolve('resources/js/Components/Layout'),
      'Services': Path.resolve('resources/js/services'),
      'Api': Path.resolve('resources/js/services/Api'),
      'Root': Path.resolve('resources/js/'),
    },
  },
  stats: "normal"
}


