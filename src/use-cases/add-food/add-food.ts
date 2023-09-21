import { Food } from '@/entities/food'
import { randomUUID } from 'crypto'
import { FoodAlreadyExistsError } from '../errors/food-already-exists-error'
import { FoodReadContract } from '../food-list/food-list-interfaces'
import { CreateFoodContract } from './add-food-interface'

export class AddFood {
  constructor(private foodRepository: FoodReadContract & CreateFoodContract) {}

  async execute({
    name,
    quantity,
    calories,
    carbohydrates,
    proteins,
    fats,
    category,
  }: Food) {
    const foodWithSameName = await this.foodRepository.findByName(name)

    if (foodWithSameName) {
      throw new FoodAlreadyExistsError()
    }

    const food = this.foodRepository.create({
      id: randomUUID(),
      name,
      quantity,
      calories,
      carbohydrates,
      proteins,
      fats,
      category,
    })

    return food
  }
}
