interface ICharacter {
  healthPoints: number
  maxHealthPoints: number
  level: number
  isAlive: boolean
  attack(amount: number, victim: Character): void
  heal(amount: number, victim: Character): void
}

export class Character implements ICharacter {
  healthPoints: number
  maxHealthPoints: number = 1000
  level: number
  isAlive: boolean

  constructor({hp, level, isAlive}: {hp?: number, level?: number, isAlive?: boolean} = {}) {
    this.healthPoints = (typeof hp !== 'undefined') ? hp : 1000
    this.level = level || 1
    this.isAlive = isAlive || (this.healthPoints > 0)
  }

  attack(amount: number, victim: Character): void {
    const hp: any = victim.healthPoints
    
    if(hp < amount ) {
      victim.isAlive = false
      victim.healthPoints = 0
    } else {
      victim.healthPoints -= amount
    }
  }

  heal(amount: number, victim: Character): void {
    if(victim.isAlive) {
      victim.healthPoints = (amount + victim.healthPoints > victim.maxHealthPoints) ? (victim.maxHealthPoints) : (victim.healthPoints + amount)
    }
  }
}