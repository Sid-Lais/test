import React from 'react';

const Employee = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="employee-card">
      <div className="employee-details">
        <div className="employee-name">{employee.name}</div>
        <div className="employee-position">{employee.position}</div>
      </div>
      <div className="employee-actions">
        <button className="edit-btn" onClick={() => onEdit(employee)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(employee.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Employee;
