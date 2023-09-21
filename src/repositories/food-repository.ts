import { CreateFoodContract } from '@/use-cases/add-food/add-food-interface'
import fakeData from '../db-in-memory/db'
import { Food } from '../entities/food'
import {
  FoodReadContract,
  OrderOptions,
} from '../use-cases/food-list/food-list-interfaces'

export class FoodRepository implements FoodReadContract, CreateFoodContract {
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

  async create(food: Food): Promise<Food> {
    const lastCreated = this.data.at(-1)

    if (lastCreated) {
      food.id = lastCreated.id + 1
      this.data.push(food)
    }

    return food
  }
}
