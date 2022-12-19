import { useState } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(id, password);
    navigate('/dashboard/home');
  }

  return (
    <Container fluid>
      <Row className='justify-content-center mt-4'>
        <Col xs={12} sm={8} md={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicID">
              <Form.Label>Login ID</Form.Label>
              <Form.Control type="text" placeholder="Enter your login ID"
                onChange={event => setID(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" 
                onChange={event => setPassword(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit"
              onClick={event => handleSubmit(event)}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;