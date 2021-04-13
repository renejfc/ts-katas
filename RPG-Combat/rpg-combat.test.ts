import { Character } from "./rpg-combat";

describe('Character created', () => {
  it('Should start with 1000 HP', () => {
    const char: Character = new Character()

    expect(char.healthPoints).toBe(1000)
  })

  it('Should start with level 1', () => {
    const char: Character = new Character()

    expect(char.level).toBe(1)
  })

  it('Should start alive', () => {
    const char: Character = new Character()

    expect(char.isAlive).toBe(true)
  })
})

describe('Attack method', () => {
  it('Should subtract dealed damage from the target health', () => {
    const viper: Character = new Character()
    const breach: Character = new Character()

    viper.attack(300, breach)

    expect(breach.healthPoints).toBe(700)
  })

  it('Current target health should become 0 and must die when damage exceeds its amount', () => {
    const viper: Character = new Character()
    const breach: Character = new Character()

    viper.attack(1100, breach)

    expect(breach.healthPoints).toBe(0)
    expect(breach.isAlive).toBe(false)
  })
})

describe('Heal method', () => {
  it('Should heal the target', () => {
    const skye: Character = new Character()
    const sage: Character = new Character({ hp: 500 })

    skye.heal(300, sage)

    expect(sage.healthPoints).toBe(800)
  })

  it('Should not heal dead targets', () => {
    const skye: Character = new Character()
    const sage: Character = new Character({ hp: 0, isAlive: false})

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