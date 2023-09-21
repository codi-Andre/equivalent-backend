import { createFood } from '@/controllers/create-food-controller'
import { getFoodList } from '@/controllers/food-read-controller'
import { FastifyInstance } from 'fastify'

export async function foodRoutes(server: FastifyInstance) {
  server.get('/food', getFoodList)

  server.post('/food', createFood)
}
