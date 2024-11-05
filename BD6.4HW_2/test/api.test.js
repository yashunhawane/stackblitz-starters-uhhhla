const http = require('http');
const request = require('supertest');
const { app } = require('../index.js');
let {
  getAllGames,
  getGamesById,
  getAllGenres,
  getGenresById,
} = require('../games.js');

jest.mock('../games.js', () => ({
  ...jest.requireActual('../games.js'),
  getAllGames: jest.fn(),
  getGamesById: jest.fn(),
  getAllGenres: jest.fn(),
  getGenresById: jest.fn(),
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

  it('GET /api/games should return 404 if no games are found', async () => {
    getAllGames.mockReturnValue([]);

    const response = await request(server).get('/api/games');
    expect(response.status).toEqual(404);
    expect(response.body.error).toBe('No games found');
  });

  it('GET /api/games/:id should return 404 if no games is found', async () => {
    getGamesById.mockReturnValue(null);
    const response = await request(server).get('/api/games/999');
    exist;

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('No games found');
  });

  it('GET /api/genres should return 404 if no genres are found', async () => {
    getAllGenres.mockReturnValue([]);

    const response = await request(server).get('/api/genres');
    expect(response.status).toEqual(404);
    expect(response.body.error).toBe('No genres found');
  });

  it('GET /api/genres/:id should return 404 if no genres is found', async () => {
    getGenresById.mockReturnValue(null);
    const response = await request(server).get('/api/genres/999');
    exist;

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('No genres found');
  });
});
