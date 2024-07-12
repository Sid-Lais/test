import React from 'react';
import Employee from './Employee';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <div className="employee-list">
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
