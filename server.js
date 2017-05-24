const express = require('express');
const morgan = require('morgan');

const app = express();

const BlogPosts = require('./blog-router');

app.use(morgan('common'));

app.use('/blog-router', BlogPosts);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});