/* Given a string containing only the characters 'x' and 'y', find whether there
 * are the same number of 'x' and 'y'.
 *
 * Bonus: Given a string containing only lowercase letters, find whether every
 * letter that appears in the string appears the same number of times. Don't
 * forget to handle the empty string ('') correctly!
 *
 * Source: https://tinyurl.com/y86ukspc
 */

const balanced = str => {
  const object = [...str].reduce((obj, value) => {
    obj[value] = obj[value] + 1 || 1
    return obj
  }, {})

  return object.x === object.y
}

console.log('balanced()')
console.log(balanced('xxxyyy'))
console.log(balanced('yyyxxx'))
console.log(balanced('xxxyyyy'))
console.log(balanced('yyxyxxyxxyyyyxxxyxyx'))
console.log(balanced('xyxxxxyyyxyxxyxxyy'))
console.log(balanced(''))
console.log(balanced('x'))

const balancedBonus = str => {
  const countArray = Object.values(
    [...str].reduce((obj, value) => {
      obj[value] = obj[value] + 1 || 1
      return obj
    }, {})
  )

  for (const elem of countArray) {
    if (countArray[0] !== elem) return false
  }
  return true
}

console.log('\nbalancedBonus()')
console.log(balancedBonus('xxxyyyzzz'))
console.log(balancedBonus('abccbaabccba'))
console.log(balancedBonus('xxxyyyzzzz'))
console.log(balancedBonus('abcdefghijklmnopqrstuvwxyz'))
console.log(balancedBonus('pqq'))
console.log(balancedBonus('fdedfdeffeddefeeeefddf'))
console.log(balancedBonus('www'))
console.log(balancedBonus('x'))
console.log(balancedBonus(''))
