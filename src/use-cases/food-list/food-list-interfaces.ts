import { Food } from '@/entities/food'

export enum OrderOptions {
  ASC,
  DESC,
}

export interface FoodReadContract {
  getAll(sortProp?: string, order?: OrderOptions): Promise<Food[]>
  findByName(name: string): Promise<Food | null>
  findById(foodId: string): Promise<Food | null>
}
