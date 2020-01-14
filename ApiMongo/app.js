const express = require('express');
const morgan = require('morgan');
const reviewRouter = require('./routes/reviewRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/reviews', reviewRouter);
app.use('/api/users', userRouter);

module.exports = app;
