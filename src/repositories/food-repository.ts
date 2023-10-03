import { CreateFoodContract } from '@/use-cases/add-food/add-food-interface'
import { DeleteFoodContract } from '@/use-cases/delete-food/delete-food-interface'
import fakeData from '../db-in-memory/db'
import { Food } from '../entities/food'
import {
  ReadFoodContract,
  OrderOptions,
} from '../use-cases/food-list/food-list-interfaces'

export class FoodRepository
  implements ReadFoodContract, CreateFoodContract, DeleteFoodContract
{
  private data: Food[] = fakeData

  private sortList(sortProp?: string, order?: OrderOptions) {
    if (!sortProp) {
      return this.data
    }
    const keyFood = sortProp as keyof Food

    const sortedList = [...this.data].sort((firstItem, secondItem) => {
      if (firstItem[keyFood] < secondItem[keyFood])
        return order === OrderOptions.DESC ? 1 : -1
      if (firstItem[keyFood] > secondItem[keyFood])
        return order === OrderOptions.DESC ? -1 : 1
      return 0
    })

    return sortedList
  }

  getAll(sortProp?: string, order?: OrderOptions): Promise<Food[]> {
    const sortedFood = this.sortList(sortProp, order)

    return Promise.resolve(sortedFood)
  }

  async findByName(name: string): Promise<Food | null> {
    const food = this.data.find((item) => item.name === name)

    if (!food) {
      return null
    }

    return food
  }

  async findById(foodId: string): Promise<Food | null> {
    const food = this.data.find((item) => item.id === foodId)

    if (!food) {
      return null
    }

    return food
  }

  async create(food: Food): Promise<Food> {
    this.data.push(food)
    return food
  }

  async delete(foodId: string): Promise<Food | null> {
    const index = this.data.findIndex((item) => item.id === foodId)

    if (index < 0) {
      return null
    }

    const deletedFood = this.data.splice(index, 1)
    return deletedFood[0]
  }
}
