import { randomUUID } from 'crypto'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function userRoutes(server: FastifyInstance) {
  server.post('/login', (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = request.body as { email: any; password: any }
    return reply
      .status(200)
      .send({ token: randomUUID(), email, name: 'Testonildo' })
  })
}
