import factory from '@adonisjs/lucid/factories'
import List from '#models/list'
import { CardFactory } from '#database/factories/card_factory'

export const ListFactory = factory
  .define(List, async ({ faker }) => {
    return {
      name: faker.lorem.words(2),
    }
  })
  .relation('cards', () => CardFactory)
  .build()
