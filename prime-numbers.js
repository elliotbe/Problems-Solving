/* Faire apparaitre les nombres premiers compris entre 0 et 100
 * en utilisant une boucle `do while` imbriquées dans une boucle `for`
 *
 * source: AFPA
 */

console.log('2 is prime') // Chuuuuut
const isPrime = (limit) => {
  for (let number = 2; number <= limit; number++) {
    let divider = 2
    let isPrime
    do {
      isPrime = !(number % divider === 0)
    } while (isPrime && divider++ <= Math.floor(Math.sqrt(number)))
    if (isPrime) {
      console.log(number + ' is prime')
    }
  }
}

isPrime(100)
