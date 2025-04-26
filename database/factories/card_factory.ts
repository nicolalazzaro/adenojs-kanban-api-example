import factory from '@adonisjs/lucid/factories'
import Card from '#models/card'
import { DateTime } from 'luxon'

export const CardFactory = factory
  .define(Card, async ({ faker }) => {
    return {
      name: faker.lorem.words(3),
      desc: faker.lorem.sentence(),
      pos: faker.number.int({ min: 1, max: 100 }),
      due: faker.datatype.boolean() ? DateTime.fromJSDate(faker.date.future()) : undefined,
      start: faker.datatype.boolean() ? DateTime.fromJSDate(faker.date.past()) : undefined,
      dueComplete: faker.datatype.boolean(),
    }
  })
  .build()
