const { createProxyMiddleware } = require('http-proxy-middleware');

// const host = 'http://3.125.137.91:8000';
// const host = 'http://dev.previuse.com:8000';
const host = 'http://127.0.0.1:8000';

const token = process.env.REACT_APP_AWS_TOKEN.replace(/['"]+/g, '');

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
    ws: true,
    headers: {
      host,
      origin: host,
      Authorization: `Bearer ${token}`
    }
  }));
};