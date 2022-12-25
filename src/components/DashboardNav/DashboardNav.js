import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLoggedInUser } from 'data/actions/loggedInUser';

export function DashboardNav({ dispatch, username, avatar }) {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(setLoggedInUser(null));
    navigate('/');
  }

  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>Karmik</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='home' >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='leaderboard'>
              Leaderboard
            </Nav.Link>
            <Nav.Link as={NavLink} to='add'>
              New
            </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text className='pr-2'>
              <Image src={avatar} roundedCircle={true} width='25px' />
            </Navbar.Text>
            <Navbar.Text>
              { username }
            </Navbar.Text>
            <Button onClick={event => handleLogout(event)} variant='link'>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export const ConnectedDashboardNav =  connect()(DashboardNav);