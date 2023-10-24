import cors from '@fastify/cors'
import Fastify, { FastifyInstance } from 'fastify'
import { foodRoutes } from './routes/food-routes'
import { userRoutes } from './routes/user-routes'

const server: FastifyInstance = Fastify({})

server.register(cors, {
  origin: '*',
})
server.register(foodRoutes)
server.register(userRoutes)

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
