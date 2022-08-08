interface IFizzBuzz {
  printFrom1To100(): number[]
  checkRules(num: number): string | number
}

export class FizzBuzz implements IFizzBuzz {
  printFrom1To100(): number[] {
    const finalNumber: number = 100
    const nums: number[] = []

    while(nums.length !== finalNumber - 1) {
      nums.push(nums.length + 1)
    }

    return nums
  }

  checkRules(num: number): string | number {
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if(num % 3 === 0) return 'Fizz'
    if(num % 5 === 0) return 'Buzz'

    return num
  }
}
