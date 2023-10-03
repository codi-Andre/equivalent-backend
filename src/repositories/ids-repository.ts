import { randomUUID } from 'crypto'

export interface IdsRepositoryContract {
  createRandomUUID(): string
}

export class IdsRepository implements IdsRepositoryContract {
  createRandomUUID(): string {
    return randomUUID()
  }
}
