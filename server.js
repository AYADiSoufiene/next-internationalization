const express = require('express');
const nextjs = require('next');
const { setConfig } = require('next/config');

setConfig(require('./next.config'));
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const app = nextjs({ dir: './', dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server
    .get('/healthz', (req, res) => {
      res.send('OK');
    })
    .use(nextI18NextMiddleware(nextI18next))
    /* need this RegEx for custom route with diffrent
     language (because when refrech an error 404 occured) */
    /* declare custom regex routes for the diffirent routes as the language selected */
    .get('/:type(a-propos|about-us)', (req, res) => {
      const { query, params } = req;
      return app.render(req, res, '/about', { ...query, ...params });
    })
    .get('*', (req, res) => handle(req, res))
    .listen(PORT, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${PORT}`);
    });
});
