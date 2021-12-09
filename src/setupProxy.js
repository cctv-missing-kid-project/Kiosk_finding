const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/kiosk/',
    createProxyMiddleware({
      target: 'http://54.95.154.241:8950',
      changeOrigin: true,
    })
  );
}

