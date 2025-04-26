import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import List from '#models/list'
import db from '@adonisjs/lucid/services/db'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare listId: number

  @belongsTo(() => List)
  declare list: BelongsTo<typeof List>

  @column()
  declare name: string

  @column()
  declare desc: string

  @column()
  declare pos: number

  @beforeCreate()
  static async setPos(card: Card) {
    if (card.pos !== undefined && card.pos !== null) {
      return
    }

    const result = await db.from('cards').where('list_id', card.listId).max('pos as maxPos').first()

    const maxPos = result?.maxPos ?? 0

    card.pos = maxPos + 1
  }

  @column.dateTime()
  declare due: DateTime

  @column.dateTime()
  declare start: DateTime

  @column()
  declare dueComplete: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
