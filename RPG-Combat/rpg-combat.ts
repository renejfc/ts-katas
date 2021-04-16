interface ICharacter {
  id: number
  healthPoints: number
  maxHealthPoints: number
  level: number
  isAlive: boolean
  attack(amount: number, victim: Character): void
  heal(amount: number, victim: Character): void
}

export class Character implements ICharacter {
  static instanceCount: number = 0

  id: number
  healthPoints: number
  maxHealthPoints: number = 1000
  level: number
  isAlive: boolean

  constructor({hp, level, isAlive}: {hp?: number, level?: number, isAlive?: boolean} = {}) {
    this.id = ++Character.instanceCount
    this.healthPoints = (typeof hp !== 'undefined') ? hp : 1000
    this.level = level || 1
    this.isAlive = isAlive || (this.healthPoints > 0)
  }

  attack(amount: number, target: Character): void {
    if (this.id != target.id) {
      if(target.healthPoints < amount) {
        target.isAlive = false
        target.healthPoints = 0
      } else {
        target.healthPoints -= amount
      }
    }
  }

  heal(amount: number, victim: Character): void {
    if(victim.isAlive) {
      victim.healthPoints = (amount + victim.healthPoints > victim.maxHealthPoints) ? (victim.maxHealthPoints) : (victim.healthPoints + amount)
    }
  }
}