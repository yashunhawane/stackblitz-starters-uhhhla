const request = require('supertest');
const http = require('http');
const { app, validateGame, validateTournament } = require('../index.js');

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe('API endpoints to add data', () => {
  it('should add a new game with valid input', async () => {
    const res = await request(server).post('/api/games').send({
      title: 'The Legend of Zelda',
      genre: 'Adventure',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      id: 1,
      title: 'The Legend of Zelda',
      genre: 'Adventure',
    });
  });

  it('should return 400 for invalid game input', async () => {
    const res = await request(server).post('/api/games').send({
      title: 'The Legend of Zelda',
    });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('genre is required and should be a string');
  });

  it('should add a new tournaments with valid input', async () => {
    const res = await request(server).post('/api/tournaments').send({
      name: 'Zelda Championship',
      gameId: 1,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      id: 1,
      name: 'Zelda Championship',
      gameId: 1,
    });
  });

  it('should return 400 for invalid book input', async () => {
    const res = await request(server).post('/api/tournaments').send({
      name: 'Zelda Championship',
    });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('id is required and should be an integer');
  });
});
