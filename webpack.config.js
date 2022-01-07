let path = require('path');

module.exports = {
  mode: 'production',
  entry: './modules/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/modules'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
