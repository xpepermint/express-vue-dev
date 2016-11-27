const {devServer} = require('../../../src');
const webpack = require('../../config/webpack');

exports.vueDevServer = function (ctx) {
  return devServer({
    server: webpack({mode: 'server'}),
    client: webpack({mode: 'client'})
  });
};
