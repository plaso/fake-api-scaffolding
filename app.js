const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');

require('./config/hbs.config');

const app = express();

/**
 * Middlewares
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

/**
 * View setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
/* app.use(express.static(`${__dirname}/public`)); */
/* hbs.registerPartials(__dirname + "/views/partials"); */

/**
 * Configure routes
 */
const router = require('./config/routes.config');
app.use('/', router);

/* Errors */

app.use((req, res, next) => res.status(404).render('errors/not-found'));

app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);
  if (!res.headersSent) {
    res.status(500).render('errors/internal');
  }
});


const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`Ready! Listening on port ${port}`);
});