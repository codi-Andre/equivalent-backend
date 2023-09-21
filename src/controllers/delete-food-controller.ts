import { makeDeleteFoodRepository } from '@/use-cases/delete-food/delete-food-factory'
import { BadRequestError } from '@/use-cases/errors/bad-request-error'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function deleteFood(request: FastifyRequest, reply: FastifyReply) {
  const { foodId } = request.params as { foodId: string }

  console.log(foodId, request.params) // lembrar de apagar depois

  try {
    const foodRepository = makeDeleteFoodRepository()

    await foodRepository.execute(foodId)

    return reply.status(200).send()
  } catch (error) {
    if (error instanceof BadRequestError) {
      return reply.status(400).send({ message: error.message })
    }

    return reply.status(500).send()
  }
}
