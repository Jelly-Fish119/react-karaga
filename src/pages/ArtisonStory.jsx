const ArtisonStory = () => {
  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card my-2">
              <div className="card-body px-4 py-6">
                <h4 className="mb-4">Create Promotions Video / Image</h4>

                <div className="mb-4">
                  <label className="form-label">Title Of Artisan Video</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="You Tube URL:" />
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

export default ArtisonStory;
