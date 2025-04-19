import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import './CreateProfile.css';
import upload from '../assets/upload-img.png';

const CreateProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [specializations, setSpecializations] = useState([
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newSpecialization, setNewSpecialization] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSpecialization = () => {
    if (newSpecialization.trim()) {
      setSpecializations([...specializations, newSpecialization.trim()]);
      setNewSpecialization('');
      setShowModal(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="create-profile-container">
      <h4 className="mb-4">Create Artisan Portfolio</h4>
      
      <div className="bg-light rounded-3 p-4">
        <Form onSubmit={handleSubmit}>
          <Row className="g-4">
            {/* Artisan Name Section */}
            <Col md={8}>
              <div className="mb-4">
                <h6 className="mb-3">Artisan Name</h6>
                <Row className="g-3">
                  <Col md={2}>
                    <Form.Select className="rounded-2">
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                    </Form.Select>
                  </Col>
                  <Col md={5}>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      className="rounded-2"
                    />
                  </Col>
                  <Col md={5}>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      className="rounded-2"
                    />
                  </Col>
                </Row>
              </div>

              {/* Husband/Father Name Section */}
              <div className="mb-4">
                <h6 className="mb-3">Husband / Father Name</h6>
                <Row className="g-3">
                  <Col md={2}>
                    <Form.Select className="rounded-2">
                      <option>Mr.</option>
                      <option>Late</option>
                    </Form.Select>
                  </Col>
                  <Col md={5}>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      className="rounded-2"
                    />
                  </Col>
                  <Col md={5}>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      className="rounded-2"
                    />
                  </Col>
                </Row>
              </div>

              {/* Artisan Detail Section */}
              <div className="mb-4">
                <h6 className="mb-3">Artisan Detail</h6>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="SHG Name"
                      className="rounded-2"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Artisan Number"
                      className="rounded-2"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Year's Of Experience"
                      className="rounded-2"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="d-flex align-items-center gap-2">
                      <Form.Select
                        value={selectedSpecialization}
                        onChange={(e) => setSelectedSpecialization(e.target.value)}
                      >
                        <option value="">Select Specialization</option>
                        {specializations.map((spec, index) => (
                          <option key={index} value={spec}>
                            {spec}
                          </option>
                        ))}
                      </Form.Select>
                      <Button 
                        variant="primary" 
                        className="add-specialization-btn"
                        onClick={() => setShowModal(true)}
                      >
                        <FaPlus />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Contact Information */}
              <div className="mb-4">
                <h6 className="mb-3">Contact Number</h6>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Control
                      type="tel"
                      placeholder="Call Number"
                      className="rounded-2"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="tel"
                      placeholder="WhatsApp Number"
                      className="rounded-2"
                    />
                  </Col>
                </Row>
              </div>

              {/* Email Section */}
              <div className="mb-4">
                <h6 className="mb-3">Email (Optional)</h6>
                <Form.Control
                  type="email"
                  placeholder="Type Email Here"
                  className="rounded-2"
                />
              </div>

              {/* Address Section */}
              <div className="mb-4">
                <h6 className="mb-3">Address</h6>
                <Row className="g-3">
                  <Col md={12}>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Full Address"
                      className="rounded-2"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      className="rounded-2"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      className="rounded-2"
                    />
                  </Col>
                </Row>
              </div>
            </Col>

            {/* Image Upload Section */}
            <Col md={4}>
              <div className="image-upload-container">
                <div className="image-preview">
                  {selectedImage ? (
                    <img 
                      src={selectedImage} 
                      alt="Preview" 
                      className="preview-image"
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  ) : (
                    <div className="upload-placeholder" onClick={() => document.getElementById('imageUpload').click()}>
                      <img 
                        src={upload}
                        alt="Upload" 
                        style={{ width: '50px', marginBottom: '10px' }} 
                      />
                      <p>Browse Image</p>
                      <p className="text-muted">From Drive</p>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  id="imageUpload"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {selectedImage && (
                  <Button
                    variant="dark"
                    className="mt-3 w-100"
                    onClick={() => {
                      setSelectedImage(null);
                      document.getElementById('imageUpload').value = '';
                    }}
                  >
                    Remove Image
                  </Button>
                )}
                {!selectedImage && (
                  <Button
                    variant="dark"
                    className="mt-3 w-100"
                    onClick={() => document.getElementById('imageUpload').click()}
                  >
                    Choose Image
                  </Button>
                )}
              </div>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button type="submit" variant="dark" className="px-5 py-2">
              Data Save
            </Button>
          </div>
        </Form>

        {/* Add Specialization Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Specialization</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Specialization Name</Form.Label>
              <Form.Control
                type="text"
                value={newSpecialization}
                onChange={(e) => setNewSpecialization(e.target.value)}
                placeholder="Enter new specialization"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddSpecialization}>
              Add Specialization
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CreateProfile; 