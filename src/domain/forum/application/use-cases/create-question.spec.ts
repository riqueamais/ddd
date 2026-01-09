import type { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async () => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: 'author-1',
    title: 'Sample Question Title',
    content: 'This is the content of the question.',
  })

  expect(question.id).toBeTruthy()
  expect(question.content).toEqual('This is the content of the question.')
})
