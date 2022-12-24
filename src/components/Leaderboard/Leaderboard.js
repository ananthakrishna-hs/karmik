import React from 'react';

import { Table, Container, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

function Leaderboard ({ leaderBoardStats }) {
  return (
    <React.Fragment>
      <Container fluid>
        <Row className='mt-4'>
          <Col xs={12}>
          <Table>
            <thead>
              <tr>
                <th>User</th>
                <th>Answered</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
            {
              leaderBoardStats.map(user => (
                <tr key={user.userId}>
                  <td>
                    <Image src={user.avatar} roundedCircle={true} width='25px' />
                    {user.name}
                    <br />
                    <span className='text-muted'>
                      {user.userId}
                    </span>
                  </td>
                  <td>{user.voted}</td>
                  <td>{user.created}</td>
                </tr>
              ))
            }
            </tbody>
          </Table>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = ({ users }) => {
  let leaderBoardStats = [];
  Object.keys(users).forEach(userId => {
    leaderBoardStats.push({
      name: users[userId].name,
      userId,
      avatar: users[userId].avatarURL,
      created: users[userId].questions.length,
      voted: Object.keys(users[userId].answers).length
    });
  });

  leaderBoardStats.sort((stat1, stat2) => {
    if (stat1.voted !== stat2.voted) {
      return stat2.voted - stat1.voted
    }

    return stat2.created - stat1.created;
  })
  return {
    leaderBoardStats
  }
}

export default connect(mapStateToProps)(Leaderboard);