import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from './../components/EmployeeForm';

function Create() {
  const navigate = useNavigate();

  const handleSubmit = async (employeeData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/employees', employeeData);
      alert(response.data.message);
      navigate('/');
    } catch (error) {
      console.error('There was an error creating the employee:', error);
    }
  };

  return (
    <div className="container mt-6">
      <EmployeeForm
        initialData={{
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          department: '',
          position: '',
          date_of_joining: '',
          salary: '',
          date_of_birth: '',
          gender: '',
          performance_rating: '',
          status: 'Active',
        }}
        onSubmit={handleSubmit}
        buttonText="Add Employee"
        headerText="Add New Employee"
      />
    </div>
  );
}

export default Create;
