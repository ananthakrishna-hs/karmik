import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { formatDate } from 'utils/helpers';

function QuestionCard({ questionData }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className='text-center'>{questionData.author}</Card.Title>
        <Card.Text className='mb-2 text-muted text-center'>
          {formatDate(questionData.timestamp)}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='text-center'>
        <Button variant='info'>View</Button>
      </Card.Footer>
    </Card>
  )
}

const mapStateToProps = ({ questions }, { questionId }) => ({
  questionData: questions[questionId]
});

export default connect(mapStateToProps)(QuestionCard);