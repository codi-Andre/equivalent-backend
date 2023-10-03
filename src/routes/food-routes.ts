import { createFood } from '@/controllers/create-food-controller'
import { deleteFood } from '@/controllers/delete-food-controller'
import { getFoodList } from '@/controllers/read-food-controller'
import { FastifyInstance } from 'fastify'

export async function foodRoutes(server: FastifyInstance) {
  server.get('/food', getFoodList)

  server.post('/food', createFood)

  server.delete('/food/:foodId', deleteFood)
}
