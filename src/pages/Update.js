import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeForm from './../components/EmployeeForm';

function Update() {
  const { id } = useParams();  
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/employees/${id}`)
      .then(response => {
        setEmployee(response.data.data || response.data); 
      })
      .catch(error => console.error('Error fetching employee:', error));
  }, [id]);

  const handleUpdate = async (updatedData) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/employees/${id}`, updatedData);
      alert('Employee updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return employee ? (
    <div className="container pt-4">
      <EmployeeForm initialData={employee} onSubmit={handleUpdate} buttonText="Update" headerText="Update Employee" />
    </div>
  ) : <p>Loading...</p>;
}

export default Update;
