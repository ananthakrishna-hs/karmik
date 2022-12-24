import { _saveQuestion,  _saveQuestionAnswer } from 'utils/_DATA';

describe('Test save question', () => {
  it('when valid data is passed, question is saved', async() => {
    const mockQuestion = {
      optionOneText: 'TestText1',
      optionTwoText: 'TestText2',
      author: 'testAuthor'
    };
    const response = await _saveQuestion(mockQuestion);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('timestamp');
  })

  it('when invalid data is passed, question is not saved', async() => {
    const response = _saveQuestion({});
    await expect(response).rejects.toBeTruthy();
  })
});

describe('Test save answer', () => {
  it('when valid data is passed, answer is saved', async() => {
    const mockAnswer = {
      authedUser: 'sarahedo',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne'
    };
    const response = await _saveQuestionAnswer(mockAnswer);
    expect(response).toBeTruthy();
  });

  it('when invalid data is passed, answer is not saved', async() => {
    const response = _saveQuestionAnswer({});
    await expect(response).rejects.toBeTruthy();
  });
});