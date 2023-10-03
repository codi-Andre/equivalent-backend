import { Food } from '@/entities/food'

export interface CreateFoodContract {
  create(food: Food): Promise<Food>
}
