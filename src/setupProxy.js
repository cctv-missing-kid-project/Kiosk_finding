const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/kiosk/',
    createProxyMiddleware({
      target: 'http://18.180.116.1:8000',
      changeOrigin: true,
    })
  );
}

