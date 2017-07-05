const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const ENV = require('./env');
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'www'),
};

process.env.BABEL_ENV = ENV.type;

const common = {
  entry: PATHS.src,
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        include: PATHS.src,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        //loader: 'file-loader?name=public/fonts/[name].[ext]'
        loader: 'file-loader'
      }
    ]
  }
};

let platformwww = 'platforms/browser/platform_www';
switch(ENV.platform) {
  case 'ios':
    platformwww = 'platforms/ios/www';
  case 'android':
    platformwww = 'platforms/android/assets/www';
}

if (ENV.type === 'development') {
  module.exports = merge(common, {
    devServer: {
      contentBase: [PATHS.build, platformwww],

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      disableHostCheck: true,
      //progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
} else {
  // config can be added here for minifying / etc
  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
