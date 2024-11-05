let employees = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', departmentId: 1 },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    departmentId: 2,
  },
];

let departments = [
  { id: 1, name: 'Engineering' },
  { id: 2, name: 'Marketing' },
];
const getAllDepartment = async () => {
  return employees;
};

const getDepartmentById = async (id) => {
  return employees.find((employee) => employee.id === id);
};

const getAllEmployees = async () => {
  return employees;
};

const getEmployeesById = async (id) => {
  return employees.find((employee) => employee.id === id);
};

module.exports = {
  getAllDepartment,
  getDepartmentById,
  getAllEmployees,
  getEmployeesById,
};
