const express = require('express');
const app = express();
app.use(express.json());

let users = [];
let books = [];
let reviews = [];

let validateUser = (user) => {
  if (!user.name || typeof user.name !== 'string') {
    return 'Name is required and should be a string';
  }
  if (!user.email || typeof user.email !== 'string') {
    return 'Email is required and should be a string';
  }
  return null;
};

//
let validateBooks = (book) => {
  if (!book.title || typeof book.title !== 'string') {
    return 'title is required and should be a string';
  }
  if (!book.author || typeof book.author !== 'string') {
    return 'author is required and should be a string';
  }
  return null;
};

//
let validateReviews = (review) => {
  if (!review.content || typeof review.content !== 'string') {
    return 'content is required and should be a string';
  }
  if (!review.userId || typeof review.userId !== 'string') {
    return 'userId is required and should be a string';
  }
  return null;
};
//

app.post('/api/users', (req, res) => {
  let error = validateUser(req.body);
  if (error) return res.status(400).send(error);

  let user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

//
app.post('/api/books', (req, res) => {
  let error = validateBooks(req.body);
  if (error) return res.status(400).send(error);

  let book = { id: books.length + 1, ...req.body };
  books.push(book);
  res.status(201).json(book);
});
//
app.post('/api/reviews', (req, res) => {
  let error = validateReviews(req.body);
  if (error) return res.status(400).send(error);

  let review = { id: review.length + 1, ...req.body };
  reviews.push(review);
  res.status(201).json(review);
});

module.exports = { app, validateBooks, validateUser, validateReviews };
