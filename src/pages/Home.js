import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  

function Home() {
  const [data, setData] = useState([]); 
  const navigate = useNavigate();

  // Fetch data from API when component mounts
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/employees')
      .then(response => setData(response.data.data)) 
      .catch(err => console.log(err));
  }, []); 

  return (
    <div className='container-fluid px-5'>
      <div className='d-flex justify-content-center align-items-center my-5'>
        <img src="/images/tfka_logo.png" alt="Logo" width="300" />
      </div>
      <h2 style={{ color: "#0c2041" }} className='mb-5'>👋 Welcome to Employee Management System!</h2>
      <div className="d-flex w-100 justify-content-between align-items-center mb-3">  
        <h5 >Employee List:</h5>
        <Link to="/create" className="btn btn-success">Add New</Link>
      </div>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Department</th>
            <th>Position</th>
            <th>Date of Joining</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone_number}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>
                <td>{employee.date_of_joining}</td>
                <td>{employee.salary}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Link to={`/read/${employee.id}`} className="btn btn-info btn-sm">View</Link>
                    <Link to={`/update/${employee.id}`} className="btn btn-warning btn-sm">Update</Link>
                    <button className="btn btn-danger btn-sm" onClick={e => handleDelete(employee.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );


  function handleDelete(id) {
    const confirm = window.confirm("Are you sure to delete this record?");
    if (confirm) {
      axios.delete(`http://127.0.0.1:8000/api/employees/${id}`)
      .then(response => {
        alert(response.data.message);
        navigate('/')
        setData(prevData => prevData.filter(employee => employee.id !== id));
      })
      .catch(err => console.log("Error deleting employee:", err));
    }
  }
}

export default Home;
