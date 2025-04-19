import React, { useRef, useState, useEffect } from 'react';
import uploadimg from '../assets/upload-img.png';

const Certificate = () => {
  const imageInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileUpload = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage({
        url: imageUrl,
        file: file
      });
    }
  };

  const removeImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage.url);
      setSelectedImage(null);
      if (imageInputRef.current) {
        imageInputRef.current.value = '';
      }
    }
  };

  // Cleanup object URL when component unmounts or image changes
  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage.url);
      }
    };
  }, [selectedImage]);

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Create Artisan Certificate </h2>
              </div>
              <div className="card-body">
                <form id="certificateForm">
                  {/* Certificate Name */}
                  <div className="mb-3">
                    <label htmlFor="certificateName" className="form-label">Certificate Name</label>
                    <input type="text" className="form-control" id="certificateName" placeholder="Type Here" style={{ backgroundColor: '#D3D3D3' }} />
                  </div>

                  {/* Year of Issue */}
                  <div className="mb-3">
                    <input type="text" className="form-control" id="yearOfIssue" placeholder="Year's Of Issue" style={{ backgroundColor: '#D3D3D3' }} />
                  </div>

                  {/* Specialized In */}
                  <div className="mb-3">
                    <select className="form-select" id="specializedIn" style={{ backgroundColor: '#D3D3D3' }}>
                      <option defaultValue>Specialized In</option>
                      <option value="1">Handicrafts</option>
                      <option value="2">Textiles</option>
                      <option value="3">Pottery</option>
                      <option value="4">Woodwork</option>
                    </select>
                  </div>

                  {/* Certificate Issue From */}
                  <div className="mb-3">
                    <input type="text" className="form-control" id="certificateIssueFrom" placeholder="Certificate Issue From" style={{ backgroundColor: '#D3D3D3' }} />
                  </div>

                  {/* Certificate Image */}
                  <div className="mb-4">
                    <label className="form-label">Certificate Image</label>
                    <div className="border rounded p-4" style={{ backgroundColor: '#D3D3D3' }}>
                      {selectedImage ? (
                        <div className="position-relative mb-3">
                          <img 
                            src={selectedImage.url} 
                            alt="Certificate Preview" 
                            className="img-fluid rounded"
                            style={{ maxHeight: '200px', objectFit: 'contain' }}
                          />
                          <button
                            type="button"
                            className="btn btn-danger btn-sm position-absolute"
                            style={{ top: '5px', right: '5px' }}
                            onClick={removeImage}
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <div className="text-center mb-3">
                          <img src={uploadimg} width="50" alt="Upload" className="mb-2" />
                          <h5 className="mb-2">Browse Image</h5>
                          <p className="text-muted mb-3">From Drive</p>
                        </div>
                      )}
                      
                      <div className="text-center">
                        <input 
                          type="file" 
                          id="imageInput" 
                          className="d-none" 
                          accept="image/*" 
                          ref={imageInputRef}
                          onChange={handleImageChange}
                        />
                        <button 
                          type="button" 
                          className="btn btn-dark px-4 py-2" 
                          onClick={handleFileUpload}
                        >
                          <i className="bx bx-upload me-1"></i> 
                          {selectedImage ? 'Change Image' : 'Choose File'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-danger px-5">Data Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              {new Date().getFullYear()} &copy; Larkon. Crafted by{' '}
              <span className="fs-18 align-middle text-danger">
                <i className="iconamoon-heart-duotone"></i>
              </span>{' '}
              <a
                href="https://1.envato.market/techzaa"
                className="fw-bold footer-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                Techzaa
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Certificate;
