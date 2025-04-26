/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'

router.get('/', ({ response }) => {
  return response.redirect('/docs')
})

router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})

const BoardsController = () => import('#controllers/boards_controller')
router.resource('boards', BoardsController).apiOnly()

const ListsController = () => import('#controllers/lists_controller')
router.shallowResource('boards.lists', ListsController).apiOnly()

const CardsController = () => import('#controllers/cards_controller')
router.shallowResource('lists.cards', CardsController).apiOnly()
