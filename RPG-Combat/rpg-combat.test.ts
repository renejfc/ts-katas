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
    const viper: Character = new Character()
    const breach: Character = new Character()

    viper.attack(1100, breach)

    expect(breach.healthPoints).toBe(0)
    expect(breach.isAlive).toBe(false)
  })
})

describe('Characters can heal anothers Characters', () => {
  it('Character can heal another', () => {
    const skye: Character = new Character()
    const sage: Character = new Character({ hp: 500 })

    skye.heal(300, sage)

    expect(sage.healthPoints).toBe(800)
  })

  it('Should not heal dead characters', () => {
    const skye: Character = new Character()
    const sage: Character = new Character({ hp: 0})

    skye.heal(300, sage)

    expect(sage.healthPoints).toBe(0)
  })

  it('Should not raise health above 1000', () => {
    const skye: Character = new Character()
    const sage: Character = new Character()

    skye.heal(150, sage)

    expect(sage.healthPoints).toBe(1000)
  })
})