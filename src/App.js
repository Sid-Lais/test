import React, { useState } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployee = (employee) => {
    if (employee.id) {
      setEmployees(employees.map((emp) => (emp.id === employee.id ? employee : emp)));
    } else {
      employee.id = employees.length + 1;
      setEmployees([...employees, employee]);
    }
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const editEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const clearSelection = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="container">
      <h1>Employee Management</h1>
      <EmployeeForm onSave={addEmployee} selectedEmployee={selectedEmployee} clearSelection={clearSelection} />
      <EmployeeList employees={employees} onEdit={editEmployee} onDelete={deleteEmployee} />
    </div>
  );
};

export default App;
