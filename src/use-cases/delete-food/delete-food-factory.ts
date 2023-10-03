import { FoodRepository } from '@/repositories/food-repository'
import { DeleteFood } from './delete-food'

export function makeDeleteFoodRepository() {
  const foodRepository = new FoodRepository()
  const deleteFoodUseCase = new DeleteFood(foodRepository)

  return deleteFoodUseCase
}
