const {build} = require('vue-webpack');
const {devServer} = require('../../../src');

exports.vueDevServer = function(ctx) {
  return devServer({
    server: build({
      mode: 'server',
      inputFilePath: `${__dirname}/../../app/server-entry.js`
    }),
    client: build({
      mode: 'client',
      inputFilePath: `${__dirname}/../../app/client-entry.js`
    })
  })
};
