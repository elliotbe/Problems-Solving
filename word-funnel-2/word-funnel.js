/* A word funnel is a series of words formed by removing one letter at a time
 * from a starting word, keeping the remaining letters in order. Given a word,
 * determine the length of the longest word funnel taht it stats. You may
 * optionally also return the funnel itself (or any funnel tied for the longest,
 * in the case of a tie)
 *
 * Bonus 1: Find the one word in the word list that starts a funnel of length 10.
 *
 * Source: https://tinyurl.com/y7h3ag75
 */

const fs = require('fs')

const getWordsObject = file => {
  let wordsListObject = fs
    .readFileSync(__dirname + '/' + file, 'utf-8')
    .split('\n')
    .slice(0, -1)
    .reduce((obj, word) => {
      const key = word.length
      key in obj ? obj[key].add(word) : (obj[key] = new Set([word]))
      return obj
    }, {})

  return wordsListObject
}

const wordsListObject = getWordsObject('words-list.txt')

const funnel2 = word => {
  const itterFunnel = word => {
    result.push(word)
    for (let i = 0; i < word.length; i++) {
      const nextWord = word.slice(0, i) + word.slice(i + 1)

      if (
        wordsListObject[nextWord.length] &&
        wordsListObject[nextWord.length].has(nextWord) &&
        !result.includes(nextWord)
      ) {
        itterFunnel(nextWord)
      }
    }
  }

  let result = []
  itterFunnel(word)
  let startWord = result[0]
  result = result.map(elem => elem.length)
  result = new Set(result).size

  return [startWord, result]
}

console.log('gnash => ', funnel2('gnash')[1])
console.log('princesses => ', funnel2('princesses')[1])
console.log('turntables => ', funnel2('turntables')[1])
console.log('implosive => ', funnel2('implosive')[1])
console.log('programmer => ', funnel2('programmer')[1])

const getWordsList = file => {
  return fs
    .readFileSync(__dirname + '/' + file, 'utf-8')
    .split('\n')
    .slice(0, -1)
}

const bonus1 = () => {
  const result = getWordsList('words-list.txt')
    .filter(elem => elem.length > 10)
    .map(elem => funnel2(elem))
    .filter(elem => elem[1] === 10)

  return result[0][0]
}

console.log('\nBonus 1')
console.log(bonus1())
