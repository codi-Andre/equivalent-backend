import { ReadFoodContract, OrderOptions } from './food-list-interfaces'

export class FoodList {
  constructor(private foodListRepository: ReadFoodContract) {}

  async execute(sortProp?: string, order?: OrderOptions) {
    const foodList = await this.foodListRepository.getAll(sortProp, order)
    return foodList
  }
}
