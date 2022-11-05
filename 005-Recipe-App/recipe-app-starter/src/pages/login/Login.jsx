import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setUser(true);
    navigate(-1);
  };
  return (
    <div>
      <Form className="m-4">
        <div>
          <input type="email" placeholder="Enter a mail" />
        </div>
        <div className="m-4">
          <input type="password" placeholder="Enter a password" />
        </div>
        <Button variant="primary" type="button" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
