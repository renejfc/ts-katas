import { describe, it, expect } from 'vitest'
import { FizzBuzz } from './fizzbuzz';

const fbz = new FizzBuzz()

describe('fizzbuzz rules', () => {
  it("Should return the same number if any of the conditions doesn't apply", () => {

    expect(fbz.checkRules(1)).toBe(1)
    expect(fbz.checkRules(2)).toBe(2)
    expect(fbz.checkRules(4)).toBe(4)
  })

  it("Should return Fizz if it's multiple of 3", () => {
    const res = 'Fizz'

    expect(fbz.checkRules(3)).toBe(res)
    expect(fbz.checkRules(6)).toBe(res)
    expect(fbz.checkRules(12)).toBe(res)
  })

  it("Should return Buzz if it's multiple of 5", () => {
    const res: string = 'Buzz'

    expect(fbz.checkRules(5)).toBe(res)
    expect(fbz.checkRules(10)).toBe(res)
    expect(fbz.checkRules(20)).toBe(res)
  })

  it("Should return FizzBuzz if it's multiple of 3 and 5", () => {
    const res: string = 'FizzBuzz'

    expect(fbz.checkRules(15)).toBe(res)
    expect(fbz.checkRules(30)).toBe(res)
    expect(fbz.checkRules(45)).toBe(res)
  })
})

describe('print method', () => {
  it("Should return numbers from 0 to 100", () => {
    const nums: number[] = fbz.printFrom1To100()

    expect(nums).toBeInstanceOf(Array)
    expect(nums).toHaveLength(99)
  })
})
