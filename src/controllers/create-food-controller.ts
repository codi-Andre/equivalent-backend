import { Food } from '@/entities/food'
import { makeAddFoodRepository } from '@/use-cases/add-food/add-food-factory'
import { FoodAlreadyExistsError } from '@/use-cases/errors/food-already-exists-error'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function createFood(request: FastifyRequest, reply: FastifyReply) {
  const foodRequest = request.body

  console.log(foodRequest) // lembrar de apagar depois

  try {
    const foodRepository = makeAddFoodRepository()

    const newFood = await foodRepository.execute(foodRequest as Food)

    return reply.status(201).send(newFood)
  } catch (error) {
    console.error(error)

    if (error instanceof FoodAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    return reply.status(500).send()
  }
}
