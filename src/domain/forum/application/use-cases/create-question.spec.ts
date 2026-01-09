import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('create a question', async () => {
    const { question } = await sut.execute({
      authorId: 'author-1',
      title: 'Sample Question Title',
      content: 'This is the content of the question.',
    })

    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionsRepository.items[0]?.id).toEqual(question.id)
  })
})
