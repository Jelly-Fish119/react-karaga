import React, { useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Get backend URL based on environment
  const BACKEND_URL = import.meta.env.MODE === 'production' 
    ? 'http://localhost:3000'
    : 'http://localhost:3000';

  // Validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/admin/login`, {
        email,
        password
      });

      if (!response.data || !response.data.token) {
        throw new Error('Invalid response from server');
      }

      // Store the token and user data
      localStorage.setItem('token', response.data.token);
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }

      // Set default authorization header for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

      // Show success toast
      toast.success('Login successful! Redirecting...');

      // Redirect to dashboard after a short delay
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 200);

    } catch (err) {
      console.error('Login error:', err);
      if (!navigator.onLine) {
        toast.error('Please check your internet connection and try again');
      } else if (err.response?.status === 401) {
        toast.error('Invalid email or password');
      } else if (err.response?.status === 429) {
        toast.error('Too many login attempts. Please try again later');
      } else {
        toast.error(err.response?.data?.message || 'An error occurred during login. Please try again');
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="login-container" style={{ backgroundColor: '#f5f5f5' }}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Card className="login-card" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <h2 style={{ color: '#333' }}>Admin Login</h2>
            <p className="text-muted">Please sign in to continue</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                required
                style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px' }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <div className="password-input-container">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px' }}
                />
                <Button
                  variant="link"
                  className="password-toggle-btn"
                  onClick={togglePasswordVisibility}
                  type="button"
                  style={{ color: '#333' }}
                >
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </Button>
              </div>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={loading}
              style={{ backgroundColor: '#007bff', border: 'none', borderRadius: '10px', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', color: '#fff' }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;