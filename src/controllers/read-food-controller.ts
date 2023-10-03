import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFoodList } from '../use-cases/food-list/food-list-factory'
import { OrderOptions } from '../use-cases/food-list/food-list-interfaces'

interface IQuerystring {
  sort: string
  order: string
}

export async function getFoodList(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  // Adaptar input
  const { sort, order } = request.query as IQuerystring

  let orderOption
  if (order) {
    orderOption = order === 'desc' ? OrderOptions.DESC : OrderOptions.ASC
  }

  console.log(sort, order) // lembrar de apagar depois

  try {
    // chamar factory
    const foodListUseCase = makeFoodList()

    // executa use-case
    const res = await foodListUseCase.execute(sort, orderOption)

    return res
  } catch (err) {
    console.error(err)
  }
}
