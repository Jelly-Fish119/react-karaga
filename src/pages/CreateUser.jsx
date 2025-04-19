import React, { useState } from 'react';
import { Table, Form, Button, Container } from 'react-bootstrap';
import './CreateUser.css';

const CreateUser = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      contact: '+1 234 567 8900',
      email: 'john@example.com',
      username: 'johndoe',
      password: 'password',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      contact: '+1 234 567 8900',
      email: 'john@example.com',
      username: 'johndoe',
      password: 'password',
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Doe',
      contact: '+1 234 567 8900',
      email: 'john@example.com',
      username: 'johndoe',
      password: 'password',
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const newUser = {
      id: users.length + 1,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      contact: e.target.contact.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };
    setUsers([...users, newUser]);
    e.target.reset();
  };

  return (
    <div className="create-user-container">
      <h4 className="mb-4">Create/Manage Admin And User</h4>
      
      {/* User Creation Form */}
      <div className="bg-light rounded-3 p-4 mb-4 form-container">
        <Form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="firstName"
                  placeholder="Enter First Name"
                  className="rounded-2"
                  required
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="lastName"
                  placeholder="Enter Last Name"
                  className="rounded-2"
                  required
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Contact Number</Form.Label>
                <Form.Control 
                  type="tel" 
                  name="contact"
                  placeholder="Enter contact number"
                  className="rounded-2"
                  required
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  placeholder="Enter email"
                  className="rounded-2"
                  required
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="username"
                  placeholder="Enter User Name"
                  className="rounded-2"
                  required
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  name="password"
                  placeholder="Enter password"
                  className="rounded-2"
                  required
                />
              </Form.Group>
            </div>
          </div>
          <div className="text-end mt-3">
            <Button 
              type="submit" 
              variant="warning"
              className="text-white px-4 rounded-2"
            >
              Create User
            </Button>
          </div>
        </Form>
      </div>

      {/* Users Table */}
      <div className="bg-light rounded-3 p-4 table-container">
        <div className="table-responsive">
          <Table bordered hover className="mb-0">
            <thead>
              <tr>
                <th className="text-center" style={{ width: '80px' }}>S No</th>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th className="text-center" style={{ width: '120px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{user.contact}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>
                    <Form.Select size="sm" className="text-secondary">
                      <option>Actions</option>
                      <option value="edit">Edit</option>
                      <option value="delete">Delete</option>
                      <option value="suspend">Suspend</option>
                    </Form.Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
