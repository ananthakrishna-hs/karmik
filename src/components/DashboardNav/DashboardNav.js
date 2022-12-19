import { Container, Navbar, Nav, Button } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

function DashboardNav() {

  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Karmik</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='home' >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='leaderboard'>
              Leaderboard
            </Nav.Link>
            <Nav.Link as={NavLink} to='new'>
              New
            </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>Tyler</Navbar.Text>
            <Button as={NavLink} to='/' variant='link'>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DashboardNav;