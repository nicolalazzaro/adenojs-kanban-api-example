import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new list.
 */
export const createListValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing list.
 */
export const updateListValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255).optional(),
  })
)

export const boardIdValidator = vine.compile(
  vine.object({
    board_id: vine
      .number()
      .withoutDecimals()
      .positive()
      .exists(async (db, value) => {
        const board = await db.from('boards').where('id', value).first()
        return !!board
      }),
  })
)
