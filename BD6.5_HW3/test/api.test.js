const request = require('supertest');
const http = require('http');
const { app, validateArticle, validateAuthor } = require('../index.js');

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe('API endpoints to add data', () => {
  it('should add a new articles with valid input', async () => {
    const res = await request(server).post('/api/articles').send({
      title: 'Mastering Node.js',
      content: 'Node.js is a powerful tool for backend development...',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      id: 3,
      title: 'Mastering Node.js',
      content: 'Node.js is a powerful tool for backend development...',
    });
  });

  it('should return 400 for invalid articles input', async () => {
    const res = await request(server).post('/api/articles').send({
      title: 'Mastering Node.js',
    });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('content is required and should be a string');
  });

  it('should add a new authors with valid input', async () => {
    const res = await request(server).post('/api/authors').send({
      name: 'Alice Johnson',
      articleId: 3,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      id: 3,
      name: 'Alice Johnson',
      articleId: 3,
    });
  });

  it('should return 400 for invalid authors input', async () => {
    const res = await request(server)
      .post('/api/authors')
      .send({ name: 'Alice Johnson' });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('articleId is required and should be an integer');
  });
});
