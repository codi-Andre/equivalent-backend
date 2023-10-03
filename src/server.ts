import cors from '@fastify/cors'
import Fastify, { FastifyInstance } from 'fastify'
import { foodRoutes } from './routes/food-routes'

const server: FastifyInstance = Fastify({})

server.register(cors, {
  origin: '*',
})
server.register(foodRoutes)

const start = async () => {
  try {
    await server
      .listen({ port: 3000 })
      .then(() => console.log('Server is running in port:3000'))
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
