import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card className="text-center p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Body>
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="mb-4">The page you are looking for doesn't exist or has been moved.</p>
          <Button as={Link} to="/admin" variant="primary">
            Go to Login
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotFound; 