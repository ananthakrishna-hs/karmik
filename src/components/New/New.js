import { useState } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function New () {
  const [firstOption, setFirstOption] = useState('');
  const [secondOption, setSecondOption] = useState('');

  return (
    <Container fluid>
      <Row className='justify-content-center mt-4'>
        <Col xs={12} sm={8} md={4}>
          <h1>Would you rather?</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>First option</Form.Label>
              <Form.Control type="text" placeholder="Enter option text"
                onChange={event => setFirstOption(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Second Option</Form.Label>
              <Form.Control type="text" placeholder="Enter option text" 
                onChange={event => setSecondOption(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" 
              disabled={!firstOption || !secondOption}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default New;