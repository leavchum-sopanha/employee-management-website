import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EmployeeForm({ initialData, onSubmit, headerText, buttonText }) {
  const [input, setInput] = useState(initialData || {});

  useEffect(() => {
    setInput(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <div className="container my-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h3 className="my-2">{headerText}</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Row 1: First Name & Last Name */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    value={input.first_name || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    value={input.last_name || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Email & Phone Number */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={input.email || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone_number"
                    name="phone_number"
                    value={input.phone_number || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Department & Position */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="department">Department</label>
                  <select
                    className="form-control"
                    id="department"
                    name="department"
                    value={input.department || ""}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Business Development">Business Development</option>
                    <option value="Academic Affairs">Academic Affairs</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="IT">IT</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    className="form-control"
                    id="position"
                    name="position"
                    value={input.position || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Row 4: Date of Joining & Salary */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="date_of_joining">Date of Joining</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date_of_joining"
                    name="date_of_joining"
                    value={input.date_of_joining || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="salary">Salary</label>
                  <input
                    type="number"
                    className="form-control"
                    id="salary"
                    name="salary"
                    value={input.salary || ""}
                    onChange={handleChange}
                    required
                    step="0.01"
                  />
                </div>
              </div>
            </div>

            {/* Row 5: Date of Birth & Gender */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="date_of_birth">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date_of_birth"
                    name="date_of_birth"
                    value={input.date_of_birth || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="gender">Gender</label>
                  <select
                    className="form-control"
                    id="gender"
                    name="gender"
                    value={input.gender || ""}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 6: Performance Rating & Status */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="performance_rating">Performance Rating (1-10)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="performance_rating"
                    name="performance_rating"
                    value={input.performance_rating || ""}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    max="10"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label htmlFor="status">Status</label>
                  <select
                    className="form-control"
                    id="status"
                    name="status"
                    value={input.status || "Active"}
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="On Leave">On Leave</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Button Section */}
            <div className="d-flex justify-content-between mt-3">
              <Link to="/" className="btn btn-secondary">Back</Link>
              <button type="submit" className="btn btn-success">{buttonText || "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;
