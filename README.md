![Build Status](https://travis-ci.org/xpepermint/express-vue-dev.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/express-vue-dev.svg)](https://badge.fury.io/js/express-vue-dev)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/express-vue-dev.svg)](https://gemnasium.com/xpepermint/express-vue-dev)

# [express](http://expressjs.com)-[vue](http://vuejs.org)-dev

> Vue.js development server middleware for Express.js.

<img src="logo.png" height="60" style="margin-bottom: 20px" />

This is a middleware for [Express.js](http://expressjs.com) and provides a fully featured development server built on top of [Webpack](http://webpack.github.io) which renders the [Vue.js](http://vuejs.org) application for client-side and server-side. The middleware is configurable and supports hot module replacement out of the box. This middleware should be used in **development only**. Please check the [express-vue-builder](https://github.com/xpepermint/express-vue-builder) middleware for a production ready alternative.

This is an open source package for [Vue.js](http://vuejs.org/) and [Express.js](http://expressjs.com). The source code is available on [GitHub](https://github.com/xpepermint/express-vue-dev) where you can also find our [issue tracker](https://github.com/xpepermint/express-vue-dev/issues).

## Related Projects

* [vue-webpack](https://github.com/xpepermint/vue-webpack): Webpack configuration object generator for Vue.js.
* [vue-builder](https://github.com/xpepermint/vue-builder): Server-side and client-side rendering for Vue.js.
* [express-vue-builder](https://github.com/xpepermint/express-vue-builder): Vue.js server-side rendering middleware for Express.js.
* [vue-cli-template](https://github.com/xpepermint/vue-cli-template): A simple server-side rendering CLI template for Vue.js.

## Install

Run the command below to install the package.

```
$ npm install --save-dev vue-builder webpack@2.1.0-beta.25
$ npm install --save-dev express-vue-dev
```

## Usage

To create a middleware, create a Webpack configuration objects for client-side and server-side, then pass it the the `devServer` method. Use the [vue-webpack](https://github.com/xpepermint/vue-webpack) package to simplify the setup.

```js
const {build} = require('vue-webpack');
const {devServer} = require('express-vue-dev');

let middleware = devServer({
  server: build({
    mode: 'server',
    inputFilePath: `./app/server-entry.js` // Vue application entry file for server-side
  }),
  client: build({
    mode: 'client',
    inputFilePath: `./app/client-entry.js` // Vue application entry file for client-side
  })
}); // pass this to app.use() of your Express application
```

Check the included `./example` directory or run the `npm run example` command to start the application.

## API

**devServer({server, client, verbose})**

> Development server middleware for serving Vue.js application.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| server | Object | Yes | - | Webpack configuration object for server-side rendering.
| client | Object | Yes | - | Webpack configuration object for client-side rendering.
| verbose | Boolean | No | false | When `true` detailed logging is enabled.

## License (MIT)

```
Copyright (c) 2016 Kristijan Sedlak <xpepermint@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
