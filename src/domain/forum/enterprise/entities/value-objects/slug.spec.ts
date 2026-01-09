import { Slug } from './slug'

test('it should be able to create a slug from a text', () => {
  const slug = Slug.createFromText('An example title')

  console.log(slug.value)
  expect(slug.value).toEqual('an-example-title')
})
