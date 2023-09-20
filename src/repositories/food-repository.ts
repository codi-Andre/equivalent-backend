import { Food } from '../entites/food'
import { FoodReadContract } from '../usecases/food-list/food-list-interfaces'
import fakeData from '../db-in-memory/db'

export class FoodRepository implements FoodReadContract {
  private dada: Food[] = fakeData

  getAll(): Promise<Food[]> {
    // buscar no banco lista de alimentos
    return Promise.resolve(this.dada)
  }
}
