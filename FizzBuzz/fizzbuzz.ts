const fizzbuzz = (num: number): string | number => {
  if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
  if(num % 3 === 0) return 'Fizz'
  if(num % 5 === 0) return 'Buzz'

  return num
}

let num: number = 0
while(num < 100) { num++; console.log(fizzbuzz(num)) }

export default fizzbuzz