import fizzbuzz from './fizzbuzz';

describe('fizzbuzz function', () => {
  it("Should return the same number if any of the conditions doesn't apply", () => {

    expect(fizzbuzz(1)).toBe(1)
    expect(fizzbuzz(2)).toBe(2)
    expect(fizzbuzz(4)).toBe(4)
  })

  it("Should return Fizz if it's multiple of 3", () => {
    const res = 'Fizz'

    expect(fizzbuzz(3)).toBe(res)
    expect(fizzbuzz(6)).toBe(res)
    expect(fizzbuzz(12)).toBe(res)
  })

  it("Should return Buzz if it's multiple of 5", () => {
    const res: string = 'Buzz'

    expect(fizzbuzz(5)).toBe(res)
    expect(fizzbuzz(10)).toBe(res)
    expect(fizzbuzz(20)).toBe(res)
  })

  it("Should return FizzBuzz if it's multiple of 3 and 5", () => {
    const res: string = 'FizzBuzz'

    expect(fizzbuzz(15)).toBe(res)
    expect(fizzbuzz(30)).toBe(res)
    expect(fizzbuzz(45)).toBe(res)
  })
})