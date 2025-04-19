import React, { useRef, useState, useEffect } from 'react';

import {  Button } from 'react-bootstrap';

const MainMenuTitle1 = () => {

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
                  <label className="form-label">Choose Menu Style</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="You Tube URL:" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">Create Main Menu</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="You Tube URL:" />
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

export default MainMenuTitle1;
