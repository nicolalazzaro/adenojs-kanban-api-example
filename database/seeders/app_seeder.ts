import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { BoardFactory } from '#database/factories/board_factory'

export default class extends BaseSeeder {
  async run() {
    await BoardFactory.with('lists', 3, (list) => list.with('cards', 5)).createMany(3)
  }
}
