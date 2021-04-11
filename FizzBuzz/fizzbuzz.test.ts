import fizzbuzz from './fizzbuzz';

describe('fizzbuzz function', () => {
  it("Should return Fizz if it's multiple of 3", () => {
    const res = 'Fizz'

    expect(fizzbuzz(3)).toBe('res')
    expect(fizzbuzz(6)).toBe('res')
    expect(fizzbuzz(12)).toBe('res')
  })
})