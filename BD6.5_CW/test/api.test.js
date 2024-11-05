const request = require('supertest');
const http = require('http');
const {
  app,
  validateBooks,
  validateUser,
  validateReviews,
} = require('../index.js');

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe('API endpoints to add data', () => {
  it('should add a new user with valid input', async () => {
    const res = await request(server).post('/api/users').send({
      name: 'Alice',
      email: 'alice@example.com',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
    });
  });

  it('should return 400 for invalid user input', async () => {
    const res = await request(server).post('/api/users').send({
      name: 'Alice',
    });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('Email is required and should be a string');
  });

  it('should add a new book with valid input', async () => {
    const res = await request(server).post('/api/books').send({
      title: 'Moby Dick',
      author: 'Herman Melville',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      id: 1,
      title: 'Moby Dick',
      author: 'Herman Melville',
    });
  });

  it('should return 400 for invalid book input', async () => {
    const res = await request(server).post('/api/books').send({
      title: 'Moby Dick',
    });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('author is required and should be a string');
  });

  it('should add a new review with valid input', async () => {
    const res = await request(server).post('/api/reviews').send({
      content: 'Great book!',
      userId: 1,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      id: 1,
      content: 'Great book!',
      userId: 1,
    });
  });

  it('should return 400 for invalid review input', async () => {
    const res = await request(server).post('/api/reviews').send({
      content: 'Moby Dick',
    });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('userId is required and should be a number');
  });
});
