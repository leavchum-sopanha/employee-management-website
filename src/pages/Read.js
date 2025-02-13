import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Read() {
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

  if (!employee) {
    return <p className="text-center mt-5">Loading employee details...</p>;
  }

  const getTitle = (gender) => {
    if (gender === 'Male') return 'Mr.';
    if (gender === 'Female') return 'Ms.';
    return ''; 
  };

  const getPerformanceColor = (rating) => {
    if (rating >= 7) return 'text-success';  
    if (rating >= 5) return 'text-warning'; 
    return 'text-danger';
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">
            {getTitle(employee.gender)} {employee.first_name} {employee.last_name}
          </h2>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Phone:</strong> {employee.phone_number}</p>
              <p><strong>Department:</strong> {employee.department}</p>
              <p><strong>Performance rating:</strong> <strong className={getPerformanceColor(employee.performance_rating)}>{employee.performance_rating}</strong></p>
            </div>
            <div className="col-md-6">
              <p><strong>Position:</strong> {employee.position}</p>
              <p><strong>Date of Joining:</strong> {employee.date_of_joining}</p>
              <p><strong>Salary:</strong> ${employee.salary}</p>
              <p><strong>Status:</strong> {employee.status}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
            <button className="btn btn-warning" onClick={() => navigate(`/update/${id}`)}>Update this</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
