import { BadRequestError } from '../errors/bad-request-error'
import { ReadFoodContract } from '../food-list/food-list-interfaces'
import { DeleteFoodContract } from './delete-food-interface'

export class DeleteFood {
  constructor(private foodRepository: ReadFoodContract & DeleteFoodContract) {}

  async execute(foodId: string) {
    const food = await this.foodRepository.findById(foodId)

    if (!food) {
      throw new BadRequestError()
    }

    await this.foodRepository.delete(food.id)

    return food.id
  }
}
