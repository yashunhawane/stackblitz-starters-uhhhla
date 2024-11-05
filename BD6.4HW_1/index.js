const express = require('express');
const app = express();

let {
  getAllDepartment,
  getDepartmentById,
  getAllEmployees,
  getEmployeesById,
} = require('./employee');

app.get('/api/employees', async (req, res) => {
  try {
    const employee = await getAllEmployees();
    if (employee.length === 0) {
      return res.status(404).json({ error: 'No employee found' });
    }
    return res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/employees/:id', async (req, res) => {
  try {
    const employee = await getDepartmentById(parseInt(req.params.id));
    if (!employee) {
      return res.status(404).json({ error: 'No employee found' });
    }
    return res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/departments', async (req, res) => {
  try {
    const department = await getAllDepartment();
    if (department.length === 0) {
      return res.status(404).json({ error: 'No department found' });
    }
    return res.json(department);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/departments/:id', async (req, res) => {
  try {
    const department = await getDepartmentById(parseInt(req.params.id));
    if (!department) {
      return res.status(404).json({ error: 'No department found' });
    }
    return res.json(department);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = { app };
