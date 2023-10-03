import { Food } from '@/entities/food'

export interface DeleteFoodContract {
  delete(foodId: string): Promise<Food | null>
}
