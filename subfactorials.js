/* Today we'll look at the subfactorial, defined as the derangement of a set of
 * n objects, or a permutation of the elements of a set such that no elements
 * appears in its original position. We denote it as !n.
 * Today's challenge is to write a subfactorial program. Given an input n, can
 * your program calculate the correct value for n ?
 *
 * Source: https://tinyurl.com/ycfovo3k
 */

const subfact = n => {
  if (n === 0) {
    return 1
  }
  if (n === 1) {
    return 0
  }

  return (n - 1) * (subfact(n - 1) + subfact(n - 2))
}

console.log('!6 --> ' + subfact(6))
console.log('!9 --> ' + subfact(9))
console.log('!14 --> ' + subfact(14))
