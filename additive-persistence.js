/* Today's challenge is to calculate the additive persistence of a number,
 * defined as how many loops you have to do summing its digits until you get a
 * single digit number. Your challenge today is to implement a function that
 * calculates the additive persistence of a number.
 *
 * Bonus: Try it without making the number a string, decomposing it into digits
 * while keeping it a number.
 *
 * Source: https://tinyurl.com/ycwydoxf
 */

const sumDigits = (num, count) => {
  if (num < 10) {
    return count
  }
  count++
  let sum = 0
  while (num !== 0) {
    sum += num % 10
    num = (num - (num % 10)) / 10
  }
  num = sum
  return sumDigits(num, count)
}

const addPers = num => {
  return sumDigits(num, 0)
}

console.log('addPers(13) =>', addPers(13))
console.log('addPers(1234) =>', addPers(1234))
console.log('addPers(9876) =>', addPers(9876))
console.log('addPers(199) =>', addPers(199))
