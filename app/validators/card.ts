import vine from '@vinejs/vine'
import { DateTime } from 'luxon'

/**
 * Validator to validate the payload when creating
 * a new card.
 */
export const createCardValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255),
    desc: vine.string().maxLength(500).optional(),
    pos: vine.number().withoutDecimals().optional(),
    due: vine
      .date()
      .nullable()
      .optional()
      .transform((value) => (value ? DateTime.fromJSDate(value) : undefined)),
    start: vine
      .date()
      .nullable()
      .optional()
      .transform((value) => (value ? DateTime.fromJSDate(value) : undefined)),
    dueComplete: vine.boolean().optional(),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing card.
 */
export const updateCardValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255).optional(),
    desc: vine.string().maxLength(500).optional(),
    pos: vine.number().withoutDecimals().optional(),
    due: vine
      .date()
      .nullable()
      .optional()
      .transform((value) => (value ? DateTime.fromJSDate(value) : undefined)),
    start: vine
      .date()
      .nullable()
      .optional()
      .transform((value) => (value ? DateTime.fromJSDate(value) : undefined)),
    dueComplete: vine.boolean().optional(),
  })
)

export const listIdValidator = vine.compile(
  vine.object({
    list_id: vine
      .number()
      .withoutDecimals()
      .positive()
      .exists(async (db, value) => {
        const list = await db.from('lists').where('id', value).first()
        return !!list
      }),
  })
)
