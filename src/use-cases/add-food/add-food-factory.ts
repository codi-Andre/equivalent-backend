import { FoodRepository } from '@/repositories/food-repository'
import { AddFood } from './add-food'
import { IdsRepository } from '@/repositories/ids-repository'

export function makeAddFoodRepository() {
  const foodRepository = new FoodRepository()
  const idsRepository = new IdsRepository()
  const addFoodUseCase = new AddFood(foodRepository, idsRepository)

  return addFoodUseCase
}
