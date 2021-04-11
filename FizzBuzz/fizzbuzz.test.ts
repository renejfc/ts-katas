import fizzbuzz from './fizzbuzz';

describe('fizzbuzz function', () => {
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
})