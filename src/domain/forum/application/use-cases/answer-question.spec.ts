import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer Question', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('create an answer', async () => {
    const { answer } = await sut.execute({
      questionId: 'question-1',
      instructorId: 'instructor-1',
      content: 'This is the content of the answer.',
    })

    expect(answer.id).toBeTruthy()
    expect(inMemoryAnswersRepository.items[0]?.id).toEqual(answer.id)
  })
})
