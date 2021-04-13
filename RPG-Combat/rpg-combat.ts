interface ICharacter {
  healthPoints: number
  level: number
  isAlive: boolean
  attack(amount: number, victim: Character): void
}

export class Character implements ICharacter {
  healthPoints: number
  level: number
  isAlive: boolean

  constructor({hp, level, isAlive}: {hp?: number, level?: number, isAlive?: boolean} = {}) {
    this.healthPoints = hp || 1000
    this.level = level || 1
    this.isAlive = isAlive || true
    
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
}