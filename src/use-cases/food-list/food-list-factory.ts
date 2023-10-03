import { FoodRepository } from '@/repositories/food-repository'
import { FoodList } from './food-list'

// Criar dependências e instâncias
export function makeFoodList() {
  const foodListRepository = new FoodRepository()
  const foodListUseCase = new FoodList(foodListRepository)

  return foodListUseCase
}
