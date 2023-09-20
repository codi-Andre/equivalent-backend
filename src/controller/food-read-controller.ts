import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFoodList } from '../usecases/food-list/food-list-factory'

export async function getFoodList(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  // Adaptar input
  try {
    // chamar factory
    const foodListUseCase = makeFoodList()

    // executa usecase
    const res = await foodListUseCase.execute()

    return res
  } catch (err) {
    console.error(err)
  }
}
