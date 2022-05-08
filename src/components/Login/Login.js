import React from "react";
import { Form } from "react-bootstrap";
import {Link, useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {

    const navigate=useNavigate()
  return (
    <div className="login-container w-50   mx-auto ">
      <div className="form-control pb-3">
        <h4 className="py-2">Please Login</h4>
        <Form>
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
                  <p>Forger password? <a href="">reset password</a></p>
              <p>New as sailing now user? <span className="register-transfer" onClick={()=> navigate('/register')}>please register</span>  </p>
             </div>
      </div>
    </div>
  );
};

export default Login;
