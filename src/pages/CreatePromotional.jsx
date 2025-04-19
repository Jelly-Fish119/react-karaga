import React from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';

const CreatePromotional = () => {
  return (
    <div className="d-flex">
      <div className="flex-grow-1">

        <main className="p-4">

          {/* Testimonial Form */}
          <div className="card shadow-sm mb-4">
            <div className="card-body p-3">
              <h3 className="card-title mb-3 text-center">Create Promotions Testimonial / Review</h3>
              <Form id="testimonialForm">
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Type Here" required className="form-control-lg" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="d-block">Star Rating</Form.Label>
                  <div className="d-flex justify-content-center gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Form.Check key={star} inline className="form-check-inline">
                        <Form.Check.Input
                          type="radio"
                          name="rating"
                          id={`star${star}`}
                          value={star}
                          className="d-none"
                        />
                        <Form.Check.Label htmlFor={`star${star}`} className="fs-3">
                          <i className="bx bx-star"></i>
                        </Form.Check.Label>
                      </Form.Check>
                    ))}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Short Description</Form.Label>
                  <Form.Control type="text" placeholder="Type Here" required className="form-control-lg" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Short Description</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type Here" required className="form-control-lg" />
                </Form.Group>

                <div className="text-center mt-3">
                  <Button type="submit" className="btn btn-dark btn-lg px-5">Data Save</Button>
                </div>
              </Form>
            </div>
          </div>

          {/* User Table */}
         
        </main>

        <footer className="text-center py-3 bg-light">
          {new Date().getFullYear()} © Rishikesh Handmade. Created by <span className="text-danger">❤</span>
        </footer>
      </div>
    </div>
  );
};

export default CreatePromotional;
