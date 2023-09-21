import { FoodRepository } from '@/repositories/food-repository'
import { AddFood } from './add-food'

export function makeAddFoodRepository() {
  const foodRepository = new FoodRepository()
  const addFoodUseCase = new AddFood(foodRepository)

  return addFoodUseCase
}
