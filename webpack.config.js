var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }
  return sources;
}


module.exports = {
  entry: {
    app: getEntrySources([
      './app/app.js'
    ])
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'jsx', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
        // loaders: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/css/style.css', {
      allChunks: true
    })
  ]
};

