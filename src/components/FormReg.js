import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function FormReg() {
  const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="m-5" >
        <Header/>
      </div>
      <div
        className="container border border-dark rounded mt-5 p-5"
        style={{ width: "50rem" }}
      >
        <div className="form">
          <div>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
          <div>
            <label htmlFor="mno" className="form-label">
              Mobile Number
            </label>
            <input type="text" name="mno" id="mno" className="form-control" />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="service" className="form-label">
              Booked Service
            </label>
            <input
              type="text"
              name=""
              placeholder="Non-vegetarian"
              id=""
              className="form-control disabled"
            />
          </div>
          <div>
            <label htmlFor="service" className="form-label">
              Cost
            </label>
            <input
              type="text"
              name=""
              placeholder="300"
              id=""
              className="form-control disabled"
            />
          </div>
          <div>
            <label htmlFor="address" className="form-label">
              Adderss
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-control"
            />
          </div>
          <div className="mt-3">
            <Button variant="primary" onClick={handleShow}>
              Submit
            </Button>

            <Modal show={show} onHide={()=>{navigate('/'); handleClose()}}>
              <Modal.Header closeButton>
                <Modal.Title>Success</Modal.Title>
              </Modal.Header>
              <Modal.Body>your booking is Successfull</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={()=>{navigate('/');handleClose()}}>
                  ok
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-primary mt-5 d-block mx-auto" onClick={()=>navigate('/filters')} >Apply Filters</button>
        <div className=" font-weight-bold text-danger text-center">Applying filters may alter the cost</div>
      </div>
    </div>
  );
}

export default FormReg;
