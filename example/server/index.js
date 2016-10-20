const express = require('express');
const {vueDevServer} = require('./middlewares/vue');
const {appRender} = require('./middlewares/app');

exports.createServer = function (host, port, cb) {
  let app = express();
  app.use(vueDevServer());
  app.use(appRender());

  return app.listen(port, host, cb);
};
