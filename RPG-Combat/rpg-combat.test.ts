import { describe, it, expect, test } from 'vitest'
import { Character } from "./rpg-combat";

test('Instance id should increment in every new instantiation', () => {
  const sova: Character = new Character
  const jett: Character = new Character
  const astra: Character = new Character

  expect(sova.id).toBe(1)
  expect(jett.id).toBe(2)
  expect(astra.id).toBe(3)
})

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

  it('Should not deal damage to itself', () => {
    const viper: Character = new Character()

    viper.attack(300, viper)

    expect(viper.healthPoints).toBe(1000)
  })

  it('Current target health should become 0 and must die when damage exceeds its amount', () => {
    const viper: Character = new Character()
    const breach: Character = new Character()

    viper.attack(1100, breach)

    expect(breach.healthPoints).toBe(0)
    expect(breach.isAlive).toBe(false)
  })

  it('Should reduce 50% of the damage when the target is > 5 levels above the attacker', () => {
    const viper: Character = new Character({ level: 7 })
    const breach: Character = new Character()
    
    breach.attack(500, viper)

    expect(viper.healthPoints).toBe(750)
  })

  it('Should increase 50% of the damage when the target is < 5 levels below the attacker', () => {
    const viper: Character = new Character({ level: 7 })
    const breach: Character = new Character()
    
    viper.attack(500, breach)

    expect(breach.healthPoints).toBe(250)
  })
})

describe('Heal method', () => {
  it('Should heal the target', () => {
    const skye: Character = new Character({ hp: 500 })

    skye.heal(300, skye)

    expect(skye.healthPoints).toBe(800)
  })

  it('Should not heal others but itself', () => {
    const sage: Character = new Character({ hp: 700 })
    const skye: Character = new Character({ hp: 700 })

    skye.heal(300, sage)
    skye.heal(300, skye)

    expect(sage.healthPoints).toBe(700)
    expect(skye.healthPoints).toBe(1000)
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
