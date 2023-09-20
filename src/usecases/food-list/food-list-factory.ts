import { FoodRepository } from '../../repositories/food-repository'
import { FoodList } from './food-list'

// Criar dependencias e instancias
export function makeFoodList() {
  const foodListRepository = new FoodRepository()
  const foodListUseCase = new FoodList(foodListRepository)

  return foodListUseCase
}
