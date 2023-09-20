import { FoodReadContract } from './food-list-interfaces'

export class FoodList {
  constructor(private foodListRepository: FoodReadContract) {}

  async execute() {
    const foodList = await this.foodListRepository.getAll()
    return foodList
  }
}
