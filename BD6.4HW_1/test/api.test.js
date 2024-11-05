const http = require('http');
const request = require('supertest');
const { app } = require('../index.js');
let {
  getAllDepartment,
  getDepartmentById,
  getAllEmployees,
  getEmployeesById,
} = require('../employee.js');

jest.mock('../employee.js', () => ({
  ...jest.requireActual('../employee.js'),
  getAllDepartment: jest.fn(),
  getDepartmentById: jest.fn(),
  getAllEmployees: jest.fn(),
  getEmployeesById: jest.fn(),
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

  it('GET /api/employees should return 404 if no employees are found', async () => {
    getAllEmployees.mockReturnValue([]);

    const response = await request(server).get('/api/employees');
    expect(response.status).toEqual(404);
    expect(response.body.error).toBe('No employee found');
  });

  it('GET /api/employees/:id should return 404 if no employees is found', async () => {
    getEmployeesById.mockReturnValue(null);
    const response = await request(server).get('/api/employees/999');
    exist;

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('No employee found');
  });

  it('GET /api/departments should return 404 if no departments are found', async () => {
    getAllDepartment.mockReturnValue([]);

    const response = await request(server).get('/api/departments');
    expect(response.status).toEqual(404);
    expect(response.body.error).toBe('No department found');
  });

  it('GET /api/departments/:id should return 404 if no departments is found', async () => {
    getEmployeesById.mockReturnValue(null);
    const response = await request(server).get('/api/departments/999');
    exist;

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('No department found');
  });
});
