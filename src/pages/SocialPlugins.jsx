import React from 'react';
import fb from '../assets/fb.png';
import google from '../assets/google.png';
import insta from '../assets/insta.png';
import web from '../assets/web.png';
const SocialPlugins = () => {
  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Artisan Social Plugin</h4>
              </div>
              <div className="card-body">
                <form id="socialPluginForm">
                  {/* Facebook */}
                  <div className="mb-3">
                    <label className="form-label">Facebook</label>
                    <div className="input-group">
                      <input type="url" className="form-control" placeholder="URL :" style={{ backgroundColor: '#D3D3D3' }} />
                      <span className="input-group-text">
                        <img src={fb} alt="Facebook" style={{ width: '30px', height: '30px' }} />
                      </span>
                    </div>
                  </div>

                  {/* Google */}
                  <div className="mb-3">
                    <label className="form-label">Google</label>
                    <div className="input-group">
                      <input type="url" className="form-control" placeholder="URL :" style={{ backgroundColor: '#D3D3D3' }} />
                      <span className="input-group-text">
                        <img src={google} alt="Google" style={{ width: '30px', height: '30px' }} />
                      </span>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="mb-3">
                    <label className="form-label">Instagram</label>
                    <div className="input-group">
                      <input type="url" className="form-control" placeholder="URL :" style={{ backgroundColor: '#D3D3D3' }} />
                      <span className="input-group-text">
                        <img src={insta} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                      </span>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="mb-3">
                    <label className="form-label">Website</label>
                    <div className="input-group">
                      <input type="url" className="form-control" placeholder="URL :" style={{ backgroundColor: '#D3D3D3' }} />
                      <span className="input-group-text">
                        <img src={web} alt="Website" style={{ width: '30px', height: '30px' }} />
                      </span>
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

      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              {new Date().getFullYear()} &copy; Larkon. Crafted by
              <span className="fs-18 align-middle text-danger"> ❤ </span>
              <a href="https://1.envato.market/techzaa" className="fw-bold footer-text" target="_blank" rel="noopener noreferrer">
                Techzaa
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SocialPlugins;
