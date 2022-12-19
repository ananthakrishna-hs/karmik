import { Container, Row, Col, Image } from 'react-bootstrap';

function NotFound() {

  return (
    <Container fluid>
      <Row className='justify-content-center mt-4'>
        <Col xs={12} sm={8}>
          <h1 className='text-center'>404</h1>
          <Image fluid={true} src='https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg' />
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound;