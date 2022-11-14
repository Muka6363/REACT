import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
const Login = () => {
  return (
    <div className="myForm">
      <div className="email">
        <label htmlFor="">Email</label>
        <input type="email" placeholder="enter a email" />
      </div>
      <div className="password">
        <label htmlFor="">Password</label>
        <input type="password" placeholder="enter a password" />
      </div>
      <button>LOGIN</button>
    </div>

    // <Form>

    /* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button> */

    // </Form>
  );
};

export default Login;
