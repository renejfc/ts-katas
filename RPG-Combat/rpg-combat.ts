interface ICharacter {
  healthPoints: number
  level: number
  isAlive: boolean
  attack(amount: number, victim: Character): void
}

export class Character implements ICharacter {
  healthPoints: number = 1000
  level: number = 1
  isAlive: boolean = true

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