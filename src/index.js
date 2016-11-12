const fs = require('fs');
const webpack = require('webpack');
const {VueBuilder, VueRender} = require('vue-builder');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

/*
* A function for merging middlewares into one.
*/

function combine(mids) {
  return mids.reduce(function(a, b) {
    return function(req, res, next) {
      a(req, res, function(err) {
        if (err) {
          return next(err);
        }
        b(req, res, next);
      });
    };
  });
}

/*
* Development server middleware for serving Vue.js application.
*/

exports.devServer = function ({server, client, verbose=false}={}) {
  let clientConfig = Object.assign({}, client);
  let serverConfig = Object.assign({}, server);

  let clientCompiler = webpack(clientConfig);
  let serverBuilder = new VueBuilder(serverConfig);
  let source = null; // prebundled code

  return combine([
    webpackDevMiddleware(clientCompiler, {
      noInfo: !verbose,
      publicPath: clientCompiler.options.output.publicPath
    }),
    webpackHotMiddleware(clientCompiler, {
      serverSideRender: false,
      historyApiFallback: true
    }),
    (req, res, next) => {
      if (!source) {
        return serverBuilder.compile()
          .then((s) => source = s)
          .then((s) => next())
          .catch(next);
      }
      return next();
    },
    (req, res, next) => {
      req.vue = new VueRender(source); // re-run in a new context for each request to ensure discrete state between requests
      next();
    }
  ]);
}
