import React from 'react';

import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';

import QuestionCard from 'components/QuestionCard/QuestionCard';

function Home ({ votedQuestionIds, toDoQuestionIds }) {
  return (
    <React.Fragment>
      <Container fluid>
        <Row className='justify-content-center mt-4'>
          <Col xs={10}>
            <Tabs
              defaultActiveKey='todo'
              className='mb-3'
            >
              <Tab eventKey='todo' title='To Do'>
              <Card>
                <Card.Header>
                  To Do
                </Card.Header>
                <Card.Body>
                  <Row>
                    {
                      toDoQuestionIds.map(questionId => (
                        <Col xs={12} sm={6} md={4} className='mt-3' key={questionId}>
                          <QuestionCard questionId={questionId} />
                        </Col>
                      ))
                    }
                  </Row>
                </Card.Body>
              </Card>
              </Tab>
              <Tab eventKey='done' title='Done'>
              <Card>
                <Card.Header>
                  Done
                </Card.Header>
                <Card.Body>
                  <Row>
                    {
                      votedQuestionIds.map(questionId => (
                        <Col xs={12} sm={6} md={4} className='mt-3' key={questionId}>
                          <QuestionCard questionId={questionId} />
                        </Col>
                      ))
                    }
                  </Row>
                </Card.Body>
              </Card>
              </Tab>
            </Tabs>
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
    )
  };
};

export default connect(mapStateToProps)(Home);