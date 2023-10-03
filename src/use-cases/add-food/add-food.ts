import { Food } from '@/entities/food'
import { FoodAlreadyExistsError } from '../errors/food-already-exists-error'
import { ReadFoodContract } from '../food-list/food-list-interfaces'
import { CreateFoodContract } from './add-food-interface'
import { IdsRepositoryContract } from '@/repositories/ids-repository'

export class AddFood {
  constructor(
    private foodRepository: ReadFoodContract & CreateFoodContract,
    private idsRepository: IdsRepositoryContract,
  ) {}

  async execute({
    name,
    quantity,
    calories,
    carbohydrates,
    proteins,
    fats,
    category,
  }: Food) {
    const foodWithSameName = await this.foodRepository.findByName(name)

    if (foodWithSameName) {
      throw new FoodAlreadyExistsError()
    }

    const food = this.foodRepository.create({
      id: this.idsRepository.createRandomUUID(),
      name,
      quantity,
      calories,
      carbohydrates,
      proteins,
      fats,
      category,
    })

    return food
  }
}
