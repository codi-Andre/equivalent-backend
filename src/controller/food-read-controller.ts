import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFoodList } from '../usecases/food-list/food-list-factory'
import { OrderOptions } from '../usecases/food-list/food-list-interfaces'
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

  console.log(sort, order)

  try {
    // chamar factory
    const foodListUseCase = makeFoodList()

    // executa usecase
    const res = await foodListUseCase.execute(sort, orderOption)

    return res
  } catch (err) {
    console.error(err)
  }
}
