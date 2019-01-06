/* Given an array of 8 integers between 1 and 8, determine whether it represents
 * a valid 8 queens solution.
 *
 * Bonus: You are given an invalid solution where it's possible to swap two
 * numbers and produce a valid solution which you must find. (Be aware that most
 * invalid solutions will not have this property)
 *
 * Source: https://tinyurl.com/ycsrac9v
 */

function qcheck(array) {
  let sameRow = []
  let isSameRow = false
  let isSameDiagonal = false
  array.forEach(num => {
    if (sameRow.find(oldNum => num === oldNum)) {
      isSameRow = true
      return false
    }
    sameRow.push(num)
  })

  if (isSameRow) {
    return false
  }

  array.forEach((num, i) => {
    if (isSameDiagonal) {
      return false
    }
    for (let j = 1; j <= array.length - (i + 1); j++) {
      if (array[i + j] === num - j) {
        isSameDiagonal = true
        return false
      }
      if (array[i + j] === num + j) {
        isSameDiagonal = true
        return false
      }
    }
  })

  if (isSameDiagonal) {
    return false
  }

  return true
}

function qfix(array) {
  let solution = 'no valid solution found'
  let i = 0
  while (i < array.length) {
    array.forEach((num, j) => {
      let newArray = [...array]
      newArray[j] = array[i]
      newArray[i] = array[j]
      if (qcheck(newArray)) {
        solution = newArray
        return solution
      }
      if (qcheck(newArray)) {
        return solution
      }
    })
    i++
  }
  return solution
}

console.log(
  'qcheck([4, 2, 7, 3, 6, 8, 5, 1]) --> ' + qcheck([4, 2, 7, 3, 6, 8, 5, 1]),
  '\nqcheck([2, 5, 7, 4, 1, 8, 6, 3]) --> ' + qcheck([2, 5, 7, 4, 1, 8, 6, 3]),
  '\nqcheck([5, 3, 1, 4, 2, 8, 6, 3]) --> ' + qcheck([5, 3, 1, 4, 2, 8, 6, 3]),
  '\nqcheck([5, 8, 2, 4, 7, 1, 3, 6]) --> ' + qcheck([5, 8, 2, 4, 7, 1, 3, 6]),
  '\nqcheck([4, 3, 1, 8, 1, 3, 5, 2]) --> ' + qcheck([4, 3, 1, 8, 1, 3, 5, 2])
)

console.log(
  'qfix([8, 6, 4, 2, 7, 1, 3, 5]) --> ' + qfix([8, 6, 4, 2, 7, 1, 3, 5]),
  '\nqfix([8, 5, 1, 3, 6, 2, 7, 4]) --> ' + qfix([8, 5, 1, 3, 6, 2, 7, 4]),
  '\nqfix([4, 6, 8, 3, 1, 2, 5, 7]) --> ' + qfix([4, 6, 8, 3, 1, 2, 5, 7]),
  '\nqfix([7, 1, 3, 6, 8, 5, 2, 4]) --> ' + qfix([7, 1, 3, 6, 8, 5, 2, 4])
)
