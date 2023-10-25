import { randomUUID } from 'crypto'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function userRoutes(server: FastifyInstance) {
  server.post('/login', (request: FastifyRequest, reply: FastifyReply) => {
    const { email } = request.body as { email: unknown; password: unknown }
    return reply
      .status(200)
      .send({ token: randomUUID(), email, name: 'Testonildo' })
  })

  server.post(
    '/login/sign-up',
    (request: FastifyRequest, reply: FastifyReply) => {
      const { name, email } = request.body as {
        name: unknown
        email: unknown
      }
      return reply.status(200).send({ token: randomUUID(), email, name })
    },
  )
}
