/* 5 Friends (let's call them a, b, c, d and e) are playing a game and need to
 * keep track of the scores. Each tme someone scores a point, the letter of his
 * name is typed in lowercase. If someone loses a point, the letter of his name
 * is typed in uppercase. Give the resulting score from highest to lowest.
 *
 * Example input : 'dbbaCEDbdAacCEAadcB'
 * Example output : 'b:2, d:2, a:1, c:0, e:-2'
 *
 * Source: https://tinyurl.com/ycpvzj8g
 */

const input = 'EbAAdbBEaBaaBBdAccbeebaec'

const tally = (input) => {
  const countObject = input.split('').reduce((acc, curr) => {
    const score = curr.charCodeAt() <= 90 ? -1 : 1
    const currLower = curr.toLowerCase()
    acc[currLower] = acc[currLower]
      ? acc[currLower] += score
      : acc[currLower] = 0 + score
    return acc
  }, {})

  let output = []
  for (let keys in countObject) {
    output = [
      ...output,
      [keys, countObject[keys]]
    ]
  }

  return (
    output.sort((a, b) => b[1] - a[1])
      .map((elem) => `${elem[0]}:${elem[1]}`)
      .join(', ')
  )
}

console.log(tally(input))
