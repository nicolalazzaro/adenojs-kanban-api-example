import type { HttpContext } from '@adonisjs/core/http'
import Card from '#models/card'
import { createCardValidator, listIdValidator, updateCardValidator } from '#validators/card'

export default class CardsController {
  /**
   * @index
   * @tag card
   * @responseBody 200 - <Card[]>
   */
  async index({ params }: HttpContext) {
    const { list_id: listId } = await listIdValidator.validate(params)
    return Card.query().where('list_id', listId)
  }

  /**
   * @store
   * @tag card
   * @requestBody <createCardValidator>
   * @responseBody 201 - <Card>
   */
  async store({ params, request, response }: HttpContext) {
    const { list_id: listId } = await listIdValidator.validate(params)
    const payload = await createCardValidator.validate(request.all())
    const card = await Card.create({
      listId: listId,
      ...payload,
    })
    await card.refresh()
    return response.status(201).json(card)
  }

  /**
   * @show
   * @tag card
   * @responseBody 200 - <Card>
   */
  async show({ params }: HttpContext) {
    return Card.findOrFail(params.id)
  }

  /**
   * @update
   * @tag card
   * @requestBody <updateCardValidator>
   * @responseBody 200 - <Card>
   */
  async update({ params, request }: HttpContext) {
    const payload = await updateCardValidator.validate(request.all())
    const card = await Card.findOrFail(params.id)
    card.merge(payload)
    return card.save()
  }

  /**
   * @destroy
   * @tag card
   * @responseBody 204 - {}
   */
  async destroy({ params, response }: HttpContext) {
    const card = await Card.findOrFail(params.id)
    await card.delete()
    return response.noContent()
  }
}
