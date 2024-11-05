const request = require('supertest');
const http = require('http');
const { app, validateCompany, validateEmployee } = require('../index.js');

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe('API endpoints to add data', () => {
  it('should add a new employee with valid input', async () => {
    const res = await request(server).post('/api/employees').send({
      name: 'John Doe',
      companyId: 1,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      id: expect.any(Number),
      name: 'John Doe',
      companyId: 1,
    });
  });

  it('should return 400 for invalid employee input', async () => {
    const res = await request(server).post('/api/employees').send({
      name: 'John Doe',
    });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('companyId is required and should be an integer');
  });

  it('should add a new company with valid input', async () => {
    const res = await request(server).post('/api/companies').send({
      name: 'TechCorp',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({
      id: expect.any(Number),
      name: 'TechCorp',
    });
  });

  it('should return 400 for invalid company input', async () => {
    const res = await request(server).post('/api/companies').send({});
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('name is required and should be a string');
  });
});
