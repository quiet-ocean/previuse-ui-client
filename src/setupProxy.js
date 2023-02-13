const { createProxyMiddleware } = require('http-proxy-middleware');

// const host = 'https://petstore.swagger.io/v2/';
const host = 'http://127.0.0.1:8000';

module.exports = function(app) {
  app.use(createProxyMiddleware([
    '/members',
    '/auth',
    '/campaigns',
    '/clients',
    '/posts',
    '/Platform',
    '/chats',
    '/media_box',
  ], {
    changeOrigin: true,
    cookieDomainRewrite: "localhost",
    secure: false,
    target: host,
    headers: {
      host,
      origin: null
    }
  }));
};