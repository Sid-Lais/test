import React, { useEffect, useState } from 'react';

const EmployeeForm = ({ onSave, selectedEmployee, clearSelection }) => {
  const [employee, setEmployee] = useState({ name: '', position: '' });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    employee.name = capitalizeFirstLetter(employee.name);
    onSave(employee);
    setEmployee({ name: '', position: '' });
    clearSelection();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
