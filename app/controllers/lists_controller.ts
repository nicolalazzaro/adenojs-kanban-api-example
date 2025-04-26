import type { HttpContext } from '@adonisjs/core/http'
import List from '#models/list'
import { boardIdValidator, createListValidator, updateListValidator } from '#validators/list'

export default class ListsController {
  /**
   * @index
   * @tag list
   * @responseBody 200 - <List[]>
   */
  async index({ params }: HttpContext) {
    const { board_id: boardId } = await boardIdValidator.validate(params)
    return List.query().where('board_id', boardId)
  }

  /**
   * @store
   * @tag list
   * @requestBody <createListValidator>
   * @responseBody 201 - <List>
   */
  async store({ params, request, response }: HttpContext) {
    const { board_id: boardId } = await boardIdValidator.validate(params)
    const payload = await createListValidator.validate(request.all())
    const list = await List.create({
      boardId: boardId,
      ...payload,
    })
    return response.status(201).json(list)
  }

  /**
   * @show
   * @tag list
   * @responseBody 200 - <List>
   */
  async show({ params }: HttpContext) {
    return List.findOrFail(params.id)
  }

  /**
   * @update
   * @tag list
   * @requestBody <updateListValidator>
   * @responseBody 200 - <List>
   */
  async update({ params, request }: HttpContext) {
    const payload = await updateListValidator.validate(request.all())
    const list = await List.findOrFail(params.id)
    list.merge(payload)
    return list.save()
  }

  /**
   * @destroy
   * @tag list
   * @responseBody 204 - {}
   */
  async destroy({ params, response }: HttpContext) {
    const list = await List.findOrFail(params.id)
    await list.delete()
    return response.noContent()
  }
}
