import { FastifyInstance } from 'fastify'
import { getFoodList } from '../controller/food-read-controller'

export async function foodRoutes(server: FastifyInstance) {
  server.get('/food-list', getFoodList)
}
