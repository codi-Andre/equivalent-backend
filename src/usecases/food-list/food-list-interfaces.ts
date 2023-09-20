import { Food } from '../../entites/food'

export interface FoodReadContract {
  getAll(): Promise<Food[]>
}
