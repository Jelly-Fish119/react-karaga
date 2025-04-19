import React, { useRef, useState, useEffect } from 'react';
import uploadimg from '../assets/upload-img.png';
import {  Button } from 'react-bootstrap';

const GreatSavings = () => {
  const imageInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState(null);

  const handleFileUpload = () => {
    imageInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImages(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Cleanup function is not needed for base64 strings
  useEffect(() => {
    return () => {
      // No cleanup needed for base64 strings
    };
  }, []);

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card my-2">
              <div className="card-body px-4 py-2">
                <h4 className="mb-4">Create Home Page Banner</h4>

                <div className="mb-4">
                  <label className="form-label">Title</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="You Tube URL:" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Short Tag Line </label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="You Tube URL:" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Price</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="You Tube URL:" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">URL</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="You Tube URL:" />
                  </div>
                </div>

                {/* Image Upload Section */}
                <div className="mb-4">
                  <label className="form-label">Banner Image</label>
                  <div className="border rounded p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="text-center">
                      {selectedImages ? (
                        <div className="position-relative mb-3">
                          <img 
                            src={selectedImages} 
                            alt="Preview" 
                            className="img-fluid rounded"
                            style={{ 
                              maxHeight: '100px', 
                              objectFit: 'contain',
                              margin: '0 auto',
                              display: 'block'
                            }}
                          />
                          <button
                            type="button"
                            className="btn btn-danger btn-sm position-absolute"
                            style={{ top: '5px', right: '5px' }}
                            onClick={() => {
                              setSelectedImages(null);
                              if (imageInputRef.current) {
                                imageInputRef.current.value = '';
                              }
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <div 
                          className="upload-placeholder" 
                          onClick={handleFileUpload}
                          style={{
                            cursor: 'pointer',
                            padding: '2rem',
                            backgroundColor: '#fff',
                            borderRadius: '0.5rem',
                            display: 'inline-block'
                          }}
                        >
                          <img 
                            src={uploadimg}
                            alt="Upload" 
                            style={{ width: '50px', marginBottom: '10px' }} 
                          />
                          <h5 className="mb-2">Browse Image</h5>
                          <p className="text-muted mb-0">From Drive</p>
                        </div>
                      )}
                    </div>
                    
                    <input
                      type="file"
                      id="imageUpload"
                      className="d-none"
                      accept="image/*"
                      ref={imageInputRef}
                      onChange={handleImageUpload}
                    />
                    
                    <div className="text-center mt-3">
                      <Button
                        variant="dark"
                        className="px-4 py-2"
                        onClick={handleFileUpload}
                      >
                        <i className="bx bx-upload me-1"></i>
                        {selectedImages ? 'Change Image' : 'Choose Image'}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-danger px-5">Data Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreatSavings;
