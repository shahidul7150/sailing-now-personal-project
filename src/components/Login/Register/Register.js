import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate()
   return (
        <div className="login-container w-50   mx-auto ">
          <div className="form-control pb-3">
            <h4 className="py-2">Please Register now</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="w-100"
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="w-100"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <button className="btn btn-success">Login</button>
                  </Form>
                  <div className="link-pass-reg">
                  <p>Already have an account ? <span className="register-transfer" onClick={()=> navigate('/login')}>please login</span>  </p>
                 </div>
          </div>
        </div>
      );
};

export default Register;