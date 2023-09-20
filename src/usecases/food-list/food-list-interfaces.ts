import { Food } from '../../entites/food'

export enum OrderOptions {
  ASC,
  DESC,
}

export interface FoodReadContract {
  getAll(sortProp?: string, order?: OrderOptions): Promise<Food[]>
}
