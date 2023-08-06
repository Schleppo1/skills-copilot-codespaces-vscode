// Create web server application with Express.js
// run with: node comments.js
// see it at: http://localhost:3000/comments

const express = require('express');
const app = express();

// use static files
app.use(express.static('public'));

// use pug
app.set('view engine', 'pug');
app.set('views', './views');

// render the comments page
app.get('/comments', (req, res) => {
  res.render('comments');
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
