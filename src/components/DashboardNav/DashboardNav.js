import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLoggedInUser } from 'data/actions/loggedInUser';

function DashboardNav({ dispatch, username }) {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(setLoggedInUser(null));
    navigate('/');
  }

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
            <Navbar.Text>{ username }</Navbar.Text>
            <Button onClick={event => handleLogout(event)} variant='link'>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default connect()(DashboardNav);