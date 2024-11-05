const http = require('http');
const request = require('supertest');
const { app } = require('../index.js');
const {
  getBook,
  getBookById,
  getAllReviews,
  getReviewById,
} = require('../book.js');

jest.mock('../book.js', () => ({
  ...jest.requireActual('../book.js'),
  getBook: jest.fn(),
  getBookById: jest.fn(),
  getAllReviews: jest.fn(),
  getReviewById: jest.fn(),
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe('API Error Handling Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GET /api/books should return 404 if no books are found', async () => {
    getBook.mockReturnValue([]);

    const response = await request(server).get('/api/books');
    expect(response.status).toEqual(404);
    expect(response.body.error).toBe('No books found');
  });

  it('GET /api/books/:id should return 404 if no book is found', async () => {
    getBookById.mockReturnValue(null);
    const response = await request(server).get('/api/books/999');
    exist;

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('No book found');
  });

  it('GET /api/reviews should return 404 if no reviews are found', async () => {
    getAllReviews.mockReturnValue([]);

    const response = await request(server).get('/api/reviews');
    expect(response.status).toEqual(404);
    expect(response.body.error).toBe('No reviews found');
  });

  it('GET /api/reviews/:id should return 404 if no reviews is found', async () => {
    getReviewById.mockReturnValue(null);
    const response = await request(server).get('/api/reviews/999');
    exist;

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('No review found');
  });
});
