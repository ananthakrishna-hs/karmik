import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

import QuestionCard from 'components/QuestionCard/QuestionCard';

function Home ({ votedQuestionIds, toDoQuestionIds, loggedInUser }) {
  console.log(votedQuestionIds, toDoQuestionIds, loggedInUser);
  return (
    <React.Fragment>
      <Container fluid>
        <Row className='justify-content-center mt-4'>
          <Col xs={10}>
            <Card>
              <Card.Header>
                To Do
              </Card.Header>
              <Card.Body>
                <Row>
                  {
                    toDoQuestionIds.map(questionId => (
                      <Col xs={12} sm={6} md={4} className='mt-3'>
                        <QuestionCard questionId={questionId} key={questionId} />
                      </Col>
                    ))
                  }
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='justify-content-center mt-4'>
          <Col xs={10}>
            <Card>
              <Card.Header>
                Done
              </Card.Header>
              <Card.Body>
                <Row>
                  {
                    votedQuestionIds.map(questionId => (
                      <Col xs={12} sm={6} md={4} className='mt-3'>
                        <QuestionCard questionId={questionId} key={questionId} />
                      </Col>
                    ))
                  }
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = ({ questions, loggedInUser, users }) => {
  const sortedQuestionIds = Object.keys(questions).sort((a, b) =>
    questions[b].timestamp - questions[a].timestamp
  );
  return {
    votedQuestionIds: sortedQuestionIds.filter(questionId =>
      users[loggedInUser].answers[questionId]
    ),
    toDoQuestionIds: sortedQuestionIds.filter(questionId =>
      !users[loggedInUser].answers[questionId]
    ),
    loggedInUser
  };
};

export default connect(mapStateToProps)(Home);