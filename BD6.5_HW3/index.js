const express = require('express');
const app = express();
app.use(express.json());

let articles = [
  {
    id: 1,
    title: 'Understanding JavaScript',
    content:
      'JavaScript is a versatile language used for both frontend and backend development.',
  },
  {
    id: 2,
    title: 'Introduction to React',
    content:
      'React is a popular JavaScript library for building user interfaces.',
  },
];

let authors = [
  {
    id: 1,
    name: 'John Doe',
    articleId: 1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    articleId: 2,
  },
];

let validateArticle = (article) => {
  if (!article.title || typeof article.title !== 'string') {
    return 'title is required and should be a string';
  }
  if (!article.content || typeof article.content !== 'string') {
    return 'content is required and should be a string';
  }
  return null;
};

let validateAuthor = (author) => {
  if (!author.name || typeof author.name !== 'string') {
    return 'name is required and should be a string';
  }
  if (!author.articleId || !Number.isInteger(author.articleId)) {
    return 'articleId is required and should be an integer';
  }
  return null;
};

app.post('/api/articles', (req, res) => {
  let error = validateArticle(req.body);
  if (error) return res.status(400).send(error);

  let article = { id: articles.length + 1, ...req.body };
  articles.push(article);
  res.status(201).json(article);
});

app.post('/api/authors', (req, res) => {
  let error = validateAuthor(req.body);
  if (error) return res.status(400).send(error);

  let author = { id: authors.length + 1, ...req.body };
  authors.push(author);
  res.status(201).json(author);
});

module.exports = { app, validateArticle, validateAuthor };
