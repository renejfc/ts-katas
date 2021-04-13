import { Character } from "./rpg-combat";

describe('Character created', () => {
  it('Should have 1000 HP', () => {
    const char: Character = new Character()

    expect(char.healthPoints).toBe(1000)
  })

  it('Should be level 1', () => {
    const char: Character = new Character()

    expect(char.level).toBe(1)
  })

  it('Should be alive', () => {
    const char: Character = new Character()

    expect(char.isAlive).toBe(true)
  })
})

describe('Characters can deal damage to anothers Characters', () => {
  it('Dealed damage should be subtracted from the victim health', () => {
    const viper: Character = new Character()
    const breach: Character = new Character()

    viper.attack(300, breach)
    expect(breach.healthPoints).toBe(700)
  })

  it('When damage exceeds the victim current Health it becomes 0 and the victim dies', () => {
    const cypher: Character = new Character()
    const sova: Character = new Character()

    cypher.attack(1100, sova)
    expect(sova.healthPoints).toBe(0)
    expect(sova.isAlive).toBe(false)
  })
})