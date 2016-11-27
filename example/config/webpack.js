const {join} = require('path');
const webpack = require('webpack');

module.exports = ({mode}) => ({
  target: mode === 'client' ? 'web' : 'node',
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  entry: [
    join(__dirname, '..', 'app', `${mode}-entry.js`),
    mode === 'client' ? 'webpack-hot-middleware/client' : null
  ].filter((e) => !!e),
  output: {
    path: join(__dirname, '..', '..', 'dist'),
    filename: `bundle.js?[hash]`,
    publicPath: '/',
    libraryTarget: mode === 'client' ? 'var' : 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify(mode)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
