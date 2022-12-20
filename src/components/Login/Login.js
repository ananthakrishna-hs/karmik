import { useState, useEffect } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLoggedInUser } from 'data/actions/loggedInUser';

function Login({ users, dispatch }) {
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (users && users[id] && users[id].password === password) {
      dispatch(setLoggedInUser(id));
      navigate('/dashboard/home');
      alert(`Welcome ${users[id].name}`);
    } else {
      alert('Invalid credentials');
    }
  }


  useEffect(() => {
    if (Object.keys(users).length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [users])

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
            <Button variant="primary" type="submit" disabled={disabled}
              onClick={event => handleSubmit(event)}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(mapStateToProps)(Login);