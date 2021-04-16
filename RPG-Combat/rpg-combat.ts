interface ICharacter {
  id: number
  healthPoints: number
  maxHealthPoints: number
  level: number
  isAlive: boolean
  attack(amount: number, target: Character): void
  heal(amount: number, target: Character): void
}

export class Character implements ICharacter {
  static instanceCount: number = 0

  id: number
  healthPoints: number
  maxHealthPoints: number = 1000
  level: number
  isAlive: boolean

  constructor({hp, level, powerAttack, isAlive}: {hp?: number, level?: number, powerAttack?: number, isAlive?: boolean} = {}) {
    this.id = ++Character.instanceCount
    this.healthPoints = (typeof hp !== 'undefined') ? hp : 1000
    this.level = level || 1
    this.isAlive = isAlive || (this.healthPoints > 0)
  }

  attack(amount: number, target: Character): void {
    if(this.level + 4 < target.level) {
      amount = amount / 2
    } else if(this.level > target.level + 4) {
      amount = amount * 1.5
    }

    if (this.id != target.id) {
      if(target.healthPoints < amount) {
        target.isAlive = false
        target.healthPoints = 0
      } else {
        target.healthPoints -= amount
      }
    }
  }

  heal(amount: number, target: Character): void {
    if(target.isAlive && target.id === this.id) {
      target.healthPoints = (amount + target.healthPoints > target.maxHealthPoints) ? (target.maxHealthPoints) : (target.healthPoints + amount)
    }
  }
}