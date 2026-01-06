import { AnswerQuestionUseCase } from './answer-question'
import type { AnswersRepository } from '../repositories/answers-repository'

const fakeAnswersRepository: AnswersRepository = {
  create: async () => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    instructorId: 'instructor-1',
    questionId: 'question-1',
    content: 'This is the answer to your question.',
  })

  expect(answer.content).toEqual('This is the answer to your question.')
})
