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