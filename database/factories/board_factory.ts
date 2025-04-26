import factory from '@adonisjs/lucid/factories'
import Board from '#models/board'
import { ListFactory } from '#database/factories/list_factory'

export const BoardFactory = factory
  .define(Board, async ({ faker }) => {
    return {
      name: faker.lorem.words(2),
    }
  })
  .relation('lists', () => ListFactory)
  .build()
