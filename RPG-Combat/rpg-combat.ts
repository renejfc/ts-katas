interface ICharacter {
  healthPoints: number
  level: number
  isAlive: boolean
}

export class Character implements ICharacter {
  healthPoints: number = 1000
  level: number = 1
  isAlive: boolean = true
}