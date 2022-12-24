import React, { useEffect } from 'react';

import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleSaveAnswer } from 'data/actions/shared';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
}

function QuestionDetail({ author, question, option, router, dispatch }) {
  const navigate = useNavigate();
  const id = router.params.id;

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionOneStats = {
    votes: optionOneVotes,
    percentage: totalVotes === 0 ? 0 : Math.round(optionOneVotes / totalVotes * 10000) / 100
  };

  const optionTwoStats = {
    votes: optionTwoVotes,
    percentage: totalVotes === 0 ? 0 : Math.round(optionTwoVotes / totalVotes * 10000) / 100
  };

  const handleVote = (event, option) => {
    event.preventDefault();

    dispatch(handleSaveAnswer(id, option));
  }



  useEffect(() => {
    if (!id) {
      navigate('*');
    }
  }, [id, navigate])

  return (
    <Container fluid>
      <Row className='justify-content-center mt-4'>
        <Col xs={12} sm={10}>
          <Card>
            <Card.Header>Poll By {author.name}</Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={author.avatarURL} height='200'/>
              <Card.Title className='text-center'>
                Would You Rather
                {
                  option ? (
                    <React.Fragment>
                      &nbsp;({totalVotes} votes)
                    </React.Fragment>
                  ) : null
                }
              </Card.Title>
              <Row>
                <Col className='border border-info rounded p-0 text-center' xs={6}>
                  {question.optionOne.text}
                  <br />
                  {
                    option ? (
                      <Button variant={option === 'optionOne' ? 'primary' : 'secondary'} className='w-100' disabled={true}>
                        {optionOneStats.votes} ({optionOneStats.percentage}%)
                      </Button>
                    ) : (
                      <Button variant='primary' className='w-100'
                        onClick={event => handleVote(event, 'optionOne')}
                      >
                        Select
                      </Button>
                    )
                  }
                </Col>
                <Col className='border border-info rounded p-0 text-center' xs={6}>
                  {question.optionTwo.text}
                  <br />
                  {
                    option ? (
                      <Button variant={option === 'optionTwo' ? 'primary' : 'secondary'} className='w-100' disabled={true}>
                        {optionTwoStats.votes} ({optionTwoStats.percentage}%)
                      </Button>
                    ) : (
                      <Button variant='primary' className='w-100'
                        onClick={event => handleVote(event, 'optionTwo')}
                      >
                        Select 
                      </Button>
                    )
                  }
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = ({ users, questions, loggedInUser }, { router }) => {
  const id = router.params.id;
  return {
    author: users[questions[id].author],
    question: questions[id],
    option: users[loggedInUser].answers[id] ? users[loggedInUser].answers[id] : null
  }
};

export default withRouter(connect(mapStateToProps)(QuestionDetail));