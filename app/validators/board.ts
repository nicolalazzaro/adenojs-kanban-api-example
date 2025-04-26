import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new board.
 */
export const createBoardValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing board.
 */
export const updateBoardValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255).optional(),
  })
)
