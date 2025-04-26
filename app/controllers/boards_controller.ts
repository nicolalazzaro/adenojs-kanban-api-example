import type { HttpContext } from '@adonisjs/core/http'
import Board from '#models/board'
import { createBoardValidator, updateBoardValidator } from '#validators/board'

export default class BoardsController {
  /**
   * @index
   * @tag board
   * @responseBody 200 - <Board[]>
   */
  async index({}: HttpContext) {
    return Board.all()
  }

  /**
   * @store
   * @tag board
   * @requestBody <createBoardValidator>
   * @responseBody 201 - <Board>
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await createBoardValidator.validate(data)
    const board = await Board.create(payload)
    return response.status(201).json(board)
  }

  /**
   * @show
   * @tag board
   * @responseBody 200 - <Board>
   */
  async show({ params }: HttpContext) {
    return Board.findOrFail(params.id)
  }

  /**
   * @update
   * @tag board
   * @requestBody <updateBoardValidator>
   * @responseBody 200 - <Board>
   */
  async update({ params, request }: HttpContext) {
    const data = request.all()
    const payload = await updateBoardValidator.validate(data)
    const board = await Board.findOrFail(params.id)
    board.merge(payload)
    return board.save()
  }

  /**
   * @destroy
   * @tag board
   * @responseBody 204 - {}
   */
  async destroy({ params, response }: HttpContext) {
    const board = await Board.findOrFail(params.id)
    await board.delete()
    return response.noContent()
  }
}
