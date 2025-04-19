import React, { useRef, useState, useEffect } from 'react';
import uploadimg from '../assets/upload-img.png';

const ManageArtisanBlogs = () => {
  const imageInputRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileUpload = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const remainingSlots = 10 - selectedImages.length;

    if (files.length > remainingSlots) {
      alert(`You can only add ${remainingSlots} more image${remainingSlots === 1 ? '' : 's'}. Maximum limit is 10 images.`);
      return;
    }

    const newImages = files.map(file => ({
      url: URL.createObjectURL(file),
      file: file
    }));

    setSelectedImages(prevImages => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setSelectedImages(prevImages => {
      const updatedImages = prevImages.filter((_, i) => i !== index);
      // Cleanup object URLs to prevent memory leaks
      URL.revokeObjectURL(prevImages[index].url);
      return updatedImages;
    });
  };

  // Cleanup object URLs when component unmounts
  useEffect(() => {
    return () => {
      selectedImages.forEach(image => {
        URL.revokeObjectURL(image.url);
      });
    };
  }, [selectedImages]);

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card my-2">
              <div className="card-body px-4 py-2">
                <h4 className="mb-4">Create Promotions Video / Image</h4>

                <div className="mb-4">
                  <label className="form-label">Title Of Artisan Video</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="You Tube URL:" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Artisan Images</label>
                  <div className="border rounded p-4">
                    <div className="text-center mb-3">
                      {selectedImages.length === 0 ? (
                        <div className="upload-placeholder" onClick={handleFileUpload}>
                          <img src={uploadimg} width="50" alt="Upload" className="mb-2" />
                          <h5 className="mb-1">Browse Image</h5>
                          <p className="text-muted">From Drive</p>
                        </div>
                      ) : (
                        <div className="row g-3">
                          {selectedImages.map((image, index) => (
                            <div key={index} className="col-md-4 col-sm-6">
                              <div className="position-relative">
                                <img 
                                  src={image.url} 
                                  alt={`Preview ${index + 1}`} 
                                  className="img-fluid rounded"
                                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                                />
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm position-absolute"
                                  style={{ top: '5px', right: '5px' }}
                                  onClick={() => removeImage(index)}
                                >
                                  ×
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <input
                      type="file"
                      id="imageInput"
                      className="d-none"
                      accept="image/*"
                      ref={imageInputRef}
                      multiple
                      onChange={handleImageChange}
                    />
                    
                    <div className="text-center">
                      {selectedImages.length < 10 ? (
                        <button 
                          type="button" 
                          className="btn btn-dark px-4 py-2" 
                          onClick={handleFileUpload}
                        >
                          <i className="bx bx-upload me-1"></i> 
                          {selectedImages.length === 0 ? 'Choose Files' : 'Add More Images'}
                        </button>
                      ) : (
                        <p className="text-danger mb-0">Maximum limit of 10 images reached</p>
                      )}
                      <div className="mt-2">
                        <small className={`text-${selectedImages.length === 10 ? 'danger' : 'muted'}`}>
                          {selectedImages.length}/10 images selected
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Short Description</label>
                  <textarea className="form-control" rows="4"></textarea>
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

export default ManageArtisanBlogs;
