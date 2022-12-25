import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { formatDate } from 'utils/helpers';

function QuestionCard({ questionData }) {
  const navigate = useNavigate();

  const viewQuestion = (event) => {
    event.preventDefault();
    navigate(`/dashboard/questions/${questionData.id}`);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className='text-center'>{questionData.author}</Card.Title>
        <Card.Text className='mb-2 text-muted text-center'>
          {formatDate(questionData.timestamp)}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='text-center'>
        <Button variant='info' onClick={event => viewQuestion(event)}>View</Button>
      </Card.Footer>
    </Card>
  )
}

const mapStateToProps = ({ questions }, { questionId }) => ({
  questionData: questions[questionId]
});

export default connect(mapStateToProps)(QuestionCard);